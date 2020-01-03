<template>
    <section class="resume-section_sub-section projects-section">
        <h2>Projects</h2>
        <div>
           <app-project></app-project>
           <app-project></app-project>
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