<template>
    <header-component></header-component>
    <div class="component_container">
      <router-view></router-view>
    </div>
    <footer-component></footer-component>
</template>

<script>
</script>

<style scoped>
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
