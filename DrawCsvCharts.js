
// Set a callback to run when the Google Visualization API is loaded.
//google.charts.setOnLoadCallback(drawCDashBoardJson);

function ConstructJsonObject(){

    var myRows = {myRows: []};

    var $th = $('table th');
    $('table tbody tr').each(function (i, tr) {
        var obj = {}, $tds = $(tr).find('td');
        $th.each(function (index, th) {
            obj[$(th).text()] = $tds.eq(index).text();
        });
        myRows.myRows.push(obj);
    });

    let jsonObject = (JSON.stringify(myRows));
    let JsonParsed = JSON.parse(jsonObject);
    console.log(JsonParsed);

    //this will get all of the data for each flat and put the data in there own flat array
    //to be accessed later by the draw chart functions that will loop through them and draw a chart
    //based on the data
    //organiseProperties(JsonParsed);
    drawHumidityCharts(JsonParsed);
    drawLightCharts(JsonParsed);
    drawHeatingCharts(JsonParsed);
    drawPowerUsedCharts(JsonParsed);
    drawLineChart(JsonParsed);
    drawHumidityOverTime(JsonParsed);
    drawAverageTempPerFlat(JsonParsed);
}


// Load the Visualization API and the piechart package, aswell as the control widgets.
google.charts.load('current', {'packages':['corechart', 'controls', ['line']]});

function drawHumidityCharts(JsonObject){

    let data = new google.visualization.DataTable();
    let SensorId;
    let numericalData = 0;
    let PropertyID = "";
    data.addColumn('string', 'heading');
    data.addColumn('number', 'Humidity');
    for(let r = 0; r < JsonObject.myRows.length; r++)
    {
        if(SensorId === undefined) {
            SensorId = JsonObject.myRows[r]["Sensor ID"];
            PropertyID = organiseProperties(SensorId);
        }
        if (JsonObject.myRows[r]["Type Of data Stored"] === "humidity") {
                numericalData = JsonObject.myRows[r]["Data Value"];
                numericalData = parseInt(numericalData);
                PropertyID = organiseProperties(SensorId);
                data.addRow([PropertyID, numericalData]);

        }else{
            SensorId = JsonObject.myRows[r]["Sensor ID"]
            }
    }

    // Set chart options
    let options = {'title':'Humidity',
        'width':800,
        'height':2000};

    // Instantiate and draw our chart, passing in some options.
    let chart = new google.visualization.BarChart(document.getElementById('chart_div1'));
    chart.draw(data, options);
}



            /*<-- LIGHT INTAKE CHART -->*/
function drawLightCharts(JsonObject){

    let data = new google.visualization.DataTable();
    let SensorId;
    let PropertyID = "";
    let numericalData;
    data.addColumn('string', 'heading');
    data.addColumn('number', 'Light');
    for(let r = 0; r < JsonObject.myRows.length; r++)
    {

        if(SensorId === undefined) {
            SensorId = JsonObject.myRows[r]["Sensor ID"];
            PropertyID = organiseProperties(SensorId);
        }


        if(JsonObject.myRows[r]["Type Of data Stored"] === "light") {
            numericalData = JsonObject.myRows[r]["Data Value"];
            PropertyID = organiseProperties(SensorId);
            numericalData = parseInt(numericalData);
            data.addRow([PropertyID, numericalData]);
        }else{
            SensorId = JsonObject.myRows[r]["Sensor ID"];
        }
    }

    // Set chart options
    let options = {'title':'Light',
        'width':800,
        'height':2000};

    // Instantiate and draw our chart, passing in some options.
    let chart = new google.visualization.BarChart(document.getElementById('chart_div2'));
    if(data !== null) {
        chart.draw(data, options);
    }

}

                /*<-- TEMPERATURE CHART -->*/
function drawHeatingCharts(JsonObject){

    let data = new google.visualization.DataTable();
    let SensorId;
    let PropertyID = "";

    data.addColumn('string', 'heading');
    data.addColumn('number', 'Heating');
    for(let r = 0; r < JsonObject.myRows.length; r++)
    {

        if(SensorId === undefined) {
            SensorId = JsonObject.myRows[r]["Sensor ID"];
            PropertyID = organiseProperties(SensorId);
        }


        if(JsonObject.myRows[r]["Sensor ID"] === SensorId ) {
            if (JsonObject.myRows[r]["Type Of data Stored"] === "tempHeating") {
                let numericalData = JsonObject.myRows[r]["Data Value"];

                numericalData = parseInt(numericalData);
                PropertyID = organiseProperties(SensorId);
                //console.log(PropertyID);
                data.addRow([PropertyID, numericalData]);
            }
        }else{
            //NumberOfSensorsCycled = NumberOfSensorsCycled + 1;
            //console.log(NumberOfSensorsCycled);
            //console.log(TotalTemp);
            SensorId = JsonObject.myRows[r]["Sensor ID"];
        }


    }

    // Set chart options
    let options = {'title':'Temperature',
        'width':800,
        'height':2000};

    // Instantiate and draw our chart, passing in some options.
    let chart = new google.visualization.BarChart(document.getElementById('chart_div3'));
    chart.draw(data, options);

}

