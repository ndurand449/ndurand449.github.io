//----------------------------
//-- My Tools - v 7.0       --
//-- updatedate.js          --
//-- last update 2023-03-30 --
//----------------------------

//-- Current year for footer for html files

var d = new Date();
copyyear = d.getFullYear();
document.getElementById("copy").innerHTML = "&copy; " + copyyear + " - ND - version 7.0";
