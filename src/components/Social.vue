<template>
    <div 

    class="social-section py-1">
        <ul class="d-inline-flex p-0 justify-content-around">
            <li v-for="social in socials" :key="social.title">
                <a :href="social.url" class="d-flex justify-content-center align-items-center" target="_new"><i class="fab" :class="social.iconClass"></i></a>
            </li>
        </ul>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
    computed: {
        ...mapGetters(['socials'])
    }
}
</script>

<style lang="scss" scoped>
.social-section {
    ul {
        list-style: none;
        margin: 0 auto;
        li {
            margin: 0 10px;
            a {
                width: 38px;
                height: 38px;
                text-decoration: none;
                border-radius: 3px;
                transition: all .3s ease;
                border: 2px solid $grey2;
                background: $grey2;

                i {
                    font-size: 20px;
                    color: $icons;
                }

                &:hover {
                    transition: all .3s ease;
                    background-color: $grey3;

                    i {
                        color: $links;
                    }
                }
            }
        }
    }
}
</style>


