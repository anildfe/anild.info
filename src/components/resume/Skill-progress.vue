<template>
    <div class="progress-wrap">
        <h3>HTML <span>90%</span></h3>
        <b-progress height="5px" :value="90"></b-progress>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.progress-wrap {
    h3 {
        font-size: 16px;
        font-weight: 600;
        text-transform: uppercase;

        span {
            float: right;
            color: $primary;
        }
    }
    .progress {
        border-radius: 0;
    }
}

</style>


