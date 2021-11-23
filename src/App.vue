<template>
  <div id="app">    
    <div class="mask">
      <!-- 导航 -->
      <van-nav-bar
        title="标题"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
      <!-- 内容 -->
      <content>
        <router-view/>
      </content>
    </div>
  </div>
</template>

<script>
import { NavBar } from 'vant'
import View from '@/components/View/index.vue'
import Content from '@/components/Content/index.vue'
export default {
  name: 'App',
  components: {
    [NavBar.name]: NavBar,
    View,
    Content
  },
  methods: {
    // 返回
    onClickLeft () {
      console.log('返回')
    }
  }
}
</script>

<style lang="less">
  @import './assets/less/_reset.less';
  #app{
    width: 100%;
    height: 100%;
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
    box-sizing: border-box;
  }
  .mask{
    height: 100vh;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;
  }
  
</style>