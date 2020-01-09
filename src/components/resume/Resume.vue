<template>
    <section class="resume-section">
        <div class="container">
            <h2 class="mb-4 text-center heading">Resume</h2>
            <div class="row">
                <div class="col-md-3">
                    <app-sidenav></app-sidenav>
                </div>
                <div class="col-md-9">
                    <app-education></app-education>
                    <app-experience></app-experience>
                    <app-skills></app-skills>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import Sidenav from './Sidenav.vue';
import Education from './Education.vue';
import Experience from './Experience.vue';
import Skills from './Skills.vue';

export default {
     components: {
        appSidenav: Sidenav,
        appEducation: Education,
        appExperience: Experience,
        appSkills: Skills
    }
}
</script>

<style lang="scss">
.resume-section {
    &_sub-section {
        margin-bottom: 70px;

        h2 {
            font-weight: 800;
            color: $primary;
            margin-bottom: 30px;
            font-size: 30px;
        }
    }
}
</style>


