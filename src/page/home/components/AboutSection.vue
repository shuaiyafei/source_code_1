<template>
  <section id="about" class="about-section" @click="navigateToAbout">
    <div class="about-container">
      <div class="about-image">
        <img :src="targetSrc" alt="SISI">
      </div>
      <div class="about-content">
        <div class="about-title">
          <img :src="aboutIconSrc" alt="SISI">
        </div>
        <div class="about-text">
          <p class="intro-text">
            My name is Qianxi Li (Sisi). I am 18 years old and come from Guangzhou, China. I am currently a Grade 12
            <br />
            student at BASIS International School Park Lane Harbour.
          </p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { getImageSrc } from '../../../utils/webp-support'

export default {
  name: 'AboutSection',
  computed: {
    targetSrc() {
      return getImageSrc('/home/target.png')
    },
    aboutIconSrc() {
      return getImageSrc('/home/about_icon.png')
    }
  },
  methods: {
    navigateToAbout() {
      window.location.hash = 'about'
    }
  }
}
</script>

<style scoped>
.about-section {
  background: white;
  width: 100%;
  position: relative;
  z-index: 5;
  height: 49vw;
  cursor: pointer;
  transition: all 0.3s ease;
}

.about-container {
  background-image: url("/home/bg_center.png");
  background-position: center center;
  background-repeat: no-repeat;
  background-size: auto;
  display: flex;
  justify-content: space-between;
  align-items: end;
  width: 100%;
  height: 100%;
}

.about-image {
  width: 44vw;
}

/* @supports (background-image: url("data:image/webp;base64,UklGRiYAAABXRUJQVlA4IBIAAAAwAQCdASoBAAEAAUAcJaACdLoB/gAA")) {
  .about-section {
    background-image: url("/home/bg_center.webp");
  }
} */


.about-image {
  position: relative;
  overflow: hidden;
  border-radius: 2px;
}

.about-image img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform 0.6s ease;
}


.about-content {
  padding: 40px 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.about-title {
  font-size: 64px;
  font-weight: 400;
  font-style: italic;
  margin-bottom: 40px;
  color: #333;
  letter-spacing: 2px;
  width: 120px;
}

.about-text {
  color: #666;
  line-height: 1.8;
}

.intro-text {
  font-family: 'Roboto', sans-serif;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 48px;
  text-transform: capitalize;
  max-width: 642px;
  color: #333;
}

.description {
  font-size: 14px;
  line-height: 2;
  color: #888;
}

.description p {
  margin: 0;
}

@media (max-width: 1024px) {
  .about-section {
    height: 60vw;
  }

  .about-image {
    width: 50vw;
  }

  .intro-text {
    font-size: 18px;
    line-height: 36px;
  }
}

@media (max-width: 768px) {
  .about-section {
    height: auto;
  }

  .about-container {
    flex-direction: column;
    align-items: center;
    background-image: none !important;
  }

  .about-image {
    width: 100%;
    margin-bottom: 30px;
  }

  .about-content {
    padding: 30px 20px;
    text-align: center;
  }

  .about-title {
    font-size: 40px;
    margin-bottom: 20px;
    width: 100%;
  }

  .intro-text {
    font-size: 14px;
    line-height: 24px;
    max-width: 100%;
  }
}

@media (max-width: 480px) {
  .about-image {
    width: 100%;
  }

  .about-content {
    padding: 20px 15px;
  }

  .about-title {
    font-size: 28px;
    margin-bottom: 15px;
  }

  .intro-text {
    font-size: 12px;
    line-height: 20px;
  }
}
</style>
