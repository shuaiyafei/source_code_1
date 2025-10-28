<template>
  <picture>
    <source :srcset="webpSrc" type="image/webp" />
    <img :src="fallbackSrc" :alt="alt" v-bind="$attrs" />
  </picture>
</template>

<script>
export default {
  name: 'ResponsiveImage',
  props: {
    src: {
      type: String,
      required: true
    },
    alt: {
      type: String,
      default: ''
    }
  },
  computed: {
    webpSrc() {
      // 将 .png 替换为 .webp
      return this.src.replace(/\.png$/, '.webp')
    },
    fallbackSrc() {
      // 保持原始 PNG 作为回退
      return this.src
    }
  }
}
</script>
