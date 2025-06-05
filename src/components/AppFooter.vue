<script setup></script>

<template>
    <div>
        <div class="footer">
            <div class="footer__container">
                <div class="footer__item footer__item_small-screen">
                    <div class="footer__icon">
                        <svgo-logo class="footer__icon-logo"/>
                        <svgo-svg class="footer__icon-in"/>
                    </div>
                    <div class="footer__item_text">ООО «ТОРГОВЫЙ ДОМ «ЛОС-БИО»</div>
                    <div class="footer__item_text">
                        <span class="footer__item_text footer__item_text-name">ИНН:</span> 
                        2463123719 
                        <span class="footer__item_text footer__item_text-name">КПП:</span> 
                        246301001
                    </div>
                    <div class="footer__item_text"> <span class="footer__item_text footer__item_text-name">ОГРН:</span> 
                        1212400008688
                    </div>
                </div>
                <div class="footer__item">
                    <div class="footer__item_title">Компания</div>
                    <div class="footer__item_text">О компании</div>
                    <div class="footer__item_text">Проекты</div>
                    <div class="footer__item_text">Kаталог</div>
                    <div class="footer__item_text">Контакты</div>
                </div>
                <div class="footer__item footer__item_width">
                    <div class="footer__item_title">Каталог</div>
                    <div class="footer__item_text">Ёмкости</div>
                    <div class="footer__item_text ">Ливневые очистные-сооружения</div>
                    <div class="footer__item_text">Хозяйственно-бытовые очистные сооружения</div>
                    <div class="footer__item_text">Комплектующие</div>
                </div>
                <div class="footer__item">
                    <div class="footer__item_title">Контакты</div>
                    <div class="footer__item_text-with-icon">
                        <svgo-Phone class="footer__item__icon"/>
                        <span class="footer__item_text">+7 (391) 209 57-57</span>
                    </div>
                    <div class="footer__item_text-with-icon">
                        <svgo-Phone class="footer__item__icon"/>
                        <span class="footer__item_text">+7 (391) 215 54-33</span>
                    </div>
                    <div class="footer__item_text-with-icon">
                        <svgo-Letter class="footer__item__icon"/>
                        <span class="footer__item_text footer__item_text_underline">los-bio@mail.ru</span>
                    </div>
                    <div class="footer__item_text-with-icon">
                        <svgo-Vector class="footer__item__icon"/>
                        <span class="footer__item_text footer__item_text_underline">Заказать звонок</span>
                    </div>
                    <div>
                        <button class="footer__item__button">Получить КП</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@import "~/assets/scss/main.scss";

.footer {
    padding: 79px 0px 99px;
    
    &__container {
        display: flex;
        justify-content: space-between;
        box-sizing: border-box;

        @media screen and (max-width: 375px) {
            flex-direction: column;
            gap: 50px;
            padding-left: 20px;
        }
    }

    &__item {
        display: flex;
        flex-direction: column;
        gap: 20px;

        &__icon {
            color: $blue;
        }

        &_title {
            font-family: Gilroy;
            font-weight: 600;
            font-size: 18px;
            line-height: 141%;
            letter-spacing: 0%;
            text-transform: uppercase;
            color: $white;

            @media screen and (max-width: 991px) {
                font-size: 22px;
            }

            @media screen and (max-width: 375px) {
                font-size: 28px;
            }
        }

        &_text {
            font-family: Gilroy;
            font-weight: 400;
            font-size: 16px;
            line-height: 141%;
            letter-spacing: 0%;
            color: $white;

            @media screen and (max-width: 991px) {
                font-size: 18px;
            }

            @media screen and (max-width: 375px) {
                font-size: 22px;
            }

            &_underline {
                text-decoration: underline;
            }
        }

        &_small-screen {
            @media screen and (max-width: 991px) {
                display: none;
            }
        }

        &_text-name {
            color: $grey;
        }

        &_text-with-icon {
            display: flex;
            gap: 8px;
        }

        &_width {
            width: 179px;
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

    &__icon {
        position: relative;
    }

    &__icon-logo {
        width: 240px;
        height: 58px; 
        color: $blue;
    }

    &__icon-in {
        position: absolute;
        width: 29px;
        height: 43px;
        top: 7px;
        left: 15px;
        color: $white;
    }

    
}
</style>