<template>
  <div class="research-content">
    <div class="content-header">
      <p class="content-title">Research On Athletes</p>
      <p class="content-description">{{ description }}</p>
    </div>

    <div class="content-image">
      <img :src="imageSrc" :alt="imageAlt">
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResearchContent',
  props: {
    title: {
      type: String,
      default: 'Research On Athletes'
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
    }
  },
  computed: {
    imageSrc() {
      return `/research/${this.imageName}.png`
    }
  }
}
</script>

<style scoped>
.research-content {
  margin: 0 auto;
}

.content-header {
  text-align: center;
  margin-bottom: 60px;
}

.content-title {
  font-size: 48px;
  font-weight: 700;
  margin: 0 0 20px 0;
  color: #333;
}

.content-description {
  font-size: 16px;
  color: #666;
  margin: 0;
}

.content-image {
  position: relative;
  overflow: hidden;
  margin-bottom: 60px;
}

.content-image img {
  width: 100%;
  height: auto;
  display: block;
}

@media (max-width: 1024px) {
  .content-header {
    margin-bottom: 40px;
  }

  .content-title {
    font-size: 36px;
  }

  .content-description {
    font-size: 14px;
  }

  .content-image {
    margin-bottom: 40px;
  }
}

@media (max-width: 768px) {
  .research-content {
    padding: 0 20px;
  }

  .content-header {
    margin-bottom: 30px;
  }

  .content-title {
    font-size: 24px;
  }

  .content-description {
    font-size: 13px;
  }

  .content-image {
    margin-bottom: 30px;
  }
}

@media (max-width: 480px) {
  .research-content {
    padding: 0 15px;
  }

  .content-header {
    margin-bottom: 20px;
  }

  .content-title {
    font-size: 18px;
  }

  .content-description {
    font-size: 12px;
  }

  .content-image {
    margin-bottom: 20px;
  }
}
</style>
