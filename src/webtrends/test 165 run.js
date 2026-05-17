

WT.SPA.run({
  vpv: '\/au\/comprehensive-car-insurance-save75',
  test: 'Test 165',
  variant: 'Variation 1',
  callback: function () {
    var h1Test = document.querySelector('h1');
    if (h1Test) {
      h1Test.textContent = 'Buy online and save $75 on new Comprehensive Car insurance*';
    }
  }
});



WT.SPA.run({
  vpv: '\/au\/comprehensive-car-insurance-save75',
  test: 'Test 165',
  variant: 'Variation 1',
  callback: function () {
    var h1Test = document.querySelector('h1');
    if (h1Test) {
      h1Test.textContent = 'Buy online and save $75 on new Comprehensive Car insurance*';
    }
  }
});




helpDiv.childNodes.forEach(function (node) {
  if (node.nodeType === 3 && node.nodeValue.trim() === 'Short term policy registration') {
    node.nodeValue = 'You chose a 6 month policy';
    var strong = document.createElement('strong');
    strong.textContent = node.nodeValue;
    node.replaceWith(strong);
  }
});



WT.SPA.on(/^\/au\/green-slip-insurance\/nsw\/ctp\/(renewal\/(landing|retrieve-policy|details-confirm|details-summary|payment|confirmation|details-email|details-email-confirm|demerit-points-status|email-receipt|email-receipt-confirmation)|generic\/(contact-us|help))$/, function () {
  try {
    console.log('WTO: Test 160 - SPA.on() match /au/green-slip-insurance/nsw/ctp/renewal/landing');
    WT.trackGA.dlPush('Test 160', 'Control');
  } catch (e) {
    window.dataLayer.push({
      event: 'webtrends_error',
      eventAction: 'webtrends optimize experiment 160 - CTP Renewals',
      eventLabel: e,
    });
  }
});