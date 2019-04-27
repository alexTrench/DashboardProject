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

    header {
        background: #55d6aa;
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
        color: #444;
        text-decoration: none;
        text-transform: uppercase;
        font-size: 14px;
    }

    nav a:hover {
        color: #000;
    }

    nav a::before {
        content: '';
        display: block;
        height: 5px;
        background-color: #444;

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
                <li><a href="googleChartsTestingPhp.php">Dashboard</a></li>
                <li><a href="googleChartsCsv.php">Csv</a></li>
                <li><a href="#">History</a></li>

            </ul>
        </nav>
    </div>
</header>

<!--Google Maps Div-->
<div id="map"></div>

<!--Div that will hold the dashboard-->
<div id="dashboard_div">
    <!--Divs that will hold each control and chart-->
    <table class="columns">
        <tr>
            <td><div id="chart_div1"></div></td>
            <td><div id="chart_div2"></div></td>
            <td><div id="chart_div3"></div></td>
        </tr>
        <tr>

        </tr>
        <tr>
            <td><div id="chart_div4"></div></td>
            <td><div id="chart_div5"></div></td>
            <td><div id="chart_div6"></div></td>
        </tr>
        <tr>
            <td><div id="chart_div7"></div></td>
            <td><div id="chart_div8"></div></td>
            <td><div id="chart_div9"></div></td>

        </tr>

    </table>
</div>

<div id="data" style="visibility: collapse;">

</div>
</body>
</html>