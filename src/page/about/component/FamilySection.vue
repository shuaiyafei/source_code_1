<template>
  <div class="family-section">
    <div class="family-header">
      <p class="family-title">The shaping of my family</p>
      <p class="family-subtitle">Summarizing The Shaping Of My Family, My Father And My Grandfather</p>
    </div>



    <!-- 父亲部分 -->
    <div class="family-member">
      <div class="family-image-container">
        <img :src="getImagePath('about_6')" alt="Family - The shaping of my family" class="family-main-image">
      </div>
      <p class="member-title">My Father</p>
      <p class="member-description">
        Let's condense a decade of my fencing journey into a two-minute spectacle
      </p>
    </div>

    <!-- 祖父部分 -->
    <div class="family-member">
      <div class="grandfather-image-container">
        <img :src="getImagePath('about_7')" alt="My Grandfather" class="grandfather-image">
      </div>
      <p class="member-title">My Grandfather</p>
      <p class="member-description">
        Let's condense a decade of my fencing journey into a two-minute spectacle
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FamilySection',
  methods: {
    getImagePath(imageName) {
      return `/about/${imageName}.png`
    }
  }
}
</script>

<style scoped>
.family-section {
  max-width: 1400px;
  margin: 0 auto;
  padding: 80px 40px;
}

.family-header {
  text-align: center;
  margin-bottom: 60px;
}

.family-title {
  font-size: 64px;
  font-weight: 500;
  margin: 0 0 15px 0;
  color: #222;
}

.family-subtitle {
  font-size: 32px;
  color: #666;
  margin: 0;
  letter-spacing: 0.5px;
}

.family-image-container {
  margin-bottom: 60px;
  border-radius: 4px;
  overflow: hidden;
}

.family-main-image {
  width: 100%;
  height: auto;
  display: block;
}

.family-member {
  margin-bottom: 60px;
}

.member-title {
  font-size: 40px;
  font-weight: 500;
  margin: 0 0 15px 0;
  color: #000;
}

.member-description {
  font-size: 32px;
  color: #666;
  margin: 0 0 30px 0;
  max-width: 600px;
}

.grandfather-image-container {
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 80px;
  margin-top: 30px;
}

.grandfather-image {
  width: 100%;
  height: auto;
  display: block;
}

@media (max-width: 1024px) {
  .family-section {
    padding: 60px 30px;
  }

  .family-header {
    margin-bottom: 40px;
  }

  .family-title {
    font-size: 48px;
  }

  .family-subtitle {
    font-size: 24px;
  }

  .family-image-container {
    margin-bottom: 40px;
  }

  .family-member {
    margin-bottom: 40px;
  }

  .member-title {
    font-size: 32px;
  }

  .member-description {
    font-size: 24px;
  }

  .grandfather-image-container {
    margin-bottom: 40px;
    margin-top: 20px;
  }
}

@media (max-width: 768px) {
  .family-section {
    padding: 40px 20px;
  }

  .family-header {
    margin-bottom: 30px;
  }

  .family-title {
    font-size: 32px;
  }

  .family-subtitle {
    font-size: 16px;
  }

  .family-image-container {
    margin-bottom: 20px;
  }

  .family-member {
    margin-bottom: 30px;
  }

  .member-title {
    font-size: 24px;
  }

  .member-description {
    font-size: 14px;
    line-height: 1.6;
    max-width: 100%;
  }

  .grandfather-image-container {
    margin-bottom: 20px;
    margin-top: 15px;
  }
}

@media (max-width: 480px) {
  .family-section {
    padding: 30px 15px;
  }

  .family-header {
    margin-bottom: 20px;
  }

  .family-title {
    font-size: 24px;
  }

  .family-subtitle {
    font-size: 13px;
  }

  .family-image-container {
    margin-bottom: 15px;
  }

  .family-member {
    margin-bottom: 20px;
  }

  .member-title {
    font-size: 18px;
  }

  .member-description {
    font-size: 12px;
    line-height: 1.5;
  }

  .grandfather-image-container {
    margin-bottom: 15px;
    margin-top: 10px;
  }
}
</style>
