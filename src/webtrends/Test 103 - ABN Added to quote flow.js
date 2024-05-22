function handleCheckboxChange() {
    if (this.checked) {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'engagement_tracking',
            'eventCategory': 'engagement tracking change',
            'eventAction': 'No ABN',
            'eventLabel': 'TRUE',
            'nonInteraction': false
        });
    }
}

function createAbnFields() {
    var newDiv = document.createElement('div');
    newDiv.classList.add('row');
    newDiv.id = 'abnRow';
    var colQuestion = document.createElement('div');
    colQuestion.classList.add('col-sm-5');
    var qbeQuestion = document.createElement('qbe-question');
    qbeQuestion.textContent = 'What\'s your ABN?';
    colQuestion.appendChild(qbeQuestion);
    var colAnswer = document.createElement('div');
    colAnswer.classList.add('col-sm-7');
    var qbeAnswer = document.createElement('qbe-answer');
    var abnField = document.createElement('input');
    abnField.setAttribute('type', 'text');
    abnField.setAttribute('tabindex', '4');
    abnField.setAttribute('id', 'abn');
    abnField.setAttribute('name', 'abn');
    abnField.setAttribute('class', 'form-control qbe-half');
    abnField.setAttribute('placeholder', 'ABN');
    var abnCheckbox = document.createElement('input');
    abnCheckbox.setAttribute('type', 'checkbox');
    abnCheckbox.setAttribute('id', 'noAbn');
    abnCheckbox.setAttribute('name', 'noAbn');
    abnCheckbox.style.marginRight = '10px';
    var abnLabel = document.createElement('label');
    abnLabel.setAttribute('for', 'noAbn');
    abnLabel.textContent = 'I don\'t have an ABN';
    qbeAnswer.appendChild(abnField);
    qbeAnswer.appendChild(abnCheckbox);
    qbeAnswer.appendChild(abnLabel);
    colAnswer.appendChild(qbeAnswer);
    newDiv.appendChild(colQuestion);
    newDiv.appendChild(colAnswer);
    return newDiv;
}

function displayOrHideAbnFields() {
    var selectedOption = selectElement.value;
    var existingAbnField = document.getElementById('abnRow');
    if (selectedOption !== 'PRIV' && selectedOption !== 'PNSR' && selectedOption !== 'PNIC' && selectedOption !== '') {
        if (!existingAbnField) {
            var abnRow = createAbnFields();
            var q4Element = document.getElementById('q4');
            q4Element.insertAdjacentHTML('afterend', abnRow.outerHTML);
            var abnCheckbox = document.getElementById('noAbn');
            var abnField = document.getElementById('abn');
            var checkbox = document.getElementById('noAbn');
            if (checkbox) {
                checkbox.addEventListener('change', handleCheckboxChange);
            }
            abnCheckbox.addEventListener('change', function () {
                abnField.disabled = abnCheckbox.checked;
                if (abnCheckbox.checked) {
                    abnField.value = ''; // Set the value of the ABN field to null if checkbox is checked
                    localStorage.removeItem('abnFieldValue'); // Remove the abnFieldValue from local storage if checkbox is checked
                }
                localStorage.setItem('abnCheckboxState', abnCheckbox.checked);
            });
            abnField.addEventListener('input', function () {
                localStorage.setItem('abnFieldValue', abnField.value);
            });
        }
    } else {
        if (existingAbnField) {
            existingAbnField.remove();
        }
    }
}

function checkCheckboxState() {
    var storedCheckboxState = localStorage.getItem('abnCheckboxState');
    var abnCheckbox = document.getElementById('noAbn');
    var abnField = document.getElementById('abn');
    if (abnCheckbox) {
        if (storedCheckboxState !== null) {
            abnCheckbox.checked = JSON.parse(storedCheckboxState);
        } else {
            abnCheckbox.checked = false; // Default state
            localStorage.setItem('abnCheckboxState', abnCheckbox.checked);
        }
        abnField.disabled = abnCheckbox.checked;
    }
}

function checkTextBoxValue() {
    var storedTextBoxValue = localStorage.getItem('abnFieldValue');
    var abnField = document.getElementById('abn');
    if (abnField) {
        if (storedTextBoxValue !== null) {
            abnField.value = storedTextBoxValue;
        } else {
            abnField.value = ''; // Default value if needed
            localStorage.setItem('abnFieldValue', abnField.value);
        }
    }
}
try {
    var selectElement = document.getElementById('a4');


    selectElement.addEventListener('change', function () {
        displayOrHideAbnFields();
    });
    displayOrHideAbnFields();
    checkCheckboxState();
    checkTextBoxValue();
} catch (error) {
    window.dataLayer.push({
        event: 'standard',
        eventCategory: 'error',
        eventAction: 'Webtrends Optimize Test 103',
        eventLabel: error,
        nonInteraction: true,
    });
}