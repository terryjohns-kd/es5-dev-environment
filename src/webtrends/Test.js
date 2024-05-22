try {
    console.log('Test TJ');
    var params = new URLSearchParams(window.location.search);

    sessionStorage.setItem('calc', params.get('calc') || '');
    console.log('Test TJ2');
    // Correctly use console.log to output the value of 'calc' from Session Storage
    console.log(sessionStorage.getItem('calc') || '');
    console.log('Test TJ3');
    WT.trackGA.dlPush('POC CTP Greenslips', 'Variation 1');
} catch (error) {
    window.dataLayer.push({
        event: 'standard',
        eventCategory: 'error',
        eventAction: 'POC Greenslips Session Storage',
        eventLabel: error.toString(), // Ensure error is converted to a string if necessary
        nonInteraction: true,
    });
}