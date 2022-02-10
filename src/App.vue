<template>
  <div>
    <button>original button</button>
    <input type="text" />
    <el-row>
      <my-button>默认按钮</my-button>
      <my-button type="primary">主要按钮</my-button>
      <my-button type="success">成功按钮</my-button>
      <my-button type="info">信息按钮</my-button>
      <my-button type="warning">警告按钮</my-button>
      <my-button type="danger">危险按钮</my-button>
    </el-row>
     <el-date-picker
      v-model="value1"
      type="date"
      placeholder="选择日期">
    </el-date-picker>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>
