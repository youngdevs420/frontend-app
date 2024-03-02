<script setup>
import DashboardSidebar from '@/components/DashboardSidebar.vue'
import DashboardHeader from '@/components/DashboardHeader.vue';
import TabsHeader from './components/TabsHeader.vue';
import InsuredInfo from './components/InsuredInfo.vue'
import ReceiptLog from './components/ReceiptLog.vue';
import vehicles from './components/vehicles.vue';
import Drivers from './components/Drivers.vue';
import Claims from './components/Claims.vue';


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
                                <ReceiptLog />
                            </div>
                            <div class="tab-pane fade" id="pills-vehicles" role="tabpanel"
                                aria-labelledby="pills-vehicles-tab" tabindex="0">
                                <vehicles />
                            </div>
                            <div class="tab-pane fade" id="pills-drivers" role="tabpanel"
                                aria-labelledby="pills-drivers-tab" tabindex="0">
                                <Drivers />
                            </div>
                            <div class="tab-pane fade" id="pills-claims" role="tabpanel"
                                aria-labelledby="pills-claims-tab" tabindex="0">
                                <Claims />
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