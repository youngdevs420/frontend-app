<script setup>
import AuthSidebar from '../../../../components/AuthSidebar.vue'
import { RouterLink, RouterView } from 'vue-router'
</script>
<template>
    <div class="signup-f-step">
        <div class="container">
            <div class="signup-card my-4">
                <div class="header py-4">
                    <div class="row align-items-center">
                        <div class="col-md-2">
                            <img src="../../../../assets/images/logo.png" width="260" height="61" alt="" class="ps-5">
                        </div>
                        <div class="col-md-10 d-flex align-items-center justify-content-center">
                        </div>
                    </div>
                </div>
                <div class="body d-flex">
                    <AuthSidebar />
                    <div class="signup-form w-100">
                        <div class="header text-center">
                            <div class="p-file mx-auto d-flex align-items-center">
                                <div class="right ms-3">
                                    <h4>Tell us About Yourself</h4>
                                    <p class="txt-muted">Separate responses by a comma</p>
                                </div>
                            </div>
                        </div>
                        <div class="body m-4 p-3">
                            <form>
                                <div class="row">
                                    <div class="col-xl-6 col-md-6 col-sm-6 form-group mt-3">
                                        <label for="fav">Favorite Fast Food Restaurant(s):</label>
                                        <input type="text" id="fav" class="form-control c-form-input mt-1"
                                            placeholder="McDonalds, Jack in the Box, Olive Garden">
                                    </div>
                                    <div class="col-xl-6 col-md-6 col-sm-6 form-group mt-3">
                                        <label for="fav1">Favorite Sit Down Restaurant(s):</label>
                                        <input type="text" id="fav1" class="form-control c-form-input mt-1"
                                            placeholder="McDonalds, Jack in the Box, Olive Garden">
                                    </div>
                                    <div class="col-xl-6 col-md-6 col-sm-6 form-group mt-3">
                                        <label for="fav2">Do You Have Any Pets? What kind?</label>
                                        <input type="text" id="fav2" class="form-control c-form-input mt-1"
                                            placeholder="McDonalds">
                                    </div>

                                    <div class="col-xl-6 col-md-6 col-sm-6 form-group mt-3">
                                        <label for="fav3">Favorite Place(s) to Shop:</label>
                                        <input type="text" id="fav3" class="form-control c-form-input mt-1"
                                            placeholder="McDonalds">
                                    </div>
                                    
                                    <div class="col-xl-6 col-md-6 col-sm-6 form-group mt-3">
                                        <label for="fav4">Favorite Activities Outside Work:</label>
                                        <input type="text" id="fav4" class="form-control c-form-input mt-1"
                                            placeholder="McDonalds">
                                    </div>
                                                                        
                                    <div class="col-xl-6 col-md-6 col-sm-6 form-group mt-3">
                                        <label for="fav5">Favorite Sport/ Team:</label>
                                        <input type="text" id="fav5" class="form-control c-form-input mt-1"
                                            placeholder="McDonalds">
                                    </div>
                                    <div class="col-xl-12 form-group text-end mb-3 mt-4">
                                        <RouterLink to="firststep" class="prev-btn mx-2">
                                            <i class="fa fa-arrow-left"></i>
                                            <span class="ps-2">Previous</span>
                                        </RouterLink>
                                        <RouterLink to="thirdstep" class="next-btn">Next</RouterLink>
                                    </div>
                                </div>
                                <RouterView />
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style>
.container {
    max-width: 1340px !important;
    /* border: 2px solid red; */
}

.step-2 {
    margin-top: -10px;
}

.p-file {
    width: 280px;
}</style>