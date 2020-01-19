<template>
    <section class="blog-section py-5" id="blog">
        <div class="container">
            <div class="row d-flex no-gutters">
                <div class="col-md-12 col-lg-12 py-5">
                    <h2 class="mb-5 heading">Blog</h2>
                    <div class="row justify-content-center">
                        <div class="col-md-4 blog-section_item" v-for="post in blog" :key="post.guid">
                            <app-post :postData="post"></app-post>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import Post from './Post.vue';

export default {
    methods: {
        ...mapActions(['fetchBlogData'])
    },
    computed: {
        ...mapGetters(['blog'])
    },
    created() {
        this.fetchBlogData();
    },
    components: {
        appPost: Post
    }
}
</script>

<style lang="scss" scoped>

</style>


