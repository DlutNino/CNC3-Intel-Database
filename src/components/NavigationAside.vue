<template>
    <el-col :span="12" class="navi_aside">
      <el-menu
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          background-color="#448CBB"
          text-color="#fff"
          active-text-color="#ffd04b">
        <el-submenu v-for="item in menu_items" :key="item.index" :index="item.index">
          <template slot="title">
            <span style="font-weight: bold">{{item.title}}</span>
          </template>
          <el-menu-item v-for="child in item.children" :key="child.index" :index="item.index + '-' + child.index">
            <router-link tag="div" :to="item.dest + '/' + child.dest" class="router_link">{{child.title}}</router-link>
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-col>
</template>

<script>
export default {
  name: "NavigationAside",
  props: {
    menu_items: Array,
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
.navi_aside{
  width: 25%;
  text-align: center;
}
</style>