!function t(e,r,n){function o(s,a){if(!r[s]){if(!e[s]){var u="function"==typeof require&&require;if(!a&&u)return u(s,!0);if(i)return i(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var l=r[s]={exports:{}};e[s][0].call(l.exports,function(t){var r=e[s][1][t];return o(r||t)},l,l.exports,t,e,r,n)}return r[s].exports}for(var i="function"==typeof require&&require,s=0;s<n.length;s++)o(n[s]);return o}({1:[function(t,e,r){"use strict";/*
* Mbed Cloud JavaScript SDK
* Copyright Arm Limited 2017
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var n=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(r,"__esModule",{value:!0});var o=intern.getInterface("tdd"),i=o.suite,s=o.test,a=o.beforeEach,u=intern.getPlugin("chai").assert,c=t("../common/apiBase"),l=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return n(e,t),e.prototype.complete=function(e,r,n,o){return t.prototype.complete.call(this,e,r,n,o)},e}(c.ApiBase);i("apiBase",function(){var t;a(function(){t=new l}),s("should execute callback",function(){t.complete(null,null,null,function(t,e){u(!0)})}),s("should return body",function(){t.complete(null,{body:"body",text:"text"},null,function(t,e){u.strictEqual(e,"body")})}),s("should return text",function(){t.complete(null,{text:"text"},"application/json",function(t,e){u.strictEqual(e,"text")})}),s("should make date",function(){t.complete(null,{body:{birthday:"1977-01-12T14:49:20.869Z"}},"application/json",function(t,e){u.typeOf(e.birthday,"date"),u.strictEqual(e.birthday.getDate(),12),u.strictEqual(e.birthday.getMonth(),0),u.strictEqual(e.birthday.getFullYear(),1977)})}),s("should not make date with application/json",function(){var e="nineteen-seventy-seven";t.complete(null,{body:{birthday:e}},"application/json",function(t,r){u.typeOf(r.birthday,"string"),u.strictEqual(r.birthday,e)})}),s("should not make date without application/json",function(){var e="nineteen-seventy-seven";t.complete(null,{body:{birthday:e}},null,function(t,r){u.typeOf(r.birthday,"string"),u.notEqual(r,e)})}),s("should raise error",function(){t.complete({message:"abort!"},null,null,function(t){u.strictEqual(t.message,"abort!")})}),s("should have error details",function(){t.complete({message:"abort!"},{body:"more details"},null,function(t){u.strictEqual(t.message,"abort!"),u.strictEqual(t.details,"more details")})}),s("should raise error from response",function(){t.complete({message:"abort!"},{body:"more details",error:{message:"error!"}},null,function(t){u.strictEqual(t.message,"error!"),u.strictEqual(t.details,"more details")})}),s("should raise error from body",function(){t.complete({message:"abort!"},{body:{message:"error!"}},null,function(t){u.strictEqual(t.message,"error!")})}),s("should raise error from body message",function(){t.complete({message:"abort!"},{body:{message:{error:"error!"}}},null,function(t){u.strictEqual(t.message,"error!")})})})},{"../common/apiBase":2}],2:[function(t,e,r){(function(e,n){"use strict";/*
* Mbed Cloud JavaScript SDK
* Copyright Arm Limited 2017
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
Object.defineProperty(r,"__esModule",{value:!0});var o=t("superagent"),i=t("./sdkError"),s=/^(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2}(?:\.\d*))(?:Z|(\+|-)([\d|:]*))?$/,a=/^application\/json(;.*)?$/i,u=function(){function r(t,e,r){void 0===e&&(e="https://api.us-east-1.mbedcloud.com"),void 0===r&&(r=null),this.host=e,this.responseHandler=r,this.apiKey="",t&&"bearer"!==t.substr(0,6).toLowerCase()&&(t="Bearer "+t),this.apiKey=t}return r.normalizeParams=function(t){var e={};for(var n in t)if(t.hasOwnProperty(n)&&void 0!==t[n]&&null!==t[n]){var o=t[n];this.isFileParam(o)||Array.isArray(o)?e[n]=o:e[n]=r.paramToString(o)}return e},r.isFileParam=function(e){return!!("undefined"==typeof window&&"function"==typeof t&&t("fs")&&e instanceof t("fs").ReadStream)||("function"==typeof n&&e instanceof n||("function"==typeof Blob&&e instanceof Blob||"function"==typeof File&&e instanceof File))},r.paramToString=function(t){return void 0===t||null===t?"":t instanceof Date?t.toJSON():t.toString()},r.chooseType=function(t,e){if(void 0===e&&(e=null),!t.length)return e;var r=t[0]||e;return t.some(function(t){if(a.test(t))return r=t,!0}),r},r.prototype.request=function(t,n){var i=this,s=t.url.replace(/([:])?\/+/g,function(t,e){return e?t:"/"}),u=o(t.method,this.host+s);u.query(r.normalizeParams(t.query)),t.headers.Authorization=this.apiKey,u.set(r.normalizeParams(t.headers)),u.timeout(6e4);var c=r.chooseType(t.acceptTypes);c&&u.accept(c);var l=null;if(Object.keys(t.formParams).length>0)if(t.useFormData){var h=r.normalizeParams(t.formParams);for(var p in h)h.hasOwnProperty(p)&&(r.isFileParam(h[p])?u.attach(p,h[p]):u.field(p,h[p]))}else u.type("application/x-www-form-urlencoded"),u.send(r.normalizeParams(t.formParams));else if(t.body){l=t.body;var f=r.chooseType(t.contentTypes,"application/json");u.type(f),l&&l.constructor==={}.constructor&&a.test(f)&&(l=Object.keys(l).reduce(function(t,e){return null!==l[e]&&void 0!==l[e]&&(t[e]=l[e]),t},{})),u.send(l)}return u.end(function(t,e){i.complete(t,e,c,n)}),l&&e&&e.env&&"superagent"===e.env.DEBUG&&(e.stdout.write("  [1m[35msuperagent[0m BODY "),console.log(l)),u},r.prototype.complete=function(t,e,r,n){var o=null;if(t){var u=t.message,c=t,l="";e&&(e.error&&(u=e.error.message),e.body&&e.body.message&&(u=e.body.message,u.error&&(u=u.error)),c=e.error||t,l=e.body||e.text),o=new i.SDKError(u,c,l,t.status)}if(this.responseHandler&&this.responseHandler(o,e),n){var h=null;e&&!o&&(h=e.body||e.text),h&&h.constructor==={}.constructor&&a.test(r)&&(h=JSON.parse(JSON.stringify(h),function(t,e){return s.test(e)?new Date(e):e})),n(o,h)}},r}();r.ApiBase=u}).call(this,t("_process"),t("buffer").Buffer)},{"./sdkError":3,_process:5,buffer:4,fs:4,superagent:6}],3:[function(t,e,r){"use strict";/*
* Mbed Cloud JavaScript SDK
* Copyright Arm Limited 2017
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
* http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/
var n=this&&this.__extends||function(){var t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var r in e)e.hasOwnProperty(r)&&(t[r]=e[r])};return function(e,r){function n(){this.constructor=e}t(e,r),e.prototype=null===r?Object.create(r):(n.prototype=r.prototype,new n)}}();Object.defineProperty(r,"__esModule",{value:!0});var o=function(t){function e(e,r,n,o){var i=t.call(this,e)||this;return i.innerError=r,i.details=n,i.code=o,i}return n(e,t),e}(Error);r.SDKError=o},{}],4:[function(t,e,r){},{}],5:[function(t,e,r){function n(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(t){if(h===setTimeout)return setTimeout(t,0);if((h===n||!h)&&setTimeout)return h=setTimeout,setTimeout(t,0);try{return h(t,0)}catch(e){try{return h.call(null,t,0)}catch(e){return h.call(this,t,0)}}}function s(t){if(p===clearTimeout)return clearTimeout(t);if((p===o||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(t);try{return p(t)}catch(e){try{return p.call(null,t)}catch(e){return p.call(this,t)}}}function a(){m&&d&&(m=!1,d.length?y=d.concat(y):_=-1,y.length&&u())}function u(){if(!m){var t=i(a);m=!0;for(var e=y.length;e;){for(d=y,y=[];++_<e;)d&&d[_].run();_=-1,e=y.length}d=null,m=!1,s(t)}}function c(t,e){this.fun=t,this.array=e}function l(){}var h,p,f=e.exports={};!function(){try{h="function"==typeof setTimeout?setTimeout:n}catch(t){h=n}try{p="function"==typeof clearTimeout?clearTimeout:o}catch(t){p=o}}();var d,y=[],m=!1,_=-1;f.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)e[r-1]=arguments[r];y.push(new c(t,e)),1!==y.length||m||i(u)},c.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=l,f.addListener=l,f.once=l,f.off=l,f.removeListener=l,f.removeAllListeners=l,f.emit=l,f.prependListener=l,f.prependOnceListener=l,f.listeners=function(t){return[]},f.binding=function(t){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(t){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},{}],6:[function(t,e,r){function n(){}function o(t){if(!y(t))return t;var e=[];for(var r in t)i(e,r,t[r]);return e.join("&")}function i(t,e,r){if(null!=r)if(Array.isArray(r))r.forEach(function(r){i(t,e,r)});else if(y(r))for(var n in r)i(t,e+"["+n+"]",r[n]);else t.push(encodeURIComponent(e)+"="+encodeURIComponent(r));else null===r&&t.push(encodeURIComponent(e))}function s(t){for(var e,r,n={},o=t.split("&"),i=0,s=o.length;i<s;++i)e=o[i],r=e.indexOf("="),-1==r?n[decodeURIComponent(e)]="":n[decodeURIComponent(e.slice(0,r))]=decodeURIComponent(e.slice(r+1));return n}function a(t){var e,r,n,o,i=t.split(/\r?\n/),s={};i.pop();for(var a=0,u=i.length;a<u;++a)r=i[a],e=r.indexOf(":"),n=r.slice(0,e).toLowerCase(),o=v(r.slice(e+1)),s[n]=o;return s}function u(t){return/[\/+]json\b/.test(t)}function c(t){this.req=t,this.xhr=this.req.xhr,this.text="HEAD"!=this.req.method&&(""===this.xhr.responseType||"text"===this.xhr.responseType)||void 0===this.xhr.responseType?this.xhr.responseText:null,this.statusText=this.req.xhr.statusText;var e=this.xhr.status;1223===e&&(e=204),this._setStatusProperties(e),this.header=this.headers=a(this.xhr.getAllResponseHeaders()),this.header["content-type"]=this.xhr.getResponseHeader("content-type"),this._setHeaderProperties(this.header),null===this.text&&t._responseType?this.body=this.xhr.response:this.body="HEAD"!=this.req.method?this._parseBody(this.text?this.text:this.xhr.response):null}function l(t,e){var r=this;this._query=this._query||[],this.method=t,this.url=e,this.header={},this._header={},this.on("end",function(){var t=null,e=null;try{e=new c(r)}catch(e){return t=new Error("Parser is unable to parse the response"),t.parse=!0,t.original=e,r.xhr?(t.rawResponse=void 0===r.xhr.responseType?r.xhr.responseText:r.xhr.response,t.status=r.xhr.status?r.xhr.status:null,t.statusCode=t.status):(t.rawResponse=null,t.status=null),r.callback(t)}r.emit("response",e);var n;try{r._isResponseOK(e)||(n=new Error(e.statusText||"Unsuccessful HTTP response"),n.original=t,n.response=e,n.status=e.status)}catch(t){n=t}n?r.callback(n,e):r.callback(null,e)})}function h(t,e,r){var n=b("DELETE",t);return"function"==typeof e&&(r=e,e=null),e&&n.send(e),r&&n.end(r),n}var p;"undefined"!=typeof window?p=window:"undefined"!=typeof self?p=self:(console.warn("Using browser-only version of superagent in non-browser environment"),p=this);var f=t("component-emitter"),d=t("./request-base"),y=t("./is-object"),m=t("./response-base"),_=t("./should-retry"),b=r=e.exports=function(t,e){return"function"==typeof e?new r.Request("GET",t).end(e):1==arguments.length?new r.Request("GET",t):new r.Request(t,e)};r.Request=l,b.getXHR=function(){if(!(!p.XMLHttpRequest||p.location&&"file:"==p.location.protocol&&p.ActiveXObject))return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(t){}throw Error("Browser-only version of superagent could not find XHR")};var v="".trim?function(t){return t.trim()}:function(t){return t.replace(/(^\s*|\s*$)/g,"")};b.serializeObject=o,b.parseString=s,b.types={html:"text/html",json:"application/json",xml:"text/xml",urlencoded:"application/x-www-form-urlencoded",form:"application/x-www-form-urlencoded","form-data":"application/x-www-form-urlencoded"},b.serialize={"application/x-www-form-urlencoded":o,"application/json":JSON.stringify},b.parse={"application/x-www-form-urlencoded":s,"application/json":JSON.parse},m(c.prototype),c.prototype._parseBody=function(t){var e=b.parse[this.type];return this.req._parser?this.req._parser(this,t):(!e&&u(this.type)&&(e=b.parse["application/json"]),e&&t&&(t.length||t instanceof Object)?e(t):null)},c.prototype.toError=function(){var t=this.req,e=t.method,r=t.url,n="cannot "+e+" "+r+" ("+this.status+")",o=new Error(n);return o.status=this.status,o.method=e,o.url=r,o},b.Response=c,f(l.prototype),d(l.prototype),l.prototype.type=function(t){return this.set("Content-Type",b.types[t]||t),this},l.prototype.accept=function(t){return this.set("Accept",b.types[t]||t),this},l.prototype.auth=function(t,e,r){switch("object"==typeof e&&null!==e&&(r=e),r||(r={type:"function"==typeof btoa?"basic":"auto"}),r.type){case"basic":this.set("Authorization","Basic "+btoa(t+":"+e));break;case"auto":this.username=t,this.password=e;break;case"bearer":this.set("Authorization","Bearer "+t)}return this},l.prototype.query=function(t){return"string"!=typeof t&&(t=o(t)),t&&this._query.push(t),this},l.prototype.attach=function(t,e,r){if(e){if(this._data)throw Error("superagent can't mix .send() and .attach()");this._getFormData().append(t,e,r||e.name)}return this},l.prototype._getFormData=function(){return this._formData||(this._formData=new p.FormData),this._formData},l.prototype.callback=function(t,e){if(this._maxRetries&&this._retries++<this._maxRetries&&_(t,e))return this._retry();var r=this._callback;this.clearTimeout(),t&&(this._maxRetries&&(t.retries=this._retries-1),this.emit("error",t)),r(t,e)},l.prototype.crossDomainError=function(){var t=new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");t.crossDomain=!0,t.status=this.status,t.method=this.method,t.url=this.url,this.callback(t)},l.prototype.buffer=l.prototype.ca=l.prototype.agent=function(){return console.warn("This is not supported in browser version of superagent"),this},l.prototype.pipe=l.prototype.write=function(){throw Error("Streaming is not supported in browser version of superagent")},l.prototype._isHost=function(t){return t&&"object"==typeof t&&!Array.isArray(t)&&"[object Object]"!==Object.prototype.toString.call(t)},l.prototype.end=function(t){return this._endCalled&&console.warn("Warning: .end() was called twice. This is not supported in superagent"),this._endCalled=!0,this._callback=t||n,this._finalizeQueryString(),this._end()},l.prototype._end=function(){var t=this,e=this.xhr=b.getXHR(),r=this._formData||this._data;this._setTimeouts(),e.onreadystatechange=function(){var r=e.readyState;if(r>=2&&t._responseTimeoutTimer&&clearTimeout(t._responseTimeoutTimer),4==r){var n;try{n=e.status}catch(t){n=0}if(!n){if(t.timedout||t._aborted)return;return t.crossDomainError()}t.emit("end")}};var n=function(e,r){r.total>0&&(r.percent=r.loaded/r.total*100),r.direction=e,t.emit("progress",r)};if(this.hasListeners("progress"))try{e.onprogress=n.bind(null,"download"),e.upload&&(e.upload.onprogress=n.bind(null,"upload"))}catch(t){}try{this.username&&this.password?e.open(this.method,this.url,!0,this.username,this.password):e.open(this.method,this.url,!0)}catch(t){return this.callback(t)}if(this._withCredentials&&(e.withCredentials=!0),!this._formData&&"GET"!=this.method&&"HEAD"!=this.method&&"string"!=typeof r&&!this._isHost(r)){var o=this._header["content-type"],i=this._serializer||b.serialize[o?o.split(";")[0]:""];!i&&u(o)&&(i=b.serialize["application/json"]),i&&(r=i(r))}for(var s in this.header)null!=this.header[s]&&this.header.hasOwnProperty(s)&&e.setRequestHeader(s,this.header[s]);return this._responseType&&(e.responseType=this._responseType),this.emit("request",this),e.send(void 0!==r?r:null),this},b.get=function(t,e,r){var n=b("GET",t);return"function"==typeof e&&(r=e,e=null),e&&n.query(e),r&&n.end(r),n},b.head=function(t,e,r){var n=b("HEAD",t);return"function"==typeof e&&(r=e,e=null),e&&n.query(e),r&&n.end(r),n},b.options=function(t,e,r){var n=b("OPTIONS",t);return"function"==typeof e&&(r=e,e=null),e&&n.send(e),r&&n.end(r),n},b.del=h,b.delete=h,b.patch=function(t,e,r){var n=b("PATCH",t);return"function"==typeof e&&(r=e,e=null),e&&n.send(e),r&&n.end(r),n},b.post=function(t,e,r){var n=b("POST",t);return"function"==typeof e&&(r=e,e=null),e&&n.send(e),r&&n.end(r),n},b.put=function(t,e,r){var n=b("PUT",t);return"function"==typeof e&&(r=e,e=null),e&&n.send(e),r&&n.end(r),n}},{"./is-object":7,"./request-base":8,"./response-base":9,"./should-retry":10,"component-emitter":12}],7:[function(t,e,r){function n(t){return null!==t&&"object"==typeof t}e.exports=n},{}],8:[function(t,e,r){function n(t){if(t)return o(t)}function o(t){for(var e in n.prototype)t[e]=n.prototype[e];return t}var i=t("./is-object");e.exports=n,n.prototype.clearTimeout=function(){return clearTimeout(this._timer),clearTimeout(this._responseTimeoutTimer),delete this._timer,delete this._responseTimeoutTimer,this},n.prototype.parse=function(t){return this._parser=t,this},n.prototype.responseType=function(t){return this._responseType=t,this},n.prototype.serialize=function(t){return this._serializer=t,this},n.prototype.timeout=function(t){if(!t||"object"!=typeof t)return this._timeout=t,this._responseTimeout=0,this;for(var e in t)switch(e){case"deadline":this._timeout=t.deadline;break;case"response":this._responseTimeout=t.response;break;default:console.warn("Unknown timeout option",e)}return this},n.prototype.retry=function(t){return 0!==arguments.length&&!0!==t||(t=1),t<=0&&(t=0),this._maxRetries=t,this._retries=0,this},n.prototype._retry=function(){return this.clearTimeout(),this.req&&(this.req=null,this.req=this.request()),this._aborted=!1,this.timedout=!1,this._end()},n.prototype.then=function(t,e){if(!this._fullfilledPromise){var r=this;this._endCalled&&console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises"),this._fullfilledPromise=new Promise(function(t,e){r.end(function(r,n){r?e(r):t(n)})})}return this._fullfilledPromise.then(t,e)},n.prototype.catch=function(t){return this.then(void 0,t)},n.prototype.use=function(t){return t(this),this},n.prototype.ok=function(t){if("function"!=typeof t)throw Error("Callback required");return this._okCallback=t,this},n.prototype._isResponseOK=function(t){return!!t&&(this._okCallback?this._okCallback(t):t.status>=200&&t.status<300)},n.prototype.get=function(t){return this._header[t.toLowerCase()]},n.prototype.getHeader=n.prototype.get,n.prototype.set=function(t,e){if(i(t)){for(var r in t)this.set(r,t[r]);return this}return this._header[t.toLowerCase()]=e,this.header[t]=e,this},n.prototype.unset=function(t){return delete this._header[t.toLowerCase()],delete this.header[t],this},n.prototype.field=function(t,e){if(null===t||void 0===t)throw new Error(".field(name, val) name can not be empty");if(this._data&&console.error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()"),i(t)){for(var r in t)this.field(r,t[r]);return this}if(Array.isArray(e)){for(var n in e)this.field(t,e[n]);return this}if(null===e||void 0===e)throw new Error(".field(name, val) val can not be empty");return"boolean"==typeof e&&(e=""+e),this._getFormData().append(t,e),this},n.prototype.abort=function(){return this._aborted?this:(this._aborted=!0,this.xhr&&this.xhr.abort(),this.req&&this.req.abort(),this.clearTimeout(),this.emit("abort"),this)},n.prototype.withCredentials=function(t){return void 0==t&&(t=!0),this._withCredentials=t,this},n.prototype.redirects=function(t){return this._maxRedirects=t,this},n.prototype.toJSON=function(){return{method:this.method,url:this.url,data:this._data,headers:this._header}},n.prototype.send=function(t){var e=i(t),r=this._header["content-type"];if(this._formData&&console.error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()"),e&&!this._data)Array.isArray(t)?this._data=[]:this._isHost(t)||(this._data={});else if(t&&this._data&&this._isHost(this._data))throw Error("Can't merge these send calls");if(e&&i(this._data))for(var n in t)this._data[n]=t[n];else"string"==typeof t?(r||this.type("form"),r=this._header["content-type"],this._data="application/x-www-form-urlencoded"==r?this._data?this._data+"&"+t:t:(this._data||"")+t):this._data=t;return!e||this._isHost(t)?this:(r||this.type("json"),this)},n.prototype.sortQuery=function(t){return this._sort=void 0===t||t,this},n.prototype._finalizeQueryString=function(){var t=this._query.join("&");if(t&&(this.url+=(this.url.indexOf("?")>=0?"&":"?")+t),this._query.length=0,this._sort){var e=this.url.indexOf("?");if(e>=0){var r=this.url.substring(e+1).split("&");"function"==typeof this._sort?r.sort(this._sort):r.sort(),this.url=this.url.substring(0,e)+"?"+r.join("&")}}},n.prototype._appendQueryString=function(){console.trace("Unsupported")},n.prototype._timeoutError=function(t,e,r){if(!this._aborted){var n=new Error(t+e+"ms exceeded");n.timeout=e,n.code="ECONNABORTED",n.errno=r,this.timedout=!0,this.abort(),this.callback(n)}},n.prototype._setTimeouts=function(){var t=this;this._timeout&&!this._timer&&(this._timer=setTimeout(function(){t._timeoutError("Timeout of ",t._timeout,"ETIME")},this._timeout)),this._responseTimeout&&!this._responseTimeoutTimer&&(this._responseTimeoutTimer=setTimeout(function(){t._timeoutError("Response timeout of ",t._responseTimeout,"ETIMEDOUT")},this._responseTimeout))}},{"./is-object":7}],9:[function(t,e,r){function n(t){if(t)return o(t)}function o(t){for(var e in n.prototype)t[e]=n.prototype[e];return t}var i=t("./utils");e.exports=n,n.prototype.get=function(t){return this.header[t.toLowerCase()]},n.prototype._setHeaderProperties=function(t){var e=t["content-type"]||"";this.type=i.type(e);var r=i.params(e);for(var n in r)this[n]=r[n];this.links={};try{t.link&&(this.links=i.parseLinks(t.link))}catch(t){}},n.prototype._setStatusProperties=function(t){var e=t/100|0;this.status=this.statusCode=t,this.statusType=e,this.info=1==e,this.ok=2==e,this.redirect=3==e,this.clientError=4==e,this.serverError=5==e,this.error=(4==e||5==e)&&this.toError(),this.accepted=202==t,this.noContent=204==t,this.badRequest=400==t,this.unauthorized=401==t,this.notAcceptable=406==t,this.forbidden=403==t,this.notFound=404==t}},{"./utils":11}],10:[function(t,e,r){var n=["ECONNRESET","ETIMEDOUT","EADDRINFO","ESOCKETTIMEDOUT"];e.exports=function(t,e){return!!(t&&t.code&&~n.indexOf(t.code))||(!!(e&&e.status&&e.status>=500)||(!!(t&&"timeout"in t&&"ECONNABORTED"==t.code)||!!(t&&"crossDomain"in t)))}},{}],11:[function(t,e,r){r.type=function(t){return t.split(/ *; */).shift()},r.params=function(t){return t.split(/ *; */).reduce(function(t,e){var r=e.split(/ *= */),n=r.shift(),o=r.shift();return n&&o&&(t[n]=o),t},{})},r.parseLinks=function(t){return t.split(/ *, */).reduce(function(t,e){var r=e.split(/ *; */),n=r[0].slice(1,-1);return t[r[1].split(/ *= */)[1].slice(1,-1)]=n,t},{})},r.cleanHeader=function(t,e){return delete t["content-type"],delete t["content-length"],delete t["transfer-encoding"],delete t.host,e&&delete t.cookie,t}},{}],12:[function(t,e,r){function n(t){if(t)return o(t)}function o(t){for(var e in n.prototype)t[e]=n.prototype[e];return t}void 0!==e&&(e.exports=n),n.prototype.on=n.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},n.prototype.once=function(t,e){function r(){this.off(t,r),e.apply(this,arguments)}return r.fn=e,this.on(t,r),this},n.prototype.off=n.prototype.removeListener=n.prototype.removeAllListeners=n.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var r=this._callbacks["$"+t];if(!r)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var n,o=0;o<r.length;o++)if((n=r[o])===e||n.fn===e){r.splice(o,1);break}return this},n.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),r=this._callbacks["$"+t];if(r){r=r.slice(0);for(var n=0,o=r.length;n<o;++n)r[n].apply(this,e)}return this},n.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},n.prototype.hasListeners=function(t){return!!this.listeners(t).length}},{}]},{},[1]);
//# sourceMappingURL=apiResponse.js.map
