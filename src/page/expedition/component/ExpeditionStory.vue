<template>
  <div class="expedition-story">
    <!-- 地图背景容器 -->
    <div class="story-map-container">
      <div class="expedition-story-10">
        <div class="story-header">
          <p class="story-age">10<span class="age-unit">Years Old</span></p>
          <p class="story-description">The first 30,000 miles to the North Pole</p>
        </div>
        <div class="map-images">
          <div v-for="(image, index) in imagesAge10" :key="index" class="map-image-item" :style="{
            left: image.left,
            top: image.top,
            width: image.width || '150px'
          }">
            <img :src="getImagePath(image.name)" :alt="image.alt">
          </div>
        </div>
      </div>

      <div class="expedition-story-15">
        <div class="story-header">
          <p class="story-age">15<span class="age-unit">Years Old</span></p>
          <p class="story-description">The second 30,000 li journey to the North Pole</p>
        </div>
        <div class="map-images">
          <div v-for="(image, index) in imagesAge15" :key="index" class="map-image-item" :style="{
            left: image.left,
            top: image.top,
            width: image.width || '150px'
          }">
            <img :src="getImagePath(image.name)" :alt="image.alt">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExpeditionStory',
  data() {
    return {
      // 10岁探险的图片位置
      imagesAge10: [
        {
          name: 'expedition_2',
          alt: 'Tuktoya Tuk',
          left: '16.8vw',
          top: '25.8vw',
          width: '14.5vw'
        },
        {
          name: 'expedition_3',
          alt: 'Inuvik',
          left: '5.7vw',
          top: '57vw',
          width: '14.5vw'
        },
        {
          name: 'expedition_4',
          alt: 'Whitehold',
          left: '42.7vw',
          top: '51vw',
          width: '14.5vw'
        },
        {
          name: 'expedition_5',
          alt: 'Yellowev',
          left: '37vw',
          top: '76.8vw',
          width: '14.5vw'
        },
        {
          name: 'expedition_6',
          alt: 'Edmonton',
          left: '61.66vw',
          top: '61.61vw',
          width: '14.5vw'
        },
        {
          name: 'expedition_7',
          alt: 'Winnipeg',
          left: '64.68vw',
          top: '89.16vw',
          width: '14.5vw'
        },
        {
          name: 'expedition_8',
          alt: 'Thunder Bay',
          left: '85.46vw',
          top: '68.9vw',
          width: '14.5vw'
        },
        {
          name: 'expedition_9',
          alt: 'Thunder Bay',
          left: '85.46vw',
          top: '98.3vw',
          width: '14.5vw'
        }
      ],
      // 15岁探险的图片位置
      imagesAge15: [
        {
          name: 'expedition_10',
          alt: 'Toronto',
          left: '8.7vw',
          top: '51vw',
          width: '14.5vw'
        },
        {
          name: 'expedition_11',
          alt: 'Quebec',
          left: '52.12vw',
          top: '45.3vw',
          width: '14.5vw'
        },
        {
          name: 'expedition_12',
          alt: 'Blanc-Sablon',
          left: '5.8vw',
          top: '80vw',
          width: '14.5vw'
        },
        {
          name: 'expedition_13',
          alt: 'Arctic',
          left: '45vw',
          top: '80vw',
          width: '14.5vw'
        },
        {
          name: 'expedition_14',
          alt: 'Arctic',
          left: '80vw',
          top: '68vw',
          width: '14.5vw'
        }
      ]
    }
  },
  computed: {
    mapImageSrc() {
      return `/expedition/expedition_line.png`
    }
  },
  methods: {
    getImagePath(imageName) {
      return `/expedition/${imageName}.png`
    }
  }
}
</script>

<style scoped>
.expedition-story {
  width: 100%;
  position: relative;
}

.story-header {
  margin: 0 6.25vw;
}

.expedition-story-10 {
  position: relative;
  height: 114vw;
  padding-top: 6.25vw;
}

.expedition-story-15 {
  position: relative;
  height: 105vw;
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
  max-width: 600px;
}

.story-map-container {
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  top: 0;
  left: 0;
  background: url('/expedition/expedition_line.png') no-repeat center center;
  background-size: cover;
  height: 219vw;
}

.map-background {
  width: 100%;
  height: auto;
  display: block;
}

.map-images {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.map-image-item {
  position: absolute;
  overflow: hidden;
}

.map-image-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
}

@media (max-width: 1024px) {
  .story-header {
    margin: 0 3vw;
  }

  .expedition-story-10 {
    height: 100vw;
    padding-top: 3vw;
  }

  .expedition-story-15 {
    height: 90vw;
  }

  .story-age {
    font-size: 48px;
  }

  .age-unit {
    font-size: 32px;
  }

  .story-description {
    font-size: 14px;
  }

  .story-map-container {
    height: 190vw;
  }
}

@media (max-width: 768px) {
  .story-header {
    margin: 0 20px;
  }

  .expedition-story-10 {
    height: 80vw;
    padding-top: 20px;
  }

  .expedition-story-15 {
    height: 70vw;
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
  }

  .story-map-container {
    height: 150vw;
    background-size: contain;
  }

  .map-image-item {
    width: 80px !important;
  }
}

@media (max-width: 480px) {
  .story-header {
    margin: 0 15px;
  }

  .expedition-story-10 {
    height: 60vw;
    padding-top: 15px;
  }

  .expedition-story-15 {
    height: 50vw;
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

  .story-map-container {
    height: 110vw;
  }

  .map-image-item {
    width: 60px !important;
  }
}
</style>
