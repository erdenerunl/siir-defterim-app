<template>
  <div class="wrapper">
    <div class="container content-section">
      <div class="my-header">
          <h2>Şiir Ekle</h2>
      </div>
      <div class="row">
        <div class="col-12">
          <div class="form">
            <div class="form-group">
              <label class="col-form-label mt-4" for="inputHeader">Şiir Başlığı:</label>
              <input type="text" class="form-control" placeholder="Başlık ekle..." id="inputHeader" />
            </div>
            <div class="form-group">
                <label class="col-form-label mt-4" for="inputHeader">Şiir Gövdesi:</label>
              <textarea class="form-control" id="textArea" rows="15" placeholder="Şiir ekle..."></textarea>
            </div>
            <div class="button-wrapper text-right mb-3">
                <button type="submit" class="btn btn-primary">Şiiri Kaydet</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
};
</script>

<style lang="scss">
.wrapper {
    width: 100%;
}
</style>