<template>
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <a class="navbar-brand" href="#">Şiir Defteri</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarColor01" aria-controls="navbarColor01" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarColor01">
    <ul class="navbar-nav d-flex justify-content-between w-100">
      <div class="left-navbar d-flex">
        <li class="nav-item">
        <router-link to="/" class="nav-link">Anasayfa
          <span class="sr-only">(current)</span>
        </router-link>
      </li>
      <li class="nav-item">
        <router-link class="nav-link" to="/panel">Şiirlerim
        </router-link>
      </li>
      </div>
      <div class="right-navbar">
        <li class="nav-item">
        <router-link class="nav-link" to="/add-poem">Şiir Ekle
        </router-link>
      </li>
      </div>
    </ul>
  </div>
</nav>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
