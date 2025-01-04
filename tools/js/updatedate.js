//----------------------------
//-- My Tools - v 9.0       --
//-- updatedate.js          --
//-- last update 2025-01-04 --
//----------------------------

//-- Current year for footer for html files

var d = new Date();
copyyear = d.getFullYear();
document.getElementById("copy").innerHTML = "&copy; " + copyyear + " - ND - version 9.0";
