// Load the Visualization API and the piechart package, aswell as the control widgets.
google.charts.load('current', {'packages':['corechart', 'controls']});

// Set a callback to run when the Google Visualization API is loaded.
//google.charts.setOnLoadCallback(drawCDashBoardJson);

$(document).ready(function() {
    $("#btn").on("click", function() {
        drawCDashBoardJson();
    });
});

function drawCDashBoardJson() {

    var jsonData = $.ajax({
        url: 'getData.php',
        dataType: 'json',
        async: false
    }).responseText;


    var datatext = document.getElementById("data").textContent;

    console.log(datatext);
    // Create our data table out of JSON data loaded from server.
    if(jsonData !== null) {
        var data = new google.visualization.DataTable(datatext);
    }else{
        alert("No datatable");
    }

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

    var chart4 = new google.visualization.PieChart(document.getElementById('chart_div5'));
    chart4.draw(data, {width: 500, height: 240});
    // Instantiate and draw our chart, passing in some options.
    var chart5 = new google.visualization.BarChart(document.getElementById('chart_div6'));
    chart5.draw(data, {width: 500, height: 240});
    var chart6 = new google.visualization.AreaChart(document.getElementById('chart_div7'));
    chart6.draw(data, {width: 500, height: 240});
    var chart7 = new google.visualization.PieChart(document.getElementById('chart_div8'));
    var options = {
        pieHole: 0.2,
    };
    chart7.draw(data,options);

}

