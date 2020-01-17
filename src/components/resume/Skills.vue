<template>
    <section class="resume-section_sub-section skills-section mb-0" id="skills">
        <h2>Skills</h2>
        <div class="row">
            <div class="col-md-6" v-for="(skill, index) in skills" :key="skill.name" :class="{'mt-5': index > 1}">
                <app-skill-progress :skillData="skill"></app-skill-progress>
            </div>
        </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex';
import SkillProgress from './Skill-progress.vue'
export default {
    components: {
        appSkillProgress: SkillProgress
    },
    computed: {
        ...mapGetters(['skills'])
    }
}

</script>

<style lang="scss" scoped>
    
</style>