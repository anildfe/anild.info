<template>
    <b-modal v-bind:hide-footer="true" size="lg" id="project-modal" centered scrollable>
        <div class="px-4 project-details-content">
            <div>
                <h4>ROLE</h4>
                <p>{{projectDetails.role}}</p>
            </div>
            <div>
                <h4>TECHNICAL STACK USED</h4>
                <p>
                    <template v-for="(stack, index) in projectDetails.stack">
                        {{stack}}<template v-if="index + 1 < projectDetails.stack.length">, </template> 
                    </template>
                </p>
            </div>
            <div>
                <h4>WORK DONE</h4>
                <ul>
                    <li v-for="workDone in projectDetails.workDone" :key="workDone">
                        {{workDone}}
                    </li>
                </ul>
            </div>
        </div>
    </b-modal>
</template>

<script>
export default {
    props: ['projectDetails']
}
</script>

<style lang="scss" scoped>
.project-details-content {
    h4 {
        font-size: 18px;
        text-decoration: underline;
    }

    ul li p {
        margin-bottom: 10px;
    }
}
</style>
