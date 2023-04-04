//----------------------------
//-- My Tools - v 8.0       --
//-- chartdrawTreas.js      --
//-- last update 2023-04-03 --
//----------------------------

//-- Currency forecast - Google Charts - https://developers.google.com/chart/interactive/docs/
//-- Original code - py4e - Capstone project


//-- #1: Treasury Yield Curve
//---------------------------

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
        hAxis: {title:'Maturity (number of months)', titleTextStyle: {color:'#7d4600', bold: true, italic: false},
                gridlines: {color: '#c1df1f', }},
        legend: {position:'bottom', textStyle: {fontSize: '8'}},
        series: {0:{lineWidth: 1}, 1:{lineWidth: 1}, 2:{lineWidth: 1}, 3:{lineWidth: 2}},
    };

    var chart = new google.visualization.LineChart(document.getElementById('chart_div_Treas0'));
    chart.draw(data, options);

//-- Data extraction from dataTreasTransposedRolling4Fri.js and dataTreasRolling28.js
//-- to build: "Updated on date" - treasuries.html
txt0 = dataTreasTransposedRolling4Fri[0][4];
len = dataTreasRolling28.length;
d = dataTreasRolling28[len-1][0]
y = d.getFullYear();
document.getElementById("updatetre").innerHTML = "Data updated on " + txt0 + "/" + y;
}


//-- #5: FOMC fund rate
//---------------------

function drawChart3() {
    var data = google.visualization.arrayToDataTable(FOMCfr);

    var options = {
        fontSize: '11',
        fontName: 'Verdana',
        title: 'Federal Funds Rate',
        titleTextStyle: {color:'#7d4600', fontSize: '12'},
        chartArea: {left:'12%', top:'12%', width:'85%', height:'70%'},
        vAxis: {title:'Rate (%)', titleTextStyle: {color:'#7d4600', bold: true, italic: false},
                gridlines: {color: '#c1df1f'}},
        hAxis: {title:'Date', titleTextStyle: {color:'#7d4600', bold: true, italic: false},
                gridlines: {color: '#c1df1f', count: 5}, format: 'MMM d'},
        tooltip: {trigger:'none'},
    };

    var chart = new google.visualization.SteppedAreaChart(document.getElementById('chart_div_Treas3'));
    chart.draw(data, options);
}


//-- #3: Treasury Par Yield Curve (rolling 28 days)
//-------------------------------------------------

function drawChart1() {
    var data = google.visualization.arrayToDataTable(dataTreasRolling28);

    var options = {
        fontSize: '11',
        fontName: 'Verdana',
        title: 'Treasury Par Yield Curve',
        titleTextStyle: {color:'#7d4600', fontSize: '12'},
        chartArea: {left:'12%', top:'12%', width:'85%', height:'70%'},
        vAxis: {title:'Rate (%)', titleTextStyle: {color:'#7d4600', bold: true, italic: false},
                gridlines: {color: '#c1df1f'}},
        hAxis: {title:'Date', titleTextStyle: {color:'#7d4600', bold: true, italic: false},
                gridlines: {color: '#c1df1f', count: 5}, format: 'MMM d'},
        legend: {position:'none', textStyle: {fontSize: '11'}},
        series: {0:{lineWidth: 1}, 1:{lineWidth: 1}, 2:{lineWidth: 1}, 3:{lineWidth: 2}, 4:{lineWidth: 2}, 
                 5:{lineWidth: 2}, 6:{lineWidth: 2}, 7:{lineWidth: 2}, 8:{lineWidth: 2}, 9:{lineWidth: 1},
                10:{lineWidth: 1}, 11:{lineWidth: 1, lineDashStyle: [1, 1]}, 12:{lineWidth: 1, lineDashStyle: [1, 1]}},
    };

    var chart = new google.visualization.LineChart(document.getElementById('chart_div_Treas1'));
    chart.draw(data, options);
}


//-- #4: Treasury Par Yield Curve YTD
//-----------------------------------

function show(element) {
    document.getElementById("treasAll").value = "off";
    document.getElementById("treasBills").value = "off";
    document.getElementById("treasNotes").value = "off";
    document.getElementById("treasBonds").value = "off";
    document.getElementById("treasSelect").value = "off";
    document.getElementById(element.id).value = "on";
    
    if(document.getElementById("treasSelect").value == "on"){
      document.getElementById("selection").style.display = "block";
    }
    else
      document.getElementById("selection").style.display = "none";
}

