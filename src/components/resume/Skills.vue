<template>
    <section class="resume-section_sub-section skills-section">
        <h2>Skills</h2>
        <div class="row">
            <div class="col-md-6 mb-4">
                <app-skill-progress></app-skill-progress>
            </div>
            <div class="col-md-6 mb-4">
                <app-skill-progress></app-skill-progress>
            </div>
            <div class="col-md-6 mb-4">
                <app-skill-progress></app-skill-progress>
            </div>
            <div class="col-md-6 mb-4">
                <app-skill-progress></app-skill-progress>
            </div>
            <div class="col-md-6 mb-4">
                <app-skill-progress></app-skill-progress>
            </div>
            <div class="col-md-6 mb-4">
                <app-skill-progress></app-skill-progress>
            </div>
        </div>
    </section>
</template>

<script>
import SkillProgress from './Skill-progress.vue'
export default {
    components: {
        appSkillProgress: SkillProgress
    }
}

</script>

<style lang="scss" scoped>
    
</style>