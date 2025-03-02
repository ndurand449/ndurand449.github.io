//----------------------------
//-- My Tools - v 10.0       --
//-- updatedate.js          --
//-- last update 2025-02-25 --
//----------------------------

//-- Current year for footer for html files

var d = new Date();
copyyear = d.getFullYear();
document.getElementById("copy").innerHTML = "&copy; " + copyyear + " - ND - version 10.0";
