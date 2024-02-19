<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div class="form-header d-flex justify-content-between">
        <div v-if="$route.path === '/profile'" class="p-file d-flex align-items-center">
            <div class="left">
                <img src="../../../../../assets/images/users/u1.png" width="80" height="80" alt="">
            </div>
            <div class="right ms-3">
                <h6>Upload Your Photo*</h6>
                <button class="img-upload-btn">
                    <span class="txt-white pe-2">Chnage Image</span>
                    <img src="../../../../../assets/icons/upload.png" alt="">
                </button>
            </div>
        </div>
        <div class="" v-else="">
            <h5>Two-Factor Authentication</h5>
            <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked>
                <small class="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</small>
            </div>
        </div>
        <div class="buttons d-flex align-items-center">
            <RouterLink to="/profile"
                :class="{ 'btn-blue-d': $route.path === '/profile', 'outline-white-btn': $route.path !== '/profile' }">Your
                Profile</RouterLink>
            <RouterLink to="/profile/setting" class="mx-3"
                :class="{ 'btn-blue-d': $route.path !== '/profile', 'outline-white-btn': $route.path === '/profile' }">
                Setting</RouterLink>
            <button class="cross-btn">
                <img src="../../../../../assets/icons/cross.png" alt="">
            </button>
            <RouterView />
    </div>
</div></template>