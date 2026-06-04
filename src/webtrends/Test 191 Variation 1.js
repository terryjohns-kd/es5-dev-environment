WT.SPA.run({
    vpv: '/au/portal/quote/home.*#/property/feature',
    test: 'Optimal 191',
    variant: 'Variant 1',
    callback: function () {

        // Ensure dataLayer exists
        window.dataLayer = window.dataLayer || [];

        // Helper to get a key from the latest matching dataLayer entry
        function getDataLayerValue(dataLayer, key) {
            if (!dataLayer || dataLayer.length === 0) return null;

            for (var i = dataLayer.length - 1; i >= 0; i--) {
                var item = dataLayer[i];
                if (!item) continue;

                // If value is inside a "data" object
                if (item.data && Object.prototype.hasOwnProperty.call(item.data, key)) {
                    return item.data[key];
                }

                // Or directly on the object (like your example)
                if (Object.prototype.hasOwnProperty.call(item, key)) {
                    return item[key];
                }
            }
            return null;
        }

        // Get coverType from dataLayer
        var coverType = getDataLayerValue(window.dataLayer, 'coverType');

        // Only proceed if coverType is building_only or building_and_contents
        if (coverType !== 'building_only' && coverType !== 'building_and_contents') {
            return;
        }

        function addCustomPanel(htmlContent) {
            // Prevent duplicate insertion
            if (document.getElementById('CustomPanel')) {
                return;
            }

            var outBuildingsPanel = document.getElementById('OutBuildingsPanel');
            if (!outBuildingsPanel || !outBuildingsPanel.parentNode) {
                console.log('OutBuildingsPanel not found');
                return;
            }

            var newDiv = document.createElement('div');
            newDiv.id = 'CustomPanel';
            newDiv.className = ' '; // add any classes you need here
            newDiv.innerHTML = htmlContent;

            outBuildingsPanel.parentNode.insertBefore(newDiv, outBuildingsPanel.nextSibling);
        }

        var htmlContent = ''
            + '<div class="CRO191-1">'
            + '  <div class="CRO191-2"><h2 class="CRO191-3">DID YOU KNOW?</h2></div>'
            + '  <p class="CRO191-4">'
            + '    <strong>We cover up to 24 months temporary accommodation</strong><br> '
            + '    We can cover up to 24 months or 20% of your buildings sum insured for temporary accommodation (whichever is lower) if your home is unliveable due to damage by an insured event.'
            + '  </p>'
            + '</div>';

        addCustomPanel(htmlContent);

    }
});
