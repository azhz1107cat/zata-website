<template>
  <div id="app">
    <div align="center" style="text-align: center;">
      <h1 class="text-center my-8 text-2xl font-bold">Zata 版本下载</h1>
      <h4>zata 是一个简单的, 面向对象的, 开源的编程语言</h4>

    </div>
    <DownloadCard :news_list="newsList" />
  </div>
</template>

<script>
// 引入我们创建的组件
import DownloadCard from './components/DownloadCard.vue'

export default {
  name: 'App',
  components: {
    // 注册组件
    DownloadCard
  },
  data() {
    return {
      // 准备示例数据
      newsList: [
        /*{
          is_newest: true,
          new_function: ["修复了已知bug", "添加了zata序列化相关功能", "增加了math, xj380库"],
          version: "v0.2",
          download_link: "#"
        },*/
        {
          is_newest: true,
          new_function: ["支持基础面向对象(debug...)", "支持基础函数与变量操作", "适配Windows和Linux系统", "支持使用c/c++函数", "简单的Editor"],
          version: "v0.1",
          download_link: "https://release-assets.githubusercontent.com/github-production-release-asset/1010587035/7ff6532c-d16d-4414-8f3f-0813cd5048d7?sp=r&sv=2018-11-09&sr=b&spr=https&se=2025-09-07T10%3A00%3A43Z&rscd=attachment%3B+filename%3Dzata-setup.exe&rsct=application%2Foctet-stream&skoid=96c2d410-5711-43a1-aedd-ab1947aa7ab0&sktid=398a6654-997b-47e9-b12b-9515b896b4de&skt=2025-09-07T09%3A00%3A39Z&ske=2025-09-07T10%3A00%3A43Z&sks=b&skv=2018-11-09&sig=wY9q1TOr20g10%2Buk%2BNiPePibP3a402wVugRenMiUIdI%3D&jwt=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmVsZWFzZS1hc3NldHMuZ2l0aHVidXNlcmNvbnRlbnQuY29tIiwia2V5Ijoia2V5MSIsImV4cCI6MTc1NzIzNjQxMCwibmJmIjoxNzU3MjM2MTEwLCJwYXRoIjoicmVsZWFzZWFzc2V0cHJvZHVjdGlvbi5ibG9iLmNvcmUud2luZG93cy5uZXQifQ.xrgmwPGu8xqaSxfe0yzptWa-ZwBEDYMzPoMWxzrtSN8&response-content-disposition=attachment%3B%20filename%3Dzata-setup.exe&response-content-type=application%2Foctet-stream"
        }
      ]
    }
  }
}
</script>

<style>
#app {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>