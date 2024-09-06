document.addEventListener('DOMContentLoaded', function () {
    // Existing Pie Chart for Legality
    const pieCtx = document.getElementById('myPieChart')?.getContext('2d');
    if (pieCtx) {
        const myPieChart = new Chart(pieCtx, {
            type: 'pie',
            data: {
                labels: ['Concerned', 'Unconcerned', 'Don\'t Know'],
                datasets: [{
                    data: [68, 21, 11],
                    backgroundColor: [
                        '#6a0dad',  
                        '#000080',  
                        '#add8e6'   
                    ],
                    hoverBackgroundColor: [
                        '#4b0082',  
                        '#000060',  
                        '#87ceeb'   
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false, 
                    }
                }
            }
        });
    } else {
        console.error('Canvas element for the pie chart not found');
    }

    // Existing Legal Pie Chart
    const legalPieCtx = document.getElementById('legalPieChart')?.getContext('2d');
    if (legalPieCtx) {
        const legalPieChart = new Chart(legalPieCtx, {
            type: 'pie',
            data: {
                labels: ['Agree', 'Disagree', 'Don\'t Know'],
                datasets: [{
                    data: [80, 7, 14],
                    backgroundColor: [
                        '#6a0dad',  
                        '#000080', 
                        '#add8e6'   
                    ],
                    hoverBackgroundColor: [
                        '#4b0082',  
                        '#000060',  
                        '#87ceeb'   
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false, 
                    }
                }
            }
        });
    } else {
        console.error('Canvas element for the pie chart not found');
    }

    // Existing Legal Bar Chart
    const legalBarCtx = document.getElementById('legalBarChart')?.getContext('2d');
    if (legalBarCtx) {
        const legalBarChart = new Chart(legalBarCtx, {
            type: 'bar',
            data: {
                labels: ['Agree', 'Disagree', 'Don\'t Know'],
                datasets: [{
                    data: [61, 14, 25],
                    backgroundColor: [
                        '#6a0dad',  
                        '#000080',  
                        '#add8e6'   
                    ],
                    hoverBackgroundColor: [
                        '#4b0082',  
                        '#000060',  
                        '#87ceeb'   
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false, 
                    }
                },
                scales: {
                    x: {
                        beginAtZero: true
                    },
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    } else {
        console.error('Canvas element for the bar chart not found');
    }

    // New Doughnut Chart for Ethics - Transparency & Accountability
    var transparencyDoughnutCtx = document.getElementById('transparencyDoughnutChart')?.getContext('2d');
    if (transparencyDoughnutCtx) {
        var transparencyDoughnutChart = new Chart(transparencyDoughnutCtx, {
            type: 'doughnut',
            data: {
                labels: ['Agree', 'Disagree', 'Didn\'t Answer'],
                datasets: [{
                    data: [95, 2, 3],
                    backgroundColor: ['#5c0000', '#bb4a3d', '#d08989'],
                    borderColor: ['#ffffff', '#ffffff', '#ffffff'],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                layout: {
                    padding: {
                        top: 10,
                        bottom: 10
                    }
                }
            }
        });
    } else {
        console.error('Canvas element for the doughnut chart not found');
    }

    // New Bar Chart for Ethics - Transparency & Accountability
    var transparencyBarCtx = document.getElementById('transparencyBarChart')?.getContext('2d');
    if (transparencyBarCtx) {
        var transparencyBarChart = new Chart(transparencyBarCtx, {
            type: 'bar',
            data: {
                labels: ['Agree', 'Disagree', 'Don\'t Know'],
                datasets: [{
                    data: [83, 5, 12],
                    backgroundColor: ['#5c0000', '#bb4a3d', '#d08989'],
                    borderColor: ['#ffffff', '#ffffff', '#ffffff'],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            precision: 0
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                },
                layout: {
                    padding: {
                        top: 10,
                        bottom: 10
                    }
                }
            }
        });
    } else {
        console.error('Canvas element for the bar chart not found');
    }

    // New Bar Chart for Ethics - Impact on Human Creativity & Employment
    var impactBarCtx = document.getElementById('impactBarChartCanvas')?.getContext('2d'); 
    if (impactBarCtx) {
        var impactBarChart = new Chart(impactBarCtx, {
            type: 'bar',
            data: {
                labels: ['Agree', 'Disagree', 'Don\'t Know'],
                datasets: [{
                    data: [71, 11, 18], 
                    backgroundColor: ['#5c0000', '#bb4a3d', '#d08989'],
                    borderColor: ['#ffffff', '#ffffff', '#ffffff'],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            precision: 0
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                },
                layout: {
                    padding: {
                        top: 10,
                        bottom: 10
                    }
                }
            }
        });

        // Programmatically set the width of the chart description to match the chart
        var chartDescription = document.querySelector('#impactBarChartContainer .chart-description');
        if (chartDescription) {
            var canvasWidth = window.getComputedStyle(impactBarCtx.canvas).width;
            chartDescription.style.width = canvasWidth;
        }

    } else {
        console.error('Canvas element for the bar chart not found');
    }


    // New Pie Chart for Ethics - Concern About AI Replacing Human Creativity
    var creativityPieCtx = document.getElementById('creativityPieChart')?.getContext('2d');
    if (creativityPieCtx) {
        var creativityPieChart = new Chart(creativityPieCtx, {
            type: 'pie',
            data: {
                labels: ['Concerned', 'Unconcerned', 'Don\'t Know'],
                datasets: [{
                    data: [69, 22, 9],
                    backgroundColor: ['#5c0000', '#bb4a3d', '#d08989'],
                    borderColor: ['#ffffff', '#ffffff', '#ffffff'],
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                layout: {
                    padding: {
                        top: 10,
                        bottom: 10
                    }
                }
            }
        });
    } else {
        console.error('Canvas element for the pie chart not found');
    }


    // USER STUDY CHARTS
    // Familiarity Chart
    var ctx = document.getElementById('familiarityChart')?.getContext('2d');
    if (ctx) {
        var familiarityChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: [
                    'Not familiar at all (25%)',
                    'A little familiar (30%)',
                    'Somewhat familiar (30%)',
                    'Quite familiar (10%)',
                    'Very familiar (5%)'
                ],
                datasets: [{
                    data: [25, 30, 30, 10, 5],
                    backgroundColor: [
                        '#b5ffb3', 
                        '#51f64e', 
                        '#20c61d', 
                        '#158513', 
                        '#083e07'  
                    ],
                    borderColor: '#ffffff',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }
        });
    } else {
        console.error('Canvas element for the familiarity chart not found');
    }


    // Unique Sentiments Bar Chart
    var uniqueSentimentsBarCtx = document.getElementById('uniqueSentimentsBarChart')?.getContext('2d');
    if (uniqueSentimentsBarCtx) {
        var uniqueSentimentsBarChart = new Chart(uniqueSentimentsBarCtx, {
            type: 'bar',
            data: {
                labels: ['Strongly Agree', 'Agree', 'Neutral', 'Disagree', 'Strongly Disagree'],
                datasets: [{
                    data: [20, 30, 25, 20, 5],
                    backgroundColor: ['#083e07', '#158513', '#20c61d', '#51f64e', '#b5ffb3'],
                    borderColor: '#ffffff',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        ticks: {
                            precision: 0
                        }
                    }
                },
                layout: {
                    padding: {
                        top: 10,
                        bottom: 10
                    }
                }
            }
        });
    } else {
        console.error('Canvas element for the unique sentiments bar chart not found');
    }


    // AI Contribution Chart
    var aiContributionCtx = document.getElementById('aiContributionChart')?.getContext('2d');
    if (aiContributionCtx) {
        var aiContributionChart = new Chart(aiContributionCtx, {
            type: 'polarArea',
            data: {
                labels: ['Strongly Agree', 'Agree', 'Neutral', 'Disagree'],
                datasets: [{
                    data: [45, 45, 5, 5],
                    backgroundColor: ['#083e07', '#158513', '#20c61d', '#51f64e'],
                    borderColor: '#ffffff',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                layout: {
                    padding: {
                        top: 10,
                        bottom: 10
                    }
                }
            }
        });
    }

    // AI Regulation Chart
    var aiRegulationCtx = document.getElementById('aiRegulationChart')?.getContext('2d');
    if (aiRegulationCtx) {
        var aiRegulationChart = new Chart(aiRegulationCtx, {
            type: 'polarArea',
            data: {
                labels: ['Strongly Agree', 'Agree', 'Neutral'],
                datasets: [{
                    data: [40, 45, 15],
                    backgroundColor: ['#083e07', '#158513', '#20c61d'],
                    borderColor: '#ffffff',
                    borderWidth: 1
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: {
                        display: false
                    }
                },
                layout: {
                    padding: {
                        top: 10,
                        bottom: 10
                    }
                }
            }
        });
    }

});
