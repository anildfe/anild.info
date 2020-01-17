<template>
    <section class="projects-section surface-background py-5" id="projects">
        <div class="container">
            <div class="row d-flex no-gutters">
                <div class="col-md-12 col-lg-12 py-5">
                    <h2 class="mb-5 heading">Projects</h2>
                    <div class="row">
                        <div class="col-md-4 projects-section_item" v-for="project in projects" :key="project.id">
                            <app-project :projectData="project" @clicked="openProjectDetails"></app-project>
                        </div>
                    </div>
                </div>
                <app-project-details-modal :projectDetails="projectDetailsData"></app-project-details-modal>
            </div>
        </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex';
import Project from './Project.vue';
import ProjectDetailsModal from './Project-details-modal.vue';

export default {
    data() {
        return {
            projectDetailsData: ''
        }
    },
    components: {
        appProject: Project,
        appProjectDetailsModal: ProjectDetailsModal
    },
    computed: {
        ...mapGetters(['projects'])
    },
    methods: {
        openProjectDetails(project) {
            this.projectDetailsData = project;
            this.$root.$emit('bv::show::modal', 'project-modal');
        }
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