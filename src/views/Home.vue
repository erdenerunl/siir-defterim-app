<template>
  <home-component></home-component>
</template>

<script>
import HomeComponent from "@/components/pageComponents/HomeComponent.vue";
import Loader from '../components/layouts/Loader.vue';
export default {
  components: {
    HomeComponent,
    Loader,
  }
}
</script>