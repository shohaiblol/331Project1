window.addEventListener('load', function() { //made a load function that fades into the page so it looks smoother than an instant page open
    setTimeout(function() {
      var loader = document.getElementById('loader');
      loader.style.opacity = "0"; 
      setTimeout(function(){
        loader.style.display = "none"; 
      }, 500); 
    }, 800); 
  });
  