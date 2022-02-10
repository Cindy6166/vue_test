<template>
  <ul>
    <li>Number: {{id}}</li>
    <li>Title: {{title}}</li>
    <!-- <li>a:{{a}}, b:{{b}}</li> -->
  </ul>
</template>

<script>
export default {
  name: "Detail",
  props:['id','title'],
  // computed:{
  //   id(){
  //     return this.$route.query.id
  //   },
  //   title(){
  //     return this.$route.query.title
  //   }
  // },
  mounted() {
    console.log(this.$route);
  },
};
</script>

<style>
</style>