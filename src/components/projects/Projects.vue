<template>
    <section class="projects-section surface-background py-5" id="projects">
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
                </div>
                <app-project-details-modal></app-project-details-modal>
            </div>
        </div>
    </section>
</template>

<script>
import Project from './Project.vue';
import ProjectDetailsModal from './Project-details-modal.vue';

export default {
    components: {
        appProject: Project,
        appProjectDetailsModal: ProjectDetailsModal
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