<template>
  <div :class="['home-card', cardClass]">
    <div class="card-image">
      <img :src="imageSrc" :alt="title">
    </div>
    <div class="card-content">
      <p class="card-title">{{ title }}</p>
      <p class="card-description">{{ description }}</p>
    </div>
    <a :href="linkHref" class="card-link" @click="handleClick">
      <span class="link-text">Learn More</span>
    </a>
  </div>
</template>

<script>
export default {
  name: 'HomeCard',
  props: {
    title: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    imageName: {
      type: String,
      required: true
    },
    linkHref: {
      type: String,
      required: true
    },
    cardClass: {
      type: String,
      default: ''
    }
  },
  computed: {
    imageSrc() {
      return `/home/${this.imageName}.png`
    }
  },
  methods: {
    handleClick(e) {
      e.preventDefault()
      window.location.hash = this.linkHref
    }
  }
}
</script>

<style scoped>
.home-card {
  position: relative;
  overflow: hidden;
  border-radius: 4px;
  height: 100%;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease;
}

.home-card:hover {
  transform: translateY(-5px);
}

.card-image {
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 300px;
  flex-shrink: 0;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease;
}

.home-card:hover .card-image img {
  transform: scale(1.05);
}

.card-content {
  flex: 1;
  padding: 40px;
  background: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.card-title {
  font-size: 32px;
  font-weight: 700;
  margin: 0 0 20px 0;
  color: #333;
}

.card-description {
  font-size: 16px;
  line-height: 1.8;
  color: #666;
  margin: 0 0 30px 0;
}

.card-link {
  display: inline-block;
  padding: 12px 24px;
  background: #333;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background 0.3s ease;
  width: fit-content;
}

.card-link:hover {
  background: #555;
}

.link-text {
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
}

@media (max-width: 1024px) {
  .card-image {
    height: 250px;
  }

  .card-content {
    padding: 30px;
  }

  .card-title {
    font-size: 24px;
  }

  .card-description {
    font-size: 14px;
  }
}

@media (max-width: 768px) {
  .card-image {
    height: 200px;
  }

  .card-content {
    padding: 20px;
  }

  .card-title {
    font-size: 18px;
    margin-bottom: 10px;
  }

  .card-description {
    font-size: 13px;
    line-height: 1.6;
    margin-bottom: 15px;
  }

  .card-link {
    padding: 10px 20px;
  }

  .link-text {
    font-size: 12px;
  }
}

@media (max-width: 480px) {
  .card-image {
    height: 150px;
  }

  .card-content {
    padding: 15px;
  }

  .card-title {
    font-size: 16px;
    margin-bottom: 8px;
  }

  .card-description {
    font-size: 12px;
    line-height: 1.5;
    margin-bottom: 12px;
  }

  .card-link {
    padding: 8px 16px;
  }

  .link-text {
    font-size: 11px;
  }
}
</style>
