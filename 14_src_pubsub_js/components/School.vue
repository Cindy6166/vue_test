<template>
  <div class="school">
    <h2>School Name: {{ name }}</h2>
    <h2>School Address: {{ address }}</h2>
  </div>
</template>

<script>
import pubsub from 'pubsub-js'
export default {
    name:'School',
    data() {
        return {
            name: "LALA",
            address: "17 Yanigin Drive",
        };
    },
    methods:{
      // pubsubHello(msgName,data){
      //   console.log('hello callback function is running',data,this);
      // }
    },
    mounted(){
      //   this.$bus.$on('hello', (data)=>{
      //   console.log('school got data', data);
      // })
      this.pubId = pubsub.subscribe('hello', (msgName,data)=>{
        console.log(this);
        console.log('hello callback function is running',msgName,data);
      })
      // this.pubId = pubsub.subscribe('hello', this.pubsubHello)
    },
    beforeDestroy(){
      // this.$bus.$off('hello')
      pubsub.unsubscribe(this.pubId)
    }
};
</script>

<style lang="less" scoped>
.school {
  background-color: orange;
  padding: 5px;
}
</style>