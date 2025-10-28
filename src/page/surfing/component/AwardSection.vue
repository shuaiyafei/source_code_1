<template>
  <div class="award-section">
    <div class="award-header">
      <p class="award-title">Award-Winning Experience</p>
    </div>

    <div class="award-content">
      <div class="award-text">
        <p>
          In 2022, won the championship in the Shortboard Event of the U18 Group at the National Youth Surfing
          Championships.
        </p>
        <p>
          In 2023, claimed the runner-up title in the Longboard Event at the Asian Surfing Championships.
        </p>
        <p>
          In 2024, took the championship in the Longboard Event at the National Surfing Champions Tournament.
        </p>
        <p>
          In 2024, earned the runner-up position in the Longboard Event of the Men's Elite Group at a key stop of the
          Asian Surfing Tour.
        </p>
      </div>

      <div class="award-images">
        <div class="award-image-item">
          <img :src="getImagePath('surfing_5')" alt="Award 1">
        </div>
        <div class="award-image-item">
          <img :src="getImagePath('surfing_6')" alt="Award 2">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AwardSection',
  methods: {
    getImagePath(imageName) {
      return `/surfing/${imageName}.png`
    }
  }
}
</script>

<style scoped>
.award-section {
  margin: 0 auto;
  padding: 80px 40px;
}

.award-header {
  text-align: center;
  margin-bottom: 20px;
}

.award-title {
  font-size: 48px;
  font-weight: 700;
  margin: 0;
  color: #333;
}

.award-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.award-text {
  padding: 20px 0 60px 0;
}

.award-text p {
  font-size: 16px;
  line-height: 1.8;
  color: #666;
  margin: 0 0 20px 0;
}

.award-text p:last-child {
  margin-bottom: 0;
}

.award-images {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.award-image-item {
  position: relative;
  overflow: hidden;
}

.award-image-item img {
  width: 100%;
  height: auto;
  display: block;
}

@media (max-width: 1024px) {
  .award-section {
    padding: 60px 30px;
  }

  .award-title {
    font-size: 36px;
  }

  .award-text p {
    font-size: 14px;
  }

  .award-images {
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .award-section {
    padding: 40px 20px;
  }

  .award-title {
    font-size: 24px;
  }

  .award-text {
    padding: 15px 0 30px 0;
  }

  .award-text p {
    font-size: 13px;
    line-height: 1.6;
    margin-bottom: 15px;
  }

  .award-images {
    grid-template-columns: 1fr;
    gap: 15px;
  }
}

@media (max-width: 480px) {
  .award-section {
    padding: 30px 15px;
  }

  .award-title {
    font-size: 18px;
  }

  .award-text {
    padding: 10px 0 20px 0;
  }

  .award-text p {
    font-size: 12px;
    line-height: 1.5;
    margin-bottom: 12px;
  }

  .award-images {
    gap: 10px;
  }
}
</style>
