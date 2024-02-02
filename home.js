document.getElementById('random-color').addEventListener('mouseover', function() { //function used to change the color when hovered over my name
  const randomColor = '#'+Math.floor(Math.random()*16777215).toString(16);
  this.style.color = randomColor;
});

window.addEventListener('load', function() { /*loader function*/
    setTimeout(function() {
      var loader = document.getElementById('loader');
      loader.style.opacity = "0"; 
      setTimeout(function(){
        loader.style.display = "none";
      }, 500); 
    }, 800); 
  });

/*toggle feature*/
var num = 0; 
function button1() {
    num++;
    document.getElementById("output").innerHTML = "Press x " + num;
}
function toggleStyleSheet(){
    var styleSheet = document.getElementById("mainStyleSheet"); 
    var current = styleSheet.getAttribute("href");
    var newStyle;

    if (current.includes("home")){
        newStyle = "index.css";
    } 
    else{
        newStyle = "home.css";
    }
    styleSheet.setAttribute("href", newStyle);
    localStorage.setItem("current", newStyle);

}
window.onload = function(){
    var save = localStorage.getItem("current");
if (save && (save === "home.css" || save === "index.css")) {
    var styleSheet = document.getElementById("mainStyleSheet");
    styleSheet.setAttribute("href", save);
} else {
        document.getElementById("mainStyleSheet").setAttribute("href", "home.css");
    localStorage.setItem("current", "home.css");
}
    document.getElementById('toggleStyle').addEventListener('click', toggleStyleSheet);
}