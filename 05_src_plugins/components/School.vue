<template>
  <div>
    <h2>School Name: {{ name | mySlice }}</h2>
    <h2>School Address: {{ address }}</h2>
    <button @click="test">click me</button>
  </div>
</template>

<script>
export default {
    name:'School',
    data() {
        return {
            name: "LALALLLLL",
            address: "17 Yanigin Drive",
        };
    },
    methods:{
      test(){
        this.hello()
      }
    }
};
</script>