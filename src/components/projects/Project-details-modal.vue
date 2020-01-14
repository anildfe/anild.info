<template>
    <b-modal v-bind:hide-footer="true" size="lg" id="my-modal" centered scrollable>
        <div class="px-4 project-details-content">
            <div>
                <h4>ROLE</h4>
                <p>UI Lead</p>
            </div>
            <div>
                <h4>TECHNICAL STACK USED</h4>
                <p>Tech stack list</p>
            </div>
            <div>
                <h4>WORK DONE</h4>
                <ul>
                    <li>
                        Setup the Ionic project from scratch and built complete.
                    </li>
                    <li>
                        Completely owned the train status module which is the most complex functionality of the application.
                    </li>
                    <li>
                        Worked on performance optimization.
                    </li>
                    <li>
                        AEM integration for content pages by consuming REST services.
                    </li>
                    <li>
                        Wrote unit test cases using Jasmine and Karma.
                    </li>
                </ul>
            </div>
        </div>
    </b-modal>
</template>

<script>
export default {

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
