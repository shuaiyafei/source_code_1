<template>
  <section id="home" class="video-hero">
    <div class="video-container">
      <div class="video-placeholder">
        <!-- Carousel images -->
        <div class="carousel-wrapper">
          <img
            v-for="(image, index) in images"
            :key="index"
            :src="image"
            :alt="`Carousel ${index + 1}`"
            class="hero-image"
            :class="{ 'active': index === currentImageIndex }"
          />
        </div>
        <!-- Carousel indicators -->
        <div class="carousel-indicators">
          <div
            v-for="(image, index) in images"
            :key="`indicator-${index}`"
            class="indicator"
            :class="{ 'active': index === currentImageIndex }"
            @click="goToImage(index)"
          ></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'VideoHero',
  data() {
    return {
      images: [
        '/home/swiper_1.png',
        '/home/swiper_2.png'
      ],
      currentImageIndex: 0,
      carouselInterval: null
    }
  },
  mounted() {
    this.startCarousel()
  },
  beforeUnmount() {
    this.stopCarousel()
  },
  methods: {
    startCarousel() {
      this.carouselInterval = setInterval(() => {
        this.currentImageIndex = (this.currentImageIndex + 1) % this.images.length
      }, 2000)
    },
    stopCarousel() {
      if (this.carouselInterval) {
        clearInterval(this.carouselInterval)
      }
    },
    goToImage(index) {
      this.currentImageIndex = index
      // 重新开始计时器
      this.stopCarousel()
      this.startCarousel()
    }
  }
}
</script>

<style scoped>
.video-hero {
  position: relative;
  width: 100%;
  height: 63.8vw;
  min-height: 600px;
  overflow: hidden;
  margin-top: 95px;
  z-index: 1;
}

@media (max-width: 768px) {
  .video-hero {
    height: 100vw;
    min-height: 400px;
    margin-top: 70px;
  }
}

@media (max-width: 480px) {
  .video-hero {
    height: 120vw;
    min-height: 300px;
    margin-top: 60px;
  }
}

.video-container {
  width: 100%;
  height: 100%;
  position: relative;
}

.video-placeholder {
  width: 100%;
  height: 100%;
  position: relative;
}

.carousel-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.hero-image {
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0;
  transition: opacity 0.8s ease-in-out;
}

.hero-image.active {
  opacity: 1;
}

.carousel-indicators {
  position: absolute;
  bottom: 30px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 12px;
  z-index: 20;
}

.indicator {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator:hover {
  background: rgba(255, 255, 255, 0.8);
}

.indicator.active {
  background: white;
  width: 30px;
  border-radius: 6px;
}

.scroll-indicator {
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
}

.mouse {
  width: 26px;
  height: 40px;
  border: 2px solid white;
  border-radius: 13px;
  position: relative;
  animation: float 2s ease-in-out infinite;
}

.wheel {
  width: 4px;
  height: 8px;
  background: white;
  border-radius: 2px;
  position: absolute;
  top: 8px;
  left: 50%;
  transform: translateX(-50%);
  animation: scroll 2s ease-in-out infinite;
}

@keyframes float {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-10px);
  }
}

@keyframes scroll {
  0% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }

  100% {
    opacity: 0;
    transform: translateX(-50%) translateY(15px);
  }
}
</style>
