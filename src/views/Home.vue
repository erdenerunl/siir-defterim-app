<template>
  <div class="wrapper">
    <div class="background-image"></div>
    <div class="container home-content">
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
          <div class="bio-desc-header text-center">
            <h1>HEADER EXAMPLE</h1>
          </div>
          <div class="bio-desc-desc mt-3">
            <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            aliquam distinctio impedit in delectus eum nulla exercitationem.
            Natus, quidem perferendis.</span>
            <div class="button-div">
              <router-link to="/panel" class="btn btn-primary" >Şiirlere git</router-link>
            </div>
          </div>
        </div>
      </div>
      <div class="my-citation-wrapper row d-flex flex-column justify-content-center align-items-center">
      <div class="my-citation-header">
        <h2>Alıntılar</h2>
      </div>
      <div class="my-citationlist">
        <div class="citation">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore inventore praesentium ipsum nemo nulla a obcaecati mollitia est quos dignissimos!
        </div>
        <div class="citation">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore inventore praesentium ipsum nemo nulla a obcaecati mollitia est quos dignissimos!
        </div>
        <div class="citation">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore inventore praesentium ipsum nemo nulla a obcaecati mollitia est quos dignissimos!
        </div>
        <div class="citation">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore inventore praesentium ipsum nemo nulla a obcaecati mollitia est quos dignissimos!
        </div>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
};
</script>

<style lang="scss">
.wrapper {
  position: relative;
  width: 100%;
  height: 100vh;
}
.home-content {
  margin-top: 1px;
  position: relative;
  z-index: 2;
  background-color: white;
  height: auto;
  border-radius: 15px;

  .my-bio-wrapper {
    background-color: whitesmoke;
    width: 100%;
    border-bottom: 1px solid #d3d3d3;
    border-radius: 15px 15px 0 0;

    .bio-image {
      width: 100%;
      height: auto;

      img {
        max-width: 100%;
        height: auto;
        border-radius: 50%;
        padding-top: 1rem
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
      @media screen and (max-width:768px) {
          .bio-desc-desc {
            align-items: center;
          }
        }
    }
  }
}
div.my-citation-header {
  margin: 1.5rem 0;
}
.my-citationlist {
  margin: 15px;
  display: grid;
  grid-template-columns: repeat(2, minmax(50%, 100%));
  grid-template-rows: repeat(3, 1fr);
  gap: 15px 15px;

  .my-citation {
    width: 50%;
  }
}
@media screen and (max-width:768px) {
  .my-citationlist{
    grid-template-columns: 100%;
  }
}

</style>
