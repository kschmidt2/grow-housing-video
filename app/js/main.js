Highcharts.setOptions({
    lang: {
      thousandsSep: ','
    }
});


document.addEventListener('DOMContentLoaded', function () {
    const myChart = Highcharts.chart('chart-container', {
        chart: {
            type: 'column',
            styledMode: true,
            spacingBottom: 25,
            spacingRight: 100
        }, 
        title: {
            text: null
        },
        data: {
            googleSpreadsheetKey: '1Ux7RkVVZCs0ALR61E-sgW8eFxJoa2jLWm1s4jy2hhsM',
            googleSpreadsheetWorksheet: 1,
            endColumn: 1
        },
        legend: {
            enabled: false
        },
        xAxis: {
            labels: {
                style: {
                    whiteSpace: 'nowrap'
                }
            }
        },
        yAxis: {
            title: false,
            labels: {
                useHTML: true,
                overflow: 'allow'
            },
            max: 18,
            tickAmount: 7
        },
        credits: {
            enabled: false
        },
        tooltip: {
            shadow: false,
            padding: 10
        },
        responsive: {
            rules: [{
              condition: {
                maxWidth: 500
              },
              chartOptions: {
                chart: {
                  spacingRight: 10
                },
                legend: {
                    align: 'left',
                    x: -18
                },
                tooltip: {
                    enabled: false
                }
              }
            }]
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const myChart = Highcharts.chart('chart-container-2', {
        chart: {
            type: 'column',
            styledMode: true,
            spacingBottom: 25,
            spacingRight: 100
        }, 
        title: {
            text: null
        },
        data: {
            googleSpreadsheetKey: '1Ux7RkVVZCs0ALR61E-sgW8eFxJoa2jLWm1s4jy2hhsM',
            googleSpreadsheetWorksheet: 2,
            endColumn: 1
        },
        legend: {
            enabled: false
        },
        xAxis: {
            labels: {
                style: {
                    whiteSpace: 'nowrap'
                }
            }
        },
        yAxis: {
            title: false,
            labels: {
                useHTML: true,
                overflow: 'allow'
            }
        },
        credits: {
            enabled: false
        },
        tooltip: {
            shadow: false,
            padding: 10
        },
        responsive: {
            rules: [{
              condition: {
                maxWidth: 500
              },
              chartOptions: {
                chart: {
                  spacingRight: 10
                },
                legend: {
                    align: 'left',
                    x: -18
                },
                tooltip: {
                    enabled: false
                }
              }
            }]
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const myChart = Highcharts.chart('chart-container-3', {
        chart: {
            type: 'line',
            styledMode: true,
            spacingBottom: 25,
            spacingRight: 100
        }, 
        title: {
            text: null
        },
        data: {
            googleSpreadsheetKey: '1Ux7RkVVZCs0ALR61E-sgW8eFxJoa2jLWm1s4jy2hhsM',
            googleSpreadsheetWorksheet: 3,
            startColumn: 6,
            endColumn: 8
        },
        plotOptions: {
            series: {
                lineWidth: 3,
                marker: {
                    enabled: false,
                    symbol: 'circle'
                }
            }
        },
        legend: {
            // symbolWidth: 0,
            padding: 0,
            floating: true,
            align: 'right',
            symbolRadius: 0,
            verticalAlign: 'top',
            x: -50,
            itemMarginTop: 15
        },
        xAxis: {
            labels: {
                style: {
                    whiteSpace: 'nowrap'
                }
            }
        },
        yAxis: {
            title: false,
            labels: {
                useHTML: true,
                overflow: 'allow'
            }
        },
        credits: {
            enabled: false
        },
        tooltip: {
            shadow: false,
            padding: 10
        },
        responsive: {
            rules: [{
              condition: {
                maxWidth: 500
              },
              chartOptions: {
                chart: {
                  spacingRight: 10
                },
                legend: {
                    align: 'left',
                    x: -18
                },
                tooltip: {
                    enabled: false
                }
              }
            }]
        }
    });
});