<script setup></script>

<template>
    <div>
        <div class="header">
            <div class="header__container">
                <div class="header__top">
                    <div class="header__top__item header__top__item-for-small-screen">
                        <svgo-Location class="header__top__item__icon"/>
                        <span class="header__top__item__text header__top__item__text-for-big-screen">г. Красноярск, ул. Телевизорная 1, стр. 14, оф. 204</span>
                        <span class="header__top__item__text header__top__item__text-for-small-screen">г. Красноярск</span>
                    </div>
                    <div class="header__top__item">
                        <svgo-Phone class="header__top__item__icon"/>
                        <span class="header__top__item__text">+7 (391) 209 57-57</span>
                    </div>
                    <div class="header__top__item header__top__item-for-small-screen">
                        <svgo-Phone class="header__top__item__icon"/>
                        <span class="header__top__item__text">+7 (391) 215 54-33</span>
                    </div>
                    <div class="header__top__item header__top__item-for-small-screen">
                        <svgo-Letter class="header__top__item__icon"/>
                        <span class="header__top__item__text">los-bio@mail.ru</span>
                    </div>
                    <div class="header__top__item">
                        <svgo-Vector class="header__top__item__icon"/>
                        <span class="header__top__item__text">Заказать звонок</span>
                    </div>
                </div>
                <hr>
                <div class="header__bottom">
                    <div class="header__bottom__icon">
                        <svgo-logo class="header__bottom__icon-logo"/>
                        <svgo-svg class="header__bottom__icon-in"/>
                    </div>
                    <div class="header__bottom__item">
                        <span class="header__bottom__item__text">О компании</span>
                        <span class="header__bottom__item__text">Проекты</span>
                        <div class="header__bottom__item__text_with-icon">
                            <span class="header__bottom__item__text">Каталог</span>
                            <svgo-component class="header__bottom__item-icon"/>
                        </div>
                        <span class="header__bottom__item__text">Контакты</span>
                    </div>
                    <div>
                        <button class="header__bottom__button">Получить КП</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";

.header {
    &__container {
        width: 100%;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
    }

    &__top {
        display: flex;
        justify-content: space-between;
        height: 42px;
        
        &__item {
            display: flex;
            gap: 5px;
            align-items: center;

            &__icon {
                height: 24px;
                width: 24px;
                color: $blue;
                opacity: 0.5;
            }

            &__text {
                font-family: Gilroy;
                font-weight: 400;
                font-size: 13px;
                line-height: 141%;
                letter-spacing: 0%;
                color: $white;
                opacity: 0.5;

                @media screen and (max-width: 375px) {
                    font-size: 16px;
                }
            }

            &__text-for-small-screen {
                    display: none;

                    @media screen and (max-width: 1200px) {
                        display: block;
                    }
            }

            &__text-for-big-screen {
                @media screen and (max-width: 1200px) {
                    display: none;
                }
            }
        }

        &__item-for-small-screen {
            @media screen and (max-width: 375px) {
                display: none;
            }
        }
    }

    &__bottom {
        display: flex;
        justify-content: space-between;
        align-items: center;

        &__icon {  
            position: relative;
        }

        &__icon-logo {
            width: 240px;
            height: 58px; 
            color: $blue;

            @media screen and (max-width: 768px) {
                width: 200px;
            }

            @media screen and (max-width: 375px) {
                width: 180px;
            }
        }

        &__icon-in {
            position: absolute;
            width: 29px;
            height: 43px;
            top: 7px;
            left: 15px;
            color: $white;
        }

        &__item {
            display: flex;
            gap: 56px;
            align-items: center;

            @media screen and (max-width: 768px) {
                gap: 24px;
            }

            @media screen and (max-width: 375px) {
                display: none;
            }
            
            &__text_with-icon {
                display: flex;
                gap: 6px;
                align-items: center;
            }

            &__text {
                font-family: Gilroy;
                font-weight: 400;
                font-size: 16px;
                line-height: 141%;
                letter-spacing: 0%;
                color: $white;

                @media screen and (max-width: 768px) {
                    font-size: 14px;
                }
            }
        }

        &__item-icon {
            height: 10px;
            width: 10px;
        }

        &__button {
            height: 36px;
            gap: 10px;
            border-color: transparent;
            border-radius: 4px;
            padding: 8px 20px;
            background-color: $blue;
            color: $white; 
            font-family: Gilroy;
            font-weight: 500;
            font-size: 14px;
            line-height: 141%;
            letter-spacing: 0%;
        }
    }
}

hr {
    border: 1px solid $light-grey-2;
    width: 100%;
}
</style>