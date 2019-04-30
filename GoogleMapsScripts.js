
//draw the google map with markers
function initMap() {
    //array of potential house locations
    var arrayOfLocations = [];
    var markers = [];
    let flats = ["Flat 1", "Flat 3", "Flat 8", "Flat 11", "Flat 12","Flat 21","Flat 31","Flat 51","Flat 61"];
    var map = new google.maps.Map(document.getElementById('map'), {zoom: 4, center: {lat: 50.3781, lng:  15.360}});

    for(let i = 0; i < 9; i++){

        arrayOfLocations[i] = new google.maps.LatLng( (Math.random()*(12)+42), (Math.random()*(20.0960) + 12) );

        //console.log(arrayOfMarkers);
        var marker = new google.maps.Marker({position: arrayOfLocations[i], map: map, label: flats[i].substring(4, i.length)});
        markers.push(marker);
        console.log(marker.getPosition());
    }
    //this runs the first time to avoid some errors i was getting during testing with the charts not loading
    //when the page loads
    google.maps.event.addListenerOnce(map, 'idle', function(){
        // do something only the first time the map is loaded
        showVisibleMarkers(map, markers);
    });
    // Fired when the map becomes idle after panning or zooming.
    google.maps.event.addListener(map, 'idle', function() {

        showVisibleMarkers(map, markers);
    });
    //GetInView(map);
}

function showVisibleMarkers(map, markers){

    let flats = ["Flat 1", "Flat 3", "Flat 8", "Flat 11", "Flat 12","Flat 21","Flat 31","Flat 51","Flat 61"];
    let visibleMarkers = [];
    for (var i=0; i < markers.length; i++) {
        if (map.getBounds().contains(markers[i].getPosition())) {
            //console.log(markers[i]);
            visibleMarkers.push(flats[i]);
        } else {
            //console.log('out of bounds');

        }
    }


    //only the flats thaat are within the bounds of the map should be shown
    drawGoogleMapsTemp(visibleMarkers);
    drawGoogleMapsHumidity(visibleMarkers);
    drawGoogleMapsLight(visibleMarkers);
    flatComboChartUtilities(visibleMarkers);
    flatComboChartTemp(visibleMarkers);
}

function drawGoogleMapsTemp(VisibleMarkers){

    let data = new google.visualization.DataTable();

    let flats = ["Flat 11", "Flat 12","Flat 21","Flat 31","Flat 51","Flat 61"];
    //console.log(VisibleMarkers);

    data.addColumn('string', 'Flat Number');
    data.addColumn('number', '');
    data.addColumn({type:'string', role:'style'});

    for(let i = 0; i < VisibleMarkers.length; i++) {

        let randNumber = (Math.random() * 30) + 10;

        if (randNumber < 16) {
            data.addRow([ VisibleMarkers[i], randNumber, 'red']);
        } else {
            data.addRow([ VisibleMarkers[i], randNumber, 'green']);
        }
    }

    // Set chart options
    var options = {
        'title': 'Live Temperature °C',
        'width': 500,
        'height': 400,
        legend: {position: 'none'},
        //start chart a 0, to give a more reliable chart look
        vAxis: {
            viewWindow: {
                min: 0,
                max: 60,
            }
        },
        animation:{
            startup: false,
            duration: 1000,
            easing: 'out',
        },
    };
    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.ColumnChart(document.getElementById('chart_div1'));
    chart.draw(data, options);

    let randNum;

    setInterval(function() {

        for (let i = 0; i < VisibleMarkers.length; i++) {

            randNum = (Math.random() * 40) + 15;
            data.setValue(i, 1,randNum);
            if (randNum < 16) {
                data.setValue(i, 2, 'red');
            } else {
                data.setValue(i, 2, 'green');
            }

            //set the color of the new chart based on value
            //data.setValue(i, 2, 'Black');
        }

        chart.draw(data, options);
    }, 5000);

}

function drawGoogleMapsHumidity(VisibleMarkers){

    let data = new google.visualization.DataTable();

    let flats = ["Flat 11", "Flat 12","Flat 21","Flat 31","Flat 51","Flat 61"];
    //console.log(VisibleMarkers);

    data.addColumn('string', 'Flat Number');
    data.addColumn('number', '');

    data.addColumn({type:'string', role:'style'});
    for(let i = 0; i < VisibleMarkers.length; i++) {

        let randNumber = (Math.random() * 60) + 20;

        if (randNumber > 70) {
            data.addRow([ VisibleMarkers[i], randNumber, 'red']);
        } else {
            data.addRow([ VisibleMarkers[i], randNumber, 'green']);
        }
    }

    // Set chart options
    var options = {
        'title': 'Live Humidity %',
        'width': 500,
        'height': 400,
        legend: {position: 'none'},
        //start chart a 0, to give a more reliable chart look
        vAxis: {
            viewWindow: {
                min: 0,
                max: 100,
            }
        },
        animation:{
            startup: false,
            duration: 1000,
            easing: 'out',
        },
    };
    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.ColumnChart(document.getElementById('chart_div2'));
    chart.draw(data, options);


    let randNum;

    setInterval(function() {

        for (let i = 0; i < VisibleMarkers.length; i++) {

            randNum = (Math.random() * 60) + 20;
            data.setValue(i, 1,randNum);
            if (randNum > 70) {
                data.setValue(i, 2, 'red');
            } else {
                data.setValue(i, 2, 'green');
            }

            //set the color of the new chart based on value
            //data.setValue(i, 2, 'Black');
        }

        chart.draw(data, options);
    }, 5000);

}


