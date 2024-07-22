<template>
  <div class="test">
    <div>
      <h1 class="">404 - Page Not Found</h1>
      <p class="">The page you are looking for does not exist.</p>
      <router-link class="theme-link" to="/admin/dashboard">Please Click Here to Continue for Dashboard</router-link>
    </div>
  </div>
  </template>
  
  <script>
  export default {
    // Your error page logic
  }
  </script>

<style scoped>
.test{
  width: 100vw;
  height: 100vh;
  background-color: white;
}
</style>