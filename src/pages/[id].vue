<script setup>
const route = useRoute();

const { data } = await useFetch(`https://api.los-bio.ru/projects/${route.params.id}`, {
  method: 'GET',
})
</script>


<template>
    <div class="container">
        <div class="breadcrumbs">
            <span class="breadcrumbs__item">Главная</span>
            <span class="breadcrumbs__point"></span>
            <span class="breadcrumbs__item">Реализованные проекты</span>
            <span class="breadcrumbs__point"></span>
            <span class="breadcrumbs__item breadcrumbs__item_selected">{{ data.title }}</span>
        </div>
        <div class="project-item">
            <div class="project-item__text">
                <div class="project-item__text__title">{{ data.title }}</div>
                <div 
                    v-for="paragraph in data.description.blocks" 
                    :class="['project-item__text__description', {'project-item__text__description-header' : paragraph.type == 'header'}]" 
                >
                    {{ paragraph.data.text }}
                </div>
            </div>
            <div class="project-item__images">
                <div class="project-item__images__main-wrapper">
                    <img class="project-item__images__main" :src="`https://api.los-bio.ru/files/projects/${data.photos[0].name}`" alt="Изображение" >
                    <button class="project-item__images__button">Следующее фото</button>
                </div>
                <div 
                    class="project-item__images__other-wrapper"
                        
                >
                    <div v-for="photo in data.photos.slice(1)" >
                        <img class="project-item__images__other" :src="`https://api.los-bio.ru/files/projects/${photo.name}`" alt="Изображение" >
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "~/assets/scss/main.scss";

.container {
    max-width: 1170px;
    width: 100%;
    margin: 0 auto;
    background-color: $primary;
}

.breadcrumbs {
    display: flex;
    gap: 14px;
    margin-top: 13px;
    margin-bottom: 37px;
    align-items: center;

    &__item {
        font-family: Gilroy;
        font-weight: 500;
        font-size: 14px;
        line-height: 117%;
        letter-spacing: 0%;
        color: $white;

        &_selected {
            color: $grey;
        }
    }

    &__point {
        width: 3px;
        height: 3px;
        border-radius: 50%;
        background-color: $blue;
    }
}

.project-item {
    display: flex;
    justify-content: space-between;
    gap: 41px;

    @media screen and (max-width: 991px) {
        flex-direction: column;
    }

    &__text {
        padding: 30px 40px;
        border: 1px solid $grey;
        border-radius: 19px;
        display: flex;
        flex-direction: column;
        flex-basis: 60%;
        background-color: $dark-grey;

        @media screen and (max-width: 375px) {
            padding: 10px 10px;
        }

        &__title {
            font-family: Gilroy;
            font-weight: 700;
            font-size: 36px;
            line-height: 150%;
            letter-spacing: 0%;
            color: $white;
        }

        &__description {
            font-family: Gilroy;
            font-weight: 400;
            font-size: 18px;
            line-height: 150%;
            letter-spacing: 0%;
            margin: 10px;
            color: $light-grey;
        }

        &__description-header {
            font-family: Gilroy;
            font-weight: 700;
            font-size: 18px;
            line-height: 150%;
            letter-spacing: 0%;
            color: $white;
        }
    }

    &__images {
        display: flex;
        flex-direction: column;
        flex-basis: 40%;

        &__small {
            display: flex;
        }

        &__main-wrapper {
            display: flex;
            align-items: center;
            justify-content: center;
            position: relative;
        }

        &__main {
            width: 100%;
            aspect-ratio: 1 / 1;
            object-fit: cover;
        }

        &__other-wrapper {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(20px, 1fr));
            gap: 5px;
            margin-top: 5px;
            max-width: 100%;
        }

        &__other {
            height: 64px;
            object-fit: cover;
            width: 100%;

            @media screen and (max-width: 991px) {
                height: 120px;
            }

            @media screen and (max-width: 375px) {
                height: 90px;
            }
        }

        &__button {
            height: 36px;
            gap: 10px;
            border-radius: 4px;
            padding: 8px 20px;
            background-color: $blue;
            color: $white;
            font-family: Gilroy;
            font-weight: 500;
            font-size: 14px;
            line-height: 141%;
            letter-spacing: 0%;
            position: absolute;
            right: 2px;
            bottom: 6px;
            border-color: $transparent;
        }
    }
}
</style>