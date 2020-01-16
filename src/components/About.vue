<template>
    <section class=" surface-background py-5" id="about">
        <div class="container">
            <div class="row d-flex no-gutters">
                <div class="col-md-12 col-lg-12 py-5">
                    <h2 class="mb-4 heading">About Me</h2>
                    <p class="mb-0">A small river named Duden flows by their place and supplies it with the necessary regelialia.A small river named Duden flows by their place and supplies it with the necessary regelialia.A small river named Duden flows by their place and supplies it with the necessary regelialia.A small river named Duden flows by their place and supplies it with the necessary regelialia.A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                </div>
            </div>
            <div class="about-section_expertise">
                <ol class="row d-flex flex-wrap m-0 p-0">
                    <li class="col-md-4 d-flex p-0">
                        <div class="d-flex flex-column">
                            <h4>Frontend development</h4>
                            <p>Content</p>
                        </div>
                    </li>
                    <li class="col-md-4 d-flex p-0">
                        <div class="d-flex flex-column">
                            <h4>UI Architecture</h4>
                            <p>Content</p>
                        </div>
                    </li>
                    <li class="col-md-4 d-flex p-0">
                        <div class="d-flex flex-column">
                            <h4>Responsive web development</h4>
                            <p>Content</p>
                        </div>
                    </li>
                    <li class="col-md-4 d-flex p-0">
                        <div class="d-flex flex-column">
                            <h4>HYbrid mobile development</h4>
                            <p>Content</p>
                        </div>
                    </li>
                    <li class="col-md-4 d-flex p-0">
                        <div class="d-flex flex-column">
                            <h4>Accessibility and security</h4>
                            <p>Content</p>
                        </div>
                    </li>
                    <li class="col-md-4 d-flex p-0">
                        <div class="d-flex flex-column">
                            <h4>performance tuning</h4>
                            <p>Content</p>
                        </div>
                    </li>
                </ol>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.about-section {

    &_expertise {
        ol {
            list-style: none;
            counter-reset: my-awesome-counter;

            li {
                counter-increment: my-awesome-counter;

                &::before {
                    content: "0" counter(my-awesome-counter);
                    margin-right: 20px;
                    font-size: 18px;
                    font-weight: 700;
                    color: $primary;
                }

                h4 {
                    font-size: 18px;
                    font-weight: 700;
                    text-transform: uppercase;
                    margin: 5px 0 0;
                }
            }
        }
    }
}
</style>


