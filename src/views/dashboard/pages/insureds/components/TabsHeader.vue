<script setup></script>

<template>
    <ul class="nav nav-pills justify-content-between mb-3" id="pills-tab" role="tablist">
        <li class="nav-item" role="presentation">
            <button class="nav-link active" id="pills-info-tab" data-bs-toggle="pill" data-bs-target="#pills-info"
                type="button" role="tab" aria-controls="pills-info" aria-selected="true">Information</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-receiptlog-tab" data-bs-toggle="pill" data-bs-target="#pills-receiptlog"
                type="button" role="tab" aria-controls="pills-receiptlog" aria-selected="false">Receipt Logs</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-vehicles-tab" data-bs-toggle="pill" data-bs-target="#pills-vehicles"
                type="button" role="tab" aria-controls="pills-vehicles" aria-selected="false">Vehicles</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-drivers-tab" data-bs-toggle="pill" data-bs-target="#pills-drivers"
                type="button" role="tab" aria-controls="pills-drivers" aria-selected="false">Drivers</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-claims-tab" data-bs-toggle="pill" data-bs-target="#pills-claims"
                type="button" role="tab" aria-controls="pills-claims" aria-selected="false"> Claims</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-method-tab" data-bs-toggle="pill" data-bs-target="#pills-method"
                type="button" role="tab" aria-controls="pills-method" aria-selected="false">P Method</button>
        </li>
        <li class="nav-item" role="presentation">
            <button class="nav-link" id="pills-documents-tab" data-bs-toggle="pill" data-bs-target="#pills-documents"
                type="button" role="tab" aria-controls="pills-documents" aria-selected="false">Documents</button>
        </li>
    </ul>
</template>

<style scoped> 
.nav-pills 
.nav-item button.active {
    background-color: #3196E3 !important;
}
.nav-pills 
.nav-item button{
    width: 150px;
    height: 50px;
    background: #FFFFFF;
    border-radius: 8px;
    border: 1px solid #66708526;
}
</style>