<template>
  <div class="max-w-md w-full bg-white rounded-lg shadow-md overflow-hidden">
    <div 
      v-for="(news, index) in news_list" 
      :key="index" 
      class="border-b last:border-0 border-gray-100 transition-all duration-300 hover:shadow-sm"
    >
      <!-- 标题和展开按钮区域 -->
      <div class="flex items-center justify-between p-4">
        <h3 class="text-lg font-semibold text-gray-800">
          下载Zata {{ news.version }}
        </h3>
        <button 
          @click="toggleExpand(index)"
          class="text-gray-500 hover:text-gray-700 transition-colors"
          aria-label="切换更新列表显示状态"
        >
          <<i 
            class="fa" 
            :class="expandedIndices.includes(index) ? 'fa-chevron-up' : 'fa-chevron-down'"
          ></</i>
        </button>
      </div>

      <!-- 更新内容和下载按钮区域 -->
      <div class="px-4 pb-4">
        <div class="flex flex-col md:flex-row gap-4">
          <!-- 本次更新列表 -->
          <div class="flex-1">
            <p class="text-sm font-medium text-gray-600 mb-2">本次更新：</p>
            <ul class="text-sm text-gray-600 space-y-1 ml-5">
              <li 
                v-for="(item, i) in news.new_function" 
                :key="i" 
                class="list-disc"
              >
                {{ item }}
              </li>
            </ul>
          </div>

          <!-- 下载按钮 -->
          <div class="flex items-center">
            <a 
              :href="news.download_link" 
              target="_blank" 
              rel="noopener noreferrer"
              class="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
            >
              <<i class="fa fa-download mr-2"></</i>
              <span>下载</span>
            </a>
          </div>
        </div>
      </div>

      <!-- 最新版本标识 -->
      <div 
        v-if="news.is_newest"
        class="absolute top-4 right-16 bg-green-500 text-white text-xs px-2 py-1 rounded-full"
      >
        最新版本
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DownloadCard',
  props: {
    news_list: {
      type: Array,
      required: true,
      default: () => []
    }
  },
  data() {
    return {
      expandedIndices: [] // 存储展开的索引
    }
  },
  mounted() {
    // 默认展开最新版本
    const newestIndex = this.news_list.findIndex(news => news.is_newest)
    if (newestIndex !== -1) {
      this.expandedIndices.push(newestIndex)
    }
  },
  methods: {
    toggleExpand(index) {
      const indexInArray = this.expandedIndices.indexOf(index)
      if (indexInArray > -1) {
        this.expandedIndices.splice(indexInArray, 1)
      } else {
        this.expandedIndices.push(index)
      }
    }
  }
}
</script>

<style scoped>
/* 为展开/收起添加动画效果 */
ul {
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
}

.expanded ul {
  max-height: 500px;
  transition: max-height 0.5s ease-in;
}
</style>