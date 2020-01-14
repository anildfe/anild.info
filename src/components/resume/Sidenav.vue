<template>
    <nav class="d-none d-sm-block">
        <scrollactive 
        tag="ul" 
        :offset="300" 
        :highlightFirstItem="true" 
        :scrollOffset="200"
        :modifyUrl="false"
        class="p-0">
            <li class="mb-3"><a href="#edu" class="scrollactive-item">Education</a></li>
            <li class="mb-3"><a href="#exp" class="scrollactive-item">Experience</a></li>
            <li class="mb-3"><a href="#skills" class="scrollactive-item">Skills</a></li>
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

                &:hover {
                    color: $primary;
                    text-decoration: none;
                }

                &.is-active {
                    color: $primary;
                }
            }
        }
    }
}

</style>