<template>
  <div class="smile-page">
    <SmileHeader />

    <div class="cleft-section">
      <div class="cleft-container">
        <div class="cleft-image-wrapper">
          <img :src="getImagePath('smile_1')" alt="Cleft Lip And Palate Defect">
        </div>
        <div class="cleft-text">
          <p class="cleft-title">What Is Cleft Lip And Palate Defect</p>
          <p class="cleft-description">Cleft lip and palate is a common congenital facial deformity, characterized by
            fissures in the upper lip and/or palate. There is one case of cleft lip and palate in every 700 newborns
            worldwide, and the incidence rate is even higher in Asia.</p>
        </div>
      </div>
    </div>

    <!-- 诊断图表部分 -->
    <div class="cleft-section">
      <div class="cleft-container">
        <div class="cleft-image-wrapper">
          <img :src="getImagePath('smile_2')" alt="Cleft Lip And Palate Defect">
        </div>
        <div class="cleft-text">
          <p class="cleft-title">The First Smile Operation</p>
          <p class="cleft-description">In March 2019, I participated in the "Operation Smile" charity project for the
            first time, traveling to a remote mountainous area in Yunnan to offer assistance to children with cleft lip
            and palate. This activity made me deeply realize how precious a simple smile is to these children. Our team
            raised funds for the surgery of 12 children and accompanied them throughout the entire treatment process.
            During the two-week event, we not only provided medical assistance but also organized psychological
            counseling and rehabilitation training. Seeing the smiles on the children's faces after the operation, all
            the hard work seemed worthwhile. This experience completely transformed my understanding of public welfare
            and strengthened my determination to continue participating in charity work.</p>
        </div>
      </div>
    </div>

    <!-- 研究部分 -->
    <div class="research-section">
      <div class="research-container">
        <div class="research-text">
          <p class="research-title">Research On The Population With Cleft Lip And Palate</p>
          <p class="research-description">Through scientific research and data analysis, we have gained a deep
            understanding of the needs of the cleft lip and palate group, providing a basis for improving treatment
            methods and quality of life</p>
        </div>
        <div class="research-image">
          <img :src="getImagePath('smile_3')" alt="Research On The Population With Cleft Lip And Palate">
        </div>
      </div>
    </div>

    <!-- 奖项部分 -->
    <div class="award-section">
      <div class="award-container">
        <p class="award-title">Award-Winning Experience</p>
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
            In 2024, earned the runner-up position in the Longboard Event of the Men's Elite Group at a key stop of
            the Asian Surfing Tour.
          </p>
        </div>
        <div class="award-content">
          <div class="award-images">
            <img :src="getImagePath('smile_4')" alt="Award 1">
            <img :src="getImagePath('smile_5')" alt="Award 2">
          </div>
        </div>
      </div>
    </div>

    <!-- Meet Xiaofeng 部分 -->
    <div class="smile-meet">
      <div class="meet-container">
        <div class="meet-header">
          <p class="meet-title">Meet Xiaofeng</p>
          <p class="meet-subtitle">Help Xiaofeng raise funds to complete the operation</p>
        </div>

        <div class="meet-gallery">
          <div v-for="(image, index) in meetImages" :key="index" class="gallery-item"
            :style="{ gridColumn: image.span ? `span ${image.span}` : 'span 1' }">
            <img :src="getImagePath(image.name)" :alt="image.alt">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SmileHeader from './component/SmileHeader.vue'

export default {
  name: 'SmilePage',
  components: {
    SmileHeader
  },
  data() {
    return {
      meetImages: [
        {
          name: 'smile_6',
          alt: 'Fundraising Event',
          span: 2,
          row: 1
        },
        {
          name: 'smile_7',
          alt: 'Donation',
          span: 1,
          row: 1
        },
        {
          name: 'smile_8',
          alt: 'Medical Team',
          span: 1,
          row: 1
        },
        {
          name: 'smile_9',
          alt: 'Helping Children',
          span: 1,
          row: 2
        },
        {
          name: 'smile_10',
          alt: 'Sunset',
          span: 3,
          row: 2
        }
      ]
    }
  },
  methods: {
    getImagePath(imageName) {
      return `/smile/${imageName}.png`
    }
  }
}
</script>

<style scoped>
.smile-page {
  background: white;
  width: 100%;
  position: relative;
  z-index: 5;
  margin-top: 95px;
}

/* 诊断图表部分 */
.cleft-section {
  width: 100%;
  padding: 0 40px 80px 40px;
  background: white;
}

