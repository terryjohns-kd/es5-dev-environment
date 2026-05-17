WT.SPA.run({
    vpv: '/au/portal/quote/vehicle.*(#)?/tailorCover',
    test: 'Test 163',
    variant: 'Variation 1',
    callback: function () {
        // Get the target element
        var target = document.querySelector('#Comprehensive > div > div:nth-child(2) > div > div > div:nth-child(2)');

        // Only proceed if the target exists and the new element hasn't already been inserted
        if (target && target.parentNode && !target.parentNode.querySelector('.cro163-1')) {
            // Create the new div
            var newDiv = document.createElement('div');
            newDiv.className = 'cro163-1';

            // Add SVG and text to the new div
            newDiv.innerHTML = '' +
                '<svg class="MuiSvgIcon-root-9455" focusable="false" viewBox="0 0 20 20" aria-hidden="true" preserveAspectRatio="xMidYMid meet">' +
                '  <g fill="rgb(0, 154, 228)">' +
                '    <path d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10 4.477 0 10 0zm0 2a8 8 0 1 0 0 16 8 8 0 0 0 0-16zM8 15v-1h1v-4H8V9h3v5h1v1H8zm1-8h2V5H9v2z"></path>' +
                '  </g>' +
                '</svg>' +
                ' How to lower your premium';

            // Insert the new div after the target
            if (target.nextSibling) {
                target.parentNode.insertBefore(newDiv, target.nextSibling);
            } else {
                target.parentNode.appendChild(newDiv);
            }
        }

        (function () {
            var trigger = document.querySelector('.cro163-1');

            if (!trigger) return;

            trigger.style.cursor = 'pointer';

            trigger.addEventListener('click', function () {
                var existing = document.getElementById('premium-modal-overlay');
                if (existing) {
                    existing.style.display = 'block';
                    return;
                }

                var overlay = document.createElement('div');
                overlay.id = 'premium-modal-overlay';
                overlay.style.display = 'block'; // Show it immediately

                var modal = document.createElement('div');
                modal.id = 'premium-modal';

                var closeBtn = document.createElement('button');
                closeBtn.id = 'premium-modal-close';
                closeBtn.innerHTML = '✕';

                closeBtn.addEventListener('click', function () {
                    overlay.style.display = 'none';
                });

                var html = ''
                    + '<h1 class="cro163-12">Tips to help lower your premium</h2>'
                    + '<p class="cro163-9"><strong><span>Choose a higher excess</span></strong><br>'
                    + '<span>Choosing a higher basic excess can lower your premium. Be sure to pick a basic excess you can afford to pay at short notice if you need to make a claim.</span></p>'
                    + '<p class="cro163-9"><strong><span>Pay annually</span></strong><br>'
                    + '<span>Pay less for your car insurance when you pay annually</span></p>'
                    + '<p class="cro163-9"><strong><span>Choice of optional upgrades</span></strong><br>'
                    + '<span>Selecting optional upgrades will increase your premium. You can choose the optional covers you need.</span></p>';

                modal.innerHTML = html;
                modal.appendChild(closeBtn);
                overlay.appendChild(modal);
                document.body.appendChild(overlay);

                overlay.addEventListener('click', function (e) {
                    if (e.target === overlay) {
                        overlay.style.display = 'none';
                    }
                });
            });
        })();


    }
});
