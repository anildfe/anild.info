<template>
    <section class="home-section" id="home">
        <vue-particles
            color="#717273"
            :particleOpacity="0.7"
            :particlesNumber="100"
            shapeType="circle"
            :particleSize="4"
            linesColor="#717273"
            :linesWidth="1"
            :lineLinked="true"
            :lineOpacity="0.4"
            :linesDistance="150"
            :moveSpeed="3"
            :hoverEffect="true"
            hoverMode="grab"
            :clickEffect="true"
            clickMode="push">
        </vue-particles>
        <div class="container">
            <div class="row no-gutters justify-content-center align-items-center home-section_wrapper">
                <div class="col-lg-8 col-md-6 d-flex align-items-center">
                    <div class="text text-center container p-0">
                        <span class="sub-heading">Hey! I am</span>
                        <h1
                        v-if="name"
                        data-aos="fade-up"
                        data-aos-duration="800"
                        data-aos-once="true"
                        >{{name.firstName}} {{name.lastName}}</h1>
                        <app-social
                        data-aos="fade-up"
                        data-aos-delay="300"
                        data-aos-duration="800"
                        data-aos-once="true">
                        </app-social>
                    </div>
                </div>
            </div>
            <scrollactive 
            tag="div" 
            :offset="72" 
            :highlightFirstItem="true"
            :modifyUrl="false"
            class="home-section_arrow bounce d-block d-sm-none">
                <a href="#about" class="scrollactive-item"><span><i class="fas fa-arrow-down"></i></span></a>
            </scrollactive >
        </div>
    </section>
</template>

<script>
import Social from './Social.vue'
import { mapGetters } from 'vuex'
export default {
    components: {
        appSocial: Social
    },
    computed: {
        ...mapGetters(['name'])
    }
}
</script>

<style lang="scss" scoped>
.home-section {
    width: 100%;
    height: 100%;
    min-height: 100vh;
    position: inherit;
    //background-image: url('../assets/images/bg2.jpg');
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;

    #particles-js {
        position: absolute;
        width: 100%;
        height: 100%;
    }

    &_wrapper {
        min-height: 100vh;

        .sub-heading {
            text-transform: uppercase;
            font-size: 16px;
            font-weight: 800;
            color: $headings;
            letter-spacing: 4px;
        }

        h1 {
            font-size: 60px;
            font-weight: 700;
            color: $primary;
            text-transform: uppercase;

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
    }

    &_arrow {
        position: absolute;
        bottom: 16px;
        left: calc(50% - 11px);
        a {
            color: $primary;
            i {
                font-size: 25px;
            }
        }
    }

    .bounce {
        -moz-animation: bounce 2s infinite;
        -webkit-animation: bounce 2s infinite;
        animation: bounce 2s infinite;
    }

    @keyframes bounce {
        0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
        }
        40% {
            transform: translateY(-30px);
        }
        60% {
            transform: translateY(-15px);
        }
    }
}

</style>


