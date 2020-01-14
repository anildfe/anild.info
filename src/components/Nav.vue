<template>
    <div>
        <b-navbar toggleable="lg" type="dark" variant="info" class="ad-nav" :class="[isScrolled, isAwake, isSleep]">
            <div class="container">
                <b-navbar-brand href="#">Brand</b-navbar-brand>
                <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
                <b-collapse id="nav-collapse" is-nav>
                    <scrollactive 
                        tag="ul" 
                        :offset="350" 
                        :scrollOffset="80"
                        :modifyUrl="false"
                        activeClass="active"
                        class="navbar-nav ml-auto">
                        <b-nav-item href="#"><span>Home</span></b-nav-item>
                        <b-nav-item href="#about" link-classes="scrollactive-item"><span>About</span></b-nav-item>
                        <b-nav-item href="#resume" link-classes="scrollactive-item"><span>Resume</span></b-nav-item>
                        <b-nav-item href="#projects" link-classes="scrollactive-item"><span>Projects</span></b-nav-item>
                        <!-- <b-nav-item href="#blog" link-classes="scrollactive-item"><span>Blog</span></b-nav-item> -->
                        <b-nav-item href="#contact" link-classes="scrollactive-item"><span>Contact</span></b-nav-item>
                    </scrollactive >
                </b-collapse>
            </div>
        </b-navbar>
    </div>
</template>

<script>
import debounce from 'lodash/debounce';
export default {
    data: () => {
        return {
            isScrolled: '',
            isAwake: '',
            isSleep: ''
        }
    },
    methods: {
        handleScroll() {
            if(window.scrollY > 150) {
                this.isScrolled = 'scrolled';
            }
            if(window.scrollY > 350) {
                this.isAwake = 'awake';
                this.isSleep = '';
            }
            if(window.scrollY < 350 && window.scrollY > 150) {
                if(this.isAwake) { this.isSleep = 'sleep' };
                this.isAwake = '';
            }
            if(window.scrollY < 150) {
                this.isScrolled = '';
                this.isSleep = '';
            }
        }
    },
    created() {
        this.handleDebouncedScroll = debounce(this.handleScroll, 0);
        window.addEventListener('scroll', this.handleDebouncedScroll);
    }
    
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
        background: $nav-bg !important;
        position: fixed;
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
            color: $white;
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

        .active.nav-link {
            color: $primary;
            span::before {
                @include transform(scaleX(1));
            }
        }
    }

    &.scrolled {
        @include media-breakpoint-up(md) {
            margin-top: -82px;
            background: $nav-bg !important;
            position: fixed;
        }

        &.awake {
            @include media-breakpoint-up(md) {
                margin-top: 0px;
                transition: .3s all ease-out;
            }
        }
        
        &.sleep {
            @include media-breakpoint-up(md) {
                transition: .3s all ease-out;
            }
		}
    }
}
</style>


