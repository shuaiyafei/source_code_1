<template>
  <div class="surfing-header">
    <div class="header-content">
      <p class="surfing-title">Surfing resume</p>
      <div class="header-name">
        <img src="/common/name.png" />
      </div>
    </div>
    <div class="header-description">
      <p>
        When surfing in Australia, the whole body covered with jellyfish pads still needs to be one more try
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SurfingHeader'
}
</script>

<style scoped>
.surfing-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 6.25vw 0 0 0;
  padding: 0 11.45vw 6.25vw 11.45vw;
}

.header-content {
  min-width: 480px;
  margin-right: 6.25vw;
}

.surfing-title {
  font-family: Roboto;
  font-weight: 500;
  font-size: 64px;
  line-height: 100%;
  letter-spacing: 0%;
}

.header-name {
  margin-top: 2.5vw;
  width: 11.45vw;
}

.header-description {
  padding-top: 20px;
}

.header-description p {
  font-family: Roboto;
  font-weight: 400;
  font-size: 24px;
  line-height: 48px;
  letter-spacing: 0%;
  text-transform: capitalize;
  color: #666;
}

@media (max-width: 1024px) {
  .surfing-header {
    padding: 0 5vw 6.25vw 5vw;
  }

  .header-content {
    min-width: 300px;
    margin-right: 3vw;
  }

  .surfing-title {
    font-size: 48px;
  }

  .header-description p {
    font-size: 18px;
    line-height: 36px;
  }
}

@media (max-width: 768px) {
  .surfing-header {
    flex-direction: column;
    align-items: flex-start;
    padding: 30px 20px;
  }

  .header-content {
    min-width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
  }

  .surfing-title {
    font-size: 32px;
  }

  .header-name {
    width: 80px;
    margin-top: 15px;
  }

  .header-description {
    padding-top: 0;
    width: 100%;
  }

  .header-description p {
    font-size: 14px;
    line-height: 24px;
  }
}

@media (max-width: 480px) {
  .surfing-header {
    padding: 20px 15px;
  }

  .surfing-title {
    font-size: 24px;
  }

  .header-name {
    width: 60px;
    margin-top: 10px;
  }

  .header-description p {
    font-size: 12px;
    line-height: 20px;
  }
}
</style>
