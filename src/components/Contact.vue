<template>
<section class="contact-section py-5">
    <div class="container">
        <div class="row d-flex no-gutters">
            <div class="col-md-12 col-lg-12 py-5">
                <h2 class="mb-5 heading">Contact Me</h2>
                <div class="contact-section_list row m-0 pb-3">
                    <div class="col-md-3 col-sm-6 p-0 contact-section_list_item">
                        <h4>Location</h4>
                        <p>Hyderabad, India</p>
                    </div>
                    <div class="col-md-3 col-sm-6 p-0 contact-section_list_item">
                        <h4>Location</h4>
                        <p>Hyderabad, India</p>
                    </div>
                    <div class="col-md-3 col-sm-6 p-0 contact-section_list_item">
                        <h4>Email</h4>
                        <p><a href="">Hyderabad, India</a></p>
                    </div>
                    <div class="col-md-3 col-sm-6 p-0 contact-section_list_item">
                        <h4>Location</h4>
                        <p>Hyderabad, India</p>
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
.contact-section {
    &_list {
        border-bottom: 2px solid $lines;
        &_item {
            h4 {
                font-size: 18px;
            }
            p {
                font-size: 16px;
                a {
                    color: $secondary;
                    &:hover {
                        color: $primary;
                        text-decoration: none;
                    }
                }
            }
        }
    }
}
</style>
