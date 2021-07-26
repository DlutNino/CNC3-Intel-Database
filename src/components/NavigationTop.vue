<template>
    <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        id="navigation_top"
        mode="horizontal"
        @select="handleSelect"
        background-color="#305B9D"
        text-color="#fff"
        active-text-color="#ffd04b">
      <Title></Title>
      <el-menu-item index="1" class="el_menu_item">
        <router-link to="/eva" class="router_link">E.V.A 情报中心</router-link>
      </el-menu-item>
      <el-menu-item index="2" class="el_menu_item">
        <router-link to="/legion" class="router_link">LEGION 情报系统</router-link>
      </el-menu-item>
      <el-menu-item index="3" class="el_menu_item">
        <router-link to="/kane_wrath" class="router_link">《凯恩之怒》特别情报</router-link>
      </el-menu-item>
      <el-menu-item index="4" class="el_menu_item" disabled="disabled">
        <router-link to="/commander" class="router_link" disabled="disabled">指挥官基地</router-link>
      </el-menu-item>
    </el-menu>
</template>

<script>
import Title from "./Title";
export default {
  name: "NavigationTop",
  components: {
    Title,
  },
  data() {
    return {
      // activeIndex: '1',
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>

<style scoped>
#navigation_top{
  display: flex;
  justify-content: space-around;
}
.el_menu_item{
  font-size: 1em;
  font-weight: bold;
}
</style>