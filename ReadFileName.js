
//function that reads the name of a file that has been imported on the webpage
$(document).ready(function() {
    $("#btn").on("click", function() {
        CsvtoJson();
    });
});

function CsvtoJson()
{
    //finds out the full path name, usually giving //fackpath//something
    //which is not usefull
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
        alert(filename);
    }

}