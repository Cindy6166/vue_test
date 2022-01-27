<template>
  <div>
    <h2>Student Name: {{ name }}</h2>
    <h2>Student Age: {{ gender }}</h2>
    <input type="text" v-fbind:value="name">
  </div>
</template>

<script>
export default {
    name:'Student',
    data() {
        return {
            name: "Tom",
            gender: 'Male',
        };
    }
};
</script>
