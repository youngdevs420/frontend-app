<script setup></script>

<template>
    <div class="form-body mt-5">
        <form>
            <div class="row">
                <div class="col-xl-12">
                    <h5>Change Passowrd</h5>
                </div>
                <div class="col-xl-6 col-md-6 col-sm-6 form-group mt-3">
                    <label for="fname">Current Password*</label>
                    <input type="password" id="fname" class="form-control c-form-input mt-1" placeholder="********">
                </div>
                <div class="col-xl-6 col-md-6 col-sm-6 form-group mt-3">
                    <label for="dob">TIme Zoe</label>
                    <select class="form-control mt-1">
                        <option>GMT-08:00 America/Los Angeles PST</option>
                    </select>
                </div>
                <div class="col-xl-6 col-md-6 col-sm-6 form-group mt-3">
                    <label for="lname">New Passowrd*</label>
                    <input type="password" id="lname" class="form-control c-form-input mt-1" placeholder="********">
                </div>
                <div class="col-xl-6 col-md-6 col-sm-6 form-group mt-3">
                    <label for="dob">Language</label>
                    <select class="form-control mt-1">
                        <option>English(US)</option>
                    </select>
                </div>
                <div class="col-xl-6 col-md-6 col-sm-6 form-group mt-3">
                    <label for="lname">Repeat New Passowrd*</label>
                    <input type="password" id="lname" class="form-control c-form-input mt-1" placeholder="********">
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