function drawGoogleMapsLight(VisibleMarkers){

    let data = new google.visualization.DataTable();

    let flats = ["Flat 11", "Flat 12","Flat 21","Flat 31","Flat 51","Flat 61"];
    //console.log(VisibleMarkers);

    data.addColumn('string', 'Flat Number');
    data.addColumn('number', '');

    data.addColumn({type:'string', role:'style'});
    for(let i = 0; i < VisibleMarkers.length; i++) {

        let randNumber = (Math.random() * 60);

        if (randNumber < 20) {
            data.addRow([ VisibleMarkers[i], randNumber, 'red']);
        } else {
            data.addRow([ VisibleMarkers[i], randNumber, 'green']);
        }
    }

    // Set chart options
    var options = {
        'title': 'Live Light Reading %',
        'width': 500,
        'height': 400,
        legend: {position: 'none'},
        //start chart a 0, to give a more reliable chart look
        vAxis: {
            viewWindow: {
                min: 0,
                max: 100,
            }
        },
        animation:{
            startup: false,
            duration: 1000,
            easing: 'out',
        },

    };
    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.ColumnChart(document.getElementById('chart_div3'));
    chart.draw(data, options);


    let randNum;

    setInterval(function() {

        for (let i = 0; i < VisibleMarkers.length; i++) {

            randNum = (Math.random() *  60);
            data.setValue(i, 1,randNum);
            if (randNum < 20) {
                data.setValue(i, 2, 'red');
            } else {
                data.setValue(i, 2, 'green');
            }

            //set the color of the new chart based on value
            //data.setValue(i, 2, 'Black');
        }

        chart.draw(data, options);
    }, 5000);

}


function flatComboChartTemp(visibleMarkers){

    let data = new google.visualization.DataTable();

    let flats = ["Flat 11", "Flat 12","Flat 21","Flat 31","Flat 51","Flat 61"];
    //console.log(VisibleMarkers);

    data.addColumn('string', 'Flat Number');
    data.addColumn('number', 'Temp');
    data.addColumn('number', 'Humidity');

    //dont need style for this chart
    //data.addColumn({type:'string', role:'style'});
    for(let i = 0; i < visibleMarkers.length; i++) {
        data.addRow([ visibleMarkers[i], (Math.random() * 80) + 30, (Math.random() * 80) + 30]);

    }



    // Set chart options
    var options = {
        'title': 'Combined Atmospheric  Readings',
        'width': 800,
        'height': 400,
        seriesType: 'bars',
        //start chart a 0, to give a more reliable chart look
        vAxis: {
            viewWindow: {
                min: 0,
                max: 100,
            }
        },
        animation:{
            startup: false,
            duration: 1000,
            easing: 'out',
        },

    };
    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.ComboChart(document.getElementById('chart_div7'));
    chart.draw(data, options);


    setInterval(function() {

        //set all of the values of the combo chart again to random values
        for(let u = 0; u < visibleMarkers.length; u++){
            data.setValue(u, 1,(Math.random() * 30) + 10);
            data.setValue(u, 2,(Math.random() * 60) + 30);
        }

        chart.draw(data, options);
    }, 5000);


}

function flatComboChartUtilities(visibleMarkers){

    let data = new google.visualization.DataTable();

    let flats = ["Flat 11", "Flat 12","Flat 21","Flat 31","Flat 51","Flat 61"];
    //console.log(VisibleMarkers);

    data.addColumn('string', 'Flat Number');
    data.addColumn('number', 'Gas Usage');
    data.addColumn('number', 'Electricity Usage');

    //dont need style for this chart
    //data.addColumn({type:'string', role:'style'});
    for(let i = 0; i < visibleMarkers.length; i++) {
        data.addRow([ visibleMarkers[i], (Math.random() * 80) + 30, (Math.random() * 80) + 30]);

    }



    // Set chart options
    var options = {
        'title': 'Combined Utility Readings %',
        'width': 800,
        'height': 400,
        seriesType: 'bars',
        //start chart a 0, to give a more reliable chart look
        vAxis: {
            viewWindow: {
                min: 0,
                max: 110,
            }
        },
        animation:{
            startup: false,
            duration: 1000,
            easing: 'out',
        },

    };
    // Instantiate and draw our chart, passing in some options.
    var chart = new google.visualization.ComboChart(document.getElementById('chart_div8'));
    chart.draw(data, options);

    setInterval(function() {

        //set all of the values of the combo chart again to random values
        for(let u = 0; u < visibleMarkers.length; u++){
            data.setValue(u, 1,(Math.random() * 100));
            data.setValue(u, 2,(Math.random() * 100));
        }


        chart.draw(data, options);
    }, 5000);


}

