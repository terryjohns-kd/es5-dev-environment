(function() {
  var globalTagVersion = '7.0.27';
  var entirePageHide = 'body { opacity: 0.00000001 !important; }';
  var spaEvents = ['optimize.activate', 'page_view', 'virtualPageView'];
  var whitelist = [
    {
      // Prod - QBE AU - HP - Test
      URLs: [/\/au(\/)?\?wt_test=true/i],
      css: entirePageHide
    },
    {
      // Prod - QBE AU - CTP Quote - HP - For Optimials
      URLs: [/greenslip\.qbe\.com\/CTP_Internet_Quotes\/Greenslips(\/)?[?&]BNDE=xt6lvGSAnWI/i],
      css: entirePageHide
    },
    {
      // Prod - Greenslips AU - CTP Quote - For Optimials
      URLs: [/greenslip\.qbe\.com\/CTP_Internet_Quotes\/Greenslips(\/)?[?&]BNDE=hWjUiUTGBzs=/i],
      css: entirePageHide
    },
    {
      // QBE Omni Landing Page
      URLs: [/www\.qbe\.com\/au\/portal\/quote\/vehicle(\/)?\?wt_test=true/i],
      css: 'h1'
    },
    {
      // Prod Campaign pages - Feefo
      URLs: [/\/au\/(comprehensive-car-insurance-save75|home-insurance-save10)\/?$/i],
      css: entirePageHide
    },
    {
      // QBE AU - Home Contents + Small Business
      URLs: [/\/au\/(home-insurance\/home-contents-insurance|business-insurance\/small-business)\/?$/i],
      css: entirePageHide
    },
    {
      // QBE CTP New Business: QBE Tests and Optimals
      URLs: [/greenslip\.qbe\.com\/CTP_Internet_Quotes\/(GetQuote|VehicleDetails|EstimatedQuotes|Contact|Help)/i],
      css: entirePageHide
    },
    {
      // digiSME: 159 Feefo Optimial
      URLs: [/www\.qbe\.com\/au\/quote\/business\/business-details/i],
      css: '.app-bar__custom-area'
    }
  ];
  function isReactSpa(pathname, meta) {
    return pathname.indexOf('/au/portal/quote/') > -1 || // Omni
    pathname.indexOf('/au/quote/business/') > -1 || // DigiSME
    pathname.indexOf('au/insurance/motorcycle') > -1 || // Motorcycle
    pathname.indexOf('/au/qbe4qldctp') > -1 || // CTP QLD (WT script not installed)
    pathname.indexOf('/au/ctp-sa/ctp') > -1 || // CTP SA (WT script not installed)
    pathname.indexOf('/au/pay-bills') > -1 || // Pay My Bills (WT script not installed)
    pathname.indexOf('/au/login/retrieve-quote') > -1 || // Retrieve Quote (WT script not installed)
    meta && meta.appName === 'DigiSME';
  }
  function isCtpPath(pathname) {
    return pathname.indexOf('/CTP_Internet_Quotes/') > -1 || pathname.indexOf('/au/green-slip-insurance/nsw/ctp/renewal/') > -1;
  }
  function getAppProfile() {
    var meta = window.qbeTrack && window.qbeTrack.meta ? window.qbeTrack.meta : {};
    var pathname = document.location.pathname;
    if (isCtpPath(pathname)) {
      return {
        app: 'ctp',
        setupMode: 'dataLayerZero',
        setupWaitEvents: false,
        setupTimeout: 0,
        runtimeEvents: false,
        historyRoutes: false,
        requestDecisions: false
      };
    }
    if (isReactSpa(pathname, meta)) {
      return {
        app: 'react-spa',
        setupMode: 'dataLayer',
        setupWaitEvents: spaEvents,
        setupTimeout: 2e3,
        runtimeEvents: spaEvents,
        historyRoutes: false,
        requestDecisions: false
      };
    }
    return {
      app: 'sitecore-xmc',
      detection: 'fallback-xmc',
      setupMode: 'immediate',
      setupWaitEvents: false,
      setupTimeout: 0,
      runtimeEvents: false,
      historyRoutes: true,
      requestDecisions: true
    };
  }
  var set = {
    version: globalTagVersion,
    // Timeout before anti-flicker aborts
    delay: 4e3,
    whitelist: whitelist,
    profile: getAppProfile(),
    wtEvent: 'wt-optimise-activate',
    // Read the standard Virtual Page View (VPV) field used across QBE SPAs.
    getVpv: function(dlObj) {
      if (!dlObj) return null;
      return dlObj.virtualPagePath || dlObj.virtualPageURL || null;
    },
    debugMode: function() {
      try {
        if (/wt_test=true|_wt.context/i.test(document.location.search)) return true;
        if (typeof localStorage !== 'undefined' && localStorage.getItem('wt_test') === 'true') {
          return true;
        }
      } catch (e) {
        console.warn('WTO: Unable to access localStorage for debugMode check.', e);
      }
      return false;
    }()
  };
  if (typeof WT !== 'undefined' && WT.optimizeModule && WT.optimizeModule.prototype && WT.optimizeModule.prototype.wtConfigObj) {
    WT.optimizeModule.prototype.wtConfigObj.libUrl = 'https://c.webtrends-optimize.com/acs/common/js/7.0/wt_lib.js';
    WT.optimize.g_ConfigParams.s_otsServer = 'pat.webtrends-optimize.com';
    WT.optimizeModule.prototype.wtConfigObj.s_otsServer = 'pat.webtrends-optimize.com';
  } else if (set.debugMode) {
    console.warn('WTO: WT.optimizeModule.prototype.wtConfigObj is undefined. libUrl assignment skipped.');
  }
  function log(message, args) {
    if (set.debugMode) console.log(message, args);
  }
  
  (function() {
    log('WTO: Webtrends Optimize globalTag Script Version', set.version);
    log('WTO: app profile', set.profile);
    if (set.profile.detection === 'fallback-xmc') {
      log('WTO: Sitecore XMC fallback selected. If this is a React SPA, add its path to isReactSpa().');
    }
  })();
  log('WTO: isSitecoreXMC', set.profile.app === 'sitecore-xmc');
  WT.optimizeModule.prototype.checkWhitelist_CUSTOM=function(){var a=set.whitelist||[];CSS.escape||(CSS.escape=function(i){return i.replace(/[^a-zA-Z0-9_\-]/g,function(e){var n=e.charCodeAt(0).toString(16);return'\\'+n+' ';});});try{for(var i=function(){return window.performance&&typeof window.performance.now=='function'?window.performance.now():Date.now();},o=[],r=0;r<a.length;r++){var t=a[r];if(!(!t.URLs||!t.css)){var h=Array.isArray(t.URLs)?t.URLs:[t.URLs],p=t.css,c=h.some(function(e){return window.location.href.match(e);});c&&(o.push(p),WT.optimizeModule.prototype.wtConfigObj.s_pageTimeout=5e3,WT.optimizeModule.prototype.wtConfigObj.s_pageDisplayMode='custom');}}if(o.length===0)return log('WTO: No whitelist matches found, skipping anti-flicker.'),!1;var u=o.map(function(e){return e.replace(/\[class\^="([^"]+)"\]/g,function(n,m){return'[class^="'+CSS.escape(m)+'"]';});}),s=u.join(', ')+' { opacity: 0.00001 !important; }',f='wto-css-antiflicker',l={styleElement:null,hiddenStart:null,add:function(){this.styleElement||(this.hiddenStart=i(),this.styleElement=document.createElement('style'),this.styleElement.type='text/css',this.styleElement.id=f,this.styleElement.appendChild(document.createTextNode(s)),document.head.appendChild(this.styleElement),log('WTO: Anti-flicker added hidden style',s));},remove:function(e){var n;this.styleElement&&this.styleElement.parentNode&&(n=this.hiddenStart!==null?Math.round(i()-this.hiddenStart):0,this.styleElement.parentNode.removeChild(this.styleElement),this.styleElement=null,this.hiddenStart=null,log('WTO: Anti-flicker removed hidden style by '+e+'. Hidden for '+n+'ms.'));}};l.add();var d=typeof set.delay=='number'?set.delay:5e3;return setTimeout(function(){l.remove(d+'ms setTimeout error');},d),WT.addEventHandler('hide_show',function(e){e.params&&typeof e.params.display=='boolean'&&(e.params.display===!1?l.add():l.remove('hide_show event callback'));}),o.length>0;}catch(i){return console.log('WTO: Error in checkWhitelist_CUSTOM:',i),!1;}},WT.optimizeModule.prototype.checkWhitelist_CUSTOM();
  WT.trackGA={assId:'_wt.assignments',parse:function(t){try{return JSON.parse(t);}catch(e){return log('WTO: WT.trackGA() unable to parse JSON:',e),{};}},stringify:function(t){try{return JSON.stringify(t);}catch(e){return log('WTO: WT.trackGA() unable to stringify JSON:',e),'{}';}},setSS:function(t,e){if(WT.SPA&&WT.SPA.isSpa&&(typeof WT.SPA.assign!='object'&&(WT.SPA.assign={}),WT.SPA.assign[t]=e),!!WT.hasss){var i=this.parse(sessionStorage.getItem(this.assId)||'{}');i[t]=e,sessionStorage.setItem(this.assId,this.stringify(i));}},getSS:function(){return WT.hasss?this.parse(sessionStorage.getItem(this.assId)||'{}'):WT.SPA&&typeof WT.SPA.assign=='object'?WT.SPA.assign:{};},dlPush:function(t,e){var i=WT.optimizeModule&&WT.optimizeModule.prototype&&WT.optimizeModule.prototype.wtConfigObj&&WT.optimizeModule.prototype.wtConfigObj.data&&WT.optimizeModule.prototype.wtConfigObj.data['qbe.virtualPagePath']||window.location.pathname,s=t+i,a=this.getSS();if(!(a&&a[s]===e))return window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:'experiment_impression',eventAction:'webtrends optimize',eventLabel:'globalTag script v'+(set&&set.version),data:{experimentId:t,variantId:t+'.'+e}}),this.setSS(s,e);}};
  log('WTO: set',set),function(){var i=set.profile||{};function o(){return WT.optimizeModule.prototype.wtConfigObj.data;}function u(){return document.location.pathname+document.location.search+document.location.hash;}function c(){return document.location.pathname+document.location.hash;}function h(e){if(typeof Event=='function')return new Event(e);var t=document.createEvent('Event');return t.initEvent(e,!0,!0),t;}WT.SPA={cache:[],assign:{},ver:set.version,profile:i,app:i.app,setupMode:i.setupMode||'immediate',setupWaitEvents:i.setupWaitEvents||!1,setupTimeout:i.setupTimeout||0,runtimeEvents:i.runtimeEvents||!1,historyRoutes:!!i.historyRoutes,requestDecisions:!!i.requestDecisions,setupComplete:!1,pendingDecisionReason:null,wtPageChangeEvent:'wt-page-change',regex:i.requestDecisions?/.+/i:/a^/,method:function(){return u();},debug:set.debugMode,isSpa:!!(i.runtimeEvents||i.historyRoutes),handleDlMerge:function(e){var t;return!e||(t=set.getVpv(e),!t)?!1:(e.virtualPagePath=t,o()['qbe.virtualPagePath']=t,log('WTO: qbe.virtualPagePath',t),t);},handleDataLayerZero:function(){return!window.dataLayer||!window.dataLayer.length?!1:this.handleDlMerge(window.dataLayer[0]);},getPage:function(){return o()['qbe.virtualPagePath']||c();},on:function(e,t,n){try{if(!e)throw new Error('WTO: No regex string');var a=e instanceof RegExp?e:new RegExp(e,'ig'),r={regex:a,cb:t,neg:n},s=this.getPage();if(WT.SPA.cache.push(r),log('WTO: spa.on() page',s),log('WTO: spa.on() page match re',a),n&&s.match(a)||!s.match(a))return;t();}catch(p){log('WTO: SPA.on() error: ',p);}},activate:function(e){log('WTO: SPA activate',e),document.dispatchEvent(h(set.wtEvent)),this.requestDecision(e);},dispatchPageChange:function(e){var t;this.setHistoryPage(),t=h(this.wtPageChangeEvent),t.wtReason=e||'unknown',t.wtPage=this.getPage(),log('WTO: requestDecision dispatching wt-page-change',{reason:t.wtReason,page:t.wtPage}),document.dispatchEvent(t);},requestDecision:function(e){if(this.requestDecisions){if(!this.setupComplete){this.pendingDecisionReason=e||'unknown',log('WTO: requestDecision queued until setup complete',this.pendingDecisionReason);return;}this.dispatchPageChange(e);}},markSetupComplete:function(e){var t=this.pendingDecisionReason;this.setupComplete=!0,this.pendingDecisionReason=null,log('WTO: setup complete for SPA decisions',e),t&&this.requestDecision(t);},matchesRuntimeEvent:function(e){return!e||!this.runtimeEvents?!1:this.runtimeEvents.indexOf(e.event)>-1;},processRuntimeDataLayerObj:function(e,t){var n;return!this.matchesRuntimeEvent(e)||(log('WTO: dataLayerIntercept evaluating event..',e.event),n=this.handleDlMerge(e),t&&!n)?!1:(n&&log('WTO: dataLayerIntercept merge complete for "'+e.event+'". Check: WT.optimizeModule.prototype.wtConfigObj.data'),this.activate('dataLayer:'+e.event),!0);},processExistingRuntimeDataLayer:function(){var e;if(!window.dataLayer||!window.dataLayer.length)return!1;for(e=window.dataLayer.length-1;e>-1;e--)if(this.processRuntimeDataLayerObj(window.dataLayer[e],!0))return!0;return!1;},dataLayerIntercept:function(){var e,t=this;if(!this.runtimeEvents){log('WTO: dataLayerIntercept skipped. No runtime events configured for '+this.app+'.');return;}window.dataLayer=window.dataLayer||[],e=window.dataLayer.push,this.processExistingRuntimeDataLayer(),window.dataLayer.push=function(){var n,a;for(n=0;n<arguments.length;n++)try{t.processRuntimeDataLayerObj(arguments[n],!1);}catch(r){log('WTO: dataLayer intercept error: ',r);}return a=e.apply(this,arguments),a;};},setHistoryPage:function(){var e=c();return o()['qbe.virtualPagePath']=e,log('WTO: history route page',e),e;},installHistoryListener:function(){var e,t,n=this;if(!this.historyRoutes||!window.history||this.historyPatched)return;this.historyPatched=!0,this.currentRoute=u(),e=window.history.pushState,t=window.history.replaceState;function a(r){var s=u();s!==n.currentRoute&&(n.currentRoute=s,n.historyTimer&&clearTimeout(n.historyTimer),n.historyTimer=setTimeout(function(){n.setHistoryPage(),n.activate(r);},50));}e&&(window.history.pushState=function(){var r=e.apply(this,arguments);return a('history.pushState'),r;}),t&&(window.history.replaceState=function(){var r=t.apply(this,arguments);return a('history.replaceState'),r;}),window.addEventListener&&window.addEventListener('popstate',function(){a('history.popstate');}),log('WTO: history listener installed',this.app);}},WT.SPA.run=function(e){if(!e||!e.vpv||!e.callback){var t='WTO: WT.SPA.run() missing required config properties';throw log(t),new Error(t);}var n=e.test||'WTO Test name missing',a=e.variant||'WTO Variant name missing',r=n+'.'+a;log('WTO: Init '+r),WT.SPA.on(e.vpv,function(){try{e.callback(),typeof WT.trackGA!='undefined'&&WT.trackGA.dlPush(n,a);}catch(s){window.dataLayer=window.dataLayer||[],window.dataLayer.push({event:'webtrends_error',eventAction:r,eventLabel:s});}});},WT.SPA.dataLayerIntercept(),WT.SPA.installHistoryListener(),document.addEventListener(set.wtEvent,function(){WT.SPA.cache.forEach(function(e){var t=WT.SPA.getPage();if(!(e.neg&&t.match(e.regex))&&t.match(e.regex))try{e.cb();}catch(n){log('WTO: SPA callback error: ',n);}});});}();(WT.ConversionPackage=function(){try{if (!window.WT.optimize||typeof WT.optimize.trackConv!=='function'||!WT.getProjectCookies){setTimeout(WT.ConversionPackage, 200);return;}var h=function(e){var n=window.location.href,o=i.getTestAliases();if(!(!o||!o.length))for(var a=0;a<x.length;a++){var t=x[a];if(!e&&!t.onEvent||t.onEvent===e){if(t.regex){var r=t.regex instanceof Array?t.regex:[t.regex],c=i.getMatchingUrl(n,r);if(!c)continue;}if(t.path){var r=t.regex instanceof Array?t.regex:[t.regex],c=i.getMatchingUrl(location.pathname,r);if(!c)continue;}if(t.ifCondition)try{if(!t.ifCondition())continue;}catch(s){continue;}var d={};if(typeof t.collectData=='function')try{d=t.collectData();}catch(s){}i.trackAliases(o,_,t,d);}}},T=function(e){try{if(!(e instanceof Array))return'bad input';var n=i.getTestAliases();if(!n||!n.length)return'no control cookies found, nothing to store.';e.forEach(function(o){if(o.event){var a={};if(o.data)for(var t in o.data)(typeof o.data[t]).match(/number|string/i)&&(a[t]=o.data[t]);i.trackAliases(n,_,{name:o.event},a);}});}catch(o){}},_=['ta_dummy_exclude'],x=[];window.location.href.match(/_wt.convPackageDebug=true/i)&&(document.cookie='_wt.convPackageDebug=true;path=/;');var u={},b=!!document.cookie.match(/_wt.convPackageDebug=true/i);b?(u.debug=window.console,u.debug.alert=window.alert):u.debug={log:function(){},info:function(){},warn:function(){},error:function(){},dir:function(){},alert:function(){}},u.debug.log('Conversion Package Running');var i={};WT.CPCore=i;var y=WT.optimizeModule.prototype.wtConfigObj,f=y.s_domainKey,M=y.s_keyToken;i.cookieMethods=WT.helpers.cookie;var m=function(e){var r=e.additionalCookies||{},c=document.cookie.match(/_wt\.(user|mode)-[^=]+=[^;\s$]+/ig);if(c){WT.optimize.trackConv(e.conversionPoint, e.data, r);}};WT.helpers.CTrack2=m,i.getTestAliases=function(){if(window.location.search.match(/cpDummy/i)&&!i.cookieMethods.has('wt_dummy_pkg')){var e=window.prompt();i.cookieMethods.set('wt_dummy_pkg',e,1);}var n=document.cookie.match(/_wt.control\-\d+\-([^=]+)/g),o=document.cookie.match(/_wt.project/i);if(!n&&!o)return!1;var a=[];if(i.cookieMethods.has('wt_dummy_pkg')){var t=i.cookieMethods.get('wt_dummy_pkg');a.push(t);}else if(n)for(var r=0;r<n.length;r++){var c=n[r].replace(/_wt.control\-\d+\-/i,'');a.push(c);}if(WT.getProjectCookies)for(var d=Object.keys(WT.getProjectCookies()),r=0;r<d.length;r++)a.push(d[r].replace(/_wt.control\-\d+\-/i,''));return a;},i.getMatchingUrl=function(e,n){for(var o=0;o<n.length;o++)if(e.match(n[o]))return u.debug.log('page matches:',n[o]),!0;},i.trackAliases=function(e,n,o,a){a=typeof a=='undefined'?{}:a;for(var t=0;t<n.length;t++){var r=n[t];index=e&&e.indexOf(r),index>-1&&e.splice(index,1);}var c={testAlias:'',conversionPoint:o.name,additionalCookies:{},data:a},d={};WT.getProjectCookies&&(d=WT.getProjectCookies());for(var s=0;s<e.length;s++){var p=e[s],v='_wt.control-'+f+'-'+p,w=i.cookieMethods.get(v);w&&(c.additionalCookies[v]={value:w});var g=d[v];g&&(c.additionalCookies[v]=g);}var l=e.join();c.testAlias=l,c.additionalCookies['_wt.user-'+f]={value:i.cookieMethods.get('_wt.user-'+f)},c.additionalCookies['_wt.mode-'+f]={value:i.cookieMethods.get('_wt.mode-'+f)},u.debug.log('ctrack:',c),m(c);},WT.trackEvent=function(e){i.trackAliases([e.testAlias],[],{name:e.conversionPoint},e.data||{});},WT.addEventHandler('INITIALIZE',function(){h(!1);}),window.opt_data&&opt_data.length&&T(opt_data),(!window.opt_data||window.opt_data instanceof Array)&&(window.opt_data={h:window.opt_data||[],push:function(e){try{return e?e.event?(this.h.push(e),T([e]),this.h):'opt_data.push - you should provide o.event':'opt_data.push - missing any arguments';}catch(n){return n;}}});}catch(h){document.cookie.match(/_wt.bdebug=true/i)&&console.log(h);}})();(function(){try{var e=function(t){if(!window.clarity||typeof clarity!='function'){setTimeout(function(i){e(i);},500,t);return;}WT.helpers.bdebug.log('WTO: clarity set',t.WT_test,t.WT_variation.toString()),clarity('set',t.WT_test,t.WT_variation.toString());};WT.addEventHandler('pageview',function(t){t=t.target.getParams();var i=t.testAlias,r=t.r_experimentID||t.r_personalizedID||'BASELINE';e({WT_test:i,WT_variation:r});});}catch(e){document.cookie.match(/_wt.bdebug=true/i)&&console.log(e);}})();
  
})();