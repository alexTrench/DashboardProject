<!DOCTYPE html>
<html lang="en">
<head>
    <style type="text/css">
    @import url('https://fonts.googleapis.com/css?family=Work+Sans:400,600');
    body {
        margin: 0;
        background: white;
        font-family: 'Work Sans', sans-serif;
        font-weight: 800;
    }

    .container {
        width: 80%;
        margin: 0 auto;
    }

    #dashboardDiv{
        display: -webkit-flex; /* Safari */
        -webkit-flex-wrap: wrap; /* Safari 6.1+ */
        display: flex;
        flex-wrap: wrap;
    }

    header {
        background: #005f86;
    }

    header::after {
        content: '';
        display: table;
        clear: both;
    }

    .logo {
        float: left;
        padding: 10px 0;
    }

    nav {
        float: right;
    }

    nav ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }

    nav li {
        display: inline-block;
        margin-left: 70px;
        padding-top: 23px;

        position: relative;
    }

    nav a {
        color: #fff4f9;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 14px;
    }

    nav a:hover {
        color: #fff4f9;
    }

    nav a::before {
        content: '';
        display: block;
        height: 5px;
        background-color: #fff4f9;

        position: absolute;
        top: 0;
        width: 0%;

        transition: all ease-in-out 250ms;
    }

    nav a:hover::before {
        width: 100%;
    }
    #map {
        height: 300px;  /* The height is 400 pixels */
        width: 100%;  /* The width is the width of the web page */
        padding-top: 30px;
    }
    #helpBox{
        margin: auto;
        width: 50%;
        border: 3px solid #005f86;
        padding: 10px;
        text-align: center;
    }
    .collapsible {
        background-color: rgba(255, 255, 255, 0);
        color: #000000;
        cursor: pointer;
        padding: 18px;
        width: 100%;
        border: none;
        text-align: center;
        outline: none;
        font-size: 25px;
    }

    .active, .collapsible:hover {
        background-color: #dfdfdf;
    }

    .content {
        padding: 0 18px;
        display: none;
        text-align: left;
        overflow: hidden;
        background-color: #f1f1f1;
    }
    #barCharts{
        float: left;
        padding: 2%;
        flex-wrap: wrap;
    }
    #lineCharts{
        float: left;
        padding: 2%;
        flex-wrap: wrap;
    }
    #ComboCharts{
        float: left;
        padding: 0.5%;
        flex-wrap: wrap;
    }
    #allCharts{
        display: -webkit-flex; /* Safari */
        -webkit-flex-wrap: wrap; /* Safari 6.1+ */
        display: flex;
        flex-wrap: wrap;
    }


</style>
    <meta charset="UTF-8">
    <title>Title</title>


    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <!--load controls and dasboard api from google charts-->
    <!--loads all of the graphs from other scripts-->
    <script src="DrawChartFromJsonFile.js"></script>
    <script src="ReadFileName.js"></script>
    <script src="LiveDataCharts.js"></script>
    <script src="GoogleMapsScripts.js"></script>
    <script async defer
            src="https://maps.googleapis.com/maps/api/js?key=AIzaSyB7QZIIjZc7ol_NCUcPvPB9wSA-KzLrq7U&callback=initMap">
    </script>


</head>
<body>

<!--Nav Bar-->
<header>
    <!--Nav Bar-->
    <div class="container">
        <h1 class="logo"></h1>

        <nav>
            <ul>
                <li><a href="googleChartsTestingPhp.php">Real Time Dashboard</a></li>
                <li><a href="googleChartsCsv.php">historical Dashboard Csv</a></li>
            </ul>
        </nav>
    </div>
</header>

<!--Google Maps Div-->
<div id="map"></div>
<div id="helpBox">
    <button class="collapsible">Instructions</button>
    <div class="content">
        <p> 1: To draw some of the charts you must first drag the map to refresh visible properties  </p>
        <p> 2: Line charts refresh at a set tick rate, they need time to fill</p>
        <p> 3: You can use the map to filter what flats are shown on some of the charts, all you need to do is zoom in on some properties on the map so only the ones you want to view are in bounds</p>
        <p> 4: "cannot read gettime" error just means the chart hasnt had time to populate with data and will do shortly</p>
    </div>
</div>


<!--Div that will hold the dashboard-->
<div id="dashboardDiv">
    <!--Divs that will hold each control and chart-->
    <table class="columns" id="allCharts">
        <tr id="barCharts">
            <td><div id="chart_div1"></div></td>
            <td><div id="chart_div2"></div></td>
            <td><div id="chart_div3"></div></td>
            <td><div id="chart_div10"></div></td>
        </tr>
    <tr id="ComboCharts">
            <td><div id="chart_div4"></div></td>
            <td><div id="chart_div5"></div></td>
            <td><div id="chart_div6"></div></td>
        </tr>
        <tr id="lineCharts">
            <td><div id="chart_div7"></div></td>
            <td><div id="chart_div8"></div></td>
            <td><div id="chart_div9"></div></td>
        </tr>
    </table>
</div>

<div id="data" style="visibility: collapse;">

</div>
</body>

<script>
    var coll = document.getElementsByClassName("collapsible");
    var i;

    for (i = 0; i < coll.length; i++) {
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    }
</script>
</html>