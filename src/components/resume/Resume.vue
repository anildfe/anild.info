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
                    <app-projects></app-projects>
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
import Projects from './Projects.vue';
export default {
     components: {
        appSidenav: Sidenav,
        appEducation: Education,
        appExperience: Experience,
        appSkills: Skills,
        appProjects: Projects
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

        &_item {
            margin-bottom: 30px;
            padding-bottom: 30px;
            border-bottom: 1px solid rgba(0, 0, 0, 0.1);

            &:last-child {
                border-bottom: none;
            }

            .item-icon {
                width: 60px;
                height: 60px;
                border-radius: 50%;
                background: $primary;

                i {
                    font-size: 22px;
                    color: $white;
                }
            }

            .item-text {
                .date {
                    color: $primary;
                    font-size: 16px;
                    font-weight: 700;
                }
                .title {
                    font-size: 24px;
                    font-weight: 700;
                }
                .place {
                    font-size: 18px;
                    font-weight: 700;
                }
            }
        }
    }
}
</style>


