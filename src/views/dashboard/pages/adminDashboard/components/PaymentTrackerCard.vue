<script setup></script>

<template>
    <div class="card p-3">
        <div class="c-card-header d-flex align-items-center justify-content-between text-light px-3 py-2">
            <div class="d-flex align-items-center">
                <h5 class="py-0 my-0 pe-2">Monthly Payment Tracker</h5>
                <img :src="'assets/media/icons/barline.png'" alt="icon">
            </div>
        </div>
        <div class="c-card-body">
            <div class="table-responsive my-4">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>Insured</th>
                            <th>Installment Amount</th>
                            <th>Due Date</th>
                            <th>Certificate Portal</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Juana Perez</td>
                            <td>$3,049.94</td>
                            <td>2 Days</td>
                            <td class="text-center ps-5">
                                <div class="form-check form-switch text-center">
                                    <input class="form-check-input" type="checkbox" role="switch"
                                        id="flexSwitchCheckChecked" checked>
                                </div>

                            </td>
                        </tr>
                        <tr>
                            <td>Juana Perez</td>
                            <td>$3,049.94</td>
                            <td>2 Days</td>
                            <td class="text-center ps-5">
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" role="switch"
                                        id="flexSwitchCheckDefault">
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Juana Perez</td>
                            <td>$3,049.94</td>
                            <td>2 Days</td>
                            <td class="text-center ps-5">
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" role="switch"
                                        id="flexSwitchCheckDefault">
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Juana Perez</td>
                            <td>$3,049.94</td>
                            <td>
                                <span class="red-badge">Due Today</span>
                            </td>
                            <td class="text-center ps-5">
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" role="switch"
                                        id="flexSwitchCheckDefault">
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>Juana Perez</td>
                            <td>$3,049.94</td>
                            <td>
                                <span class="red-badge">Due Today</span>
                            </td>
                            <td class="text-center ps-5">
                                <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" role="switch"
                                        id="flexSwitchCheckDefault">
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>
