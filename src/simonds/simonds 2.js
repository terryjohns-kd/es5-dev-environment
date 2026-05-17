(function () {

    var observer = null;
    var intervalId = null;

    function createCustomElement() {
        var newDiv = document.createElement('div');
        newDiv.className = 'cro2-3';
        newDiv.innerHTML =
            '<div class="c-nested-list py-16 px-16 text-white w-full cro2-1" style="background-color: rgb(226 + 24 + 54);">' +
            '<div><h2 class="cro2-4">The Benefits of Ready Now</h2></div>' +
            '<div class="flex flex-col gap-4">' +
            '<div><div class="flex flex-row items-start">' +
            '<span class="mr-2 pt-2"><svg fill="none" viewBox="0 0 19 19" height="19" width="19" xmlns="http://www.w3.org/2000/svg">' +
            '<g clip-path="url(#clip0_4890_4571)">' +
            '<path d="M9.05 0C4.05 0 0 4.05 0 9.05C0 14.05 4.05 18.1 9.05 18.1C14.05 18.1 18.1 14.05 18.1 9.05C18.1 4.05 14.05 0 9.05 0Z" fill="white"></path>' +
            '<path d="M5.05859 10.62L6.95859 12.94L11.9386 5.16003" stroke="#E11837" stroke-width="1.28" stroke-linecap="round" stroke-linejoin="round"></path>' +
            '</g>' +
            '<defs>' +
            '<clipPath id="clip0_4890_4571">' +
            '<rect width="18.1" height="18.1" fill="white"></rect>' +
            '</clipPath>' +
            '</defs>' +
            '</svg></span>' +
            '<div><div><p>Ready in 120 days or less</p></div></div></div></div>' +
            '<div><div class="flex flex-row items-start">' +
            '<span class="mr-2 pt-2"><svg fill="none" viewBox="0 0 19 19" height="19" width="19" xmlns="http://www.w3.org/2000/svg">' +
            '<g clip-path="url(#clip0_4890_4571)">' +
            '<path d="M9.05 0C4.05 0 0 4.05 0 9.05C0 14.05 4.05 18.1 9.05 18.1C14.05 18.1 18.1 14.05 18.1 9.05C18.1 4.05 14.05 0 9.05 0Z" fill="white"></path>' +
            '<path d="M5.05859 10.62L6.95859 12.94L11.9386 5.16003" stroke="#E11837" stroke-width="1.28" stroke-linecap="round" stroke-linejoin="round"></path>' +
            '</g>' +
            '<defs>' +
            '<clipPath id="clip0_4890_4571">' +
            '<rect width="18.1" height="18.1" fill="white"></rect>' +
            '</clipPath>' +
            '</defs>' +
            '</svg></span>' +
            '<div><div><p>Fixed Price Contracts</p></div></div></div></div>' +
            '<div><div class="flex flex-row items-start">' +
            '<span class="mr-2 pt-2"><svg fill="none" viewBox="0 0 19 19" height="19" width="19" xmlns="http://www.w3.org/2000/svg">' +
            '<g clip-path="url(#clip0_4890_4571)">' +
            '<path d="M9.05 0C4.05 0 0 4.05 0 9.05C0 14.05 4.05 18.1 9.05 18.1C14.05 18.1 18.1 14.05 18.1 9.05C18.1 4.05 14.05 0 9.05 0Z" fill="white"></path>' +
            '<path d="M5.05859 10.62L6.95859 12.94L11.9386 5.16003" stroke="#E11837" stroke-width="1.28" stroke-linecap="round" stroke-linejoin="round"></path>' +
            '</g>' +
            '<defs>' +
            '<clipPath id="clip0_4890_4571">' +
            '<rect width="18.1" height="18.1" fill="white"></rect>' +
            '</clipPath>' +
            '</defs>' +
            '</svg></span>' +
            '<div><div><p>Locked-In Completion Dates</p></div></div></div></div>' +
            '<div><div class="flex flex-row items-start">' +
            '<span class="mr-2 pt-2"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">' +
            '<g clip-path="url(#clip0_4890_4571)">' +
            '<path d="M9.05 0C4.05 0 0 4.05 0 9.05C0 14.05 4.05 18.1 9.05 18.1C14.05 18.1 18.1 14.05 18.1 9.05C18.1 4.05 14.05 0 9.05 0Z" fill="white"></path>' +
            '<path d="M5.05859 10.62L6.95859 12.94L11.9386 5.16003" stroke="#E11837" stroke-width="1.28" stroke-linecap="round" stroke-linejoin="round"></path>' +
            '</g>' +
            '<defs>' +
            '<clipPath id="clip0_4890_4571">' +
            '<rect width="18.1" height="18.1" fill="white"></rect>' +
            '</clipPath>' +
            '</defs>' +
            '</svg></span>' +
            '<div><div><p>Lifetime Structural Guarantee</p></div></div></div></div>' +
            '<div><div class="flex flex-row items-start">' +
            '<span class="mr-2 pt-2"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">' +
            '<g clip-path="url(#clip0_4890_4571)">' +
            '<path d="M9.05 0C4.05 0 0 4.05 0 9.05C0 14.05 4.05 18.1 9.05 18.1C14.05 18.1 18.1 14.05 18.1 9.05C18.1 4.05 14.05 0 9.05 0Z" fill="white"></path>' +
            '<path d="M5.05859 10.62L6.95859 12.94L11.9386 5.16003" stroke="#E11837" stroke-width="1.28" stroke-linecap="round" stroke-linejoin="round"></path>' +
            '</g>' +
            '<defs>' +
            '<clipPath id="clip0_4890_4571">' +
            '<rect width="18.1" height="18.1" fill="white"></rect>' +
            '</clipPath>' +
            '</defs>' +
            '</svg></span>' +
            '<div><div><p>Quality Home</p></div></div></div></div>' +
            '<div><div class="flex flex-row items-start">' +
            '<span class="mr-2 pt-2"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">' +
            '<g clip-path="url(#clip0_4890_4571)">' +
            '<path d="M9.05 0C4.05 0 0 4.05 0 9.05C0 14.05 4.05 18.1 9.05 18.1C14.05 18.1 18.1 14.05 18.1 9.05C18.1 4.05 14.05 0 9.05 0Z" fill="white"></path>' +
            '<path d="M5.05859 10.62L6.95859 12.94L11.9386 5.16003" stroke="#E11837" stroke-width="1.28" stroke-linecap="round" stroke-linejoin="round"></path>' +
            '</g>' +
            '<defs>' +
            '<clipPath id="clip0_4890_4571">' +
            '<rect width="18.1" height="18.1" fill="white"></rect>' +
            '</clipPath>' +
            '</defs>' +
            '</svg></span>' +
            '<div><div><p>10% deposit with no progress payments</p></div></div></div></div>' +
            '<div><div class="flex flex-row items-start">' +
            '<span class="mr-2 pt-2"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">' +
            '<g clip-path="url(#clip0_4890_4571)">' +
            '<path d="M9.05 0C4.05 0 0 4.05 0 9.05C0 14.05 4.05 18.1 9.05 18.1C14.05 18.1 18.1 14.05 18.1 9.05C18.1 4.05 14.05 0 9.05 0Z" fill="white"></path>' +
            '<path d="M5.05859 10.62L6.95859 12.94L11.9386 5.16003" stroke="#E11837" stroke-width="1.28" stroke-linecap="round" stroke-linejoin="round"></path>' +
            '</g>' +
            '<defs>' +
            '<clipPath id="clip0_4890_4571">' +
            '<rect width="18.1" height="18.1" fill="white"></rect>' +
            '</clipPath>' +
            '</defs>' +
            '</svg></span>' +
            '<div><div><p>First Home Buyer Government Grant Eligible*</p></div></div></div></div>' +
            '<div><div class="flex flex-row items-start">' +
            '<span class="mr-2 pt-2"><svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 19 19" fill="none">' +
            '<g clip-path="url(#clip0_4890_4571)">' +
            '<path d="M9.05 0C4.05 0 0 4.05 0 9.05C0 14.05 4.05 18.1 9.05 18.1C14.05 18.1 18.1 14.05 18.1 9.05C18.1 4.05 14.05 0 9.05 0Z" fill="white"></path>' +
            '<path d="M5.05859 10.62L6.95859 12.94L11.9386 5.16003" stroke="#E11837" stroke-width="1.28" stroke-linecap="round" stroke-linejoin="round"></path>' +
            '</g>' +
            '<defs>' +
            '<clipPath id="clip0_4890_4571">' +
            '<rect width="18.1" height="18.1" fill="white"></rect>' +
            '</clipPath>' +
            '</defs>' +
            '</svg></span>' +
            '<div><div><p>Turnkey Inclusions</p></div></div></div></div>' +

            '</div></div>';

        return newDiv;
    }

    function insertCustomElement() {
        if (document.querySelector('.cro2-3')) return;

        var newDiv = createCustomElement();
        var refElement = document.querySelector('.half-width.header-content');
        if (refElement) {
            refElement.parentNode.insertBefore(newDiv, refElement.nextSibling);
        }
    }

    function updateContent() {
        var targetElement = document.querySelector('.content');
        if (targetElement) {
            var contentHTML = targetElement.innerHTML;
            contentHTML = contentHTML.replace('care of you!', 'care of you!</p><p>');
            contentHTML = contentHTML.replace('has been taken care of .', 'has been taken care of.</p><p>');
            targetElement.innerHTML = contentHTML;
        }
    }

    function startObserving() {
        var observer = new MutationObserver(function (mutations) {
            var mutationDetected = false;
            mutations.forEach(function (mutation) {
                if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
                    mutationDetected = true;
                }
            });

            if (mutationDetected) {
                insertCustomElement();
            }
        });

        var config = { childList: true, subtree: true };
        var targetNode = document.querySelector('#single-page > div.c-header.c-header--default');
        if (targetNode) {
            observer.observe(targetNode, config);
        }
    }

    function stopObserving() {
        if (observer) {
            observer.disconnect();
        }
        if (intervalId) {
            clearInterval(intervalId);
        }
    }

    function shouldApplyChanges() {
        var currentUrl = window.location.href;
        var targetUrls = [
            'https://www.simonds.com.au/vic/ready-now-homes',
            'https://www.simonds.com.au/vic/house-designs/our-ranges/ready-now'
        ];

        return targetUrls.indexOf(currentUrl) !== -1;
    }

    function init() {
        try {
            if (shouldApplyChanges()) {
                updateContent();
                insertCustomElement();
                startObserving();

                intervalId = setInterval(function () {
                    if (shouldApplyChanges()) {
                        insertCustomElement();
                    } else {
                        stopObserving();
                    }
                }, 1000);
            }

        } catch (error) {
            console.error('Error during initialization:', error);
        }
    }

    init();

    // Listen for URL changes (e.g., for SPA navigation) to start or stop the script as needed
    var currentHref = window.location.href;
    setInterval(function () {
        if (window.location.href !== currentHref) {
            currentHref = window.location.href;
            stopObserving(); // Stop any ongoing observations or intervals
            init(); // Re-initialize to check the new URL
        }
    }, 500);
})();