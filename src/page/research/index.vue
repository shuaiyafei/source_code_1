<template>
  <div class="research-page">
    <ResearchHeader />

    <!-- 研究内容部分 -->
    <ResearchContent description="The first 30,000 miles to the North Pole" image-name="research_1"
      image-alt="Research On Athletes" />

    <!-- 研究图片库部分 -->
    <ResearchGallery description="The first 30,000 miles to the North Pole" :images="galleryImages" />

  </div>
</template>

<script>
import ResearchHeader from './component/ResearchHeader.vue'
import ResearchContent from './component/ResearchContent.vue'
import ResearchGallery from './component/ResearchGallery.vue'

export default {
  name: 'ResearchPage',
  components: {
    ResearchHeader,
    ResearchContent,
    ResearchGallery,
  },
  data() {
    return {
      galleryImages: [
        {
          name: 'research_2',
          alt: 'Ice Hockey'
        },
        {
          name: 'research_3',
          alt: 'Basketball'
        },
        {
          name: 'research_4',
          alt: 'Fitness'
        }
      ]
    }
  }
}
</script>

<style scoped>
.research-page {
  background: white;
  width: 100%;
  position: relative;
  z-index: 5;
  margin-top: 95px;
}
</style>
