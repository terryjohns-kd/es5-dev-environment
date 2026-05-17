WT.SPA.run({
    vpv: '/au/portal/quote/home.*(#)?/summary',
    test: 'Test 200',
    variant: 'Control',
    callback: function () {
        // Control - no code
    }
});