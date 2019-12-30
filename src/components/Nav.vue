<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info" class="ad-nav">
            <div class="container">
                <b-navbar-brand href="#">Brand</b-navbar-brand>

                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

                <b-collapse id="nav-collapse" is-nav>
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item href="#"><span>Home</span></b-nav-item>
                        <b-nav-item href="#"><span>About</span></b-nav-item>
                        <b-nav-item href="#"><span>Resume</span></b-nav-item>
                        <b-nav-item href="#"><span>Blog</span></b-nav-item>
                        <b-nav-item href="#"><span>Contact</span></b-nav-item>
                    </b-navbar-nav>
                </b-collapse>
            </div>
        </b-navbar>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.ad-nav {
    background: transparent !important;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 3;

    @include media-breakpoint-down(md) {
        background: $black !important;
        position: relative;
		top: 0;
		padding-top: 0;
		padding-bottom: 0;
		padding-left: 15px;
		padding-right: 15px;
    }

    .navbar-brand {
        color: #000;
        padding: 15px 0;

        @include media-breakpoint-down(md){
			color: $white;
		}
    }

    .navbar-nav > .nav-item {
        > .nav-link {
            font-size: 16px;
            padding: 7px 20px;
            color: $black;
            font-weight: 400;
            opacity: 1 !important;

            @include media-breakpoint-down(lg){
               color: $white;
               padding:  7px 0;
            }

            span {
                position: relative;
                display: block;
                padding-bottom: 2px;

                @include media-breakpoint-down(lg){
                    display: inline-block;
                }

                &::before {
                    content: "";
                    position: absolute;
                    width: 100%;
                    height: 2px;
                    bottom: 0;
                    left: 0;
                    background: $primary;
                    visibility: visible;
                    @include transform(scaleX(0));
                    @include transition(all 0.3s ease-in-out 0s);
                }
            }
        }

        &:hover {
            > .nav-link {
                span::before {
                    @include transform(scaleX(1));
                }
            }
        }

        &.active {
            > .nav-link {
                color: $primary;
                span::before {
                    @include transform(scaleX(1));
                }
            }
        }
    }

    &.scrolled {
        @include media-breakpoint-up(md) {
            margin-top: -82px;
            background: $white!important;
		    box-shadow: 0 0 10px 0 rgba(0,0,0,.1);
        }

        &.awake {
            @include media-breakpoint-up(md) {
                margin-top: 0px;
                transition: .3s all ease-out;
            }
		}
    }
}
</style>


