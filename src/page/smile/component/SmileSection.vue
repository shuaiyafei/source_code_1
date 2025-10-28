<template>
  <div class="smile-section">
    <div class="section-container">
      <div v-if="imagePosition === 'left'" class="section-image">
        <img :src="imageSrc" :alt="imageAlt">
      </div>
      <div class="section-text">
        <p class="section-title">{{ title }}</p>
        <p class="section-description">{{ description }}</p>
      </div>
      <div v-if="imagePosition === 'right'" class="section-image">
        <img :src="imageSrc" :alt="imageAlt">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SmileSection',
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
    }
  },
  computed: {
    imageSrc() {
      return `/smile/${this.imageName}.png`
    }
  }
}
</script>

<style scoped>
.smile-section {
  width: 100%;
  padding: 80px 40px;
}

.section-container {
  max-width: 1400px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.section-text {
  padding: 40px 0;
}

.section-title {
  font-size: 48px;
  font-weight: 700;
  margin: 0 0 20px 0;
  color: #333;
}

.section-description {
  font-size: 16px;
  line-height: 1.8;
  color: #666;
  margin: 0;
}

.section-image {
  position: relative;
  overflow: hidden;
  border-radius: 4px;
}

.section-image img {
  width: 100%;
  height: auto;
  display: block;
}

@media (max-width: 1024px) {
  .smile-section {
    padding: 60px 30px;
  }

  .section-container {
    gap: 40px;
  }

  .section-title {
    font-size: 36px;
  }

  .section-description {
    font-size: 14px;
  }
}

@media (max-width: 768px) {
  .smile-section {
    padding: 40px 20px;
  }

  .section-container {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .section-text {
    padding: 20px 0;
  }

  .section-title {
    font-size: 24px;
  }

  .section-description {
    font-size: 13px;
    line-height: 1.6;
  }
}

@media (max-width: 480px) {
  .smile-section {
    padding: 30px 15px;
  }

  .section-text {
    padding: 15px 0;
  }

  .section-title {
    font-size: 18px;
  }

  .section-description {
    font-size: 12px;
    line-height: 1.5;
  }
}
</style>
