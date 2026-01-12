;(function(win,doc){var ccao=win["cca"]||{};ccao.privacy=ccao.privacy||{que:[]};ccao.custAud=ccao.custAud||{que:[]};ccao.fireAudienceEvent=function(id,cs,usp,pco){var eventObject={"id":id,"pco":pco};ccao.fireTrackingEvent(eventObject,false);};ccao.fireTrackingEvent=function(data,debug){if(debug){console.log("Tracking Pixel triggered");}
ccao.privacy.que.push(function(){if(!ccao.privacy.law||typeof ccao.privacy.law!=="string"){ccao.privacy.law="unknown";}
switch(ccao.privacy.law.toLowerCase()){case "gdpr":if(ccao.privacy.gdpr.Consent){fireTrackingInternal(data,debug)}else{if(debug){console.log("GDPR consent not given, cannot fire Tracking Pixel");}}
break;case "ccpa":if(ccao.privacy.ccpa.Consent){fireTrackingInternal(data,debug)}else{if(debug){console.log("CCPA consent not given, cannot fire Tracking Pixel");}}
break;case "na":fireTrackingInternal(data,debug)
break;case "optout":case "unknown":default:break;}});};var fireTrackingMultiple=function(data,debug){if(debug){console.log("Multiple Pixels requested");}
var endpoint=win._ccLauncherSettings.customEvents;var ceUrl=new URL(endpoint+"/p/"+_ccScriptSettings.site.parentId+"/ces");if(ccao.privacy.gdpr&&ccao.privacy.gdpr.CS){ceUrl.searchParams.set("cs",ccao.privacy.gdpr.CS);}
if(ccao.privacy.ccpa&&ccao.privacy.ccpa.ConsentString){ceUrl.searchParams.set("usp",ccao.privacy.ccpa.CS);}
var bodyJson=[];for(i in data){var event=data[i];if(!event.id){if(debug){console.log("Event is missing ID, cannot be sent");console.log(event);}
continue;}
if(event.pco!==undefined&&!ceUrl.searchParams.get("pco")){ceUrl.searchParams.set("pco",event.pco);}
var eventObject={};eventObject["triggerid"]=event.id;eventObject["parent_id"]=_ccScriptSettings.site.parentId;eventObject["profileId"]=_ccScriptSettings.user.id;eventObject["pageview_id"]=_ccScriptSettings.pageData.pvid;if(event.NumberKey&&event.NumberKey!=""&&event.NumberValue&&!isNaN(event.NumberValue)){eventObject["numberkey"]=event.NumberKey;eventObject["numbervalue"]=event.NumberValue;}
if(event.StringKey&&event.StringKey!=""&&event.StringValue&&event.StringValue!=""){eventObject["stringkey"]=event.StringKey;eventObject["stringvalue"]=event.StringValue;}
var codes=["USD","EUR"];if(event.Money&&!isNaN(event.Money)&&event.CurrencyCode&&event.CurrencyCode.toUpperCase&&codes.includes(event.CurrencyCode.toUpperCase())){eventObject["money"]=event.Money;eventObject["currencycode"]=event.CurrencyCode.toUpperCase();}
if(event.Label&&event.Label!=""){eventObject["event_label"]=event.Label;}
ccao.engagement.registerEngagement();eventObject["engagement_id"]=ccao.engagement.id;eventObject["engagement_count"]=ccao.engagement.count;eventObject["engagement_ttl"]=ccao.engagement.ttl;bodyJson.push(eventObject);if(debug){console.log(eventObject);}}
var xmlHttp=new XMLHttpRequest();xmlHttp.open("POST",ceUrl,true);xmlHttp.setRequestHeader('Content-Type','application/json');xmlHttp.send(JSON.stringify(bodyJson));if(debug){console.log("Custom Event Pixel request sent. URL: "+ceUrl);console.log(bodyJson);}}
var fireTrackingInternal=function(data,debug){if(Array.isArray(data)){fireTrackingMultiple(data,debug);return}
if(!data.id){if(debug){console.log("Event is missing ID, cannot be sent");console.log(event);}
return}
var endpoint=win._ccLauncherSettings.customEvents;var pixel=new Image();var pagePixelUrl=new URL(endpoint+"/p/"+_ccScriptSettings.site.parentId+"/ce/"+data.id);pagePixelUrl.searchParams.set("ccuid",_ccScriptSettings.user.id);pagePixelUrl.searchParams.set("pvid",_ccScriptSettings.pageData.pvid);if(ccao.privacy.gdpr&&ccao.privacy.gdpr.CS){pagePixelUrl.searchParams.set("cs",ccao.privacy.gdpr.CS);}
if(ccao.privacy.ccpa&&ccao.privacy.ccpa.ConsentString){pagePixelUrl.searchParams.set("usp",ccao.privacy.ccpa.CS);}
if(data.pco){pagePixelUrl.searchParams.set("pco",data.pco);}
if(data.NumberKey&&data.NumberKey!=""&&data.NumberValue&&isNaN(data.NumberValue)==false){pagePixelUrl.searchParams.set("nk",data.NumberKey);pagePixelUrl.searchParams.set("nv",data.NumberValue);}
if(data.StringKey&&data.StringKey!=""&&data.StringValue&&data.StringValue!=""){pagePixelUrl.searchParams.set("sk",data.StringKey);pagePixelUrl.searchParams.set("sv",data.StringValue);}
var codes=["USD","EUR"];if(data.Money&&!isNaN(data.Money)&&data.CurrencyCode&&data.CurrencyCode.toUpperCase&&codes.includes(data.CurrencyCode.toUpperCase())){pagePixelUrl.searchParams.set("mn",data.Money);pagePixelUrl.searchParams.set("cc",data.CurrencyCode.toUpperCase());}
if(data.Label&&data.Label!=""){pagePixelUrl.searchParams.set("lb",data.Label);}
ccao.engagement.registerEngagement();pagePixelUrl.searchParams.set("engid",ccao.engagement.id);pagePixelUrl.searchParams.set("engcount",ccao.engagement.count);pagePixelUrl.searchParams.set("engttl",ccao.engagement.ttl);pixel.src=pagePixelUrl.href;setTimeout(function(){if(!pixel.complete||!pixel.naturalWidth){pixel.src="";}},2000);if(debug){console.log("Custom Event Pixel request sent. URL: "+pagePixelUrl.href);}};var tempQue=ccao.custAud.que
for(custAudCallback of tempQue){custAudCallback();}
ccao.custAud.que={push:function(custAudCallback){custAudCallback();}}})(window,document);