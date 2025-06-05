<script setup>

const { data } = await useFetch('https://api.los-bio.ru/projects/', {
  method: 'GET',
})

</script>

<template>
    <div class="projects">
        <div class="projects__title">Проекты</div>
        <div class="projects__container">
            <div class="projects__container-wrapper" v-for="model in data">
                <NuxtLink :to="`/${model.slug}`" class="projects__card">
                    <div class="projects__card__content">
                        <div><img class="projects__card__content__image" :src="`https://api.los-bio.ru/files/projects/${model.photos[0].name}`" alt="Изображение" ></div>
                        <div class="projects__card__content__title">{{ model.title }}</div>
                        <div class="projects__card__content__information">
                            <span class="projects__card__content__name">Тип работы:</span>
                            <span class="projects__card__content__description">{{ model.works }}</span>
                        </div>
                        <hr>
                        <div class="projects__card__content__information">
                            <span class="projects__card__content__name">Заказчик:</span>
                            <span class="projects__card__content__description">{{ model.customer }}</span>
                        </div>
                    </div>
                </NuxtLink>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "~/assets/scss/main.scss";

.projects {
    display: flex;
    flex-direction: column;
    gap: 89px;
    margin-bottom: 107px;

    @media screen and (max-width: 991px) {
        margin-bottom: 20px;
        gap: 40px;
    }

    &__title {
        font-family: Gilroy;
        font-weight: 700;
        font-size: 42px;
        line-height: 97%;
        letter-spacing: 0%;
        color: $white;
    }

    &__container {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        justify-content: space-between;

        @media screen and (max-width: 991px) {
            flex-direction: column;
        }
    }

    &__container-wrapper {
        display: flex;
        flex-wrap: wrap;
        width: calc(33% - 20px);

        @media screen and (max-width: 991px) {
            width: 100%;
        }
    }

    &__card {
        display: flex;
        flex-direction: column;
        gap: 37px;
        padding: 37px 38px;
        border: 1px solid;
        border-color: $grey;
        border-radius: 19px;
        align-self: stretch;
        width: 100%;

        @media screen and (max-width: 991px) {
            padding: 0;
        }

        &__content {
            display: flex;
            flex-direction: column;
            gap: 16px;
            justify-items: center;

            @media screen and (max-width: 991px) {
                    gap: 10px;
                    padding-bottom: 10px;
            }

            &__image {
                max-height: 208px;
                width: 100%;
                object-fit: cover;
                border-radius: 19px;
            }

            &__title {
                font-family: Gilroy;
                font-weight: 600;
                font-size: 24px;
                line-height: 117%;
                letter-spacing: 0%;
                color: $white;

                @media screen and (max-width: 991px) {
                    padding: 5px 10px;
                    font-size: 20px;
                }

                @media screen and (max-width: 768px) {
                    font-size: 16px;
                }
            }

            &__name {
                font-family: Gilroy;
                font-weight: 400;
                font-size: 18px;
                line-height: 148%;
                letter-spacing: 0%;
                color: $light-grey-1;

                @media screen and (max-width: 768px) {
                    font-size: 14px;
                }
            }

            &__description {
                font-family: Gilroy;
                font-weight: 400;
                font-size: 18px;
                line-height: 148%;
                letter-spacing: 0%;
                color: $white;
            
                @media screen and (max-width: 991px) {
                    padding: 5px 10px;
                    font-size: 16px;
                }

                @media screen and (max-width: 768px) {
                    font-size: 14px;
                }
            }

            &__information {
                @media screen and (max-width: 991px) {
                    padding: 0 15px;
                }
            }
        }
    }
}

hr {
    border: 1px solid $light-grey-2;
    width: 100%;
}
</style>