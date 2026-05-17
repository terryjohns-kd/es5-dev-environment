WT.SPA.run({
    vpv: '/au/portal/quote/home.*(#)?/tailorCover',
    test: 'Test 190',
    variant: 'Variation 1',
    callback: function () {
        console.log('Test 190 - Variation 1 running');
        // --- declarations at function body root ---
        var MSG_CLASS = 'cro190-1';
        var DL_HOOK_FLAG = '__cro190_dl_hooked__';

        function toInt(val) {
            var n = parseInt(String(val || '').replace(/[^\d]/g, ''), 10);
            return isNaN(n) ? 0 : n;
        }

        function formatAUD(n) {
            var s = String(toInt(n));
            return s.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
        }

        function getTargetContainer() {
            var panel = document.getElementById('PanelSumInsured');
            if (!panel) return null;

            var anchor = panel.querySelector('[data-track="yourBuildingSumInsuredLink"]');
            if (!anchor) return null;

            var hostDiv = anchor;
            while (hostDiv && hostDiv !== panel && hostDiv.tagName !== 'DIV') {
                hostDiv = hostDiv.parentNode;
            }
            if (!hostDiv || hostDiv === panel || hostDiv.tagName !== 'DIV') return null;

            var sib = hostDiv.nextElementSibling;
            if (sib && sib.tagName === 'DIV') return sib;

            return null;
        }

        function upsertMessage(minThreshold) {
            try {
                var container = getTargetContainer();
                if (!container) return;

                var existing = container.querySelector('.' + MSG_CLASS);
                if (!existing) {
                    existing = document.createElement('div');
                    existing.className = MSG_CLASS;
                    existing.innerHTML =
                        '<svg class="cro190-2" focusable="false" viewBox="4.0 4.0 42.0 48.0" aria-hidden="true" preserveAspectRatio="xMidYMid meet">' +
                        '<defs></defs>' +
                        '<path d="M24.796 4.027c.133-.036.274-.036.407 0l16.242 4.488c.403.11.64.525.527.926-.112.4-.528.639-.933.523L25 5.534 9.515 9.81v19.361c0 4.747 10.805 12.34 15.474 15.187.748-.482 2.487-1.626 4.529-3.122 6.969-5.098 10.967-9.495 10.967-12.065V13.937c0-.416.339-.753.757-.753.419 0 .758.337.758.753v15.235c0 3.188-3.897 7.655-11.583 13.277-2.765 2.024-4.991 3.42-5.013 3.434-.124.078-.264.117-.405.117-.134 0-.269-.036-.389-.108C23.932 45.487 8 35.906 8 29.172V9.24c0-.338.226-.634.555-.724zM18.054 16.13c.296-.295.775-.295 1.07 0L25 21.966l5.875-5.836c.296-.295.775-.295 1.07 0 .297.294.297.77 0 1.065l-5.874 5.835 5.875 5.836c.296.294.296.77 0 1.065-.148.147-.342.22-.535.22-.195 0-.388-.073-.536-.22L25 24.094l-5.875 5.837c-.148.147-.342.22-.535.22-.195 0-.388-.073-.536-.22-.296-.294-.296-.771 0-1.065l5.874-5.836-5.874-5.835c-.296-.294-.296-.771 0-1.065z"></path>' +
                        '</svg>' +
                        '<span class="cro190-threshold"></span>';

                    container.appendChild(existing);
                }

                var thresholdSpan = existing.querySelector('.cro190-threshold');
                if (thresholdSpan) {
                    thresholdSpan.innerHTML =
                        '*To be eligible for Safeguard benefit, the sum insured must be equal to or above $' +
                        formatAUD(minThreshold) +
                        '. If you have the Safeguard benefit, should a claim exceed your sum insured, we will pay up to 30% more.';
                }
            } catch (e) { }
        }

        function removeMessage() {
            try {
                var container = getTargetContainer();
                if (!container) return;

                var existing = container.querySelector('.' + MSG_CLASS);
                if (existing && existing.parentNode) existing.parentNode.removeChild(existing);
            } catch (e) { }
        }

        function evaluateFromDlObject(obj) {
            try {
                if (!obj || !obj.data || !obj.data.sumInsured) return;

                var si = obj.data.sumInsured;
                var min = toInt(si.minimumThreshold);
                if (!min) return;

                var current = (si.userHasModifiedSumInsured && si.userModifiedTotalAmt)
                    ? toInt(si.userModifiedTotalAmt)
                    : toInt(si.adjustedTotalAmt || si.corelogicTotalAmt);

                if (current > 0 && current < min) upsertMessage(min);
                else removeMessage();
            } catch (e) { }
        }

        function handleDataLayerPush(item) {
            try {
                if (!item || !item.data || !item.data.sumInsured) return;

                var si = item.data.sumInsured;
                if (!si.minimumThreshold) return; // ensure it's the payload you need

                evaluateFromDlObject(item);
                setTimeout(function () { evaluateFromDlObject(item); }, 50);
            } catch (e) { e = null; }
        }

        function installDataLayerHookOnce() {
            try {
                window.dataLayer = window.dataLayer || [];

                if (window[DL_HOOK_FLAG]) return;
                window[DL_HOOK_FLAG] = true;

                var originalPush = window.dataLayer.push;
                window.dataLayer.push = function () {
                    try {
                        for (var i = 0; i < arguments.length; i++) {
                            handleDataLayerPush(arguments[i]);
                        }
                    } catch (e) { }
                    return originalPush.apply(window.dataLayer, arguments);
                };
            } catch (e) { }
        }

        function scanExistingDataLayer() {
            try {
                if (window.dataLayer && window.dataLayer.length) {
                    for (var i = 0; i < window.dataLayer.length; i++) {
                        handleDataLayerPush(window.dataLayer[i]);
                    }
                }
            } catch (e) { }
        }

        // --- execution (can be inside try/catch if you want) ---
        try {
            installDataLayerHookOnce();
            scanExistingDataLayer();
        } catch (e) { }

    }
});
