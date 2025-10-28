<template>
  <div class="intro-section">
    <div class="intro-container">
      <div class="intro-content">
        <div class="description">
          <p>
            That year, I also won the individual championship at the National Championships, the most prestigious award
            in the country. This achievement solidified my determination to continue on this path. I vividly recall my
            father, who rarely offers praise, telling me ‘I was his pride’.
            That year, I also won the individual championship at the National Championships, the most prestigious award
            in the country. This achievement solidified my determination to continue on this path. I vividly recall my
            father, who rarely offers praise, telling me ‘I was his pride’.
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IntroSection'
}
</script>

<style scoped>
.intro-section {
  padding: 80px 0;
  background: white;
  position: relative;
  z-index: 1;
  margin-bottom: 46.7vh;
}

.intro-container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 40px;
}

.intro-content {
  max-width: 1400px;
  margin: 0 auto;
}

.description {
  color: #666;
  line-height: 2;
}

.description p {
  font-size: 16px;
  font-weight: 400;
  line-height: 32px;
  color: #666;
  margin: 0 0 24px 0;
  text-align: justify;
  font-family: Roboto;
  font-weight: 400;
  font-style: Regular;
  font-size: 24px;
  line-height: 48px;
  letter-spacing: 0%;
  text-transform: capitalize;
}

.description p:last-child {
  margin-bottom: 0;
}

@media (max-width: 1024px) {
  .intro-section {
    padding: 60px 0;
    margin-bottom: 35vh;
  }

  .intro-container {
    padding: 0 30px;
  }

  .description p {
    font-size: 18px;
    line-height: 36px;
  }
}

@media (max-width: 768px) {
  .intro-section {
    padding: 40px 0;
    margin-bottom: 25vh;
  }

  .intro-container {
    padding: 0 20px;
  }

  .description p {
    font-size: 14px;
    line-height: 24px;
    margin-bottom: 16px;
  }
}

@media (max-width: 480px) {
  .intro-section {
    padding: 30px 0;
    margin-bottom: 20vh;
  }

  .intro-container {
    padding: 0 15px;
  }

  .description p {
    font-size: 12px;
    line-height: 20px;
    margin-bottom: 12px;
  }
}

</style>
