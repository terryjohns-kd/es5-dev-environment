WT.SPA.run({
    vpv: '/au/portal/quote/vehicle.*(#)?/tailorCover',
    test: 'Test 186',
    variant: 'Variation 1',
    callback: function () {
        (function () {
            'use strict';

            var SELECTORS = [
                '[data-track="BUY NOW|sticky"]',
                '[data-track="BUY NOW|TOP"]',
                '[data-track="BUY NOW"]'
            ];

            var NEW_LABEL = 'CONTINUE';

            function setCTA(btn) {
                if (!btn || btn.nodeType !== 1) return;
                if (btn.getAttribute('data-cta-patched') === '1') return;

                var labelEl = btn.querySelector('.MuiTypography-root, .MuiTypography-label2, span, .button__label');
                if (!labelEl) labelEl = btn;

                if (labelEl.textContent !== NEW_LABEL) {
                    labelEl.textContent = NEW_LABEL;
                }

                if (btn.getAttribute('aria-label') && btn.getAttribute('aria-label') !== NEW_LABEL) {
                    btn.setAttribute('aria-label', NEW_LABEL);
                }

                btn.setAttribute('data-cta-patched', '1');
            }

            function findAndPatch() {
                var i, j, nodes;
                for (i = 0; i < SELECTORS.length; i++) {
                    nodes = document.querySelectorAll(SELECTORS[i]);
                    for (j = 0; j < nodes.length; j++) setCTA(nodes[j]);
                }
            }

            // MutationObserver to handle re-renders and sticky visibility
            var observer = new MutationObserver(function (muts) {
                var m, a, s, q, n, inner;
                for (m = 0; m < muts.length; m++) {
                    for (a = 0; a < muts[m].addedNodes.length; a++) {
                        n = muts[m].addedNodes[a];
                        if (!n || n.nodeType !== 1) continue;

                        for (s = 0; s < SELECTORS.length; s++) {
                            if (n.matches && n.matches(SELECTORS[s])) setCTA(n);
                            inner = n.querySelectorAll(SELECTORS[s]);
                            for (q = 0; q < inner.length; q++) setCTA(inner[q]);
                        }
                    }
                }
            });
            observer.observe(document.documentElement || document.body, { childList: true, subtree: true });

            // Throttle function for scroll/resize checks
            function throttle(fn, wait) {
                var last = 0, t;
                return function () {
                    var now = Date.now(), rem = wait - (now - last), ctx = this, args = arguments;
                    if (rem <= 0) {
                        if (t) clearTimeout(t);
                        last = now;
                        fn.apply(ctx, args);
                    } else if (!t) {
                        t = setTimeout(function () {
                            last = Date.now();
                            t = null;
                            fn.apply(ctx, args);
                        }, rem);
                    }
                };
            }

            var onViewport = throttle(findAndPatch, 300);
            window.addEventListener('scroll', onViewport, true);
            window.addEventListener('resize', onViewport, true);

            // Initial run + delayed pass
            findAndPatch();
            setTimeout(findAndPatch, 600);

            // Handle SPA navigation changes
            var _ps = history.pushState;
            history.pushState = function () {
                _ps.apply(this, arguments);
                setTimeout(findAndPatch, 200);
            };
            window.addEventListener('popstate', function () {
                setTimeout(findAndPatch, 200);
            });
        })();
    }
});