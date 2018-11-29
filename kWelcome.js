/* 
 source : kWelcome.js
 purpose: javascript "behaviours" for the kWelcome.htm page
*/

var navVersion=navigator.appVersion;
var navName=navigator.appName;
var ie4=((navName=="Microsoft Internet Explorer") && (parseInt(navVersion)>=4));
var ns4=((navName=="Netscape") && (parseInt(navVersion)>=4));

function myShow(theElement) {
 if (ie4) theElement.className="myLinkOn";
}
function myHide(theElement) {
 if (ie4) theElement.className="myLink";
}
