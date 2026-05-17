try {
    // Define the FAQ content
    var faqContent = [
        {
            question: 'How do I cancel my Green Slip insurance?',
            answer: 'If your Green Slip has been used to register your car, it remains linked to the registration of your car for the registration term. Policy cancellation is only possible if you hand in your car’s registration plates to Transport for NSW. You can’t cancel a Green Slip and seek a refund if you change your mind. As long as your car is registered with Transport for NSW, your policy must remain in force.'
        },
        {
            question: 'How do I get a refund for my CTP?',
            answer: 'When you hand in your car’s registration plates, Transport for NSW (TfNSW) will give you a “Confirmation of Cancelled Registration” letter. Please email, fax or post this letter to us at:<ul class="cro139-ul"><li>Email: ctprefunds@qbe.com</li><li>Fax: (02) 9375 4799</li><li>Post: GPO Box 2516, Sydney NSW 2001</li></ul><p>We\'ll send your refund by cheque within 30 days. We can only refund the registered operator nominated on the letter.</p><p><strong>Moved recently?</strong></p><p>If you’ve recently changed your address, please note the change on the “Confirmation of Cancelled Registration” letter and include your initials as acknowledgement of the change of address.</p>'
        }
    ];

    // Create the FAQ container
    var faqContainer = document.createElement('div');
    faqContainer.className = 'faq';

    // Create the H3 tag with id 'header3'
    var faqHeading = document.createElement('h3');
    faqHeading.id = 'cro139-h3';
    faqHeading.innerText = 'Commonly asked questions';

    // Insert the H3 tag before the FAQ container
    faqContainer.appendChild(faqHeading);

    // Populate the FAQ container with items
    for (var i = 0; i < faqContent.length; i++) {
        var faqItem = document.createElement('div');
        faqItem.className = 'faq-item';

        var faqQuestion = document.createElement('button');
        faqQuestion.className = 'faq-question';
        faqQuestion.innerHTML = faqContent[i].question;
        faqQuestion.id = 'CRO139-' + (i + 1); // Add unique ID

        var faqAnswer = document.createElement('div');
        faqAnswer.className = 'faq-answer';
        faqAnswer.innerHTML = '<p>' + faqContent[i].answer + '</p>';

        faqItem.appendChild(faqQuestion);
        faqItem.appendChild(faqAnswer);
        faqContainer.appendChild(faqItem);
    }

    // Check the URL and insert the FAQ container accordingly
    var currentURL = window.location.href;

    if (currentURL.indexOf('https://greenslip.qbe.com/CTP_Internet_Quotes/Contact') !== -1) {
        // Insert the FAQ container after the element with ID 'form-indent'
        var formIndent = document.getElementById('form-indent');
        formIndent.parentNode.insertBefore(faqContainer, formIndent.nextSibling);
    } else if (currentURL.indexOf('https://greenslip.qbe.com/CTP_Internet_Quotes/Help') !== -1) {
        // Insert the FAQ container before the div with class 'helpDiv'
        var helpDiv = document.querySelector('#form-indent');
        helpDiv.parentNode.insertBefore(faqContainer, helpDiv);
    }

    // Add the FAQ toggle functionality
    var questions = document.getElementsByClassName('faq-question');

    for (var j = 0; j < questions.length; j++) {
        questions[j].onclick = function () {
            var activeClass = 'active';

            // Toggle active class
            if (this.classList.contains(activeClass)) {
                this.classList.remove(activeClass);
            } else {
                for (var k = 0; k < questions.length; k++) {
                    questions[k].classList.remove(activeClass);
                }
                this.classList.add(activeClass);
            }
        };
    }

} catch (error) {
    window.dataLayer.push({
        event: 'standard',
        eventCategory: 'error',
        eventAction: 'webtrends optimize experiment 139 - omni',
        eventLabel: error,
        nonInteraction: true,
    });
}
