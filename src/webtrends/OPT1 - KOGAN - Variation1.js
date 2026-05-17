WT.SPA.run({
  vpv: '/quote/(vehicle|home|landlord).*',
  test: 'OPT1 - KOGAN',
  variant: 'Variation 1',
  callback: function () {
    (function () {
      if (sessionStorage.getItem('bannerClosed') || document.getElementById('custom-banner')) {
        return;
      }

      var banner = document.createElement('div');
      banner.id = 'custom-banner';

      banner.innerHTML =
        '<div class="banner-content">' +
        '<strong>Our quoting system is closing on 16 June 2025.</strong> ' +
        'Please complete your purchase before 16 June if you\'d like to proceed.' +
        '</div>' +
        '<button class="close-btn" aria-label="Close Banner">&times;</button>';

      document.body.insertBefore(banner, document.body.firstChild);

      var existingPadding = parseInt(document.body.style.paddingTop, 10) || 0;
      var bannerHeight = banner.offsetHeight || 56;
      document.body.style.paddingTop = (existingPadding + bannerHeight) + 'px';

      var closeBtn = banner.getElementsByClassName('close-btn')[0];
      if (closeBtn) {
        closeBtn.onclick = function () {
          if (banner && banner.parentNode) {
            banner.parentNode.removeChild(banner);
          }
          document.body.style.paddingTop = existingPadding + 'px';
          sessionStorage.setItem('bannerClosed', 'true');
        };
      }
    })();
  }
});
