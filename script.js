// Last Modified
var date = document.lastModified; 
document.getElementById("lastModified").textContent = "Last Modified: " + date;
// Dynamic Year
const year = new Date();
document.getElementById("dynamicYear").textContent = year.getFullYear();