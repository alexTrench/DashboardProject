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
        #csvDataTable {
            font-family: "Times New Roman", Times, serif;
            border: 2px solid #000000;
            width: 40%;
            height: 200px;
            text-align: center;
            border-collapse: collapse;
            padding-left: 2%;
            float: left;
        }
        #csvDataTable td, table.csvDataTable th {
            border: 1px solid #FFFFFF;
            padding: 3px 2px;
        }
        #csvDataTable tbody td {
            font-size: 13px;
            color: #313331;
        }
        #csvDataTable tr:nth-child(even) {
            background: #D0E4F5;
        }
        #csvDataTable td:nth-child(even) {
            background: #D0E4F5;
        }
        #csvDataTable thead {
            background: #12A44A;
            border-bottom: 5px solid #FFFFFF;
        }
        #csvDataTable thead th {
            font-size: 17px;
            font-weight: bold;
            color: #FFFFFF;
            text-align: center;
            border-left: 2px solid #FFFFFF;
        }
        #csvDataTable thead th:first-child {
            border-left: none;
        }

        #csvDataTable tfoot {
            font-size: 14px;
            font-weight: bold;
            color: #333333;
            background: #D0E4F5;
            border-top: 3px solid #444444;
        }
        #csvDataTable tfoot td {
            font-size: 14px;
        }
        #csvData{
            padding-left: 5%;
        }
        #jsonDataTable{
            float: left;
            display: inline-block;
            width: 80%;
            padding-left: 2%;
            padding-right: 2%;
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
        #helpBox{
            margin: auto;
            width: 50%;
            border: 3px solid #005f86;
            text-align: center;
        }
        #dashboardDiv{
            margin: auto;
            width: 50%;
            border: 3px solid #005f86;
            text-align: center;
            padding-top: 0.5%;
            padding-bottom: 0.5%;
        }


    </style>
    <meta charset="UTF-8">
    <title>Title</title>


    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>

    <!--<script src="jquery-csv.js"></script>-->
    <!--load controls and dasboard api from google charts-->
    <!--loads all of the graphs from other scripts-->
    <script src="ReadFileName.js"></script>
    <script src="ReadCsvFile.js"></script>
    <script src="DrawCsvCharts.js"></script>

    <!--A libary to parse csv files to objects -->

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

<!--The help box which contains the instructions for how to use -->
<div id="helpBox">
    <button class="collapsible">Instructions</button>
    <div class="content">
        <p> 1: To draw charts based on historical data first import a CSV type file with the data required  </p>
        <p> 2: The data is formated as such  / Sensor ID / buldax / Type of Data / Data Value / date and time /</p>
        <p> 3: Once submitted press generate charts to view your data</p>
        <p> 4: Currently to draw a new set of charts it is required to refresh this page before imporing a new file</p>
        <p> Warning: Some charts remain empty if a file you entered does not have data relevant to that chart</p>
    </div>
</div>

<!--Div that will hold the dashboard-->
<div id="dashboardDiv">
    <!--Divs that will hold each control and chart-->
    <form action="getData.php" method="POST" >
        Select a file: <input type="file" name="fileName" id="fileName" accept=".csv" required onchange="ReadFileName()">
        <button id="btn3" type="button" class="btn btn-primary" value="importedFile" onclick="ConstructJsonObject()" >Generate Charts</button>
    </form>


</div>

<div>
    <table class="columns" id="jsonDataTable">
        <tr>
            <td><div id="filter_div"></div></td>
            <td><div id="filter_div1"></div></td>
            <td><div id="filter_div2"></div></td>
        </tr>
        <tr>
            <td><div id="control_div"></div></td>
            <td><div id="control_div1"></div></td>
            <td><div id="control_div2"></div></td>
        </tr>
        <tr>
            <td><div id="chart_div1"></div></td>
            <td><div id="chart_div2"></div></td>
            <td><div id="chart_div3"></div></td>

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
<div class="row" id="csvData" style="visibility: collapse">
    <table id="csvDataTable" class="table">
        <thead>
            <tr>
                <th>Sensor ID</th>
                <th>Buildax</th>
                <th>Type Of data Stored</th>
                <th>Data Value</th>
                <th>Date and Time</th>
            </tr>
        </thead>
        <tbody id ="csvTableBody">
            <tr>
                <td>1</td>
                <td>buildax</td>
                <td>heat</td>
                <td>1930</td>
                <td>16-29-49</td>
            </tr>
            <tr>
                <td>1</td>
                <td>buildax</td>
                <td>heat</td>
                <td>1930</td>
                <td>16-29-49</td>
            </tr>
            <tr>
                <td>1</td>
                <td>buildax</td>
                <td>heat</td>
                <td>1930</td>
                <td>16-29-49</td>
            </tr>
            <tr>
                <td>1</td>
                <td>buildax</td>
                <td>heat</td>
                <td>1930</td>
                <td>16-29-49</td>
            </tr>
        </tbody>
    </table>
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