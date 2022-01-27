<template>
    <div>
        <h1 v-text="msg" ref="title"></h1>
        <button ref="btn" @click="showDOM">Show DOM</button>
        <School ref="sch"/>
    </div>
</template>

<script>
import School from './components/School'
export default {
   name:'App',
   components:{School},
   data() {
       return {
           msg:'Welcome to Vue'
       }
   },
   methods:{
       showDOM() {
           console.log(this.$refs.title);
           console.log(this.$refs.btn);
           console.log(this.$refs.sch); //get vc
       }
   }
}
</script>

<style>

</style>