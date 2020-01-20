<template>
    <section class=" surface-background py-5" id="about">
        <div class="container" v-if="aboutMe">
            <div class="row d-flex no-gutters">
                <div class="col-md-12 col-lg-12 py-5">
                    <h2 class="mb-4 heading">About Me</h2>
                    <!-- <p class="mb-0">{{aboutMe.text}}</p> -->
                    <p class="mb-0" v-html="aboutMe.text"></p>
                </div>
            </div>
            <div class="about-section_expertise">
                <ol class="row d-flex flex-wrap m-0 p-0">
                    <li 
                    v-for="expertiseItem in aboutMe.expertise" 
                    :key="expertiseItem.title"
                    class="col-md-4 d-flex p-0 mb-2">
                        <div class="d-flex flex-column">
                            <h4>{{expertiseItem.title}}</h4>
                            <p>{{expertiseItem.content}}</p>
                        </div>
                    </li>
                </ol>
            </div>
            <div class="about-section_download d-flex mt-4">
                <a :href="aboutMe.cvUrl" class="btn btn-primary">Download CV</a>
            </div>
        </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters(['aboutMe'])
    }
}
</script>

<style lang="scss" scoped>
.about-section {

    &_expertise {
        ol {
            list-style: none;
            counter-reset: my-awesome-counter;

            li {
                counter-increment: my-awesome-counter;

                &::before {
                    content: "0" counter(my-awesome-counter);
                    margin-right: 20px;
                    font-size: 18px;
                    font-weight: 700;
                    color: $primary;
                }

                h4 {
                    font-size: 18px;
                    font-weight: 700;
                    text-transform: uppercase;
                    margin: 5px 0 0;
                }
            }
        }
    }

    &_download {
        a {
            background-color: $primary;
            border-color: $primary;
            text-transform: uppercase;
            font-size: 18px;
            padding: 10px 25px;
            @include transition(all 0.3s ease-in-out 0s);

            &:hover, &:active, &:focus {
                background-color: $primary !important;
                border-color: $primary !important;
                opacity: 0.8;
                @include transition(all 0.3s ease-in-out 0s);
                box-shadow: none;
            }
            
        }

        @include media-breakpoint-down(sm) {
            justify-content: center;
        }
    }
}
</style>


