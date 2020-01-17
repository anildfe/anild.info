<template>
    <section class="resume-section_sub-section education-section" id="edu">
        <h2>Education</h2>
        <div class="education-section_cards">
            <app-timeline-card v-for="educationItem in education" :key="educationItem.title" :cardData="educationItem"></app-timeline-card>
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
        ...mapGetters(['education'])
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