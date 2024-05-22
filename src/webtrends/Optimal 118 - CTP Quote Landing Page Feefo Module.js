try {
    // Select the element
    var elementM = document.querySelector('body > div.container > div.qbe-content > div:nth-child(2) > div.col-sm-7 > div.visible-xs');
    var elementD = document.querySelector('body > div.container > div.qbe-content > div:nth-child(2) > div.col-sm-7 > div.hidden-xs');
    
    // Change the inner HTML
    elementM.innerHTML = '<div class="visible-xs" style="width:100%;"><div id="feefo-service-review-carousel-widgetId" class="feefo-review-carousel-widget-service"></div></div>';
    elementD.innerHTML = '<div class="hidden-xs"><div id="feefo-service-review-carousel-widgetId" class="feefo-review-carousel-widget-service"></div></div>';    
    
    
        var exJs = document.createElement('script');
        exJs.setAttribute('type', 'text/javascript');
        exJs.setAttribute('src', 'https://api.feefo.com/api/javascript/qbe-insurance?tags=insurance%3DCTP Insurance');
        exJs.setAttribute('async', 'true'); // Add the async attribute
        document.head.appendChild(exJs);
        
    } catch (error) {
        // Logs any errors that occur to the 'dataLayer' object
        window.dataLayer.push({
            event: 'standard',
            eventCategory: 'error',
            eventAction: 'optimize optimal - 118 Variant 2',
            eventLabel: error,
            nonInteraction: true,
        });
    }