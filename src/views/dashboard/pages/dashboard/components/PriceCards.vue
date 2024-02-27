<script setup></script>

<template>
    <div class="row">
        <div class="col-xl-6">
            <div class="card border-0 d-flex flex-row align-items-center border-red py-2 px-3 price-card">
                <div class="icon">
                    <img :src="'assets/media/icons/dollar.png'" height="50" width="50" alt="icon">
                </div>
                <div class="price ps-3">
                    <small class="pb-0 mb-0">Premium</small>
                    <h4 class="pt-0 mt-0">$333,350.40</h4>
                </div>
            </div>
        </div>
        <div class="col-xl-6">
            <div class="card border-0 d-flex flex-row align-items-center border-red py-2 px-3 price-card">
                <div class="icon">
                    <img :src="'assets/media/icons/dollar.png'" height="50" width="50" alt="icon">
                </div>
                <div class="price ps-3">
                    <small class="pb-0 mb-0">Brokers Fee Paid Out</small>
                    <h4 class="pt-0 mt-0">$7,350.53</h4>
                </div>
            </div>
        </div>
    </div>
</template>