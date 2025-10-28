<template>
  <div class="about-page">
    <AboutHeader />

    <!-- 4岁故事 -->
    <StorySection :age="4" description="I learned to swim on a typhoon day in Peji at the age of four"
      image-name="about_1" image-alt="4 Years Old - Swimming" image-position="right" story-class="story-4" />

    <!-- 10岁故事 -->
    <StorySection :age="10"
      description="Following my father, who was also not very good at skiing, I stumbled down the snow-capped mountain"
      image-name="about_2" image-alt="10 Years Old - Skiing" image-position="left" story-class="story-10" />

    <!-- 13岁故事 -->
    <StorySection :age="13"
      description="When surfing in Australia, the whole body covered with jellyfish pads still needs to be one more try"
      image-name="about_3" image-alt="13 Years Old - Surfing" image-position="left" story-class="story-13" />

    <!-- 15岁故事 -->
    <StorySection :age="15"
      description="For the second time, I crossed tens of thousands of kilometers with my father, entering the Arctic Circle from the westernmost part of Canada. Diving within the Arctic Circle"
      image-name="about_4" image-alt="15 Years Old - Arctic" image-position="right" story-class="story-15" />

    <!-- 16岁故事 -->
    <StorySection :age="16"
      description="By some strange twist of fate, I passed by a skydiving institution and without hesitation, I signed up to try skydiving for the first time in my life"
      image-name="about_5" image-alt="16 Years Old - Skydiving" image-position="left" story-class="story-16" />

    <FamilySection />

  </div>
</template>

<script>
import AboutHeader from './component/AboutHeader.vue'
import StorySection from './component/StorySection.vue'
import FamilySection from './component/FamilySection.vue'

export default {
  name: 'AboutPage',
  components: {
    AboutHeader,
    StorySection,
    FamilySection,
  }
}
</script>

<style scoped>
.about-page {
  background: white;
  width: 100%;
  position: relative;
  z-index: 5;
  margin-top: 95px;
}
</style>