function drawPowerUsedCharts(JsonObject){

    let data = new google.visualization.DataTable();
    let SensorId;
    let PropertyID = "";
    data.addColumn('string', 'heading');
    data.addColumn('number', 'power Used');
    for(let r = 0; r < JsonObject.myRows.length; r++) {

        if(SensorId === undefined) {
            SensorId = JsonObject.myRows[r]["Sensor ID"];
            PropertyID = organiseProperties(SensorId);
        }

        if(JsonObject.myRows[r]["Type Of data Stored"] === "powerOverall") {
            let numericalData = JsonObject.myRows[r]["Data Value"];
            let stringHeading = JsonObject.myRows[r]["Sensor ID"];
            let date = JsonObject.myRows[r]["Date and Time"];
            numericalData = parseInt(numericalData);
            PropertyID = organiseProperties(SensorId);
            console.log(SensorId);
            data.addRow([PropertyID, numericalData]);
        }else{
            SensorId = JsonObject.myRows[r]["Sensor ID"];
        }
    }

    // Set chart options
    let options = {'title':'Power Used',
        'width':800,
        'height':2000};

    // Instantiate and draw our chart, passing in some options.
    let chart = new google.visualization.BarChart(document.getElementById('chart_div4'));
    chart.draw(data, options);

}

