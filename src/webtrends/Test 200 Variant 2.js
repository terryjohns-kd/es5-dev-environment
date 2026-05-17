WT.SPA.run({
    vpv: '/au/portal/quote/home.*(#)?/summary',
    test: 'Test 200',
    variant: 'Variant 2',
    callback: function () {

        (function () {
            'use strict';

            var PAY_SELECTOR = '[data-track="PAY NOW"]';
            var BACK_TRACK_SELECTOR = '[data-track="Back"]';
            var NEW_LABEL = 'CONTINUE TO PAYMENT';
            var MQ = window.matchMedia('(max-width: 599.95px)');

            var observer = null;
            var interval = null;

            function isOnSummary() {
                // Covers pathname + hash routing
                var url = (location.pathname || '') + (location.hash || '');
                return url.indexOf('/summary') !== -1;
            }

            function setImportant(el, prop, val) {
                if (!el) return;
                el.style.setProperty(prop, val, 'important');
            }

            function removePatchedStyles(el) {
                if (!el || !el.style) return;

                // Only remove what we set
                el.style.removeProperty('order');
                el.style.removeProperty('margin-bottom');
                el.style.removeProperty('width');
                el.style.removeProperty('max-width');
                el.style.removeProperty('flex');
                el.style.removeProperty('display');
            }

            function findButton(host) {
                if (!host) return null;
                if (host.tagName && host.tagName.toLowerCase() === 'button') return host;
                return host.querySelector ? host.querySelector('button, a') : null;
            }

            function setLabel(btn) {
                if (!btn) return;

                var labelEl = btn.querySelector('.MuiTypography-root, .MuiTypography-label2, .MuiButton-label, span, .button__label');
                if (!labelEl) labelEl = btn;

                if (labelEl.textContent !== NEW_LABEL) {
                    labelEl.textContent = NEW_LABEL;
                }

                btn.setAttribute('aria-label', NEW_LABEL);
            }

            function patchCTAs() {
                if (!isOnSummary()) return;

                var hosts = document.querySelectorAll(PAY_SELECTOR);
                for (var i = 0; i < hosts.length; i++) {
                    setLabel(findButton(hosts[i]));
                }
            }

            function patchMobileStyles() {
                if (!isOnSummary()) return;
                if (!MQ.matches) return;

                // .btnBuy wrapper
                var buy = document.querySelector('.btnBuy');
                if (buy) {
                    setImportant(buy, 'order', '0');
                    setImportant(buy, 'margin-bottom', '24px');
                    setImportant(buy, 'width', '100%');
                    setImportant(buy, 'max-width', '100%');
                    setImportant(buy, 'flex', '0 0 100%');

                    var innerBuy = buy.querySelector('button, a');
                    if (innerBuy) {
                        setImportant(innerBuy, 'width', '100%');
                        setImportant(innerBuy, 'max-width', '100%');
                        setImportant(innerBuy, 'display', 'block');
                    }
                }

                // .btnBack wrappers
                var backs = document.querySelectorAll('.btnBack');
                for (var i = 0; i < backs.length; i++) {
                    setImportant(backs[i], 'width', '100%');
                    setImportant(backs[i], 'max-width', '100%');
                    setImportant(backs[i], 'flex', '0 0 100%');

                    var innerBackWrap = backs[i].querySelector('button, a');
                    if (innerBackWrap) {
                        setImportant(innerBackWrap, 'width', '100%');
                        setImportant(innerBackWrap, 'max-width', '100%');
                        setImportant(innerBackWrap, 'display', 'block');
                    }
                }

                // Back button via data-track="Back"
                var backBtns = document.querySelectorAll(BACK_TRACK_SELECTOR);
                for (var j = 0; j < backBtns.length; j++) {
                    var b = backBtns[j];

                    // If attribute is on wrapper, find clickable
                    if (b.tagName && b.tagName.toLowerCase() !== 'button') {
                        var inner = b.querySelector ? b.querySelector('button, a') : null;
                        if (inner) b = inner;
                    }

                    setImportant(b, 'width', '100%');
                    setImportant(b, 'max-width', '100%');
                    setImportant(b, 'display', 'block');
                }
            }

            function revertStyles() {
                // Revert only the styles we applied (safe even if elements aren’t present)
                removePatchedStyles(document.querySelector('.btnBuy'));

                var backs = document.querySelectorAll('.btnBack');
                for (var i = 0; i < backs.length; i++) {
                    removePatchedStyles(backs[i]);
                    var innerBack = backs[i].querySelector('button, a');
                    removePatchedStyles(innerBack);
                }

                var backBtns = document.querySelectorAll(BACK_TRACK_SELECTOR);
                for (var j = 0; j < backBtns.length; j++) {
                    var b = backBtns[j];
                    if (b.tagName && b.tagName.toLowerCase() !== 'button') {
                        var inner = b.querySelector ? b.querySelector('button, a') : null;
                        if (inner) b = inner;
                    }
                    removePatchedStyles(b);
                }

                // Also revert inner buy clickable if present
                var buy = document.querySelector('.btnBuy');
                if (buy) {
                    var innerBuy = buy.querySelector('button, a');
                    removePatchedStyles(innerBuy);
                }
            }

            function teardown() {
                if (interval) {
                    clearInterval(interval);
                    interval = null;
                }
                if (observer) {
                    observer.disconnect();
                    observer = null;
                }
                window.removeEventListener('resize', patchMobileStyles);

                // Ensure we don't leave inline styles behind
                revertStyles();
            }

            function patchAll() {
                if (!isOnSummary()) {
                    teardown();
                    return;
                }
                patchCTAs();
                patchMobileStyles();
            }

            // --- RUN + KEEP ALIVE (ONLY WHILE ON SUMMARY) ---
            patchAll();

            var attempts = 0;
            var maxAttempts = 20;
            interval = setInterval(function () {
                patchAll();
                attempts++;
                if (attempts >= maxAttempts) {
                    clearInterval(interval);
                    interval = null;
                }
            }, 150);

            observer = new MutationObserver(function () {
                patchAll();
            });

            observer.observe(document.documentElement || document.body, {
                childList: true,
                subtree: true
            });

            window.addEventListener('resize', patchMobileStyles);

            // Also teardown on back/forward navigation events
            window.addEventListener('popstate', function () {
                patchAll();
            });

        })();
    }
});
