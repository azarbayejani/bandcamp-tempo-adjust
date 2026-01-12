;(function(win,doc){var ccao=win["cca"];var ccaoSettings=null;win.carbonReady=win.carbonReady||[];ccao.privacy=ccao.privacy||{que:[]};var getSyncUserUrl=function(parentId){return `${win._ccLauncherSettings.ingestion}/parent/${parentId}/engagement/trigger/user_sync`;};function setStorage(store,key,value){if(!ccao.privacy.law||typeof ccao.privacy.law!=="string"){ccao.privacy.law="unknown";}
switch(ccao.privacy.law.toLowerCase()){case "gdpr":if(ccao.privacy.gdpr.Consent){store.setItem(key,value);}
break;case "ccpa":if(ccao.privacy.ccpa.Consent){store.setItem(key,value);}
break;case "na":store.setItem(key,value);break;case "optout":case "unknown":default:break;}}
function setLocalStorage(key,value){ccao.privacy=ccao.privacy||{};ccao.privacy.que=ccao.privacy.que||[];ccao.privacy.que.push(function(){setStorage(win.localStorage,key,value);});}
function firePixel(endpoint,data){if(!ccao.privacy.law||typeof ccao.privacy.law!=="string"){ccao.privacy.law="unknown";}
switch(ccao.privacy.law.toLowerCase()){case "gdpr":if(ccao.privacy.gdpr.Consent){fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data||{})}).catch(()=>{});}
break;case "ccpa":if(ccao.privacy.ccpa.Consent){fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data||{})}).catch(()=>{});}
break;case "na":fetch(endpoint,{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(data||{})}).catch(()=>{});break;case "optout":case "unknown":default:break;}}
function pixelSync(endpoint){return function(){ccao.privacy=ccao.privacy||{};ccao.privacy.que=ccao.privacy.que||[];ccao.privacy.que.push(function(){firePixel(endpoint);});};}
function getSyncParams(partnerId,useSiteId,partnerSrc){if(partnerSrc==undefined){partnerSrc=ccaoSettings.site.parentId;if(useSiteId!==undefined&&useSiteId===true)
partnerSrc=ccaoSettings.site.id;}
return{src:partnerSrc,ccsid:ccaoSettings.session.id,ccuid:ccaoSettings.user.id,ccpt:-1,puid:partnerId};}
function validateMd5Hash(hash){var regex=RegExp("^[a-f0-9]{32}$","gi");return hash.match(regex);}
function validateSha256Hash(hash){var regex=RegExp("^[a-f0-9]{64}$","gi");return hash.match(regex);}
function storeMd5Hash(hash,label){if(!hash||typeof hash!=="string"){hash="";}
hash=hash.toLowerCase();if(validateMd5Hash(hash)){var storageKey="cc-"+label+"-md5";setLocalStorage(storageKey,hash);if(ccaoSettings!==null){var syncData=getSyncParams(hash,false,label+"-md5");firePixel(getSyncUserUrl(ccao.settings.site.parentId),syncData);}}
else{console.log("String is not a valid md5 hash");}}
function storeSha256Hash(hash,label){if(!hash||typeof hash!=="string"){hash="";}
hash=hash.toLowerCase();if(validateSha256Hash(hash)){var storageKey="cc-"+label+"-sha256";setLocalStorage(storageKey,hash);if(ccaoSettings!==null){var syncData=getSyncParams(hash,false,label+"-sha256");firePixel(getSyncUserUrl(ccao.settings.site.parentId),syncData);}}
else{console.log("String is not a valid sha256 hash");}}
function api(id){var userId=id;this.syncUserIdentity=function(clientUserId,useSiteId){if(ccaoSettings!==null&&clientUserId!==undefined){var syncData=getSyncParams(clientUserId,useSiteId);firePixel(getSyncUserUrl(ccao.settings.site.parentId),syncData);}};this.getUserId=function(){return userId;};this.refreshCarbon=function(){ccao.refreshGPTTargeting();ccao.refresh();};this.storeHashedEmail=function(algorithm,hash){if(algorithm&&hash){var label="hem";if(algorithm&&typeof algorithm==="string"&&algorithm.toLowerCase()=="md5"){storeMd5Hash(hash,label);}
else if(algorithm&&typeof algorithm==="string"&&algorithm.toLowerCase()=="sha256"){storeSha256Hash(hash,label);}
else{console.log("Algorithm not supported: "+algorithm);}}};this.storeHashedTelephone=function(algorithm,hash){if(algorithm&&hash){var label="htel";if(algorithm&&typeof algorithm==="string"&&algorithm.toLowerCase()=="md5"){storeMd5Hash(hash,label);}
else if(algorithm&&typeof algorithm==="string"&&algorithm.toLowerCase()=="sha256"){storeSha256Hash(hash,label);}
else{console.log("Algorithm not supported: "+algorithm);}}};this.ready=true;};var apiReady=function(){if(win.carbonReady!==null){var readyLen=win.carbonReady.length;for(var i=0;i<readyLen;i++){win.carbonReady[i]();}}
win.carbonReady={"push":function(pushFunc){if(typeof(pushFunc)==='function')pushFunc();}};};ccao.getSettings(function(settings){ccaoSettings=settings;var localApi=new api(settings.user.id);ccao.api=Object.assign(ccao.api,localApi);win.carbonApi=ccao.api;win.carbon=win.carbonApi;apiReady();ccao.api.dispatchEvent('apiReady');});})(window,document);