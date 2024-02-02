//getting elements by their ids and classes
var backgroundText = document.getElementById('background-text');
var aboutText = document.getElementById('about-text');
var aboutImage = document.querySelector('.about-image');
var contentWrapper = document.getElementById('content-wrapper');

function showBackground() {//function to show the background text and hide the about section when clicked 
  aboutText.classList.add('about-text-fade-out');
  aboutImage.classList.add('about-image-fade-out'); 

  aboutText.style.pointerEvents = 'none';//disabling pointer actions during animation so it doesnt glitch or something freaky

  aboutText.addEventListener('animationend', function() {
      aboutText.style.display = 'none';
      aboutText.classList.remove('about-text-fade-out');
      backgroundText.style.display = 'block';
      backgroundText.classList.add('background-text-fade-in');
      aboutText.style.pointerEvents = 'auto';
  }, { once: true });

  aboutImage.addEventListener('animationend', function() {
      aboutImage.style.display = 'none';
      aboutImage.classList.remove('about-image-fade-out');
  }, { once: true });
}

function showAbout() {//function to show the about section and hide the background text when clicked again
  backgroundText.classList.add('background-text-fade-out');
  aboutText.style.pointerEvents = 'none';

  backgroundText.addEventListener('animationend', function() {
      backgroundText.style.display = 'none';
      backgroundText.classList.remove('background-text-fade-out');
      aboutText.style.display = 'block';
      aboutImage.style.display = 'block'; 
      aboutImage.classList.add('about-image-fade-in'); 

      var fullText = aboutText.textContent; //yyping effect for the about text
      aboutText.textContent = '';

      var i = 0;
      var typingInterval = setInterval(function() {
          if (i < fullText.length) {
              aboutText.textContent += fullText[i];
              i++;
          } else {
              clearInterval(typingInterval);
              aboutText.style.pointerEvents = 'auto';
          }
      }, 3);
  }, { once: true });
}

//event listeners for clicking on the background and about texts to start the transitions
backgroundText.addEventListener('click', showAbout);
aboutText.addEventListener('click', showBackground);

window.addEventListener('load', function() { //load animation
  setTimeout(function() {
      document.body.classList.add('fade-in');
  }, 800);
});

/*loader function*/
var num = 0; 
function button1() {
    num++;
    document.getElementById("output").innerHTML = "Press x " + num;
}
function toggleStyleSheet(){
    var styleSheet = document.getElementById("mainStyleSheet"); 
    var current = styleSheet.getAttribute("href");
    var newStyle;

    if (current.includes("about")){
        newStyle = "me.css";
    } 
    else{
        newStyle = "about.css";
    }
    styleSheet.setAttribute("href", newStyle);
    localStorage.setItem("current", newStyle);

}
window.onload = function() {
    var savedStyle = localStorage.getItem("current");
    var styleSheet = document.getElementById("mainStyleSheet");

    // Check if the saved style is applicable for the current page
    if (savedStyle && (savedStyle === "about.css" || savedStyle === "me.css")) {
        styleSheet.setAttribute("href", savedStyle);
    } else {
        // Default to 'about.css' if no suitable saved style is found for this page
        styleSheet.setAttribute("href", "about.css");
        localStorage.setItem("current", "about.css");
    }

    document.getElementById('toggleStyle').addEventListener('click', toggleStyleSheet);
};
