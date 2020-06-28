!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){t.exports=function(){"use strict";
/*!
   * mustache.js - Logic-less {{mustache}} templates with JavaScript
   * http://github.com/janl/mustache.js
   */var t=Object.prototype.toString,e=Array.isArray||function(e){return"[object Array]"===t.call(e)};function n(t){return"function"==typeof t}function r(t){return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,"\\$&")}function o(t,e){return null!=t&&"object"==typeof t&&e in t}var i=RegExp.prototype.test,s=/\S/;function a(t){return!function(t,e){return i.call(t,e)}(s,t)}var c={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#x2F;","`":"&#x60;","=":"&#x3D;"},l=/\s*/,u=/\s+/,p=/\s*=/,f=/\s*\}/,d=/#|\^|\/|>|\{|&|=|!/;function h(t){this.string=t,this.tail=t,this.pos=0}function m(t,e){this.view=t,this.cache={".":this.view},this.parent=e}function v(){this.templateCache={_cache:{},set:function(t,e){this._cache[t]=e},get:function(t){return this._cache[t]},clear:function(){this._cache={}}}}h.prototype.eos=function(){return""===this.tail},h.prototype.scan=function(t){var e=this.tail.match(t);if(!e||0!==e.index)return"";var n=e[0];return this.tail=this.tail.substring(n.length),this.pos+=n.length,n},h.prototype.scanUntil=function(t){var e,n=this.tail.search(t);switch(n){case-1:e=this.tail,this.tail="";break;case 0:e="";break;default:e=this.tail.substring(0,n),this.tail=this.tail.substring(n)}return this.pos+=e.length,e},m.prototype.push=function(t){return new m(t,this)},m.prototype.lookup=function(t){var e,r,i,s=this.cache;if(s.hasOwnProperty(t))e=s[t];else{for(var a,c,l,u=this,p=!1;u;){if(t.indexOf(".")>0)for(a=u.view,c=t.split("."),l=0;null!=a&&l<c.length;)l===c.length-1&&(p=o(a,c[l])||(r=a,i=c[l],null!=r&&"object"!=typeof r&&r.hasOwnProperty&&r.hasOwnProperty(i))),a=a[c[l++]];else a=u.view[t],p=o(u.view,t);if(p){e=a;break}u=u.parent}s[t]=e}return n(e)&&(e=e.call(this.view)),e},v.prototype.clearCache=function(){void 0!==this.templateCache&&this.templateCache.clear()},v.prototype.parse=function(t,n){var o=this.templateCache,i=t+":"+(n||g.tags).join(":"),s=void 0!==o,c=s?o.get(i):void 0;return null==c&&(c=function(t,n){if(!t)return[];var o,i,s,c=!1,m=[],v=[],y=[],b=!1,x=!1,w="",_=0;function C(){if(b&&!x)for(;y.length;)delete v[y.pop()];else y=[];b=!1,x=!1}function T(t){if("string"==typeof t&&(t=t.split(u,2)),!e(t)||2!==t.length)throw new Error("Invalid tags: "+t);o=new RegExp(r(t[0])+"\\s*"),i=new RegExp("\\s*"+r(t[1])),s=new RegExp("\\s*"+r("}"+t[1]))}T(n||g.tags);for(var j,k,M,E,S,F,O=new h(t);!O.eos();){if(j=O.pos,M=O.scanUntil(o))for(var L=0,P=M.length;L<P;++L)a(E=M.charAt(L))?(y.push(v.length),w+=E):(x=!0,c=!0,w+=" "),v.push(["text",E,j,j+1]),j+=1,"\n"===E&&(C(),w="",_=0,c=!1);if(!O.scan(o))break;if(b=!0,k=O.scan(d)||"name",O.scan(l),"="===k?(M=O.scanUntil(p),O.scan(p),O.scanUntil(i)):"{"===k?(M=O.scanUntil(s),O.scan(f),O.scanUntil(i),k="&"):M=O.scanUntil(i),!O.scan(i))throw new Error("Unclosed tag at "+O.pos);if(S=">"==k?[k,M,j,O.pos,w,_,c]:[k,M,j,O.pos],_++,v.push(S),"#"===k||"^"===k)m.push(S);else if("/"===k){if(!(F=m.pop()))throw new Error('Unopened section "'+M+'" at '+j);if(F[1]!==M)throw new Error('Unclosed section "'+F[1]+'" at '+j)}else"name"===k||"{"===k||"&"===k?x=!0:"="===k&&T(M)}if(C(),F=m.pop())throw new Error('Unclosed section "'+F[1]+'" at '+O.pos);return function(t){for(var e,n=[],r=n,o=[],i=0,s=t.length;i<s;++i)switch((e=t[i])[0]){case"#":case"^":r.push(e),o.push(e),r=e[4]=[];break;case"/":o.pop()[5]=e[2],r=o.length>0?o[o.length-1][4]:n;break;default:r.push(e)}return n}(function(t){for(var e,n,r=[],o=0,i=t.length;o<i;++o)(e=t[o])&&("text"===e[0]&&n&&"text"===n[0]?(n[1]+=e[1],n[3]=e[3]):(r.push(e),n=e));return r}(v))}(t,n),s&&o.set(i,c)),c},v.prototype.render=function(t,e,n,r){var o=this.parse(t,r),i=e instanceof m?e:new m(e,void 0);return this.renderTokens(o,i,n,t,r)},v.prototype.renderTokens=function(t,e,n,r,o){for(var i,s,a,c="",l=0,u=t.length;l<u;++l)a=void 0,"#"===(s=(i=t[l])[0])?a=this.renderSection(i,e,n,r):"^"===s?a=this.renderInverted(i,e,n,r):">"===s?a=this.renderPartial(i,e,n,o):"&"===s?a=this.unescapedValue(i,e):"name"===s?a=this.escapedValue(i,e):"text"===s&&(a=this.rawValue(i)),void 0!==a&&(c+=a);return c},v.prototype.renderSection=function(t,r,o,i){var s=this,a="",c=r.lookup(t[1]);if(c){if(e(c))for(var l=0,u=c.length;l<u;++l)a+=this.renderTokens(t[4],r.push(c[l]),o,i);else if("object"==typeof c||"string"==typeof c||"number"==typeof c)a+=this.renderTokens(t[4],r.push(c),o,i);else if(n(c)){if("string"!=typeof i)throw new Error("Cannot use higher-order sections without the original template");null!=(c=c.call(r.view,i.slice(t[3],t[5]),(function(t){return s.render(t,r,o)})))&&(a+=c)}else a+=this.renderTokens(t[4],r,o,i);return a}},v.prototype.renderInverted=function(t,n,r,o){var i=n.lookup(t[1]);if(!i||e(i)&&0===i.length)return this.renderTokens(t[4],n,r,o)},v.prototype.indentPartial=function(t,e,n){for(var r=e.replace(/[^ \t]/g,""),o=t.split("\n"),i=0;i<o.length;i++)o[i].length&&(i>0||!n)&&(o[i]=r+o[i]);return o.join("\n")},v.prototype.renderPartial=function(t,e,r,o){if(r){var i=n(r)?r(t[1]):r[t[1]];if(null!=i){var s=t[6],a=t[5],c=t[4],l=i;return 0==a&&c&&(l=this.indentPartial(i,c,s)),this.renderTokens(this.parse(l,o),e,r,l,o)}}},v.prototype.unescapedValue=function(t,e){var n=e.lookup(t[1]);if(null!=n)return n},v.prototype.escapedValue=function(t,e){var n=e.lookup(t[1]);if(null!=n)return g.escape(n)},v.prototype.rawValue=function(t){return t[1]};var g={name:"mustache.js",version:"4.0.1",tags:["{{","}}"],clearCache:void 0,escape:void 0,parse:void 0,render:void 0,Scanner:void 0,Context:void 0,Writer:void 0,set templateCache(t){y.templateCache=t},get templateCache(){return y.templateCache}},y=new v;return g.clearCache=function(){return y.clearCache()},g.parse=function(t,e){return y.parse(t,e)},g.render=function(t,n,r,o){if("string"!=typeof t)throw new TypeError('Invalid template! Template should be a "string" but "'+(e(i=t)?"array":typeof i)+'" was given as the first argument for mustache#render(template, view, partials)');var i;return y.render(t,n,r,o)},g.escape=function(t){return String(t).replace(/[&<>"'`=\/]/g,(function(t){return c[t]}))},g.Scanner=h,g.Context=m,g.Writer=v,g}()},function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));const r="MAPBOXER"},function(t,e,n){"use strict";var r=n(0);var o={TextControl:class{constructor(t){this._options=t||{}}onAdd(t){return this._map=t,this._container=document.createElement("div"),this._container.classList.add("mapboxgl-ctrl","mapboxer-text-ctrl"),this._container.style.cssText=this._options.cssText||"",this._container.innerHTML=this._options.text||"Hello mapboxer!",this._container}onRemove(){this._container.parentNode.removeChild(this._container),this._map=void 0}},MousePositionControl:class{constructor(t){this._options=t||{}}onAdd(t){this._map=t,this._container=document.createElement("div"),this._container.classList.add("mapboxgl-ctrl","mapboxer-mouse-position-ctrl"),this._container.style.cssText=this._options.cssText||"";const e=this._options.mustacheTemplate||"{{lng}}, {{lat}}";return this._map.on("mousemove",t=>{this._container.innerHTML=Object(r.render)(e,t.lngLat)}),this._map.on("mouseout",t=>{this._container.innerHTML="",this._container.style.display="none"}),this._map.on("mouseover",t=>{this._container.style.display="block"}),this._container}onRemove(){this._container.parentNode.removeChild(this._container),this._map=void 0}},FilterControl:class{constructor(t){this._options=t||{}}onAdd(t){this._map=t,this._container=document.createElement("div"),this._container.classList.add("mapboxgl-ctrl","mapboxer-filter-ctrl"),this._container.style.cssText=this._options.cssText||"";const e=document.createElement("input");return Object.assign(e,{type:"text",spellcheck:!1,id:"filter"}),this._options.filter&&(e.value=JSON.stringify(this._options.filter),t.on("load",()=>t.setFilter(this._options.layer,this._options.filter))),e.addEventListener("keyup",n=>{const r=e.value;try{const e=JSON.parse(r);t.setFilter(this._options.layer,e)}catch(t){}}),this._container.append(e),this._container}onRemove(){this._container.parentNode.removeChild(this._container),this._map=void 0}}},i=n(1);e.a={addControl:function(t){const e=new mapboxgl[t.controlName](t.options);this.addControl(e,t.pos)},addSource:function(t){const e=this;e.on("load",()=>e.addSource(t.id,t.source))},addLayer:function(t){const e=this;t.style.source=t.style.source||i.a,e.on("load",()=>e.addLayer(t.style))},addPopups:function(t){const e=this;e.on("load",()=>{const n=t.layer;e.on("click",n,n=>{const o=Object.values(n.lngLat),i=n.features[0],s=Object(r.render)(t.popup,i.properties);(new mapboxgl.Popup).setLngLat(o).setHTML(s).addTo(e)}),e.on("mouseenter",n,()=>e.getCanvas().style.cursor="pointer"),e.on("mouseleave",n,()=>e.getCanvas().style.cursor="")})},addMarker:function(t){const e=this,n=(new mapboxgl.Marker).setLngLat([t.lng,t.lat]);n.getElement().style.cursor="pointer",t.popup&&n.setPopup((new mapboxgl.Popup).setHTML(t.popup)),e.on("load",()=>n.addTo(e))},addCustomControl:function(t){const e=new o[t.controlName](t.options);this.addControl(e,t.pos)},customControls:o}},function(t,e,n){"use strict";(function(t){n(6);var r=n(2),o=n(1);const i=t.mapboxer={methods:r.a,_widget:{}};e.a=function(t,e,n){let s=null;const a=i._widget[t.id]={};return{renderValue:function(e){console.log("mapboxgl",mapboxgl.version),console.log(e);const n=e.mapProps.style;"object"==typeof n&&(n.sources=n.sources||{},Object.values(n.sources).forEach(t=>{t.hasOwnProperty("tiles")&!Array.isArray(t.tiles)&&(t.tiles=Array(t.tiles))})),mapboxgl.accessToken=e.accessToken||null,e.mapProps.container=t.id,s=a.map=new mapboxgl.Map(e.mapProps),s.on("error",t=>{throw t.error}),e.source&&r.a.addSource.call(s,{id:o.a,source:e.source}),e.calls.forEach(({methodName:t,args:e})=>r.a[t].call(s,e))},resize:function(t,e){}}}}).call(this,n(5))},function(t,e,n){"use strict";n.r(e);var r=n(3);HTMLWidgets.widget({name:"mapboxer",type:"output",factory:r.a})},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){var r=n(7),o=n(8);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);t.exports=o.locals||{}},function(t,e,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),s=[];function a(t){for(var e=-1,n=0;n<s.length;n++)if(s[n].identifier===t){e=n;break}return e}function c(t,e){for(var n={},r=[],o=0;o<t.length;o++){var i=t[o],c=e.base?i[0]+e.base:i[0],l=n[c]||0,u="".concat(c," ").concat(l);n[c]=l+1;var p=a(u),f={css:i[1],media:i[2],sourceMap:i[3]};-1!==p?(s[p].references++,s[p].updater(f)):s.push({identifier:u,updater:v(f,e),references:1}),r.push(u)}return r}function l(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var s=i(t.insert||"head");if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(e)}return e}var u,p=(u=[],function(t,e){return u[t]=e,u.filter(Boolean).join("\n")});function f(t,e,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=p(e,o);else{var i=document.createTextNode(o),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(i,s[e]):t.appendChild(i)}}function d(t,e,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),i&&btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var h=null,m=0;function v(t,e){var n,r,o;if(e.singleton){var i=m++;n=h||(h=l(e)),r=f.bind(null,n,i,!1),o=f.bind(null,n,i,!0)}else n=l(e),r=d.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var n=c(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var o=a(n[r]);s[o].references--}for(var i=c(t,e),l=0;l<n.length;l++){var u=a(n[l]);0===s[u].references&&(s[u].updater(),s.splice(u,1))}n=i}}}},function(t,e,n){(e=n(9)(!1)).push([t.i,".mapboxer-text-ctrl, .mapboxer-mouse-position-ctrl, .mapboxer-filter-ctrl {\n  background: #FFFFFF;\n  border-radius: 4px;\n  padding: 8px;\n}\n\n.mapboxer-mouse-position-ctrl {\n  width: 300px;\n  text-align: center;\n  display: none;\n}\n\n.mapboxer-mouse-position-ctrl:empty {\n  display: none;\n}\n\n.mapboxer-filter-ctrl {\n  background: #323232;\n  color: #FFFFFF;\n}\n\n.mapboxer-filter-ctrl input[type='text'] {\n  /* font: 10pt \"mono\", sans-serif; */\n  font: 16px/normal 'Monaco', 'Menlo', 'Ubuntu Mono', 'Consolas', 'source-code-pro', monospace;\n  padding: 5px;\n  background: #323232;\n  color: #FFFFFF;\n  border: 1px solid #46514E;\n}\n",""]),t.exports=e},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=function(t,e){var n=t[1]||"",r=t[3];if(!r)return n;if(e&&"function"==typeof btoa){var o=(s=r,a=btoa(unescape(encodeURIComponent(JSON.stringify(s)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(a),"/*# ".concat(c," */")),i=r.sources.map((function(t){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(t," */")}));return[n].concat(i).concat([o]).join("\n")}var s,a,c;return[n].join("\n")}(e,t);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var s=this[i][0];null!=s&&(o[s]=!0)}for(var a=0;a<t.length;a++){var c=[].concat(t[a]);r&&o[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),e.push(c))}},e}}]);