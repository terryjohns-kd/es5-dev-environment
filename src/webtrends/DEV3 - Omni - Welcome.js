WT.SPA.on('#/welcome', function(){
    document.querySelectorAll('h1').forEach(function(el) {
      if (el) {
        el.innerHTML = 'DEV3 VARIATION';
        console.log('DEV3 VARIATION');
        WT.trackGA.dlPush('DEV3', 'VARIATION');
      }
    });  
  });