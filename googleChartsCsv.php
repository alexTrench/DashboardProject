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


    </style>
    <meta charset="UTF-8">
    <title>Title</title>


    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>

    <!--<script src="jquery-csv.js"></script>-->
    <!--load controls and dasboard api from google charts-->
    <!--loads all of the graphs from other scripts-->

    <script src="DrawChartFromJsonFile.js"></script>
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

<!--Div that will hold the dashboard-->
<div id="dashboard_div">
    <!--Divs that will hold each control and chart-->
    <form action="getData.php" method="POST" >
        Select a file: <input type="file" name="fileName" id="fileName" accept=".csv"  required>
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
</html>