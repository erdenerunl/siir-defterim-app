<template>
  <div class="wrapper">
    <div class="container content-section">
      <div class="my-bio-wrapper row flex-row">
        <div class="bio-image-wrapper col-lg-4 col-md-3 col-sm-12">
          <div
            class="bio-image d-flex flex-column justify-content-center align-items-center"
          >
            <img src="../assets/images/bio-image.jpg" alt="bio-image" />
            <h4 class="bio-image-name">Erdener Ünal</h4>
          </div>
        </div>
        <div class="bio-desc col-lg-8 col-md-9 col-sm-12">
          <div class="bio-header text-center">
            <h1>HEADER EXAMPLE</h1>
          </div>
          <div class="bio-desc-desc mt-3">
            <span
              >Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              aliquam distinctio impedit in delectus eum nulla exercitationem.
              Natus, quidem perferendis.</span
            >
            <div class="button-div">
              <router-link to="/panel" class="btn btn-primary"
                >Şiirlere git</router-link
              >
            </div>
          </div>
        </div>
      </div>
      <div
        class="my-citation-wrapper row d-flex flex-column justify-content-center align-items-center"
      >
        <div class="my-header">
          <h2>Alıntılar</h2>
        </div>
        <div class="my-citationlist">
          <div class="row d-flex justify-content-center">
            <div class="citation col-lg-5 col-md-12 col-sm-12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              inventore praesentium ipsum nemo nulla a obcaecati mollitia est
              quos dignissimos!
            </div>
            <div class="citation col-lg-5 col-md-12 col-sm-12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              inventore praesentium ipsum nemo nulla a obcaecati mollitia est
              quos dignissimos!
            </div>
            <div class="citation col-lg-5 col-md-12 col-sm-12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              inventore praesentium ipsum nemo nulla a obcaecati mollitia est
              quos dignissimos!
            </div>
            <div class="citation col-lg-5 col-md-12 col-sm-12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
              inventore praesentium ipsum nemo nulla a obcaecati mollitia est
              quos dignissimos!
            </div>
          </div>
        </div>
      </div>
      <div class="my-poems-home">
        <div class="my-header">
          <h2>Şiir Listem</h2>
        </div>
        <div class="my-poemlist pb-3">
          <div class="row">
            <div class="poem col-lg-4 col-md-6 col-sm-12" v-for="(poem, index) in poemList" :key="index">
              <a href="#">{{index + 1}}. {{poem.header }}</a>
            </div>
            <!-- <div class="poem col-lg-4 col-md-6 col-sm-12">
              <a href="#">Lorem ipsum dolor sit.</a>
            </div>
            <div class="poem col-lg-4 col-md-6 col-sm-12">
              <a href="#">Lorem ipsum dolor sit.</a>
            </div>
            <div class="poem col-lg-4 col-md-6 col-sm-12">
              <a href="#">Lorem ipsum dolor sit.</a>
            </div>
            <div class="poem col-lg-4 col-md-6 col-sm-12">
              <a href="#">Lorem ipsum dolor sit.</a>
            </div>
            <div class="poem col-lg-4 col-md-6 col-sm-12">
              <a href="#">Lorem ipsum dolor sit.</a>
            </div>
            <div class="poem col-lg-4 col-md-6 col-sm-12">
              <a href="#">Lorem ipsum dolor sit.</a> -->
            <!-- </div> -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapGetters } from 'vuex'
export default {
  name: "Home",
  data() {
    return {

    }
  },
  created() {
      this.$store.dispatch('initApp')
  },
  computed: {
    ...mapGetters({
      poemList : '_poemList' 
    })
  }
};
</script>

<style  lang="scss">
@import "../assets/styles.scss";

.wrapper {
  height: auto;
}
.content-section {
  margin-top: 1px;
  position: relative;
  z-index: 2;
  background-color: white;
  height: auto;
  border-radius: 15px;

  .my-bio-wrapper {
    background-color: whitesmoke;
    width: 100%;
    border-bottom: 1px solid $border-color;
    box-shadow: $border-shadow;
    border-radius: 15px 15px 0 0;

    .bio-image {
      width: 100%;
      height: auto;

      img {
        max-width: 100%;
        height: auto;
        border-radius: 50%;
        padding-top: 1rem;
      }

      .bio-image-name {
        letter-spacing: 0;
        padding: 0.75rem 0 0 0;
      }
    }

    .bio-desc {
      display: flex;
      position: relative;
      flex-direction: column;
      align-items: center;
      padding-top: 1rem;

      .bio-desc-desc {
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-end;

        .button-div {
          padding: 1rem;
        }
      }
      @media screen and (max-width: 768px) {
        .bio-desc-desc {
          align-items: center;
        }
      }
    }
  }
}

.my-citationlist {
  margin: 15px;

  .citation {
    margin: 0.75rem;
    padding: 1.5rem;
    border: 1px solid $border-color;
    border-radius: 10px;
    background-color: whitesmoke;
    box-shadow: $border-shadow;
  }
}
.poem {
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;

  a {
    text-decoration: none;
    transition: 100ms ease-in-out;

    &:hover {
      transform: scale(1.05);
    }
  }
}
</style>