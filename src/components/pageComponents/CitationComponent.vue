<template>
  <div class="row d-flex justify-content-center align-items-start">
    <div class="citation col-lg-3 col-md-12 col-sm-12" v-for="citation in citationList" :key="citation.id">
      <span class="format-citation"> {{ citation.body }} </span>
      <div class="date-box">
        <strong>{{citation.header}} </strong>
        <i> / {{citation.date}} </i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["citationList"],
  name: "appCitation",
};
</script>

<style lang="scss">
@import "@/assets/styles.scss";

b,
strong {
  font-weight: bold !important;
}
.my-citationlist {
  margin: 15px;

  .citation {
    min-width: 300px;
    margin: 0.75rem;
    padding: 1.5rem;
    border: 1px solid $border-color;
    border-radius: 10px;
    background-color: whitesmoke;
    box-shadow: $border-shadow;

    .date-box {
      text-align: right;
      padding: 1rem 0 0 0;
    }
  }
}
.format-citation {
  font-size: 15px;
  text-align: left;
  white-space: pre-line;
}
</style>