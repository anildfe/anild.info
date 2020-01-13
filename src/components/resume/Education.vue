<template>
    <section class="resume-section_sub-section education-section">
        <h2>Education</h2>
        <div class="education-section_cards">
            <app-timeline-card></app-timeline-card>
            <app-timeline-card></app-timeline-card>
        </div>
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
.education-section {
    &_cards {
        border-left: 2px solid $lines;
        &:after {
            content: '';
            width: 16px;
            height: 2px;
            background: $lines;
            position: absolute;
            left: 8.5px;
        }
    }

}

</style>