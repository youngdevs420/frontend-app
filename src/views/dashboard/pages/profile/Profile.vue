<script setup>
import DashboardSidebar from '../../../../components/DashboardSidebar.vue'
import DashboardHeader from '../../../../components/DashboardHeader.vue';
import FormHeader from './components/FormHeader.vue'
import FormBody1 from './components/FormBody1.vue'
</script>

<template>
    <div class="dashboard-layout">

        <DashboardSidebar />

        <main>

            <div class="dashbord-body">
                <DashboardHeader />

                <!-- Form Card Starts -->
                <div class="form-card card border-0 p-3 mx-4 my-5">
                    <div class="form p-3">
                        <FormHeader />
                        <FormBody1 />
                    </div>
                </div>
                <!-- Form Card Ends -->
            </div>

        </main>
    </div>
</template>

<style scoped></style>