<template>
  <div>
      <h1>Members</h1>
      <h3 style="color:red">Sum from Count component: {{sum}}</h3>
      <h3>getters: {{firstMemberName}}</h3>
      <input type="text" placeholder="your name here" v-model="name">
      <button @click="add">Add</button>
      <button @click="addWang">Add wang</button>
      <button @click="addMemberServer">Add Member</button>
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
            return this.$store.state.personAbout.membersList
        },
        sum(){
            return this.$store.state.countAbout.sum
        },
        firstMemberName(){
            return this.$store.getters['personAbout/firstMemberName']
        }
        // ...mapState(['membersList'])
    },
    methods:{
        add(){
            const memberObj = {id:nanoid(), name:this.name}
            this.$store.commit('personAbout/ADD_MEMBER', memberObj)
            this.name = ''
        },
        addWang() {
            const memberObj = {id:nanoid(), name:this.name}
            this.$store.dispatch('personAbout/addMemberW', memberObj)
            this.name = ''
        },
        addMemberServer(){
            this.$store.dispatch('personAbout/addMemberServer')
        }
    }
}
</script>

<style>

</style>