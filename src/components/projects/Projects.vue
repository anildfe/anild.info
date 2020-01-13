<template>
    <section class="projects-section surface-background py-5">
        <div class="container">
            <div class="row d-flex no-gutters">
                <div class="col-md-12 col-lg-12 py-5">
                    <h2 class="mb-5 heading">Projects</h2>
                    <div class="row">
                        <div class="col-md-4 projects-section_item">
                            <app-project></app-project>
                        </div>
                        <div class="col-md-4 projects-section_item">
                            <app-project></app-project>
                        </div>
                        <div class="col-md-4 projects-section_item">
                            <app-project></app-project>
                        </div>
                        <div class="col-md-4 projects-section_item">
                            <app-project></app-project>
                        </div>
                        <div class="col-md-4 projects-section_item">
                            <app-project></app-project>
                        </div>
                        <div class="col-md-4 projects-section_item">
                            <app-project></app-project>
                        </div>
                    </div>
                    <b-modal v-bind:hide-footer="true" size="lg" id="my-modal" centered scrollable  title="">
                        <p class="">Vertically centered modal!</p>
                        <p class="">Vertically centered modal!</p>
                        <p class="">Vertically centered modal!</p>
                        <p class="">Vertically centered modal!</p>
                        <p class="">Vertically centered modal!</p>
                        <p class="">Vertically centered modal!</p>
                        <p class="">Vertically centered modal!</p>
                        <p class="">Vertically centered modal!</p>
                        <p class="">Vertically centered modal!</p>
                    </b-modal>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Project from './Project.vue';

export default {
    components: {
        appProject: Project
    }
}

</script>

<style lang="scss" scoped>
.projects-section {
    &_item {
        overflow: hidden;
        position: relative;
        display: block;
        margin-bottom: 30px;
    }
}

</style>