<div class="sidebar">
    <div class="sidebar-wrapper">
        <div class="logo">
            <a href="{{ route('home') }}" class="simple-text logo-mini">{{ __('BM') }}</a>
            <a href="{{ route('home') }}" class="simple-text logo-normal">{{ __('Camera List') }}</a>
        </div>
        <ul class="nav" id="cameraList">
        </ul>
    </div>
</div>
<script>

function refreshCameraList(cameraList) {
    var child = "";
    for (const [key, value] of Object.entries(cameraList)) {
        console.log(key, value);
        $('#cameraList').empty();
        child += "<li><a id='" + key + "'><i class='tim-icons icon-camera-18'></i><p>" + value + "</p></a></li>";
    }
    $('#cameraList').append(child);
}

</script>
