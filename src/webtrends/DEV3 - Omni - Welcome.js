WT.SPA.on('#/welcome', function(){
    document.querySelectorAll('h1').forEach(function(el) {
      if (el) {
        el.innerHTML = 'DEV3 VARIATION 1';
        console.log('DEV3 VARIATION 1');
        WT.trackGA.dlPush('DEV3', 'VARIATION 1');
      }
    });  
  });