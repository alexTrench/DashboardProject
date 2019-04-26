

//draw the google map with markers
function initMap() {
    //array of potential house locations
    var arrayOfLocations = [];
    var markers = [];
    var map = new google.maps.Map(document.getElementById('map'), {zoom: 6, center: {lat: 52.3781, lng:  2.3360}});

    for(let i = 0; i < 9; i++){

        arrayOfLocations[i] = new google.maps.LatLng( (Math.random()*(7)+46), (Math.random()*(10.0360) + 10) );

        //console.log(arrayOfMarkers);
        var marker = new google.maps.Marker({position: arrayOfLocations[i], map: map,});
        markers.push(marker);
        console.log(marker.getPosition());
    }

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
            console.log('out of bounds');

        }
    }


    drawGoogleMapsTemp(visibleMarkers);
    drawGoogleMapsHumidity(visibleMarkers);
    drawGoogleMapsLight(visibleMarkers);
}

function drawGoogleMapsTemp(VisibleMarkers){

    let data = new google.visualization.DataTable();

    let flats = ["Flat 11", "Flat 12","Flat 21","Flat 31","Flat 51","Flat 61"];
    console.log(VisibleMarkers);

    data.addColumn('string', 'Flat Number');
    data.addColumn('number', '');

    data.addColumn({type:'string', role:'style'});
    for(let i = 0; i < VisibleMarkers.length; i++) {

        let randNumber = (Math.random() * 40) + 15;

        if (randNumber < 25) {
            data.addRow([ VisibleMarkers[i], randNumber, 'red']);
        } else {
            data.addRow([ VisibleMarkers[i], randNumber, 'green']);
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
    var chart = new google.visualization.ColumnChart(document.getElementById('chart_div1'));
    chart.draw(data, options);

    setInterval(function() {

        for (let i = 0; i < VisibleMarkers.length; i++) {

            data.setValue(i, 1, (Math.random() * 40) + 15);

        }

        chart.draw(data, options);
    }, 5000);

}

function drawGoogleMapsHumidity(VisibleMarkers){

    let data = new google.visualization.DataTable();

    let flats = ["Flat 11", "Flat 12","Flat 21","Flat 31","Flat 51","Flat 61"];
    console.log(VisibleMarkers);

    data.addColumn('string', 'Flat Number');
    data.addColumn('number', '');

    data.addColumn({type:'string', role:'style'});
    for(let i = 0; i < VisibleMarkers.length; i++) {

        let randNumber = (Math.random() * 40) + 15;

        if (randNumber < 25) {
            data.addRow([ VisibleMarkers[i], randNumber, 'red']);
        } else {
            data.addRow([ VisibleMarkers[i], randNumber, 'green']);
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
    var chart = new google.visualization.ColumnChart(document.getElementById('chart_div2'));
    chart.draw(data, options);


    setInterval(function() {

        for(let i = 0; i < VisibleMarkers.length; i++){

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


function drawGoogleMapsLight(VisibleMarkers){

    let data = new google.visualization.DataTable();

    let flats = ["Flat 11", "Flat 12","Flat 21","Flat 31","Flat 51","Flat 61"];
    console.log(VisibleMarkers);

    data.addColumn('string', 'Flat Number');
    data.addColumn('number', '');

    data.addColumn({type:'string', role:'style'});
    for(let i = 0; i < VisibleMarkers.length; i++) {

        let randNumber = (Math.random() * 40) + 15;

        if (randNumber < 25) {
            data.addRow([ VisibleMarkers[i], randNumber, 'red']);
        } else {
            data.addRow([ VisibleMarkers[i], randNumber, 'green']);
        }
    }

    // Set chart options
    var options = {
        'title': 'Live Light Reading',
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
    var chart = new google.visualization.ColumnChart(document.getElementById('chart_div3'));
    chart.draw(data, options);


    setInterval(function() {

        for(let i = 0; i < VisibleMarkers.length; i++){

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