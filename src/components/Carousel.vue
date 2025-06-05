<script setup>
const { data } = await useFetch('https://api.los-bio.ru/info/group/slide', {
  method: 'GET',
})
const models = data.value.map(item => JSON.parse(item.value));
</script>

<template>
    
  <div class="block text-center carousel">
    <el-carousel height="533px" arrow="never">
      <el-carousel-item v-for="model in models" :key="model">
        <div class="slide">
            <div class="slide__image__wrapper-for-small-screen">
                <img class="slide__image" :src="`https://api.los-bio.ru/files/certificates/${ model.image[0].name}`" alt="Изображение" >>
            </div>
            <div class="slide__text">
                <div class="slide__text__title">{{ model.title }}</div>
                <div class="slide__text__description">{{ model.description }}</div>
                <div class="slide__button">Перейти в каталог</div>
            </div>
            <div>
                <img class="slide__image slide__image__wrapper-for-big-screen" :src="`https://api.los-bio.ru/files/certificates/${ model.image[0].name}`" alt="Изображение" >>
            </div>
        </div>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";

.carousel {
    margin-top: 80px;
}

.slide {
margin: 20px;
display: flex;
gap: 108px;

@media screen and (max-width: 991px) {
    gap: 80px;
}

@media screen and (max-width: 375px) {
    flex-direction: column;
    gap: 10px;
    justify-items: center;
}

  &__text {
    display: flex;
    flex-direction: column;
    gap: 30px;
    flex-basis: 60%;
    padding-top: 23px;

    @media screen and (max-width: 375px) {
        gap: 0px;
        padding-top: 0px;
    }
    
    &__title {
      font-family: Gilroy;
      font-weight: 700;
      font-size: 60px;
      line-height: 100%;
      letter-spacing: 0%;
      color: $white; 

      @media screen and (max-width: 991px) {
        font-size: 40px;
      }

      @media screen and (max-width: 375px) {
        font-size: 36px;
        max-width: 300px;
        letter-spacing: 20%;
        margin-bottom: 10px;
        text-align: center;
      }
    }

    &__description {
      font-family: Gilroy;
      font-weight: 400;
      font-size: 20px;
      line-height: 150%;
      letter-spacing: 0%;
      color: $white; 

      @media screen and (max-width: 991px) {
        font-size: 18px;
      }

      @media screen and (max-width: 375px) {
        font-size: 16px;
        max-width: 100%;
        text-align: center;
      }
    }
  }

  &__image {
    max-width: 100%;

      @media screen and (max-width: 375px) {
            height: 100%;
        }

      &__wrapper-for-small-screen {
        display: none;

        @media screen and (max-width: 375px) {
            display: block;
            height: 120px;
            text-align: center;
        }
      }

      &__wrapper-for-big-screen {
        @media screen and (max-width: 375px) {
            display: none;
        }
      }
  }

  &__button {
    width: max-content;
    gap: 10px;
    border-radius: 12px;
    padding: 16px 40px;
    font-family: Gilroy;
    font-weight: 500;
    font-size: 18px;
    line-height: 141%;
    letter-spacing: 0%;
    background-color: $blue;
    color: $white; 
    border-color: transparent;

    @media screen and (max-width: 991px) {
        font-size: 16px;
        gap: 8px;
        padding: 14px 30px;
        align-self: center;
        margin-top: 10px;
    }
  }
}

.el-carousel__item h3 {
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel {
    --el-carousel-indicator-width: 12px;
    --el-carousel-indicator-height: 12px;
}
</style>