// Load the Visualization API and the piechart package, aswell as the control widgets.
google.charts.load('current', {'packages':['corechart', 'controls']});

// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawControlsDash);

function drawControlsDash() {
    // Create our data table.
    var data = google.visualization.arrayToDataTable([
        ['Name', 'Titles'],
        ['united' , 5],
        ['city', 7],
        ['madrid', 3],
        ['valencia', 2],
        ['bayern', 6],
        ['dortmund', 1],
        ['chelsea', 0]
    ]);

    // Create a dashboard.
    var dashboard = new google.visualization.Dashboard(
        document.getElementById('dashboard_div'));

    // Create a range slider, passing some options
    var donutRangeSlider = new google.visualization.ControlWrapper({
        'controlType': 'NumberRangeFilter',
        'containerId': 'filter_div',
        'options': {
            'filterColumnLabel': 'Titles'
        }
    });

    var donutRangeSlider2 = new google.visualization.ControlWrapper({
        'controlType': 'NumberRangeFilter',
        'containerId': 'filter_div1',
        'options': {
            'filterColumnLabel': 'Titles'
        }
    });

    // Create a pie chart, passing some options
    var pieChart = new google.visualization.ChartWrapper({
        'chartType': 'PieChart',
        'containerId': 'control_div',
        'options': {
            'width': 300,
            'height': 300,
            'pieSliceText': 'value',
            'legend': 'right'
        }
    });

    // Create a pie chart, passing some options
    var barChart = new google.visualization.ChartWrapper({
        'chartType': 'BarChart',
        'containerId': 'control_div1',
        'options': {
            'width': 300,
            'height': 300,
            'pieSliceText': 'value',
            'legend': 'right'
        }
    });

    // Establish dependencies, declaring that 'filter' drives 'pieChart',
    // so that the pie chart will only display entries that are let through
    // given the chosen slider range.
    dashboard.bind(donutRangeSlider, pieChart);
    dashboard.bind(donutRangeSlider2, barChart);
    // Draw the dashboard.
    dashboard.draw(data);
}