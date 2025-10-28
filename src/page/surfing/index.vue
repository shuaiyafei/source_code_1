<template>
  <div class="surfing-page">
    <SurfingHeader />

    <!-- 顶部大图 -->
    <div class="surfing-hero">
      <img :src="getImagePath('surfing_1')" alt="Surfing Hero">
    </div>

    <!-- First Encounter with Surfing -->
    <SurfingStorySection title="First Encounter with Surfing"
      description="First tried surfing in Hainan at 16; glided after falling, feeling hooked. Practiced wave-riding for 2022 contest, adapted and won U18 shortboard title. Surfed 3m waves in Siargao, learned to follow waves after bruising."
      image-name="surfing_2" image-alt="First Encounter with Surfing" image-position="right"
      story-class="story-first-encounter" />

    <!-- Achieve results -->
    <SurfingStorySection title="Achieve results"
      description="First tried surfing in Hainan at 16; glided after falling, feeling hooked. Practiced wave-riding for 2022 contest, adapted and won U18 shortboard title. Surfed 3m waves in Siargao, learned to follow waves after bruising."
      image-name="surfing_3" image-alt="Achieve results" image-position="left" story-class="story-achieve-results" />

    <!-- Love surfing -->
    <SurfingStorySection title="Love surfing"
      description="First tried surfing in Hainan at 16; glided after falling, feeling hooked. Practiced wave-riding for 2022 contest, adapted and won U18 shortboard title. Surfed 3m waves in Siargao, learned to follow waves after bruising."
      image-name="surfing_4" image-alt="Love surfing" image-position="right" story-class="story-love-surfing" />

    <!-- Award Section -->
    <AwardSection />

    <!-- Research Section -->
    <ResearchSection />

  </div>
</template>

<script>
import SurfingHeader from './component/SurfingHeader.vue'
import SurfingStorySection from './component/SurfingStorySection.vue'
import AwardSection from './component/AwardSection.vue'
import ResearchSection from './component/ResearchSection.vue'

export default {
  name: 'SurfingPage',
  components: {
    SurfingHeader,
    SurfingStorySection,
    AwardSection,
    ResearchSection,
  },
  methods: {
    getImagePath(imageName) {
      return `/surfing/${imageName}.png`
    }
  }
}
</script>

<style scoped>
.surfing-page {
  background: white;
  width: 100%;
  position: relative;
  z-index: 5;
  margin-top: 95px;
}

.surfing-hero {
  overflow: hidden;
}

.surfing-hero img {
  width: 100%;
  height: auto;
  display: block;
}
</style>
