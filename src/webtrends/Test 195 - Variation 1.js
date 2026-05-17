WT.SPA.run({
    vpv: '/au/quote/business/quote',
    test: 'Test 195',
    variant: 'Variant 1',
    callback: function () {
        console.log('Test 195 - Variation 1');
        (function () {
            // Optional safeguard: only replace when it matches the original
            var FROM_TEXT = 'Review and buy now';
            var TO_TEXT = 'Continue';

            var LABEL_SELECTOR = 'button[data-testid="button-test"] span[data-testid="typography-test"]';

            function normalizeText(s) {
                return (s || '').replace(/\s+/g, ' ').replace(/^\s+|\s+$/g, '');
            }

            function updateCtaText() {
                var nodes = document.querySelectorAll(LABEL_SELECTOR);
                if (!nodes || !nodes.length) return false;

                var changed = false;

                for (var i = 0; i < nodes.length; i++) {
                    var el = nodes[i];
                    var current = normalizeText(el.textContent);

                    // Replace only if it matches the expected text:
                    if (current === FROM_TEXT) {
                        el.textContent = TO_TEXT;
                        changed = true;
                    }

                }

                return changed;
            }

            // Run immediately
            updateCtaText();

            // Observe SPA re-renders
            if (window.MutationObserver) {
                var obs = new MutationObserver(function () {
                    updateCtaText();
                });

                obs.observe(document.documentElement, {
                    childList: true,
                    subtree: true,
                    characterData: true
                });
            }

            // Fallback polling
            var attempts = 0;
            var maxAttempts = 120; // ~60 seconds at 500ms
            var timer = setInterval(function () {
                attempts++;
                updateCtaText();

                var first = document.querySelector(LABEL_SELECTOR);
                if (first && normalizeText(first.textContent) === TO_TEXT) {
                    clearInterval(timer);
                } else if (attempts >= maxAttempts) {
                    clearInterval(timer);
                }
            }, 500);
        })();



    }
});