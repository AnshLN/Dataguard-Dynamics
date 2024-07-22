<template>
    <header-component></header-component>
    <div class="component_container">
      <h5 class="gm">This content is a replica created for internship purposes and does not imply ownership of original copyrights.</h5>
      <router-view></router-view>
    </div>
    <footer-component></footer-component>
</template>

<script>
</script>

<style scoped>
.gm{
  font-style: italic;
  color: red;
}
.component_container{
  margin-left: 0;
  margin-top: 73px;
  background-color: white;
}
@media screen and (min-width: 992px) {
  .component_container{
  margin-left: 70px;
  margin-top: 73px;
    }
  }
</style>
