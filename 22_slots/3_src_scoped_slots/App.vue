<template>
  <div class="container">
    <Category title="Games">
      <template scope="gameList">
        <ul>
          <li v-for="(item, index) in gameList.games" :key="index">{{ item }}</li>
        </ul>
      </template>
    </Category>
    <Category title="Games">
      <!-- 解構賦值 -->
      <template scope="{games}"> 
      <ol>
        <li style="color:red" v-for="(item, index) in games" :key="index">{{ item }}</li>
      </ol>
      </template>
    </Category>
    <Category title="Games">
      <template slot-scope="{games}"> 
        <h4 v-for="(item, index) in games" :key="index">{{ item }}</h4>
      </template>
    </Category>
  </div>
</template>

<script>
import Category from "./components/Category";
export default {
  name: "App",
  components: { Category },
};
</script>

<style>
.container,
.foot {
  display: flex;
  justify-content: space-around;
}
h4{
  text-align: center;
}
</style>
