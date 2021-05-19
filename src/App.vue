<template>
  <div class=" global-wrap container-fluid m-0 p-0">
    <background-component></background-component>
    <navbar></navbar>
    <div class="d-flex justify-content-center mid-wrap">
      <router-view />
    </div>
  </div>
  <app-footer></app-footer>
</template>


<script>
import AppFooter from './components/layouts/Footer';
import Navbar from "./components/layouts/Navbar";
import BackgroundComponent from './components/layouts/BackgroundComponent';


export default {
  components: {
    AppFooter,
    Navbar,
    BackgroundComponent
  },
  created() {
    this.$store.dispatch('initApp');
    }
}

</script>

<style lang="scss">
html, body {
  height: 100%;
}
.global-wrap {
  position: relative;
  height: 100%;
  min-height: calc(100vh - 75px);
}
.mid-wrap {
  height: 100%;
}

</style>
