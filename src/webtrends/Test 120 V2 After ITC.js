var firstBannerBadge = document.querySelector('.banner-badge');
var anonIdentifier = document.querySelector('h1').innerText;
var content = firstBannerBadge.textContent.trim();
var valuesToCheck = ['Usage PRIV', 'Usage PNSR', 'Usage PNIC'];
var doesNotEqualAny = true;
for (var i = 0; i < valuesToCheck.length; i++) {
    if (content === valuesToCheck[i]) {
        doesNotEqualAny = false;
        break;
    }
}

function checkRadioButtons() {
    var radioButtons = divQ2.querySelectorAll('input[type="radio"]');
    for (var i = 0; i < radioButtons.length; i++) {
        if (radioButtons[i].checked) {
            newDiv.style.display = 'block';
            break;
        }
    }
}

function saveState() {
    var abnValue = textField.value;
    var checkboxChecked = checkbox.checked;
    sessionStorage.setItem('abnValue', abnValue);
    sessionStorage.setItem('checkboxChecked', checkboxChecked);
}

function restoreState() {
    var savedAbnValue = sessionStorage.getItem('abnValue');
    var savedCheckboxChecked = sessionStorage.getItem('checkboxChecked') === 'true';

    if (savedAbnValue !== null) {
        textField.value = savedAbnValue;
    }

    checkbox.checked = savedCheckboxChecked;
    textField.disabled = savedCheckboxChecked;
}
try {
    if (doesNotEqualAny && anonIdentifier !== 'Identification') {
            /* @wt.parse="vm" */
    var map = {
        'enteredABN': '#a1',
        'clickedNoABN': '#cro2Checkbox'
    };
    document.addEventListener('click', function(e) {
        if (!e.target || !e.target.closest) return;
        for (var cp in map) {
            if (e.target.closest(map[cp])) {
                WT.trackEvent({
                    testAlias: '$testAlias',
                    conversionPoint: cp
                });
            }
        }
    });
    var newDiv = document.createElement('div');
    newDiv.id = 'cro2';
    newDiv.style.display = 'none';
    newDiv.innerHTML =
        '<div class="col-sm-5" style="padding-top: 10px">' +
        '    <qbe-question>What is your ABN?</qbe-question>' +
        '</div>' +
        '<div class="col-sm-7" style="padding-top: 10px">' +
        '    <qbe-answer>' +
        '        <input type="text" tabindex="4" id="a1" name="a1" class="form-control qbe-half" maxlength="12" placeholder="Enter your ABN" required="">' +
        '        <input type="checkbox" id="cro2Checkbox"><span class="cro3">I don\'t have an ABN</span>' +
        '    </qbe-answer>' +
        '</div>';

    var divQ2 = document.getElementById('q2');

    if (divQ2) {
        divQ2.appendChild(newDiv);

        var radioButtons = divQ2.querySelectorAll('input[type="radio"]');
        for (var j = 0; j < radioButtons.length; j++) {
            radioButtons[j].addEventListener('change', function () {
                newDiv.style.display = 'block';
            });
        }

        checkRadioButtons();
    }

    var checkbox = document.getElementById('cro2Checkbox');
    var textField = document.getElementById('a1');

    checkbox.addEventListener('change', function () {
        textField.disabled = this.checked;
        saveState();
    });

    textField.addEventListener('input', saveState);

    document.addEventListener('DOMContentLoaded', function () {
        restoreState();
    });

    if (document.readyState === 'complete' || document.readyState === 'interactive') {
        restoreState();
    }
}
WT.trackGA.dlPush('Test 120', 'Variation 1');
} catch (error) {
    window.dataLayer.push({
        event: 'standard',
        eventCategory: 'error',
        eventAction: 'Webtrends Optimize - Test 120',
        eventLabel: error.toString(), // Ensure error is converted to a string if necessary
        nonInteraction: true,
    });
}