//----------------------------
//-- My Tools - v 2.0       --
//-- last update 2023-02-26 --
//----------------------------

//-- Currency forecast - Google Charts - https://developers.google.com/chart/interactive/docs/
//-- Original code - py4e - Capstone project

function drawChart() {
	var data = google.visualization.arrayToDataTable(chartdata);

    var options = {
        title: "Pair = " + pair + " as of " + date,
        chartArea: {left:'6%', top:'10%', width:'89%', height:'65%'},
        legend: {position:'bottom'},
        vAxis: {title:'Rate'},
        hAxis: {title:'Date', format: 'M/d/yy'},
    };

    var chart = new google.visualization.LineChart(document.getElementById('chart_div'));
    chart.draw(data, options);
}


//-- Data extraction from chartdata.js to build graph title: "Pair: xxx/yyy as of date"

txt = chartdata[0][0];
pair = txt.slice(7,14);
date = txt.slice(25,35);
