WT.SPA.on('#/.*', function() {
    var ele = document.querySelector('h2, h3');
    if (ele) {
      ele.innerText = 'DEV2 (change H2 or H3)';
      console.log('DEV2 (on all pages)');
      WT.trackGA.dlPush('DEV2', 'Control');
    }
  });