WT.SPA.run({
    vpv: '/au',
    test: 'Test 167',
    variant: 'Variation 1',
    callback: function () {

        // Configurations
        var config = {
            basePath: '/media/qbe/apac/australia/images/small-business-pack/j11395-digi-sme-website_1000x550-hospitality.jpeg',
            revision: '541af454772543129b7f943610256168',
            imageSizes: [768, 992, 1200, 1440, 1920, 2560],
            headingText: 'Small Business',
            paragraphText: 'Public liability insurance is automatically included with our Business Liability cover.',
            linkUrl: '/au/business-insurance/small-business'
        };

        // Selectors
        var selectors = {
            image: '#content > div:nth-child(2) > div > ul > li:nth-child(3) > section > div.Card-module__card__image--tftGl > img',
            heading: '#content > div:nth-child(2) > div > ul > li:nth-child(3) > section > div > h3',
            paragraph: '#content > div:nth-child(2) > div > ul > li:nth-child(3) > section > div > div > div > div > div',
            link: '#content > div:nth-child(2) > div > ul > li:nth-child(3) > section > div > div > div > div > div > a'
        };

        // Helper function to safely set text content
        function setTextContent(selector, text) {
            var element = document.querySelector(selector);
            if (element) element.textContent = text;
        }

        // Updates image with responsive srcset
        function updateImage() {
            var img = document.querySelector(selectors.image);
            if (!img) return;

            var srcSet = [];
            for (var i = 0; i < config.imageSizes.length; i++) {
                var size = config.imageSizes[i];
                srcSet.push(config.basePath + '?mw=' + size + '&rev=' + config.revision + ' ' + size + 'w');
            }

            img.src = config.basePath + '?mw=768&rev=' + config.revision;
            img.srcset = srcSet.join(', ');
        }

        // Updates link href and click behavior
        function updateLink() {
            var link = document.querySelector(selectors.link);
            if (!link) return;

            link.href = config.linkUrl;

            // Remove previous listener to avoid duplicates
            link.onclick = null;
            link.onclick = function (e) {
                e.preventDefault();
                window.location.href = config.linkUrl;
            };
        }

        // Execute updates
        updateImage();
        setTextContent(selectors.heading, config.headingText);
        setTextContent(selectors.paragraph, config.paragraphText);
        updateLink();


    }
});
