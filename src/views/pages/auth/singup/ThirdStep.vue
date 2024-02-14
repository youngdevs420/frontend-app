<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div class="third-step">
        <div class="header text-center py-4">
            <img src="../../../../assets/images/logo.png" width="260" alt="">
        </div>
        <div class="body text-center pt-5">
            <div class="heading mb-5 pb-4">
                <h1 class="mb-4">You Have Successfully Registered!</h1>
                <RouterLink to="/profile" class="launch-btn">
                    <span class="pe-2">Launch TOI 2.0</span>
                    <i class="fa fa-arrow-right"></i>
                </RouterLink>
                <RouterView />
            </div>
            <img src="../../../../assets//images/groupusers.png" width="700" height="500" alt="">
        </div>
    </div>
</template>

<style scoped>
h1 {
    /* font-family: Plus Jakarta Sans; */
    font-size: 48px;
    font-weight: 700;
    line-height: 58px;
    letter-spacing: 0px;

}

@media (max-width: 769px) {
.third-step .body img {
    width: 90%;
    height: 300px;
}
}
</style>