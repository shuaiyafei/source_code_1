<template>
  <IntroSection />
  <Footer />
  <section class="gallery-section-fix" :class="{ 'hidden': isAtTop, 'bottom': isAtBottom }">
    <div class="gallery-section-fix-bg"></div>
  </section>
</template>

<script>
import { defineAsyncComponent } from 'vue'

const IntroSection = defineAsyncComponent(() => import('./IntroSection.vue'))
const Footer = defineAsyncComponent(() => import('./Footer.vue'))

export default {
  name: 'GallerySection',
  components: {
    IntroSection,
    Footer
  },
  data() {
    return {
      scrollOffset: 0,
      rafId: null,
      isAtTop: true,
      isAtBottom: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
    this.handleScroll() // 初始化检查
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
    if (this.rafId) {
      cancelAnimationFrame(this.rafId)
    }
  },
  methods: {
    handleScroll() {
      if (this.rafId) {
        cancelAnimationFrame(this.rafId)
      }

      this.rafId = requestAnimationFrame(() => {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop
        const windowHeight = window.innerHeight
        const documentHeight = document.documentElement.scrollHeight

        // 判断是否在顶部（允许10px的误差）
        this.isAtTop = scrollTop <= 10

        // 判断是否在底部（允许100px的误差）
        this.isAtBottom = scrollTop + windowHeight >= documentHeight - 100
      })
    }
  }
}
</script>

<style scoped>
.gallery-section {
  position: relative;
  overflow: hidden;
  z-index: 1;
  height: 100vh;
}

.gallery-section-fix {
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  background: #fff;
  transition: height 0.3s ease;
}

/* 在顶部时隐藏 */
.gallery-section-fix.hidden {
  display: none;
}

/* 在底部时修改高度为80vh */
.gallery-section-fix.bottom {
  height: 80vh;
}

.gallery-section-fix-bg {
  background: url('/home/bg_bottom.png') no-repeat center center;
  background-size: cover;
  height: 100vh;
  width: 100vw;
}

@media (max-width: 768px) {
  .gallery-section-fix {
    height: 80vh;
  }

  .gallery-section-fix.bottom {
    height: 60vh;
  }

  .gallery-section-fix-bg {
    height: 80vh;
  }
}

@media (max-width: 480px) {
  .gallery-section-fix {
    height: 60vh;
  }

  .gallery-section-fix.bottom {
    height: 50vh;
  }

  .gallery-section-fix-bg {
    height: 60vh;
  }
}
</style>
