<?php

namespace App\Console\Commands;

use App\Events\ClientUpdated;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Event;

class MonitorScan extends Command
{
    protected $signature = 'monitor:scan';
    protected $description = 'Scan jaringan lokal untuk monitoring PC client';

    protected array $subnets = [
        '192.168.1.',
        '192.168.0.',
        '10.0.0.',
        '172.16.0.',
    ];

    protected int $timeout = 100; // ms

    public function handle(): void
    {
        $this->info('Scanning jaringan lokal...');

        $clients = [];

        foreach ($this->subnets as $subnet) {
            $this->line("Scan subnet {$subnet}0/24");

            for ($i = 1; $i < 255; $i++) {
                $ip = $subnet . $i;

                if ($this->ping($ip)) {
                    $mac = $this->getMacAddress($ip);
                    $hostname = gethostbyaddr($ip) ?: $ip;

                    $clients[] = [
                        'id' => md5($ip),
                        'name' => strtoupper($hostname),
                        'ip' => $ip,
                        'mac' => $mac,
                        'status' => 'online',
                        'lastSeen' => 'Baru saja',
                        'os' => $this->guessOs($ip, $mac),
                    ];

                    $this->line("  <fg=green>●</> {$ip} ({$mac})");
                }
            }
        }

        if (empty($clients)) {
            $this->warn('Tidak ada perangkat yang ditemukan.');
        }

        $this->info('Broadcasting ' . count($clients) . ' clients...');

        Event::dispatch(new ClientUpdated($clients));

        $this->info('Selesai.');
    }

    protected function ping(string $ip): bool
    {
        if (stripos(PHP_OS, 'WIN') === 0) {
            $output = null;
            $return = null;

            exec("ping -n 1 -w {$this->timeout} {$ip}", $output, $return);

            return $return === 0;
        }

        $output = null;
        $return = null;

        exec("ping -c 1 -W 1 {$ip}", $output, $return);

        return $return === 0;
    }

    protected function getMacAddress(string $ip): string
    {
        $output = null;
        $result = null;

        if (stripos(PHP_OS, 'WIN') === 0) {
            exec("arp -a {$ip}", $output, $result);
        } else {
            exec("arp -a {$ip}", $output, $result);
        }

        $output = implode("\n", $output);

        if (preg_match('/([0-9A-Fa-f]{2}[:-]){5}([0-9A-Fa-f]{2})/', $output, $matches)) {
            return strtoupper(str_replace('-', ':', $matches[0]));
        }

        return '00:00:00:00:00:00';
    }

    protected function guessOs(string $ip, string $mac): string
    {
        $output = null;
        exec("nbtstat -A {$ip} 2>nul", $output);

        $output = implode("\n", $output);

        if (stripos($output, 'WORKGROUP') !== false || stripos($output, 'WINDOWS') !== false) {
            return 'Windows';
        }

        return 'Unknown';
    }
}
