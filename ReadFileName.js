
//function that reads the name of a file that has been imported on the webpage
function ReadFileName()
{

    var fullPath = document.getElementById('fileName').value;
    //if something was atcully imported
    if (fullPath) {
        //removes back slashes from the pathway to give back just the last filename, usually something like JsonFile2.Json
        var startIndex = (fullPath.indexOf('\\') >= 0 ? fullPath.lastIndexOf('\\') : fullPath.lastIndexOf('/'));
        var filename = fullPath.substring(startIndex);
        if (filename.indexOf('\\') === 0 || filename.indexOf('/') === 0) {
            filename = filename.substring(1);
        }
        //pops up in browser for testing purposes

        if(filename.substring(filename.length - 3, filename.length ) !== "csv"){
            console.log(filename.substring(filename.length - 3, filename.length ));
            alert(filename + " Is not valid file type");
        }
        alert(filename + " Submitted");
        //console.log(filename);

        // var xmlhttp = new XMLHttpRequest();
        // xmlhttp.onreadystatechange = function() {
        //     if (this.readyState == 4 && this.status == 200) {
        //         document.getElementById("data").innerHTML = this.responseText;
        //     }
        // };
        // xmlhttp.open("GET", "getData.php?filename=" + filename, true);
        // xmlhttp.send();
    }




}
