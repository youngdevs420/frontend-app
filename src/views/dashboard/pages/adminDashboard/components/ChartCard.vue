<script>
    document.addEventListener('DOMContentLoaded', function () {
        const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

        const data1 = [500000,400000,300000,200000,600000,400000,500000,400000,300000,300000,200000,300000,200000,];
        const data2 = [400000,300000,200000,100000,460000,300000,400000,300000,200000,200000,100000,200000,100000,]; 
        const data3 = [400000,300000,200000,100000,460000,300000,400000,300000,200000,200000,100000,200000,100000,]; 
        const data4 = [400000,300000,200000,100000,460000,300000,400000,300000,200000,200000,100000,200000,100000,]; 


        // Calculate the minimum value across both datasets
        const minValue = Math.min(data1, data2, data3, data4);
        // Calculate the adjusted minimum value for the y-axis
        const yAxisMin = Math.floor(minValue / 100000) * 100000;

        var ctx = document.getElementById('barChart').getContext('2d');
        var myChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: months,
                datasets: [{
                    label: 'Premium',
                    data: data1,
                    backgroundColor: '#006EC2',
                    borderColor: '#006EC2',
                    borderWidth: 1,
                    borderRadius: 10 // Border radius for bars
                },
                {
                    label: 'Commission',
                    data: data2,
                    backgroundColor: '#74BFF8',
                    borderColor: '#74BFF8',
                    borderWidth: 1,
                    borderRadius: 10 // Border radius for bars
                },
                {
                    label: 'Brokers Fee Total',
                    data: data3,
                    backgroundColor: '#FFCE74',
                    borderColor: '#FFCE74',
                    borderWidth: 1,
                    borderRadius: 10 // Border radius for bars
                },
                {
                    label: 'Brokers Fee Retained',
                    data: data4,
                    backgroundColor: '#00A5FF',
                    borderColor: '#00A5FF',
                    borderWidth: 1,
                    borderRadius: 10 // Border radius for bars
                }
            ]
            },
            options: {
                scales: {
                    y: {
                        ticks: {
                            stepSize: 100000,
                            callback: function(value, index, values) {
                                return (value / 1000) + 'k';
                            }
                        },
                        min: yAxisMin, // Use adjusted minimum value
                        max: 600000
                    }
                },
                plugins: {
                    legend: {
                        position: 'bottom'
                    }
                },
                layout: {
                    padding: {
                        bottom: 10 // Adjust bottom padding to accommodate legend
                    }
                },
                barPercentage: 0.8, // Adjust the width of the bars
                categoryPercentage: 0.8 // Adjust the spacing between bars
            }
        });
    });
</script>

<template>
    <div class="chart-card-header d-flex align-items-center justify-content-between">
        <h5>Sales Overview</h5>
        <div class="two-tabs border-gray1 p-2">
            <button class="btn-blue-sm py-1 px-2">Monthly</button>
            <button class="btn-blue-sm bg-white ms-1 border-0 Yearly text-muted">Yearly</button>
        </div>
    </div>
    <div class="chart-body">
        <canvas id="barChart" class="w-100"></canvas>
    </div>
</template>

<style scoped>
</style>