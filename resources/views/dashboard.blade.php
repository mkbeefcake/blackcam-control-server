@extends('layouts.app')

@section('content')
<div id="app">
    <div class="row">
        <div class="col-12">
            <lens-component></lens-component>
        </div>
        <div class="col-12">
            <video-component></video-component>
        </div>
        <div class="col-4">
            <systeminfo-component></systeminfo-component>
        </div>
    </div>
</div>
@endsection

@push('socketjs')
    <script src="{{ asset('black') }}/js/socket.io.js"></script>
    <script>
    var selectedCameraId = "";
    var socket;

    $(function(){
        socket = io("http://127.0.0.1:11000");
        
        socket.on('echo', function(msg) {
            socket.emit('peername', 'admin');
        });

        socket.on('device-added', function(socketId, msg) {
            console.log('device-added callback is called');
            if (socket.id == socketId) {
                console.log('This is me');
            }
            else {
                console.log('New device: ' + msg);
            }
            refreshCameraList(JSON.parse(msg));
        });

        socket.on('device-removed', function(socketId, msg){
            console.log('device-removed callback is called');
            refreshCameraList(JSON.parse(msg));
        });

        socket.on('status', function(socketId, msg) {
            console.log('status callback is called');

            if (socketId == selectedCameraId) 
                updateSelectedCamera(JSON.parse(msg));
        })

        $('#btnAutoFocus').click(function() {
            debugger;
            var command = {
                type : 'auto-focus'
            };

            if (selectedCameraId == "")
                socket.emit('admin', null, JSON.stringify(command));
            else
                socket.emit('admin', selectedCameraId, JSON.stringify(command));

            alert('Sent Auto-Focus command');
        })

        $('#btnRecord').click(function() {
            debugger;
            var command = {
                type : 'record'
            };

            if (selectedCameraId == "")
                socket.emit('admin', null, JSON.stringify(command));
            else
                socket.emit('admin', selectedCameraId, JSON.stringify(command));

            alert('Sent Record command');
        })
        $('#btnStop').click(function() {
            debugger;
            var command = {
                type : 'preview'
            };

            if (selectedCameraId == "")
                socket.emit('admin', null, JSON.stringify(command));
            else
                socket.emit('admin', selectedCameraId, JSON.stringify(command));

            alert('Sent Stop command');
        })

    })

    function updateSelectedCamera(statusObject) {
        if (statusObject.type == "get-info") {
            console.log("get-info is called");

            $('#ipAddress').text('IP Address : ' + statusObject.deviceInfo.ipAddress);
            $('#osType').text('Operating System: ' + statusObject.deviceInfo.osName);
        }
        else if (statusObject.type == "transport-mode") {
            console.log("transport-mode is called");

            $('#transportmode').text(statusObject.transportMode);
        }
        else if (statusObject.type == "remaining-time") {
            console.log("remaining-time is called");

            $('#remainingTime').text(statusObject.remainingTimeString);
        }
    }

    </script>
@endpush
