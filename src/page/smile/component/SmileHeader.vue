<template>
  <div class="smile-header">
    <div class="header-content">
      <p class="smile-title">Operation Smile</p>
      <div class="header-name">
        <img src="/common/name.png" />
      </div>
    </div>
    <div class="header-description">
      <p>
        I once participated in the research on language rehabilitation for children with cleft lip and palate. At the
        same time, as a volunteer, I accompanied the children with pronunciation training every week to help them
        overcome communication fear
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SmileHeader'
}
</script>

<style scoped>
.smile-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 6.25vw 0 0 0;
  padding: 0 11.45vw 6.25vw 11.45vw;
}

.header-content {
  min-width: 350px;
  margin-right: 6.25vw;
}

.smile-title {
  font-family: Roboto;
  font-weight: 500;
  font-size: 40px;
  line-height: 100%;
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
  text-transform: capitalize;
  color: #666;
}

@media (max-width: 1024px) {
  .smile-header {
    padding: 0 5vw 6.25vw 5vw;
  }

  .header-content {
    min-width: 250px;
    margin-right: 3vw;
  }

  .smile-title {
    font-size: 32px;
  }

  .header-description p {
    font-size: 18px;
    line-height: 36px;
  }
}

@media (max-width: 768px) {
  .smile-header {
    flex-direction: column;
    align-items: flex-start;
    padding: 30px 20px;
  }

  .header-content {
    min-width: 100%;
    margin-right: 0;
    margin-bottom: 20px;
  }

  .smile-title {
    font-size: 28px;
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
  .smile-header {
    padding: 20px 15px;
  }

  .smile-title {
    font-size: 20px;
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
