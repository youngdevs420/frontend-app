<script setup>
import DashboardSidebar from '@/components/DashboardSidebar.vue'
import DashboardHeader from '@/components/DashboardHeader.vue';
</script>

<template>
    <div class="dashboard-layout">

        <DashboardSidebar />

        <main>

            <div class="dashbord-body">
                <DashboardHeader />

                <!-- Renewal Main Content starts -->
                <div class="reciept-log px-4 my-5">
                    <div class="header d-flex align-items-center justify-content-between">
                        <h4 class="">Receipt Log</h4>
                        <button class="btn-blue-sm">
                            <span class="pe-2">New Receipt Log</span>
                            <i class="fa fa-plus"></i>
                        </button>
                    </div>
                    <div class="table-card border-0 card p-4 mt-4">
                        <div class="row align-items-center">
                            <div class="col-md-2">
                                <h5>5 Receipt Logs</h5>
                            </div>
                            <div class="col-md-5">
                                <input type="text" class="form-control py-1" placeholder="Search">
                            </div>
                            <div class="col-md-5">
                                <div class="row">
                                    <div class="col-4">
                                        <select class="form-control">
                                            <option>Agent</option>
                                            <option>User</option>
                                            <option>Employee</option>
                                        </select>
                                    </div>
                                    <div class="col-4">
                                        <select class="form-control">
                                            <option>This Week</option>
                                            <option>Last Week</option>
                                            <option>April</option>
                                        </select>
                                    </div>
                                    <div class="col-4">
                                        <select class="form-control">
                                            <option>2024</option>
                                            <option>2023</option>
                                            <option>2022</option>
                                        </select>
                                    </div>
                                </div>
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
                                        <th>General Agent</th>
                                        <th>Insurance Carrier</th>
                                        <th>Form of Payment</th>
                                        <th>Amount Sent</th>
                                        <th>Status</th>
                                        <th>Action</th>
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
                                        <td >Renewal</td>
                                        <td>Progressive</td>
                                        <td>Progressive</td>
                                        <td class="w-130px">Wire Transfer</td>
                                        <td>$10,000</td>
                                        <td>
                                            <span class="green-badge">Verified</span>
                                        </td>
                                        <td class="text-center d-flex">
                                            <a href="" class="text-dark"><i class="fa fa-pen"></i></a>
                                            <a href="" class="text-danger mx-3"><i class="fa fa-trash-alt"></i></a>
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
                                        <td>Progressive</td>
                                        <td>Progressive</td>
                                        <td>Wire Transfer</td>
                                        <td>$10,000</td>
                                        <td>
                                            <span class="red-badge">Unverified</span>
                                        </td>
                                        <td class="text-center d-flex">
                                            <a href="" class="text-dark"><i class="fa fa-pen"></i></a>
                                            <a href="" class="text-danger mx-3"><i class="fa fa-trash-alt"></i></a>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
                <!-- Renewal Main Content ends -->
            </div>

        </main>
    </div>
</template>

<style scoped>
.reciept-log {
    width: 100% !important;
    margin-left: 0 !important;
    margin-right: 0 !important;
}

input {
    background: linear-gradient(0deg, #ECF0F5, #ECF0F5),
        linear-gradient(0deg, #FAFAFB, #FAFAFB);
}

.w-120px {
    width: 120px !important;
}
.w-130px {
    width: 130px !important;
}
</style>