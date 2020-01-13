<template>
    <div class="project-card">
        <img src="@/assets/images/train.jpg" alt="">
        <div class="project-card_content d-flex justify-content-center align-items-center p-4">
            <h3>A multi-level marketing company specializing in skincare products</h3>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.project-card {
    position: relative;
    overflow: hidden;
    cursor: pointer;

    img {
        width: 100%;
        opacity: 0.7;
        @include transition(ease .6s);
    }
    &_content {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        opacity: 0;
        @include transition(ease .6s);

        h3 {
            font-size: 20px;
            position: relative;
            text-align: center;
            color: $links;

            &:after {
                content: '';
                width: 60px;
                height: 2px;
                background: $primary;
                position: absolute;
                bottom: -12px;
                left: calc(50% - 30px);
                @include transform(scaleX(0));
                @include transition(all 0.3s ease-in-out 0s);
            }
        }
    }

    &:hover {
        img {
            opacity: 0.2;
            @include transition(ease .8s);
            @include transform(scale(1.1));
        }

        .project-card_content {
            opacity: 1;

            h3 {
                &:after {
                    @include transform(scaleX(1));
                }
            }
        }
    }
}

</style>


