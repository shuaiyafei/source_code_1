<template>
    <div class="art-page">
        <!-- About Art 部分 -->
        <div class="art-section">
            <div class="art-container">
                <div class="art-text">
                    <p class="art-title">About Art</p>
                    <div class="art-name">
                        <img src="/common/name.png" />
                    </div>
                    <p class="art-description">
                        My Study Experience At The Film School Of New York University Enabled Me To Gain A Deep
                        Understanding Of All Aspects Of Film Production. From Scriptwriting To Post-Production Editing,
                        I Have Mastered The Entire Process Of Film Art. Particularly Skilled In The Creation Of
                        Documentaries And Experimental Films.
                    </p>
                </div>
                <div class="art-image">
                    <img :src="getImagePath('art_1')" alt="About Art">
                </div>
            </div>
        </div>

        <!-- Piano Art 部分 -->
        <div class="art-section">
            <div class="art-container">
                <div class="art-text">
                    <p class="art-title">Piano Art</p>
                    <p class="art-description">A musical exploration journey from classical to modern</p>
                </div>
            </div>
            <div class="art-image-full">
                <img :src="getImagePath('art_2')" alt="Piano Art">
            </div>
            <div class="art-container">
                <div class="art-text">
                    <p class="art-description-long">
                        Fifteen years of piano learning experience have shaped my profound understanding of music. I
                        began to learn the piano at the age of six and have studied under several professors from the
                        Central Conservatory of Music, specializing in classical piano performance. He/She once won the
                        gold medal in the National Youth Piano Competition and held a solo concert at the National
                        Centre for the Performing Arts.
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ArtPage',
    methods: {
        getImagePath(imageName) {
            return `/art/${imageName}.png`
        }
    }
}
</script>

<style scoped>
.art-page {
    background: white;
    width: 100%;
    position: relative;
    z-index: 5;
    margin-top: 95px;
}

/* Art Section */
.art-section {
    width: 100%;
    padding: 80px 40px;
    background: white;
}

.art-container {
    max-width: 1400px;
    margin: 0 auto;
}

.art-section:first-child .art-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
}

.art-text {
    padding: 20px 0;
}

.art-title {
    font-size: 40px;
    font-weight: 700;
    margin: 0 0 20px 0;
    color: #333;
}

.art-name {
    width: 11.1vw;
    max-width: 220px;
    padding-bottom: 3vw;
}

.art-subtitle {
    font-size: 32px;
    font-style: italic;
    font-weight: 400;
    margin: 0 0 30px 0;
    color: #333;
}

.art-description {
    font-size: 24px;
    line-height: 48px;
    color: #666;
    margin-top: 3vw;
}

.art-description-long {
    font-size: 32px;
    color: #666;
    margin: 0;
    padding: 40px 0;
    line-height: 40px;
}

.art-image {
    position: relative;
    overflow: hidden;
}

.art-image img {
    width: 100%;
    height: auto;
    display: block;
}

.image-size {
    display: inline-block;
    background: #5B9EFF;
    color: white;
    padding: 6px 12px;
    font-size: 14px;
    font-weight: 600;
    margin-top: 20px;
}

.art-image-full {
    width: 100%;
    background: white;
    margin-top: 3vw;
}

.art-image-full img {
    width: 100%;
    max-width: 1400px;
    height: auto;
    display: block;
    margin: 0 auto;
}

@media (max-width: 1024px) {
    .art-section {
        padding: 60px 30px;
    }

    .art-section:first-child .art-container {
        grid-template-columns: 1fr;
        gap: 40px;
    }

    .art-title {
        font-size: 32px;
    }

    .art-description {
        font-size: 18px;
        line-height: 36px;
    }

    .art-description-long {
        font-size: 24px;
        line-height: 32px;
    }

    .art-image-full {
        margin-top: 2vw;
    }
}

@media (max-width: 768px) {
    .art-section {
        padding: 40px 20px;
    }

    .art-section:first-child .art-container {
        grid-template-columns: 1fr;
        gap: 20px;
    }

    .art-text {
        padding: 15px 0;
    }

    .art-title {
        font-size: 24px;
    }

    .art-name {
        width: 80px;
        max-width: 100%;
        padding-bottom: 2vw;
    }

    .art-description {
        font-size: 14px;
        line-height: 24px;
        margin-top: 1.5vw;
    }

    .art-description-long {
        font-size: 14px;
        line-height: 24px;
        padding: 20px 0;
    }

    .art-image-full {
        margin-top: 1.5vw;
    }
}

@media (max-width: 480px) {
    .art-section {
        padding: 30px 15px;
    }

    .art-title {
        font-size: 18px;
    }

    .art-name {
        width: 60px;
        padding-bottom: 1.5vw;
    }

    .art-description {
        font-size: 12px;
        line-height: 20px;
        margin-top: 1vw;
    }

    .art-description-long {
        font-size: 12px;
        line-height: 20px;
        padding: 15px 0;
    }

    .art-image-full {
        margin-top: 1vw;
    }
}

</style>
