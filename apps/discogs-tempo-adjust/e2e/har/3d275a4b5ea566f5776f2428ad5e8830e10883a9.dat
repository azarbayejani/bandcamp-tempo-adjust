;(function(win,doc){var ccaoName="cca";var ccao=win[ccaoName];ccao.privacy=ccao.privacy||{que:[]};var cachedUser={cached:false,localCache:false};try{if(window.localStorage){var ccuid=window.localStorage.getItem("carbon_ccuid");if(ccuid)
cachedUser={ccuid:ccuid,localCache:true,cached:true};}
if(window.sessionStorage){var ccsid=window.sessionStorage.getItem("carbon_ccsid");if(ccsid)
cachedUser.ccsid=ccsid;}}catch(err){console.debug('error:'+err.message);}
win._ccScriptSettings.user.localCachedUser=cachedUser;function setStorage(){if(!ccao.privacy.law||typeof ccao.privacy.law!=="string"){ccao.privacy.law="unknown";}
switch(ccao.privacy.law.toLowerCase()){case "gdpr":if(ccao.privacy.gdpr.Consent){try{window.localStorage.setItem("carbon_ccuid",win._ccScriptSettings.user.id);window.sessionStorage.setItem("carbon_ccsid",win._ccScriptSettings.session.id);}catch(err){console.debug('error:'+err.message);}}
break;case "ccpa":if(ccao.privacy.ccpa.Consent){try{window.localStorage.setItem("carbon_ccuid",win._ccScriptSettings.user.id);window.sessionStorage.setItem("carbon_ccsid",win._ccScriptSettings.session.id);}catch(err){console.debug('error:'+err.message);}}
break;case "na":try{window.localStorage.setItem("carbon_ccuid",win._ccScriptSettings.user.id);window.sessionStorage.setItem("carbon_ccsid",win._ccScriptSettings.session.id);}catch(err){console.debug('error:'+err.message);}
break;case "optout":case "unknown":default:break;}}
ccao.setUserStorage=function(){ccao.privacy=ccao.privacy||{};ccao.privacy.que=ccao.privacy.que||[];ccao.privacy.que.push(function(){setStorage();});};})(window,document);