<script setup>
import DashboardSidebar from '@/components/DashboardSidebar.vue'
import DashboardHeader from '@/components/DashboardHeader.vue';
import TabsHeader from './components/TabsHeader.vue';
import InsuredInfo from './components/InsuredInfo.vue'
</script>

<template>
    <div class="dashboard-layout">

        <DashboardSidebar />

        <main>

            <div class="dashbord-body">
                <DashboardHeader />
            </div>

            <div class="create-insured px-4 my-5">
                <div class="insured-create-header">
                    <TabsHeader />
                    <div class="insured-create-body p-3 mt-4">

                        <div class="tab-content" id="pills-tabContent">
                            <div class="tab-pane fade show active" id="pills-info" role="tabpanel"
                                aria-labelledby="pills-info-tab" tabindex="0">
                                <InsuredInfo />

                            </div>
                            <div class="tab-pane fade" id="pills-receiptlog" role="tabpanel"
                                aria-labelledby="pills-receiptlog-tab" tabindex="0">
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
                                        <td >Renewal</td>
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
                                        <td >Renewal</td>
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
                                        <td >Renewal</td>
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
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    </div>
</template>

<style scoped>
.insured-create-body {
    min-height: 400px;
    border-radius: 24px;
    background: #FFFFFF;
    box-shadow: 18px 4px 35px 0px #4D546408;
}

input {
    background: linear-gradient(0deg, #ECF0F5, #ECF0F5),
        linear-gradient(0deg, #FAFAFB, #FAFAFB);
}
</style>