<div class="sidebar">
    <div class="sidebar-wrapper">
        <div class="logo">
            <a href="{{ route('home') }}" class="simple-text logo-mini">{{ __('BM') }}</a>
            <a href="{{ route('home') }}" class="simple-text logo-normal">{{ __('Camera List') }}</a>
        </div>
        <ul class="nav">
            <li @if ($pageSlug == 'dashboard') class="active " @endif>
                <a href="{{ route('home') }}">
                    <i class="tim-icons icon-camera-18"></i>
                    <p>{{ __('camera 1') }}</p>
                </a>
            </li>
        </ul>
    </div>
</div>
