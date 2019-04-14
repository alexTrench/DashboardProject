
// Set a callback to run when the Google Visualization API is loaded.
//google.charts.setOnLoadCallback(drawCDashBoardJson);

$(document).ready(function() {
    $("#btn4").on("click", function() {
        drawCsvCharts();
    });
});


function drawCsvCharts()
{

    var datatext = document.getElementById("csvData").textContent;
    datatext = datatext.json.parse();
    console.log(datatext);

}


function ConstructJsonObject(){

    alert("clicked event");


    var myRows = {myRows: []};

    var $th = $('table th');
    $('table tbody tr').each(function (i, tr) {
        var obj = {}, $tds = $(tr).find('td');
        $th.each(function (index, th) {
            obj[$(th).text()] = $tds.eq(index).text();
        });
        myRows.myRows.push(obj);
    });
    //alert(JSON.stringify(myRows));


    let jsonObject = (JSON.stringify(myRows));
    let JsonParsed = JSON.parse(jsonObject);
    console.log(JsonParsed);
    drawHumidityCharts(JsonParsed);
    drawLightCharts(JsonParsed);
    drawHeatingCharts(JsonParsed);
    drawPowerUsedCharts(JsonParsed);
    drawLineChart(JsonParsed);
    drawHumidityOverTime(JsonParsed);
}


// Load the Visualization API and the piechart package, aswell as the control widgets.
google.charts.load('current', {'packages':['corechart', 'controls', ['line']]});

function drawHumidityCharts(JsonObject){

    let data = new google.visualization.DataTable();
    data.addColumn('string', 'heading');
    data.addColumn('number', 'Humidity');
    for(let r = 0; r < JsonObject.myRows.length; r++)
    {
        if(JsonObject.myRows[r]["Type Of data Stored"] === "humidity") {
            let numericalData = JsonObject.myRows[r]["Data Value"];
            let stringHeading = JsonObject.myRows[r]["Type Of data Stored"];
            numericalData = parseInt(numericalData);
            data.addRow([stringHeading, numericalData]);
        }
    }

    // Set chart options
    let options = {'title':'Humidity',
        'width':500,
        'height':600};

    // Instantiate and draw our chart, passing in some options.
    let chart = new google.visualization.BarChart(document.getElementById('chart_div1'));
    chart.draw(data, options);
}

function drawLightCharts(JsonObject){

    let data = new google.visualization.DataTable();
    data.addColumn('string', 'heading');
    data.addColumn('number', 'Light');
    for(let r = 0; r < JsonObject.myRows.length; r++)
    {
        if(JsonObject.myRows[r]["Type Of data Stored"] === "light") {
            let numericalData = JsonObject.myRows[r]["Data Value"];
            let stringHeading = JsonObject.myRows[r]["Type Of data Stored"];
            numericalData = parseInt(numericalData);
            data.addRow([stringHeading, numericalData]);
        }
    }

    // Set chart options
    let options = {'title':'Light',
        'width':400,
        'height':600};

    // Instantiate and draw our chart, passing in some options.
    let chart = new google.visualization.BarChart(document.getElementById('chart_div2'));
    chart.draw(data, options);

}

function drawHeatingCharts(JsonObject){

    let data = new google.visualization.DataTable();
    let SensorId;
    let NumberOfSensorsCycled = 0;
    let TotalTemp = 0;
    data.addColumn('string', 'heading');
    data.addColumn('number', 'Heating');
    for(let r = 0; r < JsonObject.myRows.length; r++)
    {

        if(SensorId === undefined) {
            SensorId = JsonObject.myRows[r]["Sensor ID"];
        }


        if(JsonObject.myRows[r]["Sensor ID"] === SensorId ) {

            if (JsonObject.myRows[r]["Type Of data Stored"] === "tempHeating") {
                let numericalData = JsonObject.myRows[r]["Data Value"];
                let stringHeading = JsonObject.myRows[r]["Type Of data Stored"];
                numericalData = parseInt(numericalData);
                TotalTemp = TotalTemp + parseInt(numericalData);
                data.addRow([stringHeading, numericalData]);
            }
        }else{
            NumberOfSensorsCycled = NumberOfSensorsCycled + 1;
            console.log(NumberOfSensorsCycled);
            console.log(TotalTemp);
            SensorId = JsonObject.myRows[r]["Sensor ID"];
        }


    }



    // Set chart options
    let options = {'title':'Temperature',
        'width':400,
        'height':1000};

    // Instantiate and draw our chart, passing in some options.
    let chart = new google.visualization.BarChart(document.getElementById('chart_div3'));
    chart.draw(data, options);

}

function drawPowerUsedCharts(JsonObject){

    let data = new google.visualization.DataTable();
    data.addColumn('string', 'heading');
    data.addColumn('number', 'power Used');
    for(let r = 0; r < JsonObject.myRows.length; r++)
    {
        if(JsonObject.myRows[r]["Type Of data Stored"] === "powerOverall") {
            let numericalData = JsonObject.myRows[r]["Data Value"];
            let stringHeading = JsonObject.myRows[r]["Type Of data Stored"];
            numericalData = parseInt(numericalData);
            data.addRow([stringHeading, numericalData]);
        }
    }

    // Set chart options
    let options = {'title':'Power Used',
        'width':400,
        'height':1000};

    // Instantiate and draw our chart, passing in some options.
    let chart = new google.visualization.BarChart(document.getElementById('chart_div4'));
    chart.draw(data, options);

}

