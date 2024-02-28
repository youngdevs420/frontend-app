<script setup></script>

<template>
    <div class="card p-3">
        <div class="c-card-header d-flex align-items-center justify-content-between text-light px-3 py-2">
            <div class="d-flex align-items-center">
                <h5 class="py-0 my-0 pe-2">Credit Card Fee Split</h5>
                <img :src="'assets/media/icons/fee.png'" alt="icon">
            </div>
            <button class="btn btn-sm btn-outline-light px-3 c-outline-btn">
                <span class="pe-2">Add</span>
                <i class="fa fa-plus"></i>
            </button>
        </div>
        <div class="c-card-body">
            <div class="table-responsive my-4">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>Month Of</th>
                            <th>Agent</th>
                            <th>Amount</th>
                            <th>Date Deducted</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>06 Dec 2023</td>
                            <td>
                                <div class="d-flex align-items-center">
                                    <img src="assets/media/users/u1.png" width="24" height="24" alt="">
                                    <span class="ps-2">Jenny Wilson</span>
                                </div>
                            </td>
                            <td>$1,000</td>
                            <td class="txt-muted">
                                <i class="fa fa-calendar pe-1"></i>
                                <span>mm/dd/yyyy</span>
                            </td>
                        </tr>
                        <tr>
                            <td>06 Dec 2023</td>
                            <td>
                                <div class="d-flex align-items-center">
                                    <img src="assets/media/users/u1.png" width="24" height="24" alt="">
                                    <span class="ps-2">Jenny Wilson</span>
                                </div>
                            </td>
                            <td>$1,000</td>
                            <td class="txt-muted">
                                <i class="fa fa-calendar pe-1"></i>
                                <span>mm/dd/yyyy</span>
                            </td>
                        </tr>
                        <tr>
                            <td>06 Dec 2023</td>
                            <td>
                                <div class="d-flex align-items-center">
                                    <img src="assets/media/users/u1.png" width="24" height="24" alt="">
                                    <span class="ps-2">Jenny Wilson</span>
                                </div>
                            </td>
                            <td>$1,000</td>
                            <td class="txt-muted">
                                <i class="fa fa-calendar pe-1"></i>
                                <span>mm/dd/yyyy</span>
                            </td>
                        </tr>
                        <tr>
                            <td>06 Dec 2023</td>
                            <td>
                                <div class="d-flex align-items-center">
                                    <img src="assets/media/users/u1.png" width="24" height="24" alt="">
                                    <span class="ps-2">Jenny Wilson</span>
                                </div>
                            </td>
                            <td>$1,000</td>
                            <td class="txt-muted">
                                <i class="fa fa-calendar pe-1"></i>
                                <span>mm/dd/yyyy</span>
                            </td>
                        </tr>
                        <tr>
                            <td>06 Dec 2023</td>
                            <td>
                                <div class="d-flex align-items-center">
                                    <img src="assets/media/users/u1.png" width="24" height="24" alt="">
                                    <span class="ps-2">Jenny Wilson</span>
                                </div>
                            </td>
                            <td>$1,000</td>
                            <td class="txt-muted">
                                <i class="fa fa-calendar pe-1"></i>
                                <span>mm/dd/yyyy</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <div class="bottom-stuff pb-4">
                    <div class="row align-items-center justify-content-end">
                        <div class="col-3">
                            <div class="form-group">
                                <label>Month Of</label>
                                <input type="date" class="form-control mt-2">
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="form-group">
                                <label>Agent</label>
                                <select class="form-control mt-2">
                                    <option>Select</option>
                                    <option value="">John Doe</option>
                                    <option value="">Chris</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="form-group">
                                <label>Amount</label>
                                <input type="number" class="form-control mt-2" placeholder="Enter">
                            </div>
                        </div>
                        <div class="col-3">
                            <div class="form-group w-100 pt-1">
                                <button class="btn-blue-sm w-100  mt-4">
                                    <span class="pe-2">Add</span>
                                    <i class="fa fa-check"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.c-outline-btn {
    border-radius: 8px;
}
</style>