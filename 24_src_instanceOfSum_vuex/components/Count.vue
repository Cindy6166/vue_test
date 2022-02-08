<template>
  <div>
    <h1>sum:{{$store.state.sum}}</h1>
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
export default {
  name: "Count",
  data() {
    return {
      n: 1,
    };
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
    //   if(this.$store.state.sum % 2){
    //       this.$store.dispatch('plus', this.n)
    //   }
    },
    incrementWait() {
        this.$store.dispatch('plusWait', this.n)
    //   setTimeout(() => {
    //       this.$store.dispatch('plus', this.n)
    //   }, 500);
    },
  },
};
</script>

<style>
button {
  margin-left: 5px;
}
</style>