function createPropertyTable(JsonObject){




}


function drawLineChart(JsonObject){

    let data = new google.visualization.DataTable();
    data.addColumn('datetime', 'Date and time');
    data.addColumn('number', 'Temperature');

    //local variable needed, data and temperature for this chart
    let FulldataAndTime;
    let TemptOverTime;

    for(let r = 0; r < JsonObject.myRows.length; r++)
    {
        //get heating data
        if(JsonObject.myRows[r]["Type Of data Stored"] === "tempHeating") {
            //gets the date
            FulldataAndTime = JsonObject.myRows[r]["Date and Time"];
            //the data is stored as a rather strange string, with seconds included however never used
            //so this cuts that useless part out so it looks nicer on the chart
            FulldataAndTime = FulldataAndTime.substring(0, 19);

            //GOOGLE CHARTS HAS ITS OWN WAY OF HANDLING DATES
            //but for this to work they need to be numbers not the string form of numbers that csv returns
            //so this section will reformat these data to google charts likening
            let year = parseInt(FulldataAndTime.substring(0,4));
            console.log(year);
            //in google charts months are indexed from 0, so january is 0 instead of on in our data
            //so the number should be month - 1 to be indexed from 0
            let month = parseInt(FulldataAndTime.substring(5,7));
            month = month - 1;
            console.log(month);
            //thse are all fine to use without any alreration apart from parsing them
            let day = parseInt(FulldataAndTime.substring(8,10));
            let hours = parseInt(FulldataAndTime.substring(11,13));
            let minutes = parseInt(FulldataAndTime.substring(14,16));
            let seconds = parseInt(FulldataAndTime.substring(17,19));





            //get temperature
            TemptOverTime = JsonObject.myRows[r]["Data Value"];
            //change the string that the csv value get to the correct int value
            //so that the graph can organise itself dynamically
            TemptOverTime = parseInt(TemptOverTime);

            data.addRow([new Date(year,month,day,hours,minutes,seconds, 0),TemptOverTime]);
        }

    }

    // Set chart options
    let options = {
        chart: {
            title: 'Temperature over time in a houseHold',
            subtitle: 'in Celsius'
        },
        'width': 1300,
        'height': 1000,
        axes: {
            x: {
                0: {side: 'top'}
            }
        }
    };

    // Instantiate and draw our chart, passing in some options.
    let chart = new google.charts.Line(document.getElementById('chart_div6'));
    chart.draw(data, options);
}

function drawHumidityOverTime(JsonObject){

    let data = new google.visualization.DataTable();
    data.addColumn('datetime', 'Date and time');
    data.addColumn('number', 'Humidity');

    //local variable needed, data and temperature for this chart
    let FulldataAndTime;
    let humidityOverTime;

    //sensor id
    let SensorID;
    for(let r = 0; r < JsonObject.myRows.length; r++)
    {
        //get heating data
        if(JsonObject.myRows[r]["Type Of data Stored"] === "humidity") {

            //so not to overright the sensor id every time it loops
            if(SensorID === undefined) {
                //this is a test to see if we can only get one sensor date back at a time, so not to mess up date and time axis
                SensorID = JsonObject.myRows[r]["Sensor ID"];
            }

            //makes sure we are only getting the data from the right sensor
            if(JsonObject.myRows[r]["Sensor ID"] === SensorID) {


                //get temperature
                humidityOverTime = JsonObject.myRows[r]["Data Value"];
                //change the string that the csv value get to the correct int value
                //so that the graph can organise itself dynamically
                humidityOverTime = parseInt(humidityOverTime);


                //gets the date
                FulldataAndTime = JsonObject.myRows[r]["Date and Time"];
                //the data is stored as a rather strange string, with seconds included however never used
                //so this cuts that useless part out so it looks nicer on the chart
                FulldataAndTime = FulldataAndTime.substring(0, 19);

                //GOOGLE CHARTS HAS ITS OWN WAY OF HANDLING DATES
                //but for this to work they need to be numbers not the string form of numbers that csv returns
                //so this section will reformat these data to google charts likening
                let year = parseInt(FulldataAndTime.substring(0, 4));
                console.log(year);
                //in google charts months are indexed from 0, so january is 0 instead of on in our data
                //so the number should be month - 1 to be indexed from 0
                let month = parseInt(FulldataAndTime.substring(5, 7));
                month = month - 1;
                console.log(month);
                //thse are all fine to use without any alreration apart from parsing them
                let day = parseInt(FulldataAndTime.substring(8, 10));
                let hours = parseInt(FulldataAndTime.substring(11, 13));
                let minutes = parseInt(FulldataAndTime.substring(14, 16));
                let seconds = parseInt(FulldataAndTime.substring(17, 19));


                data.addRow([new Date(year, month, day, hours, minutes, seconds, 0), humidityOverTime]);
            }
        }

    }

    // Set chart options
    let options = {
        chart: {
            title: 'Humidity in a houseHold over time',
            subtitle: ''
        },
        width: 1300,
        height: 1000,
        axes: {
            x: {
                0: {side: 'top'}
            },
            y: {
                    maxValue: 100,
            }
        }
    };


    // Instantiate and draw our chart, passing in some options.
    let chart = new google.charts.Line(document.getElementById('chart_div7'));
    chart.draw(data, options);
}