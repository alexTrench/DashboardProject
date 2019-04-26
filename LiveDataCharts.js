google.charts.load('current', {'packages':['corechart', 'controls']});


// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawGagueTemp);
google.charts.setOnLoadCallback(drawLiveTemp);
google.charts.setOnLoadCallback(drawLiveHumidity);
google.charts.setOnLoadCallback(drawLiveLight);
google.charts.setOnLoadCallback(drawTempLineChart);

function drawLiveTemp(){

    let data = new google.visualization.DataTable();

    let flats = ["Flat 11", "Flat 12","Flat 21","Flat 31","Flat 51","Flat 61"];

    data.addColumn('string', 'Flat Number');
    data.addColumn('number', '');

    data.addColumn({type:'string', role:'style'});
    for(let i = 0; i < flats.length; i++) {

        let randNumber = (Math.random() * 40) + 15;

        if (randNumber < 25) {
            data.addRow([flats[i], randNumber, 'red']);
        } else {
            data.addRow([flats[i], randNumber, 'green']);
        }
    }

        // Set chart options
    var options = {
        'title': 'Live Temperature',
        'width': 500,
        'height': 400,
        //start chart a 0, to give a more reliable chart look
        vAxis: {
            viewWindow: {
                min: 0,
            }
        },
        animation:{
            startup: false,
            duration: 1000,
            easing: 'out',
        },
    };
    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.ColumnChart(document.getElementById('chart_div6'));
    chart.draw(data, options);

    setInterval(function() {

        for (let i = 0; i < flats.length; i++) {

            data.setValue(i, 1, (Math.random() * 40) + 15);

        }

        chart.draw(data, options);
    }, 5000);

}

function drawLiveHumidity(){

    let data = new google.visualization.DataTable();

    let flats = ["Flat 11", "Flat 12","Flat 21","Flat 31","Flat 51","Flat 61"];

    data.addColumn('string', 'Flat Number');
    data.addColumn('number', '');
    data.addColumn({type:'string', role:'style'});
    for(let i = 0; i < flats.length; i++){

        let randNumber = (Math.random() * 20) + 10;

        if(randNumber < 20){
            data.addRow([flats[i], randNumber, 'red']);
        }else{
            data.addRow([flats[i], randNumber, 'green']);
        }


    }

    // Set chart options
    var options = {
        'title': 'Live Humidity',
        'width': 500,
        'height': 400,
        //start chart a 0, to give a more reliable chart look
        vAxis: {
            viewWindow: {
                min: 0,
            }
        },
        animation:{
            startup: false,
            duration: 1000,
            easing: 'out',
        },
    };
    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.ColumnChart(document.getElementById('chart_div7'));
    chart.draw(data, options);


    setInterval(function() {

        for(let i = 0; i < flats.length; i++){

            let randNumber = (Math.random() * 20) + 10;

            if(randNumber < 20){
                data.setValue(i, 1, randNumber, 'green');
            }else{
                data.setValue(i, 1, randNumber, 'blue');
            }


        }

        chart.draw(data, options);
    }, 5000);

}

function drawLiveLight(){


    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.ColumnChart(document.getElementById('chart_div8'));

    let data = new google.visualization.DataTable();

    let flats = ["Flat 11", "Flat 12","Flat 21","Flat 31","Flat 51","Flat 61"];

    data.addColumn('string', 'Flat Number');
    data.addColumn('number', '');
    data.addColumn({type:'string', role:'style'});
    for(let i = 0; i < flats.length; i++) {

        let randNumber = (Math.random() * 60) + 30;

        if (randNumber < 50) {
            data.addRow([flats[i], randNumber, 'red']);
        } else {
            data.addRow([flats[i], randNumber, 'green']);
        }
    }

    // Set chart options
    var options = {
        'title': 'Live Light Rating',
        'width': 500,
        'height': 400,
        allowHtml: true,

        animation:{
            startup: false,
            duration: 1000,
            easing: 'out',
        },
    };

    chart.draw(data, options);


    setInterval(function() {
        for (let i = 0; i < flats.length; i++) {
            let randNumber = (Math.random() * 60) + 30;

            if(randNumber < 20){
                data.setValue(i, 1, randNumber, 'green');
            }else{
                data.setValue(i, 1, randNumber, 'blue');
            }
            //console.log(data.getNumberOfRows());
        }

        chart.draw(data, options);
    }, 5000);


}


google.charts.load('current', {'packages':['gauge']});

function drawGagueTemp(){

    let data = google.visualization.arrayToDataTable([
        ['Label', 'Value'],
        ['Temp', 0],
        ['Humidity', 0],
        ['Light ', 0]
    ]);

    var optionsTemp = {
        width: 400, height: 120,
        redFrom: 0, redTo: 10,
        yellowFrom:10, yellowTo: 20,
        minorTicks: 5
    };

    var chart = new google.visualization.Gauge(document.getElementById('chart_div4'));
    chart.draw(data, optionsTemp);

    setInterval(function() {
        data.setValue(0, 1, 40 + Math.round(10 * Math.random()));
        chart.draw(data, optionsTemp);
    }, 5000);
    setInterval(function() {
        data.setValue(1, 1, 40 + Math.round(40 * Math.random()));
        chart.draw(data, optionsTemp);
    }, 5000);
    setInterval(function() {
        data.setValue(2, 1, 60 + Math.round(20 * Math.random()));
        chart.draw(data, optionsTemp);
    }, 5000);
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
        var seconds = -60;

        for(let i = 0; i < 6; i++) {
            data.addRow([currentdate,(Math.random()* 10 + 5),(Math.random()* 10 + 5),(Math.random()* 10 + 5)]);
            seconds += 10;
        }

        var options = {
            chart: {
                title: 'Key HouseHold Statistics',
            },
            width: 700,
            height: 400,
            axes: {
                x: {
                    0: {side: 'top'}
                }
            },
            animation: {
                startup: false,
                duration: 1000,
                easing: 'out',
            },
            explorer: {
                axis: 'horizontal',
                keepInBounds: false,
            }
        };

        var chart = new google.charts.Line(document.getElementById('chart_div5'));

        chart.draw(data,options);

        setInterval(function() {
            let NewCurrentdate = new Date();
            data.addRow([NewCurrentdate ,(Math.random()* 40 + 15),(Math.random()* 40 + 10),(Math.random()* 60 + 30)]);

            chart.draw(data, options);
        }, 5000);
}