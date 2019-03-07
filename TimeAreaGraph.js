// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawAreaChart);

function drawAreaChart()
{
    var data = google.visualization.arrayToDataTable([
    ['Year', 'Heat', 'Humidity', 'Safe Temp'],
    ['2013',  1000,      400, 1000],
    ['2014',  1170,      460, 1000],
    ['2015',  660,       1120, 1000],
    ['2016',  1030,      540, 1000]
        ]);

    var options = {
        title: 'HeaT Performance',
        hAxis: {title: 'Year',  titleTextStyle: {color: '#333'}},
        vAxis: {minValue: 0},
        width: 500
    };

    var chart = new google.visualization.AreaChart(document.getElementById('chart_div5'));
    chart.draw(data, options);

}