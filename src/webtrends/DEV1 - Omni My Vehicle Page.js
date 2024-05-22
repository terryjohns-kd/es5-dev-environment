WT.SPA.on('/au/portal/quote/vehicle#/my-vehicle', function(){
    var el = document.querySelector('.stepItemText');
    if (el) {
      document.querySelector('.stepItemText').innerText = 'DEV1 VARIATION';
      console.log('DEV1 VARIATION');
      WT.trackGA.dlPush('DEV1', 'Variation');
    }
  });