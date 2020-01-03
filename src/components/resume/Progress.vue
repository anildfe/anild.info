<template>
    <div class="progress-wrap">
        <h3>HTML <span>90%</span></h3>
        <b-progress height="12px" :value="90" variant="info"></b-progress>
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
        span {
            float: right;
        }
    }
}

</style>