.cleft-container {
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

.cleft-image-wrapper {
  width: 100%;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.cleft-image-wrapper img {
  width: 100%;
  height: auto;
  display: block;
  padding: 0 23.5vw;
}

.cleft-text {
  padding: 0 20vw;
}

@media (max-width: 1024px) {
  .cleft-image-wrapper img {
    padding: 0 15vw;
  }

  .cleft-text {
    padding: 0 10vw;
  }

  .cleft-title {
    font-size: 32px;
  }

  .cleft-description {
    font-size: 14px;
  }
}

@media (max-width: 768px) {
  .cleft-section {
    padding: 30px 20px 50px 20px;
  }

  .cleft-image-wrapper img {
    padding: 0 10px;
  }

  .cleft-text {
    padding: 0 20px;
  }

  .cleft-title {
    font-size: 24px;
  }

  .cleft-description {
    font-size: 13px;
    line-height: 1.6;
  }
}

@media (max-width: 480px) {
  .cleft-section {
    padding: 20px 15px 40px 15px;
  }

  .cleft-image-wrapper img {
    padding: 0 5px;
  }

  .cleft-text {
    padding: 0 15px;
  }

  .cleft-title {
    font-size: 18px;
  }

  .cleft-description {
    font-size: 12px;
    line-height: 1.5;
  }
}

.cleft-title {
  font-size: 40px;
  font-weight: 700;
  margin: 0 0 20px 0;
  color: #1A2C44;
}

.cleft-description {
  font-size: 16px;
  line-height: 1.8;
  color: #666;
  margin: 0;
}

/* 第一次微笑行动部分 */
.operation-section {
  width: 100%;
  padding: 0 40px 80px 40px;
  background: white;
}

.operation-container {
  flex-direction: row;
  display: flex;
}

.operation-image {
  width: 100%;
  overflow: hidden;
  margin-left: 10vw;
}

.operation-image img {
  width: 100%;
  height: auto;
  display: block;
}

.operation-text {
  padding: 20px 0;
}

.operation-title {
  font-size: 40px;
  font-weight: 700;
  margin: 0 0 20px 0;
  color: #333;
}

.operation-description {
  font-size: 16px;
  line-height: 1.8;
  color: #666;
  margin: 0 0 20px 0;
}

.operation-description:last-child {
  margin-bottom: 0;
}

/* 研究部分 */
.research-section {
  width: 100%;
  padding: 80px 240px;
  background: white;
  border-left: 4px solid #007bff;
}

.research-container {
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;
}

.research-text {
  padding: 20px 0;
}

.research-title {
  font-size: 40px;
  font-weight: 700;
  margin: 0 0 20px 0;
  color: #333;
}

.research-description {
  font-size: 16px;
  line-height: 1.8;
  color: #666;
  margin: 0;
}

.research-image {
  overflow: hidden;
  margin-left: 4vw;
}

.research-image img {
  width: 100%;
  height: auto;
  display: block;
}

@media (max-width: 1024px) {
  .research-section {
    padding: 60px 120px;
  }

  .research-container {
    gap: 40px;
  }

  .research-title {
    font-size: 32px;
  }

  .research-description {
    font-size: 14px;
  }
}

@media (max-width: 768px) {
  .research-section {
    padding: 40px 20px;
    border-left: none;
    border-top: 4px solid #007bff;
  }

  .research-container {
    grid-template-columns: 1fr;
    gap: 20px;
  }

  .research-image {
    margin-left: 0;
  }

  .research-title {
    font-size: 24px;
  }

  .research-description {
    font-size: 13px;
    line-height: 1.6;
  }
}

@media (max-width: 480px) {
  .research-section {
    padding: 30px 15px;
  }

  .research-title {
    font-size: 18px;
  }

  .research-description {
    font-size: 12px;
    line-height: 1.5;
  }
}

.award-section {
  width: 100%;
  padding: 80px 240px;
}

.award-container {
  margin: 0 auto;
}

.award-title {
  font-size: 40px;
  font-weight: 700;
  margin: 0 0 40px 0;
  color: #333;
}

.award-content {
  align-items: flex-start;
}

.award-images {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.award-images img {
  width: 100%;
  height: auto;
  display: block;
}

.award-text {
  padding: 20px 0 40px 0;
  max-width: 50%;
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

/* Meet Xiaofeng 部分 */
.smile-meet {
  width: 100%;
  padding: 0 240px 80px 240px;
  background: white;
}

.meet-container {
  margin: 0 auto;
}

.meet-header {
  text-align: center;
  margin-bottom: 60px;
}

.meet-title {
  font-size: 40px;
  font-weight: 700;
  margin: 0 0 15px 0;
  color: #333;
}

.meet-subtitle {
  font-size: 16px;
  color: #666;
  margin: 0;
}

.meet-gallery {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  auto-rows: 250px;
}

.gallery-item {
  position: relative;
  overflow: hidden;
}

.gallery-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.gallery-item:hover img {
  transform: scale(1.05);
}

@media (max-width: 1024px) {
  .award-section {
    padding: 60px 120px;
  }

  .award-title {
    font-size: 32px;
  }

  .award-text {
    max-width: 100%;
  }

  .award-text p {
    font-size: 14px;
  }

  .smile-meet {
    padding: 0 120px 60px 120px;
  }

  .meet-title {
    font-size: 32px;
  }

  .meet-subtitle {
    font-size: 14px;
  }

  .meet-gallery {
    grid-template-columns: repeat(3, 1fr);
    auto-rows: 200px;
  }
}

@media (max-width: 768px) {
  .award-section {
    padding: 40px 20px;
  }

  .award-title {
    font-size: 24px;
  }

  .award-images {
    grid-template-columns: 1fr;
  }

  .award-text {
    padding: 20px 0;
  }

  .award-text p {
    font-size: 13px;
    line-height: 1.6;
  }

  .smile-meet {
    padding: 0 20px 40px 20px;
  }

  .meet-header {
    margin-bottom: 30px;
  }

  .meet-title {
    font-size: 24px;
  }

  .meet-subtitle {
    font-size: 13px;
  }

  .meet-gallery {
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
    auto-rows: 150px;
  }
}

@media (max-width: 480px) {
  .award-section {
    padding: 30px 15px;
  }

  .award-title {
    font-size: 18px;
    margin-bottom: 20px;
  }

  .award-text p {
    font-size: 12px;
    line-height: 1.5;
    margin-bottom: 15px;
  }

  .smile-meet {
    padding: 0 15px 30px 15px;
  }

  .meet-title {
    font-size: 18px;
  }

  .meet-subtitle {
    font-size: 12px;
  }

  .meet-gallery {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    auto-rows: 120px;
  }
}
</style>
