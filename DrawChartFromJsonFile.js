// Load the Visualization API and the piechart package, aswell as the control widgets.
google.charts.load('current', {'packages':['corechart', 'controls']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawCDashBoardJson);

function drawCDashBoardJson() {
    var jsonData = $.ajax({
        url: "getData.php",
        dataType: "json",
        async: false
    }).responseText;

    // Create our data table out of JSON data loaded from server.
    var data = new google.visualization.DataTable(jsonData);

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.PieChart(document.getElementById('chart_div1'));
    chart.draw(data, {width: 500, height: 240});
    // Instantiate and draw our chart, passing in some options.
    var chart1 = new google.visualization.BarChart(document.getElementById('chart_div2'));
    chart1.draw(data, {width: 500, height: 240});
    var chart2 = new google.visualization.AreaChart(document.getElementById('chart_div3'));
    chart2.draw(data, {width: 500, height: 240});
    var chart3 = new google.visualization.PieChart(document.getElementById('chart_div4'));
    var options = {
        pieHole: 0.2,
    };
    chart3.draw(data,options);
}
