<template>
  <div>
    <div class="row">
      <Banner/>
    </div>
    <div class="row">
      <div class="col-xs-2 col-xs-offset-2">
        <div class="list-group">
          <!-- primitive HTML for page navigation -->
          <!-- <a class="list-group-item" href="./about.html">About</a>
          <a class="list-group-item active" href="./home.html">Home</a> -->

          <!-- In Vue use router-link to realize switch route  -->
          <router-link replace class="list-group-item" active-class="active" :to="{name:'myAbout'}">About</router-link>
          <router-link replace class="list-group-item" active-class="active" to="/home">Home</router-link>
        </div>
      </div>
      <div class="col-xs-6">
        <div class="panel">
          <div class="panel-body">
            <!-- point out the position of component  -->
            <router-view></router-view>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Banner from './components/Banner.vue'
export default {
  name: "App",
  components: {Banner},
};
</script>
