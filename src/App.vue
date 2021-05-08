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
import AppFooter from './components/Footer';
import Navbar from "./components/Navbar";
import BackgroundComponent from './components/BackgroundComponent';

export default {
  components: {
    AppFooter,
    Navbar,
    BackgroundComponent
  }
}

</script>

<style lang="scss">
html, body, .global-wrap {
  height: 100%;
}
.global-wrap {
  position: relative;
  height: auto;
  min-height: calc(100vh - 75px);
}
.mid-wrap {
  margin-bottom: 75px;
}
</style>
