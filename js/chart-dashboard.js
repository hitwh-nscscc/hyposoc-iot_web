var violet = '#DF99CA',
    red = '#F0404C',
    green = '#7CF29C',
    blue = '#4680ff';
let cpuRateLineData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    cpuSysPieData = [0, 100],
    cpuUsrPieData = [0, 100];

// ------------------------------------------------------- //
// cpuRateLine Chart
// ------------------------------------------------------ //

var cpuRateLine = new Chart($('#cpuRateLine'), {
    type: 'line',
    options: {
        scales: {
            xAxes: [{
                display: false
            }],
            yAxes: [{
                display: true,
                ticks: {
                    min: 0,
                },
            }]
        },
        legend: {
            display: false
        }
    },
    data: {
        labels: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"],
        datasets: [{
            label: "CPU rate",
            fill: true,
            lineTension: 0.4,
            backgroundColor: "transparent",
            borderColor: green,
            pointBorderColor: green,
            pointHoverBackgroundColor: green,
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            borderWidth: 3,
            pointBackgroundColor: "#fff",
            pointBorderWidth: 5,
            pointHoverRadius: 5,
            pointHoverBorderColor: "#fff",
            pointHoverBorderWidth: 1,
            pointRadius: 0,
            pointHitRadius: 1,
            data: cpuRateLineData,
            spanGaps: false
        }]
    }
});


// ------------------------------------------------------- //
// cpuUsrPie Chart
// ------------------------------------------------------ //
var cpuUsrPie = new Chart($('#cpuUsrPie'), {
    type: 'doughnut',
    options: {
        cutoutPercentage: 90,
        legend: {
            display: false
        }
    },
    data: {
        labels: [
            "Used",
            "Free"
        ],
        datasets: [{
            data: cpuUsrPieData,
            borderWidth: [0, 0],
            backgroundColor: [
                green,
                "#eee",
            ],
            hoverBackgroundColor: [
                green,
                "#eee",
            ]
        }]
    }
});


// ------------------------------------------------------- //
// cpuSysPie Chart
// ------------------------------------------------------ //
var cpuSysPie = new Chart($('#cpuSysPie'), {
    type: 'doughnut',
    options: {
        cutoutPercentage: 90,
        legend: {
            display: false
        }
    },
    data: {
        labels: [
            "Used",
            "Free"
        ],
        datasets: [{
            data: cpuSysPieData,
            borderWidth: [0, 0],
            backgroundColor: [
                blue,
                "#eee"
            ],
            hoverBackgroundColor: [
                blue,
                "#eee"
            ]
        }]
    }
});