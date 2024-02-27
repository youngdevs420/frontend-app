<script setup>
import DashboardSidebar from '@/components/DashboardSidebar.vue'
import DashboardHeader from '@/components/DashboardHeader.vue';
import PriceCards from './components/PriceCards.vue'
import ChartCard from './components/ChartCard.vue'
import RangeCard from './components/RangeCard.vue'
import RenewalsCard from './components/RenewalsCard.vue'
import NewLeadsCard from './components/NewLeadsCard.vue'
import BrokerFeeCard from './components/BrokerFeeCard.vue'
import BrokerFinanceCard from './components/BrokerFinanceCard.vue'
import BalancesDueCard from './components/BalancesDueCard.vue'



</script>

<template>
    <div class="dashboard-layout">

        <DashboardSidebar />

        <main>

            <div class="dashbord-body">
                <DashboardHeader />

                <div class="dashboard-content">
                    <div class="dashboard-s-header p-4">
                        <div class="two-cards price-cards">
                            <PriceCards />
                        </div>
                        <div class="chart-card card border-0 mt-5 p-3">
                            <ChartCard />
                        </div>
                    </div>
                    <div class="fillter-cards p-4">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="range-card mb-5">
                                    <RangeCard />
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <div class="renewwals-card">
                                    <RenewalsCard />
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <div class="newleads-card">
                                    <NewLeadsCard />
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <div class="feecard-card">
                                    <BrokerFeeCard />
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <div class="feecard-card">
                                    <BrokerFinanceCard />
                                </div>
                            </div>
                            <div class="col-md-6 mb-3">
                                <div class="feecard-card">
                                    <BalancesDueCard />
                                </div>
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

.fillter-cards {
    margin-top: 10rem;
}

.range-card .card {
    border-radius: 15px;
    border: 3px solid #3196E3;
    box-shadow: 0px 4px 30px 0px #4D546408;
}

.fillter-cards .card {
    border-radius: 16px;
    background-color: #FFF;
    box-shadow: 0px 4px 30px 0px #4D546408;
    border: 1px #fff !important;
}

.fillter-cards .card 
.c-card-header {
    border-radius: 6px;
    background: #3196E3;
}
</style>