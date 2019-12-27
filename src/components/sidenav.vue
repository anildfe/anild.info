<template>
<div>
    <b-navbar toggleable="lg" type="dark" variant="info" class="app-sidenav">
        <b-navbar-brand href="#">
          <span class="d-block d-lg-none">Captain America</span>
          <span class="d-none d-lg-block">
            <img class="img-fluid img-profile rounded-circle mx-auto mb-2" src="https://vignette.wikia.nocookie.net/marvelcinematicuniverse/images/3/36/Captain_America_Shield.png/revision/latest?cb=20190316204818" alt="">
            <!-- <img class="img-fluid img-profile rounded-circle mx-auto mb-2" :src="require('@/assets/images/Anil-Photo.jpeg')" /> -->
          </span>
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <scrollactive :offset="10" :duration="800" active-class="active" bezier-easing-value=".5,0,.35,1" class="navbar-nav" tag="ul" :modifyUrl="false">
              <!-- <li class="nav-item">
                <a href="#home" class="nav-link scrollactive-item">Home</a>
              </li> -->
              <li class="nav-item">
                <a href="#about" class="nav-link scrollactive-item">About</a>
              </li>
              <li class="nav-item">
                <a href="#summary" class="nav-link scrollactive-item">Summary</a>
              </li>
              <li class="nav-item">
                <a href="#experience" class="nav-link scrollactive-item">Experience</a>
              </li>
              <li class="nav-item">
                <a href="#skills" class="nav-link scrollactive-item">Skills</a>
              </li>
              <li class="nav-item">
                <a href="#projects" class="nav-link scrollactive-item">Projects</a>
              </li>
            </scrollactive>
        </b-collapse>
    </b-navbar>
</div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>

.app-sidenav {
  background-color: $primary !important;
  box-shadow: 1px 0px 5px rgb(146, 146, 146);

  .navbar-nav .nav-item .nav-link {
    font-weight: 800;
    letter-spacing: 0.05rem;
    text-transform: uppercase;
  }
  .navbar-toggler {
    &:focus {
      outline-color: lighten($primary, 15%);
    }
  }
}

@media (min-width: 992px) {
  .app-sidenav {
    text-align: center;
    position: fixed;
    top: 0;
    left: 0;

    display: flex;
    flex-direction: column;

    width: $sidebar-base-width;
    height: 100vh;
    .navbar-brand {
      display: flex;

      margin: auto auto 0;
      padding: 0.5rem;
      .img-profile {
        max-width: 10rem;
        max-height: 10rem;
        border: 0.5rem solid fade-out($white, 0.8);
      }
    }
    .navbar-collapse {
      display: flex;
      align-items: flex-start;
      flex-grow: 0;

      width: 100%;
      margin-bottom: auto;
      .navbar-nav {
        flex-direction: column;

        width: 100%;
        .nav-item {
          display: block;
          .nav-link {
            display: block;
          }
        }
      }
    }
  }
}

</style>

