<template>
  <div>
    <h2 @click="showName">School Name: {{ name }}</h2>
    <h2>School Address: {{ address }}</h2>
  </div>
</template>

<script>
// import {mixin, mixin2} from '../mixin'

export default {
    name:'School',
    data() {
        return {
            name: "LALA",
            address: "17 Yanigin Drive",
            x:666
        };
    },
    // mixins:[mixin, mixin2],
    // mounted(){
    //   console.log('Hahahalo!!!');
    // }
};
</script>
