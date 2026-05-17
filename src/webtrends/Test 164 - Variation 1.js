function simulateClickOnQuickSearch() {
    var attempts = 0;
    var maxAttempts = 10;

    function tryClick() {
        var monthlyRadio = document.getElementById('monthly');
        var yearlyRadio = document.getElementById('yearly');

        if (monthlyRadio && yearlyRadio) {
            var pref = sessionStorage.getItem('paymentChoice');

            // If user explicitly chose yearly earlier in this session, respect it.
            if (pref === 'yearly') {
                console.log('Respecting prior yearly choice.');
                return;
            }

            // Otherwise default to monthly (even if yearly is the DOM default)
            if (!monthlyRadio.checked) {
                console.log('Setting to monthly on first visit this session.');
                monthlyRadio.click();
                // Remember so we don't flip back on re-entry within the session
                sessionStorage.setItem('paymentChoice', 'monthly');
            }
            return;
        }

        if (attempts < maxAttempts) {
            attempts++;
            setTimeout(tryClick, 100);
        } else {
            console.log('Could not find monthly/yearly radios after retries.');
        }
    }

    tryClick();
}

function insertMonthlyNoteAfterContainer() {
  var NOTE_ID = 'kraken-monthly-note';
  if (document.getElementById(NOTE_ID)) return; // avoid duplicates

  var monthly = document.getElementById('monthly');
  if (!monthly) return; // DOM not ready yet

  // Simple ancestor walker with a predicate (ES5)
  function findAncestor(el, predicate) {
    while (el && el !== document) {
      if (predicate(el)) return el;
      el = el.parentNode;
    }
    return null;
  }

  // 1) fieldset[aria-label="payment schedule"]
  var fieldset = findAncestor(monthly, function (n) {
    return n.nodeName === 'FIELDSET' && n.getAttribute('aria-label') === 'payment schedule';
  });
  if (!fieldset) return;

  // 2) The specific container div[data-ads="Box"][data-testid="box-test"] around that fieldset
  var container = findAncestor(fieldset, function (n) {
    return n.nodeName === 'DIV' &&
      n.getAttribute('data-ads') === 'Box' &&
      n.getAttribute('data-testid') === 'box-test';
  });
  if (!container || !container.parentNode) return;

  // Build the note
  var note = document.createElement('div');
  note.id = NOTE_ID;
  note.style.marginTop = '20px';
  note.style.fontSize = '14px';
  note.appendChild(document.createTextNode('There’s no extra cost if you decide to pay by the month.'));

  // Insert after the container
  if (container.insertAdjacentElement) {
    container.insertAdjacentElement('afterend', note);
  } else {
    container.parentNode.insertBefore(note, container.nextSibling);
  }
}

// Retry wrapper for SPA timing
function ensureMonthlyNote() {
  var attempts = 0, maxAttempts = 20, delay = 150;
  (function tick() {
    insertMonthlyNoteAfterContainer();
    if (document.getElementById('kraken-monthly-note')) return;
    if (attempts++ < maxAttempts) setTimeout(tick, delay);
  })();
}

// Track explicit user changes only
document.addEventListener('change', function (e) {
    var t = e.target || e.srcElement;
    if (!t) return;
    if (t.id === 'monthly' || t.id === 'yearly') {
        sessionStorage.setItem('paymentChoice', t.id);
        console.log('Payment choice saved as: ' + t.id);
    }
});

console.log('Test 164 - Variation 1 outside vpv');

WT.SPA.run({
    vpv: '/au/quote/business/quote',
    test: 'Test 164',
    variant: 'Variant 1',
    callback: function () {
        console.log('Test 164 - Variation 1');
        simulateClickOnQuickSearch();
        ensureMonthlyNote();
    }
});