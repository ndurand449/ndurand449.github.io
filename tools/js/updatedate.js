//----------------------------
//-- My Tools - v 6.0       --
//-- updatedate.js          --
//-- last update 2023-03-18 --
//----------------------------

//-- Current year for footer for html files

var d = new Date();
copyyear = d.getFullYear();
document.getElementById("copy").innerHTML = "&copy; " + copyyear + "- ND - version 6.0";
