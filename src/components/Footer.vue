<template>
  <div class="footer-wrapper">
      <div class="col-12 footer-container p-3">
          <span>© | 2021 | Bu site Erdener Ünal tarafından Erdener Ünal için hazırlanmıştır. Tüm hakları sakladır.</span>
      </div>
  </div>
</template>

<script>
export default {
    name: 'app-footer'
}
</script>

<style scoped lang="scss">
@import '@/assets/styles.scss';

.footer-wrapper {
    position: relative;
    width: 100%;
    height: 80px;
    color: white;
    clear: both;

    .footer-container {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        background-color: $bg-color;
    }
}

</style>