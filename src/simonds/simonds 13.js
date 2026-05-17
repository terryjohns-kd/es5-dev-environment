(function () {
    // ============================
    // Build widget HTML
    // ============================
    function buildWidget() {
        return '' +
            '<div class="widget-container">' +
            '<div class="tabs">' +
            '<div class="tab active" data-tab="homes">Home Designs</div>' +
            '<div class="tab" data-tab="house-land">House and Land</div>' +
            '<div class="tab" data-tab="help">How can we help?</div>' +
            '</div>' +

            '<div class="widget-heading" id="widgetHeading">Choose your house options</div>' +

            '<div class="filters-row" id="standardFilters">' +
            '<div class="dropdown-wrapper" data-label="Budget">' +
            '<select id="budget">' +
            '<option value="all">All</option>' +
            '<option value="300000">300,000</option>' +
            '<option value="400000">400,000</option>' +
            '<option value="500000">500,000</option>' +
            '<option value="600000">600,000</option>' +
            '<option value="700000">700,000</option>' +
            '<option value="800000">800,000</option>' +
            '<option value="900000">900,000</option>' +
            '<option value="1000000">1,000,000</option>' +
            '<option value="1100000">1,100,000</option>' +
            '<option value="1200000">1,200,000</option>' +
            '<option value="1300000">1,300,000</option>' +
            '<option value="1400000">1,400,000</option>' +
            '<option value="1500000">1,500,000</option>' +
            '</select>' +
            '</div>' +
            '<div class="dropdown-wrapper" data-label="Storeys">' +
            '<select id="storeys">' +
            '<option value="all">All</option>' +
            '<option value="1">1</option>' +
            '<option value="2">2</option>' +
            '</select>' +
            '</div>' +
            '<div class="dropdown-wrapper" data-label="Beds">' +
            '<select id="beds">' +
            '<option value="all">All</option>' +
            '<option value="1">1</option>' +
            '<option value="2">2</option>' +
            '<option value="3">3</option>' +
            '<option value="4">4</option>' +
            '<option value="5">5</option>' +
            '<option value="6">6</option>' +
            '</select>' +
            '</div>' +
            '<div class="dropdown-wrapper" data-label="Baths">' +
            '<select id="baths">' +
            '<option value="all">All</option>' +
            '<option value="1">1</option>' +
            '<option value="2">2</option>' +
            '<option value="3">3</option>' +
            '<option value="4">4</option>' +
            '<option value="5">5</option>' +
            '</select>' +
            '</div>' +
            '<div class="dropdown-wrapper" data-label="State">' +
            '<select id="state">' +
            '<option value="VIC">VIC</option>' +
            '<option value="SA">SA</option>' +
            '<option value="QLD">QLD</option>' +
            '</select>' +
            '</div>' +

            '<div class="dropdown-wrapper" data-label="Region" id="regionWrapper" style="display:none;">' +
            '<select id="region">' +
            '<option value="all">All</option>' +
            '</select>' +
            '</div>' +

            '<button class="search-btn" id="searchButton">Search</button>' +
            '</div>' +

            '<div class="help-container" id="helpFilters" style="display:none;">' +
            '<div class="help-filters-row">' +
            '<div class="help-dropdown-wrapper">' +
            '<label for="aboutYou">About you:</label>' +
            '<select id="aboutYou">' +
            '<option value="">Please select</option>' +
            '<option value="firstHomeBuyer">I\'m a first home buyer</option>' +
            '<option value="knockdownRebuilder">I\'m a knockdown rebuilder</option>' +
            '<option value="investor">I\'m an investor</option>' +
            '<option value="dualOccupancyBuyer">I\'m a dual occupancy buyer</option>' +
            '</select>' +
            '</div>' +

            '<div class="help-dropdown-wrapper" id="lookingForWrapper" style="display:none;">' +
            '<label for="lookingFor">Looking for:</label>' +
            '<select id="lookingFor">' +
            '<option value="">Please select</option>' +
            '</select>' +
            '</div>' +

            '<div class="help-dropdown-wrapper" id="locationWrapper" style="display:none;">' +
            '<label for="location">Location:</label>' +
            '<select id="location">' +
            '<option value="">Please select</option>' +
            '</select>' +
            '</div>' +

            '<div class="explore-btn-container">' +
            '<button class="search-btn" id="exploreButton" style="display:none;">Explore</button>' +
            '</div>' +
            '</div>' +
            '</div>' +
            '</div>';
    }

    // ============================
    // Help options object (full)
    // ============================
    var helpOptions = {
        firstHomeBuyer: {
            name: 'First Home Buyer',
            options: {
                advice: { name: 'advice', url: 'https://www.simonds.com.au/buyer-types/first-home-buyer' },
                houseAndLandPackages: {
                    name: 'house and land packages',
                    locations: {
                        victoria: { name: 'victoria', url: 'https://www.simonds.com.au/vic/house-and-land/filtered/under-750k' },
                        queensland: { name: 'queensland', url: 'https://www.simonds.com.au/qld/house-and-land/filtered/under-750k' },
                        southAustralia: { name: 'south australia', url: 'https://www.simonds.com.au/sa/house-and-land/filtered/under-750k' }
                    }
                },
                houseDesigns: {
                    name: 'house designs',
                    locations: {
                        victoria: { name: 'victoria', url: 'https://www.simonds.com.au/vic/house-designs/filtered/under-500k' },
                        queensland: { name: 'queensland', url: 'https://www.simonds.com.au/qld/house-designs/filtered/under-500k' },
                        southAustralia: { name: 'south australia', url: 'https://www.simonds.com.au/sa/house-designs/filtered/under-500k' }
                    }
                },
                completedHomes: {
                    name: 'completed homes',
                    locations: {
                        victoria: { name: 'victoria', url: 'https://www.simonds.com.au/vic/ready-now-homes' }
                    }
                },
                townhomes: {
                    name: 'townhomes',
                    locations: {
                        victoria: { name: 'victoria', url: 'https://www.simonds.com.au/vic/townhomes-for-sale' }
                    }
                }
            }
        },
        knockdownRebuilder: {
            name: 'Knockdown Rebuilder',
            options: {
                advice: { name: 'advice', url: 'https://www.simonds.com.au/buyer-types/knockdown-rebuild' },
                houseAndLandPackages: {
                    name: 'house and land packages',
                    locations: {
                        victoria: { name: 'victoria', url: 'https://www.simonds.com.au/vic/house-and-land/filtered/over-500k' },
                        queensland: { name: 'queensland', url: 'https://www.simonds.com.au/qld/house-and-land/filtered/over-500k' },
                        southAustralia: { name: 'south australia', url: 'https://www.simonds.com.au/sa/house-and-land/filtered/over-500k' }
                    }
                },
                houseDesigns: {
                    name: 'house designs',
                    locations: {
                        victoria: { name: 'victoria', url: 'https://www.simonds.com.au/vic/house-designs/filtered/over-500k' },
                        queensland: { name: 'queensland', url: 'https://www.simonds.com.au/qld/house-designs/filtered/over-500k' },
                        southAustralia: { name: 'south australia', url: 'https://www.simonds.com.au/sa/house-designs/filtered/over-500k' }
                    }
                }
            }
        },
        investor: {
            name: 'Investor',
            options: {
                advice: { name: 'advice', url: 'https://www.simonds.com.au/buyer-types/investor' },
                houseAndLandPackages: {
                    name: 'house and land packages',
                    locations: {
                        victoria: { name: 'victoria', url: 'https://www.simonds.com.au/vic/house-and-land/filtered/under-750k' },
                        queensland: { name: 'queensland', url: 'https://www.simonds.com.au/qld/house-and-land/filtered/under-750k' },
                        southAustralia: { name: 'south australia', url: 'https://www.simonds.com.au/sa/house-and-land/filtered/under-750k' }
                    }
                },
                houseDesigns: {
                    name: 'house designs',
                    locations: {
                        victoria: { name: 'victoria', url: 'https://www.simonds.com.au/vic/house-designs/filtered/under-500k' },
                        queensland: { name: 'queensland', url: 'https://www.simonds.com.au/qld/house-designs/filtered/under-500k' },
                        southAustralia: { name: 'south australia', url: 'https://www.simonds.com.au/sa/house-designs/filtered/under-500k' }
                    }
                },
                completedHomes: {
                    name: 'completed homes',
                    locations: {
                        victoria: { name: 'victoria', url: 'https://www.simonds.com.au/vic/ready-now-homes' }
                    }
                },
                townhomes: {
                    name: 'townhomes',
                    locations: {
                        victoria: { name: 'victoria', url: 'https://www.simonds.com.au/vic/townhomes-for-sale' }
                    }
                }
            }
        },
        dualOccupancyBuyer: {
            name: 'Dual Occupancy Buyer',
            options: {
                homeDesigns: { name: 'home designs', url: 'https://www.simonds.com.au/buyer-types/dual-occupancy' }
            }
        }
    };

    // ============================
    // Region data
    // ============================
    var regions = {
        VIC: ['Country North', 'Country West', 'Geelong', 'Metro East', 'Metro North', 'Metro West'],
        SA: ['Adelaide', 'Adelaide North', 'Fleurieu Peninsula', 'Mount Barker', 'South Australia'],
        QLD: ['Brisbane / Gold Coast', 'Brisbane North', 'Caloundra / Sunshine Coast']
    };

    // ============================
    // Insert widget after header
    // ============================
    function insertAfterHeader(header) {
        if (header && !document.querySelector('.widget-container')) {
            var wrapper = document.createElement('div');
            wrapper.innerHTML = buildWidget();
            header.parentNode.insertBefore(wrapper.firstChild, header.nextSibling);
            initWidget();
        }
    }

    // ============================
    // Initialise widget
    // ============================
    function initWidget() {
        var searchButton = document.getElementById('searchButton');
        var regionWrapper = document.getElementById('regionWrapper');
        var regionSelect = document.getElementById('region');
        var stateSelect = document.getElementById('state');
        var activeTab = 'homes';
        var tabs = document.querySelectorAll('.tab');
        var standardFilters = document.getElementById('standardFilters');
        var helpFilters = document.getElementById('helpFilters');
        var widgetHeading = document.getElementById('widgetHeading');
        var aboutYou = document.getElementById('aboutYou');
        var lookingFor = document.getElementById('lookingFor');
        var lookingForWrapper = document.getElementById('lookingForWrapper');
        var locationSelect = document.getElementById('location');
        var locationWrapper = document.getElementById('locationWrapper');
        var exploreButton = document.getElementById('exploreButton');

        function trackEvent(name, params) { window.dataLayer = window.dataLayer || []; window.dataLayer.push(Object.assign({ event: name }, params || {})); }

        // Tabs
Array.prototype.forEach.call(tabs, function (tab) {
    tab.addEventListener('click', function () {
        Array.prototype.forEach.call(tabs, function (t) { t.classList.remove('active'); });
        this.classList.add('active');
        activeTab = this.getAttribute('data-tab');

        // 🔹 Ensure Home tab explicitly sets tab value
        if (activeTab === 'homes') {
            activeTab = 'homes';
        }

        if (activeTab === 'help') {
            standardFilters.style.display = 'none';
            helpFilters.style.display = 'flex';
            widgetHeading.textContent = 'Tell us a little about yourself';
            regionWrapper.style.display = 'none';
        }
        else if (activeTab === 'house-land') {
            updateBudgetOptions('house-land'); // starting budget 600k
            standardFilters.style.display = 'flex';
            helpFilters.style.display = 'none';
            widgetHeading.textContent = 'Choose your house and land options';

            var currentState = stateSelect.value;
            regionSelect.innerHTML = '<option value="all">All</option>';
            if (regions[currentState]) {
                regions[currentState].forEach(function (r) { regionSelect.appendChild(new Option(r, r)); });
                regionWrapper.style.display = 'flex';
            } else {
                regionWrapper.style.display = 'none';
            }
        }
        else {
            updateBudgetOptions('homes'); // starting budget 300k
            standardFilters.style.display = 'flex';
            helpFilters.style.display = 'none';
            widgetHeading.textContent = 'Choose your house options';
            regionWrapper.style.display = 'none';
        }

        // 🔹 Push event to GA4
        trackEvent('widget_tab_click', { tab: activeTab });
    });
});

        // Define budget options for each tab
var budgetSelect = document.getElementById('budget');
var budgetOptions = {
    homes: [
        { value: 'all', label: 'All' },
        { value: '300000', label: '300,000' },
        { value: '400000', label: '400,000' },
        { value: '500000', label: '500,000' },
        { value: '600000', label: '600,000' },
        { value: '700000', label: '700,000' },
        { value: '800000', label: '800,000' },
        { value: '900000', label: '900,000' },
        { value: '1000000', label: '1,000,000' },
        { value: '1100000', label: '1,100,000' },
        { value: '1200000', label: '1,200,000' },
        { value: '1300000', label: '1,300,000' },
        { value: '1400000', label: '1,400,000' },
        { value: '1500000', label: '1,500,000' }
    ],
    'house-land': [
        { value: 'all', label: 'All' },
        { value: '600000', label: '600,000' },
        { value: '700000', label: '700,000' },
        { value: '800000', label: '800,000' },
        { value: '900000', label: '900,000' },
        { value: '1000000', label: '1,000,000' },
        { value: '1100000', label: '1,100,000' },
        { value: '1200000', label: '1,200,000' },
        { value: '1300000', label: '1,300,000' },
        { value: '1400000', label: '1,400,000' },
        { value: '1500000', label: '1,500,000' }
    ]
};

// Helper to rebuild budget select
function updateBudgetOptions(tab) {
    budgetSelect.innerHTML = '';
    budgetOptions[tab].forEach(function(opt) {
        var option = document.createElement('option');
        option.value = opt.value;
        option.textContent = opt.label;
        budgetSelect.appendChild(option);
    });
}

// initialise with "homes" 
updateBudgetOptions('homes');


        // Filter tracking
        ['budget', 'storeys', 'beds', 'baths', 'state'].forEach(function (id) {
            var el = document.getElementById(id);
            el.addEventListener('change', function () {
                trackEvent('widget_filter_change', { filter: id, value: this.value, tab: activeTab });
            });
        });

        // State change populates Region
        stateSelect.addEventListener('change', function () {
            var state = this.value;
            regionSelect.innerHTML = '<option value="all">All</option>';
            if (activeTab === 'house-land' && regions[state]) {
                regions[state].forEach(function (r) { regionSelect.appendChild(new Option(r, r)); });
                regionWrapper.style.display = 'flex';
            } else regionWrapper.style.display = 'none';
        });

        // About You
        aboutYou.addEventListener('change', function () {
            var selection = this.value;
            lookingFor.innerHTML = '<option value="">Please select</option>';
            locationSelect.innerHTML = '<option value="">Please select</option>';
            lookingForWrapper.style.display = 'none';
            locationWrapper.style.display = 'none';
            exploreButton.style.display = 'none';

            if (selection) {
                var options = helpOptions[selection].options;
                for (var key in options) {
                    if (options.hasOwnProperty(key)) {
                        var opt = document.createElement('option');
                        opt.value = key;
                        opt.textContent = options[key].name;
                        lookingFor.appendChild(opt);
                    }
                }
                lookingForWrapper.style.display = 'flex';
            }

            trackEvent('widget_filter_change', { filter: 'aboutYou', value: selection });
        });

        // Looking For
        lookingFor.addEventListener('change', function () {
            var aboutYouSelection = aboutYou.value;
            var lookingForSelection = this.value;
            locationSelect.innerHTML = '<option value="">Please select</option>';
            locationWrapper.style.display = 'none';
            exploreButton.style.display = 'none';

            if (aboutYouSelection && lookingForSelection) {
                var selectedOption = helpOptions[aboutYouSelection].options[lookingForSelection];
                if (selectedOption.locations) {
                    for (var key in selectedOption.locations) {
                        if (selectedOption.locations.hasOwnProperty(key)) {
                            var opt = document.createElement('option');
                            opt.value = key;
                            opt.textContent = selectedOption.locations[key].name;
                            locationSelect.appendChild(opt);
                        }
                    }
                    locationWrapper.style.display = 'flex';
                } else {
                    exploreButton.style.display = 'block';
                }
            }

            trackEvent('widget_filter_change', { filter: 'lookingFor', value: lookingForSelection });
        });

        // Location
        locationSelect.addEventListener('change', function () {
            exploreButton.style.display = this.value ? 'block' : 'none';
            trackEvent('widget_filter_change', { filter: 'location', value: this.value });
        });

        // Explore button
        exploreButton.addEventListener('click', function () {
            var aboutYouSelection = aboutYou.value;
            var lookingForSelection = lookingFor.value;
            var locationSelection = locationSelect.value;
            var url = '';

            if (aboutYouSelection && lookingForSelection) {
                var selectedOption = helpOptions[aboutYouSelection].options[lookingForSelection];
                if (locationSelection) url = selectedOption.locations[locationSelection].url;
                else url = selectedOption.url;

                trackEvent('widget_explore', {
                    aboutYou: aboutYouSelection,
                    lookingFor: lookingForSelection,
                    location: locationSelection,
                    url: url
                });

                window.location.href = url;
            }
        });

        // Search button
        searchButton.addEventListener('click', function () {
            var budget = document.getElementById('budget').value;
            var storeys = document.getElementById('storeys').value;
            var beds = document.getElementById('beds').value;
            var baths = document.getElementById('baths').value;
            var state = document.getElementById('state').value;
            var region = document.getElementById('region').value;

            var url = 'https://www.simonds.com.au/' + state.toLowerCase() + '/';
            url += (activeTab === 'homes') ? 'house-designs/' : 'house-and-land/';

            var params = [];
            if (budget !== 'all') params.push('priceMin=0&priceMax=' + parseInt(budget));
            if (storeys !== 'all') params.push('floor=' + storeys);
            if (beds !== 'all') params.push('beds=' + beds);
            if (baths !== 'all') params.push('baths=' + baths);
            if (region && region !== 'all') params.push('buildRegion=' + region.replace(/ /g, '+'));

            if (params.length) url += '?' + params.join('&');

            trackEvent('widget_search', { tab: activeTab, budget: budget, storeys: storeys, beds: beds, baths: baths, state: state, region: region, url: url });
            window.location.href = url;
        });
    }

    // ============================
    // SPA MutationObserver
    // ============================
    var observer = new MutationObserver(function () { var hdr = document.querySelector('.c-header'); if (hdr) insertAfterHeader(hdr); });
    observer.observe(document.body, { childList: true, subtree: true });
    var header = document.querySelector('.c-header'); if (header) insertAfterHeader(header);

})();