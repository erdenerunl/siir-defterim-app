<template>
  <div class="container-fluid m-0 p-0">
    <background-component></background-component>
    <navbar></navbar>
    <div class="d-flex justify-content-center">
      <router-view />
    </div>
    <footer></footer>
  </div>
</template>


<script>
import Footer from './components/Footer';
import Navbar from "./components/Navbar";
import BackgroundComponent from './components/BackgroundComponent';

export default {
  components: {
    Footer,
    Navbar,
    BackgroundComponent
  }
}

</script>

<style lang="scss">

</style>
