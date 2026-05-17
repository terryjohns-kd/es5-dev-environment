console.log('Test has loaded');

function runTest() {
  console.log('Test has loaded based on vpv');
  var sidebar = document.querySelector('.col.col--sidebar');
  if (sidebar && !document.getElementById('test-variant-element')) {
    var newDiv = document.createElement('div');
    newDiv.id = 'test-variant-element';
    newDiv.appendChild(document.createTextNode('Test'));
    sidebar.appendChild(newDiv);
  }
}

function cleanupTest() {
  var testElement = document.getElementById('test-variant-element');
  if (testElement && testElement.parentNode) {
    testElement.parentNode.removeChild(testElement);
  }
}

function checkAndRunTest() {
  if (window.location.pathname.indexOf('/riders') !== -1) {
    runTest();
  } else {
    cleanupTest();
  }
}

WT.SPA.run({
  vpv: '/au/insurance/bike/riders',
  test: 'POC 181',
  variant: 'Variant 1',
  callback: checkAndRunTest
});

window.addEventListener('popstate', checkAndRunTest);

var originalPushState = history.pushState;
var originalReplaceState = history.replaceState;

history.pushState = function() {
  var r = originalPushState.apply(this, arguments);
  setTimeout(checkAndRunTest, 100);
  return r;
};

history.replaceState = function() {
  var r = originalReplaceState.apply(this, arguments);
  setTimeout(checkAndRunTest, 100);
  return r;
};

checkAndRunTest();


WT.SPA.run({
    vpv: '/au/insurance/bike/riders',
    test: 'Test 193',
    variant: 'Variant 1',
    callback: function () {
        // Control no code

    }
});