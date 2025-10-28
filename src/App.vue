<template>
  <div id="app">
    <Navigation />
    <Home v-if="currentPage === 'home'" />
    <About v-if="currentPage === 'about'" />
    <Surfing v-if="currentPage === 'surfing'" />
    <Expedition v-if="currentPage === 'expedition'" />
    <Research v-if="currentPage === 'research'" />
    <Smile v-if="currentPage === 'smile'" />
    <Art v-if="currentPage === 'art'" />
    <Footer />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

// 立即加载关键组件
import Home from './page/home/index.vue'
import About from './page/about/index.vue'
import Surfing from './page/surfing/index.vue'
import Expedition from './page/expedition/index.vue'
import Research from './page/research/index.vue'
import Smile from './page/smile/index.vue'
import Art from './page/art/index.vue'
import Navigation from './page/home/components/Navigation.vue'
import Footer from './page/home/components/Footer.vue'

export default {
  name: 'App',
  components: {
    Home,
    About,
    Surfing,
    Expedition,
    Research,
    Smile,
    Art,
    Navigation,
    Footer
  },
  data() {
    return {
      currentPage: 'home'
    }
  },
  mounted() {
    // 监听 hash 变化
    window.addEventListener('hashchange', this.handleHashChange)
    // 初始化页面
    this.handleHashChange()
  },
  beforeUnmount() {
    window.removeEventListener('hashchange', this.handleHashChange)
  },
  methods: {
    handleHashChange() {
      const hash = window.location.hash.slice(1) || 'home'

      // 根据 hash 确定要显示的页面
      if (hash === 'about') {
        this.currentPage = 'about'
      } else if (hash === 'surfing') {
        this.currentPage = 'surfing'
      } else if (hash === 'expedition') {
        this.currentPage = 'expedition'
      } else if (hash === 'research') {
        this.currentPage = 'research'
      } else if (hash === 'smile') {
        this.currentPage = 'smile'
      } else if (hash === 'art') {
        this.currentPage = 'art'
      } else {
        this.currentPage = 'home'
      }

      // 滚动到顶部
      this.$nextTick(() => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      })
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Roboto', sans-serif;
  color: #333;
  overflow-x: hidden;
}

#app {
  width: 100%;
}
</style>
