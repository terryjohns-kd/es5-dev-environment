function setupSelect(selectElementId) {
    var selectElement = document.getElementById(selectElementId);

    // Create the new "I don't know" option element
    var newOption = document.createElement('option');
    newOption.value = '0'; // Assign a unique value for "I don't know"
    newOption.textContent = 'I don\'t know';
    selectElement.appendChild(newOption); // Append the new option to the select list

    // Setup an event listener for changes on the select list
    selectElement.onchange = function () {
        var form2 = document.getElementById('form-2');
        var form3 = document.getElementById('form-3');

        // Check if the 'I don't know' option is selected
        if (selectElement.value === '0') {
            // Hide form2 and show form3
            form2.style.display = 'none';
            form3.style.display = 'block';
        } else {
            // Optional: Show form2 and hide form3 if another option is selected
            form2.style.display = 'block';
            form3.style.display = 'none';
        }
    };
}
WT.SPA.run({
    vpv: '/8122/CTP/Step1a',
    test: 'Test 128',
    variant: 'Variation 1',
    callback: function () {


        // Add mobile intro text
        var div2 = document.querySelector('.visible-xs.qbe-drop-intro');
        var pnew = document.createElement('p');
        pnew.className = 'cro5';
        pnew.textContent = 'Using your Plate Number, NSW Licence Number, VIN, or customer number';
        div2.insertBefore(pnew, div2.firstChild);

        // Update TfNSW text
        var div = document.getElementById('keys_text_center');
        div.textContent = div.textContent.replace('TfNSW', 'Transport for NSW');

        // Update page title
        var targetElement = document.querySelector('#gsp > div.qbe-content > div > div.col-sm-5.qbe-col-slim-right > qbe-question > div.qbe-text-larger');
        if (targetElement) {
            targetElement.textContent = 'Let\'s create your quote';
        }

        // Setup the select elements
        setupSelect('select-vehicle');
        setupSelect('select-personal');

        // Create and setup the "Add details" link
        var addDetailsLink = document.createElement('a');
        addDetailsLink.href = '#';
        addDetailsLink.textContent = 'I have my identifiers, show me the previous form';
        addDetailsLink.id = 'add-details-link';

        // Create a new div element with a class of 'cr02'
        var linkContainer = document.createElement('div');
        linkContainer.className = 'cro2';

        // Append the addDetailsLink to the newly created div
        linkContainer.appendChild(addDetailsLink);

        // Find the insertion point and add the link to the document
        var form3Content = document.getElementById('form-3-content');
        form3Content.parentNode.insertBefore(linkContainer, form3Content.nextSibling);

        // Setup click event for the "Add details" link
        addDetailsLink.onclick = function (event) {
            event.preventDefault(); // Prevent the default link action

            // Show form-2 and hide form-3
            document.getElementById('form-2').style.display = 'block';
            document.getElementById('form-3').style.display = 'none';

            // Reset the select elements
            document.getElementById('select-vehicle').selectedIndex = 0;
            document.getElementById('select-personal').selectedIndex = 0;
        };
    }
});