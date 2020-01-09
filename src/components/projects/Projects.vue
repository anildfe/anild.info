<template>
    <section class="projects-section">
        <h2 class="mb-4 text-center heading">Projects</h2>
        <div class="row">
           <div class="col-md-4 mb-4">
               <app-project></app-project>
               <b-modal id="modal-1" title="BootstrapVue">
                    <p class="my-4">Hello from modal!</p>
                </b-modal>
           </div>
           <div class="col-md-4 mb-4">
               <app-project></app-project>
           </div>
           <div class="col-md-4 mb-4">
               <app-project></app-project>
           </div>
           <div class="col-md-4 mb-4">
               <app-project></app-project>
           </div>
           <div class="col-md-4 mb-4">
               <app-project></app-project>
           </div>
           <div class="col-md-4 mb-4">
               <app-project></app-project>
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

</style>