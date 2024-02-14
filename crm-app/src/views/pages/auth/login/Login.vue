<script setup>
    import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
    <div class="login-wrapper py-2">
        <div class="container">
            <div class="login-header text-center">
                <img src="../../../../assets/images/logo.png" width="260" alt="">
            </div>
            <div class="sub-header text-end">
                <a href="https://www.truckersonlyinsurance.com/" class="btn-blue" target="_blank">
                    <span class="pe-2">Visit Website</span>
                    <i class="fa fa-arrow-right"></i>
                </a>
            </div>
            <div class="login-form d-flex flex-column justify-content-center align-items-center">
                <div class="login-card p-4">
                    <h3 class="mb-4">Welcome!</h3>
                    <form>
                        <div class="form-group">
                            <input type="text" class="form-control bg-light-blue txt-l-dark h-45px" placeholder="Email*">
                        </div>
                        <div class="form-group my-3">
                            <input type="text" class="form-control bg-light-blue txt-l-dark h-45px" placeholder="Password*">
                            <a href="" class="nav-link text-end txt-l-dark mt-1">Forgot password?</a>
                        </div>
                        <div class="form-group text-center my-3">
                            <button class="btn-blue d-block w-100">
                                <span class="pe-2">Sign In</span>
                                <i class="fa fa-arrow-right"></i>
                            </button>
                        </div>
                        <small class="text-center d-block">
                            <span class="pe-1">Don’t have an account?</span>
                            <RouterLink to="/signup/firststep">Sign Up</RouterLink>
                        </small>
                    </form>
                </div>
                <strong class="pt-3">TOI 2.0</strong>
            </div>
        </div>
        <RouterView/>
    </div>
</template>

<style scoped>
.login-wrapper {
    min-height: 100vh;
    background-color: var(--white1);
}

.login-form {
    min-height: 80vh;
}

.login-card {
    width: 400px;
    height: 368px;
    border-radius: 24px;
    background-color: var(--white);
    box-shadow: 18px 4px 35px 0px #4D546408;
}
</style>