<template>
  <div class="intelligence">
    <h3 class="intelligence_title" style="text-align: center;">{{title}}</h3>
    <el-tabs v-model="activeName" @tab-click="handleClick">
      <el-tab-pane label="翻译 by Nino" name="first" >
        <h4>{{tr_source}}</h4>
        <p class="tab_text" v-for="para in translation" :key="para.id" style="text-indent:2em;">{{para}}</p>
        <h4>{{tr_remark}}</h4>
      </el-tab-pane>
      <el-tab-pane label="原文" name="second">
        <h4>{{or_source}}</h4>
        <p class="tab_text" v-for="para in original" :key="para.id">{{para}}</p>
        <h4>{{or_remark}}</h4>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
export default {
  name: "Intelligence",
  props: {
    title: String,
    translation: Array,
    original: Array,
    tr_source: String,
    tr_remark: String,
    or_source: String,
    or_remark: String,
  },
  data() {
    return {
      activeName: 'first'
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    }
  },
}
</script>

<style scoped>
.intelligence{
  display: flex;
  flex-direction: column;
  width: 50%;
  margin-left: 10%;
}
.tab_text{
  margin: 1% 6%;
  line-height: 190%;
}
</style>