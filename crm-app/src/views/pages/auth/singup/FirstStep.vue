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
                            <h4>Let’s Create Your Profile</h4>
                        </div>
                    </div>
                </div>
                <div class="body d-flex">
                    <AuthSidebar />
                    <div class="signup-form w-100">
                        <div class="header text-center">
                            <div class="p-file mx-auto d-flex align-items-center">
                                <div class="left">
                                    <img src="../../../../assets/icons/dprofile.png" width="80" height="80" alt="">
                                </div>
                                <div class="right ms-3">
                                    <h6>Upload Your Photo*</h6>
                                    <button class="img-upload-btn">
                                        <span class="txt-white pe-2">Upload Image</span>
                                        <img src="../../../../assets/icons/upload.png" alt="">
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="body m-4 p-3">
                            <form>
                                <div class="row">
                                    <div class="col-xl-4 col-md-4 col-sm-6 form-group mt-3">
                                        <label for="fname">First Name*</label>
                                        <input type="text" id="fname" class="form-control c-form-input mt-1"
                                            placeholder="Scot">
                                    </div>
                                    <div class="col-xl-4 col-md-4 col-sm-6 form-group mt-3">
                                        <label for="lname">Last Name*</label>
                                        <input type="text" id="lname" class="form-control c-form-input mt-1"
                                            placeholder="Harsh">
                                    </div>
                                    <div class="col-xl-4 col-md-4 col-sm-6 form-group mt-3">
                                        <label for="dob">Date Of Birth*</label>
                                        <input type="date" id="dob" class="form-control c-form-input mt-1">
                                    </div>
                                    <div class="col-xl-4 col-md-4 col-sm-6 form-group mt-3">
                                        <label for="pnumber">Phone Number*</label>
                                        <input type="text" id="pnumber" class="form-control c-form-input mt-1"
                                            placeholder="+12543856456">
                                    </div>
                                    <div class="col-xl-4 col-md-4 col-sm-6 form-group mt-3">
                                        <label for="email">Work Email*</label>
                                        <input type="email" id="email" class="form-control c-form-input mt-1"
                                            placeholder="chris@truckersonlyinsurance.com">
                                    </div>
                                    <div class="col-xl-4 col-md-4 col-sm-6 form-group mt-3">
                                        <label for="position">Position*</label>
                                        <input type="text" id="position" class="form-control c-form-input read-o mt-1"
                                            placeholder="Receptionist" readonly>
                                    </div>
                                    <div class="col-xl-6 col-md-6 col-sm-6 form-group mt-3">
                                        <label for="password">Create Password*</label>
                                        <input type="password" id="password" class="form-control c-form-input mt-1"
                                            placeholder="***************">
                                    </div>
                                    <div class="col-xl-6 col-md-6 col-sm-6 form-group mt-3">
                                        <label for="rpassword">Repeat Password*</label>
                                        <input type="password" id="rpassword" class="form-control c-form-input mt-1"
                                            placeholder="***************">
                                    </div>
                                    <div class="col-xl-12 form-group mt-3">
                                        <label for="addresss">Home Address*</label>
                                        <input type="text" id="addresss" class="form-control c-form-input mt-1"
                                            placeholder="4517 Washington Ave. Manchester, Kentucky 39495">
                                    </div>
                                    <div class="col-xl-12 form-group text-end mb-3 mt-4">
                                        <RouterLink to="/" class="prev-btn mx-2">
                                            <i class="fa fa-arrow-left"></i>
                                            <span class="ps-2">Previous</span>
                                        </RouterLink>
                                        <RouterLink to="secondstep" class="next-btn">Next</RouterLink>
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

<style scoped>
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