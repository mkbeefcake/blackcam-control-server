<?php

namespace App\Events;

use Illuminate\Broadcasting\Channel;
use Illuminate\Broadcasting\InteractsWithSockets;
use Illuminate\Broadcasting\PresenceChannel;
use Illuminate\Broadcasting\PrivateChannel;
use Illuminate\Contracts\Broadcasting\ShouldBroadcast;
use Illuminate\Foundation\Events\Dispatchable;
use Illuminate\Queue\SerializesModels;
use Illuminate\Contracts\Broadcasting\ShouldBroadcastNow;

class ActionEvent implements ShouldBroadcastNow
{
    use Dispatchable, InteractsWithSockets, SerializesModels;

    public $actionId;
    public $actionData;

    /**
     * Create a new event instance.
     *
     * @return void
     */
    public function __construct($actionId, $actionData)
    {
        $this->actionId = $actionId;
        $this->actionData = $actionData;
    }

    /**
     * Get the channels the event should broadcast on.
     *
     * @return \Illuminate\Broadcasting\Channel|array
     */
    public function broadcastOn()
    {
        return new Channel('blackcam-control-channel');
    }

    public function broadcastWith() 
    {
        return [
            'actionId' => $this->actionId,
            'actionData' => $this->actionData,
        ];
    }
}
