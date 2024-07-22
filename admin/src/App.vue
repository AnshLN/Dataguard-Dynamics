<template>
  <router-view></router-view>
</template>
<script>

</script>
<style>

/* Root Designs */

:root{
  overflow: auto;
  /* --theme_color:#053480; 
  --theme_color_2:#F27141; */

  /* --theme_color: #008080;
  --theme_color_2: rgb(17, 17, 17);  */
  
  --theme_color: #143d59;
  /* --theme_color_2: #f4b41a;  */
  --theme_color_2: #a81010;
}




::-webkit-scrollbar {
  transition: all ease .35s;
  background-color: transparent;
}
::-webkit-scrollbar-thumb {
  background-color: var(--theme_color_2);
}
::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}
::-webkit-scrollbar-thumb {
  width: 4px;
  height: 4px;
}


body{
  background-color: var(--theme_color);
  padding-right: 0 !important;
 
}
.v-input__details{
  display: none !important;
}
.theme-btn{
  transition: all ease .35s;
  background-color: var(--theme_color) !important;
  color: white !important;
}
.theme-btn:hover{
  background-color: var(--theme_color_2) !important;
  color: white !important;
}

.theme-link{
  transition: all ease .35s;
  color: var(--theme_color) !important;
  text-decoration: none !important;
  &:hover{
    color: var(--theme_color_2) !important;
  }
}

/* Drag Tree */
.tree-node-inner{
  background-color: rgb(238, 238, 238);
  cursor: move;
  height: 34px !important;
}
.tree-node-inner:hover{
  background-color: rgb(221, 221, 221);
}
.drag-placeholder.he-tree-drag-placeholder{
  height: 34px !important;
}
.tree-node{
  margin-top: 5px;
}
.tree-node:hover{
  background-color: unset !important;
}

</style>