<template>
    <a class="post-card d-inline-block" :href="postData.link" target="_new">
        <div class="post-card_img">
            <img :src="postData.thumbnail">
        </div>
        <h3 class="post-card_title mt-2">{{ postData.title }}</h3>
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

    &_img {
        width: 100%;
        overflow: hidden;

        img {
            width: 100%;
            @include transform(scale(1));
            @include transition(ease .8s);

            &:hover {
                @include transform(scale(1.05));
                //@include transition(ease .8s);
            }
        }
    }

    &_title {
        font-size: 18px;
        position: relative;
        color: $links;
    }

    &:hover {
        text-decoration: none;
    }
}

</style>


