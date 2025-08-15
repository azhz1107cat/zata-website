<template>
  <div class="card-container">
    <div 
      v-for="(news, index) in news_list" 
      :key="index" 
      class="card"
      :class="{ 'expanded': expandedIndices.includes(index) }"
    >
      <!-- 标题和展开按钮区域 -->
      <div class="card-header">
        <h3 class="card-title">下载Zata {{ news.version }}</h3>
        <button 
          @click="toggleExpand(index)"
          class="toggle-btn"
          aria-label="切换更新列表显示状态"
        >
          <i 
            class="fa" 
            :class="expandedIndices.includes(index) ? 'fa-chevron-up' : 'fa-chevron-down'"
          ></i>
        </button>
      </div>

      <!-- 更新内容和下载按钮区域 -->
      <div class="card-content">
        <div class="content-wrapper">
          <!-- 本次更新列表 -->
          <div class="update-list">
            <p class="list-title">本次更新：</p>
            <ul class="updates">
              <li 
                v-for="(item, i) in news.new_function" 
                :key="i" 
              >
                {{ item }}
              </li>
            </ul>
          </div>

          <!-- 下载按钮 -->
          <div class="download-btn-container">
            <a 
              :href="news.download_link" 
              target="_blank" 
              rel="noopener noreferrer"
              class="download-btn"
            >
              <i class="fa fa-download"></i>
              <span>下载</span>
            </a>
          </div>
        </div>
      </div>

      <!-- 最新版本标识 -->
      <div 
        v-if="news.is_newest"
        class="newest-tag"
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
      expandedIndices: []
    }
  },
  mounted() {
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
/* 容器样式 */
.card-container {
  max-width: 500px;
  width: 100%;
  margin: 0 auto;
  padding: 20px;
}

/* 卡片样式 */
.card {
  background-color: white;
  border-radius: 12px; /* 圆角 */
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08); /* 阴影 */
  margin-bottom: 16px; /* 卡片间距 */
  position: relative;
  overflow: hidden;
  border: 1px solid #f0f0f0;
  transition: all 0.3s ease;
}

.card:hover {
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12); /*  hover时加深阴影 */
}

/* 卡片头部 */
.card-header {
  padding: 16px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f5f5f5;
}

.card-title {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #333;
}

/* 展开/收起按钮 */
.toggle-btn {
  width: 36px;
  height: 36px;
  border-radius: 50%; /* 圆形按钮 */
  border: none;
  background-color: #f5f5f5;
  color: #666;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.2s ease;
  padding: 0;
}

.toggle-btn:hover {
  background-color: #e8e8e8;
  color: #333;
}

.toggle-btn .fa {
  font-size: 16px;
}

/* 卡片内容 */
.card-content {
  padding: 0 20px 20px;
}

.content-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding-top: 16px;
}

/* 更新列表 */
.update-list {
  flex: 1;
  min-width: 250px;
}

.list-title {
  margin: 0 0 8px 0;
  font-size: 14px;
  font-weight: 500;
  color: #666;
}

.updates {
  margin: 0;
  padding-left: 20px;
  max-height: 0;
  overflow: hidden;
  transition: max-height 0.3s ease-out;
}

/* 展开状态 */
.expanded .updates {
  max-height: 500px;
  transition: max-height 0.5s ease-in;
}

.updates li {
  margin-bottom: 6px;
  font-size: 14px;
  color: #555;
  list-style-type: disc;
}

/* 下载按钮 */
.download-btn-container {
  display: flex;
  align-items: center;
  padding-top: 4px;
}

.download-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  background-color: #2563eb;
  color: white;
  border-radius: 6px;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.2s ease;
  border: none;
  cursor: pointer;
}

.download-btn:hover {
  background-color: #1d4ed8;
  box-shadow: 0 2px 8px rgba(37, 99, 235, 0.3);
}

.download-btn .fa {
  font-size: 16px;
}

/* 最新版本标签 */
.newest-tag {
  position: absolute;
  top: 16px;
  right: 60px;
  background-color: #10b981;
  color: white;
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 12px;
  box-shadow: 0 2px 4px rgba(16, 185, 129, 0.2);
}
</style>