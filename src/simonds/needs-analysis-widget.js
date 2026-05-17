(function () {
    var DEFAULT_OPTIONS = {
        rootId: 'needs-analysis-root',
        insertAfterId: 'above-content'
    };

    var FUNNEL_DATA = {
        car: {
            title: 'Car Insurance',
            url: 'https://example.com/funnels/car-insurance',
            baseCopy: 'Comprehensive and third-party options for everyday drivers.'
        },
        home: {
            title: 'Home Insurance',
            url: 'https://example.com/funnels/home-insurance',
            baseCopy: 'Cover for owner-occupied and investment properties with optional contents protection.'
        },
        motorcycle: {
            title: 'Motorcycle Insurance',
            url: 'https://example.com/funnels/motorcycle-insurance',
            baseCopy: 'Flexible cover for road and weekend riders with gear protection options.'
        },
        ctp: {
            title: 'CTP Insurance',
            url: 'https://example.com/funnels/ctp',
            baseCopy: 'Mandatory cover that protects against injury claims from road accidents.'
        }
    };

    function initNeedsAnalysisWidget(userOptions) {
        var options = extend({}, DEFAULT_OPTIONS, userOptions || {});
        var root = document.getElementById(options.rootId);

        if (!root) {
            root = createRootAfter(options.insertAfterId, options.rootId);
        }

        if (!root) {
            if (typeof console !== 'undefined' && console.warn) {
                console.warn('Needs analysis root not found:', options.rootId);
            }
            return;
        }

        root.className = root.className ? root.className + ' needs-analysis-widget' : 'needs-analysis-widget';
        root.innerHTML = '';

        var form = buildForm();
        var results = document.createElement('div');
        results.className = 'needs-analysis-results';

        form.addEventListener('submit', function (event) {
            event.preventDefault();
            var values = collectValues(form);
            renderProfile(values, results);
        });

        root.appendChild(form);
        root.appendChild(results);
    }

    function buildForm() {
        var form = document.createElement('form');
        form.className = 'needs-analysis-form';

        form.appendChild(createFieldset('About you', [
            createSelectField('lifeStage', 'What best describes you?', [
                optionConfig('', 'Please select'),
                optionConfig('newDriver', 'New to driving or recently licensed'),
                optionConfig('familyDriver', 'Driving for a family household'),
                optionConfig('experiencedDriver', 'Experienced driver with no recent claims'),
                optionConfig('businessOwner', 'Business owner managing vehicles'),
                optionConfig('homeOwner', 'Home owner focused on asset protection')
            ]),
            createSelectField('livingSituation', 'Where do you currently live?', [
                optionConfig('', 'Please select'),
                optionConfig('ownHome', 'I own the home I live in'),
                optionConfig('renting', 'I rent my home'),
                optionConfig('share', 'I live with family or housemates'),
                optionConfig('investor', 'I own an investment property')
            ])
        ]));

        form.appendChild(createFieldset('Vehicles', [
            createSelectField('vehicleUsage', 'How do you use your main car?', [
                optionConfig('', 'Please select'),
                optionConfig('commute', 'Daily commuting and personal use'),
                optionConfig('business', 'Business deliveries or rideshare'),
                optionConfig('weekend', 'Occasional weekend driving'),
                optionConfig('familyTrips', 'Family trips and school runs')
            ]),
            createSelectField('vehicleCoveragePriority', 'What matters most for your car cover?', [
                optionConfig('', 'Please select'),
                optionConfig('repairSpeed', 'Fast repairs and rental car'),
                optionConfig('budget', 'Keeping premiums low'),
                optionConfig('fullCover', 'Maximum protection for my car'),
                optionConfig('extras', 'Extras like roadside assistance')
            ]),
            createSelectField('ownsMotorcycle', 'Do you own or regularly ride a motorcycle?', [
                optionConfig('', 'Please select'),
                optionConfig('yes', 'Yes, I ride frequently'),
                optionConfig('occasional', 'Yes, but only occasionally'),
                optionConfig('no', 'No')
            ])
        ]));

        form.appendChild(createFieldset('Property', [
            createSelectField('propertyFocus', 'What do you need to protect?', [
                optionConfig('', 'Please select'),
                optionConfig('buildingAndContents', 'Home structure and contents'),
                optionConfig('contentsOnly', 'Belongings inside the home'),
                optionConfig('landlord', 'Investment property with tenants'),
                optionConfig('buildingOnly', 'The building only (strata covers the rest)')
            ]),
            createSelectField('propertyLocation', 'Where is your main property located?', [
                optionConfig('', 'Please select'),
                optionConfig('metro', 'Metro area'),
                optionConfig('coastal', 'Coastal or flood prone area'),
                optionConfig('regional', 'Regional or rural location')
            ])
        ]));

        form.appendChild(createFieldset('State and compliance', [
            createSelectField('registrationState', 'Where are your vehicles registered?', [
                optionConfig('', 'Please select'),
                optionConfig('NSW', 'New South Wales'),
                optionConfig('QLD', 'Queensland'),
                optionConfig('SA', 'South Australia'),
                optionConfig('VIC', 'Victoria'),
                optionConfig('WA', 'Western Australia'),
                optionConfig('ACT', 'Australian Capital Territory'),
                optionConfig('NT', 'Northern Territory'),
                optionConfig('TAS', 'Tasmania')
            ]),
            createSelectField('claimsComfort', 'How comfortable are you with handling claims yourself?', [
                optionConfig('', 'Please select'),
                optionConfig('handsOn', 'Happy to self-manage and compare quotes'),
                optionConfig('guided', 'Prefer guided support when things go wrong'),
                optionConfig('concierge', 'Want full concierge-style claims support')
            ])
        ]));

        var submit = document.createElement('button');
        submit.type = 'submit';
        submit.className = 'needs-analysis-submit';
        submit.textContent = 'Generate my insurance snapshot';
        form.appendChild(submit);

        return form;
    }

    function renderProfile(values, container) {
        var profile = buildProfileSummary(values);
        var recommendationCopy = buildRecommendationNotes(values);

        container.innerHTML = '';

        var heading = document.createElement('h3');
        heading.textContent = 'Your snapshot';
        container.appendChild(heading);

        var summary = document.createElement('p');
        summary.className = 'needs-analysis-summary';
        summary.textContent = profile;
        container.appendChild(summary);

        var recommendationList = document.createElement('div');
        recommendationList.className = 'needs-analysis-recommendations';

        for (var key in FUNNEL_DATA) {
            if (FUNNEL_DATA.hasOwnProperty(key)) {
                recommendationList.appendChild(buildRecommendationCard(key, values, recommendationCopy[key]));
            }
        }

        container.appendChild(recommendationList);
    }

    function buildRecommendationCard(key, values, tailoredCopy) {
        var funnel = FUNNEL_DATA[key];
        var card = document.createElement('div');
        card.className = 'needs-analysis-card needs-analysis-card-' + key;

        var title = document.createElement('h4');
        title.textContent = funnel.title;
        card.appendChild(title);

        var body = document.createElement('p');
        body.textContent = tailoredCopy || funnel.baseCopy;
        card.appendChild(body);

        var actions = document.createElement('div');
        actions.className = 'needs-analysis-actions';

        var link = document.createElement('a');
        link.href = funnel.url;
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.textContent = 'Explore ' + funnel.title.toLowerCase();
        actions.appendChild(link);

        card.appendChild(actions);
        return card;
    }

    function buildProfileSummary(values) {
        var parts = [];

        if (values.lifeStage) {
            parts.push(formatLifeStage(values.lifeStage));
        }

        if (values.vehicleUsage) {
            parts.push(formatVehicleUsage(values.vehicleUsage, values.vehicleCoveragePriority));
        }

        if (values.ownsMotorcycle && values.ownsMotorcycle !== 'no') {
            parts.push('Rides a motorcycle and needs cover that suits ' + (values.ownsMotorcycle === 'yes' ? 'regular' : 'occasional') + ' trips.');
        }

        if (values.propertyFocus) {
            parts.push(formatPropertyFocus(values.propertyFocus, values.livingSituation));
        }

        if (values.registrationState) {
            parts.push('Vehicles registered in ' + values.registrationState + '.');
        }

        if (!parts.length) {
            return 'Tell us a little about your situation so we can guide you to the right cover.';
        }

        return parts.join(' ');
    }

    function formatLifeStage(value) {
        var lookup = {
            newDriver: 'Recently licensed driver building confidence on the road.',
            familyDriver: 'Managing transport for a busy family household.',
            experiencedDriver: 'Experienced behind the wheel with a focus on avoiding disruptions.',
            businessOwner: 'Operating vehicles as part of a business and keeping downtime low.',
            homeOwner: 'Protecting major assets and looking for bundled cover options.'
        };
        return lookup[value] || '';
    }

    function formatVehicleUsage(usage, priority) {
        var baseLookup = {
            commute: 'Uses their car daily for commuting and personal trips.',
            business: 'Relies on their car for business or paid driving.',
            weekend: 'Keeps the car for weekend adventures and occasional errands.',
            familyTrips: 'Needs dependable transport for family trips and school runs.'
        };
        var text = baseLookup[usage] || '';

        if (priority) {
            var priorityLookup = {
                repairSpeed: 'Values quick turnaround and alternate vehicles after incidents.',
                budget: 'Looking to balance protection with premium costs.',
                fullCover: 'Prefers complete protection against damage, theft and weather.',
                extras: 'Wants optional extras like roadside assistance and windscreen cover.'
            };
            text += text ? ' ' : '';
            text += priorityLookup[priority] || '';
        }

        return text;
    }

    function formatPropertyFocus(focus, livingSituation) {
        var focusLookup = {
            buildingAndContents: 'Wants to safeguard their home and belongings.',
            contentsOnly: 'Needs flexible contents cover for rented or shared spaces.',
            landlord: 'Seeks landlord protection for tenants and rental income.',
            buildingOnly: 'Wants building-only cover with carefully selected extras.'
        };
        var situationLookup = {
            ownHome: 'Lives in the home they own.',
            renting: 'Currently renting and wants protection for belongings.',
            share: 'Lives with others and needs cover that fits shared spaces.',
            investor: 'Owns an investment property alongside their residence.'
        };
        var text = focusLookup[focus] || '';
        if (livingSituation) {
            text += text ? ' ' : '';
            text += situationLookup[livingSituation] || '';
        }
        return text;
    }

    function buildRecommendationNotes(values) {
        var notes = {};

        notes.car = FUNNEL_DATA.car.baseCopy;
        if (values.vehicleUsage === 'business') {
            notes.car = 'Consider a policy that supports commercial or rideshare driving with downtime cover.';
        } else if (values.vehicleCoveragePriority === 'extras') {
            notes.car = 'Bundle roadside assistance and hire-car cover with your comprehensive policy.';
        } else if (values.vehicleCoveragePriority === 'budget') {
            notes.car = 'Start with third-party property cover and add comprehensive when budgets allow.';
        }

        notes.home = FUNNEL_DATA.home.baseCopy;
        if (values.propertyFocus === 'contentsOnly') {
            notes.home = 'Focus on contents cover that includes portable valuables and accidental damage.';
        } else if (values.propertyFocus === 'landlord') {
            notes.home = 'Look for landlord cover that protects rental income and tenant-related damage.';
        }
        if (values.propertyLocation === 'coastal') {
            notes.home += ' Double-check storm surge and flood options for coastal addresses.';
        }

        notes.motorcycle = FUNNEL_DATA.motorcycle.baseCopy;
        if (values.ownsMotorcycle === 'occasional') {
            notes.motorcycle = 'Casual riders often balance lower premiums with agreed value for their bike.';
        } else if (values.ownsMotorcycle === 'yes') {
            notes.motorcycle = 'Regular riders should consider gear protection and roadside assistance add-ons.';
        } else if (values.ownsMotorcycle === 'no') {
            notes.motorcycle = 'Skip if you do not ride; add motorcycle cover later if circumstances change.';
        }

        notes.ctp = FUNNEL_DATA.ctp.baseCopy;
        if (values.registrationState === 'NSW' || values.registrationState === 'QLD') {
            notes.ctp += ' Compare providers in your state for price and added benefits.';
        }
        if (values.registrationState === 'VIC') {
            notes.ctp += ' Remember TAC coverage is included, but optional top-ups can fill the gaps.';
        }

        return notes;
    }

    function collectValues(form) {
        return {
            lifeStage: getFieldValue(form, 'lifeStage'),
            livingSituation: getFieldValue(form, 'livingSituation'),
            vehicleUsage: getFieldValue(form, 'vehicleUsage'),
            vehicleCoveragePriority: getFieldValue(form, 'vehicleCoveragePriority'),
            ownsMotorcycle: getFieldValue(form, 'ownsMotorcycle'),
            propertyFocus: getFieldValue(form, 'propertyFocus'),
            propertyLocation: getFieldValue(form, 'propertyLocation'),
            registrationState: getFieldValue(form, 'registrationState'),
            claimsComfort: getFieldValue(form, 'claimsComfort')
        };
    }

    function getFieldValue(form, name) {
        var field = form.querySelector('[name="' + name + '"]');
        return field ? field.value : '';
    }

    function createFieldset(legendText, fields) {
        var fieldset = document.createElement('fieldset');
        fieldset.className = 'needs-analysis-fieldset';

        var legend = document.createElement('legend');
        legend.textContent = legendText;
        fieldset.appendChild(legend);

        for (var i = 0; i < fields.length; i += 1) {
            fieldset.appendChild(fields[i]);
        }
        return fieldset;
    }

    function createSelectField(name, labelText, options) {
        var wrapper = document.createElement('label');
        wrapper.className = 'needs-analysis-field';

        var label = document.createElement('span');
        label.className = 'needs-analysis-label';
        label.textContent = labelText;
        wrapper.appendChild(label);

        var select = document.createElement('select');
        select.name = name;
        select.className = 'needs-analysis-select';

        for (var i = 0; i < options.length; i += 1) {
            select.appendChild(buildOption(options[i]));
        }

        wrapper.appendChild(select);
        return wrapper;
    }

    function optionConfig(value, label) {
        return { value: value, label: label };
    }

    function buildOption(config) {
        var option = document.createElement('option');
        option.value = config.value;
        option.textContent = config.label;
        return option;
    }

    function createRootAfter(anchorId, rootId) {
        if (!anchorId) {
            return null;
        }
        var anchor = document.getElementById(anchorId);
        if (!anchor || !anchor.parentNode) {
            return null;
        }
        var existing = document.getElementById(rootId);
        if (existing) {
            return existing;
        }
        var wrapper = document.createElement('div');
        wrapper.id = rootId;
        anchor.parentNode.insertBefore(wrapper, anchor.nextSibling);
        return wrapper;
    }

    function whenDomReady(callback) {
        if (!callback) {
            return;
        }
        if (document.readyState === 'loading') {
            var handler = function () {
                document.removeEventListener('DOMContentLoaded', handler);
                callback();
            };
            document.addEventListener('DOMContentLoaded', handler);
        } else {
            callback();
        }
    }

    function extend(target) {
        for (var i = 1; i < arguments.length; i += 1) {
            var source = arguments[i];
            if (!source) {
                continue;
            }
            for (var key in source) {
                if (source.hasOwnProperty(key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    }

    if (!window.NeedsAnalysisWidget) {
        window.NeedsAnalysisWidget = {};
    }

    window.NeedsAnalysisWidget.init = initNeedsAnalysisWidget;

    whenDomReady(function () {
        initNeedsAnalysisWidget();
    });
})();
