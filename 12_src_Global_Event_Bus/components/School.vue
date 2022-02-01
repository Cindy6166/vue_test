<template>
  <div class="school">
    <h2>School Name: {{ name }}</h2>
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
    },
    mounted(){
        this.$bus.$on('hello', (data)=>{
        console.log('school got data', data);
      })
    },
    beforeDestroy(){
      this.$bus.$off('hello')
    }
};
</script>

<style lang="less" scoped>
.school {
  background-color: orange;
  padding: 5px;
}
</style>