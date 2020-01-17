<template>
    <div class="timeline-card d-flex">
        <div class="timeline-card_point"></div>
        <div class="timeline-card_content row m-0 pl-3">
            <div class="col-md-5">
                <div class="timeline-card_content_timeframe">
                    {{ cardData.timeFrame }}
                </div>
                <h3 class="timeline-card_content_heading mt-2">
                    {{ cardData.heading }}
                </h3>
                <h4 class="timeline-card_content_title">
                    {{ cardData.title }}
                </h4>
            </div>
            <div class="col-md-7">
                <p>
                    {{ cardData.text }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['cardData']
}
</script>

<style lang="scss" scoped>
.timeline-card {
    margin-bottom: 30px;
    padding-bottom: 30px;

    &:last-child {
        border-bottom: none;
        margin-bottom: 0;
        padding-bottom: 0;
    }

    &_point {
        height: 10px;
        width: 10px;
        position: absolute;
        background: $primary;
        border-radius: 50%;
        left: 11.5px;
        box-shadow: 0 0 0 6px $primary-bg;
    }

    &_content {
        &_timeframe {
            font-size: 12px;
            font-weight: 500;
            line-height: 12px;
            opacity: 0.7;
        }
        &_heading {
            font-size: 18px;
            font-weight: 600;
        }
        &_title {
            font-size: 14px;
            font-weight: 500;
        }
    }
}
</style>


