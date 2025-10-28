<template>
  <div :class="['home-section', sectionClass]" @click="handleSectionClick">
    <div :class="['section-container', sectionClass]">
      <!-- <div v-if="imagePosition === 'left'" class="section-image">
        <img :src="imageSrc" :alt="imageAlt">
      </div> -->
      <div class="section-text">
        <p class="section-title">{{ title }}</p>
        <p class="section-description">{{ description }}</p>
      </div>
      <!-- <div v-if="imagePosition === 'right'" class="section-image">
        <img :src="imageSrc" :alt="imageAlt">
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeSection',
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
    sectionClass: {
      type: String,
      default: ''
    },
    linkHref: {
      type: String,
      required: true
    }
  },
  computed: {
    imageSrc() {
      return `/home/surfing.png`
    }
  },
  methods: {
    handleSectionClick() {
      window.location.hash = this.linkHref
    }
  }
}
</script>

<style scoped>
.home-section {
  width: 100vw;
  height: 63.8vw;
  cursor: pointer;
  transition: all 0.3s ease;
}

.section-container {
  width: 100%;
  height: 100%;
  background-size: cover;
}

.section-text {
  padding: 17.7vw 11.45vw;
}

.section-title {
  font-family: Roboto;
  font-weight: 500;
  font-size: 64px;
  color: #fff;
}

.section-description {
  font-family: Roboto;
  font-weight: 400;
  font-size: 32px;
  color: #fff;
  margin-top: 50px;
  width: 30vw;
}

@media (max-width: 1024px) {
  .section-title {
    font-size: 48px;
  }

  .section-description {
    font-size: 24px;
    width: 40vw;
  }
}

@media (max-width: 768px) {
  .home-section {
    height: 100vw;
  }

  .section-text {
    padding: 20vw 5vw;
  }

  .section-title {
    font-size: 32px;
  }

  .section-description {
    font-size: 16px;
    width: 100%;
    margin-top: 20px;
  }
}

@media (max-width: 480px) {
  .home-section {
    height: 120vw;
  }

  .section-text {
    padding: 15vw 4vw;
  }

  .section-title {
    font-size: 24px;
  }

  .section-description {
    font-size: 14px;
    width: 100%;
    margin-top: 15px;
  }
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

/* 背景颜色变体 */
.section-surfing {
  background: url('/home/surfing.png') no-repeat center center;
}

.section-exploration {
  background: url('/home/exploration.png') no-repeat center center;
}

.section-research {
  background: white;
  background: url('/home/research.png') no-repeat center center;
}

.section-smile {
  background: url('/home/smile.png') no-repeat center center;
}

.section-art {
  background: url('/home/art.png') no-repeat center center;
}
</style>
