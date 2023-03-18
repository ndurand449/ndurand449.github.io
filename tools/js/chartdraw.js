//----------------------------
//-- My Tools - v 6.0       --
//-- chartdraw.js           --
//-- last update 2023-03-18 --
//----------------------------

//-- Currency forecast - Google Charts - https://developers.google.com/chart/interactive/docs/
//-- Original code - py4e - Capstone project

function drawChart() {
    var data = google.visualization.arrayToDataTable(chartdata);

    var options = {
        fontSize: '11',
        fontName: 'Verdana',
        title: "Pair = " + pair,
        titleTextStyle: {color:'#7d4600', fontSize: '12'},
        chartArea: {left:'13%', top:'12%', width:'85%', height:'65%'},
        vAxis: {title:'Rate', titleTextStyle: {color:'#7d4600', bold: true, italic: false},
                gridlines: {color: '#c1df1f'}},
        hAxis: {title:'Date', titleTextStyle: {color:'#7d4600', bold: true, italic: false},
                gridlines: {color: '#c1df1f'}},
        legend: {position:'bottom'},
        crosshair: {trigger: 'both'},
    };

    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
    chart.draw(data, options);

//-- Data extraction from chartdata.js to build: "Updated on date" - currency.html
txt = chartdata[0][0];
document.getElementById("updatecur").innerHTML = "Data updated on " + txt.slice(30,32) + "/" + txt.slice(33,35) + "/" + txt.slice(25,29);
}


//-- Data extraction from chartdata.js to build graph title: "Pair: xxx/yyy as of date"

txt = chartdata[0][0];
pair = txt.slice(7,14);
date = txt.slice(25,35);
