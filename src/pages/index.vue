<script setup>
</script>

<template>
    <div class="main">
        <Carousel />
        <Advantages />
        <Projects />
    </div>
</template>

<style lang="scss" scoped>
.main {
    max-width: 1170px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: column;
    gap: 147px;
    box-sizing: border-box;

    @media screen and (max-width: 375px) {
        gap: 50px;
    }  
}
</style>