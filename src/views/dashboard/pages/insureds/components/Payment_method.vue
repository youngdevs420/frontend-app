<script setup></script>

<template>
    <div class="border-0 card mt-4">
        <div class="account-info">
            <div class="row">
                <div class="col-lg-6 mb-3">
                    <div class="card border-0 bg-grey-100">
                        <div class="card-header bg-grey-100 d-flex align-items-center justify-content-between">
                            <h5>Bank Account Information</h5>
                            <button class="btn btn-primary">New Bank Account <i class="fa fa-plus ms-2"></i></button>
                        </div>
                        <div class="card-body">
                            <form action="">
                                <div class="row mb-5">
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label for="" class="mb-2">Bank Institution</label>
                                            <select name="" id="" class="form-select">
                                                <option value="">Bank Name</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label for="" class="mb-2">Routing Number</label>
                                            <input type="text" class="form-control" placeholder="Routing Number">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label for="" class="mb-2">Account Number</label>
                                            <input type="text" class="form-control" placeholder="Account Number">
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6 mb-3">
                    <div class="card border-0 bg-grey-100">
                        <div class="card-header bg-grey-100 d-flex align-items-center justify-content-between">
                            <h5>Credit Information</h5>
                            <button class="btn btn-primary">New Credit Card <i class="fa fa-plus ms-2"></i></button>
                        </div>
                        <div class="card-body">
                            <form action="">
                                <div class="row mb-5">
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label for="" class="mb-2">Bank Institution</label>
                                            <select name="" id="" class="form-select">
                                                <option value="">Bank Name</option>
                                                <option value="1">One</option>
                                                <option value="2">Two</option>
                                                <option value="3">Three</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label for="" class="mb-2">Credit Card Number</label>
                                            <input type="text" class="form-control" placeholder="Credit Card Number">
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="form-group">
                                            <label for="" class="mb-2">Expiration Date</label>
                                            <input type="text" class="form-control" placeholder="12/25">
                                        </div>
                                    </div>
                                    <div class="col-md-2">
                                        <div class="form-group">
                                            <label for="" class="mb-2">CVV</label>
                                            <input type="text" class="form-control" placeholder="***">
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="card border-0 bg-grey-100">
                        <div class="card-header bg-grey-100 text-center">
                            <h5>Billing Address</h5>
                        </div>
                        <div class="card-body">
                            <form action="">
                                <div class="form-group">
                                    <label for="" class="mb-2">Address</label>
                                    <input type="text" class="form-control" placeholder="Address">
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                <div class="col-lg-6">
                    <div class="card border-0 bg-grey-100">
                        <div class="card-header bg-grey-100 text-center">
                            <h5>Financing Information</h5>
                        </div>
                        <div class="card-body">
                            <form action="">
                                <div class="row">
                                    <div class="form-group col-md-6">
                                        <label for="" class="mb-2">Finance Comapny</label>
                                        <select class="form-select" aria-label="Default select example">
                                        <option selected>Finance Company</option>
                                        <option value="1">One</option>
                                        <option value="2">Two</option>
                                        <option value="3">Three</option>
                                        </select>
                                    </div>
                                    <div class="form-group col-md-6">
                                    <label for="" class="mb-2">Loan Number</label>
                                    <input type="text" class="form-control" placeholder="Number">
                                </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card bg-grey-100 border-0 mt-3 claims-upload-file">
        <div class="card-header bg-grey-100 text-center">
            <h6>General Notes</h6>
        </div>
        <div class="card-body">
            <div class="chat-box">
                <div class="recieve-messages">
                    <div class="float-end">
                        <div class="message d-flex align-items-center">
                        <div class="profile">
                            <img :src="'/src/assets/images/users/u1.png'" alt="profile">
                        </div>
                        <div class="message-text ms-2">
                            Insured will be filing a claim next week.
                        </div>
                    </div>
                    <div class="msg-timeline text-end mt-2">Robert  12/20/23  9:30AM </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card-footer bg-grey-100 border-0 mt-5">
            <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Type Something..." aria-label="Recipient's username" aria-describedby="button-addon2">
            <button class="btn btn-primary" type="button" id="button-addon2">
                <img :src="'/src/assets/icons/send.png'" alt="profile">
            </button>
            </div>
        </div>
        </div>
    </div>

</template>

<style scoped>
input {
    background: linear-gradient(0deg, #ECF0F5, #ECF0F5),
        linear-gradient(0deg, #FAFAFB, #FAFAFB);
}
.bg-grey-100 {
    background: #F9FAFB;
}

.custom-card {
    border-radius: 16px;
    background-color: #FFF;
    box-shadow: 0px 4px 30px 0px #4D546408;
    border: 1px #fff !important;
}
input {
    background: white;
}

</style>