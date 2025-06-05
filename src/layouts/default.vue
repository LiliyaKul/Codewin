<script setup></script>

<template>
    <div class="container">
        <AppHeader />
        <slot />
        <AppFooter />
    </div>
</template>

<style lang="scss" scoped>
@import "../assets/scss/main.scss";

.container{
    max-width: 1170px;
    width: 100%;
    margin: 0 auto;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 1200px) {
        max-width: 1100px;
    }

    @media screen and (max-width: 991px) {
        max-width: 900px;
    }

    @media screen and (max-width: 768px) {
        max-width: 740px;
    }

    @media screen and (max-width: 375px) {
        max-width: 350px;
    }
}
</style>