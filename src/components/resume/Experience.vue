<template>
    <section class="resume-section_sub-section experience-section">
        <h2>Experience</h2>
        <app-timeline-card></app-timeline-card>
        <app-timeline-card></app-timeline-card>
    </section>
</template>

<script>
import TimelineCard from './Timeline-card.vue';
export default {
    components: {
        appTimelineCard: TimelineCard
    }
}
</script>

<style lang="scss" scoped>

</style>