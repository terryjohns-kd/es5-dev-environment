var h3Element = document.querySelector('#contact-us-page > div.page-content.w-full > div > div > h3');
if (h3Element) {
    h3Element.id = 'our-offices';
}

// Function to update the innerHTML when the container exists
var checkContainerExists = function () {
    var container = document.querySelector('.relative > .container');
    if (container) {
        container.innerHTML = '<div class="flex flex-col gap-4 lg:gap-6" id="forms-selector">' +
            '<div>' +
            '<h2 class="h4 mb-4 cro6">How can we help you today?</h2>' +
            '<select class="dropdown-select" id="form-selector">' +
            '<option value="contact_page">I’m interested in a Simonds home</option>' +
            '<option value="building_a_simonds_home">I’m building a Simonds home</option>' +
            '<option value="live_in_a_simonds_home">I live in a Simonds home</option>' +
            '<option value="feedback">General Feedback</option>' +
            '</select>' +
            '</div>' +
            '</div>';
    } else {
        // Retry after a short delay
        setTimeout(checkContainerExists, 100);
    }
};
checkContainerExists();
// Select all elements with the class 'card-content'
var cardContents = document.getElementsByClassName('card-content');

// Define the new HTML content as a single string
// Note: Single quotes inside the string (e.g., in onclick attribute) are escaped with backslashes
var newHTML = '<div class="containerx" style="" data-convert="">' +
    '<a class="cro-a" href="tel:1300 746 663">' +
    '<div class="card-small">' +
    '<svg class="card-icon" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80.02 80.01">' +
    '<defs>' +
    '<style>' +
    '.cls-1 {' +
    'fill: #fff;' +
    'stroke-width: 0px;' +
    '}' +
    '</style>' +
    '</defs>' +
    '<path class="cls-1" d="m25.09,29.39c1.53-1.52,3.27-3.23,4.37-4.44,1.46-1.6,1.28-4.09-.42-5.79l-.35-.35c-4.26-4.27-8.53-8.53-12.8-12.79-1.16-1.16-2.27-1.7-3.48-1.71-1.19,0-2.34.6-3.53,1.81-1.45,1.48-4.23,4.3-5.78,5.84-.03.03-.06.07-.09.1C.83,14.67.33,17.64.13,19.65c-.57,5.96.77,11.8,4.36,18.94,2.25,4.47,5.26,8.89,9.5,13.89,1.97,2.33,4.17,4.69,6.52,7.01,2.37,2.39,4.66,4.53,7.03,6.53,5,4.23,9.42,7.25,13.89,9.5,6.09,3.06,11.23,4.49,16.31,4.49.88,0,1.76-.04,2.63-.13,2.01-.19,4.98-.7,7.59-2.88.03-.03.07-.06.1-.09,1.54-1.54,4.36-4.33,5.84-5.78,1.21-1.18,1.8-2.34,1.8-3.53s-.55-2.31-1.71-3.48c-4.13-4.14-8.27-8.28-12.41-12.41l-.74-.74c-1.7-1.7-4.19-1.87-5.78-.42-1.21,1.1-2.94,2.85-4.46,4.39-.82.83-1.59,1.61-2.16,2.17-.94.82-1.78.87-2.83.18-2.75-1.8-5.2-3.46-7.38-5.42-1.82-1.64-3.53-3.35-5.13-4.98-1.61-1.59-3.33-3.31-4.96-5.12-1.96-2.18-3.62-4.63-5.42-7.38-.69-1.05-.64-1.9.12-2.77.62-.63,1.41-1.41,2.24-2.24h.01Zm-4.87,6.66c1.87,2.85,3.6,5.41,5.7,7.74,1.68,1.87,3.44,3.62,5.07,5.23,1.62,1.64,3.37,3.39,5.25,5.08,2.33,2.11,4.89,3.83,7.74,5.7,2.19,1.44,4.49,1.29,6.52-.49.64-.63,1.42-1.42,2.25-2.26,1.5-1.51,3.19-3.23,4.34-4.28.43-.39,1.18-.15,1.65.32l.74.74c4.14,4.13,8.27,8.27,12.4,12.41.55.55.84,1.02.84,1.34,0,.34-.32.82-.91,1.4-1.47,1.44-4.25,4.19-5.81,5.75-1.51,1.24-3.34,1.91-5.91,2.15-5.36.52-10.7-.74-17.31-4.06-4.25-2.14-8.48-5.03-13.29-9.1-2.29-1.94-4.53-4.02-6.84-6.36-2.3-2.27-4.43-4.57-6.35-6.83-4.08-4.82-6.97-9.04-9.11-13.3-3.32-6.61-4.57-11.95-4.06-17.31.25-2.57.91-4.39,2.15-5.91,1.56-1.56,4.31-4.34,5.75-5.81.58-.59,1.06-.9,1.4-.91.32,0,.79.29,1.34.84,4.27,4.26,8.53,8.52,12.8,12.79l.35.35c.47.47.72,1.21.32,1.65-1.05,1.15-2.76,2.84-4.26,4.33-.85.84-1.65,1.63-2.34,2.33-1.72,1.97-1.87,4.26-.43,6.46l.02.02Z"></path>' +
    '<path class="cls-1" d="m43.26,23.65c7.23,0,13.11,5.88,13.11,13.11,0,.83.67,1.5,1.5,1.5s1.5-.67,1.5-1.5c0-8.88-7.23-16.11-16.11-16.11-.83,0-1.5.67-1.5,1.5s.67,1.5,1.5,1.5Z"></path>' +
    '<path class="cls-1" d="m43.26,13.33c12.92,0,23.44,10.51,23.44,23.44,0,.83.67,1.5,1.5,1.5s1.5-.67,1.5-1.5c0-14.58-11.86-26.44-26.44-26.44-.83,0-1.5.67-1.5,1.5s.67,1.5,1.5,1.5Z"></path>' +
    '<path class="cls-1" d="m78.52,38.26c.83,0,1.5-.67,1.5-1.5C80.02,16.49,63.53,0,43.26,0c-.83,0-1.5.67-1.5,1.5s.67,1.5,1.5,1.5c18.62,0,33.76,15.15,33.76,33.76,0,.83.67,1.5,1.5,1.5Z"></path>' +
    '</svg>' +
    '<div class="subtitle">Call</div>' +
    '</div>' +
    '</a>' +
    '<a href="#contact-forms" class="scroll-link cro-a">' +
    '<div class="card-small">' +
    '<svg class="card-icon" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.25 80.01">' +
    '<defs>' +
    '<style>' +
    '.cls-1 {' +
    'fill: #fff;' +
    'stroke-width: 0px;' +
    '}' +
    '</style>' +
    '</defs>' +
    '<path class="cls-1" d="m81.25,19.15c.07-3.74-3.23-7.05-6.97-6.97H6.97c-1.84,0-3.57.71-4.89,2.01C.74,15.5,0,17.27,0,19.15v41.72c-.07,3.74,3.23,7.05,6.97,6.97h67.31c1.84,0,3.57-.71,4.88-2,1.34-1.32,2.09-3.09,2.09-4.97V19.15h0Zm-27.14,20.86l24.05-23.08c.39.67.59,1.43.59,2.22v41.72c0,.79-.21,1.55-.59,2.21l-24.04-23.07Zm20.17-25.33c.73,0,1.44.18,2.07.51l-34.12,32.75c-.9.86-2.32.86-3.21,0L4.9,15.19c.63-.34,1.34-.51,2.07-.51h67.3ZM3.1,63.08c-.39-.67-.59-1.43-.59-2.21V19.15c0-.79.21-1.55.59-2.22l24.05,23.08L3.1,63.08h0Zm3.88,2.25c-.73,0-1.44-.18-2.07-.51l24.05-23.08,8.34,8c1.86,1.8,4.82,1.79,6.68,0l8.34-8,24.05,23.08c-.63.34-1.34.51-2.07.51H6.97Z"></path>' +
    '</svg>' +
    '<div class="subtitle">Enquire</div>' +
    '</div>' +
    '</a>' +
    '<a href="#" onclick="Intercom(\'show\'); return false;" class="cro-a">' +
    '<div class="card-small ">' +
    '<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80.02 80.01" class="card-icon">' +
    '<defs>' +
    '<style>' +
    '.cls-1 {' +
    'fill: #fff;' +
    'stroke-width: 0px;' +
    '}' +
    '</style>' +
    '</defs>' +
    '<path class="cls-1" d="m61.62.4H18.4C11.39.4,5.69,6.11,5.69,13.11v35.99c0,6.37,4.68,11.66,10.86,12.56v15.03c0,1.63,1.29,2.91,2.92,2.91.95,0,1.82-.46,2.37-1.25l11.51-16.55h28.26c7.01,0,12.71-5.7,12.71-12.71V13.11c0-7.01-5.7-12.71-12.71-12.71h0Zm10.07,48.7c0,5.55-4.52,10.07-10.07,10.07h-28.95c-.43,0-.84.21-1.08.57l-11.9,17.11c-.06.08-.11.12-.2.12-.03,0-.28,0-.28-.27v-16.23c0-.7-.55-1.29-1.26-1.32-5.38-.25-9.6-4.66-9.6-10.04V13.11c0-5.55,4.52-10.07,10.07-10.07h43.21c5.55,0,10.07,4.52,10.07,10.07v35.99Z"></path>' +
    '<path class="cls-1" d="m64.87,14.64H26c-.73,0-1.33.6-1.33,1.33s.6,1.33,1.33,1.33h38.87c.73,0,1.33-.6,1.33-1.33,0-.73-.59-1.33-1.33-1.33h0Z"></path>' +
    '<path class="cls-1" d="m64.87,29.31H26c-.73,0-1.33.6-1.33,1.33s.6,1.33,1.33,1.33h38.87c.73,0,1.33-.6,1.33-1.33,0-.73-.59-1.33-1.33-1.33h0Z"></path>' +
    '<path class="cls-1" d="m64.87,43.98H26c-.73,0-1.33.6-1.33,1.33s.6,1.33,1.33,1.33h38.87c.73,0,1.33-.6,1.33-1.33,0-.73-.59-1.33-1.33-1.33h0Z"></path>' +
    '</svg>' +
    '<div class="subtitle">Live chat</div>' +
    '</div>' +
    '</a>' +
    '<a href="#our-offices" class="scroll-link cro-a">' +
    '<div class="card-small">' +
    '<svg class="card-icon" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 80.02 80.01">' +
    '<defs>' +
    '<style>' +
    '.cls-1 {' +
    'fill: #fff;' +
    'stroke-width: 0px;' +
    '}' +
    '</style>' +
    '</defs>' +
    '<path class="cls-1" d="m38.84,78.69c.32.32.75.48,1.17.48s.84-.16,1.16-.47c.27-.27,6.75-6.63,13.33-15.94,8.92-12.62,13.44-24.06,13.44-33.97,0-15.4-12.53-27.93-27.93-27.93S12.08,13.38,12.08,28.78c0,9.74,4.52,21.12,13.44,33.81,6.57,9.36,13.05,15.82,13.32,16.1h0Zm1.17-74.52c13.57,0,24.61,11.04,24.61,24.61,0,11.47-6.96,23.74-12.8,32.01-4.79,6.79-9.64,12.08-11.81,14.34-5.02-5.32-24.62-27.33-24.62-46.35,0-13.57,11.04-24.61,24.61-24.61h0Z"></path>' +
    '<path class="cls-1" d="m54.4,27.27c0-7.94-6.46-14.4-14.4-14.4s-14.4,6.46-14.4,14.4,6.46,14.4,14.4,14.4,14.4-6.46,14.4-14.4Zm-14.4,11.07c-6.11,0-11.07-4.97-11.07-11.07s4.97-11.07,11.07-11.07,11.07,4.97,11.07,11.07-4.97,11.07-11.07,11.07Z"></path>' +
    '</svg>' +
    '<div class="subtitle" id="contact-forms">Where we are</div>' +
    '</div>' +
    '</a>' +
    '</div>';

