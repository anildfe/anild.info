<template>
  <div>
    <app-sidenav></app-sidenav>
    <div class="container-fluid p-0">
      <!-- <app-home></app-home>
      <hr> -->
      <app-about></app-about>
      <hr>
      <app-summary></app-summary>
      <hr>
      <app-experience></app-experience>
      <hr>
      <app-skills></app-skills>
      <hr>
      <app-projects></app-projects>
    </div>
  </div>
</template>

<script>
import Sidenav from './components/Sidenav.vue';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Summary from './components/Summary.vue';
import Experience from './components/Experience.vue';
import Skills from './components/Skills.vue';
import Projects from './components/Projects.vue';
export default {
  components: {
    appSidenav: Sidenav,
    appHome: Home,
    appAbout: About,
    appSummary: Summary,
    appExperience: Experience,
    appSkills: Skills,
    appProjects: Projects
  }
}
</script>

<style lang="scss"></style>
