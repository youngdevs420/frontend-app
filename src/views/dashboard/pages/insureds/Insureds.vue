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
                <div class="renewals px-4 my-5">
                    <div class="header d-flex align-items-center justify-content-between">
                        <h4 class="">Insureds</h4>
                        <a href="/createinsured" class="btn-blue-sm">
                            <span class="pe-2">New Insured</span>
                            <i class="fa fa-plus"></i>
                        </a>
                    </div>
                    <div class="table-card border-0 card p-4 mt-4">
                        <div class="row align-items-center">
                            <div class="col-md-2">
                                <h5>250 Insureds</h5>
                            </div>
                            <div class="col-md-4">
                                <input type="text" class="form-control py-1" placeholder="Search">
                            </div>
                            <div class="col-md-6">
                                <div class="btns-list d-flex justify-content-end">
                                    <button class="btn-blue-sm">All 252</button>
                                    <button class="outline-greed-btn mx-2">Active 250</button>
                                    <button class="outline-orange-btn">New Lead 10</button>
                                    <button class="outline-dark-btn ms-2">Dead File 10</button>
                                </div>
                            </div>
                        </div>
                        <div class="table-responsive my-4">
                            <table class="table table-bordered">
                                <thead>
                                    <tr>
                                        <th class="d-flex align-items-center">
                                            <span>Named Insured</span>
                                            <span class="d-flex flex-column ps-2 sort">
                                                <i class="fa fa-caret-up"></i>
                                                <i class="fa fa-caret-down mt-m-7"></i>
                                            </span>
                                        </th>
                                        <th>DBA</th>
                                        <th>Phone</th>
                                        <th>Email</th>
                                        <th class="d-flex align-items-center">
                                            <span>Insured Since</span>
                                            <span class="d-flex flex-column ps-2 sort">
                                                <i class="fa fa-caret-up"></i>
                                                <i class="fa fa-caret-down mt-m-7"></i>
                                            </span>
                                        </th>
                                        <th>Status</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><a href="" class="text-decoration-none">Abel Campos</a></td>
                                        <td>Abel Transport</td>
                                        <td>(323) 316-3299</td>
                                        <td>Abelcampos@yahoo.com</td>
                                        <td>Dec 2021</td>
                                        <td>
                                            <span class="green-badge">Active</span>
                                        </td>
                                        <td class="text-center">
                                            <a href="" class="text-dark"><i class="fa fa-pen"></i></a>
                                            <a href="" class="text-danger mx-3"><i class="fa fa-trash-alt"></i></a>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td><a href="" class="text-decoration-none">Abel Campos</a></td>
                                        <td>Abel Transport</td>
                                        <td>(323) 316-3299</td>
                                        <td>Abelcampos@yahoo.com</td>
                                        <td>Dec 2021</td>
                                        <td>
                                            <span class="red-badge">Unverified</span>
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
.mt-m-7 {
    margin-top: -7px;
}

.sort {
    font-size: 13px;
}
</style>