<template>
    <div class="social-section py-1">
        <ul class="d-inline-flex p-0 justify-content-around">
            <li><a href="" class="d-flex justify-content-center align-items-center"><i class="fab fa-github"></i></a></li>
            <li><a href="" class="d-flex justify-content-center align-items-center"><i class="fab fa-medium-m"></i></a></li>
            <li><a href="" class="d-flex justify-content-center align-items-center"><i class="fab fa-linkedin-in"></i></a></li>
            <li><a href="" class="d-flex justify-content-center align-items-center"><i class="fab fa-facebook-f"></i></a></li>
            <li><a href="" class="d-flex justify-content-center align-items-center"><i class="fab fa-instagram"></i></a></li>
        </ul>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.social-section {
    ul {
        list-style: none;
        margin: 0 auto;
        li {
            margin: 0 10px;
            a {
                width: 38px;
                height: 38px;
                text-decoration: none;
                border-radius: 3px;
                transition: all .3s ease;
                border: 2px solid $grey2;
                background: $grey2;

                i {
                    font-size: 20px;
                    color: $icons;
                }

                &:hover {
                    transition: all .3s ease;
                    background-color: $grey3;

                    i {
                        color: $links;
                    }
                }
            }
        }
    }
}
</style>


