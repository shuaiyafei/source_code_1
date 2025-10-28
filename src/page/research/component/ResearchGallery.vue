<template>
  <div class="research-gallery">
    <div class="gallery-header">
      <p class="gallery-title">Research On Athletes</p>
      <p class="gallery-description">{{ description }}</p>
    </div>

    <div class="gallery-container">
      <div v-for="(image, index) in images" :key="index" class="gallery-item">
        <img :src="getImagePath(image.name)" :alt="image.alt">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResearchGallery',
  props: {
    description: {
      type: String,
      required: true
    },
    images: {
      type: Array,
      required: true,
      validator: (value) => {
        return value.every(img => img.name && img.alt)
      }
    }
  },
  methods: {
    getImagePath(imageName) {
      return `/research/${imageName}.png`
    }
  }
}
</script>

<style scoped>
.research-gallery {
  margin: 0 auto;
}

.gallery-header {
  text-align: center;
  margin-bottom: 60px;
}

.gallery-title {
  font-size: 48px;
  font-weight: 700;
  margin: 0 0 20px 0;
  color: #333;
}

.gallery-description {
  font-size: 16px;
  color: #666;
  margin: 0;
}

.gallery-container {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
}

.gallery-item {
  position: relative;
  overflow: hidden;
}

.gallery-item img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.3s ease;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

@media (max-width: 1024px) {
  .gallery-header {
    margin-bottom: 40px;
  }

  .gallery-title {
    font-size: 36px;
  }

  .gallery-description {
    font-size: 14px;
  }

  .gallery-container {
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
  }
}

@media (max-width: 768px) {
  .research-gallery {
    padding: 0 20px;
  }

  .gallery-header {
    margin-bottom: 30px;
  }

  .gallery-title {
    font-size: 24px;
  }

  .gallery-description {
    font-size: 13px;
  }

  .gallery-container {
    grid-template-columns: 1fr;
    gap: 20px;
  }
}

@media (max-width: 480px) {
  .research-gallery {
    padding: 0 15px;
  }

  .gallery-header {
    margin-bottom: 20px;
  }

  .gallery-title {
    font-size: 18px;
  }

  .gallery-description {
    font-size: 12px;
  }

  .gallery-container {
    grid-template-columns: 1fr;
    gap: 15px;
  }
}
</style>
