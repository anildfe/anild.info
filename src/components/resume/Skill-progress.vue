<template>
    <div class="progress-wrap">
        <h3>{{skillData.name}} <span>{{skillData.percentage}}%</span></h3>
        <b-progress height="5px" :value="skillData.percentage"></b-progress>
    </div>
</template>

<script>
export default {
    props: ['skillData']
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


