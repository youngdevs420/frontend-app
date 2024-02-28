<script setup>
import DashboardSidebar from '@/components/DashboardSidebar.vue'
import DashboardHeader from '@/components/DashboardHeader.vue';
import PriceCards from './components/PriceCards.vue'
import ChartCard from './components/ChartCard.vue'
import ProfileCard from './components/ProfileCard.vue'
import SalesAgentCard from './components/SalesAgentCard.vue'
import RenewWalsCard from './components/RenewalsCard.vue'
import NewLeadsCard from './components/NewLeadsCard.vue';
import BrokersFeeSplitCard from './components/BrokerFeeSplitCard.vue';
import BrokerFinanceCard from './components/BrokerFinanceCard.vue';
import BalancesDueCard from './components/BalancesDueCard.vue';
import DocumentPendingCard from './components/DocumentPendingCard.vue';


</script>

<template>
    <div class="dashboard-layout">

        <DashboardSidebar />

        <main>

            <div class="dashbord-body">
                <DashboardHeader />

                <div class="dashboard-content">
                    <div class="dashboard-s-header p-4">
                        <div class="four-cards price-cards">
                            <PriceCards />
                        </div>
                        <div class="row">
                            <div class="col-md-8">
                                <div class="chart-card card border-0 mt-5 p-3">
                                    <ChartCard />

                                </div>
                            </div>
                            <div class="col-md-4">
                                <ProfileCard />
                            </div>
                        </div>

                    </div>
                    <div class="a-fillter-cards p-4">
                        <div class="row">
                            <div class="col-xl-12 mb-5">
                                <SalesAgentCard />
                            </div>
                            <div class="col-xl-6 mb-5">
                                <RenewWalsCard />
                            </div>
                            <div class="col-xl-6 mb-5">
                                <NewLeadsCard />
                            </div>
                            <div class="col-xl-6 mb-5">
                                <BrokersFeeSplitCard />
                            </div>
                            <div class="col-xl-6 mb-5">
                                <BrokerFinanceCard />
                            </div>
                            <div class="col-xl-6 mb-5">
                                <BalancesDueCard/>
                            </div>
                            <div class="col-xl-6 mb-5">
                                <DocumentPendingCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </main>
    </div>
</template>

<style>
.dashboard-s-header {
    height: 300px;
    background: url('../../../../../public/assets/media/dashboard.png') no-repeat center center/cover;
}

.dashboard-s-header .price-card {
    border-radius: 12px;
}

.dashboard-s-header .chart-card {
    border-radius: 14px;
}

.dashboard-s-header .chart-card .two-tabs {
    border-radius: 10px;
}

.a-fillter-cards {
    margin-top: 23rem;
}

.range-card .card {
    border-radius: 15px;
    border: 3px solid #3196E3;
    box-shadow: 0px 4px 30px 0px #4D546408;
}

.a-fillter-cards .card {
    border-radius: 16px;
    background-color: #FFF;
    box-shadow: 0px 4px 30px 0px #4D546408;
    border: 1px #fff !important;
}

.a-fillter-cards .card .c-card-header {
    border-radius: 6px;
    background: #3196E3;
}


.dashboard-s-header .profile-card {
    border-radius: 12px;
}</style>