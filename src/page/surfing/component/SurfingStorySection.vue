<template>
  <div :class="['story-section', storyClass]">
    <div class="story-container">
      <div class="story-text">
        <p class="story-title">{{ title }}</p>
        <p class="story-description">{{ description }}</p>
      </div>
      <div class="story-image">
        <img :src="imageSrc" :alt="imageAlt">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SurfingStorySection',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    imageName: {
      type: String,
      required: true
    },
    imageAlt: {
      type: String,
      required: true
    },
    imagePosition: {
      type: String,
      default: 'right',
      validator: (value) => ['left', 'right'].includes(value)
    },
    storyClass: {
      type: String,
      required: true
    }
  },
  computed: {
    imageSrc() {
      return `/surfing/${this.imageName}.png`
    }
  }
}
</script>

<style scoped>
.story-section {
  width: 100%;
  padding: 6.25vw 10vw;
}

.story-first-encounter {
  background: white;
}

.story-achieve-results {
}

.story-love-surfing {
}

.story-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.story-text {
  padding: 40px 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.story-title {
  font-size: 64px;
  font-weight: 500;
  margin: 0 0 6.25vw 0;
  color: #1A2C44;
}

.story-description {
  font-size: 32px;
  line-height: 48px;
  color: #666;
  margin: 0;
  max-width: 460px;
}

.story-image {
  position: relative;
  overflow: hidden;
}

.story-image img {
  width: 100%;
  height: auto;
  display: block;
}

/* 特殊布局 */
.story-first-encounter .story-container {
  grid-template-columns: 1fr 1fr;
}

.story-achieve-results .story-container {
  grid-template-columns: 1.2fr 1fr;
}

.story-love-surfing .story-container {
  grid-template-columns: 1fr 1.2fr;
}

@media (max-width: 1024px) {
  .story-section {
    padding: 5vw 5vw;
  }

  .story-title {
    font-size: 48px;
  }

  .story-description {
    font-size: 24px;
    line-height: 36px;
  }
}

@media (max-width: 768px) {
  .story-section {
    padding: 30px 20px;
  }

  .story-container {
    flex-direction: column;
  }

  .story-text {
    padding: 20px 0;
    text-align: center;
  }

  .story-title {
    font-size: 28px;
    margin: 0 0 15px 0;
  }

  .story-description {
    font-size: 14px;
    line-height: 24px;
    max-width: 100%;
  }

  .story-first-encounter .story-container,
  .story-achieve-results .story-container,
  .story-love-surfing .story-container {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .story-section {
    padding: 20px 15px;
  }

  .story-title {
    font-size: 20px;
  }

  .story-description {
    font-size: 12px;
    line-height: 20px;
  }
}
</style>
