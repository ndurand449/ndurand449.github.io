//----------------------------
//-- My Tools - v 5.0       --
//-- chartdrawTreas.js      --
//-- last update 2023-03-12 --
//----------------------------

//-- Currency forecast - Google Charts - https://developers.google.com/chart/interactive/docs/
//-- Original code - py4e - Capstone project

function drawChart0() {
    var data = google.visualization.arrayToDataTable(dataTreasTransposedRolling4Fri);

    var options = {
        fontSize: '11',
        fontName: 'Verdana',
        title: 'Treasury Yield Curve',
        titleTextStyle: {color:'#7d4600', fontSize: '12'},
        chartArea: {left:'12%', top:'12%', width:'85%', height:'65%'},
        curveType: 'function',
        vAxis: {title:'Rate (%)', titleTextStyle: {color:'#7d4600', bold: true, italic: false},
                gridlines: {color: '#c1df1f'}},
        hAxis: {title:'Number of Months', titleTextStyle: {color:'#7d4600', bold: true, italic: false},
                gridlines: {color: '#c1df1f', count: 18}},
        legend: {position:'bottom', textStyle: {fontSize: '10'}},
        series: {0:{lineWidth: 1}, 1:{lineWidth: 1}, 2:{lineWidth: 1}, 3:{lineWidth: 2}},
    };

    var chart = new google.visualization.LineChart(document.getElementById('chart_div_Treas0'));
    chart.draw(data, options);

//-- Data extraction from dataTreasTransposedRolling4Fri.js to build: "Updated on date" - treasuries.html
txt0 = dataTreasTransposedRolling4Fri[0][4];
document.getElementById("updatetre").innerHTML = "Updated on " + txt0.slice(1,11);
}


function drawChart1() {
    var data = google.visualization.arrayToDataTable(dataTreasRolling28);

    var options = {
        fontSize: '11',
        fontName: 'Verdana',
        title: "Treasury Par Yield Curve",
        titleTextStyle: {color:'#7d4600', fontSize: '12'},
        chartArea: {left:'12%', top:'12%', width:'85%', height:'65%'},
        vAxis: {title:'Rate (%)', titleTextStyle: {color:'#7d4600', bold: true, italic: false},
                gridlines: {color: '#c1df1f'}},
        hAxis: {title:'Date', titleTextStyle: {color:'#7d4600', bold: true, italic: false},
                gridlines: {color: '#c1df1f', count: 5}, format: 'MMM d'},
        legend: {position:'bottom', textStyle: {fontSize: '10'}, maxLines: '5'},
        series: {0:{lineWidth: 1}, 1:{lineWidth: 1}, 2:{lineWidth: 1}, 3:{lineWidth: 2}, 4:{lineWidth: 2}, 
                 5:{lineWidth: 2}, 6:{lineWidth: 2}, 7:{lineWidth: 2}, 8:{lineWidth: 2}, 9:{lineWidth: 1},
                10:{lineWidth: 1}, 11:{lineWidth: 1, lineDashStyle: [1, 1]}, 12:{lineWidth: 1, lineDashStyle: [1, 1]}},
    };

    var chart = new google.visualization.LineChart(document.getElementById('chart_div_Treas1'));
    chart.draw(data, options);
}
