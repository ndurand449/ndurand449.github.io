//----------------------------
//-- My Tools - v 4.0       --
//-- updatedate.js          --
//-- last update 2023-03-06 --
//----------------------------

//-- Current year for footer for html files

var d = new Date();
copyyear = d.getFullYear();
document.getElementById("copy").innerHTML = "&copy; " + copyyear + "- ND - version 4.0";
