<template>
  <div class="demo">
    <h2 class="title">Student Name: {{ name }}</h2>
    <h2>Student Age: {{ age }}</h2>
  </div>
</template>

<script>
export default {
    name:'Student',
    data() {
        return {
            name: "Tom",
            age: 17,
        };
    }
};
</script>
<style scoped>
.demo{
  background-color: skyblue;
}
</style>