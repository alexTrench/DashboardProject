// Set a callback to run when the Google Visualization API is loaded.
google.charts.load('current', {packages: ['corechart']});
google.charts.setOnLoadCallback(readCsvFile);


function readCsvFile() {
       //attach this function to the file name input
      const input = document.getElementById("fileName");
      input.addEventListener('change', function(e){
      console.log(input.files);

      const reader = new FileReader();

      //whats triggered each time reading is successful
      reader.onload = function()
      {
         //console.log(reader.result);
         populateTable(reader.result, reader.result.length);

         //document.getElementById("csvData").innerHTML = reader.result.toString();
      };

      reader.readAsText(input.files[0]);

    },false)
}

function populateTable(file, length) {
    //console.log(file);
    //console.log(length)

    //gets the table reference so we can add and remmove the csv data from it
    let tableReference = document.getElementById("csvTableBody");

    //removes the old data from the table before adding the new
    while(tableReference.firstChild){
        tableReference.removeChild(tableReference.firstChild);
    }

    //set up for parsing the csv file
    //currently just prints the formatting to console
    let emptyWord = '';
    let word = '';
    let currentLetter = '';


    //all of the rows in all the csv data files contain 4 piece of data
    //so i can count the ticks though each row and in at the end pool those 4 piece of data
    //into a object for later use.
    let numberOfRows = 0;
    let numberOfCells = 0;
    // const tr = tableReference.insertRow();
    // const td = tableReference.insertCell();
    for(var i = 0; i <= length; i++){
        //console.log(file[i]);
        //makes sure there is always at least one row to start with
        //other rows are added on after this
        if(numberOfRows === 0){
            row = tableReference.insertRow();
            numberOfRows ++;
        }
        //used to get the time, time is always on the end of the csv file, does not have a comma so cannot
        //screen for it that way
        //this way i can see if the word is exactly 23 letter long to indicate its the data and time
        //nothing else in the csv file comes close to this many letters in a single cell so it shouldnt not be a issue
        if( word.length === 23){
            let cell = row.insertCell(-1);
            cell.innerHTML = word;
            //td.textContent = word;
            //tr.appendChild(td);
            //console.log(word);
            word = emptyWord;
            numberOfCells++;
            if(numberOfCells === 5) {
                var row = tableReference.insertRow();
                numberOfRows ++;
                numberOfCells = 0;
            }
        }
        //add the next letter from the csv file to the word string
        //if it finds a comma, it indicates that its the start of the next data entry
        //so it skips to the else to process the full last word into the table
        if(file[i] !== ',' ){
                currentLetter = file[i];
                word += currentLetter;
        //this does the same as if( word.length === 23) however this is called on everything but the data and time
       }else{
            let cell = row.insertCell(-1);
            cell.innerHTML = word;
            //td.textContent = word;
            //tr.appendChild(td);
            //console.log(word);
            word = emptyWord;
            numberOfCells++;
            if(numberOfCells === 5) {
                var row = tableReference.insertRow();

                numberOfRows ++;
                numberOfCells = 0;
            }
        }

    }

    alert("Charts Ready");
    //or somehow make it a javascript obejct
    //json.parse() apparently does something useful with strings
}


