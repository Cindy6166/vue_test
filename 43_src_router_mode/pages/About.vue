<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
  name: "About",
  // mounted(){
  //   console.log('mounted');
  // },
  // beforeDestroy(){
  //   console.log('destroy');
  // }
  beforeRouteEnter(to, from, next) {
    console.log("enter");
    if (to.meta.isAuth) {
      if (localStorage.getItem("school") === "LaLal") {
        next();
      } else {
        alert("Permission denied, school name is incorrect");
      }
    } else {
      next();
    }
  },
  beforeRouteLeave(to, from, next) {
    console.log("leave");
    next()
  },
};
</script>

<style>
</style>