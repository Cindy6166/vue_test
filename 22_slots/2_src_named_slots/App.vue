<template>
  <div class="container">
    <Category title="Foods" :listData="foods">
      <img
        slot="center"
        src="https://www.meatpoultry.com/ext/resources/MPImages/08-2020/083120/wendys-pretzel-bacon-pub-burger.jpg?height=635&t=1598978033&width=1200"
        alt=""
      />
      <a
        slot="footer"
        href="https://v2.vuejs.org/v2/guide/components-slots.html"
        >more...</a
      >
    </Category>
    <Category title="Games" :listData="games">
      <ul slot="center">
        <li v-for="(item, index) in games" :key="index">{{ item }}</li>
      </ul>
      <div class="foot" slot="footer">
        <a href="https://v2.vuejs.org/v2/guide/components-slots.html">online</a>
        <a href="https://v2.vuejs.org/v2/guide/components-slots.html">single</a>
      </div>
    </Category>
    <Category title="Films">
      <!-- <video controls src="https://youtu.be/nNpvWBuTfrc"/> -->
      <iframe
        slot="center"
        width="100%"
        height=""
        src="https://www.youtube.com/embed/nNpvWBuTfrc?start=1"
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
      <template v-slot:footer>
         <div class="foot" >
            <a href="https://v2.vuejs.org/v2/guide/components-slots.html">classic</a>
            <a href="https://v2.vuejs.org/v2/guide/components-slots.html">HOT</a>
            <a href="https://v2.vuejs.org/v2/guide/components-slots.html">5 stars</a>
        </div>
        <h4>Welcome to theater</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category";
export default {
  name: "App",
  components: { Category },
  data() {
    return {
      foods: ["Hot pot", "Grill", "Lobter", "Steak"],
      games: ["Mario", "Dance Dance", "Tempo Run", "Cat war"],
      films: ["Godfater", "Matrix", "Your turn to kill", "The sinner"],
    };
  },
};
</script>

<style>
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
h4{
  text-align: center;
}
</style>
