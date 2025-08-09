<template>
  <div class="container mx-auto p-4">
    <h2 class="text-2xl font-bold mb-6">Zata 版本下载</h2>
    <!-- 使用下载卡片组件 -->
    <DownloadCard :news_list="newsList" />
  </div>
</template>

<script>
// 引入组件
import DownloadCard from '../components/DownloadCard.vue'

export default {
  components: {
    // 注册组件
    DownloadCard
  },
  data() {
    return {
      // 准备数据
      newsList: [
        {
          is_newest: true,
          new_function: ["添加了批量处理功能", "优化了加载速度"],
          version: "v1.0",
          download_link: "/download/zata-v1.0.exe"
        },
        {
          is_newest: false,
          new_function: ["初始版本发布", "基础功能支持"],
          version: "v0.9",
          download_link: "/download/zata-v0.9.exe"
        }
      ]
    }
  }
}
</script>