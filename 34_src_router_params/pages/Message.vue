<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!-- switch route with params, way1 of to: string template  -->
        <!-- <router-link :to="`/home/message/detail/${m.id}/${m.title}`">{{
          m.title
        }}</router-link> -->

        <!-- switch route with params, way2 of to: object  -->
        <router-link
          :to="{
            name: 'myDetail', // if use params, can't use path
            params: {
              id: m.id,
              title: m.title,
            },
          }"
        >
          {{ m.title }}
        </router-link>
      </li>
    </ul>
    <hr />
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      messageList: [
        { id: "001", title: "message001" },
        { id: "002", title: "message002" },
        { id: "003", title: "message003" },
      ],
    };
  },
};
</script>

<style>
</style>