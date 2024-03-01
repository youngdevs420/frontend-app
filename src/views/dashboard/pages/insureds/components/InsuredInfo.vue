<script  setup></script>

<template>
    <div class="insured-info">
        <div class="row">
            <div class="col-xl-9">
                <div class="i-info-card p-3">
                    <div class="header d-flex align-items-center justify-content-between">
                        <h5 class="pb-0 mb-0">Insureds Information</h5>
                        <div class="buttons">
                            <button class="outline-greed-btn">Active</button>
                            <button class="outline-dark-btn mx-2">Dead File</button>
                            <button class="outline-orange-btn">New Lead</button>
                        </div>
                    </div>
                    <div class="form-body mt-4">
                        <form>
                            <div class="fields-list">
                                <div class="d-flex align-items-center justify-content-betwenn">
                                    <div class="form-group">
                                        <label>First Name*</label>
                                        <input type="text" class="form-control w-90 mt-2" value="Scott">
                                    </div>
                                    <div class="form-group">
                                        <label>Middle Name</label>
                                        <input type="text" class="form-control w-90 mt-2" value="Harsh">
                                    </div>
                                    <div class="form-group">
                                        <label>last Name*</label>
                                        <input type="text" class="form-control w-90 mt-2" value="Harsh">
                                    </div>
                                    <div class="form-group">
                                        <label>Effective Date</label>
                                        <input type="text" class="form-control w-90 mt-2" value="Jan 05, 2024">
                                    </div>
                                    <div class="form-group">
                                        <label>Agent</label>
                                        <select class="form-control w-100 mt-2">
                                            <option>Zhaira Ortiz</option>
                                            <option>Chris</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="row my-3">
                                    <div class="form-group col-sm-3">
                                        <label>Named Insured*</label>
                                        <input type="text" class="form-control mt-2" value="Named Insured">
                                    </div>
                                    <div class="form-group col-sm-3">
                                        <label>DBA</label>
                                        <input type="text" class="form-control mt-2" value="Doing Business As">
                                    </div>

                                    <div class="form-group col-sm-3">
                                        <label>Business Structure*</label>
                                        <select class="form-control mt-2">
                                            <option>Business Structure</option>
                                        </select>
                                    </div>
                                    <div class="form-group col-sm-3">
                                        <label>Years in Business</label>
                                        <input type="text" class="form-control mt-2" value="Years in Business">
                                    </div>

                                    <div class="form-group col-sm-6 mt-3">
                                        <label>Phone Number*</label>
                                        <div class="d-flex align-items-center">
                                            <input type="text" class="form-control mt-2" value="+12543856456">
                                            <button class="btn-blue-sm mt-1 ms-2"><i class="fa fa-plus"></i></button>
                                        </div>
                                    </div>

                                    <div class="form-group col-sm-6 mt-3">
                                        <label>Work Email*</label>
                                        <div class="d-flex align-items-center">
                                            <input type="text" class="form-control mt-2" value="scottharsh@gmail.com">
                                            <button class="btn-blue-sm mt-1 ms-2"><i class="fa fa-plus"></i></button>
                                        </div>
                                    </div>

                                    <div class="form-group col-sm-6 mt-3">
                                        <label>Mailing Address*</label>
                                        <input type="text" class="form-control mt-2" value="address">
                                    </div>
                                    <div class="form-group col-sm-6 mt-3">
                                        <div class="d-flex justify-content-between align-items-center">
                                            <label>Garaging Address*</label>
                                            <div class="right">
                                                <input type="checkbox">
                                                <span class="ps-1">Same as Mailing Address?</span>
                                            </div>
                                        </div>
                                        <input type="text" class="form-control mt-2" value="address">
                                    </div>

                                    <div class="form-group col-sm-3 mt-3">
                                        <label>States Hauling to/from</label>
                                        <input type="text" class="form-control mt-2" value="Separate by comma">
                                    </div>

                                    <div class="form-group col-sm-3 mt-3">
                                        <label>Radius</label>
                                        <input type="text" class="form-control mt-2" value="Radius">
                                    </div>
                                    <div class="form-group col-sm-4 mt-3">
                                        <label>Commodities Hauled (Be Specific)</label>
                                        <input type="text" class="form-control mt-2"
                                            value="Commodities Hauled (Be Specific)">
                                    </div>


                                    <div class="form-group col-sm-2 mt-3 ps-1">
                                        <label>State Filings*?</label>
                                        <div class="d-flex align-items-center">
                                            <button class="btn-blue-sm mt-1">
                                                <small>Yes</small>
                                            </button>
                                            <button class="btn btn-outline-light text-dark bg-white mt-1 ms-2">
                                                <small>No</small>
                                            </button>
                                        </div>
                                    </div>

                                    <div class="form-group col-sm-12 mt-3">
                                        <label>How did you hear about us?</label>
                                        <input type="text" class="form-control mt-2"
                                            value="Facebook, Instagram, Referral, etc">
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div class="col-xl-3">
                <div class="i-chat-card card py-3 border-0">
                    <div class="ic-header">
                        <h5 class="px-3">Conversation with Insured</h5>
                        <hr>
                    </div>
                    <div class="ic-body px-3">
                        <div class="r-msg-box card py-3 px-3">
                            <div class="user d-flex align-items-center mb-3">
                                <img :src="'/assets/media/users/u1.png'" height="30" width="30" alt="user">
                                <small class="ps-2">Hey John!</small>
                            </div>
                            <div class="msg-info">
                                <small>Hey John!
                                    As a reminder, there’s issues that should be addressed in:
                                    Email Security
                                    Endpoint Security</small>
                                    <ul>
                                        <li><small>Email Security</small></li>
                                        <li><small>Endpoint Security</small></li>
                                    </ul>
                            </div>
                        </div>
                        <div class="sent-msg my-3">
                            <div class="card border-0 msg-box bg-blue ms-auto p-3">
                                <img :src="'/assets/media/users/u2.png'" height="28" width="28" alt="user">
                                <small>Run another risk assessment</small>
                            </div>
                            <p class="d-flex align-items-end justify-content-end mt-2">
                                <small class="txt-muted">Robert  12/20/23  9:30AM </small>
                            </p>
                        </div>
                        <div class="r-msg-box card py-3 px-3">
                            <div class="user d-flex align-items-center mb-3">
                                <img :src="'/assets/media/users/u1.png'" height="30" width="30" alt="user">
                                <small class="ps-2">Hey John!</small>
                            </div>
                            <div class="msg-info">
                                <small>How are you doing?</small>
                            </div>
                        </div>

                        <form id="sent-msg-form" class="mt-3">
                            <div class="form-group card pe-2 py-1">
                                <input type="text" class="form-control w-75 border-0" placeholder="Type something...">
                                <button class="btn-blue-sm py-0">
                                    <img :src="'/assets/media/icons/send.png'" height="24" width="24" alt="user">

                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.w-90 {
    width: 90%;
}

.i-info-card,
.i-chat-card {
    min-height: 200px;
    border-radius: 16px;
    background: #F9FAFB;
}

#sent-msg-form .card {
    display: flex !important;
    flex-direction: row !important;
    justify-content: space-between;
}
</style>