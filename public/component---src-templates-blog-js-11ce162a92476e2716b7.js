(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{R8uD:function(e,t,n){"use strict";(function(e){n("DNiP"),n("bWfx"),n("DW2E"),n("hhXQ"),n("Z2Ku"),n("L9s1"),n("hHhE"),n("WLL4"),n("rE2o"),n("rGqo"),n("yt8O"),n("RW0V"),n("pIFo"),n("ioFf"),n("V+eJ"),n("KKXr"),n("a1Th"),n("h7Nl"),n("Btvt"),n("91GP"),n("HAE/"),Object.defineProperty(t,"__esModule",{value:!0});var r,o=n("q1tI"),u=(r=o)&&"object"==typeof r&&"default"in r?r.default:r,i=function(){return(i=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)},c="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==e?e:"undefined"!=typeof self?self:{};var l,a=function(e,t){return e(t={exports:{}},t.exports),t.exports}((function(e,t){Object.defineProperty(t,"__esModule",{value:!0});var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==c?c:"undefined"!=typeof self?self:{};function r(e,t){return e(t={exports:{}},t.exports),t.exports}var o,u,i,l="object",a=function(e){return e&&e.Math==Math&&e},f=a(typeof globalThis==l&&globalThis)||a(typeof window==l&&window)||a(typeof self==l&&self)||a(typeof n==l&&n)||Function("return this")(),s=function(e){try{return!!e()}catch(t){return!0}},p=!s((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})),d={}.propertyIsEnumerable,E=Object.getOwnPropertyDescriptor,y={f:E&&!d.call({1:2},1)?function(e){var t=E(this,e);return!!t&&t.enumerable}:d},h=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}},v={}.toString,m="".split,T=s((function(){return!Object("z").propertyIsEnumerable(0)}))?function(e){return"String"==function(e){return v.call(e).slice(8,-1)}(e)?m.call(e,""):Object(e)}:Object,g=function(e){return T(function(e){if(null==e)throw TypeError("Can't call method on "+e);return e}(e))},b=function(e){return"object"==typeof e?null!==e:"function"==typeof e},_=function(e,t){if(!b(e))return e;var n,r;if(t&&"function"==typeof(n=e.toString)&&!b(r=n.call(e)))return r;if("function"==typeof(n=e.valueOf)&&!b(r=n.call(e)))return r;if(!t&&"function"==typeof(n=e.toString)&&!b(r=n.call(e)))return r;throw TypeError("Can't convert object to primitive value")},I={}.hasOwnProperty,O=function(e,t){return I.call(e,t)},D=f.document,S=b(D)&&b(D.createElement),N=function(e){return S?D.createElement(e):{}},L=!p&&!s((function(){return 7!=Object.defineProperty(N("div"),"a",{get:function(){return 7}}).a})),A=Object.getOwnPropertyDescriptor,P={f:p?A:function(e,t){if(e=g(e),t=_(t,!0),L)try{return A(e,t)}catch(n){}if(O(e,t))return h(!y.f.call(e,t),e[t])}},R=function(e){if(!b(e))throw TypeError(String(e)+" is not an object");return e},w=Object.defineProperty,j={f:p?w:function(e,t,n){if(R(e),t=_(t,!0),R(n),L)try{return w(e,t,n)}catch(r){}if("get"in n||"set"in n)throw TypeError("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},H=p?function(e,t,n){return j.f(e,t,h(1,n))}:function(e,t,n){return e[t]=n,e},M=function(e,t){try{H(f,e,t)}catch(n){f[e]=t}return t},G=r((function(e){var t=f["__core-js_shared__"]||M("__core-js_shared__",{});(e.exports=function(e,n){return t[e]||(t[e]=void 0!==n?n:{})})("versions",[]).push({version:"3.1.3",mode:"global",copyright:"© 2019 Denis Pushkarev (zloirock.ru)"})})),k=G("native-function-to-string",Function.toString),B=f.WeakMap,C="function"==typeof B&&/native code/.test(k.call(B)),K=0,Y=Math.random(),x=function(e){return"Symbol("+String(void 0===e?"":e)+")_"+(++K+Y).toString(36)},U=G("keys"),F=function(e){return U[e]||(U[e]=x(e))},V={},q=f.WeakMap;if(C){var W=new q,Q=W.get,z=W.has,J=W.set;o=function(e,t){return J.call(W,e,t),t},u=function(e){return Q.call(W,e)||{}},i=function(e){return z.call(W,e)}}else{var X=F("state");V[X]=!0,o=function(e,t){return H(e,X,t),t},u=function(e){return O(e,X)?e[X]:{}},i=function(e){return O(e,X)}}var Z={set:o,get:u,has:i,enforce:function(e){return i(e)?u(e):o(e,{})},getterFor:function(e){return function(t){var n;if(!b(t)||(n=u(t)).type!==e)throw TypeError("Incompatible receiver, "+e+" required");return n}}},$=r((function(e){var t=Z.get,n=Z.enforce,r=String(k).split("toString");G("inspectSource",(function(e){return k.call(e)})),(e.exports=function(e,t,o,u){var i=!!u&&!!u.unsafe,c=!!u&&!!u.enumerable,l=!!u&&!!u.noTargetGet;"function"==typeof o&&("string"!=typeof t||O(o,"name")||H(o,"name",t),n(o).source=r.join("string"==typeof t?t:"")),e!==f?(i?!l&&e[t]&&(c=!0):delete e[t],c?e[t]=o:H(e,t,o)):c?e[t]=o:M(t,o)})(Function.prototype,"toString",(function(){return"function"==typeof this&&t(this).source||k.call(this)}))})),ee=f,te=function(e){return"function"==typeof e?e:void 0},ne=function(e,t){return arguments.length<2?te(ee[e])||te(f[e]):ee[e]&&ee[e][t]||f[e]&&f[e][t]},re=Math.ceil,oe=Math.floor,ue=function(e){return isNaN(e=+e)?0:(e>0?oe:re)(e)},ie=Math.min,ce=Math.max,le=Math.min,ae=function(e){return function(t,n,r){var o,u,i=g(t),c=(o=i.length)>0?ie(ue(o),9007199254740991):0,l=function(e,t){var n=ue(e);return n<0?ce(n+t,0):le(n,t)}(r,c);if(e&&n!=n){for(;c>l;)if((u=i[l++])!=u)return!0}else for(;c>l;l++)if((e||l in i)&&i[l]===n)return e||l||0;return!e&&-1}},fe={includes:ae(!0),indexOf:ae(!1)},se=fe.indexOf,pe=function(e,t){var n,r=g(e),o=0,u=[];for(n in r)!O(V,n)&&O(r,n)&&u.push(n);for(;t.length>o;)O(r,n=t[o++])&&(~se(u,n)||u.push(n));return u},de=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"],Ee=de.concat("length","prototype"),ye={f:Object.getOwnPropertyNames||function(e){return pe(e,Ee)}},he={f:Object.getOwnPropertySymbols},ve=ne("Reflect","ownKeys")||function(e){var t=ye.f(R(e)),n=he.f;return n?t.concat(n(e)):t},me=function(e,t){for(var n=ve(t),r=j.f,o=P.f,u=0;u<n.length;u++){var i=n[u];O(e,i)||r(e,i,o(t,i))}},Te=/#|\.prototype\./,ge=function(e,t){var n=_e[be(e)];return n==Oe||n!=Ie&&("function"==typeof t?s(t):!!t)},be=ge.normalize=function(e){return String(e).replace(Te,".").toLowerCase()},_e=ge.data={},Ie=ge.NATIVE="N",Oe=ge.POLYFILL="P",De=ge,Se=P.f,Ne=function(e,t){var n,r,o,u,i,c=e.target,l=e.global,a=e.stat;if(n=l?f:a?f[c]||M(c,{}):(f[c]||{}).prototype)for(r in t){if(u=t[r],o=e.noTargetGet?(i=Se(n,r))&&i.value:n[r],!De(l?r:c+(a?".":"#")+r,e.forced)&&void 0!==o){if(typeof u==typeof o)continue;me(u,o)}(e.sham||o&&o.sham)&&H(u,"sham",!0),$(n,r,u,e)}},Le=Object.keys||function(e){return pe(e,de)},Ae=y.f,Pe=function(e){return function(t){for(var n,r=g(t),o=Le(r),u=o.length,i=0,c=[];u>i;)n=o[i++],p&&!Ae.call(r,n)||c.push(e?[n,r[n]]:r[n]);return c}},Re={entries:Pe(!0),values:Pe(!1)}.values;Ne({target:"Object",stat:!0},{values:function(e){return Re(e)}});ee.Object.values;var we=!!Object.getOwnPropertySymbols&&!s((function(){return!String(Symbol())})),je=f.Symbol,He=G("wks"),Me=p?Object.defineProperties:function(e,t){R(e);for(var n,r=Le(t),o=r.length,u=0;o>u;)j.f(e,n=r[u++],t[n]);return e},Ge=ne("document","documentElement"),ke=F("IE_PROTO"),Be=function(){},Ce=function(){var e,t=N("iframe"),n=de.length;for(t.style.display="none",Ge.appendChild(t),t.src=String("javascript:"),(e=t.contentWindow.document).open(),e.write("<script>document.F=Object<\/script>"),e.close(),Ce=e.F;n--;)delete Ce.prototype[de[n]];return Ce()},Ke=Object.create||function(e,t){var n;return null!==e?(Be.prototype=R(e),n=new Be,Be.prototype=null,n[ke]=e):n=Ce(),void 0===t?n:Me(n,t)};V[ke]=!0;var Ye,xe=He[Ye="unscopables"]||(He[Ye]=we&&je[Ye]||(we?je:x)("Symbol."+Ye)),Ue=Array.prototype;null==Ue[xe]&&H(Ue,xe,Ke(null));var Fe,Ve=fe.includes;Ne({target:"Array",proto:!0},{includes:function(e){return Ve(this,e,arguments.length>1?arguments[1]:void 0)}}),Fe="includes",Ue[xe][Fe]=!0;var qe,We,Qe,ze=function(e,t,n){if(function(e){if("function"!=typeof e)throw TypeError(String(e)+" is not a function")}(e),void 0===t)return e;switch(n){case 0:return function(){return e.call(t)};case 1:return function(n){return e.call(t,n)};case 2:return function(n,r){return e.call(t,n,r)};case 3:return function(n,r,o){return e.call(t,n,r,o)}}return function(){return e.apply(t,arguments)}},Je=Function.call;qe="includes",ze(Je,f["Array"].prototype[qe],We);!function(e){e.DOCUMENT="document",e.PARAGRAPH="paragraph",e.HEADING_1="heading-1",e.HEADING_2="heading-2",e.HEADING_3="heading-3",e.HEADING_4="heading-4",e.HEADING_5="heading-5",e.HEADING_6="heading-6",e.OL_LIST="ordered-list",e.UL_LIST="unordered-list",e.LIST_ITEM="list-item",e.HR="hr",e.QUOTE="blockquote",e.EMBEDDED_ENTRY="embedded-entry-block",e.EMBEDDED_ASSET="embedded-asset-block"}(Qe||(Qe={}));var Xe,Ze=Qe;!function(e){e.HYPERLINK="hyperlink",e.ENTRY_HYPERLINK="entry-hyperlink",e.ASSET_HYPERLINK="asset-hyperlink",e.EMBEDDED_ENTRY="embedded-entry-inline"}(Xe||(Xe={}));var $e,et=Xe,tt=[Ze.PARAGRAPH,Ze.HEADING_1,Ze.HEADING_2,Ze.HEADING_3,Ze.HEADING_4,Ze.HEADING_5,Ze.HEADING_6,Ze.OL_LIST,Ze.UL_LIST,Ze.HR,Ze.QUOTE,Ze.EMBEDDED_ENTRY,Ze.EMBEDDED_ASSET],nt=[Ze.HR,Ze.EMBEDDED_ENTRY,Ze.EMBEDDED_ASSET],rt=(($e={})[Ze.OL_LIST]=[Ze.LIST_ITEM],$e[Ze.UL_LIST]=[Ze.LIST_ITEM],$e[Ze.LIST_ITEM]=tt.slice(),$e[Ze.QUOTE]=[Ze.PARAGRAPH],$e);var ot=Object.freeze({isInline:function(e){return Object.values(et).includes(e.nodeType)},isBlock:function(e){return Object.values(Ze).includes(e.nodeType)},isText:function(e){return"text"===e.nodeType}});t.BLOCKS=Ze,t.CONTAINERS=rt,t.INLINES=et,t.MARKS={BOLD:"bold",ITALIC:"italic",UNDERLINE:"underline",CODE:"code"},t.TOP_LEVEL_BLOCKS=tt,t.VOID_BLOCKS=nt,t.helpers=ot}));(l=a)&&l.__esModule&&Object.prototype.hasOwnProperty.call(l,"default")&&l.default;var f,s,p=a.BLOCKS,d=(a.CONTAINERS,a.INLINES),E=a.MARKS,y=(a.TOP_LEVEL_BLOCKS,a.VOID_BLOCKS,a.helpers);function h(e,t){return e.map((function(e,n){return r=v(e,t),u=n,o.isValidElement(r)&&null===r.key?o.cloneElement(r,{key:u}):r;var r,u}))}function v(e,t){var n=t.renderNode,r=t.renderMark,o=t.renderText;if(y.isText(e))return e.marks.reduce((function(e,t){return r[t.type]?r[t.type](e):e}),o?o(e.value):e.value);var i=h(e.content,t);return e.nodeType&&n[e.nodeType]?n[e.nodeType](e,i):u.createElement(u.Fragment,null,i)}var m=((f={})[p.DOCUMENT]=function(e,t){return t},f[p.PARAGRAPH]=function(e,t){return u.createElement("p",null,t)},f[p.HEADING_1]=function(e,t){return u.createElement("h1",null,t)},f[p.HEADING_2]=function(e,t){return u.createElement("h2",null,t)},f[p.HEADING_3]=function(e,t){return u.createElement("h3",null,t)},f[p.HEADING_4]=function(e,t){return u.createElement("h4",null,t)},f[p.HEADING_5]=function(e,t){return u.createElement("h5",null,t)},f[p.HEADING_6]=function(e,t){return u.createElement("h6",null,t)},f[p.EMBEDDED_ENTRY]=function(e,t){return u.createElement("div",null,t)},f[p.UL_LIST]=function(e,t){return u.createElement("ul",null,t)},f[p.OL_LIST]=function(e,t){return u.createElement("ol",null,t)},f[p.LIST_ITEM]=function(e,t){return u.createElement("li",null,t)},f[p.QUOTE]=function(e,t){return u.createElement("blockquote",null,t)},f[p.HR]=function(){return u.createElement("hr",null)},f[d.ASSET_HYPERLINK]=function(e){return g(d.ASSET_HYPERLINK,e)},f[d.ENTRY_HYPERLINK]=function(e){return g(d.ENTRY_HYPERLINK,e)},f[d.EMBEDDED_ENTRY]=function(e){return g(d.EMBEDDED_ENTRY,e)},f[d.HYPERLINK]=function(e,t){return u.createElement("a",{href:e.data.uri},t)},f),T=((s={})[E.BOLD]=function(e){return u.createElement("b",null,e)},s[E.ITALIC]=function(e){return u.createElement("i",null,e)},s[E.UNDERLINE]=function(e){return u.createElement("u",null,e)},s[E.CODE]=function(e){return u.createElement("code",null,e)},s);function g(e,t){return u.createElement("span",{key:t.data.target.sys.id},"type: ",t.nodeType," id: ",t.data.target.sys.id)}t.documentToReactComponents=function(e,t){return void 0===t&&(t={}),e?v(e,{renderNode:i({},m,t.renderNode),renderMark:i({},T,t.renderMark),renderText:t.renderText}):null}}).call(this,n("yLpj"))},c851:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return l}));var r=n("q1tI"),o=n.n(r),u=n("Bl7J"),i=n("R8uD"),c=n("hIod");t.default=function(e){var t=e.data,n=e.location,r=t.contentfulBlogPost.body.json,l={renderNode:{"embedded-asset-block":function(e){var t=e.data.target.fields.title["en-US"],n=e.data.target.fields.file["en-US"].url;return o.a.createElement("img",{src:n,alt:t})}}};return o.a.createElement(u.a,{data:t,location:n},o.a.createElement(c.a,{title:t.contentfulBlogPost.title}),o.a.createElement("h1",null,t.contentfulBlogPost.title),o.a.createElement("p",null,t.contentfulBlogPost.publishedDate),Object(i.documentToReactComponents)(r,l))};var l="2494586491"}}]);
//# sourceMappingURL=component---src-templates-blog-js-11ce162a92476e2716b7.js.map