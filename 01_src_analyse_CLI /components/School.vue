<template>
  <div class="demo">
    <h2>School Name: {{ name }}</h2>
    <h2>School Address: {{ address }}</h2>
    <button @click="showName">show Name</button>
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
    methods: {
        showName() {
            alert(this.name);
        },
    },
};
</script>

<style>
.demo {
  background-color: orange;
}
</style>