// Loop through each element with the class 'card-content' and replace its HTML
for (var i = 0; i < cardContents.length; i++) {
    cardContents[i].outerHTML = newHTML;
}
var checkDropdownExists = function () {
    // Get the dropdown element
    var dropdown = document.getElementById('form-selector');

    // Check if the dropdown element exists
    if (dropdown) {
        console.log('Dropdown element found');  // Debugging line

        // Get the div elements
        var divs = [
            document.querySelector('#contact-us-page > div:nth-child(3)'),
            document.querySelector('#contact-us-page > div:nth-child(4)'),
            document.querySelector('#contact-us-page > div:nth-child(5)'),
            document.querySelector('#contact-us-page > div:nth-child(6)')
        ];

        // Check if all divs exist
        if (divs.every(function (div) { return div !== null; })) {
            console.log('All div elements found');  // Debugging line

            // Function to update the display based on the selected option
            function updateDisplay() {
                var selectedValue = dropdown.value;
                console.log('Selected value:', selectedValue); // Log selected value

                // Loop through divs and update their display styles
                divs.forEach(function (div, index) {
                    if (selectedValue === 'contact_page' && index === 0) {
                        div.style.display = 'block';
                    } else if (selectedValue === 'building_a_simonds_home' && index === 1) {
                        div.style.display = 'block';
                    } else if (selectedValue === 'live_in_a_simonds_home' && index === 2) {
                        div.style.display = 'block';
                    } else if (selectedValue === 'feedback' && index === 3) {
                        div.style.display = 'block';
                    } else {
                        div.style.display = 'none';
                    }
                });
            }

            // Initialize the display on page load
            updateDisplay();

            // Add event listener to update display when the selection changes
            dropdown.addEventListener('change', updateDisplay);
        } else {
            console.log('Some div elements are missing');  // If any div is missing
        }
    } else {
        // Retry after a short delay
        setTimeout(checkDropdownExists, 100);
    }
};
checkDropdownExists();