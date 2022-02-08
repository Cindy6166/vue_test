<template>
  <div class="container">
    <Category title="Foods" :listData="foods">
      <img
        src="https://www.meatpoultry.com/ext/resources/MPImages/08-2020/083120/wendys-pretzel-bacon-pub-burger.jpg?height=635&t=1598978033&width=1200"
        alt=""
      />
    </Category>
    <Category title="Games" :listData="games">
      <ul>
        <li v-for="(item, index) in games" :key="index">{{ item }}</li>
      </ul>
    </Category>
    <Category title="Films"> 
        <!-- <video controls src="https://youtu.be/nNpvWBuTfrc"/> -->
        <iframe width="100%" height="" src="https://www.youtube.com/embed/nNpvWBuTfrc?start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
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
.container {
  display: flex;
  justify-content: space-around;
}
</style>
