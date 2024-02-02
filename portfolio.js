window.addEventListener('load', function() { /*loader function*/
    setTimeout(function() {
      var loader = document.getElementById('loader');
      loader.style.opacity = "0"; 
      setTimeout(function(){
        loader.style.display = "none";
      }, 500); 
    }, 800); 
  });
  
/*toggle function*/
  var num = 0; 
function button1() {
    num++;
    document.getElementById("output").innerHTML = "Press x " + num;
}
function toggleStyleSheet(){
    var styleSheet = document.getElementById("mainStyleSheet"); 
    var current = styleSheet.getAttribute("href");
    var newStyle;

    if (current.includes("portfolio")){
        newStyle = "projects.css";
    } 
    else{
        newStyle = "portfolio.css";
    }
    styleSheet.setAttribute("href", newStyle);
    localStorage.setItem("current", newStyle);

}
window.onload = function(){
    var save = localStorage.getItem("current");
if (save && (save === "portfolio.css" || save === "projects.css")) {
    var styleSheet = document.getElementById("mainStyleSheet");
    styleSheet.setAttribute("href", save);
} else {
        document.getElementById("mainStyleSheet").setAttribute("href", "portfolio.css");
    localStorage.setItem("current", "portfolio.css");
}
    document.getElementById('toggleStyle').addEventListener('click', toggleStyleSheet);
}