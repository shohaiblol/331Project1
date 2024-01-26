window.addEventListener('load', function() {
    setTimeout(function() {
      var loader = document.getElementById('loader');
      loader.style.opacity = "0"; 
      setTimeout(function(){
        loader.style.display = "none";
      }, 500); 
    }, 800); 
  });
  