(function(){
    function getParts(url){
        // handle full URLs or ones that start from a pathname
        
        var o = {params: {}};
        
        var qs_split = url.split('?');
        if(qs_split.length > 1){
            o.query = qs_split[1].replace(/#.+/,''); // not interested in hashes for url checks
            o.query.split('&').forEach(function(item){
                
                var queryParts = item.split('=');
                if(queryParts[0]){
                    o.params[queryParts[0]] = queryParts[1] || '';
                }
                
            });
        }
        
        var afterprotocol = qs_split[0].replace(/^(https?:)?\/\//i, '');
        var firstForwardSlash = afterprotocol.indexOf('/');
        
        if(firstForwardSlash === -1){ // it's just a host 
            o.host = afterprotocol;
            o.path = '/';
        
        } else if(firstForwardSlash === 0){ // it's just a pathname 
            o.host = location.host; // keep current host 
            o.path = afterprotocol;
            
        } else { // has both 
            o.host = afterprotocol.slice(0, firstForwardSlash);
            o.path = afterprotocol.slice(firstForwardSlash);
            
        }
        
        return o;
    }
    
    function mergeURLs(a, b){
        if(bDebug) console.log('mergeURLs: ', a, b);
        for(var key in a.params){
            
            if(!b.params[key]){ // not present - overwrite 
                b.params[key] = a.params[key];
            }
            
        }
        return b;
    }
    
    function compileParts(parts){
        var str = 'https://' + parts.host + parts.path;

        var qs = '';
        for(var key in parts.params){
            if(qs == '') qs = '?';
            if(qs == '?') {
                qs += key + '=' + (parts.params[key] || '');
            } else {
                qs += '&' + key + '=' + (parts.params[key] || '');
            }
        }
        
        return str + qs;
    }

            // 4. Define what to do on redirect 
            function doRedirect(){
            
                if(bDebug) console.log('doRedirect()');
                
                if(redisplayCalled || redirectionCalled) return; // too late or already called.
                
                if(bDebug) console.log('Redirect called');
                redirectionCalled = true;
                window.location.replace(finalURL);
                
            }
    var redirectionURL = decodeURIComponent('https%3A%2F%2Fwww.qbe.com%2Fau%2Fpay-my-bill-cro');
    var keepURLParams = false;
    var bDebug = document.cookie.match(/_wt.bdebug/i);

    try {
        var inVE = window.top.location.href != window.location.href; // should throw an error in the VE, and break the code.
        if(inVE) return; // quit.
        

        
        // 1. Check if we're on the redirect-to page
        var curURL = window.location.href;
        var curParts = getParts(curURL, true);
        var newParts = getParts(redirectionURL);
        
        // 1.1 - Keep params? merge them 
        // if(bDebug) console.log("1.1");
        if(keepURLParams) newParts = mergeURLs(curParts, newParts);
        
        // 1.2 - Build url 
        // if(bDebug) console.log("1.2");
        var finalURL = compileParts(newParts);
        
        // if(bDebug) console.log("1.3");
        var shouldRedirect = (function(){
            
            // if(bDebug) console.log("1.3.1");
            if(curParts.host && newParts.host && curParts.host !== newParts.host) return true;
            
            // if(bDebug) console.log("1.3.2");
            if(curParts.path && newParts.path && curParts.path !== newParts.path) return true;
            
            // if(bDebug) console.log("1.3.3");
            if(newParts.query){
                
                var mismatchFound = false;
                for(var key in newParts.params){
                    
                    if(!curParts.params[key] || curParts.params[key] !== newParts.params[key]){
                        mismatchFound = true;
                        break;
                    }
                    
                }
                if(mismatchFound) return true;
                
            }
            
            return false;
            
        })();
        
        if(bDebug) console.log('Should redirect?: ', shouldRedirect);
        if(bDebug) console.log('Final URL: ', finalURL);
        
        if(!shouldRedirect) return;
        
        
        // 2. Set flags 
        var redirectionCalled = false;
        var redisplayCalled = false;
        
        // 3. Hide the page 
        var random = parseInt(Math.random() * 100000);
        var hideCSSID = 'wt_hideCSS_'+random; // ID to give to the stylesheet, no need to change
        var hideCSS = 'body { opacity: 0.00001 !important; }'; // css to hide the page with
        
        var css={add:function(c, id){if(c instanceof Array){c=c.join(' ');}var a=document.getElementsByTagName('head')[0],b=document.createElement('style');b.type='text/css';if(id){b.id=id;}if(b.styleSheet){b.styleSheet.cssText=c;}else{b.appendChild(document.createTextNode(c));}a.appendChild(b);}, del:function(id){var el=document.getElementById(id); if(el){el.parentNode.removeChild(el);}}};

        css.add(hideCSS, hideCSSID);
        
        // 3.1. Fallback redisplay on X seconds if the pageview event never triggers for some reason
        setTimeout(function(){
            if(!redirectionCalled){ // pageview never happened for some reason, it's not just that the next page is taking ages to load
                if(bDebug) console.log('Force redisplay');
                redisplayCalled = true;
                css.del(hideCSSID);
            }
        }, 5000);
        
        

        
        // 5 -- HOOK OR DO REDIRECT 
        
        // 5.1 - Preview mode -- just redirect
        if(location.search.match(/_wt.pid=/i)){
            if(bDebug) console.log('Preview mode - just go now');
            doRedirect();
            return;
        }
        
        // 5.2 - Pageview hook 
        WT.addEventHandler('pageview', doRedirect);

    } catch(err) {
        if(bDebug) console.log(err);
    }
})();
