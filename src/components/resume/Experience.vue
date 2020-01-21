<template>
    <section class="resume-section_sub-section experience-section" id="exp">
        <h2>Experience</h2>
        <div class="experience-section_cards ml-4">
            <app-timeline-card v-for="experienceItem in experience" :key="experienceItem.title" :cardData="experienceItem"></app-timeline-card>
        </div>
    </section>
</template>

<script>
import { mapGetters } from 'vuex';
import TimelineCard from './Timeline-card.vue';
export default {
    components: {
        appTimelineCard: TimelineCard
    },
    computed: {
        ...mapGetters(['experience'])
    }
}
</script>

<style lang="scss" scoped>
.experience-section {
    &_cards {
        border-left: 2px solid $lines;
        &:after {
            content: '';
            width: 16px;
            height: 2px;
            background: $lines;
            position: absolute;
            left: 32px;
        }
    }
}

</style>