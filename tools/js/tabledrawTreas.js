//----------------------------
//-- My Tools - v 4.0       --
//-- tabledrawTreas.js      --
//-- last update 2023-03-05 --
//----------------------------

//-- Currency forecast - Google Charts - https://developers.google.com/chart/interactive/docs/
//-- Original code - py4e - Capstone project

function drawTable() {
    var data = google.visualization.arrayToDataTable(dataTreasTransposedRolling5);

    var table = new google.visualization.Table(document.getElementById('table_div_Treas'));
    table.draw(data, {showRowNumber: false, width: '100%', height: '100%'});
}
