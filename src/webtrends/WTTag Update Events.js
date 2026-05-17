(function captureEventsFromDataLayerToLocalStorage() {
    var isVehicle = location.pathname.indexOf('/vehicle') !== -1;

    function saveEventToLocalStorage(eventName) {
        function LSTest() {
            try {
                localStorage.setItem('wt_lstest', 'true');
                localStorage.getItem('wt_lstest');
                localStorage.removeItem('wt_lstest');
                return true;
            } catch (err) {
                return false;
            }
        }

        if (!LSTest()) return;

        var cur = JSON.parse(localStorage.getItem('_wt.history') || '[]');
        cur.push({
            ts: Date.now(),
            ev: eventName
        });
        if (cur.length > 1000) cur.splice(0, cur.length - 1000);
        localStorage.setItem('_wt.history', JSON.stringify(cur));
    }

    function handleDataLayerEvent(eventData) {
        if (!eventData || !eventData.event) return;

        var eventMapping = {
            'quote_start': isVehicle ? 'car_quote_start' : 'home_quote_start',
            'quote_complete': isVehicle ? 'car_quote_complete' : 'home_quote_complete',
            'purchase': isVehicle ? 'car_purchase' : 'home_purchase',
        };

        var mappedEvent = eventMapping[eventData.event];
        if (mappedEvent) {
            saveEventToLocalStorage(mappedEvent);
        }
    }

    function listenToDataLayer() {
        var previousLength = window.dataLayer.length;

        setInterval(function() {
            if (window.dataLayer.length > previousLength) {
                for (var i = previousLength; i < window.dataLayer.length; i++) {
                    handleDataLayerEvent(window.dataLayer[i]);
                }
                previousLength = window.dataLayer.length;
            }
        }, 500);
    }

    function monitorSPARoutes() {
        var oldPushState = history.pushState;
        history.pushState = function() {
            oldPushState.apply(history, arguments);
            isVehicle = location.pathname.indexOf('/vehicle') !== -1;
        };

        window.addEventListener('popstate', function() {
            isVehicle = location.pathname.indexOf('/vehicle') !== -1;
        });
    }

    monitorSPARoutes();
    listenToDataLayer();
})();
