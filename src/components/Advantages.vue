<script setup>
const { data } = await useFetch('https://api.los-bio.ru/info/group/advantage', {
  method: 'GET',
})

const models = data.value.map(item => JSON.parse(item.value));

</script>

<template>
    <div class="advantage">
        <div class="advantage__title">Наши преимущества</div>
        <div class="advantage__container">
            <div v-for="model in models">
                <div class="advantage__content">
                    <div class="advantage__content__top">
                        <div><img :src="`${model.icon}`" alt="Иконка в формате PNG" class="advantage__content__top__icon"></div>
                        <div class="advantage__content__top__text">{{ model.title}}</div>
                    </div>
                    <div class="advantage__content__bottom">{{ model.description }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "~/assets/scss/main.scss";

.advantage {
    display: flex;
    flex-direction: column;
    gap: 80px;

    &__title {
        font-family: Gilroy;
        font-weight: 700;
        font-size: 42px;
        line-height: 97%;
        letter-spacing: 0%;
        color: $white;

        @media screen and (max-width: 335px) {
            font-size: 38px;
        }
    }

    &__container {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-template-rows: 1fr 1fr;
        gap: 32px;

        @media screen and (max-width: 991px) {
            grid-template-columns: 1fr;
        }
    }

    &__content {
        display: flex;
        flex-direction: column;
        gap: 15px;
        padding: 40px 50px;
        border: 2px solid $dark-grey;
        border-radius: 19px;
        background-color: $dark-grey;

        @media screen and (max-width: 375px) {
            padding: 20px 30px;
        }

        &__top {
            display: flex;
            gap: 30px;
            align-items: center;

            &__icon {
                width: 75px;
                height: 75px;

                @media screen and (max-width: 375px) {
                    width: 60px;
                    height: 60px;
                }
            }

            &__text {
                font-family: Gilroy;
                font-weight: 600;
                font-size: 30px;
                line-height: 117%;
                letter-spacing: 0%;
                color: $white;

                @media screen and (max-width: 375px) {
                    font-size: 26px;
                }
            }
        }
        &__bottom {
            font-family: Gilroy;
            font-weight: 400;
            font-size: 18px;
            line-height: 137%;
            letter-spacing: 0%;
            color: $white;
        }
    }
}
</style>