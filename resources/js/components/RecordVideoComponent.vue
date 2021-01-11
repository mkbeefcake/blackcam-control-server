<template>
    <div class="card">
        <div class="card-header">
            <div class="row">
                <div class="col-sm-6 text-left">
                    <h5 class="card-category">Media</h5>
                    <h3 class="card-title">Recording....</h3>
                </div>
            </div>
        </div>
        <div class="card-body">
            <button class="btn btn-primary" id="btnRecord" v-on:click="setRecord">Record</button>
            <button class="btn btn-primary" id="btnStop" v-on:click="setStop">Stop</button>
            <div class="form-group">
                <label id="transportmode"></label>
                <label id="remainingTime"></label>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    mounted() {
        console.log('RecordVideo-Component mounted.')
    },
    methods: {
        sendTransportModeCommand: function(command) {
            if (selectedCameraId == "")
                socket.emit('admin', null, JSON.stringify(command));
            else
                socket.emit('admin', selectedCameraId, JSON.stringify(command));
        },
        setRecord: function(event) {
            debugger;
            var command = {
                type : 'record'
            };

            this.sendTransportModeCommand(command);
            alert('Sent Record command');
        },
        setStop: function(event) {
            debugger;
            var command = {
                type : 'preview'
            };

            this.sendTransportModeCommand(command);
            alert('Sent Stop command');
        }
    }
}
</script>
