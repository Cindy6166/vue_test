<template>
  <div class="category">
    <h3>{{ title }}</h3>
    <slot :games="games">no data</slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["title"],
  data() {
    return {
      games: ["Mario", "Dance Dance", "Tempo Run", "Cat war"],
    };
  },
};
</script>

<style lang="css" scoped>
.category {
  background-color: skyblue;
  width: 200px;
  height: 300px;
}
h3 {
  text-align: center;
  background-color: orange;
}
img {
  width: 100%;
}
</style>