<template>
  <div class="category">
      <h3>{{title}}</h3>
      <slot>No data</slot>
      <!-- <ul>
        <li v-for="(item, index) in listData" :key="index">{{ item }}</li>
      </ul> -->
  </div>
</template>

<script>
export default {
    name:'Category',
    props:['listData', 'title']
}
</script>

<style lang="css" scoped>
.category{
    background-color: skyblue;
    width: 200px;
    height: 300px;
}
h3{
    text-align: center;
    background-color: orange;
}
img{
    width: 100%;
}
</style>