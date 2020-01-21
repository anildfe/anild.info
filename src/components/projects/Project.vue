<template>
    <div class="project-card" @click="sendDataToProjects(projectData)">
        <!-- <img src="@/assets/images/train.jpg" alt=""> -->
        <img :src="require(`@/assets/images/${projectData.imageName}`)" :alt="projectData.title">
        <div class="project-card_content d-flex justify-content-center align-items-center p-4">
            <h3>{{projectData.title}}</h3>
        </div>
    </div>
</template>

<script>
export default {
    props: ['projectData'],
    methods: {
        sendDataToProjects(projectData) {
            this.$emit('clicked', projectData.details)
        }
    }
}
</script>

<style lang="scss" scoped>
.project-card {
    position: relative;
    overflow: hidden;
    cursor: pointer;
    outline: none;
    border-radius: 5px;

    img {
        width: 100%;
        opacity: 0.4;
        @include transition(ease .6s);
    }

    &_content {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        @include transition(ease .6s);

        h3 {
            font-size: 20px;
            position: relative;
            text-align: center;
            color: $links;

            @include media-breakpoint-only(md) {
                font-size: 16px;
            }

            &:after {
                content: '';
                width: 60px;
                height: 0.15rem;
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


