<template>
  <div class="expedition-page">
    <ExpeditionHeader />

    <!-- 顶部大图 -->
    <div class="expedition-hero">
      <img :src="getImagePath('expedition_1')" alt="Expedition Hero">
    </div>
    <ExpeditionStory />
  </div>
</template>

<script>
import ExpeditionHeader from './component/ExpeditionHeader.vue'
import ExpeditionStory from './component/ExpeditionStory.vue'

export default {
  name: 'ExpeditionPage',
  components: {
    ExpeditionHeader,
    ExpeditionStory
  },
  data() {
    return {

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
.expedition-page {
  background: white;
  width: 100%;
  position: relative;
  z-index: 5;
}

.expedition-hero {
  margin: 0 auto;
  overflow: hidden;
  border-radius: 4px;
}

.expedition-hero img {
  width: 100%;
  height: auto;
  display: block;
}
</style>
