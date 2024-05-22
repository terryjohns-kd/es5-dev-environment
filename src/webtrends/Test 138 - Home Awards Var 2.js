WT.SPA.on('/au/portal/quote/home.*#/welcome', function () {
    try {
        var targetElement = document.querySelector('#WelcomeDutyOfDisclosureLegal > div > div > div > div:nth-child(3)');
        var existingElement = document.getElementById('DidYouKnowPanel'); // Check if the div already exists

        if (targetElement && !existingElement) {
            targetElement.insertAdjacentHTML('afterend', '<div id="DidYouKnowPanel" class=" "><div class="cro138-2-1"><div class="cro138-2-2"><h2 class="cro138-2-3">AWARD WINNING INSURANCE</h2></div><div class="cro138-2-4"><img src="https://www.qbe.com/au/-/media/australia/images/awards/mozo-eca-exceptional-quality-home-contents-insurance-1200x1200.png?h=60&amp;w=60&amp;hash=0C3506D4F1B5F5C7303C984406BA6302" title="Mozo awarded us its 2023 Mozo Experts Choice Award for Exceptional Quality Home &amp; Contents Insurance."><div class="cro138-2-6">2023 Mozo Experts Choice Award</div></div><div class="cro138-2-4"><img src="https://www.qbe.com/au/-/media/australia/images/awards/finder-green-insurer-of-the-year-2023-450x450.png?h=60&amp;w=60&amp;hash=83F9B09048127DB6B1F8CA5413335535" title="For the fourth year running, we’ve been named Finder’s Green Insurer of the Year in 2023. We’re honoured to receive this recognition. A big thank you to our customers, people and partners for helping us enable a more resilient planet."><div class="cro138-2-6">Finder\'s Green Insurer of the Year in 2023</div></div><div class="cro138-2-4"><img src="https://www.qbe.com/au/-/media/australia/images/awards/mansfield-silver-personal-lines-2022_70.png?h=60&amp;w=60&amp;hash=DD3B2360FA6C9706746BEE52523A49DD" title="We\'ve been awarded the 2022 Personal Lines Mansfield Award recognising claims excellence in the Australian insurance industry. The Awards highlight the vital role that claims professionals play in the insurance industry and recognises those achieving excellence in this field."><div class="cro138-2-6">2022 Personal Lines Mansfield Award</div></div></div></div>');
        }
        WT.trackGA.dlPush('Test 138', 'Variation 2');
    } catch (error) {
        window.dataLayer.push({
            event: 'standard',
            eventCategory: 'error',
            eventAction: 'webtrends optimize experiment 138 - omni',
            eventLabel: error,
            nonInteraction: true,
        });
    }
});