function drawLineChart(JsonObject){

    let data = new google.visualization.DataTable();
    data.addColumn('datetime', 'Date and time');
    data.addColumn('number', 'Temperature');

    //local variable needed, data and temperature for this chart
    let FulldataAndTime;
    let TemptOverTime;
    let SensorId;
    for(let r = 0; r < JsonObject.myRows.length; r++)
    {

        //get heating data
        if(JsonObject.myRows[r]["Type Of data Stored"] === "tempHeating") {


            //so not to overright the sensor id every time it loops
            if(SensorId === undefined) {
                //this is a test to see if we can only get one sensor date back at a time, so not to mess up date and time axis
                SensorId = JsonObject.myRows[r]["Sensor ID"];
            }

                //makes sure we are only getting the data from the right sensor
                if(JsonObject.myRows[r]["Sensor ID"] === SensorId) {
                    //gets the date
                    FulldataAndTime = JsonObject.myRows[r]["Date and Time"];
                    //the data is stored as a rather strange string, with seconds included however never used
                    //so this cuts that useless part out so it looks nicer on the chart
                    FulldataAndTime = FulldataAndTime.substring(0, 19);

                    //GOOGLE CHARTS HAS ITS OWN WAY OF HANDLING DATES
                    //but for this to work they need to be numbers not the string form of numbers that csv returns
                    //so this section will reformat these data to google charts likening
                    let year = parseInt(FulldataAndTime.substring(0, 4));
                    //console.log(year);
                    //in google charts months are indexed from 0, so january is 0 instead of on in our data
                    //so the number should be month - 1 to be indexed from 0
                    let month = parseInt(FulldataAndTime.substring(5, 7));
                    month = month - 1;
                    //console.log(month);
                    //thse are all fine to use without any alreration apart from parsing them
                    let day = parseInt(FulldataAndTime.substring(8, 10));
                    let hours = parseInt(FulldataAndTime.substring(11, 13));
                    let minutes = parseInt(FulldataAndTime.substring(14, 16));
                    let seconds = parseInt(FulldataAndTime.substring(17, 19));


                    //get temperature
                    TemptOverTime = JsonObject.myRows[r]["Data Value"];
                    //change the string that the csv value get to the correct int value
                    //so that the graph can organise itself dynamically
                    TemptOverTime = parseInt(TemptOverTime);

                    data.addRow([new Date(year, month, day, hours, minutes, seconds, 0), TemptOverTime]);
            }
        }else{
            //SensorId = JsonObject.myRows[r]["Sensor ID"];

        }

    }

    // Set chart options
    let options = {
        chart: {
            title: 'Temperature over time in a houseHold',
            subtitle: 'in Celsius',
            vAxis: {minValue: 0}
        },
        'width': 700,
        'height': 600,


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
    let SensorId;
    //sensor id
    let SensorID;
    for(let r = 0; r < JsonObject.myRows.length; r++) {

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
                //console.log(year);
                //in google charts months are indexed from 0, so january is 0 instead of on in our data
                //so the number should be month - 1 to be indexed from 0
                let month = parseInt(FulldataAndTime.substring(5, 7));
                month = month - 1;
                //console.log(month);
                //these are all fine to use without any alreration apart from parsing them
                let day = parseInt(FulldataAndTime.substring(8, 10));
                let hours = parseInt(FulldataAndTime.substring(11, 13));
                let minutes = parseInt(FulldataAndTime.substring(14, 16));
                let seconds = parseInt(FulldataAndTime.substring(17, 19));

                data.addRow([new Date(year, month, day, hours, minutes, seconds, 0), humidityOverTime]);
            }else{

            SensorId = JsonObject.myRows[r]["Sensor ID"];

            }

            }

    }

    // Set chart options
    let options = {
        chart: {
            title: 'Humidity in a houseHold over time',
            subtitle: ''
        },
        width: 700,
        height: 600,
        axes: {
            x: {
                0: {side: 'top'},
                vAxis: {minValue: 0},
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

//A FUNCTION full of if statements, this is to connect all of the different sensors to the right flat number
//helps organise the charts better
function organiseProperties(sensorStringBase){

    //there is not real functional reason to make it all uppercase other than it help me with typing the strings out
    //error free
    let sensorString = sensorStringBase.toUpperCase();
    //ever sensor id string has a enter space at the front of it from where the line in the csv file ends and wraps around
    //.trim removes this whitespace
    sensorString = sensorString.trim();
    //each flat has multiple sensors, so to get the overall stats for the properites these sensors must all be
    //processed at the same time
    //some have a extra sensor depending on if the flat has two bedrooms or one
    if(sensorString === "77DC2F7B" || sensorString === "77B977C4" || sensorString === "77C3BA1E"
        || sensorString === "77F3A828" || sensorString === "77D90066" || sensorString === "BOILERNODE-0-1"
        ||sensorString === "GASENODE-0-1" || sensorString === "POWERNODE-0-1"){
        //console.log("Flat 11");
        return "Flat 11";
    }
    if(sensorString === "BOILERNODE-0-2" || sensorString === "POWERNODE-0-2"  || sensorString === "GASENODE-0-2"){
        //console.log("Flat 3");
        return "Flat 3";
    }
    if(sensorString === "773BB32F" || sensorString === "77ED5B7A" || sensorString === "77C75411"
        || sensorString === "770FAC31" || sensorString === "77DEA34E" || sensorString === "77871D68" || sensorString === "BOILERNODE-1-1"
        || sensorString === "GASNODE-1-1" || sensorString === "POWERNODE-1-1"){
        //console.log("Flat 21");
        return "Flat 21";
    }
    if(sensorString === "77265819" || sensorString === "77DFC691" || sensorString === "77C230B9"
        || sensorString === "7776F7A5" || sensorString === "77F00716" || sensorString === "BOILERNODE-1-2"|| sensorString === "GASNODE-1-2"
        || sensorString === "POWERNODE-1-2"){
        //console.log("Flat 14");
        return "Flat 14";
    }
    if(sensorString === "77D5C8CE" || sensorString === "77009DLE" || sensorString === "770B4EDD"
        || sensorString === "77984608" || sensorString === "773A3190" || sensorString === "77311DF7" || sensorString === "BOILERNODE-1-3"
        || sensorString === "GASENODE-1-3" || sensorString === "POWERNODE-1-3"){
        //console.log("Flat 20");
        return "Flat 20";
    }
    if(sensorString === "78596E4F" || sensorString === "78B70D36" || sensorString === "78A56E07"
        || sensorString === "78F89003" || sensorString === "780780BE"|| sensorString === "GASNODE-3-1" || sensorString === "POWERNODE-3-1"){
        //console.log("Flat 35");
        return "Flat 35";
    }
    if(sensorString === "78AEBB26" || sensorString === "783D3E26" || sensorString === "78D3A4D7"
        || sensorString === "7877574A" || sensorString === "7840555F" || sensorString === "GASNODE-3-2" || sensorString === "POWERNODE-3-2"){
        //console.log("Flat 37");
        return "Flat 37";
    }else{
        //shouldnt ever get this far down however if they get a new sensor with a new id the program wouldnt know about it
        //it i have added it here
        return "Unknown Flat";
    }

}

function drawAverageTempPerFlat(JsonObject){

    //first need to get the sensor id
    //convert that to a flat string
    //check flat string is the same && the same type of data needed
    //if it is not find the sensor id again and flat number for the new flat
    //also draw the other flats details


    let data = new google.visualization.DataTable();
    let SensorId;
    //let NumberOfSensorsCycled = 0;
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
                //let stringHeading = JsonObject.myRows[r]["Type Of data Stored"];
                numericalData = parseInt(numericalData);
                TotalTemp = TotalTemp + parseInt(numericalData);
                data.addRow([SensorId, numericalData]);
            }
        }else{
            //NumberOfSensorsCycled = NumberOfSensorsCycled + 1;
            //console.log(NumberOfSensorsCycled);
            //console.log(TotalTemp);
            SensorId = JsonObject.myRows[r]["Sensor ID"];
        }


    }

    // Set chart options
    let options = {'title':'Average Temperature Per Flat',
        'width':800,
        'height':2000};

    // Instantiate and draw our chart, passing in some options.
    let chart = new google.visualization.BarChart(document.getElementById('chart_div8'));
    chart.draw(data, options);

}
