// Array of button data (text and URL)
var buttonsData = [
    { text: 'View all Home Designs', url: '/vic/house-designs' },
    { text: 'View all House and Land', url: '/vic/house-and-land' },
    { text: 'New Display Openings', url: '#m0m32i6e' },
    { text: 'Helpful Resources', url: '#m0m2r2gg' }
];

// Function to create and insert the buttons
function insertButtons() {
    // Check if the button container already exists
    var buttonContainer = document.querySelector('.button-container');
    if (!buttonContainer) {
        // Create the button container div if it doesn't exist
        buttonContainer = document.createElement('div');
        buttonContainer.classList.add('button-container');
        buttonContainer.style.display = 'flex';
        buttonContainer.style.justifyContent = 'space-between';
        buttonContainer.style.position = 'absolute';
        buttonContainer.style.bottom = '10px';
        buttonContainer.style.left = '100px';
        buttonContainer.style.right = '100px';
        buttonContainer.style.zIndex = '1';
        buttonContainer.style.gap = '10px';

        // Create and append the buttons based on the data
        buttonsData.forEach(function (data, index) {
            var button = document.createElement('a');
            button.href = data.url;
            button.className = 'btn btn-accent justify-center cro3-1 btn-' + (index + 1);
            button.style.flex = '1';
            button.innerHTML = data.text + '<span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 6L15 12L9 18" stroke="#404040" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>';
            buttonContainer.appendChild(button);
        });

        // Get the .header-video div
        var headerVideoDiv = document.querySelector('.header-video');

        // Append the button container before the closing </div> of .header-video
        if (headerVideoDiv) {
            headerVideoDiv.appendChild(buttonContainer); 
        } else {
            console.error('header-video div not found');
        }
    }

    // Apply text changes based on screen width
    updateButtonText();
}

// Function to update button text based on screen width
function updateButtonText() {
    var btn1 = document.querySelector('.btn-1');
    var btn2 = document.querySelector('.btn-2');

    // Clear existing content before updating
    btn1.innerHTML = '';
    btn2.innerHTML = '';

    if (window.innerWidth < 699) {
        // Set new content for smaller screens
        btn1.innerHTML = 'Home Designs<span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 6L15 12L9 18" stroke="#404040" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>';
        btn2.innerHTML = 'House and Land<span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 6L15 12L9 18" stroke="#404040" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>';
    } else {
        // Restore original content for larger screens
        btn1.innerHTML = 'View all Home Designs<span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 6L15 12L9 18" stroke="#404040" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>';
        btn2.innerHTML = 'View all House and Land<span><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9 6L15 12L9 18" stroke="#404040" stroke-linecap="round" stroke-linejoin="round"></path></svg></span>';
    }
}

// Function to periodically check for header-video div and insert buttons
function checkForHeaderVideo() {
    var intervalId = setInterval(function () {
        try {
            var headerVideoDiv = document.querySelector('.header-video');
            if (headerVideoDiv) {
                insertButtons();
                clearInterval(intervalId); // Stop checking once the div is found
            }
        } catch (error) {
            console.error('An error occurred while checking for header-video div: ', error);
        }
    }, 1000); // Check every second
}

// Call the function to start checking
checkForHeaderVideo();

// Add event listener to update button text on window resize
window.addEventListener('resize', updateButtonText);
