<template>
  <div class="view_field">
    <NavigationAside :menu_items="menu_items"></NavigationAside>
    <router-view></router-view>
  </div>
</template>

<script>
import NavigationAside from "./NavigationAside";
export default {
  name: "View",
  components: {
    NavigationAside
  },
  props: {
    menu_items: Array,
  },
  data(){
    return {

    }
  },
}
</script>

<style scoped>
.view_field{
  display: flex;
}
</style>