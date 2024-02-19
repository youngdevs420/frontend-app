<script setup>
import DashboardSidebar from '../../../../components/DashboardSidebar.vue'
import DashboardHeader from '../../../../components/DashboardHeader.vue';
</script>

<template>
    <div class="dashboard-layout">

        <DashboardSidebar />

        <main>

            <div class="dashbord-body">
                <DashboardHeader />

                <!-- Renewal Main Content starts -->
                <div class="renewals px-4 my-5">
                    <div class="header d-flex align-items-center justify-content-between">
                        <h4 class="">Renewals</h4>
                        <button class="btn-blue-sm">
                            <span class="pe-2">Release List</span>
                            <i class="fa fa-list"></i>
                        </button>
                    </div>
                    <div class="table-card border-0 card p-4 mt-4">
                        <div class="row align-items-center">
                            <div class="col-md-2">
                                <h5>5 Renewals</h5>
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
                                            <option>Month</option>
                                            <option>March</option>
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
                                        <th>Expiration Date</th>
                                        <th>Insured</th>
                                        <th>General Agent</th>
                                        <th>Assigned To</th>
                                        <th>Down Payment (2023)</th>
                                        <th>Finance Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(item, index) in 5" :key="index">
                                        <td>06 Dec 2023</td>
                                        <td>
                                            <a href="" class="text-decoration-none">ABC Trucking LLC</a>
                                        </td>
                                        <td>ATM</td>
                                        <td>Jenny Wilson</td>
                                        <td>$10,000</td>
                                        <td>
                                            <span class="green-badge">Active</span>
                                        </td>
                                        <td class="text-center">
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
input {
    background: linear-gradient(0deg, #ECF0F5, #ECF0F5),
linear-gradient(0deg, #FAFAFB, #FAFAFB);
}
</style>