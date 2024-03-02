<script setup></script>

<template>
    <div class="table-card border-0 card p-4 mt-4">
        <div class="row align-items-center">
            <div class="col-md-2">
                <h5>5 Drivers</h5>
            </div>
            <div class="col-md-5">
                <input type="text" class="form-control py-1" placeholder="Search">
            </div>
            <div class="col-md-5 text-end">
                <button class="outline-white-btn">
                    <span>Export</span>
                    <i class="fa fa-upload ps-2"></i>
                </button>
                <button class="btn-blue-sm me-2 ms-4">
                    <span>New Drivers</span>
                    <i class="fa fa-car ps-2"></i>
                </button>
            </div>
        </div>
        <div class="table-responsive my-4">
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th>
                            <input type="checkbox">
                        </th>
                        <th>Date Added</th>
                        <th>Name</th>
                        <th>CDL</th>
                        <th>Class Type</th>
                        <th>State</th>
                        <th>Date Of Birth</th>
                        <th>Experience</th>
                        <th>Endorsement</th>
                        <th>Status</th>
                        <th>Driver Remote</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>
                            <input type="checkbox">
                        </td>
                        <td class="w-120px">Dec 06, 2023</td>
                        <td>Esther Howard</td>
                        <td class="w-130px">Tractor</td>
                        <td class="w-130px">CHT8048</td>
                        <td>CA</td>
                        <td>Peterbuild</td>
                        <td>5</td>
                        <td>No</td>
                        <td>
                            <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" role="switch"
                                        id="flexSwitchCheckDefault">
                                </div>
                            </td>
                        <td>-</td>
                        <td class="text-center">
                            <a href="" class="text-dark"><i class="fa fa-pen"></i></a>
                            <a href="" class="text-danger mx-3"><i class="fa fa-trash-alt"></i></a>
                        </td>
                    </tr>
                   
                    <tr>
                        <td>
                            <input type="checkbox">
                        </td>
                        <td class="w-120px">Dec 06, 2023</td>
                        <td>Esther Howard</td>
                        <td class="w-130px">Tractor</td>
                        <td class="w-130px">CHT8048</td>
                        <td>CA</td>
                        <td>Peterbuild</td>
                        <td>5</td>
                        <td>No</td>
                        <td>
                            <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" role="switch"
                                        id="flexSwitchCheckDefault">
                                </div>
                            </td>
                        <td>-</td>
                        <td class="text-center">
                            <a href="" class="text-dark"><i class="fa fa-pen"></i></a>
                            <a href="" class="text-danger mx-3"><i class="fa fa-trash-alt"></i></a>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <input type="checkbox">
                        </td>
                        <td class="w-120px">Dec 06, 2023</td>
                        <td>Esther Howard</td>
                        <td class="w-130px">Tractor</td>
                        <td class="w-130px">CHT8048</td>
                        <td>CA</td>
                        <td>Peterbuild</td>
                        <td>5</td>
                        <td>No</td>
                        <td>
                            <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" role="switch"
                                        id="flexSwitchCheckDefault">
                                </div>
                            </td>
                        <td>-</td>
                        <td class="text-center">
                            <a href="" class="text-dark"><i class="fa fa-pen"></i></a>
                            <a href="" class="text-danger mx-3"><i class="fa fa-trash-alt"></i></a>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <input type="checkbox">
                        </td>
                        <td class="w-120px">Dec 06, 2023</td>
                        <td>Esther Howard</td>
                        <td class="w-130px">Tractor</td>
                        <td class="w-130px">CHT8048</td>
                        <td>CA</td>
                        <td>Peterbuild</td>
                        <td>5</td>
                        <td>No</td>
                        <td>
                            <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" role="switch"
                                        id="flexSwitchCheckDefault">
                                </div>
                            </td>
                        <td>-</td>
                        <td class="text-center">
                            <a href="" class="text-dark"><i class="fa fa-pen"></i></a>
                            <a href="" class="text-danger mx-3"><i class="fa fa-trash-alt"></i></a>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <input type="checkbox">
                        </td>
                        <td class="w-120px">Dec 06, 2023</td>
                        <td>Esther Howard</td>
                        <td class="w-130px">Tractor</td>
                        <td class="w-130px">CHT8048</td>
                        <td>CA</td>
                        <td>Peterbuild</td>
                        <td>5</td>
                        <td>No</td>
                        <td>
                            <div class="form-check form-switch">
                                    <input class="form-check-input" type="checkbox" role="switch"
                                        id="flexSwitchCheckDefault">
                                </div>
                            </td>
                        <td>-</td>
                        <td class="text-center">
                            <a href="" class="text-dark"><i class="fa fa-pen"></i></a>
                            <a href="" class="text-danger mx-3"><i class="fa fa-trash-alt"></i></a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>

</template>

<style scoped>
input {
    background: linear-gradient(0deg, #ECF0F5, #ECF0F5),
        linear-gradient(0deg, #FAFAFB, #FAFAFB);
}
</style>