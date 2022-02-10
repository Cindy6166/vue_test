<template>
  <div>
    <h1>sum:{{sum}}</h1>
    <h3>sum times Ten:{{bigSum}}</h3>
    <h3>I'm in {{school}}, study {{subject}}</h3>
    <h3 style="color:red">Total Members (from Members): {{membersList.length}}</h3>
    <select v-model.number="n">
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
    <button @click="increment(n)">+</button>
    <button @click="decrement(n)">-</button>
    <button @click="incrementOdd(n)">increment if it is odd number</button>
    <button @click="incrementWait(n)">wait a second then increment</button>
  </div>
</template>

<script>
import {mapState, mapGetters, mapMutations, mapActions} from 'vuex'
export default {
  name: "Count",
  data() {
    return {
      n: 1,
    };
  },
  computed:{
    ...mapState('countAbout',['sum','school', 'subject']),
    ...mapState('personAbout',['membersList']),

    ...mapGetters('countAbout',['bigSum'])
  },
  methods: {
    ...mapMutations('countAbout',{increment:'PLUS', decrement:'MINUS'}),

    ...mapActions('countAbout',{incrementOdd:'plusOdd',incrementWait:'plusWait'}),

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