<template>
  <div class="demo">
    <h2 class="font40">School Name: {{ name }}</h2>
    <h2>School Address: {{ address }}</h2>
  </div>
</template>

<script>
export default {
    name:'School',
    data() {
        return {
            name: "LALA",
            address: "17 Yanigin Drive",
        };
    }
};
</script>

<style lang="less" scoped>
.demo {
  background-color: orange;
  .font40{
    font-size: 40px;
  }
}
</style>