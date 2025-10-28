<template>
  <div :class="['story-section', storyClass]">
    <div class="story-container">
      <div v-if="imagePosition === 'left'" class="story-image">
        <img :src="imageSrc" :alt="imageAlt">
      </div>
      <div class="story-text">
        <p class="story-age">{{ age }} <span class="age-unit">Years Old</span></p>
        <p class="story-description">{{ description }}</p>
      </div>
      <div v-if="imagePosition === 'right'" class="story-image">
        <img :src="imageSrc" :alt="imageAlt">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'StorySection',
  props: {
    age: {
      type: Number,
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
      return `/about/${this.imageName}.png`
    }
  }
}
</script>

<style scoped>
.story-section {
  width: 100%;
  padding: 80px 40px;
}

.story-4 {
  background: #BEDBF4;
}

.story-10 {
  background: white;
}

.story-13 {
  background: #EBE3E1;
}

.story-15 {
  background: white;
}

.story-16 {
  background: linear-gradient(135deg, #e8e8e8 0%, #f5f5f5 100%);
}

.story-container {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.story-text {
  padding: 40px 0;
}

.story-age {
  font-size: 64px;
  font-weight: 500;
  margin: 0 0 20px 0;
  color: #333;
  display: flex;
  align-items: baseline;
  gap: 10px;
}

.age-unit {
  font-size: 40px;
  font-weight: 500;
}

.story-description {
  font-size: 16px;
  line-height: 1.8;
  color: #666;
  margin: 0;
  width: 31.25vw;
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
.story-4 .story-container {
  grid-template-columns: 1fr 1.2fr;
}

.story-10 .story-container {
  grid-template-columns: 1fr 1fr;
}

.story-13 .story-container {
  grid-template-columns: 1.2fr 1fr;
}

.story-15 .story-container {
  grid-template-columns: 1fr 1.2fr;
}

.story-16 .story-container {
  grid-template-columns: 1.2fr 1fr;
}

/* 15岁图片旋转效果 */
.story-15 .story-image img {
  transform-origin: center;
}

@media (max-width: 1024px) {
  .story-section {
    padding: 60px 30px;
  }

  .story-container {
    gap: 40px;
  }

  .story-age {
    font-size: 48px;
  }

  .age-unit {
    font-size: 32px;
  }

  .story-description {
    font-size: 14px;
    width: 100%;
  }

  .story-4 .story-container,
  .story-10 .story-container,
  .story-13 .story-container,
  .story-15 .story-container,
  .story-16 .story-container {
    grid-template-columns: 1fr 1fr;
  }
}

@media (max-width: 768px) {
  .story-section {
    padding: 40px 20px;
  }

  .story-container {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .story-text {
    padding: 20px 0;
  }

  .story-age {
    font-size: 32px;
  }

  .age-unit {
    font-size: 24px;
  }

  .story-description {
    font-size: 13px;
    line-height: 1.6;
    width: 100%;
  }

  .story-4 .story-container,
  .story-10 .story-container,
  .story-13 .story-container,
  .story-15 .story-container,
  .story-16 .story-container {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .story-section {
    padding: 30px 15px;
  }

  .story-age {
    font-size: 24px;
  }

  .age-unit {
    font-size: 18px;
  }

  .story-description {
    font-size: 12px;
    line-height: 1.5;
  }
}

</style>
