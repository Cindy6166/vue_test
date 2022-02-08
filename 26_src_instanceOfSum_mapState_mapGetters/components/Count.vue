<template>
  <div>
    <h1>sum:{{sum}}</h1>
    <h3>sum times Ten:{{bigSum}}</h3>
    <h3>I'm in {{school}}, study {{subject}}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">increment if it is odd number</button>
    <button @click="incrementWait">wait a second then increment</button>
  </div>
</template>

<script>
import {mapState, mapGetters} from 'vuex'
export default {
  name: "Count",
  data() {
    return {
      n: 1,
    };
  },
  computed:{
    // sum(){
    //   return this.$store.state.sum
    // },
    // school(){
    //   return this.$store.state.school
    // },
    // subject(){
    //   return this.$store.state.subject
    // },

    // use mapState (object)
    // ... mapState({mySum:'sum', mySchool:'school', mySubject:'subject'}),

     // use mapState (array)
    ...mapState(['sum', 'school', 'subject']),
  /* **************************************************** */
    // bigSum(){
    //   return this.$store.getters.bigSum
    // },

    // ...mapGetters({bigSum:'bigSum'})
    ...mapGetters(['bigSum'])
  },
  methods: {
    increment() {
        this.$store.commit('PLUS', this.n)
    },
    decrement() {
        this.$store.commit('MINUS', this.n)
    },
    incrementOdd() {
        this.$store.dispatch('plusOdd', this.n)
    },
    incrementWait() {
        this.$store.dispatch('plusWait', this.n)
    },
  },
  mounted(){
    const x = mapState({mySum:'sum', mySchool:'school', mySubject:'subject'})
    console.log(x);
  }
};
</script>

<style>
button {
  margin-left: 5px;
}
</style>