<script setup></script>

<template>
    <div class="card p-3">
        <div class="c-card-header d-flex align-items-center justify-content-between text-light px-3 py-2">
            <div class="d-flex align-items-center">
                <h5 class="py-0 my-0 pe-2">New Leads Assigned</h5>
                <img :src="'assets/media/icons/circleuser.png'" alt="icon">
            </div>
            <div class="dropdown">
                <button class="btn btn-outline-light dropdown-toggle py-1" type="button" data-bs-toggle="dropdown"
                    aria-expanded="false">
                    <span class="pe-2">January</span>
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Febuary</a></li>
                    <li><a class="dropdown-item" href="#">March</a></li>
                    <li><a class="dropdown-item" href="#">April</a></li>
                </ul>
            </div>
        </div>
        <div class="c-card-body">
            <div class="table-responsive my-4">
                <table class="table table-bordered">
                    <thead>
                        <tr>
                            <th>Expiration Date</th>
                            <th>Insured</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>06 Dec 2023</td>
                            <td>Robert Fox</td>
                            <td>
                                <span class="badge-c-secondary d-inline-block w-100 text-center">Contacted Insured</span>
                            </td>
                        </tr>
                        <tr>
                            <td>06 Dec 2023</td>
                            <td>Esther Howard</td>
                            <td>
                                <span class="badge-c-warn d-inline-block w-100 text-center">Quote Submitted</span>
                            </td>
                        </tr>
                        <tr>
                            <td>06 Dec 2023</td>
                            <td>Esther Howard</td>
                            <td>
                                <span class="badge-c-danger d-inline-block w-100 text-center">Quote in Underwriting</span>
                            </td>
                        </tr>
                        <tr>
                            <td>06 Dec 2023</td>
                            <td>Esther Howard</td>
                            <td>
                                <span class="badge-c-blue d-inline-block w-100 text-center">Received Quote</span>
                            </td>
                        </tr>
                        <tr>
                            <td>06 Dec 2023</td>
                            <td>Robert Fox</td>
                            <td>
                                <span class="badge-c-purl d-inline-block w-100 text-center">Waiting On Insured</span>
                            </td>
                        </tr>
                        <tr>
                            <td>06 Dec 2023</td>
                            <td>Robert Fox</td>
                            <td>
                                <span class="badge-c-black d-inline-block w-100 text-center">Sold</span>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>


