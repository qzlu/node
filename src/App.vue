<template>
  <div id="app">
    <div id="nav">
        <el-row class="tac">
            <el-col :span="12">
                <el-menu
                default-active=""
                class="el-menu-vertical-demo"
                router
                @open="handleOpen"
                @close="handleClose">
                <el-menu-item index="/" >
                    <i class="iconfont icon-shouye"></i>
                    <span slot="title">首页</span>
                </el-menu-item>
                <el-menu-item index="/chat" >
                    <i class="el-icon-message"></i>
                    <span slot="title">聊天室</span>
                </el-menu-item>
                <el-menu-item index="/about" >
                    <i class="el-icon-menu"></i>
                    <span slot="title">导航二</span>
                </el-menu-item>
                <el-menu-item index="4">
                    <i class="el-icon-setting"></i>
                    <span slot="title">导航四</span>
                </el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </div>
    <div class="main">
        <transition>  
            <router-view/>
        </transition> 
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isCollapse: true
    };
  },
  mounted(){
    // console.log(this.$router.options.routes);
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
}
#nav {
  height: 100%;
  float: left;
  border-right: 1px solid #cccccc;
}
#nav .iconfont{
    margin-right: 5px;
    width: 24px;
    text-align: center;
    font-size: 18px;
    vertical-align: middle;
    display: inline-block;
}
.main {
  height: 100%;
  padding-left: 200px;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
