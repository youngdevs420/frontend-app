<script setup></script>

<template>
    <div class="table-card border-0 card p-4 mt-4">
        <div class="row align-items-center">
            <div class="col-md-2">
                <h5>8 Receipt Logs</h5>
            </div>
            <div class="col-md-5">
                <input type="text" class="form-control py-1" placeholder="Search">
            </div>
        </div>
        <div class="table-responsive my-4">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>
                            <input type="checkbox">
                        </th>
                        <th>Date Paid</th>
                        <th>Receipt</th>
                        <th>Named Insured</th>
                        <th>Sold By</th>
                        <th>Transaction Type</th>
                        <th>Coverage Type</th>
                        <th>Down Payment Mark Up</th>
                        <th>Amount Paid</th>
                        <th>Balance Due</th>
                        <th>Brokers Fee</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input type="checkbox">
                        </td>
                        <td class="w-120px">Dec 06, 2023</td>
                        <td>
                            <a href="" class="text-decoration-none">#2606</a>
                        </td>
                        <td class="w-130px">ABC Trucking LLC</td>
                        <td class="w-130px">
                            <div class="d-flex align-items-center">
                                <img :src="'assets/media/users/u1.png'" width="24" height="24" alt="">
                                <span class="ps-2">Jenny Wilson</span>
                            </div>
                        </td>
                        <td>Renewal</td>
                        <td>AL • MTC • APD</td>
                        <td>$1000</td>
                        <td>2000$</td>
                        <td>$10,000</td>
                        <td>$10,000</td>
                        <td>
                            <span class="green-badge">Verified</span>
                        </td>
                    </tr>
                    <tr>

                        <td>
                            <input type="checkbox">
                        </td>
                        <td>Dec 06, 2023</td>
                        <td>
                            <a href="" class="text-decoration-none">#2606</a>
                        </td>
                        <td>ABC Trucking LLC</td>
                        <td>
                            <div class="d-flex align-items-center">
                                <img :src="'assets/media/users/u1.png'" width="24" height="24" alt="">
                                <span class="ps-2">Jenny Wilson</span>
                            </div>
                        </td>
                        <td>Renewal</td>
                        <td>AL • MTC • APD</td>
                        <td>$1000</td>
                        <td>2000$</td>
                        <td>$10,000</td>
                        <td>$10,000</td>
                        <td>
                            <span class="red-badge">Void</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox">
                        </td>
                        <td class="w-120px">Dec 06, 2023</td>
                        <td>
                            <a href="" class="text-decoration-none">#2606</a>
                        </td>
                        <td class="w-130px">ABC Trucking LLC</td>
                        <td class="w-130px">
                            <div class="d-flex align-items-center">
                                <img :src="'assets/media/users/u1.png'" width="24" height="24" alt="">
                                <span class="ps-2">Jenny Wilson</span>
                            </div>
                        </td>
                        <td>Renewal</td>
                        <td>AL • MTC • APD</td>
                        <td>$1000</td>
                        <td>2000$</td>
                        <td>$10,000</td>
                        <td>$10,000</td>
                        <td>
                            <span class="green-badge">Verified</span>
                        </td>
                    </tr>
                    <tr>

                        <td>
                            <input type="checkbox">
                        </td>
                        <td>Dec 06, 2023</td>
                        <td>
                            <a href="" class="text-decoration-none">#2606</a>
                        </td>
                        <td>ABC Trucking LLC</td>
                        <td>
                            <div class="d-flex align-items-center">
                                <img :src="'assets/media/users/u1.png'" width="24" height="24" alt="">
                                <span class="ps-2">Jenny Wilson</span>
                            </div>
                        </td>
                        <td>Renewal</td>
                        <td>AL • MTC • APD</td>
                        <td>$1000</td>
                        <td>2000$</td>
                        <td>$10,000</td>
                        <td>$10,000</td>
                        <td>
                            <span class="red-badge">Void</span>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <input type="checkbox">
                        </td>
                        <td class="w-120px">Dec 06, 2023</td>
                        <td>
                            <a href="" class="text-decoration-none">#2606</a>
                        </td>
                        <td class="w-130px">ABC Trucking LLC</td>
                        <td class="w-130px">
                            <div class="d-flex align-items-center">
                                <img :src="'assets/media/users/u1.png'" width="24" height="24" alt="">
                                <span class="ps-2">Jenny Wilson</span>
                            </div>
                        </td>
                        <td>Renewal</td>
                        <td>AL • MTC • APD</td>
                        <td>$1000</td>
                        <td>2000$</td>
                        <td>$10,000</td>
                        <td>$10,000</td>
                        <td>
                            <span class="green-badge">Verified</span>
                        </td>
                    </tr>
                    <tr>

                        <td>
                            <input type="checkbox">
                        </td>
                        <td>Dec 06, 2023</td>
                        <td>
                            <a href="" class="text-decoration-none">#2606</a>
                        </td>
                        <td>ABC Trucking LLC</td>
                        <td>
                            <div class="d-flex align-items-center">
                                <img :src="'assets/media/users/u1.png'" width="24" height="24" alt="">
                                <span class="ps-2">Jenny Wilson</span>
                            </div>
                        </td>
                        <td>Renewal</td>
                        <td>AL • MTC • APD</td>
                        <td>$1000</td>
                        <td>2000$</td>
                        <td>$10,000</td>
                        <td>$10,000</td>
                        <td>
                            <span class="red-badge">Void</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

</template>