google.charts.load('current', {'packages':['corechart', 'controls']});


// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawGagueTemp);
google.charts.setOnLoadCallback(drawAllFlatsTempLineChart);
google.charts.setOnLoadCallback(drawTempLineChart);
google.charts.setOnLoadCallback(drawGasElectricLineChart);
google.charts.load('current', {'packages':['gauge']});

function drawGagueTemp(){

    let data = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['Temp', 0],
        ['Humidity', 0],
    ]);

    var optionsTemp = {
        width: 400, height: 120,
        redFrom: 0, redTo: 10,
        yellowFrom:10, yellowTo: 20,
        minorTicks: 5
    };

    var chart = new google.visualization.Gauge(document.getElementById('chart_div10'));
    chart.draw(data, optionsTemp);

    setInterval(function() {
        data.setValue(0, 1, 40 + Math.round(10 * Math.random()));
        chart.draw(data, optionsTemp);
    }, 10000);
    setInterval(function() {
        data.setValue(1, 1, 40 + Math.round(40 * Math.random()));
        chart.draw(data, optionsTemp);
    }, 10000);
}


google.charts.load('current', {'packages':['line']});

function drawTempLineChart(){

        var data = new google.visualization.DataTable();
        data.addColumn('date', 'Day');
        data.addColumn('number', 'Temperature');
        data.addColumn('number', 'Humidity');
        data.addColumn('number', 'Iight');


        let currentdate = new Date();
        console.log(currentdate);

        for(let i = 0; i < 5; i++) {
            data.addRow([currentdate,(Math.random()* 10 + 5),(Math.random()* 10 + 5),(Math.random()* 10 + 5)]);
        }

        var options = {
            chart: {
                title: 'Key HouseHold Statistics',
            },
            width: 600,
            height: 400,
            axes: {
                x: {
                    0: {side: 'top'}
                }
            },
            animation: {
                startup: false,
                duration: 100,
                easing: 'out',
            },
            explorer: {
                actions: ['dragToZoom', 'rightClickToReset'],
                axis: 'horizontal',
                keepInBounds: true,
                maxZoomIn: 100.0},
        };

        var chart = new google.visualization.LineChart(document.getElementById('chart_div5'));

        chart.draw(data,options);

        setInterval(function() {
            let NewCurrentdate = new Date();
            data.addRow([NewCurrentdate ,(Math.random()* 40 + 15),(Math.random()* 40 + 10),(Math.random()* 60 + 30)]);

            chart.draw(data, options);
        }, 10000);
}

function drawGasElectricLineChart(){

    var data = new google.visualization.DataTable();
    data.addColumn('date', 'Time');
    data.addColumn('number', 'Gas Usage');
    data.addColumn('number', 'Electricity Usage ');

    let currentdate = new Date();
    console.log(currentdate);
    let chartDataValue;

        chartDataValue = (Math.random()* 10 + 5);
        data.addRow([currentdate,(Math.random()* 10 + 5),(Math.random()* 10 + 5)]);


    var options = {
        chart: {
            title: 'Electricity and Gas Usage',
            explorer: {axis: 'horizontal',
                keepInBounds: true,}
        },
        width: 600,
        height: 400,
        axes: {
            x: {
                0: {side: 'top'}
            }
        },
        animation: {
            startup: true,
            duration: 100,
            easing: 'out',
        },
        explorer: {
            actions: ['dragToZoom', 'rightClickToReset'],
            axis: 'horizontal',
            keepInBounds: true,
            maxZoomIn: 8.0},
    };

    var chart = new google.visualization.LineChart(document.getElementById('chart_div6'));

    chart.draw(data,options);

    setInterval(function() {
        let NewCurrentdate = new Date();
        chartDataValue = chartDataValue + (Math.random()* 12 - 6);
        data.addRow([NewCurrentdate ,(Math.random()* 10 + 5),(Math.random()* 40 + 10)]);

        chart.draw(data, options);
    }, 10000);
}

function drawAllFlatsTempLineChart(Markers){


    let flats = ["Flat 1", "Flat 3", "Flat 8", "Flat 11", "Flat 12","Flat 21","Flat 31","Flat 51","Flat 61"];
    let chartDataValue;
    let currentdate = new Date();
    if(data === undefined) {
        var data = new google.visualization.DataTable();
        data.addColumn('date', 'Time');


        console.log(currentdate);


        chartDataValue = (Math.random() * 30 + 10);

        for (let i = 0; i < flats.length; i++) {
            data.addColumn('number', flats[i]);
            //console.log(flats[i]);
        }


        //1 data and 9 random values for each of the properties
        data.addRow([currentdate, (Math.random() * 30 + 10), (Math.random() * 30 + 10), (Math.random() * 30 + 10),
            (Math.random() * 30 + 10), (Math.random() * 30 + 10), (Math.random() * 30 + 10), (Math.random() * 30 + 10),
            (Math.random() * 30 + 10), (Math.random() * 30 + 10),
        ]);

        var chart = new google.visualization.LineChart(document.getElementById('chart_div4'));
    }

    var options = {
        chart: {
            'title': 'Temp Over Time All Flats',
            vAxis: {title: 'Temperature Celsius'},
        },
        width: 600,
        height: 400,
        axes: {
            x: {
                0: {side: 'top'},

            }
        },
        animation: {
            startup: true,
            duration: 100,
            easing: 'out',
        },
        explorer: {
            actions: ['dragToZoom', 'rightClickToReset'],
            axis: 'horizontal',
            keepInBounds: true,
            maxZoomIn: 8.0},
    };



    chart.draw(data,options);

    setInterval(function() {

        let NewCurrentdate = new Date();
        chartDataValue = chartDataValue + (Math.random()* 12 - 6);

        data.addRow([NewCurrentdate, (Math.random() * 10 + 5), (Math.random() * 10 + 5),(Math.random() * 10 + 5),
            (Math.random() * 10 + 5),(Math.random() * 10 + 5),(Math.random() * 10 + 5),(Math.random() * 10 + 5),
            (Math.random() * 10 + 5),(Math.random() * 10 + 5),
        ]);

        chart.draw(data, options);
    }, 10000);
}

