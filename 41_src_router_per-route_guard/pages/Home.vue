<template>
  <div>
    <h2>Home组件内容</h2>
    <div>
      <ul class="nav nav-tabs">
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/news">News</router-link>
        </li>
        <li>
          <router-link class="list-group-item" active-class="active" to="/home/message">Message</router-link>
        </li>
      </ul>
      <!-- cashe some route components -->
      <!-- <keep-alive :include="['News', 'Message']"> -->
      <!-- cache a route component: config component name, make it stop to destroy -->
      <keep-alive include="News"> 
        <router-view></router-view>
      </keep-alive>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  // mounted(){
  //   console.log(this);
  //   window.homeRoute = this.$route
  //   window.homeRouter = this.$router
  // }
};
</script>

<style>
</style>