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
                        <InsuredInfo />
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

</style>