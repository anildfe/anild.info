<template>
    <div class="timeline-card d-flex">
        <div class="timeline-card_icon d-flex align-items-center justify-content-center">
            <i class="fas fa-graduation-cap"></i>
        </div>
        <div class="timeline-card_text pl-3">
            <span class="date">2008 - 2011</span>
            <h3 class="title">Master of Computer Applications</h3>
            <h4 class="place">Jawaharlal Nehru Technological University</h4>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.timeline-card {
    margin-bottom: 30px;
    padding-bottom: 30px;
    border-bottom: 1px solid rgba(0, 0, 0, 0.1);

    &:last-child {
        border-bottom: none;
    }

    &_icon {
        min-width: 60px;
        height: 60px;
        border-radius: 50%;
        background: $primary;

        i {
            font-size: 22px;
            color: $white;
        }
    }

    &_text {
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
</style>


