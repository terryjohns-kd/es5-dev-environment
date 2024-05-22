try {
    var params = new URLSearchParams(window.location.search);

    sessionStorage.setItem('calc', params.get('calc') || '');
    
    window.addEventListener('DOMContentLoaded', function() {
        console.log = sessionStorage.getItem('calc') || '';
    });
} catch (error) {
    window.dataLayer.push({
        event: 'standard',
        eventCategory: 'error',
        eventAction: 'POC Greenslips Session Storage',
        eventLabel: error,
        nonInteraction: true,
    });
}