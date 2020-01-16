<template>
    <nav class="d-none d-sm-block">
        <scrollactive 
        tag="ul" 
        :offset="300" 
        :highlightFirstItem="true" 
        :scrollOffset="200"
        :modifyUrl="false"
        class="p-0">
            <li class="mb-3"><a href="#edu" class="scrollactive-item"><span>Education</span></a></li>
            <li class="mb-3"><a href="#exp" class="scrollactive-item"><span>Experience</span></a></li>
            <li class="mb-3"><a href="#skills" class="scrollactive-item"><span>Skills</span></a></li>
        </scrollactive >
    </nav>
</template>

<script>

</script>

<style lang="scss" scoped>
nav {
    margin-top: 2px;
    position: sticky;
    top: 200px;
    ul {
        list-style: none;
        li {
            a {
                font-weight: 700;
                color: $links;

                span {
                    position: relative;
                    padding-bottom: 5px;

                    @include media-breakpoint-down(lg){
                        display: inline-block;
                    }

                    &::before {
                        content: "";
                        position: absolute;
                        width: 100%;
                        height: 0.15rem;
                        bottom: 0;
                        left: 0;
                        background: $primary;
                        visibility: visible;
                        @include transform(scaleX(0));
                        @include transition(all 0.3s ease-in-out 0s);
                    }
                }

                &:hover {
                    color: $white;
                    text-decoration: none;
                    span {

                        &::before {
                            @include transform(scaleX(1));
                            @include transition(all 0.3s ease-in-out 0s);
                        }
                    }
                }

                &.is-active {
                    color: $primary;
                    span {

                        &::before {
                            @include transform(scaleX(1));
                            @include transition(all 0.3s ease-in-out 0s);
                        }
                    }
                }
            }
        }
    }
}

</style>