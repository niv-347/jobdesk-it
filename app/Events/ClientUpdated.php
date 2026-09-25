<?php

namespace App\Events;

use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;

class ClientUpdated implements ShouldBroadcastNow
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public array $clients;

    public function __construct(array $clients)
    {
        $this->clients = $clients;
    }

    public function broadcastOn(): array
    {
        return [
            new PrivateChannel('monitor-client'),
        ];
    }

    public function broadcastAs(): string
    {
        return 'client.updated';
    }
}
