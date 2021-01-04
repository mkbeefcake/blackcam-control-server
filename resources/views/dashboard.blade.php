@extends('layouts.app')

@section('content')
    <div class="row">
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <div class="row">
                        <div class="col-sm-6 text-left">
                            <h5 class="card-category">Lens</h5>
                            <h2 class="card-title">Set Auto focus</h2>
                        </div>
                        <div class="col-sm-6">
                            <div class="btn-group btn-group-toggle float-right" data-toggle="buttons">
                            <label class="btn btn-sm btn-primary btn-simple active" id="0">
                                <input type="radio" name="options" checked>
                                <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block">Focus</span>
                                <span class="d-block d-sm-none">
                                    <i class="tim-icons icon-single-02"></i>
                                </span>
                            </label>
                            <label class="btn btn-sm btn-primary btn-simple" id="1">
                                <input type="radio" class="d-none d-sm-none" name="options">
                                <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block">Aperture</span>
                                <span class="d-block d-sm-none">
                                    <i class="tim-icons icon-gift-2"></i>
                                </span>
                            </label>
                            <label class="btn btn-sm btn-primary btn-simple" id="2">
                                <input type="radio" class="d-none" name="options">
                                <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block">Zoom</span>
                                <span class="d-block d-sm-none">
                                    <i class="tim-icons icon-tap-02"></i>
                                </span>
                            </label>
                            <label class="btn btn-sm btn-primary btn-simple" id="2">
                                <input type="radio" class="d-none" name="options">
                                <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block">Stabilisation</span>
                                <span class="d-block d-sm-none">
                                    <i class="tim-icons icon-tap-02"></i>
                                </span>
                            </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <button class="btn btn-primary" id="btnAutoFocus">Auto Focus</button>
                </div>
            </div>
        </div>
        <div class="col-12">
            <div class="card">
                <div class="card-header">
                    <div class="row">
                        <div class="col-sm-6 text-left">
                            <h5 class="card-category">Video</h5>
                            <h3 class="card-title">Recording video</h3>
                        </div>
                        <div class="col-sm-6">
                            <div class="btn-group btn-group-toggle float-right" data-toggle="buttons">
                            <label class="btn btn-sm btn-primary btn-simple active" id="0">
                                <input type="radio" name="options" checked>
                                <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block">Record</span>
                                <span class="d-block d-sm-none">
                                    <i class="tim-icons icon-single-02"></i>
                                </span>
                            </label>
                            <label class="btn btn-sm btn-primary btn-simple" id="2">
                                <input type="radio" class="d-none" name="options">
                                <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block">Format</span>
                                <span class="d-block d-sm-none">
                                    <i class="tim-icons icon-tap-02"></i>
                                </span>
                            </label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                    <button class="btn btn-primary" id="btnRecord">Record</button>
                </div>
            </div>
        </div>
        <div class="col-4">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-category">Information</h5>
                    <h3 class="card-title">System</h3>
                </div>
                <div class="card-body">
                    <label id="ipAddress">{{ __('IP Address : 192.168.1.1') }}</label><br/>
                    <label id="osType" >{{ __('Operating System: Windows 10') }}</label>
                </div>
            </div>
        </div>
        <div class="col-4">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-category">Disk Usage</h5>
                    <h3 class="card-title">Used Space</h3>
                </div>
                <div class="card-body">
                </div>
            </div>
        </div>
        <div class="col-4">
            <div class="card">
                <div class="card-header">
                    <h5 class="card-category">Disk Usage</h5>
                    <h3 class="card-title">Remained Space</h3>
                </div>
                <div class="card-body">
                </div>
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

    })

    function updateSelectedCamera(statusObject) {
        if (statusObject.type == "get-info") {
            console.log("updateSelectedCamera is called");

            $('#ipAddress').text('IP Address : ' + statusObject.deviceInfo.ipAddress);
            $('#osType').text('Operating System: ' + statusObject.deviceInfo.osName);
        }
    }

    </script>
@endpush