function myPick() {
    lW0 = 0; lW1 = 0; lW2 = 0; lW3 = 0; lW4 = 0; lW5 = 0; lW6 = 0; lW7 = 0; lW8 = 0; lW9 = 0; lW10 = 0; lW11 = 0; lW12 = 0;
    tF0 = false; tF1 = false; tF2 = false; tF3 = false; tF4 = false; tF5 = false; tF6 = false; tF7 = false; tF8 = false; 
    tF9 = false; tF10 = false; tF11 = false; tF12 = false;

    if(document.getElementById("treasAll").value == "on") {
        lW0 = 1; lW1 = 1; lW2 = 1; lW3 = 2; lW4 = 2; lW5 = 2; lW6 = 2; lW7 = 2; lW8 = 2; lW9 = 1; lW10 = 1; lW11 = 1;
        lW12 = 1; tF0 = true; tF1 = true; tF2 = true; tF3 = true; tF4 = true; tF5 = true; tF6 = true; tF7 = true; 
        tF8 = true; tF9 = true; tF10 = true; tF11 = true; tF12 = true;
    } else if(document.getElementById("treasBills").value == "on") {
        lW0 = 1; lW1 = 1; lW2 = 1; lW3 = 2; lW4 = 2; lW5 = 2; 
        tF0 = true; tF1 = true; tF2 = true; tF3 = true; tF4 = true; tF5 = true;
    } else if(document.getElementById("treasNotes").value == "on") {
        lW6 = 2; lW7 = 2; lW8 = 2; lW9 = 1; lW10 = 1;
        tF6 = true; tF7 = true; tF8 = true; tF9 = true; tF10 = true;
    } else if(document.getElementById("treasBonds").value == "on") {
        lW11 = 1; lW12 = 1;
        tF11 = true; tF12 = true;
    } else {
        if(document.getElementById("m1").checked) {lW0 = 1; tF0 = true;}
        if(document.getElementById("m2").checked) {lW1 = 1; tF1 = true;}
        if(document.getElementById("m3").checked) {lW2 = 1; tF2 = true;}
        if(document.getElementById("m4").checked) {lW3 = 2; tF3 = true;}
        if(document.getElementById("m6").checked) {lW4 = 2; tF4 = true;}
        if(document.getElementById("y1").checked) {lW5 = 2; tF5 = true;}
        if(document.getElementById("y2").checked) {lW6 = 2; tF6 = true;}
        if(document.getElementById("y3").checked) {lW7 = 2; tF7 = true;}
        if(document.getElementById("y5").checked) {lW8 = 2; tF8 = true;}
        if(document.getElementById("y7").checked) {lW9 = 1; tF9 = true;}
        if(document.getElementById("y10").checked) {lW10 = 1; tF10 = true;}
        if(document.getElementById("y20").checked) {lW11 = 1; tF11 = true;}
        if(document.getElementById("y30").checked) {lW12 = 1; tF12 = true;}
    }
    
    document.getElementById("treasAll").checked;
    drawChart2();
}


function drawChart2() {
    var data = google.visualization.arrayToDataTable(dataTreasFull);

    try {
        var options = {
            fontSize: '11',
            fontName: 'Verdana',
            title: 'Treasury Par Yield Curve',
            titleTextStyle: {color:'#7d4600', fontSize: '12'},
            chartArea: {left:'12%', top:'12%', width:'85%', height:'70%'},
            vAxis: {title:'Rate (%)', titleTextStyle: {color:'#7d4600', bold: true, italic: false},
                    gridlines: {color: '#c1df1f'}},
            hAxis: {title:'Date', titleTextStyle: {color:'#7d4600', bold: true, italic: false},
                    gridlines: {color: '#c1df1f', count: 5}, format: 'MMM d'},
            legend: {position:'bottom', textStyle: {fontSize: '11'}},
            series: {0:{lineWidth: lW0, visibleInLegend: tF0}, 1:{lineWidth: lW1, visibleInLegend: tF1}, 
                     2:{lineWidth: lW2, visibleInLegend: tF2}, 3:{lineWidth: lW3, visibleInLegend: tF3}, 
                     4:{lineWidth: lW4, visibleInLegend: tF4}, 5:{lineWidth: lW5, visibleInLegend: tF5}, 
                     6:{lineWidth: lW6, visibleInLegend: tF6}, 7:{lineWidth: lW7, visibleInLegend: tF7}, 
                     8:{lineWidth: lW8, visibleInLegend: tF8}, 9:{lineWidth: lW9, visibleInLegend: tF9},
                    10:{lineWidth: lW10, visibleInLegend: tF10}, 
                    11:{lineWidth: lW11, lineDashStyle: [1, 1], visibleInLegend: tF11}, 
                    12:{lineWidth: lW12, lineDashStyle: [1, 1], visibleInLegend: tF12}},
        };
        var chart = new google.visualization.LineChart(document.getElementById('chart_div_Treas2'));
        chart.draw(data, options);
    }
    catch(err) {
        document.getElementById("chart_div_Treas2").innerHTML = "Choose an option above and click OK.";
    }
}


