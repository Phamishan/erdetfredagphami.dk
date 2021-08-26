var date = new Date();
var weekNumber = date.getDay();
if (weekNumber == 5) {
    document.getElementById("yesno").innerText = "JA";
    document.getElementById("body").style.backgroundImage = "url('drunkdog.jpg')";
    document.getElementById("yesno").style.color = "black";
    document.getElementById("body").style.backgroundSize = "100%, 100%";
    document.getElementById("yesno").style.fontWeight = "bold";
    document.getElementById("yesno").style.fontSize = "100px";
    document.getElementById("text").style.fontWeight = "bold";
    document.getElementById("text").style.color = "black";
} else {
    document.getElementById("yesno").innerText = "NEJ";
    document.getElementById("yesno").style.fontSize = "100px"; 
}