<template>
    <div>
        <VideoHero />
        <AboutSection />

        <!-- About Surfing Section -->
        <HomeSection
            title="About Surfing"
            description="I learned to swim on a typhoon day in Peji at the age of four"
            image-name="surfing"
            image-alt="About Surfing"
            image-position="right"
            section-class="section-surfing"
            link-href="surfing"
        />

        <!-- Arctic Exploration Section -->
        <HomeSection
            title="Arctic exploration"
            description="Following my father, who was also not very good at skiing, I stumbled down the snow-capped mountain"
            image-name="exploration"
            image-alt="Arctic Exploration"
            image-position="left"
            section-class="section-exploration"
            link-href="expedition"
        />

        <!-- Sports Research Section -->
        <HomeSection
            title="Sports research"
            description="When surfing in Australia, the whole body covered with jellyfish pads still needs to be one more try"
            image-name="research"
            image-alt="Sports Research"
            image-position="right"
            section-class="section-research"
            link-href="research"
        />

        <!-- Operation Smile Section -->
        <HomeSection
            title="Operation Smile"
            description="For the second time, I crossed tens of thousands of kilometers with my father, entering the Arctic Circle from the westernmost part of Canada. Diving within the Arctic Circle"
            image-name="smile"
            image-alt="Operation Smile"
            image-position="left"
            section-class="section-smile"
            link-href="smile"
        />

        <!-- About Art Section -->
        <HomeSection
            title="About Art"
            description="By some strange twist of fate, I passed by a skydiving institution and without hesitation, I signed up to try skydiving for the first time in my life"
            image-name="art"
            image-alt="About Art"
            image-position="right"
            section-class="section-art"
            link-href="art"
        />
    </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'

// 立即加载关键组件
import VideoHero from './components/VideoHero.vue'
import HomeSection from './components/HomeSection.vue'

// 懒加载非关键组件
const AboutSection = defineAsyncComponent(() => import('./components/AboutSection.vue'))
const GallerySection = defineAsyncComponent(() => import('./components/GallerySection.vue'))

export default {
    name: 'Home',
    components: {
        VideoHero,
        AboutSection,
        GallerySection,
        HomeSection,
    }
}
</script>
