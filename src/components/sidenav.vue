<template>
<div>
    <b-navbar toggleable="lg" type="dark" variant="info" class="app-sidenav">
        <b-navbar-brand href="#">NavBar</b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
            <b-navbar-nav>
                <b-nav-item href="#" class="active">Link 1</b-nav-item>
                <b-nav-item href="#">Link 2</b-nav-item>
                <b-nav-item href="#">Link 2</b-nav-item>
            </b-navbar-nav>
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

