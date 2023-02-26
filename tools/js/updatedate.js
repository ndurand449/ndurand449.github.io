//----------------------------
//-- My Tools - v 2.0       --
//-- last update 2023-02-26 --
//----------------------------

//-- Current year for footer for html files

var d = new Date();
copyyear = d.getFullYear();
console.log(copyyear);


//-- Data extraction from picture file to build: "Updated on date" - currency.html

var reqcur = new XMLHttpRequest();
reqcur.open('GET', 'https://ndurand449.github.io/tools/img/analyze1py.PNG', false);
reqcur.send(null);
gmttextcur = reqcur.getResponseHeader('last-modified');
updatecur = Intl.DateTimeFormat('en-US', {timeZone: "America/New_York"}).format(Date.parse(gmttextcur))


//-- Data extraction from picture file to build: "Updated on date" - treasuries.html

var reqtre = new XMLHttpRequest();
reqtre.open('GET', 'https://ndurand449.github.io/tools/img/DailyAll.PNG', false);
reqtre.send(null);
gmttexttre = reqcur.getResponseHeader('last-modified');
updatetre = Intl.DateTimeFormat('en-US', {timeZone: "America/New_York"}).format(Date.parse(gmttexttre))
