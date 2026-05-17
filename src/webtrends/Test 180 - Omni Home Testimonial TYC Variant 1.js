WT.SPA.run({
    vpv: '/au/portal/quote/home.*(#)?/welcome',
    test: 'Test 180',
    variant: 'Variation 1',
    callback: function () {

        var merchantId = 'qbe-insurance';
        var productFilter = 'Home Insurance with QBE';

        function formatDate(isoString) {
            var d = new Date(isoString);
            var day = ('0' + d.getDate()).slice(-2);
            var month = ('0' + (d.getMonth() + 1)).slice(-2);
            var year = d.getFullYear();
            return day + '/' + month + '/' + year;
        }

        function insertTestimonials(reviews) {
            var buttons = document.querySelectorAll('button');
            if (buttons.length < 3) return false; // not ready yet

            var targetButton = buttons[2]; // third button
            if (document.getElementById('feefo-testimonials')) return true; // already inserted

            var container = document.createElement('div');
            container.id = 'feefo-testimonials';
            container.style.marginTop = '110px';
            container.style.padding = '24px 48px 0px 48px';
            container.style.border = '1px solid #ddd';
            container.style.borderRadius = '12px';
            container.style.backgroundColor = '#f9f9f9';
            container.style.boxShadow = 'rgba(0, 0, 0, 0.06) 0px 10px 5px 0px';
            container.style.display = 'block';
            container.style.textAlign = 'left';

            // Feefo logo as an <img>
            var logo = document.createElement('img');
            logo.src = 'data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA3MCAxNyI+PGRlZnM+PHN0eWxlPi5jbHMtMXtmaWxsOiM0OTQ1NDU7fS5jbHMtMntmaWxsOiNmZGRjNDc7fTwvc3R5bGU+PC9kZWZzPjx0aXRsZT5GZWVmby1sb2dvLWdyZXl5ZWxsb3c8L3RpdGxlPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJMYXllcl8xLTIiIGRhdGEtbmFtZT0iTGF5ZXIgMS0yIj48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xOC43NywxMS44di0uMzdjMC00LjQyLTIuNTgtNy4xMy02LjM2LTcuMTNBNi4xOCw2LjE4LDAsMCwwLDgsNi4xNSw2LDYsMCwwLDAsNi4yMywxMC41LDYuMjYsNi4yNiwwLDAsMCw4LDE0LjlhNS44NSw1Ljg1LDAsMCwwLDQuNDgsMS44OSw2LDYsMCwwLDAsNS43OC0zLjczSDE0LjM4YTIuNTcsMi41NywwLDAsMS0xLjgzLjY2QTIuNDgsMi40OCwwLDAsMSw5LjgxLDExLjhaTTE1LjI2LDkuMzRIOS43MmEyLjU2LDIuNTYsMCwwLDEsMi43My0xLjg3LDIuNzUsMi43NSwwLDAsMSwyLjgxLDEuODciLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0zMiwxMS44di0uMzdDMzIsNywyOS4zOSw0LjMsMjUuNjEsNC4zYTYuMiw2LjIsMCwwLDAtNC4zNywxLjg1LDYuMTEsNi4xMSwwLDAsMC0xLjgzLDQuMzUsNi4yNyw2LjI3LDAsMCwwLDEuNzUsNC40LDUuODgsNS44OCwwLDAsMCw0LjUsMS45LDYsNiwwLDAsMCw1Ljc4LTMuNzRIMjcuNThhMi41NywyLjU3LDAsMCwxLTEuODMuNjZBMi40OCwyLjQ4LDAsMCwxLDIzLDExLjhaTTI4LjQ2LDkuMzRIMjIuOTJhMi41NiwyLjU2LDAsMCwxLDIuNzQtMS44NywyLjczLDIuNzMsMCwwLDEsMi44LDEuODciLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik0xLjI4LDcuM3Y5LjIxSDQuNzFWNy4zSDYuMDlWNC42NUg0LjcxVjQuMzZDNC43MSwzLjI4LDUsMi45Myw2LDIuOTNoLjA4Vi41NGwtLjU0LDBDMi42My41MiwxLjI2LDEuNjcsMS4yNiw0LjIxYzAsLjEzLDAsLjI4LDAsLjQ0SDBWNy4zWiIvPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTMzLjMsNy4zdjkuMjFoMy40MlY3LjNoMS4zOVY0LjY1SDM2LjcyVjQuMzZjMC0xLjA4LjI0LTEuNDMsMS4zLTEuNDNoLjA5Vi41NGwtLjU1LDBjLTIuOTIsMC00LjI5LDEuMTUtNC4yOSwzLjY5LDAsLjEzLDAsLjI4LDAsLjQ0SDMyVjcuM1oiLz48cGF0aCBjbGFzcz0iY2xzLTEiIGQ9Ik01MC42MywxMC41QTYuMjYsNi4yNiwwLDAsMCwzOS45Miw2LjJhNi4wNSw2LjA1LDAsMCwwLTEuODEsNC4zNiw2LjE2LDYuMTYsMCwwLDAsMS43NCw0LjM2LDUuODgsNS44OCwwLDAsMCw0LjQ5LDEuOUE2LjExLDYuMTEsMCwwLDAsNDguODQsMTVhNiw2LDAsMCwwLDEuNzktNC40Nm0tMy40Ny4wOWEyLjgxLDIuODEsMCwwLDEtNS42MS4xOXYtLjE5YTIuODEsMi44MSwwLDAsMSw1LjYxLS4zMnYuMzIiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik01Niw4LjU4YTMuMzYsMy4zNiwwLDAsMS0zLjEzLTMuMTRINjAuMlY1LjM2YzAtMi44OC0xLjg0LTQuODEtNC4zOS00LjgxYTQuMzgsNC4zOCwwLDAsMC00LjUyLDQuNTMsNC41MSw0LjUxLDAsMCwwLDQuNDMsNC41N2guMDVhNC4zOCw0LjM4LDAsMCwwLDQuMTYtM2gtLjc0YTMuMzQsMy4zNCwwLDAsMS0zLDEuOTFINTYiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik02NS4zMSw4LjU4YTMuMzQsMy4zNCwwLDAsMCwzLjEyLTMuMTRINjEuMDlWNS4zNmMwLTIuODgsMS44NC00LjgxLDQuMzktNC44MUE0LjM4LDQuMzgsMCwwLDEsNzAsNS4wOWE0LjQ5LDQuNDksMCwwLDEtNC40NCw0LjU2aDBhNC4zOSw0LjM5LDAsMCwxLTQuMTctM2guNzRhMy4zMSwzLjMxLDAsMCwwLDMsMS44OWguMiIvPjwvZz48L2c+PC9zdmc+';
            logo.style.display = 'block';
            logo.style.marginTop = '0px'; // space below text

            function adjustLogoAndContainer() {
                if (window.innerWidth <= 768) { // mobile
                    logo.style.width = '50px';
                    logo.style.height = '50px';
                    logo.style.marginRight = '25px';
                    container.style.padding = '24px 24px 12px 24px';
                } else {
                    logo.style.width = '75px';
                    logo.style.height = '75px';
                    logo.style.marginRight = '50px';
                    container.style.padding = '24px 48px 0px 48px';
                }
            }

            adjustLogoAndContainer();
            window.addEventListener('resize', adjustLogoAndContainer);

            container.appendChild(logo);

            var displayed = 0;

            for (var i = 0; i < reviews.length; i++) {
                var r = reviews[i];
                if (!r.service ||
                    !r.service.rating ||
                    r.service.rating.rating !== 5 ||
                    !r.products_purchased ||
                    r.products_purchased.indexOf(productFilter) === -1 ||
                    !r.service.review
                ) {
                    continue;
                }

                var customer = 'Valued Customer';
                if (r.customer && r.customer.display_name) {
                    customer = r.customer.display_name;
                }
                var date = '';
                if (r.service.created_at) {
                    date = formatDate(r.service.created_at);
                }
                var comment = r.service.review;

                var block = document.createElement('div');
                var starSvg = '<svg role="img" width="11" height="11" viewBox="2 2 13 12" fill="none" xmlns="http://www.w3.org/2000/svg"><title>Filled star</title><defs><clipPath id="clip-1j46u5evq0a2ea04c8335488"><rect width="8" height="7.6636257" x="3.9863169" y="4.3568988"></rect></clipPath></defs><g id="decimal-star"><path id="border-star" fill-rule="evenodd" clip-rule="evenodd" d="M 13.3854,6.01933 10.1084,5.52017 8.64374,2.41743 c -0.26243,-0.55305 -1.0228,-0.56008 -1.28748,0 L 5.89159,5.52017 2.61459,6.01933 C 2.02693,6.10838 1.79141,6.86532 2.21758,7.29886 L 4.58842,9.71263 4.02767,13.1224 c -0.10093,0.6163 0.52037,1.078 1.04075,0.7897 L 8,12.3021 l 2.9316,1.61 c 0.5204,0.2859 1.1417,-0.1734 1.0407,-0.7897 L 11.4116,9.71263 13.7824,7.29886 C 14.2086,6.86532 13.9731,6.10838 13.3854,6.01933 Z M 10.238,11.8199 9.80791,9.20473 11.6987,7.27971 9.09291,6.88279 8,4.56758 6.90709,6.88279 4.30131,7.27971 6.19209,9.20473 5.76202,11.8199 8,10.5908 Z" style="fill: rgb(255, 208, 0); fill-opacity: 1;"></path><path id="inner" d="M 10.365089,11.940869 9.9112316,9.2401755 11.906508,7.2522018 9.1567203,6.8423012 8.0034155,4.4513771 6.8501108,6.8423012 4.100334,7.2522018 6.0955995,9.2401755 5.6417636,11.940869 8.0034155,10.671574 Z" style="fill: rgb(255, 208, 0); clip-path: url(&quot;#clip-1j46u5evq0a2ea04c8335488&quot;);"></path></g></svg>';
                block.className = 'testimonial';
                block.innerHTML =
                    '<p style="margin:0 0 5px;text-align:left;">' + starSvg + starSvg + starSvg + starSvg + starSvg + '</p>' +
                    '<p style="margin:0;font-style:italic; font-size:0.8em;text-align:left;">"' + comment + '"</p>' +
                    '<p style="margin:0;font-size:0.8em;color:#555;text-align:left;">– ' + customer + (date ? ' (' + date + ')' : '') + '</p>';

                container.appendChild(block);
                displayed++;

                break; // ✅ stop after first valid review
            }

            // ✅ append logo after text
            container.appendChild(logo);

            if (displayed > 0) {
                targetButton.parentNode.insertBefore(container, targetButton.nextSibling);
                return true;
            }
            return false;
        }

        function fetchReviews(callback) {
            var url =
                'https://api.feefo.com/api/20/reviews/all' +
                '?merchant_identifier=' + merchantId +
                '&since_period=year' +
                '&page_size=45';
            console.log(url);

            fetch(url)
                .then(function (res) { return res.json(); })
                .then(function (data) {
                    console.log('Feefo API response:', data);
                    if (data && data.reviews) {
                        callback(data.reviews);
                    }
                })
                .catch(function () {
                    // silently ignore fetch errors
                });
        }

        // Wait for SPA to render the third button
        fetchReviews(function (reviews) {
            var maxWait = 5000; // wait up to 5 seconds
            var intervalTime = 200;
            var waited = 0;

            var interval = setInterval(function () {
                if (insertTestimonials(reviews) || waited >= maxWait) {
                    clearInterval(interval);
                }
                waited += intervalTime;
            }, intervalTime);
        });
    }
});
