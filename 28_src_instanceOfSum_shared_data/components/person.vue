<template>
  <div>
      <h1>Members</h1>
      <h3 style="color:red">Sum from Count component: {{sum}}</h3>
      <input type="text" placeholder="your name here" v-model="name">
      <button @click="add">Add</button>
      <ul>
          <li v-for="p in membersList " :key="p.id">{{p.name}}</li>
      </ul>
  </div>
</template>

<script>
import {nanoid} from 'nanoid'
export default {
    name: 'Person',
    data(){
        return {
            name: ''
        }
    },
    computed:{
        membersList(){
            return this.$store.state.membersList
        },
        sum(){
            return this.$store.state.sum
        }
        // ...mapState(['membersList'])
    },
    methods:{
        add(){
            const memberObj = {id:nanoid(), name:this.name}
            this.$store.commit('ADD_MEMBER', memberObj)
        }
    }
}
</script>

<style>

</style>