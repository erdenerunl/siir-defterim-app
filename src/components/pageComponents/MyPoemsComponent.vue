<template>
  <div class="wrapper">
    <div class="container content-section my-poems-container">
      <div class="row">
        <div class="col-12 my-header">
          <h2>{{ poemDt.header }}</h2>
        </div>
        <div class="col-12">
          <div class="poem-text-wrapper format-poem">
            {{ poemDt.body }}
          </div>
        </div>
        <div class="col-12">
          <div class="date-box text-right">
            {{ poemDt.date }}
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-12 d-flex justify-content-between px-4 mb-4">
          <button @click.prevent="prevPoem()" class="btn btn-primary">Önceki Şiir</button>
          <button @click.prevent="nextPoem()" class="btn btn-primary">Sonraki Şiir</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import axios from "axios";
export default {
  data() {
    return {
      newId: "",
      poemDt: [],
    };
  },
  created() {
    this.getPoemDetail();
  },
  mounted() {},
  computed: {
    ...mapGetters({
      poemList: "_poemList",
      poemDetails: "poemDetails",
    }),
    returnPoemId() {
      return this.$route.params.id;
    },
  },
  methods: {
    getPoemDetail(poemId) {
      if (!poemId) {
        poemId = this.returnPoemId;
      }
      axios.get(`http://localhost:3000/poemList?id=${poemId}`).then((resp) => {
        console.log(" created response", resp);
        this.poemDt = resp.data[0] || [];
      });
    },
    nextPoem() {
      this.newId = parseInt(this.returnPoemId) + 1;
      if (this.newId > this.poemList.length) {
        this.newId = 1;
      }
      this.$router.push(`/panel/${this.newId}`);
      this.getPoemDetail(this.newId);
      console.log(this.$route.params.id);
    },
    prevPoem() {
      this.newId = parseInt(this.returnPoemId) - 1;
      if (this.newId === 0) {
        this.newId = this.poemList.length;
      }
      this.$router.push(`/panel/${this.newId}`);
      this.getPoemDetail(this.newId);
      console.log(this.$route.params.id);
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/assets/styles.scss";
.wrapper {
  width: 100%;
  height: 100%;
}
.my-poems-container {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.poem-text-wrapper {
  display: flex;
  justify-content: center;
}
.format-poem {
  font-size: 15px;
  text-align: left;
  white-space: pre-line;
  padding: 1rem 0 1rem 1rem;
}
.date-box {
  padding: 2rem;
  margin-right: 3rem;
}
</style>