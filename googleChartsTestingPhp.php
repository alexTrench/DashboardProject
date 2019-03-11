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


</style>
    <meta charset="UTF-8">
    <title>Title</title>


    <script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript" src="//ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
    <!--load controls and dasboard api from google charts-->
    <!--loads all of the graphs from other scripts-->
    <script src="DrawChartFromJsonFile.js"></script>
    <script src="ReadFileName.js"></script>


</head>
<body>

<!--Nav Bar-->
<header>
    <!--Nav Bar-->
    <div class="container">
        <h1 class="logo"></h1>

        <nav>
            <ul>
                <li><a href="#">Dashboard</a></li>
                <li><a href="#">Compare</a></li>
                <li><a href="#">History</a></li>

            </ul>
        </nav>
    </div>
</header>

<!--Div that will hold the dashboard-->
<div id="dashboard_div">
    <!--Divs that will hold each control and chart-->
    <form action="getData.php" method="POST">
        Select a file: <input type="file" name="fileName" id="fileName">
                       <button id="btn" type="button" class="btn btn-primary" onclick="CsvtoJson()">Confirm</button>
    </form>

    <table class="columns">
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
            <td><div id="chart_div4"></div></td>
        </tr>
        <tr>
            <td><div id="chart_div5"></div></td>
            <td><div id="chart_div6"></div></td>
            <td><div id="chart_div7"></div></td>
            <td><div id="chart_div8"></div></td>
        </tr>
    </table>
</div>

<div id="data">

</div>
</body>
</html>