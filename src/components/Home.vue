<template>
    <section class="home-section">
        <!-- <div class="home-section_overlay"></div> -->
        <vue-particles
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"></vue-particles>
        <div class="container">
            <div class="row no-gutters justify-content-center align-items-center home-section_wrapper">
                <div class="col-lg-8 col-md-6 d-flex align-items-center">
                    <div class="text text-center container p-0">
                        <span class="sub-heading">Hey! I am</span>
                        <h1>Name Name</h1>
                        <div class="home-section_wrapper_social py-1">
                            <ul class="d-flex p-0 justify-content-around">
                                <li><a href="" class="d-flex justify-content-center align-items-center"><i class="fab fa-github"></i></a></li>
                                <li><a href="" class="d-flex justify-content-center align-items-center"><i class="fab fa-medium-m"></i></a></li>
                                <li><a href="" class="d-flex justify-content-center align-items-center"><i class="fab fa-linkedin-in"></i></a></li>
                                <li><a href="" class="d-flex justify-content-center align-items-center"><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href="" class="d-flex justify-content-center align-items-center"><i class="fab fa-instagram"></i></a></li>
                            </ul>
                        </div>
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
.home-section {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    position: inherit;
    //background-image: url('../assets/images/bg2.jpg');
    background-color: $background-dark;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;

    #particles-js {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    &_overlay {
        position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		opacity: .1;
		width: 50%;
		background: $primary;
    }

    &_wrapper {
        min-height: 100vh;

        .sub-heading {
            text-transform: uppercase;
            font-size: 16px;
            font-weight: 800;
            color: $primary;
            letter-spacing: 4px;
            color: $white;
        }

        h1 {
            font-size: 60px;
            font-weight: 800;
            color: $primary;

            @include media-breakpoint-down(md) {
                font-size: 45px;
            }
        }

        h2 {
			font-weight: 800;
			span{
				color: $primary;
				text-decoration: underline;
			}
        }
        
        &_social {
            ul {
                list-style: none;
                width: 40%;
                margin: 0 auto;
                a {
                    width: 35px;
                    height: 35px;
                    //background: $black;
                    //border-radius: 50%;
                    text-decoration: none;
                    transition: all .3s ease;
                    border: 1px solid $grey;

                    i {
                        font-size: 16px;
                        color: $grey;
                    }

                    &:hover {
                        border-radius: 50%;
                        transition: all .3s ease;
                        border-color: $white;

                        i {
                            color: $white;
                        }
                    }
                }
            }
        }
    }
}

</style>


