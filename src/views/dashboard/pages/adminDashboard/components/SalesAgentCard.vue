<script setup></script>

<template>
    <div class="card p-3">
        <div class="row align-items-center">
            <div class="col-sm-2">
                <h5>Sales By Agent</h5>
            </div>
            <div class="col-sm-10">
                <div class="row">
                    <div class="col-sm-3">
                        <input type="date" class="form-control">
                    </div>
                    <div class="col-sm-3">
                        <input type="date" class="form-control">
                    </div>
                    <div class="col-sm-3">
                        <select class="form-control">\
                            <option>Year</option>
                            <option value="">2024</option>
                            <option value="">2023</option>
                            <option value="">2022</option>
                            <option value="">2021</option>
                            <option value="">2020</option>
                        </select>
                    </div>
                    <div class="col-sm-3">
                        <button class="btn-blue-sm me-2">
                            <span>Search</span>
                            <i class="fa fa-search ps-2"></i>
                        </button>
                        <button class="outline-white-btn">
                            <span>Export</span>
                            <i class="fa fa-upload ps-2"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div class="c-card-body">
            <div class="table-responsive my-4">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>Employee</th>
                            <th>Renewals</th>
                            <th>Endorsements</th>
                            <th>New Business</th>
                            <th>Business Lost</th>
                            <th>Premium</th>
                            <th>Commission</th>
                            <th>BF Total</th>
                            <th>BF Paid Out</th>
                            <th>BF Retained</th>
                            <th>Leads Assigned</th>
                            <th>Leads Sold</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>
                                <div class="d-flex align-items-center">
                                    <img src="assets/media/users/u1.png" width="24" height="24" alt="">
                                    <span class="ps-2">Jenny Wilson</span>
                                </div>
                            </td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>
                                <div class="d-flex align-items-center">
                                    <img src="assets/media/users/u1.png" width="24" height="24" alt="">
                                    <span class="ps-2">Jenny Wilson</span>
                                </div>
                            </td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>
                                <div class="d-flex align-items-center">
                                    <img src="assets/media/users/u1.png" width="24" height="24" alt="">
                                    <span class="ps-2">Jenny Wilson</span>
                                </div>
                            </td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>
                                <div class="d-flex align-items-center">
                                    <img src="assets/media/users/u1.png" width="24" height="24" alt="">
                                    <span class="ps-2">Jenny Wilson</span>
                                </div>
                            </td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>
                                <div class="d-flex align-items-center">
                                    <img src="assets/media/users/u1.png" width="24" height="24" alt="">
                                    <span class="ps-2">Jenny Wilson</span>
                                </div>
                            </td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                        </tr>
                        <tr>
                            <td>
                                <div class="d-flex align-items-center">
                                    <img src="assets/media/users/u1.png" width="24" height="24" alt="">
                                    <span class="ps-2">Jenny Wilson</span>
                                </div>
                            </td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                            <td>100</td>
                        </tr>
                    </tbody>
                </table>
                <table class="table bottom-table">
                    <thead class="bottom-thead">
                        <tr>
                            <th class="border-0">Total:</th>
                            <th class="border-0">500</th>
                            <th class="border-0">250</th>
                            <th class="border-0">500</th>
                            <th class="border-0">250</th>
                            <th class="border-0">500</th>
                            <th class="border-0">250</th>
                            <th class="border-0">500</th>
                            <th class="border-0">250</th>
                            <th class="border-0">500</th>
                            <th class="border-0">250</th>
                            <th class="border-0">500</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </div>
    </div>
</template>