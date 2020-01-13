<template>
<div>
    <app-nav></app-nav>
    <app-home></app-home>
    <app-about></app-about>
    <app-resume></app-resume>
    <app-projects></app-projects>
    <!-- <app-blog></app-blog> -->
    <app-contact></app-contact>
</div>
</template>

<script>
import Nav from './components/Nav.vue';
import Home from './components/Home.vue';
import About from './components/About.vue';
import Resume from './components/resume/Resume.vue';
import Projects from './components/projects/Projects.vue';
import Blog from './components/Blog.vue';
import Contact from './components/Contact.vue';

export default {
    components: {
        appNav: Nav,
        appHome: Home,
        appAbout: About,
        appResume: Resume,
        appProjects: Projects,
        appBlog: Blog,
        appContact: Contact
    }
}
</script>

<style lang="scss">

</style>
