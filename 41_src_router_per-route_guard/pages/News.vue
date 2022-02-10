<template>
  <ul>
    <li :style="{ opacity }">Welcome to learn Vue</li>
    <li>news001 <input type="text" /></li>
    <li>news002 <input type="text" /></li>
    <li>news003 <input type="text" /></li>
  </ul>
</template>

<script>
export default {
  name: "News",
  data() {
    return {
      opacity: 1,
    };
  },
  // beforeDestroy() {
  //   console.log("destroying");
  //   clearInterval(this.timer)
  // },
  // mounted(){
  //   this.timer = setInterval(()=>{
  //    console.log('@')
  //     this.opacity -= 0.01
  //     if(this.opacity <= 0) this.opacity = 1
  //   },16)
  // },
  activated() {
    console.log("News is activated");
    this.timer = setInterval(() => {
      // console.log("@");
      this.opacity -= 0.01;
      if (this.opacity <= 0) this.opacity = 1;
    }, 16);
  },
  deactivated() {
    console.log("News is deactivated");
    clearInterval(this.timer);
  },
};
</script>

<style>
</style>