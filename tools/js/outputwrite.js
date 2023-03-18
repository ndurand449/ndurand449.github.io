//----------------------------
//-- My Tools - v 6.0       --
//-- outputwrite.js         --
//-- last update 2023-03-18 --
//----------------------------

//-- Outputs for currency.html
//-- Reads from output1.js and output2.js

output1txt1 = 'As of ' + output1.lastrdate + ', the ' + output1.inpry + ' year-to-date information ';
output1txt2 = 'for the ' + output1.Pair + ' pair is:';
output1avg = '<br><ul><li>Average rate:   ' + output1.avgrate + '</li>';
output1min = '<li>Minimum rate:   ' + output1.minrate + ' on ' + output1.mindate + '</li>';
output1max = '<li>Maximum rate:   ' + output1.maxrate + ' on ' + output1.maxdate + '</li></ul>'
document.getElementById("output1txt").innerHTML = output1txt1 + output1txt2 + output1avg + output1min + output1max;

output2txt1 = 'As of ' + output2.lastrdate + ', the average rates for ' + output2.inpry + ' for the ' + output2.Pair;
output2txt2 = " pair based on year-to-date actual rates and analysts' forecasts are:";
output2avg = '<br><ul><li>Average rate:   ' + output2.avgrate + '</li>';
output2min = '<li>Minimum rate:   ' + output2.avgratemin + '</li>';
output2max = '<li>Maximum rate:   ' + output2.avgratemax + '</li></ul>'
document.getElementById("output2txt").innerHTML = output2txt1 + output2txt2 + output2avg + output2min + output2max;
