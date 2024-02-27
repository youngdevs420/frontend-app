<script setup></script>

<template>
    <div class="card p-3">
        <div class="c-card-header d-flex align-items-center justify-content-between text-light px-3 py-2">
            <div class="d-flex align-items-center">
                <h5 class="py-0 my-0 pe-2">Brokers Fee Split</h5>
                <img :src="'assets/media/icons/cash.png'" alt="icon">
            </div>
        </div>
        <div class="c-card-body">
            <div class="table-responsive my-4">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>Initial Date</th>
                            <th>Receipt</th>
                            <th>Insured</th>
                            <th>Brokers Fee Split</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td rowspan="1">Dec 10, 2023</td>
                            <td><a href="" class="text-decoration-none">#2606</a></td>
                            <td>ABC Trucking LLC</td>
                            <td >
                                <span>$700</span>
                                <span class="text-muted ps-1">(30%)</span>
                            </td>
                        </tr>
                        <tr>
                            <td class="single-td" colspan="4">
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="d-flex align-items-center">
                                        <img src="assets/media/users/u1.png" width="24" height="24" alt="">
                                        <span class="ps-2">Jenny Wilson</span>
                                    </div>
                                    <span class="pe-5 me-4">Total: $900</span>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td rowspan="1">Dec 10, 2023</td>
                            <td><a href="" class="text-decoration-none">#2606</a></td>
                            <td>ABC Trucking LLC</td>
                            <td >
                                <span>$700</span>
                                <span class="text-muted ps-1">(30%)</span>
                            </td>
                        </tr>
                        <tr>
                            <td rowspan="1">Dec 10, 2023</td>
                            <td><a href="" class="text-decoration-none">#2606</a></td>
                            <td>ABC Trucking LLC</td>
                            <td >
                                <span>$700</span>
                                <span class="text-muted ps-1">(30%)</span>
                            </td>
                        </tr>
                        <tr>
                            <td class="single-td" colspan="4">
                                <div class="d-flex align-items-center justify-content-between">
                                    <div class="d-flex align-items-center">
                                        <img src="assets/media/users/u1.png" width="24" height="24" alt="">
                                        <span class="ps-2">Jenny Wilson</span>
                                    </div>
                                    <span class="pe-5 me-4">Total: $900</span>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>


            </div>
        </div>
    </div>
</template>

<style scoped>
.single-td {
    background: linear-gradient(0deg, #ECF0F5, #ECF0F5),
        linear-gradient(0deg, #FAFAFB, #FAFAFB);
}
</style>

