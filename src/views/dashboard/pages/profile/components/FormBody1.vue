<script setup></script>

<template>
    <div class="form-body mt-5">
        <form>
            <div class="row">
                <div class="col-xl-4 col-md-4 col-sm-6 form-group mt-3">
                    <label for="fname">First Name*</label>
                    <input type="text" id="fname" class="form-control c-form-input mt-1" placeholder="Scot">
                </div>
                <div class="col-xl-4 col-md-4 col-sm-6 form-group mt-3">
                    <label for="lname">Last Name*</label>
                    <input type="text" id="lname" class="form-control c-form-input mt-1" placeholder="Harsh">
                </div>
                <div class="col-xl-4 col-md-4 col-sm-6 form-group mt-3">
                    <label for="dob">Date Of Birth*</label>
                    <input type="date" id="dob" class="form-control c-form-input mt-1">
                </div>
                <div class="col-xl-4 col-md-4 col-sm-6 form-group mt-3">
                    <label for="pnumber">Phone Number*</label>
                    <input type="text" id="pnumber" class="form-control c-form-input mt-1" placeholder="+12543856456">
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
                    <input type="text" id="fav2" class="form-control c-form-input mt-1" placeholder="McDonalds">
                </div>

                <div class="col-xl-6 col-md-6 col-sm-6 form-group mt-3">
                    <label for="fav3">Favorite Place(s) to Shop:</label>
                    <input type="text" id="fav3" class="form-control c-form-input mt-1" placeholder="McDonalds">
                </div>

                <div class="col-xl-6 col-md-6 col-sm-6 form-group mt-3">
                    <label for="fav4">Favorite Activities Outside Work:</label>
                    <input type="text" id="fav4" class="form-control c-form-input mt-1" placeholder="McDonalds">
                </div>

                <div class="col-xl-6 col-md-6 col-sm-6 form-group mt-3">
                    <label for="fav5">Favorite Sport/ Team:</label>
                    <input type="text" id="fav5" class="form-control c-form-input mt-1" placeholder="McDonalds">
                </div>
                <div class="col-xl-2 col-md-4 col-sm-6 form-group mt-3">
                    <label for="position">Start Date</label>
                    <input type="text" id="position" class="form-control c-form-input read-o mt-1"
                        placeholder="Jan 01, 2024" readonly>
                </div>
                <div class="col-xl-2 col-md-4 col-sm-6 form-group mt-3">
                    <label for="position">Renewals BF %</label>
                    <input type="text" id="position" class="form-control c-form-input read-o mt-1"
                        placeholder="30%" readonly>
                </div>
                <div class="col-xl-2 col-md-4 col-sm-6 form-group mt-3">
                    <label for="position">New Business BF %</label>
                    <input type="text" id="position" class="form-control c-form-input read-o mt-1"
                        placeholder="40%" readonly>
                </div>
                <div class="col-md-12 text-end mt-2">
                    <button class="btn-blue-d">
                        <span class="pe-2">Save Changes</span>
                        <i class="fa fa-check"></i>
                    </button>
                </div>
                
            </div>
        </form>
    </div>
</template>