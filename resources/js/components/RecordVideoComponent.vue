<template>
    <div class="card">
        <div class="card-header">
            <div class="row">
                <div class="col-sm-6 text-left">
                    <h5 class="card-category">Media</h5>
                    <h3 class="card-title">Recording....</h3>
                </div>
                <!-- <div class="col-sm-6">
                    <div class="btn-group btn-group-toggle float-right" data-toggle="buttons">
                    <label class="btn btn-sm btn-primary btn-simple active" id="0">
                        <input type="radio" name="options" checked>
                        <span class="d-none d-sm-block d-md-block d-lg-block d-xl-block">Record</span>
                        <span class="d-block d-sm-none">
                            <i class="tim-icons icon-single-02"></i>
                        </span>
                    </label>
                    </div>
                </div> -->
            </div>
        </div>
        <div class="card-body">
            <button class="btn btn-primary" id="btnRecord">Record</button>
            <button class="btn btn-primary" id="btnStop">Stop</button>
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
        }
    }
</script>
