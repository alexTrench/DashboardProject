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
            url: "getData.php",
            dataType: "json",
            async: false
        }).responseText;


    // Create our data table out of JSON data loaded from server.
    if(jsonData !== null) {
        var data = new google.visualization.DataTable(jsonData);
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

}

//function that reads the name of a file that has been imported on the webpage
function CsvtoJson()
{
    //finds out the full path name, usually giving //fackpath//something
    //which is not usefull
    var fullPath = document.getElementById('fileName').value;
    //if something was atcully imported
    if (fullPath) {
        //removes back slashes from the pathway to give back just the last filename, usually something like JsonFile2.Json
        var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
        var filename = fullPath.substring(startIndex);
        if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
            filename = filename.substring(1);
        }
        //pops up in browser for testing purposes
        alert(filename);
    }
}
