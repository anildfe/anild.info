<template>
    <section class="resume-section_sub-section skills-section">
        <h2>Skills</h2>
        <div class="row">
            <div class="col-md-4 mb-3">
                <app-progress></app-progress>
            </div>
            <div class="col-md-4 mb-3">
                <app-progress></app-progress>
            </div>
            <div class="col-md-4 mb-3">
                <app-progress></app-progress>
            </div>
            <div class="col-md-4 mb-3">
                <app-progress></app-progress>
            </div>
            <div class="col-md-4 mb-3">
                <app-progress></app-progress>
            </div>
            <div class="col-md-4 mb-3">
                <app-progress></app-progress>
            </div>
        </div>
    </section>
</template>

<script>
import Progress from './Progress.vue'
export default {
    components: {
        appProgress: Progress
    }
}

</script>

<style lang="scss" scoped>
    
</style>