// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawCsvCharts);


function drawCsvCharts()
{
   //attach this function to the file name input
  const input = document.getElementById("fileName");
  input.addEventListener('change', function(e){
  console.log(input.files);

  const reader = new FileReader();

  reader.onload = function()
  {
     console.log(reader.result);
     document.getElementById("csvData").innerHTML = reader.result.toString();
  };
  reader.readAsText(input.files[0]);

},false)
}