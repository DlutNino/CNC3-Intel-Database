<template>
  <div class="block">
    <el-carousel trigger="click" :height="screenwidth">
      <el-carousel-item v-for="item in pictures" :key="item.id">
        <img :src="item.link" alt="" class="carousel_picture">
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data(){
    return {
      pictures: [
        {
          link: require('../assets/for_carousel/1.jpg')
        },
        {
          link: require('../assets/for_carousel/2.jpg')
        },
        {
          link: require('../assets/for_carousel/3.jpg')
        },
        {
          link: require('../assets/for_carousel/4.jpg')
        },
      ],
      screenwidth: (document.documentElement.clientWidth * 668) / 1620 + "px",
    }
  },
  mounted() {

    window.onresize = () => {
      return (() => {
        if (document.documentElement.clientWidth > 960) {
          this.screenwidth =
              (document.documentElement.clientWidth * 668) / 1620 + "px";
        }
      })();
    }
  }
}
</script>

<style scoped>
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
.carousel_picture{
  width: 100%;
}
</style>