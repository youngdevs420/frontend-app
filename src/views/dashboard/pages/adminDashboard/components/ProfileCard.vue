<script setup></script>

<template>
    <div class="profile-card card border-0 px-3 py-4 mt-5 ">
        <div class="c-header text-center">
            <div class="info">
                <h5 class="text-muted">Leaderboard</h5>
                <h4>Most Premium Sold</h4>
            </div>
            <div class="p-img my-3">
                <img :src="'/assets/media/users/u2.png'" alt="">
            </div>
            <div class="p-name mt-2">
                <h5 class="txt-black">Lucy Celis-Alejandre</h5>
                <strong class="txt-blue">$59,070</strong>
            </div>
            <div class="table-responsive mt-4">
                <table class="table">
                    <tbody>
                        <tr class="border-top">
                            <td>2nd</td>
                            <td>
                                <img :src="'/assets/media/users/u3.png'" alt="">
                            </td>
                            <td>Maggie Nava</td>
                            <td class="txt-blue">
                                <a href="" class="text-decoration-none">$53,403</a>
                            </td>
                        </tr>
                        <tr>
                            <td>3RD</td>
                            <td>
                                <img :src="'/assets/media/users/u3.png'" alt="">
                            </td>
                            <td>Maggie Nava</td>
                            <td class="txt-blue">
                                <a href="" class="text-decoration-none">$53,403</a>
                            </td>
                        </tr>
                        <tr>
                            <td>4TH</td>
                            <td>
                                <img :src="'/assets/media/users/u3.png'" alt="">
                            </td>
                            <td>Maggie Nava</td>
                            <td class="txt-blue">
                                <a href="" class="text-decoration-none">$53,403</a>
                            </td>
                        </tr>
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>