<template>
    <a class="post-card d-inline-block" :href="postData.link" target="_new">
        <!-- <img src="@/assets/images/train.jpg" alt=""> -->
        <img :src="postData.thumbnail">
        <div class="post-card_content d-flex mt-2">
            <h3>{{ postData.title }}</h3>
        </div>
    </a>
</template>

<script>
export default {
    props: ['postData']
}
</script>

<style lang="scss" scoped>
.post-card {
    position: relative;
    overflow: hidden;
    cursor: pointer;
    outline: none;
    border-radius: 5px;
    text-decoration: none;

    img {
        width: 100%;
        opacity: 0.4;
        @include transition(ease .6s);
    }

    &_content {
        @include transition(ease .6s);

        h3 {
            font-size: 18px;
            position: relative;
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
        text-decoration: none;

        img {
            opacity: 0.2;
            @include transition(ease .8s);
        }

        .post-card_content {
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


