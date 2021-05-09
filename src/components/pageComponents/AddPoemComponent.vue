<template>
  <div class="wrapper">
    <div class="container content-section">
      <ul class="nav nav-tabs justify-content-center pt-3" id="myTab" role="tablist">
        <li class="nav-item" role="presentation">
          <a class="nav-link active" id="poem-tab" data-toggle="tab" href="#poem" role="tab" aria-controls="poem" aria-selected="true"><h4>Şiir Ekle</h4></a>
        </li>
        <li class="nav-item" role="presentation">
          <a class="nav-link" id="citation-tab" data-toggle="tab" href="#citation" role="tab" aria-controls="citation" aria-selected="false"><h4>Alıntı Ekle</h4></a>
        </li>
      </ul>
      <div class="tab-content" id="myTabContent">
        <div class="tab-pane fade show active" id="poem" role="tabpanel" aria-labelledby="poem-tab">
          <div class="col-12">
            <div class="form">
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputHeader">Şiir Başlığı:</label>
                <input type="text" class="form-control" v-model="poem.header" placeholder="Başlık ekle..." id="inputPoemHeader" />
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputHeader">Tarih:</label>
                <input type="text" class="form-control" v-model="poem.date" placeholder="Tarih ekle..." id="inputPoemDate" />
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputHeader">Şiir Gövdesi:</label>
                <textarea class="form-control" v-model="poem.body" id="textArea" rows="15" placeholder="Şiir ekle..."></textarea>
              </div>
              <div class="button-wrapper text-right pb-3">
                <button type="submit" @click="addPoem" class="btn btn-primary">Şiiri Kaydet</button>
              </div>
            </div>
          </div>
        </div>
        <div class="tab-pane fade" id="citation" role="tabpanel" aria-labelledby="citation-tab">
          <div class="col-12">
            <div class="form">
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputHeader">Alıntı Başlığı:</label>
                <input type="text" class="form-control" v-model="citation.header" placeholder="Başlık ekle..." id="inputCitationHeader" />
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputHeader">Tarih:</label>
                <input type="text" class="form-control" v-model="citation.date" placeholder="Tarih ekle..." id="inputCitationDate" />
              </div>
              <div class="form-group">
                <label class="col-form-label mt-4" for="inputHeader">Alıntı Gövdesi:</label>
                <textarea class="form-control" v-model="citation.body" id="textArea" rows="15" placeholder="Alıntı ekle..."></textarea>
              </div>
              <div class="button-wrapper text-right pb-3">
                <button type="submit" @click="addCitation" class="btn btn-primary">Alıntıyı Kaydet</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      poem: {
        header: "",
        date: "",
        body: "",
      },
      citation: {
        header: "",
        date: "",
        body: "",
      }
    };
  },

  methods: {
    addPoem() {
      this.$store.dispatch('setPoemToDataBase', this.poem);
      this.clearInputs();
    },
    clearInputs() {
      this.poem = {
        header: "",
        date: "",
        body: "",
      }
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/styles.scss";
.wrapper {
  width: 100%;
  height: 100%;
}
@media screen and (max-width: 420px) {
  li.nav-item {
    margin: 0;

    .nav-link h4 {
      font-size: 14px;
    }
  }
}
</style>