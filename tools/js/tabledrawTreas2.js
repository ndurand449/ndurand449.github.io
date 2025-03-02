//----------------------------
//-- My Tools - v 10.0      --
//-- tabledrawTreas2.js     --
//-- last update 2025-02-25 --
//----------------------------

//-- Currency forecast - Google Charts - https://developers.google.com/chart/interactive/docs/
//-- Original code - py4e - Capstone project

//-- Treasury par yield curve rates (%)
function drawTable0() {
    var data = google.visualization.arrayToDataTable(dataTreasTransposedRolling5v2);

    var formatter0 = new google.visualization.ColorFormat();
    formatter0.addRange(null, null, '#0074cc');
    formatter0.format(data, 0); 

    var formatter1 = new google.visualization.NumberFormat({fractionDigits: 2});
    formatter1.format(data, 1); 
    formatter1.format(data, 2); 
    formatter1.format(data, 4); 
    formatter1.format(data, 5); 

    var formatter2 = new google.visualization.NumberFormat({fractionDigits: 1, suffix: '%'});
    formatter2.format(data, 3); 
    formatter2.format(data, 6);   

    var formatter3 = new google.visualization.ColorFormat();
    formatter3.addRange(null, 0, 'red');
    formatter3.addRange(0, null, 'limegreen');
    formatter3.format(data, 3); 
    formatter3.format(data, 6);   

    var table = new google.visualization.Table(document.getElementById('table_div_Treas'));
    table.draw(data, {allowHtml: true, showRowNumber: false, width: '100%', height: '100%'});
}

//-- Upcoming FOMC meetings
function drawTable1() {
    var data = google.visualization.arrayToDataTable(FOMCcal);
    var table = new google.visualization.Table(document.getElementById('table_div_FOMCcal'));
    table.draw(data, {allowHtml: true, showRowNumber: false, width: '100%', height: '100%'});
}

//-- Major events since 1/1/2022
function drawTable2() {
    var data = google.visualization.arrayToDataTable(FOMCev);
    var table = new google.visualization.Table(document.getElementById('table_div_FOMCev'));
    table.draw(data, {allowHtml: true, showRowNumber: false, width: '100%', height: '100%'});
}
