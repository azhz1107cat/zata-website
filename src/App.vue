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
          new_function: ["修复了已知bug", "添加了zata序列号相关功能", "增加了math, xj380库"],
          version: "v0.2",
          download_link: "#"
        },*/
        {
          is_newest: true,
          new_function: ["支持基础面向对象", "支持基础函数与变量操作", "适配Windows和Linux系统", "支持使用c/c++函数", "简单的Editor"],
          version: "v0.1",
          download_link: "#"
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