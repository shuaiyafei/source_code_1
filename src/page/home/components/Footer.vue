<template>
  <footer class="footer">
    <div class="footer-container">
      <div class="footer-icon">
        <img src="/home/nav_icon.webp" alt="SISI">
      </div>
      <div class="footer-line"></div>
      <div class="social-links">
        <a href="#" class="social-link" aria-label="Facebook">
          <img src="/home/facebook.png" alt="facebook">
        </a>
        <a href="#" class="social-link" aria-label="Twitter">
          <img src="/home/youtube.png" alt="youtube">
        </a>
        <a href="#" class="social-link" aria-label="Linkedin">
          <img src="/home/linkedin.png" alt="linkedin">
        </a>
        <a href="#" class="social-link" aria-label="Instagram">
          <img src="/home/instagram.png" alt="instagram">
        </a>
      </div>
      <p class="copyright">Copyright @SiSi</p>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
.footer {
  position: relative;
  background: white;
  padding: 80px 0 40px;
  text-align: center;
  z-index: 1;
}

.footer-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
  text-align: center;
  display: flex;
  justify-items: center;
  align-items: center;
  flex-direction: column;
}

.footer-title {
  font-family: 'Playfair Display', serif;
  font-size: 48px;
  font-weight: 400;
  font-style: italic;
  color: #333;
  letter-spacing: 2px;
}

.footer-icon {
  width: 125px;
}

.footer-line {
  height: 1px;
  padding: 0 200px;
  background-color: #000;
  margin: 40px 0;
  width: 100%;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 0;
  margin-bottom: 30px;
}

.social-link {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #666;
  transition: all 0.3s ease;
  border-radius: 50%;
}

.social-link img {
  width: 24px;
  height: 24px;
}

.social-link:hover {
  color: #333;
  transform: translateY(-3px);
}

.copyright {
  font-family: 'Microsoft YaHei', 'PingFang SC', 'Hiragino Sans GB', 'Helvetica Neue', Arial, sans-serif;
  font-weight: 400;
  font-size: 18px;
  line-height: 32px;
  letter-spacing: 0;
  color: #000;
  margin: 0;
}

@media (max-width: 768px) {
  .footer {
    padding: 60px 0 30px;
  }

  .footer-container {
    padding: 0 20px;
  }

  .footer-icon {
    width: 80px;
  }

  .footer-line {
    padding: 0 100px;
    margin: 30px 0;
  }

  .social-links {
    gap: 15px;
    margin-bottom: 20px;
  }

  .social-link {
    width: 35px;
    height: 35px;
  }

  .social-link img {
    width: 20px;
    height: 20px;
  }

  .copyright {
    font-size: 14px;
    line-height: 24px;
  }
}

@media (max-width: 480px) {
  .footer {
    padding: 40px 0 20px;
  }

  .footer-container {
    padding: 0 15px;
  }

  .footer-icon {
    width: 60px;
  }

  .footer-line {
    padding: 0 50px;
    margin: 20px 0;
  }

  .social-links {
    gap: 10px;
    margin-bottom: 15px;
  }

  .social-link {
    width: 30px;
    height: 30px;
  }

  .social-link img {
    width: 16px;
    height: 16px;
  }

  .copyright {
    font-size: 12px;
    line-height: 20px;
  }
}
</style>
