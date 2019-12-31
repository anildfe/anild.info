<template>
    <section class="about-section">
        <div class="container">
            <div class="row d-flex no-gutters">
                <div class="col-md-12 col-lg-12 py-5">
                    <h2 class="mb-4">About Me</h2>
                    <p class="mb-3">A small river named Duden flows by their place and supplies it with the necessary regelialia.A small river named Duden flows by their place and supplies it with the necessary regelialia.A small river named Duden flows by their place and supplies it with the necessary regelialia.A small river named Duden flows by their place and supplies it with the necessary regelialia.A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                    <div class="about-section_social py-1">
                        <ul class="d-flex p-0 mt-4">
                            <li class="mr-3"><a href="" class="d-flex justify-content-center align-items-center"><i class="fab fa-github"></i></a></li>
                            <li class="mr-3"><a href="" class="d-flex justify-content-center align-items-center"><i class="fab fa-medium-m"></i></a></li>
                            <li class="mr-3"><a href="" class="d-flex justify-content-center align-items-center"><i class="fab fa-linkedin-in"></i></a></li>
                            <li class="mr-3"><a href="" class="d-flex justify-content-center align-items-center"><i class="fab fa-facebook-f"></i></a></li>
                            <li class="mr-3"><a href="" class="d-flex justify-content-center align-items-center"><i class="fab fa-instagram"></i></a></li>
                        </ul>
                    </div>
                </div>
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
    // width: 100%;
    // height: 100%;
    // min-height: 100vh;
    // position: inherit;
    // background-size: cover;
    // background-repeat: no-repeat;

    h2 {
        font-size: 50px;
    }

    &_social {
        ul {
            list-style: none;
            a {
                width: 60px;
                height: 60px;
                background: $black;
                border-radius: 50%;
                text-decoration: none;
                transition: all .3s ease;

                i {
                    font-size: 28px;
                    color: $white;
                }

                &:hover {
                    background: $primary;
                    transition: all .3s ease;
                }
            }
        }
    }
}
</style>


