<template>
  <div class="research-section">
    <div class="research-header">
      <p class="research-title">Research On Surfing</p>
    </div>

    <div class="research-content">
      <div class="research-text">
        <p>
          In 2022, won the championship in the Shortboard Event of the U18 Group at the National Youth Surfing
          Championships.
        </p>
      </div>

      <div class="research-image">
        <img :src="getImagePath('surfing_7')" alt="Research On Surfing">
      </div>
    </div>

    <div class="research-footer">
      <p>Explore the development process of surfing culture in China</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResearchSection',
  methods: {
    getImagePath(imageName) {
      return `/surfing/${imageName}.png`
    }
  }
}
</script>

<style scoped>
.research-section {
  margin: 0 auto;
  padding: 80px 40px;
}

.research-header {
  text-align: center;
  margin-bottom: 40px;
}

.research-title {
  font-size: 40px;
  font-weight: 500;
  margin: 0;
  color: #1A2C44;
}

.research-content {
  align-items: center;
  margin-bottom: 60px;
}

.research-text {
  padding: 20px 0 40px 0;
  text-align: center;
  color: #666;
  display: flex;
  justify-content: center;
  align-items: center;
}

.research-text p {
  font-size: 32px;
  line-height: 46px;
  max-width: 48.6vw;
  color: #666;
}

.research-image {
  position: relative;
  overflow: hidden;
}

.research-image img {
  width: 100%;
  height: auto;
  display: block;
}

.research-footer {
  text-align: center;
  padding-top: 40px;
}

.research-footer p {
  font-size: 32px;
  color: #666;
  margin: 0;
}

@media (max-width: 1024px) {
  .research-section {
    padding: 60px 30px;
  }

  .research-title {
    font-size: 32px;
  }

  .research-text p {
    font-size: 24px;
    line-height: 36px;
    max-width: 100%;
  }

  .research-footer p {
    font-size: 24px;
  }
}

@media (max-width: 768px) {
  .research-section {
    padding: 40px 20px;
  }

  .research-header {
    margin-bottom: 30px;
  }

  .research-title {
    font-size: 24px;
  }

  .research-text {
    padding: 15px 0 30px 0;
  }

  .research-text p {
    font-size: 14px;
    line-height: 24px;
    max-width: 100%;
  }

  .research-content {
    margin-bottom: 30px;
  }

  .research-footer {
    padding-top: 20px;
  }

  .research-footer p {
    font-size: 14px;
  }
}

@media (max-width: 480px) {
  .research-section {
    padding: 30px 15px;
  }

  .research-header {
    margin-bottom: 20px;
  }

  .research-title {
    font-size: 18px;
  }

  .research-text {
    padding: 10px 0 20px 0;
  }

  .research-text p {
    font-size: 12px;
    line-height: 20px;
  }

  .research-content {
    margin-bottom: 20px;
  }

  .research-footer {
    padding-top: 15px;
  }

  .research-footer p {
    font-size: 12px;
  }
}
</style>
