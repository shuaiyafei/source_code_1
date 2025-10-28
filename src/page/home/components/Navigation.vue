<template>
  <nav class="navigation" :class="{ 'scrolled': isScrolled }">
    <div class="nav-container">
      <div class="logo">
        <a href="#home" @click="scrollToTop">
          <img :src="aboutIconSrc" alt="SISI" />
        </a>
      </div>
      <ul class="nav-menu" :class="{ 'active': menuOpen }">
        <li><a href="#about" @click="closeMenu">ABOUT ME</a></li>
        <li><a href="#surfing" @click="closeMenu">ABOUT SURFING</a></li>
        <li><a href="#expedition" @click="closeMenu">ARCTIC EXPEDITION</a></li>
        <li><a href="#research" @click="closeMenu">RESEARCH</a></li>
        <li><a href="#smile" @click="closeMenu">OPERATION SMILE</a></li>
        <li><a href="#art" @click="closeMenu">ABOUT ART</a></li>
      </ul>
      <div class="hamburger" @click="toggleMenu" :class="{ 'active': menuOpen }">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  </nav>
</template>

<script>
import { getImageSrc } from '../../../utils/webp-support'

export default {
  name: 'Navigation',
  data() {
    return {
      isScrolled: false,
      menuOpen: false
    }
  },
  computed: {
    aboutIconSrc() {
      return getImageSrc('/home/about_icon.png')
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50
    },
    toggleMenu() {
      this.menuOpen = !this.menuOpen
    },
    closeMenu() {
      this.menuOpen = false
    },
    scrollToTop(e) {
      e.preventDefault()
      // 设置 hash 为 home
      window.location.hash = '#home'
    }
  }
}
</script>

<style scoped>
.navigation {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  background: #fff;
  transition: box-shadow 0.3s ease;
}

.navigation.scrolled {
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.nav-container {
  margin: 0 auto;
  padding: 0 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo a {
  font-style: italic;
  font-size: 42px;
  line-height: 100%;
  letter-spacing: 0%;
  color: #333;
  width: 100px;
  display: inline-block;
}

.logo img {
  width: 100%;
  height: auto;
}

.nav-menu {
  display: flex;
  list-style: none;
  gap: 40px;
  margin: 0;
  padding: 0;
  margin-top: -5px;
}

.nav-menu li a {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 1px;
  color: #333333;
}

.nav-menu li a:hover {
  color: #333;
}

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 5px;
  width: 30px;
  height: 24px;
  position: relative;
}

.hamburger span {
  width: 25px;
  height: 2px;
  background: #333;
  transition: all 0.3s ease;
  display: block;
  position: absolute;
}

.hamburger span:nth-child(1) {
  top: 0;
}

.hamburger span:nth-child(2) {
  top: 50%;
  transform: translateY(-50%);
}

.hamburger span:nth-child(3) {
  bottom: 0;
}

.hamburger.active span:nth-child(1) {
  top: 50%;
  transform: translateY(-50%) rotate(45deg);
}

.hamburger.active span:nth-child(2) {
  opacity: 0;
}

.hamburger.active span:nth-child(3) {
  bottom: 50%;
  transform: translateY(50%) rotate(-45deg);
}

@media (max-width: 1920px) {
  .navigation {
    padding: 20px 220px;
  }
}

@media (max-width: 1480px) {
  .navigation {
    padding: 20px 120px;
  }
}

@media (max-width: 1280px) {
  .navigation {
    padding: 20px 10px;
  }

  .logo a {
    transform: scale(0.8);
  }
}

@media (max-width: 1024px) {
  .navigation {
    padding: 20px 20px;
  }

  .nav-container {
    padding: 0;
  }

  .nav-menu {
    gap: 25px;
  }

  .nav-menu li a {
    font-size: 12px;
  }

  .logo a {
    transform: scale(0.8);
  }
}

@media (max-width: 820px) {
  .navigation {
    padding: 20px 10px;
  }

  .logo a {
    transform: scale(0.7);
  }

  .nav-container {
    padding: 0;
  }

  .nav-menu {
    gap: 12px;
  }

  .nav-menu li a {
    font-size: 12px;
  }
}



@media (max-width: 768px) {
  .navigation {
    padding: 15px 0;
  }

  .nav-container {
    padding: 0 20px;
  }

  .logo a {
    transform: scale(0.7);
    width: 60px;
  }

  .hamburger {
    display: flex;
  }

  .nav-menu {
    position: fixed;
    top: 65px;
    right: -100%;
    width: 100%;
    max-width: 100%;
    height: calc(100vh - 65px);
    background: white;
    flex-direction: column;
    padding: 40px 20px;
    gap: 20px;
    transition: right 0.3s ease;
    overflow-y: auto;
  }

  .nav-menu.active {
    right: 0;
  }

  .nav-menu li a {
    font-size: 14px;
    letter-spacing: 0.5px;
  }
}

@media (max-width: 480px) {
  .navigation {
    padding: 12px 0;
  }

  .nav-container {
    padding: 0 15px;
  }

  .logo a {
    transform: scale(0.5);
    width: 50px;
  }

  .hamburger span {
    width: 25px;
  }

  .nav-menu {
    padding: 30px 15px;
    gap: 15px;
    top: 55px;
  }

  .nav-menu li a {
    font-size: 13px;
  }
}
</style>
