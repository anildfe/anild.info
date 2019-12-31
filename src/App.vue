<template>
<div>
    <app-nav></app-nav>
    <app-home></app-home>
    <app-about></app-about>
    <app-resume></app-resume>
</div>
</template>

<script>
import Nav from './components/Nav.vue';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Resume from './components/resume/Resume.vue';
export default {
    components: {
        appNav: Nav,
        appHome: Home,
        appAbout: About,
        appResume: Resume
    }
}
</script>

<style lang="scss">

</style>
