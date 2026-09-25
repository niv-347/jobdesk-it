<?php

namespace App\Console\Commands;

use App\Events\ClientUpdated;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Event;

class BroadcastClientUpdates extends Command
{
    protected $signature = 'monitor:broadcast-clients';
    protected $description = 'Broadcast client monitoring updates via WebSocket';

    public function handle(): void
    {
        $this->info('Broadcasting client updates... Press Ctrl+C to stop.');

        while (true) {
            $clients = $this->scanNetwork();

            if (!empty($clients)) {
                event(new ClientUpdated($clients));

                $this->line('Broadcasted ' . count($clients) . ' clients at ' . now()->format('H:i:s'));
            } else {
                $this->warn('Tidak ada perangkat yang ditemukan.');
            }

            sleep(5);
        }
    }

    protected function scanNetwork(): array
    {
        $subnets = ['255.255.255.0', '192.168.1.', '192.168.0.', '10.0.0.', '172.16.0.', '172.31.255.'];
        $clients = [];

        foreach ($subnets as $subnet) {
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
                }
            }
        }

        return $clients;
    }

    protected function ping(string $ip): bool
    {
        if (stripos(PHP_OS, 'WIN') === 0) {
            $output = null;
            $return = null;

            exec("ping -n 1 -w 100 {$ip}", $output, $return);

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
