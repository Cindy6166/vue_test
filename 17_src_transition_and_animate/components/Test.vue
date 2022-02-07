<template>
  <div>
      <button @click="isShow=!isShow">Show/Hide</button>
      <transition name="hello" appear>
        <h1 v-show="isShow" class="come">Hello!</h1>
      </transition>
  </div>
</template>

<script>
export default {
    name:'Test',
    data(){
        return {
            isShow:true
        }
    },

}
</script>

<style>
    h1{
        background-color: coral;
    }
    .hello-enter-active{
        animation: hi 0.5s linear;
    }
    .hello-leave-active{
        animation: hi 0.5s linear reverse;
    }

    @keyframes hi {
        from{
            transform: translateX(-100%);
        }
        to{
           transform: translate(0px); 
        }
    }
</style>