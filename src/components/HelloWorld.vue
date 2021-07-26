<template>
  <div class="hello">
    <el-button>{{ message }}</el-button>
    <el-dialog :visible.sync="visible" title="Hello world">
      <p>Try Element</p>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      message: "Hello Element",
      visible: false,
    };
  },
  props: {
    msg: String
  }
}
</script>

<style scoped>

</style>
