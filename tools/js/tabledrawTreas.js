//----------------------------
//-- My Tools - v 6.0       --
//-- tabledrawTreas.js      --
//-- last update 2023-03-15 --
//----------------------------

//-- Currency forecast - Google Charts - https://developers.google.com/chart/interactive/docs/
//-- Original code - py4e - Capstone project

function drawTable() {
    var data = google.visualization.arrayToDataTable(dataTreasTransposedRolling5);

    var formatter = new google.visualization.NumberFormat({fractionDigits: 2});
    formatter.format(data, 1); 
    formatter.format(data, 2); 
    formatter.format(data, 3); 
    formatter.format(data, 4); 
    formatter.format(data, 5); 
    formatter.format(data, 6);   
    
    var table = new google.visualization.Table(document.getElementById('table_div_Treas'));
    table.draw(data, {showRowNumber: false, width: '100%', height: '100%'});
}