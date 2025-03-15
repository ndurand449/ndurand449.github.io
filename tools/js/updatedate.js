//----------------------------
//-- My Tools - v 10.4      --
//-- updatedate.js          --
//-- last update 2025-03-15 --
//----------------------------

//-- Current year for footer for html files

var d = new Date();
copyyear = d.getFullYear();
document.getElementById("copy").innerHTML = "&copy; " + copyyear + " - ND - version 10.4";
