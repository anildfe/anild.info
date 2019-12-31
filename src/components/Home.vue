<template>
    <section class="home-section">
        <div class="home-section_overlay"></div>
        <div class="container">
            <div class="row no-gutters justify-content-center align-items-center home-section_wrapper">
                <div class="col-lg-8 col-md-6 d-flex align-items-center">
                    <div class="text text-center container p-0">
                        <span class="sub-heading">Hey! I am</span>
                        <h1>Name Name</h1>
                        <h2>I'm a <span>Web Developer</span></h2>
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
    background-size: cover;
    background-repeat: no-repeat;

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
        }

        h1 {
            font-size: 60px;
            font-weight: 800;

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
}

</style>


