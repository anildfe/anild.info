<template>
<section class="contact-section py-5 surface-background" id="contact">
    <div class="container">
        <div class="row d-flex no-gutters">
            <div class="col-md-12 col-lg-12">
                <h2 class="mb-5 heading">Contact Me</h2>
                <div class="contact-section_list row m-0 pb-3">
                    <div class="col-md-3 col-6 p-0 contact-section_list_item" v-for="contact in contacts" :key="contact.type">
                        <h4>{{ contact.type }}</h4>
                        <p><a :href="contact.url">{{ contact.value }}</a></p>
                    </div>
                </div>
                <div class="contact-section_name row mx-0 align-items-end">
                    <h3 class="mt-5 mb-0" v-if="name">{{name.firstName}} <span>{{name.lastName}}</span></h3>
                    <div class="contact-section_social">
                        <app-social></app-social>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
</template>

<script>
import { mapGetters } from 'vuex';
import Social from './Social.vue';
export default {
    computed: {
        ...mapGetters(['contacts', 'name'])
    },
    components: {
        appSocial: Social
    }
}
</script>

<style lang="scss" scoped>
.contact-section {
    &_list {
        border-bottom: 2px solid $lines;
        &_item {
            h4 {
                font-size: 18px;
                font-weight: 600;
            }
            p {
                font-size: 16px;
                a {
                    color: $secondary;
                    &:hover {
                        color: $primary;
                        text-decoration: none;
                    }
                }
            }
        }
    }

    &_name {
        h3 {
            font-size: 54px;
            color: $headings;
            font-weight: 300;
            line-height: 1;
            
            @include media-breakpoint-down(sm) {
                width: 100%;
                margin-bottom: 15px !important;
            }

            span {
                font-size: 60px;
                color: $primary;
                font-weight: 500;
                display: block;
                margin-left: -3px;
            }
        }
    }

    &_social {
        @include media-breakpoint-up(md) {
            margin-left: auto;
        }
        @include media-breakpoint-down(sm) {
            margin-left: -5px;
        }
    }
}
</style>
