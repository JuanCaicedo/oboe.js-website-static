/*! jQuery v2.2.3 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="2.2.3",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){var b;if("object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype||{},"isPrototypeOf"))return!1;for(b in a);return void 0===b||k.call(a,b)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=d.createElement("script"),b.text=a,d.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:h.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function(){return a.apply(b||this,d.concat(e.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return h.call(b,a)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J),n.ready()}n.ready.promise=function(b){return I||(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J))),I.promise(b)},n.ready.promise();var K=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)K(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},L=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function M(){this.expando=n.expando+M.uid++}M.uid=1,M.prototype={register:function(a,b){var c=b||{};return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando]},cache:function(a){if(!L(a))return{};var b=a[this.expando];return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[b]=c;else for(d in b)e[d]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=a[this.expando];if(void 0!==f){if(void 0===b)this.register(a);else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(G)||[])),c=d.length;while(c--)delete f[d[c]]}(void 0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!n.isEmptyObject(b)}};var N=new M,O=new M,P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function R(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Q,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:P.test(c)?n.parseJSON(c):c;
}catch(e){}O.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return O.hasData(a)||N.hasData(a)},data:function(a,b,c){return O.access(a,b,c)},removeData:function(a,b){O.remove(a,b)},_data:function(a,b,c){return N.access(a,b,c)},_removeData:function(a,b){N.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));N.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){O.set(this,a)}):K(this,function(b){var c,d;if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,"-$&").toLowerCase()),void 0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return c;if(c=R(f,d,void 0),void 0!==c)return c}else d=n.camelCase(a),this.each(function(){var c=O.get(this,d);O.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&O.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){O.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks("once memory").add(function(){N.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=N.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=/^(?:checkbox|radio)$/i,Y=/<([\w:-]+)/,Z=/^$|\/(?:java|ecma)script/i,$={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;function _(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function aa(a,b){for(var c=0,d=a.length;d>c;c++)N.set(a[c],"globalEval",!b||N.get(b[c],"globalEval"))}var ba=/<|&#?\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;p>o;o++)if(f=a[o],f||0===f)if("object"===n.type(f))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createElement("div")),h=(Y.exec(f)||["",""])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;n.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",o=0;while(f=m[o++])if(d&&n.inArray(f,d)>-1)e&&e.push(f);else if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),"script"),j&&aa(g),c){k=0;while(f=g[k++])Z.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\.(.+)|)/;function ga(){return!0}function ha(){return!1}function ia(){try{return d.activeElement}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ja(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return"undefined"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(G)||[""],j=b.length;while(j--)h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&N.remove(a,"handle events")}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ia()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===ia()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ga,a&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ga,a&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),n.fn.extend({on:function(a,b,c,d){return ja(this,a,b,c,d)},one:function(a,b,c,d){return ja(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)})}});var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,la=/<script|<style|<link/i,ma=/checked\s*(?:[^=]|=\s*.checked.)/i,na=/^true\/(.*)/,oa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function qa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function ra(a){var b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i))}}function ta(a,b){var c=b.nodeName.toLowerCase();"input"===c&&X.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d)});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,"script"),qa),i=h.length;o>m;m++)j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,"script"))),c.call(a[m],j,m);if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;i>m;m++)j=h[m],Z.test(j.type||"")&&!N.access(j,"globalEval")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,"")))}return a}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ka,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++)ta(f[d],g[d]);if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++)sa(f[d],g[d]);else sa(a,h);return g=_(h,"script"),g.length>0&&aa(g,!i&&_(a,"script")),h},cleanData:function(a){for(var b,c,d,e=n.event.special,f=0;void 0!==(c=a[f]);f++)if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events)e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);c[N.expando]=void 0}c[O.expando]&&(c[O.expando]=void 0)}}}),n.fn.extend({domManip:ua,detach:function(a){return va(this,a,!0)},remove:function(a){return va(this,a)},text:function(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.appendChild(a)}})},prepend:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;f>=h;h++)c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());return this.pushStack(d)}});var wa,xa={HTML:"block",BODY:"block"};function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function za(a){var b=d,c=xa[a];return c||(c=ya(a,b),"none"!==c&&c||(wa=(wa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c}var Aa=/^margin/,Ba=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ca=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Ea=d.documentElement;!function(){var b,c,e,f,g=d.createElement("div"),h=d.createElement("div");if(h.style){h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h);function i(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ea.appendChild(g);var d=a.getComputedStyle(h);b="1%"!==d.top,f="2px"===d.marginLeft,c="4px"===d.width,h.style.marginRight="50%",e="4px"===d.marginRight,Ea.removeChild(g)}n.extend(l,{pixelPosition:function(){return i(),b},boxSizingReliable:function(){return null==c&&i(),c},pixelMarginRight:function(){return null==c&&i(),e},reliableMarginLeft:function(){return null==c&&i(),f},reliableMarginRight:function(){var b,c=h.appendChild(d.createElement("div"));return c.style.cssText=h.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",h.style.width="1px",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b}})}}();function Fa(a,b,c){var d,e,f,g,h=a.style;return c=c||Ca(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0!==g?g+"":g}function Ga(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:"absolute",visibility:"hidden",display:"block"},Ja={letterSpacing:"0",fontWeight:"400"},Ka=["Webkit","O","Moz","ms"],La=d.createElement("div").style;function Ma(a){if(a in La)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--)if(a=Ka[c]+b,a in La)return a}function Na(a,b,c){var d=T.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Oa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Pa(b,c,e){var f=!0,g="width"===c?b.offsetWidth:b.offsetHeight,h=Ca(b),i="border-box"===n.css(b,"boxSizing",!1,h);if(d.msFullscreenElement&&a.top!==a&&b.getClientRects().length&&(g=Math.round(100*b.getBoundingClientRect()[c])),0>=g||null==g){if(g=Fa(b,c,h),(0>g||null==g)&&(g=b.style[c]),Ba.test(g))return g;f=i&&(l.boxSizingReliable()||g===b.style[c]),g=parseFloat(g)||0}return g+Oa(b,c,e||(i?"border":"content"),f,h)+"px"}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=N.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=N.access(d,"olddisplay",za(d.nodeName)))):(e=V(d),"none"===c&&e||N.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),"normal"===e&&b in Ja&&(e=Ja[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Ha.test(n.css(a,"display"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d)}):Pa(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,"border-box"===n.css(a,"boxSizing",!1,f),f);return g&&(e=T.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)}}}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,"marginLeft"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:"inline-block"},Fa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Aa.test(a)||(n.cssHooks[a+b].set=Na)}),n.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Qa(this,!0)},hide:function(){return Qa(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ra.propHooks[this.prop];return a&&a.get?a.get(this):Ra.propHooks._default.get(this)},run:function(a){var b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=Ra.prototype.init,n.fx.step={};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return a.setTimeout(function(){Sa=void 0}),Sa=n.now()}function Xa(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=U[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?N.get(a,"olddisplay")||za(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?za(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=N.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;N.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function $a(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for($a(k,j.opts.specialEasing);g>f;f++)if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(_a,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)},prefilters:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=_a(this,n.extend({},a),f);(e||N.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=N.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e)}}),n.each({slideDown:Xa("show"),slideUp:Xa("hide"),slideToggle:Xa("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Sa=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Sa=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(Ta),Ta=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var ab,bb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return K(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),ab={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e}});var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return K(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,
e=n.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):cb.test(a.nodeName)||db.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var eb=/[\t\r\n\f]/g;function fb(a){return a.getAttribute&&a.getAttribute("class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,fb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,fb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=fb(this),b&&N.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":N.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+fb(c)+" ").replace(eb," ").indexOf(b)>-1)return!0;return!1}});var gb=/\r/g,hb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(gb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(hb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(n.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var ib=/^(?:focusinfocus|focusoutblur)$/;n.extend(n.event,{trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!ib.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),l=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f||!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){for(j=o.delegateType||q,ib.test(j+q)||(h=h.parentNode);h;h=h.parentNode)p.push(h),i=h;i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a)}g=0;while((h=p[g++])&&!b.isPropagationStopped())b.type=g>1?j:o.bindType||q,m=(N.get(h,"events")||{})[b.type]&&N.get(h,"handle"),m&&m.apply(h,c),m=l&&h[l],m&&m.apply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.event.triggered=q,e[q](),n.event.triggered=void 0,i&&(e[l]=i)),b.result}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b),d.isDefaultPrevented()&&c.preventDefault()}}),n.fn.extend({trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),l.focusin="onfocusin"in a,l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=N.access(d,b);e||d.addEventListener(a,c,!0),N.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=N.access(d,b)-1;e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.remove(d,b))}}});var jb=a.location,kb=n.now(),lb=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var mb=/#.*$/,nb=/([?&])_=[^&]*/,ob=/^(.*?):[ \t]*([^\r\n]*)$/gm,pb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,qb=/^(?:GET|HEAD)$/,rb=/^\/\//,sb={},tb={},ub="*/".concat("*"),vb=d.createElement("a");vb.href=jb.href;function wb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function xb(a,b,c,d){var e={},f=a===tb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function yb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function zb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Ab(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:jb.href,type:"GET",isLocal:pb.test(jb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ub,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?yb(yb(a,n.ajaxSettings),b):yb(n.ajaxSettings,a)},ajaxPrefilter:wb(sb),ajaxTransport:wb(tb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):n.event,q=n.Deferred(),r=n.Callbacks("once memory"),s=m.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,getResponseHeader:function(a){var b;if(2===v){if(!h){h={};while(b=ob.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===v?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return v||(a=u[c]=u[c]||a,t[a]=b),this},overrideMimeType:function(a){return v||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>v)for(b in a)s[b]=[s[b],a[b]];else x.always(a[x.status]);return this},abort:function(a){var b=a||w;return e&&e.abort(b),z(0,b),this}};if(q.promise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||jb.href)+"").replace(mb,"").replace(rb,jb.protocol+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=n.trim(m.dataType||"*").toLowerCase().match(G)||[""],null==m.crossDomain){j=d.createElement("a");try{j.href=m.url,j.href=j.href,m.crossDomain=vb.protocol+"//"+vb.host!=j.protocol+"//"+j.host}catch(y){m.crossDomain=!0}}if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=n.param(m.data,m.traditional)),xb(sb,m,c,x),2===v)return x;k=n.event&&m.global,k&&0===n.active++&&n.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!qb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(lb.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=nb.test(f)?f.replace(nb,"$1_="+kb++):f+(lb.test(f)?"&":"?")+"_="+kb++)),m.ifModified&&(n.lastModified[f]&&x.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&x.setRequestHeader("If-None-Match",n.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",m.contentType),x.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+ub+"; q=0.01":""):m.accepts["*"]);for(l in m.headers)x.setRequestHeader(l,m.headers[l]);if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v))return x.abort();w="abort";for(l in{success:1,error:1,complete:1})x[l](m[l]);if(e=xb(tb,m,c,x)){if(x.readyState=1,k&&p.trigger("ajaxSend",[x,m]),2===v)return x;m.async&&m.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},m.timeout));try{v=1,e.send(t,z)}catch(y){if(!(2>v))throw y;z(-1,y)}}else z(-1,"No Transport");function z(b,c,d,h){var j,l,t,u,w,y=c;2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(u=zb(m,x,d)),u=Ab(m,u,x,j),j?(m.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(n.lastModified[f]=w),w=x.getResponseHeader("etag"),w&&(n.etag[f]=w)),204===b||"HEAD"===m.type?y="nocontent":304===b?y="notmodified":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+"",j?q.resolveWith(o,[l,y,x]):q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?"ajaxSuccess":"ajaxError",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger("ajaxComplete",[x,m]),--n.active||n.event.trigger("ajaxStop")))}return x},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return!n.expr.filters.visible(a)},n.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0};var Bb=/%20/g,Cb=/\[\]$/,Db=/\r?\n/g,Eb=/^(?:submit|button|image|reset|file)$/i,Fb=/^(?:input|select|textarea|keygen)/i;function Gb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Cb.test(a)?d(a,e):Gb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Gb(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Gb(c,a[c],b,e);return d.join("&").replace(Bb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Fb.test(this.nodeName)&&!Eb.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Db,"\r\n")}}):{name:b.name,value:c.replace(Db,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Hb={0:200,1223:204},Ib=n.ajaxSettings.xhr();l.cors=!!Ib&&"withCredentials"in Ib,l.ajax=Ib=!!Ib,n.ajaxTransport(function(b){var c,d;return l.cors||Ib&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Hb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=n("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Jb=[],Kb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Jb.pop()||n.expando+"_"+kb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Kb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Kb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Kb,"$1"+e):b.jsonp!==!1&&(b.url+=(lb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Jb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var Lb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Lb)return Lb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function Mb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Mb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ea})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;n.fn[a]=function(d){return K(this,function(a,d,e){var f=Mb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return K(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},size:function(){return this.length}}),n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Nb=a.jQuery,Ob=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Ob),b&&a.jQuery===n&&(a.jQuery=Nb),n},b||(a.jQuery=a.$=n),n});

// Sticky Plugin v1.0.0 for jQuery
// =============
// Author: Anthony Garand
// Improvements by German M. Bravo (Kronuz) and Ruud Kamphuis (ruudk)
// Improvements by Leonardo C. Daronco (daronco)
// Created: 2/14/2011
// Date: 2/12/2012
// Website: http://labs.anthonygarand.com/sticky
// Description: Makes an element on the page stick on the screen as you scroll
//       It will only set the 'top' and 'position' of your element, you
//       might need to adjust the width in some cases.

(function($) {
  var defaults = {
      topSpacing: 0,
      bottomSpacing: 0,
      className: 'is-sticky',
      wrapperClassName: 'sticky-wrapper',
      center: false,
      getWidthFrom: ''
    },
    $window = $(window),
    $document = $(document),
    sticked = [],
    windowHeight = $window.height(),
    scroller = function() {
      var scrollTop = $window.scrollTop(),
        documentHeight = $document.height(),
        dwh = documentHeight - windowHeight,
        extra = (scrollTop > dwh) ? dwh - scrollTop : 0;

      for (var i = 0; i < sticked.length; i++) {
        var s = sticked[i],
          elementTop = s.stickyWrapper.offset().top,
          etse = elementTop - s.topSpacing - extra;

        if (scrollTop <= etse) {
          if (s.currentTop !== null) {
            s.stickyElement
              .css('position', '')
              .css('top', '');
            s.stickyElement.parent().removeClass(s.className);
            s.currentTop = null;
          }
        }
        else {
          var newTop = documentHeight - s.stickyElement.outerHeight()
            - s.topSpacing - s.bottomSpacing - scrollTop - extra;
          if (newTop < 0) {
            newTop = newTop + s.topSpacing;
          } else {
            newTop = s.topSpacing;
          }
          if (s.currentTop != newTop) {
            s.stickyElement
              .css('position', 'fixed')
              .css('top', newTop);

            if (typeof s.getWidthFrom !== 'undefined') {
              s.stickyElement.css('width', $(s.getWidthFrom).width());
            }

            s.stickyElement.parent().addClass(s.className);
            s.currentTop = newTop;
          }
        }
      }
    },
    resizer = function() {
      windowHeight = $window.height();
    },
    methods = {
      init: function(options) {
        var o = $.extend(defaults, options);
        var rtn = this.each(function() {
          var stickyElement = $(this),
             
              isStuckAlready = sticked.some(function( stickedItem ){
                 return stickedItem.stickyElement[0] == stickyElement[0];
              });
           
          if( isStuckAlready ) {
             return;
          }

          var stickyId = stickyElement.attr('id');
          var wrapper = $('<div></div>')
            .attr('id', stickyId + '-sticky-wrapper')
            .addClass(o.wrapperClassName);
          stickyElement.wrapAll(wrapper);

          if (o.center) {
            stickyElement.parent().css({width:stickyElement.outerWidth(),marginLeft:"auto",marginRight:"auto"});
          }

          if (stickyElement.css("float") == "right") {
            stickyElement.css({"float":"none"}).parent().css({"float":"right"});
          }

          var stickyWrapper = stickyElement.parent();
          stickyWrapper.css('height', stickyElement.outerHeight());
          sticked.push({
            topSpacing: o.topSpacing,
            bottomSpacing: o.bottomSpacing,
            stickyElement: stickyElement,
            currentTop: null,
            stickyWrapper: stickyWrapper,
            className: o.className,
            getWidthFrom: o.getWidthFrom
          });
        });
        scroller(); // might already need sticking
        return rtn;
      },
      unstick: function(){
        return this.each(function() {

          var stickyElement = $(this),
              wrapped = stickyElement.parent().hasClass('sticky-wrapper');

          if( wrapped ) {
             stickyElement.unwrap();
          }
           
          stickyElement.attr('style', '');
            
          sticked = sticked.filter(function( stickedItem ){
            return stickedItem.stickyElement[0] != stickyElement[0]; 
          });
        });
      },
      restick: function() {
         methods.unstick.apply(this);
         methods.init.apply(this, arguments);
         scroller(); 
      },
      update: scroller
    };

  // should be more efficient than using $window.scroll(scroller) and $window.resize(resizer):
  if (window.addEventListener) {
    window.addEventListener('scroll', scroller, false);
    window.addEventListener('resize', resizer, false);
  } else if (window.attachEvent) {
    window.attachEvent('onscroll', scroller);
    window.attachEvent('onresize', resizer);
  }

  $.fn.sticky = function(method) {
    if (methods[method]) {
      return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    } else if (typeof method === 'object' || !method ) {
      return methods.init.apply( this, arguments );
    } else {
      $.error('Method ' + method + ' does not exist on jQuery.sticky');
    }
  };
  $(function() {
    setTimeout(scroller, 0);
  });
})(jQuery);

/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing.easeOutBounce = function (x, t, b, c, d) {
   if ((t/=d) < (1/2.75)) {
      return c*(7.5625*t*t) + b;
   } else if (t < (2/2.75)) {
      return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
   } else if (t < (2.5/2.75)) {
      return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
   } else {
      return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
   }
};

/*!
 * Pause jQuery plugin v0.1
 *
 * Copyright 2010 by Tobia Conforto <tobia.conforto@gmail.com>
 *
 * Based on Pause-resume-animation jQuery plugin by Joe Weitzel
 *
 * This program is free software; you can redistribute it and/or modify it
 * under the terms of the GNU General Public License as published by the Free
 * Software Foundation; either version 2 of the License, or(at your option)
 * any later version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT
 * ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or
 * FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for
 * more details.
 *
 * You should have received a copy of the GNU General Public License along with
 * this program; if not, write to the Free Software Foundation, Inc., 51
 * Franklin Street, Fifth Floor, Boston, MA 02110-1301, USA.
 */
/* Changelog:
 *
 * 0.1    2010-06-13  Initial release
 */
(function() {
    var $ = jQuery,
        pauseId = 'jQuery.pause',
        uuid = 1,
        oldAnimate = $.fn.animate,
        anims = {};

    function now() { return new Date().getTime(); }

    $.fn.animate = function(prop, speed, easing, callback) {
        var optall = $.speed(speed, easing, callback);
        optall.complete = optall.old; // unwrap callback
        return this.each(function() {
            // check pauseId
            if (! this[pauseId])
                this[pauseId] = uuid++;
            // start animation
            var opt = $.extend({}, optall);
            oldAnimate.apply($(this), [prop, $.extend({}, opt)]);
            // store data
            anims[this[pauseId]] = {
                run: true,
                prop: prop,
                opt: opt,
                start: now(),
                done: 0
            };
        });
    };

    $.fn.pause = function() {
        return this.each(function() {
            // check pauseId
            if (! this[pauseId])
                this[pauseId] = uuid++;
            // fetch data
            var data = anims[this[pauseId]];
            if (data && data.run) {
                data.done += now() - data.start;
                if (data.done > data.opt.duration) {
                    // remove stale entry
                    delete anims[this[pauseId]];
                } else {
                    // pause animation
                    $(this).stop();
                    data.run = false;
                }
            }
        });
    };

    $.fn.resume = function() {
        return this.each(function() {
            // check pauseId
            if (! this[pauseId])
                this[pauseId] = uuid++;
            // fetch data
            var data = anims[this[pauseId]];
            if (data && ! data.run) {
                // resume animation
                data.opt.duration -= data.done;
                data.done = 0;
                data.run = true;
                data.start = now();
                oldAnimate.apply($(this), [data.prop, $.extend({}, data.opt)]);
            }
        });
    };
})();

/* this file is stuff that css doesn't do yet, or that I'm too lazy to do in css
 * It is not OO at all unlike the other JS. Pretty bad perhaps. */

var MIN_SIZE_FOR_TWO_COL = 950,
   SIZE_REQUIRING_PHONE_LAYOUT = 600;

var jWindow = $(window);

var headings = [];

var siteNavStickyOptions = {
   getWidthFrom: '#pageArea',
   topSpacing: 0
};

function recordHeadingsPosition(){
   headings = $('main h2').map(function(i, el) {
      return {
         top: $(el).offset().top,
         id: el.id
      };
   });
}

function closestHeading() {
   var h;
   var top = jWindow.scrollTop() +100;
   var i = headings.length;
   while (i--) {
      h = headings[i];
      if (top >= h.top)
         return h;
   }
}

var prevHeading;
function updateActiveHeading() {
   if( headings.length == 0 ) {
      return;
   }

   var activeHeading = closestHeading();

   if (!activeHeading)
      activeHeading = headings.first()[0];

   if (prevHeading) {
      prevHeading.removeClass('active');
   }

   var a = $('a[href="#' + activeHeading.id + '"]');
   a.addClass('active');

   prevHeading = a;
}

jWindow.resize(function() {
   recordHeadingsPosition();
   updateActiveHeading();
   initSticky();
});

function initSticky(){

   var jSiteNav = $('#siteNav');

   // make internal nav sticky
   if( jWindow.width() > SIZE_REQUIRING_PHONE_LAYOUT ) {
      jSiteNav.sticky(siteNavStickyOptions);
   } else {
      jSiteNav.sticky('unstick');
   }

   if( jWindow.width() > MIN_SIZE_FOR_TWO_COL ) {

      // make internal nav sticky
      $('.internalNav').sticky({
         topSpacing:28
         ,  getWidthFrom:'.col1'
      });
   } else {
      $('.internalNav').sticky('unstick');
   }
}


$(function(){

   var jWindow = $(window),
        jReducedLogo = $('.reducedLogo'),
        jSiteNav = $('#siteNav');

    $('svg.menuButton').click(function() {
        jSiteNav.toggleClass('open')

        jSiteNav.sticky('restick', siteNavStickyOptions);
    });


    jWindow.scroll(function() {
        var pos = jWindow.scrollTop();

        jReducedLogo.toggleClass('show', pos > 240);
    });

   initSticky();

   if( jWindow.width() > MIN_SIZE_FOR_TWO_COL ) {

        // highlight active item on internal nav
        recordHeadingsPosition();
        updateActiveHeading();

        if( headings.length ) {
            $(document).scroll(updateActiveHeading);
            updateActiveHeading();
        }

       // set up smooth scrolling for internal links
       // http://css-tricks.com/snippets/jquery/smooth-scrolling/
       var jHtmlBody = $('html,body');

       $('ul.sections a').click(function() {
           if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
               var target = $(this.hash);
               target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
               if (target.length) {
                   jHtmlBody.animate({
                       scrollTop: (target.offset().top - 70)
                   }, 500);
                   return false;
               }
           }
       });
   }
});

// ECMAScript6 Number.isFiniate

(function (global) {
   var global_isFinite = global.isFinite;

   Object.defineProperty(Number, 'isFinite', {
      value: function isFinite(value) {
         return typeof value === 'number' && global_isFinite(value);
      },
      configurable: true,
      enumerable: false,
      writable: true
   });
})(this);

(function(){

/* allow svg properties to be set like css by jQuery. Apply a simple
 * idea of SVG transforms that ignores order and other transforms */
var cssHooks = $.cssHooks;
var cssNumber = $.cssNumber;
   
cssHooks.translateX = {
    get: function( elem, computed, extra ) {
        var baseVal = elem.transform.baseVal;
        if( !baseVal.numberOfItems ) {
            return 0;
        }
        return baseVal.getItem(0).matrix.e;
    },
    set: function( elem, value ) {
        var baseVal = elem.transform.baseVal;
        if( !baseVal.numberOfItems ) {
            elem.setAttribute('transform', 'translate(0,0)')
        }
        baseVal.getItem(0).matrix.e = value;
    }
};
cssHooks.translateY = {
    get: function( elem, computed, extra ) {
        var baseVal = elem.transform.baseVal;
        if( !baseVal.numberOfItems ) {
            return 0;
        }
        return baseVal.getItem(0).matrix.f;
    },
    set: function( elem, value ) {
        var baseVal = elem.transform.baseVal;
        if( !baseVal.numberOfItems ) {
            elem.setAttribute('transform', 'translate(0,0)')
        }
        baseVal.getItem(0).matrix.f = value;
    }
};
function getOrSetAttributeCssHook(attributeName) {
    return {
        get: function( elem, computed, extra ) {
            return elem.getAttribute(attributeName);
        },
        set: function( elem, value ) {
            elem.setAttribute(attributeName, value);
        }
    };
}
   
jQuery.extend(
   cssHooks,
   {  lineX1       : getOrSetAttributeCssHook('x1'),
      lineY1       : getOrSetAttributeCssHook('y1'),
      lineX2       : getOrSetAttributeCssHook('x2'),
      lineY2       : getOrSetAttributeCssHook('y2'),
      circleX      : getOrSetAttributeCssHook('cx'),
      circleY      : getOrSetAttributeCssHook('cy'),
      circleRadius : getOrSetAttributeCssHook('r')
   }
);

// Setting cssNumber.foo to true tells jquery not to put 'px' on the
// end of these properties when animating them:
cssNumber.translateX = 
cssNumber.translateY = 
cssNumber.lineX1 = 
cssNumber.lineY1 = 
cssNumber.lineX2 = 
cssNumber.lineY2 =
cssNumber.circleX =
cssNumber.circleY =    
cssNumber.circleRadius = 
        true;

}());

/**
 * Partially complete a function.
 *
 *  var add3 = partialComplete( function add(a,b){return a+b}, 3 );
 *
 *  add3(4) // gives 7
 *
 *  function wrap(left, right, cen){return left + " " + cen + " " + right;}
 *
 *  var pirateGreeting = partialComplete( wrap , "I'm", ", a mighty pirate!" );
 *
 *  pirateGreeting("Guybrush Threepwood");
 *  // gives "I'm Guybrush Threepwood, a mighty pirate!"
 */
var partialComplete = varArgs(function( fn, args ) {

        // this isn't the shortest way to write this but it does
        // avoid creating a new array each time to pass to fn.apply,
        // otherwise could just call boundArgs.concat(callArgs)       

        var numBoundArgs = args.length;

        return varArgs(function( callArgs ) {

            for (var i = 0; i < callArgs.length; i++) {
                args[numBoundArgs + i] = callArgs[i];
            }

            args.length = numBoundArgs + callArgs.length;

            return fn.apply(this, args);
        });
    }),

    /**
     * Compose zero or more functions:
     *
     *    compose(f1, f2, f3)(x) = f1(f2(f3(x))))
     *
     * The last (inner-most) function may take more than one parameter:
     *
     *    compose(f1, f2, f3)(x,y) = f1(f2(f3(x,y))))
     */
        compose = varArgs(function(fns) {

        var fnsList = arrayAsList(fns);

        function next(params, curFn) {
            return [apply(params, curFn)];
        }

        return varArgs(function(startParams){

            return foldR(next, startParams, fnsList)[0];
        });
    });

/**
 * A more optimised version of compose that takes exactly two functions
 * @param f1
 * @param f2
 */
function compose2(f1, f2){
    return function(){
        return f1.call(this,f2.apply(this,arguments));
    }
}

/**
 * Generic form for a function to get a property from an object
 *
 *    var o = {
 *       foo:'bar'
 *    }
 *
 *    var getFoo = attr('foo')
 *
 *    fetFoo(o) // returns 'bar'
 *
 * @param {String} key the property name
 */
function attr(key) {
    return new Function('o', 'return o["' + key + '"]' );
}

/**
 * Call a list of functions with the same args until one returns a
 * truthy result. Similar to the || operator.
 *
 * So:
 *      lazyUnion([f1,f2,f3 ... fn])( p1, p2 ... pn )
 *
 * Is equivalent to:
 *      apply([p1, p2 ... pn], f1) ||
 *      apply([p1, p2 ... pn], f2) ||
 *      apply([p1, p2 ... pn], f3) ... apply(fn, [p1, p2 ... pn])
 *
 * @returns the first return value that is given that is truthy.
 */
lazyUnion = varArgs(function(fns) {

    return varArgs(function(params){

        var maybeValue;

        for (var i = 0; i < len(fns); i++) {

            maybeValue = apply(params, fns[i]);

            if( maybeValue ) {
                return maybeValue;
            }
        }
    });
});

/**
 * This file declares various pieces of functional programming.
 *
 * This isn't a general purpose functional library, to keep things small it
 * has just the parts useful for Oboe.js.
 */


/**
 * Call a single function with the given arguments array.
 * Basically, a functional-style version of the OO-style Function#apply for
 * when we don't care about the context ('this') of the call.
 *
 * The order of arguments allows partial completion of the arguments array
 */
function apply(args, fn) {
    return fn.apply(undefined, args);
}

/**
 * Define variable argument functions but cut out all that tedious messing about
 * with the arguments object. Delivers the variable-length part of the arguments
 * list as an array.
 *
 * Eg:
 *
 * var myFunction = varArgs(
 *    function( fixedArgument, otherFixedArgument, variableNumberOfArguments ){
 *       console.log( variableNumberOfArguments );
 *    }
 * )
 *
 * myFunction('a', 'b', 1, 2, 3); // logs [1,2,3]
 *
 * var myOtherFunction = varArgs(function( variableNumberOfArguments ){
 *    console.log( variableNumberOfArguments );
 * })
 *
 * myFunction(1, 2, 3); // logs [1,2,3]
 *
 */
function varArgs(fn){

    var numberOfFixedArguments = fn.length -1,
        slice = Array.prototype.slice;


    if( numberOfFixedArguments == 0 ) {
        // an optimised case for when there are no fixed args:   

        return function(){
            return fn.call(this, slice.call(arguments));
        }

    } else if( numberOfFixedArguments == 1 ) {
        // an optimised case for when there are is one fixed args:

        return function(){
            return fn.call(this, arguments[0], slice.call(arguments, 1));
        }
    }

    // general case   

    // we know how many arguments fn will always take. Create a
    // fixed-size array to hold that many, to be re-used on
    // every call to the returned function
    var argsHolder = Array(fn.length);

    return function(){

        for (var i = 0; i < numberOfFixedArguments; i++) {
            argsHolder[i] = arguments[i];
        }

        argsHolder[numberOfFixedArguments] =
            slice.call(arguments, numberOfFixedArguments);

        return fn.apply( this, argsHolder);
    }
}


/**
 * Swap the order of parameters to a binary function
 *
 * A bit like this flip: http://zvon.org/other/haskell/Outputprelude/flip_f.html
 */
function flip(fn){
    return function(a, b){
        return fn(b,a);
    }
}


/**
 * Create a function which is the intersection of two other functions.
 *
 * Like the && operator, if the first is truthy, the second is never called,
 * otherwise the return value from the second is returned.
 */
function lazyIntersection(fn1, fn2) {

    return function (param) {

        return fn1(param) && fn2(param);
    };
}

/**
 * A function which does nothing
 */
function noop(){}

/**
 * A function which is always happy
 */
function always(){return true}

/**
 * Create a function which always returns the same
 * value
 *
 * var return3 = functor(3);
 *
 * return3() // gives 3
 * return3() // still gives 3
 * return3() // will always give 3
 */
function functor(val){
    return function(){
        return val;
    }
}

/**
 * Like cons in Lisp
 */
function cons(x, xs) {

    /* Internally lists are linked 2-element Javascript arrays.

     So that lists are all immutable we Object.freeze in newer 
     Javascript runtimes.

     In older engines freeze should have been polyfilled as the 
     identity function. */
    return Object.freeze([x,xs]);
}

/**
 * The empty list
 */
var emptyList = null,

    /**
     * Get the head of a list.
     *
     * Ie, head(cons(a,b)) = a
     */
        head = attr(0),

    /**
     * Get the tail of a list.
     *
     * Ie, head(cons(a,b)) = a
     */
        tail = attr(1);


/**
 * Converts an array to a list
 *
 *    asList([a,b,c])
 *
 * is equivalent to:
 *
 *    cons(a, cons(b, cons(c, emptyList)))
 **/
function arrayAsList(inputArray){

    return reverseList(
        inputArray.reduce(
            flip(cons),
            emptyList
        )
    );
}

/**
 * A varargs version of arrayAsList. Works a bit like list
 * in LISP.
 *
 *    list(a,b,c)
 *
 * is equivalent to:
 *
 *    cons(a, cons(b, cons(c, emptyList)))
 */
var list = varArgs(arrayAsList);

/**
 * Convert a list back to a js native array
 */
function listAsArray(list){

    return foldR( function(arraySoFar, listItem){

        arraySoFar.unshift(listItem);
        return arraySoFar;

    }, [], list );

}

/**
 * Map a function over a list
 */
function map(fn, list) {

    return list
        ? cons(fn(head(list)), map(fn,tail(list)))
        : emptyList
        ;
}

/**
 * foldR implementation. Reduce a list down to a single value.
 *
 * @pram {Function} fn     (rightEval, curVal) -> result
 */
function foldR(fn, startValue, list) {

    return list
        ? fn(foldR(fn, startValue, tail(list)), head(list))
        : startValue
        ;
}

/**
 * foldR implementation. Reduce a list down to a single value.
 *
 * @pram {Function} fn     (rightEval, curVal) -> result
 */
function foldR1(fn, list) {

    return tail(list)
        ? fn(foldR1(fn, tail(list)), head(list))
        : head(list)
        ;
}


/**
 * Return a list like the one given but with the first instance equal
 * to item removed
 */
function without(list, test, removedFn) {

    return withoutInner(list, removedFn || noop);

    function withoutInner(subList, removedFn) {
        return subList
            ?  ( test(head(subList))
            ? (removedFn(head(subList)), tail(subList))
            : cons(head(subList), withoutInner(tail(subList), removedFn))
            )
            : emptyList
            ;
    }
}

/**
 * Returns true if the given function holds for every item in
 * the list, false otherwise
 */
function all(fn, list) {

    return !list ||
        ( fn(head(list)) && all(fn, tail(list)) );
}

/**
 * Call every function in a list of functions with the same arguments
 *
 * This doesn't make any sense if we're doing pure functional because
 * it doesn't return anything. Hence, this is only really useful if the
 * functions being called have side-effects.
 */
function applyEach(fnList, arguments) {

    if( fnList ) {
        head(fnList).apply(null, arguments);

        applyEach(tail(fnList), arguments);
    }
}

/**
 * Reverse the order of a list
 */
function reverseList(list){

    // js re-implementation of 3rd solution from:
    //    http://www.haskell.org/haskellwiki/99_questions/Solutions/5
    function reverseInner( list, reversedAlready ) {
        if( !list ) {
            return reversedAlready;
        }

        return reverseInner(tail(list), cons(head(list), reversedAlready))
    }

    return reverseInner(list, emptyList);
}

function first(test, list) {
    return   list &&
        (test(head(list))
            ? head(list)
            : first(test,tail(list)));
}
/**
 * A pub/sub which is responsible for a single event type. A
 * multi-event type event bus is created by pubSub by collecting
 * several of these.
 *
 * @param {String} eventType
 *    the name of the events managed by this singleEventPubSub
 * @param {singleEventPubSub} [newListener]
 *    place to notify of new listeners
 * @param {singleEventPubSub} [removeListener]
 *    place to notify of when listeners are removed
 */
function singleEventPubSub(eventType, newListener, removeListener){

    /** we are optimised for emitting events over firing them.
     *  As well as the tuple list which stores event ids and
     *  listeners there is a list with just the listeners which
     *  can be iterated more quickly when we are emitting
     */
    var listenerTupleList,
        listenerList;

    function hasId(id){
        return function(tuple) {
            return tuple.id == id;
        };
    }

    return {

        /**
         * @param {Function} listener
         * @param {*} listenerId
         *    an id that this listener can later by removed by.
         *    Can be of any type, to be compared to other ids using ==
         */
        on:function( listener, listenerId ) {

            var tuple = {
                listener: listener
                ,  id:       listenerId || listener // when no id is given use the
                // listener function as the id
            };

            if( newListener ) {
                newListener.emit(eventType, listener, tuple.id);
            }

            listenerTupleList = cons( tuple,    listenerTupleList );
            listenerList      = cons( listener, listenerList      );

            return this; // chaining
        },

        emit:function () {
            applyEach( listenerList, arguments );
        },

        un: function( listenerId ) {

            var removed;

            listenerTupleList = without(
                listenerTupleList,
                hasId(listenerId),
                function(tuple){
                    removed = tuple;
                }
            );

            if( removed ) {
                listenerList = without( listenerList, function(listener){
                    return listener == removed.listener;
                });

                if( removeListener ) {
                    removeListener.emit(eventType, removed.listener, removed.id);
                }
            }
        },

        listeners: function(){
            // differs from Node EventEmitter: returns list, not array
            return listenerList;
        },

        hasListener: function(listenerId){
            var test = listenerId? hasId(listenerId) : always;

            return defined(first( test, listenerTupleList));
        }
    };
}
/**
 * pubSub is a curried interface for listening to and emitting
 * events.
 *
 * If we get a bus:
 *
 *    var bus = pubSub();
 *
 * We can listen to event 'foo' like:
 *
 *    bus('foo').on(myCallback)
 *
 * And emit event foo like:
 *
 *    bus('foo').emit()
 *
 * or, with a parameter:
 *
 *    bus('foo').emit('bar')
 *
 * All functions can be cached and don't need to be
 * bound. Ie:
 *
 *    var fooEmitter = bus('foo').emit
 *    fooEmitter('bar');  // emit an event
 *    fooEmitter('baz');  // emit another
 *
 * There's also an uncurried[1] shortcut for .emit and .on:
 *
 *    bus.on('foo', callback)
 *    bus.emit('foo', 'bar')
 *
 * [1]: http://zvon.org/other/haskell/Outputprelude/uncurry_f.html
 */
function pubSub(){

    var singles = {},
        newListener = newSingle('newListener'),
        removeListener = newSingle('removeListener');

    function newSingle(eventName) {
        return singles[eventName] = singleEventPubSub(
            eventName,
            newListener,
            removeListener
        );
    }

    /** pubSub instances are functions */
    function pubSubInstance( eventName ){

        return singles[eventName] || newSingle( eventName );
    }

    // add convenience EventEmitter-style uncurried form of 'emit' and 'on'
    ['emit', 'on', 'un'].forEach(function(methodName){

        pubSubInstance[methodName] = varArgs(function(eventName, parameters){
            apply( parameters, pubSubInstance( eventName )[methodName]);
        });
    });

    return pubSubInstance;
}
var scenarios = (function () {

   return {

      "blank": {
         options:{
            "startSimulation": function (modelItems) {
               // this is optional and can removed if there is an item called 'client'
            }
         },
         items:[

         ]
      },
      
      "2-node-layout": {
         "items": [
            {
               "name": "sever",
               "type": "originServer",
               "options": {
                  "timeBetweenPackets": 0,
                  "messageSize": 10,
                  "label":"Server"
               },
               locations:{where:{x:65,y:70}}
            },
            {
               "name": "internet",
               "type": "wire",
               "options": {
                  "bandwidth": 100,
                  "latency": 1500
               }
            },
            {
               "name": "client",
               "type": "client",
               "options":{
                  label:"Client"
               },
               locations:{where:{x:415,y:130}}
            }
         ]
      },

      "fast-ajax-discrete": {
         "baseOn": "2-node-layout",
         "narrative": [
            {
               "type": "narrativeItem",
               "script": [
                  {  eventName: "client_requestAttempt_0",
                     delay: seconds(0.35)
                  }
               ],
               "relationships": {
                  "topic": "client"
               },
               "options": {
                  "text": "Our client makes a GET request for a page-worth of data",
                  "locationOnTopic": "upstream"
               }
            },
            {
               "type": "narrativeItem",
               "script": [
                  {  eventName: "client_accepted_response5"
                  }
               ],
               "relationships": {
                  "topic": "client"
               },
               "options": {
                  "text": "Without streaming nothing is shown until everything is downloaded",
                  "locationOnTopic": "where"
               }
            }            
         ],
         "extensions": {
            "items": [
               ,
               ,
               {
                  options: {
                     parseStrategy: "discrete"
                  }
               }
            ]
         }
      },
      
      "fast-ajax-progressive": {
         "baseOn": "2-node-layout",
         "narrative": [
            {
               "type": "narrativeItem",
               "script": [
                  {  eventName: "client_accepted_response0"
                  }
               ],
               "relationships": {
                  "topic": "client"
               },
               "options": {
                  "text": "Because it uses a streaming parser the webapp can render progressively",
                  "locationOnTopic": "where"
               }
            }
         ],         
         "extensions": {
            "items": [
               ,
               ,
               {
                  options: {
                     parseStrategy: "progressive"
                  }
               }
            ]
         }
      },

      "streaming-ajax-progressive": {
         baseOn: "fast-ajax-progressive",
         extensions:{
            items: [
               {
                  "options": {
                     "timeBetweenPackets": inconsistentlyTimed
                  }
               }
            ]
         }
      },

      "mobile-layout": {
         "items": [
            {
               "name": "sever",
               "type": "originServer",
               "options": {
                  "timeBetweenPackets": 0,
                  "packetMode": "historic"
               },
               locations: {
                  where: {y: 93}
               }
            },
            {
               "name": "internet-wire",
               "type": "wire",
               "options": {
                  "bandwidth": 50,
                  "latency": 800
               }
            },
            {
               "name": "tower",
               "type": "relay"
            },
            {
               "name": "internet-gsm",
               "type": "wire",
               "options": {
                  "medium": "mobile",
                  "bandwidth": fastAndSlow,
                  "latency": 800
               }
            },
            {
               "name": "client",
               "type": "client",
               "options": {
                  "page": "map",
                  "deviceType": "mobile",
                  "zoom":1.25
               },
               locations:{
                  where: {x:415, y:135}
               },
               "next": []
            }
         ]
      },

      "mobile-discrete": {
         "baseOn": "mobile-layout",
         "extensions": {
            "items": [
               ,
               ,
               ,
               ,
               {
                  "options": {
                     "parseStrategy": "discrete"
                  }
               }
            ]
         },
         "narrative": [
            {
               "type": "narrativeItem",
               "script": [
                  {  eventName: "tower_accepted_response9",
                     delay: seconds(0.2)
                  }
               ],
               "relationships": {
                  "topic": "tower"
               },
               "options": {
                  "text": "On mobile networks the traffic often arrives in bursts.",
                  "locationOnTopic": "upstream"
               }
            },
            {
               "type": "narrativeItem",
               "script": [
                  {  eventName: "client_accepted_response6",
                     delay: seconds(0.2)
                  }
               ],
               "relationships": {
                  "topic": "client"
               },
               "options": {
                  "text": "By now the webapp has already received most of the data but " +
                     "the user won't be shown anything until the last bit arrives..."
               }
            },
            {
               "type": "narrativeItem",
               "script": [
                  {  eventName: "client_accepted_response9",
                     delay: seconds(0.5)
                  }
               ],
               "relationships": {
                  "topic": "client"
               },
               "options": {
                  "text": "The user didn't see anything until all the data was downloaded."
               }
            }            
         ]
      },

      "mobile-progressive": {
         "baseOn": "mobile-layout",
         "extensions": {
            "items": [
               ,
               ,
               ,
               ,
               {
                  "options": {
                     "parseStrategy": "progressive"
                  }
               }
            ]
         },
         "narrative": [
            {
               "type": "narrativeItem",
               "script": [
                  {  eventName: "client_accepted_response2",
                     delay: seconds(0.2)
                  }
               ],
               "relationships": {
                  "topic": "client"
               },
               "options": {
                  "text": "The client has only downloaded some of the JSON but we're displaying " +
                     "useful content."
               }
            },
            {
               "type": "narrativeItem",
               "script": [
                  {  eventName: "client_accepted_response9",
                     delay: seconds(0.5)
                  }
               ],
               "relationships": {
                  "topic": "client"
               },
               "options": {
                  "text": "The time taken to display the" +
                     " data completely is the same but the display started" +
                     " much earlier."
               }
            }            
         ]
      },

      "mobile-fail": {
         "baseOn": "mobile-layout",
         "extensions": {
            "items": [
               ,
               ,
               {
                  "locations": {
                     "where": {x: 190, y: 80}
                  }
               }
               ,
               {
                  "relationships": {
                     "blockedBy": "tunnel"
                  }
               }
               ,
               {   "options": {
                  "failAfter": seconds(4),
                  "retryAfter": seconds(2)
               }
               }
               ,
               {
                  "name": "tunnel",
                  "type": "barrier",
                  options:{
                     startHidden: true
                  },
                  "script": [
                     {  
                        eventName: "client_accepted_response6",
                        action: function () {
                           this.activateIfNeverShownBefore();
                        }
                     },
                     {  
                        eventName: "client_requestAttempt_1",
                        delay: seconds(2),
                        action: function () {
                           this.deactivate();
                        }
                     }
                  ]
               }
            ]
         }
      },

      "mobile-fail-discrete": {
         "baseOn": "mobile-fail",
         "extensions": {
            "items": [
               ,
               ,
               ,
               ,
               {
                  "options": {
                     "parseStrategy": "discrete"
                  }
               }
            ]
         },
         "narrative": [
            {
               "type": "narrativeItem",
               "script": [
                  {  eventName: "tunnel_activated"
                  }
               ],
               "relationships": {
                  "topic": "client"
               },
               "options": {
                  "text": "At this point the phone loses sight of the tower and the connection goes down."
               }
            },
            {
               "type": "narrativeItem",
               "script": [
                  {  eventName: "client_requestFail_1"
                  }
               ],
               "relationships": {
                  "topic": "client"
               },
               "options": {
                  "text": "When the request times out the data received so far is discarded."
               }
            },            
            {
               "type": "narrativeItem",
               "script": [
                  {  eventName: "tunnel_deactivated"
                  }
               ],
               "relationships": {
                  "topic": "client"
               },
               "options": {
                  "text": "Some time later the signal returns."
               }
            }
         ]
      },

      "mobile-fail-progressive": {
         "baseOn": "mobile-fail",
         "extensions": {
            "items": [
               ,
               ,
               ,
               ,
               {
                  "options": {
                     "parseStrategy": "progressive"
                  }
               }
            ]
         },
         "narrative": [
            {
               "type": "narrativeItem",
               "script": [
                  {  eventName: "tunnel_activated"
                  }
               ],
               "relationships": {
                  "topic": "client"
               },
               "options": {
                  "text": "When the connection goes down the user can already see most of the data."
               }
            },            
            {
               "type": "narrativeItem",
               "script": [
                  {  eventName: "client_requestAttempt_2",
                     delay: seconds(0.2)
                  }
               ],
               "relationships": {
                  "topic": "client"
               },
               "options": {
                  "text": "Now that signal has returned the client is smart enough to only re-request" +
                     " the data that it missed the first time."
               }
            }
         ]
      },

      "aggregated-layout": {
         "options": {
            "height": 257,
            "colors": "twoSeries"
         },
         "items": [
            {
               "name": "origin-slow",
               "type": "originServer",
               "options": {
                  "timeBetweenPackets": 2000,
                  "messageSize": 9,
                  "packetSequence": evenNumberedPackets,
                  label: 'Origin 1'
               },
               "locations": { "where": {x: 60, y:50} }
            },
            {
               "name": "origin-slow-wire",
               "type": "wire",
               "next": ["aggregator"],
               "options": {
                  "latency": 1200
               }
            },
            {
               "name": "origin-fast",
               "type": "originServer",
               "options": {
                  "timeBetweenPackets": 750,
                  "initialDelay": 250,
                  "packetSequence": oddNumberedPackets,
                  label: 'Origin 2'
               },
               "locations": { "where": {x: 120, y: 160} }
            },
            {
               "name": "origin-fast-wire",
               "type": "wire",
               "options": {
                  "latency": 800
               }
            },
            {
               "name": "aggregator",
               "type": "aggregatingServer",
               "options": {
                  "timeBetweenPackets": 0,
                  "messageSize": Number.POSITIVE_INFINITY,
                  label: 'Aggregator'
               },
               "locations": { "where": {x: 265, y: 115} }
            },
            {
               "name": "client-internet",
               "type": "wire",
               "options": {
                  "bandwidth": 500,
                  "latency": 1000
               }
            },
            {
               "name": "client",
               "type": "client",
               "options": {
                  "parseStrategy": "progressive",
                  "page": "graph",
                  "aspect": "landscape",
                  "showProgress": false
               },
               "locations": { "where": {x: 420, y: 115} }
            }
         ]
      },

      "aggregated-discrete": {

         "baseOn": "aggregated-layout",
         "extensions": {
            "items": [
               ,
               ,
               ,
               ,
               {
                  "options": {
                     "parseStrategy": "discrete"
                  }
               }
               ,
               ,
               {
                  "options": {
                     "parseStrategy": "discrete"
                  }
               }
            ]
         }
      },

      "aggregated-progressive": {

         "baseOn": "aggregated-layout",
         "extensions": {
            "items": [
               ,
               ,
               ,
               ,
               {
                  "options": {
                     "parseStrategy": "progressive"
                  }
               }
               ,
               ,
               {
                  "options": {
                     "parseStrategy": "progressive"
                  }
               }
            ]
         }
      },

      
      
      "big-small": {
         options:{
            "startSimulation": function (modelItems) {
               this.schedule(function(){
                  modelItems.client1.makeRequest();
               }, 250);
               this.schedule(function(){
                  modelItems.client2.makeRequest();
               }, 125);
               modelItems.client3.makeRequest();
            },
            endSimulationEvent: 'client2_accepted_response9',
            height:257
         },
         items:[
            
            {  name: 'server',
               type: 'originServer',
               options:{
                  zoom:'0.85'
               },
               next:['wire1', 'wire2', 'wire3'],
               locations:{
                  where:{x:110, y:150}
               }
            },
            {
               "name": "wire1",
               "type": "wire",
               options:{latency:1500}
            },            
            {  name: 'client1',
               type: 'client',
               options:{
                  zoom:'0.85',
                  "page": "map"
               },
               locations:{where:{x: 310, y:40}},
               "next": []
            },
            {
               "name": "wire2",
               "type": "wire",
               options:{latency:1500}
            },            
            {  name: 'client2',
               type: 'client',
               options:{
                  zoom:'0.85',
                  "page": "map",
                  maxRequestSize: 5
               },               
               locations:{where:{x: 320, y:130}},
               "next": [],
               "script": [
                  {  eventName: "client2_accepted_response4",
                     delay: seconds(0.5),
                     action: function () {
                        this.makeRequest();
                     }
                  }
               ]
            },
            {
               "name": "wire3",
               "type": "wire",
               options:{latency:1500}
            },
            {  name: 'client3',
               type: 'client',
               options:{
                  zoom:'0.85',
                  "page": "map",
                  parseStrategy: 'progressive'
               },               
               locations:{where:{x: 300, y:220}},
               "next": []
            }
         ]
      },
      
      
      
      "historic-and-live": {
         "narrative": [
            {
               "type": "narrativeItem",
               "script": [
                  {  eventName: "server_sent_response6",
                     delay: seconds(0.15)
                  }
               ],
               "relationships": {
                  "topic": "server"
               },
               "options": {
                  "text": "Now the historic messages have been sent the server " +
                     "keeps the connection open, writing out " +
                     "new messages as they happen."
               }
            },
            {
               "type": "narrativeItem",
               "script": [
                  {  eventName: "client_accepted_response6",
                     delay: seconds(0.2)
                  }
               ],
               "relationships": {
                  "topic": "client"
               },
               "options": {
                  "text": "The client handles live messages the same as historic, displaying them as HTML."
               }
            }
         ],         
         "items": [
            {
               "name": "server",
               "type": "originServer",
               "options": {
                  "timeBetweenPackets": fastTimingThenStream,
                  "packetMode": historicPacketsThenLive,
                  "messageSize": Number.POSITIVE_INFINITY,
                  "label":"Message server"
               },
               locations:{where:{x:95,y:70}}
            },
            {
               "name": "internet",
               "type": "wire",
               "options": {
                  "latency": 1000
               }
            },
            {
               "name": "client",
               "type": "client",
               "options": {
                  "parseStrategy": "progressive",
                  "page": "twitter",
                  "showProgress": false
               },
               locations:{where:{x:400,y:130}}
            }
         ]
      },

      "caching": {
         "options": {
            "height": 257,
            "startSimulation": function (modelItems) {
               modelItems.client1.makeRequest();
            },
            "colors": "political",
            endSimulationEvent:'client3_acceptedAll'
         },
         "narrative": [
            {
               "type": "narrativeItem",
               "script": [
                  {  eventName: "cache_requestOff_cache-to-client1"
                  }
               ],
               "relationships": {
                  "topic": "cache"
               },
               "options": {
                  "text": "This is the first client to request election results" +
                     " so it is a cache miss. The cache propagates the request" +
                     " as per usual."
               }
            },
            {
               "type": "narrativeItem",
               "script": [
                  {  eventName: "server_gotRequest",
                     delay: seconds(0.1)
                  }
               ],
               "relationships": {
                  "topic": "server"
               },
               "options": {
                  "text": "As usual, the results server doesn't care that it is " +
                     "talking to a cache. It proceeds to serve the results as they " +
                     "are announced."
               }
            },            
            {
               "type": "narrativeItem",
               "script": [
                  {  eventName: "client2_requestAttempt_0",
                     delay: seconds(0.18)
                  }
               ],
               "relationships": {
                  "topic": "client2"
               },
               "options": {
                  "text":"A second client comes" +
                     " online and requests the results."
               }
            },
            {
               "type": "narrativeItem",
               "script": [
                  {  eventName: "cache_requestOff_cache-to-client2"
                  }
               ],
               "relationships": {
                  "topic": "cache"
               },
               "options": {
                  "text": "The http cache already has a connection " +
                     "to the server for this URL and is partially " +
                     "populated. It doesn't need to hit the server again " +
                     "and can send what it has already."
               }
            },
            {
               "type": "narrativeItem",
               "script": [
                  {  eventName: "cache_accepted_response19"
                  ,  delay: 0.2
                  }
               ],
               "relationships": {
                  "topic": "cache"
               },
               "options": {
                  "text": "As streaming data arrives the cache treats it " +
                     "like normal traffic by propagating to all requesters."
               }
            },            
            {
               "type": "narrativeItem",
               "script": [
                  {  eventName: "server_sent_response50",
                     delay: seconds(0.1)
                  }
               ],
               "relationships": {
                  "topic": "server"
               },
               "options": {
                  "text": "The server sends the last result and" +
                     " closes the JSON normally. The content ultimately " +
                     " forms a valid JSON document."
               }
            },
            {
               "type": "narrativeItem",
               "script": [
                  {  eventName: "client3_requestAttempt_0",
                     delay: seconds(0.3)
                  }
               ],
               "relationships": {
                  "topic": "client3"
               },
               "options": {
                  "text": "Now a third client comes online after all the " +
                     "results have been announced.",
                  "locationOnTopic": "upstream"
               }
            },
            {
               "type": "narrativeItem",
               "script": [
                  {  eventName: "cache_requestOff_cache-to-client3"
                  }
               ],
               "relationships": {
                  "topic": "cache"
               },
               "options": {
                  "text": "This request can be served from cache. At this" +
                     " time it is essentially a static resource."
               }
            }
         ],
         "items": [
            {
               "name": "server",
               "type": "originServer",
               "locations": {where: {x:60, y: 100}},
               options: {
                  "payloads": '2012UsElection',
                  "timeBetweenPackets": inconsistentlyTimed,
                  "packetMode": 'live',
                  "label":"Results Server"
               }
            },
            {
               "name": "server-to-cache-wire",
               "type": "wire",
               "options": {
                  "latency": 400,
                  "bandwidth": 100
               }
            },
            {
               "name": "cache",
               "type": "cache",
               "locations": {where: {x: 180, y: 55}},
               "next": ["cache-to-client1", "cache-to-client2", "cache-to-client3"],
               options: {
                  label: 'HTTP cache'
               }
            },

            {
               "name": "cache-to-client1",
               "type": "wire",
               "options": {
                  latency: 800,
                  "bandwidth": 100
               }
            },
            {
               "name": "client1",
               "type": "client",
               "options": {
                  "parseStrategy": "progressive",
                  "page": "cartogram",
                  "aspect": "landscape",
                  zoom:1.5
               },
               "locations": { "where": {x: 375, y: 185} },
               "next": []
            }
            ,


            {
               "name": "cache-to-client2",
               "type": "wire",
               "options": {
                  latency: 600,
                  "bandwidth": 20,
                  startHidden:true
               }
            },
            {
               "name": "client2",
               "type": "client",
               "options": {
                  "parseStrategy": "progressive",
                  "page": "cartogram",
                  "aspect": "landscape",
                  startHidden:true,
                  zoom:1.15
               },
               "locations": { "where": {x: 430, y: 60} },               
               "script": [
                  {  eventName: "client1_accepted_response12",
                     delay: seconds(0.5),
                     action: function () {
                        this.activate();
                        this.adjacents.upstream.forEach(function(adj){
                           adj.activate();
                        });
                     }
                  },
                  {  eventName: "client1_accepted_response12",
                     delay: seconds(1),
                     action: function () {
                        this.makeRequest();
                     }
                  }                  
               ],
               "next": []
            }

            ,
            {
               "name": "cache-to-client3",
               "type": "wire",
               "options": {
                  latency: 800,
                  "bandwidth": 20,
                  startHidden:true
               }
            },
            {
               "name": "client3",
               "type": "client",
               "options": {
                  "parseStrategy": "progressive",
                  "page": "cartogram",
                  "aspect": "landscape",
                  startHidden:true,
                  zoom:1.15
               },
               "locations": { "where": {x: 235, y: 205} },
               "script": [
                  {  eventName: "client1_accepted_response50",
                     delay: seconds(0.5),
                     action: function () {
                        this.activate();
                        this.adjacents.upstream.forEach(function(adj){
                           adj.activate();
                        });
                     }
                  },
                  {  eventName: "client1_accepted_response50",
                     delay: seconds(2),
                     action: function () {
                        this.makeRequest();
                     }
                  }                  
               ]
            }
         ]
      }
   };

   function fastAndSlow(i) {

      switch (i) {
         case 0:
         case 1:
         case 5:
         case 6:
            return 75; // fast    
      }
      return 600; //slow
   }

   function inconsistentlyTimed() {
      return randomBetween(75, 1500);
   }

   function randomBetween(min, max) {
      var range = (max - min);
      return min + (Math.random() * range);
   }

   function fastTimingThenStream(i) {

      return (i < 6 ? 100 : randomBetween(750, 2500));
   }

   function historicPacketsThenLive(i) {
      return (i < 6 ? 'historic' : 'live');
   }

   function evenNumberedPackets(i) {
      return (i === -1) ?
         0 : i += 2;
   }

   function oddNumberedPackets(i) {
      return (i === -1) ?
         1 : i += 2;
   }

   function seconds(s) {
      return 1000 * s;
   }

})();   

var getScenario = (function () {

    var DEFAULTS = {
        demo: {
            options: {
                colors: 'categorical',
                width: 500,
                height: 200,
                startSimulation: function(modelItems){
                    modelItems.client.makeRequest();
                },
                endSimulationEvent:'client_acceptedAll'
            }
        },
        wire: {
            options:{
                bandwidth: 0, // by default, can accept packets as quickly as received
                latency: 1000,
                medium: 'cable'
            },
            locations: {}
        },
    
        relay: {
            options:{
                "timeBetweenPackets": 500,
                zoom: 1
            },
            locations:{
                where: {x: 235, y: 90}
            }
        },

        cache: {
            options:{
                "timeBetweenPackets": 500,
                zoom:1
            },
            locations:{
                where: {x: 235, y: 90}
            }
        },        
        
        client: {
            options:{
                retryAfter: Number.POSITIVE_INFINITY,
                failAfter: Number.POSITIVE_INFINITY,
                aspect: 'portrait',
                "page": "singlePageSite",
                "deviceType":"desktop",
                "showProgress":true,
                parseStrategy: 'discrete',
                zoom: 1
            },
            locations:{
                where: {x: 430, y: 145}
            }
        },
        
        barrier: {
            locations:{
                where: {x: 410, y: 145}
            }
        },
        
        originServer: {
            options:{
                packetSequence: function(previousPacketNumber){
                    return previousPacketNumber+1;
                },
                "timeBetweenPackets": 500,
                "initialDelay": 500,
                "messageSize": 10,
                packetMode:'live',
                zoom: 1
            },
            locations:{
                where: {x: 40, y: 55}
            }
        },

        narrativeItem: {
            script:[
               {  delay:0,
                  action:function () {
                     this.popUp();
                  }
               }
            ],
            options:{
                locationOnTopic:'where'
            }
        }       
       
    };
    
    function setRelativePositions(item) {
        var locations = item.locations;
        var baseXy = locations.where;
        var zoom = (item.options && item.options.zoom) || 1;
        
        switch (item.type) {
            case 'relay':
                locations.upstream   = translate(baseXy, {x:0, y:40});
                break;
            case 'client':
                switch( item.options.deviceType ){
                    case 'mobile':
                        locations.upstream   = translate(baseXy, {x:zoom*30, y:zoom*-53});
                        break;
                    case 'desktop':
                    default:
                        locations.upstream   = translate(baseXy, {x:-18, y:0});
                }
        }
    }
    
    function translate( xy, xyDelta ) {
        return {
            x: xy.x + xyDelta.x,
            y: xy.y + xyDelta.y
        };
    }

    function deepCopy(obj){
        return jQuery.extend(true, {}, obj);
    }

    function fillInDefaults(obj, defaults) {
        return superimpose(obj, defaults, false);        
    }

    function extend(obj, extension) {
        return superimpose(obj, extension, true);
    }
    
    function superimpose(to, from, overwrite) {
        
        if( !to ) {
            to = {};
        }
        
        for( var k in from ) {
            
            if( from[k] instanceof Function ) {
                
                // functions - copy directly
                if( overwrite || (to[k] === undefined) )
                    to[k] = from[k];
            }
            else if( from[k] instanceof Object ) {
                
                // objects, arrays - recursive case
                if( !to[k] ) {
                    to[k] = new (from[k].constructor);
                }
                
                superimpose(to[k], from[k], overwrite);
            } else {
                
                // strings, numbers etc
                if( overwrite || (to[k] === undefined) )
                    to[k] = from[k];
            }
        }
        return to;
    }
    
    function fillInTemplate(template, extensions) {
        var copy = deepCopy(template),
            extendedCopy = extend(copy, extensions);
        
        return extendedCopy;
    }
    
    function fillInFromBaseScenario( name ){
        var rawJson = scenarios[name],
            baseName = rawJson.baseOn;

        if(baseName) {
            var extended = fillInTemplate( fillInFromBaseScenario(baseName), rawJson.extensions);
            
            // narratives are never inherited:
            extended.narrative = rawJson.narrative;
            
            return extended;
        } else {
            return rawJson;
        }
    }
    
    function fillInScenarioDescription(name) {
        
        var rawJson = fillInFromBaseScenario(name);
        
        fillInDefaults(rawJson, DEFAULTS.demo);

        var itemsByName = {};
                
        rawJson.name = name;
        
        rawJson.items.forEach(function (item, i, items) {
            itemsByName[item.name] = item;
        });

        rawJson.items.forEach(function (rawItem, i, items) {
            // fill in next property if not explicitly given:
            if( ! rawItem.next ) {
                rawItem.next 
                    = (i < items.length-1)
                    ? [items[i + 1].name]
                    : [];
            }

            if( DEFAULTS[rawItem.type] ) {
                fillInDefaults(rawItem, DEFAULTS[rawItem.type]);
            }
            
            setRelativePositions(rawItem);
        });

        (rawJson.narrative||[]).forEach(function (rawItem) {
            fillInDefaults(rawItem, DEFAULTS[rawItem.type]);
        });

        return rawJson;
    }

    return function (name) {
        return scenarios[name] && fillInScenarioDescription( name );
    }    

})();   

function extend(Sup, Sub) {
    Sub.prototype = Object.create(Sup.prototype);
    Sub.prototype.constructor = Sub;
    return Sub;
}
function abstract(){
    throw new Error('don\'t call me, I\'m abstract');
}

var dataSets = {
    
    // order from: 
    //      http://www.theguardian.com/news/datablog/2012/nov/06/time-states-election-results-us#data
    "2012UsElection":[
        {"state": "in", "wonBy": "rep", "votes": 11},
        {"state": "ky", "wonBy": "rep", "votes": 8},
        {"state": "fl", "wonBy": "dem", "votes": 29},
        {"state": "ga", "wonBy": "rep", "votes": 16},
        {"state": "nh", "wonBy": "dem", "votes": 4},
        {"state": "sc", "wonBy": "rep", "votes": 9},
        {"state": "vt", "wonBy": "dem", "votes": 3},
        {"state": "va", "wonBy": "dem", "votes": 13},
        {"state": "nc", "wonBy": "rep", "votes": 15},
        {"state": "oh", "wonBy": "dem", "votes": 18},
        {"state": "wv", "wonBy": "rep", "votes": 5},
        {"state": "al", "wonBy": "rep", "votes": 9},
        {"state": "ct", "wonBy": "dem", "votes": 7},
        {"state": "de", "wonBy": "dem", "votes": 3},
        {"state": "dc", "wonBy": "dem", "votes": 3},
        {"state": "il", "wonBy": "dem", "votes": 20},
        {"state": "ks", "wonBy": "rep", "votes": 6},
        {"state": "me", "wonBy": "dem", "votes": 4},
        {"state": "md", "wonBy": "dem", "votes": 10},
        {"state": "ma", "wonBy": "dem", "votes": 11},
        {"state": "mi", "wonBy": "dem", "votes": 16},
        {"state": "ms", "wonBy": "rep", "votes": 6},
        {"state": "mo", "wonBy": "rep", "votes": 10},
        {"state": "nj", "wonBy": "dem", "votes": 14},
        {"state": "nd", "wonBy": "rep", "votes": 3},
        {"state": "ok", "wonBy": "rep", "votes": 7},
        {"state": "pa", "wonBy": "dem", "votes": 20},
        {"state": "ri", "wonBy": "dem", "votes": 4},
        {"state": "tn", "wonBy": "rep", "votes": 11},
        {"state": "tx", "wonBy": "rep", "votes": 38},
        {"state": "ar", "wonBy": "rep", "votes": 6},
        {"state": "co", "wonBy": "dem", "votes": 9},
        {"state": "la", "wonBy": "rep", "votes": 8},
        {"state": "mn", "wonBy": "dem", "votes": 10},
        {"state": "ne", "wonBy": "rep", "votes": 5},
        {"state": "nm", "wonBy": "dem", "votes": 5},
        {"state": "ny", "wonBy": "dem", "votes": 29},
        {"state": "sd", "wonBy": "rep", "votes": 3},
        {"state": "wi", "wonBy": "dem", "votes": 10},
        {"state": "wy", "wonBy": "rep", "votes": 3},
        {"state": "az", "wonBy": "rep", "votes": 11},
        {"state": "ia", "wonBy": "dem", "votes": 6},
        {"state": "mt", "wonBy": "rep", "votes": 3},
        {"state": "nv", "wonBy": "dem", "votes": 6},
        {"state": "ut", "wonBy": "rep", "votes": 6},
        {"state": "ca", "wonBy": "dem", "votes": 55},
        {"state": "hi", "wonBy": "dem", "votes": 4},
        {"state": "id", "wonBy": "rep", "votes": 4},
        {"state": "or", "wonBy": "dem", "votes": 7},
        {"state": "wa", "wonBy": "dem", "votes": 12},
        {"state": "ak", "wonBy": "rep", "votes": 3}
    ]
};


function announceAll(things){
    things.forEach(function( thing ){
        thing.announce();
    });
}

var Direction = {
    upstream: 'upstream',
    downstream: 'downstream'
}

function oppositeDirectionTo(dir) {
    switch(dir){
        case 'upstream':
            return 'downstream';
        case 'downstream':
            return 'upstream';
    }
    throw new Error('unknown direction' + dir);
}
function sameDirectionAs(dir) {
    return dir;
}

/*  Receive parsed packets from multiple streams, output all according to our parse strategy: either straight
    away or when all parsers have finished.
*/

var multiplex = (function(){

    /* Packets from multiple sources will not have .isFirst and .isLast correctly set
       after multiplexing unless these properties are changed. Do that. 
     */
    function resequence(numberOfResponsesExpected){
        var numberOfResponsesCompleted = 0,
            responsesStarted = false;

        /* Takes packets. Returns packets which are very similar but have had the ordering
         changed, so that their isFirst/isLast is set to be correct post-multiplexing
         (only one first, only one last, even if read from multiple streams where each 
         stream yielded a first and last packet)
         */
        return function(incomingPacket){

            var outgoing = incomingPacket.copy();
            incomingPacket.done();

            if( incomingPacket.ordering.isLast ) {
                numberOfResponsesCompleted++;
            }

            outgoing.ordering.isFirst = !responsesStarted;
            outgoing.ordering.isLast  = ( numberOfResponsesCompleted == numberOfResponsesExpected );

            responsesStarted = true;

            return outgoing;
        }
    }
    
    function multiplexProgressively(parsers, output) {
        for (var i in parsers) {

            parsers[i].events('packetParsed').on(output);
        }
    }

    function multiplexDiscretely(parsers, output) {
        var numberOfCompletedRequired = 0,
            numberCompleted = 0,
            buffer = [];
        
        function outputWhenAllHaveCompleted(packet) {
            if( packet.ordering.isLast ) {
                numberCompleted++;
            }

            buffer.push(packet);            
            
            if( numberCompleted == numberOfCompletedRequired ) {
                buffer.forEach(function(packet){
                    output(packet);
                });
            }
        }
        
        for (var i in parsers) {
            numberOfCompletedRequired++;
            
            parsers[i].events('packetParsed').on(outputWhenAllHaveCompleted);
        }
    }

    return function( strategyName, parsers, output ){
        var numberOfResponsesExpected = Object.keys(parsers).length,
            reseq = resequence(numberOfResponsesExpected);
        
        function renumberedOutput(packet){
            output(reseq(packet));
        }
        
        if( strategyName == 'progressive' ) {
            multiplexProgressively(parsers, renumberedOutput);
        } else {
            multiplexDiscretely(parsers, renumberedOutput);
        }
    };
    
}());

function throttle(timeBetweenPackets, send, scheduler){
    
    if( !timeBetweenPackets ) {
        throw new Error('no timing given');
    }
    
    var buffer = [];
    
    function read(receivedPacket){

        buffer.push(receivedPacket);

        if( receivedPacket.ordering.isFirst ) {
            slot(0);
        }
    }

    function slot(i) {

        var frontOfQueuePacket = buffer.shift();

        if( frontOfQueuePacket ) {
            send.call(scheduler, frontOfQueuePacket);
        }

        if( !(frontOfQueuePacket && frontOfQueuePacket.ordering.isLast) ) {
            var nextSlotIn = timeBetweenPackets(i);

            scheduler.schedule(
                function(){
                    slot(i+1);
                },
                nextSlotIn
            );
        }
    }
    
    function reset() {
        buffer = [];
    }
    
    return {
        read: read,
        reset: reset
    }
}

var Scheduler = (function(){
    "use strict";

    var DEFAULT_SCHEDULE_DELAY = 500;

    function Scheduler(subject, pauseEventSource) {
        this.tasks = [];
        this.subject = subject;

        pauseEventSource('paused').on(this._pause.bind(this));
        pauseEventSource('unpaused').on(this._unpause.bind(this));
    }

    Scheduler.prototype._pause = function(){
        this.tasks.forEach(this._pauseTask);
    };
    
    Scheduler.prototype._unpause = function(){
      
        this.tasks.forEach(this._scheduleTask);
    };
        
    Scheduler.prototype._removeTask = function(taskToRemove){

        this.tasks = this.tasks.filter(function( storedTimeout ){
            return storedTimeout !== taskToRemove;
        });
    };
    
    Scheduler.prototype.cancelTimeouts = function(){
    
        // cancel all scheduled events:
        this.tasks.forEach(function(task){
            window.clearTimeout(task.timeout);
        });
    
        this.tasks = [];
    };
    
    Scheduler.prototype.schedule = function(fn, requestedTiming, startPaused) {

        if( requestedTiming == Number.POSITIVE_INFINITY ) {
            // Waiting forever to do something is interpreted
            // as never doing it. The browser would natural
            // schedule it straight away (silly!)
            return undefined;
        }

        var wait = (requestedTiming === undefined)
                    ? DEFAULT_SCHEDULE_DELAY
                    : requestedTiming,
           
            performTask = function(){
                // stop remembering this timeout, it is done now:
                this._removeTask(task);
                fn();
            }.bind(this),

            task = {
                performTask: performTask,
                wait: wait
            };

        if( !startPaused ) {
            this._scheduleTask(task);
        }
        
        this.tasks.push( task );
    
        return task;
    };

    Scheduler.prototype._pauseTask = function(task){

        window.clearTimeout(task.timeout);
        task.timeout = undefined;
        task.wait = task.performTime - Date.now();
    };
    
    Scheduler.prototype._scheduleTask = function(task){
        if( task.timeout ) {
           throw Error('task already scheduled');
        }
       
        task.timeout = window.setTimeout(task.performTask, task.wait);
        task.performTime = Date.now() + task.wait;
        return task;
    };
    
    Scheduler.prototype.unschedule = function(unscheduledTask) {
        
        if( unscheduledTask ) {
            window.clearTimeout(unscheduledTask.timeout);
            unscheduledTask.timeout = undefined;           
            this._removeTask(unscheduledTask);
        }
    };

    return Scheduler;
})();

var Thing = (function(){
    "use strict";
        
    function Thing(name, locations, options){
    
        this.name = name;
        this.events = pubSub();
        this.locations = locations || {};

        this.scheduler = new Scheduler(this, this.events);

        if (options) {
           this.label = options.label;
           this.startHidden = options.startHidden;
           this.zoom = options.zoom;
        }
        
        this.events('reset').on(function(){
            this.scheduler.cancelTimeouts();
        }.bind(this));
    }

    Thing.newEvent = 'Thing';
    
    Thing.prototype.with = {};
       
    Thing.prototype.inDemo = function(demo){
       
        this.demo = demo;
        
        var thisEvents = this.events,
            demoEvents = demo.events;

        demoEvents('reset').on(     thisEvents('reset').emit    );
        demoEvents('paused').on(    thisEvents('paused').emit   );
        demoEvents('unpaused').on(  thisEvents('unpaused').emit );

        return this; // chaining
    };

    /** for short-lived Things. Unregister listeners */
    Thing.prototype.done = function(){
       
       this.events('done').emit();
       
       var thisEvents = this.events,
           demoEvents = this.demo.events;
       
       // unsubscribe from events on the demo
       demoEvents('reset').un(     thisEvents('reset').emit    );
       demoEvents('paused').un(    thisEvents('paused').emit   );
       demoEvents('unpaused').un(  thisEvents('unpaused').emit );

       return this; // chaining       
    };
    
    Thing.prototype.followingScript = function(scriptItems){

        var self = this,
            script = this.demo.script;

        scriptItems.forEach(function(scriptItem){

            var action = scriptItem.action,
                wrappedAction =
                    scriptItem.delay
                    ?   function(){
                            self.schedule(action, scriptItem.delay);
                        }
                    :   action.bind(self);
            
            script(scriptItem.eventName).on(wrappedAction);
        });
        
        return this; // chaining
    };
    
    Thing.prototype.announce = function() {

        if( !this.constructor.newEvent ) {
            throw new Error('cannot announce type without .newEvent set');
        }
        
        this.demo.events(this.constructor.newEvent).emit(this);
        return this;
    };
    
    function scriptName( firstParty, action, secondParty ) {
        
        function name(thing){
            return (thing && (thing.name || thing.toString()));
        }
        
        return [firstParty, action, secondParty]
            .map(name)
            .filter(function(a){return a !== undefined})
            .join('_');
    }
    
    Thing.prototype.addToScript = function(verb, secondParty) {

       var scriptEventName = scriptName(this, verb, secondParty);
           
       this.demo
            .script(scriptEventName)
            .emit();
    };
    
    Thing.prototype.cancelTimeouts = function(){
        return this.scheduler.cancelTimeouts();
    };
    
    Thing.prototype.schedule = function(fn, requestedTiming) {
        return this.scheduler.schedule(fn.bind(this), requestedTiming, this.demo.paused);
    };
    
    Thing.prototype.unschedule = function(unscheduledTimeout) {
        return this.scheduler.unschedule(unscheduledTimeout);
    };
    
    Thing.asFunction = function (givenValue, defaultValue) {

        if (typeof givenValue == 'function') {
            return givenValue;
        }

        var constantValue = ( givenValue !== undefined )? givenValue : defaultValue;

        return function(){return constantValue};
    };

    Thing.prototype.activate = function(){
       this.addToScript('activated');
       this.events('activated').emit();
    };

    Thing.prototype.deactivate = function(){
       this.addToScript('deactivated');
       this.events('deactivated').emit();
    };

    return Thing;
}());

var NarrativeItem = (function(){
    
    var NarrativeItem = extend(Thing, function NarrativeItem(scriptEventName, _locations, options){
        Thing.apply(this, arguments);
        
        this.text = options.text;
        this.locationOnTopic = options.locationOnTopic;
    });
    
    NarrativeItem.prototype.with = {
        topic: function( topicItem ){
            this.topic = topicItem;
        }
    };    
    
    NarrativeItem.newEvent = 'NarrativeItem';

    NarrativeItem.prototype.popUp = function(){
        this.demo.pause();
        this.events('activated').emit(this);
    };

    NarrativeItem.prototype.dismiss = function(){
        this.demo.unpause();
        this.events('deactivated').emit(this);
    };
    
    return NarrativeItem;
}());



var Barrier = (function(){
    
    var Barrier = extend(Thing, function Barrier(name, locations){
        Thing.apply(this, arguments);
        
        this.events('reset').on(function(){
            this.hasBeenShown = false;
        }.bind(this));
    });

    Barrier.newEvent = 'Barrier';
    
    
    Barrier.prototype.activateIfNeverShownBefore = function(){
        
        if( !this.hasBeenShown ) {
            this.activate();
        }
        this.hasBeenShown = true;
    };

    return Barrier;
}());

var PacketHolder = (function(){
    "use strict";

    var Super = Thing;

    var PacketHolder = extend(Super, function PacketHolder(name, locations){

        if( !locations ) {
            throw new Error("don't know where " + name + " is");
        }

        Super.apply(this, arguments);

        if( !locations ) {
            throw new Error("don't know where " + name + " is");
        }

        this.latency = 0;
        this.adjacents = {
            downstream: []
        ,   upstream:   []
        };
    });

    PacketHolder.newEvent = 'PacketHolder';

    /* things which want to handle packets arriving can override
       these methods */
    PacketHolder.prototype.accept =
    PacketHolder.prototype.acceptFromDownstream =
    PacketHolder.prototype.acceptFromUpstream = function(){};

    PacketHolder.prototype.withDownstream = function(downstreamLocation){

        this.adjacents.downstream.push(downstreamLocation);
        this.listenToAdjacentForPackets(downstreamLocation, 'downstream');
        downstreamLocation._withUpstream(this);

        return this;
    };

    PacketHolder.prototype._withUpstream = function(upstreamLocation){
        this.adjacents.upstream.push(upstreamLocation);
        this.listenToAdjacentForPackets(upstreamLocation, 'upstream');
    };

    PacketHolder.prototype.listenToAdjacentForPackets = function(adjacent, direction) {
        var directionAtSource = oppositeDirectionTo(direction),

            directionalHandlerMethodName =
                (   direction == 'upstream'
                    ?   'acceptFromUpstream'
                    :   'acceptFromDownstream'
                ),
            directionSpecificHandler = this[directionalHandlerMethodName],

            inputHandler = function( incomingPacket ){

                var packetCopy = incomingPacket.copy().announce();

                directionSpecificHandler.call(this, packetCopy, adjacent);
                this.accept(packetCopy, adjacent);
                this.events('acceptedFrom' + direction).emit(packetCopy);
            }.bind(this),

            throttledInputHandler = this.inputThrottle(inputHandler),

            filteredThrottledInputHandler = function( incomingPacket, intendedRecipients ){
                if( intendedRecipients && (intendedRecipients.indexOf(this) == -1) ) {
                    return; // not for me, do nothing.
                }

                throttledInputHandler(incomingPacket);
            }.bind(this);

        adjacent.events(directionAtSource).on( filteredThrottledInputHandler );
    };

    PacketHolder.prototype.inputThrottle = function(handle) {
        return handle;
    };

    PacketHolder.prototype.propagate = function(basePacket, recipients){

        this.events(basePacket.direction).emit(basePacket, recipients);
        basePacket.done();
    };

    PacketHolder.prototype.movePacket = function(packet){
        var fromLocation = oppositeDirectionTo(packet.direction),
            toLocation = packet.direction,
            fromXY = this.locations[fromLocation],
            toXY   = this.locations[toLocation];

        packet.move(fromXY, toXY, this.latency);
    };

    return PacketHolder;
}());

var Demo = (function(){

   var DELAY_AFTER_FINISH = 4500,
       START_DELAY = 750;
   
   var Demo = extend(Thing, function Demo(name, options){
       Thing.apply(this, arguments);
   
       this.height = options.height;    
       this.width = options.width;    
       this.script = pubSub();
       this.colors = options.colors;
       this.paused = false;
       this.inProgress = false;
       
       if( options.endSimulationEvent ) {
          this.script( options.endSimulationEvent ).on(
             function(){
                 this.schedule(this.reset.bind(this), DELAY_AFTER_FINISH);
             }.bind(this)
          );
       }
       
       this.demo = this;  // we are our own demo
   });
   
   Demo.newEvent = 'Demo';
   
   Demo.prototype.start = function(){
       if( !this.inProgress ) {

           this.inProgress = true;
           this.events('started').emit();

           this.schedule(function(){
               this.startSimulation();
           }.bind(this), START_DELAY)
       }
   };
   Demo.prototype.reset = function(){
       if( this.inProgress ) {
           this.events('reset').emit();
           this.inProgress = false;
           this.paused = false;
       }
   };
   
   Demo.prototype.pause = function(){
       this.paused = true;
       this.events('paused').emit();
   };
   Demo.prototype.unpause = function(){
       if( !this.paused ){
           throw new Error('unpausing but not paused');
       }
      
       this.paused = false;
       this.events('unpaused').emit();
   };
   
   return Demo;

}());   


var ResponseGenerator = (function(){
   
    var ResponseGenerator = extend(Thing, function ResponseGenerator(options) {
        Thing.call(this, 'responseGenerator');

        var packetPayloads = dataSets[options.payloads];
        
        this.timeBetweenPackets = Thing.asFunction(options.timeBetweenPackets);
        this.initialDelay = options.initialDelay;
        this.messageSize = packetPayloads? packetPayloads.length : options.messageSize;
        this.packetNumberAfter = options.packetSequence;
        this.packetMode = Thing.asFunction(options.packetMode);
        this.packetPayloads = packetPayloads;
    });
    
    ResponseGenerator.prototype.packetGenerator = function(lastPacketNumber) {

        var firstPacketCreated = false;

        return function(n) {
            // unannounced packet to use as a template for others
            var ordering = {
                i:       n,
                isFirst: !firstPacketCreated,
                isLast:  n >= (lastPacketNumber)
            };
           
            if( ordering.isFirst && Number.isFinite(this.messageSize) ) {
               ordering.expectedSize = lastPacketNumber +1;
            }
    
            var packet = new Packet(
                'response' + n
                ,   'JSON'
                ,   'downstream'
                ,   ordering
                ,   this.packetMode(n)
            ).inDemo(this.demo);
            
            packet.payload = this.packetPayloads && this.packetPayloads[n];
    
            firstPacketCreated = true;
    
            return packet;
        }.bind(this)
    };
    
    ResponseGenerator.prototype.generateResponse = function(startingAt, endingAt, intendedRecipient) {

        var lastPacketNumber = Math.min(this.messageSize - 1, endingAt),
            packets = this.packetGenerator( lastPacketNumber );
        
        function sendNext(previousPacketNumber){
    
            var curPacketNumber = this.packetNumberAfter(previousPacketNumber),
                lastPacket = curPacketNumber >= lastPacketNumber;
    
            this.events('packetGenerated').emit(packets(curPacketNumber), intendedRecipient);

            if (!lastPacket) {
                var nextPacketNumber = this.packetNumberAfter(curPacketNumber);
                this.schedule(
                    sendNext.bind(this, curPacketNumber, intendedRecipient)
                    , this.timeBetweenPackets(nextPacketNumber)
                );
            }
        }
    
        this.schedule( sendNext.bind(this, startingAt -1), this.initialDelay );
    };
    
    return ResponseGenerator;
}());

var OriginServer = (function(){

    var Super = PacketHolder;

    var OriginServer = extend( Super, function OriginServer(name, locations, options) {

        Super.apply(this, arguments);

        this.responseGenerator = new ResponseGenerator(options);

        this.responseGenerator.events('packetGenerated').on(function(packet, recipient){
           
           this.addToScript('sent', packet);
           this.propagate(packet, [recipient]);
        }.bind(this));
    });

    OriginServer.newEvent = 'OriginServer';

    OriginServer.prototype.acceptFromDownstream = function(packet, source){
       
        this.addToScript('gotRequest');
        this.responseGenerator.generateResponse(
            packet.gotAlreadyUpTo, 
            packet.requestingUpto, 
            source
        );
        packet.done();
    };

    OriginServer.prototype.inDemo = function(demo){
        Super.prototype.inDemo.apply(this, arguments);
        this.responseGenerator.inDemo(demo);
        return this;
    };

    return OriginServer;
}());

var AggregatingServer = (function(){

    var Super = PacketHolder;

    var AggregatingServer = extend(Super, function AggregatingServer(name, locations, options){
        Super.apply(this, arguments);

        this.parseStrategyName = options.parseStrategy;
    });
    AggregatingServer.newEvent = 'AggregatingServer';

    AggregatingServer.prototype.acceptFromDownstream = function(receivedPacket){

        this.propagate(receivedPacket);

        this.setupResponse();
    };

    AggregatingServer.prototype.acceptFromUpstream = function(receivedPacket, sender){
        this.parsers[sender.name].read(receivedPacket);
    };

    AggregatingServer.prototype.setupResponse = function(){

        this.parsers = this.createInputParsersForEachUpstreamNode(this.parseStrategyName);

        multiplex(
            this.parseStrategyName,
            this.parsers,
            this.propagate.bind(this)
        );
    };

    AggregatingServer.prototype.createInputParsersForEachUpstreamNode = function(parseStrategyName){
        var parsers = {},
            nextLocations = this.adjacents['upstream'],
            emitPacketParsed = this.events('packetParsed').emit;

        nextLocations.forEach(function(loc){
            parsers[loc.name] = Parser(parseStrategyName, emitPacketParsed);
        });

        return parsers;
    };

    return AggregatingServer;
}());

var Packet = (function(){ 
   var Super = Thing;
   
   var Packet = extend(Super,
       /**
        * @param name
        * @param type
        * @param direction
        * @param ordering
        * @param mode Number -> ('live'|'historic')
        * @constructor
        */
       function Packet(name, type, direction, ordering, mode){
           Super.apply(this, arguments);
       
           this.direction = direction;
           this.ordering = ordering;
           this.type = type;
           this.mode = mode;
           this.gotAlreadyUpTo = 0;
          
           this.events('reset').on(this.done.bind(this));
       }
   );
   
   Packet.newEvent = 'Packet';
   
   Packet.prototype.copy = function() {
   
       var orderingCopy = {
           i: this.ordering.i,
           isFirst: this.ordering.isFirst,
           isLast: this.ordering.isLast,
           expectedSize: this.ordering.expectedSize
       };
   
       return new Packet(
           this.name,
           this.type,
           this.direction,
           orderingCopy,
           this.mode
       )   
           .inDemo(this.demo)
           .startingAt(this.gotAlreadyUpTo)
           .endingAt(this.requestingUpto)
           .withPayload(this.payload);
   };
   Packet.prototype.replayedCopy = function() {
       var copy = this.copy();
       copy.mode = functor('historic');
       return copy;
   };
   Packet.prototype.startingAt = function( firstPacketNumber ) {
       this.gotAlreadyUpTo = firstPacketNumber;
       return this; // chaining
   };
   Packet.prototype.endingAt = function( lastPacketNumber ) {
      this.requestingUpto = lastPacketNumber;
      return this; // chaining
   };   
   Packet.prototype.withPayload = function( payload ) {
       this.payload = payload;
       return this; // chaining
   };
   Packet.prototype.startsRequest = function() {
      return (this.direction == Direction.upstream) && this.ordering.isFirst;
   };
   Packet.prototype.closesResponse = function() {
      return (this.direction == Direction.downstream) && this.ordering.isLast;
   };
   Packet.prototype.move = function(fromXY, toXY, latency){
       this.events('move').emit(fromXY, toXY, latency);
   };
   Packet.prototype.isOn = function(holder){
       this.events('isOn').emit(holder);
   };

   return Packet;
})();

var Message = extend(Thing, function Message() {
    Thing.apply(this, arguments);

    this.events('reset').on(this.done.bind(this));
});

Message.newEvent = 'Message';

Message.prototype.transmittedOver = function(packetHolder){
    this.holder = packetHolder;
    return this;
};

Message.prototype._withRequestStart = function(firstPacket){

    firstPacket.events('move').on(function(){

        this.events('requestStartMove').emit.apply(this, arguments);
    }.bind(this));
    return this; // chaining
};
Message.prototype._withResponseClose = function(lastPacket){

    lastPacket.events('move').on(function(){

        this.events('responseCloseMove').emit.apply(this, arguments);
    }.bind(this));

    lastPacket.events('done').on(function(){
        this.done();
    }.bind(this));    
    
    return this; // chaining
};
Message.prototype.includes = function(packet) {

    if( packet.startsRequest() ) {
        this._withRequestStart(packet);
    }
    if( packet.closesResponse() ) {
        this._withResponseClose(packet);
    }
    return this; // chaining
};

var Wire = (function(){

    var Super = PacketHolder;
    
    var Wire = extend( Super, function Wire(name, locations, options) {
    
        Super.apply(this, arguments);
        this.latency = options.latency;
        this.bandwidth = Thing.asFunction(options.bandwidth);
        this.medium = options.medium;
        
        if( !options.medium ) {
            throw new Error('no medium for wire ' + name);
        }
        
        this.events('reset').on(function(){
            this.blockage = undefined;
        }.bind(this));
    });
    
    Wire.newEvent = 'Wire';
    
    Wire.prototype.accept = function(packet){
    
        packet.isOn(this);
        
        if( packet.startsRequest() ) {
           
            this.message = new Message()
                            .inDemo(this.demo)
                            .transmittedOver(this)
                            .announce();
        }
        
        this.message.includes(packet);
        
        if( packet.closesResponse() ) {
           
            // end of that message, don't prevent Message
            // from being GC'd anymore:
            this.message = null;
        }
    
        this.events('deliveryStarted').emit(packet);
        this.movePacket(packet);
    
        if( !this.blockage )
            this.propagateAfterLatency(packet);
    };
    
    Wire.prototype.inputThrottle = function(handler){
        var t = throttle( this.bandwidth, handler, this);
        
        this.events('reset').on(t.reset);
        
        return t.read;
    };

    Wire.prototype.withDownstream = function(downstreamLocation){
        Super.prototype.withDownstream.call(this, downstreamLocation);
        
        var downstreamLocations = downstreamLocation.locations;
        this.locations.downstream = downstreamLocations.upstream || downstreamLocations.where; 

        return this; // chaining
    };

    Wire.prototype._withUpstream = function(upstreamLocation){
        Super.prototype._withUpstream.call(this, upstreamLocation);

        var upstreamLocations = upstreamLocation.locations;
        this.locations.upstream = upstreamLocations.downstream || upstreamLocations.where;

        return this; // chaining
    };
    
    Wire.prototype.with = {
        'blockedBy':function( barrier ){
            
            barrier.events('activated').on(function(){
                
                this.blockage = barrier;            
            }.bind(this));
    
            barrier.events('deactivated').on(function(){
    
                this.blockage = null;
            }.bind(this));        
        }
    };
    Wire.prototype.propagateAfterLatency = function(packet){
    
        this.schedule(function(){
    
            if( !this.blockage ) {
                this.propagate(packet);
                this.events('delivered').emit(packet);
            }
    
        }.bind(this), this.latency);
    };
    
    return Wire;    
    
}());

function Parser (strategyName){

    var events = pubSub(),
        read;
    
    switch(strategyName){
        case 'progressive':
            read = function(packet){
                events('packetParsed').emit(packet);
            };
            break;
    
        case 'discrete':
            var packetsSoFar = [];
            read = function(packet){
                packetsSoFar.push(packet);
    
                if( packet.ordering.isLast ) {
                    packetsSoFar.forEach(function(packet){
                        events('packetParsed').emit(packet);
                    });
                }
            };
            break;
    
        default:
            throw Error('wtf is ' + strategyName + '?');
    } 
    
    return {
        read: read,
        events: events
    };
}

var Client = extend( PacketHolder, function Client(name, locations, options) {
    "use strict";

    PacketHolder.apply(this, arguments);
    this.page = options.page;
    this.failAfter = options.failAfter;
    this.retryAfter = options.retryAfter;
    this.aspect = options.aspect;
    this.showProgress = options.showProgress;
    this.maxRequestSize = options.maxRequestSize || Number.POSITIVE_INFINITY;

    this.parseStrategy = options.parseStrategy;
   
    this.attemptNumber = 0;
    this.receivedUpTo = -1;
    
    this.events('reset').on(function(){
        this.attemptNumber = 0;
        this.receivedUpTo = -1;
    }.bind(this));
});

Client.newEvent = 'Client';

Client.prototype.makeRequest = function(){

    this.parser = Parser(this.parseStrategy);
    this.parser.events('packetParsed').on( function(packet) {
      this.events('gotData').emit(packet);
      this.receivedUpTo = packet.ordering.i;
    }.bind(this));
   
    this.events('request').emit();
    this.addToScript('requestAttempt', this.attemptNumber);
    
    var startingAt = this.receivedUpTo + 1, 
        endingAt = startingAt + this.maxRequestSize - 1,
   
        packet = new Packet('request', 'GET', 'upstream', {isFirst:true, isLast:true, i:0})
                     .inDemo(this.demo)
                     .startingAt(startingAt)
                     .endingAt(endingAt)
                     .announce();

    this.scheduleFail();
    
    this.propagate(packet);
    
    this.attemptNumber++; // increment for next time
};

Client.prototype.scheduleFail = function() {
    
    this.giveUpTimeout = this.schedule(function(){

        this.addToScript('requestFail', this.attemptNumber);
       
        this.events('requestFail').emit();
        
        this.schedule(this.makeRequest.bind(this), this.retryAfter);
        
    }.bind(this), this.failAfter);
};


Client.prototype.acceptFromUpstream = function(packet){

    this.addToScript('accepted', packet);
    
    this.parser.read(packet);

    this.unschedule(this.giveUpTimeout);

    if (packet.ordering.isLast) {
        this.addToScript('acceptedAll');
        this.events('requestComplete').emit();
    } else {
        this.scheduleFail();
    }

    packet.done();
};

var Relay = (function(){

    var Relay = extend(PacketHolder, function Relay(name, locations, options){
        PacketHolder.apply(this, arguments);
    });
    
    Relay.newEvent = 'Relay';
        
    Relay.prototype.accept = function(receivedPacket){
        this.addToScript('accepted', receivedPacket);
        this.propagate(receivedPacket);
    };
    
    return Relay;
}());

var Cache = (function(){

    var Super = PacketHolder;
    
    var Cache = extend(PacketHolder, function Relay(name, locations, options){
        Super.apply(this, arguments);

        this.timeBetweenPackets = Thing.asFunction(options.timeBetweenPackets);        
        
        this.cacheContents = [];
        this.requestors = [];
        this.upstreamRequestOngoing = false;
        
        this.events('reset').on(function(){
            this.cacheContents = [];
            this.requestors = [];
            this.upstreamRequestOngoing = false;
        }.bind(this));
    });

    Cache.prototype.acceptFromDownstream = function( packetFromDownstream, source ){
        // got request from client heading to server
        this.addToScript('requestOff', source); 
       
        this.requestors.push(source);
        
        this.cacheContents.forEach(function( cachedPacket ){
            this.propagate(cachedPacket, [source]);
        }.bind(this));
        
        if( !this.upstreamRequestOngoing ) {
            
            this.propagate(packetFromDownstream);

            this.upstreamRequestOngoing = true;
        } else {
            // already have a request ongoing, ignore and kill this packet
            packetFromDownstream.done();
        }
    };

    Cache.prototype.acceptFromUpstream = function( packetFromUpstream ){
        this.addToScript('accepted', packetFromUpstream);
       
        // got response from server heading to client
       
        // make a copy for the cache:
        var copyForCache = packetFromUpstream
                              .replayedCopy()
                              .done();
       
        this.cacheContents.push(copyForCache);
        
        this.propagate(packetFromUpstream, this.requestors);
    };
        
    Cache.newEvent = 'Cache';

    return Cache;
}());

function payloadAttributes(jEle, payload){

   for( var k in payload ) {
      jEle.attr('data-' + k, payload[k]);
   }
}


/* jQuery doesn't like adding classes to SVG elements */
function addClass(jEle, klass) {
    var ele = jEle[0],
        newClasses = ele.hasAttribute('class')
                   ? ele.getAttribute('class') + ' ' + klass 
                   : klass
                   ;
    ele.setAttribute('class', newClasses);
}
function removeClass(jEle, klass) {
    var ele = jEle[0];
    ele.setAttribute('class', 
            ele.getAttribute('class')
                .split(' ')
                .filter(function(c){return c != klass})
                .join(' ')
    );
}

/**
 * 
 * @param jTemplate
 * @param klass
 * @returns {jQuery}
 */
function stampFromTemplate(jTemplate, klass) {
    var jCopy;
   
    if( !jTemplate.length )
        throw new Error('nothing in the template');
    
    if( jTemplate[0].content ) {

       jCopy = $( document.importNode(jTemplate[0].content.querySelector('*'), true) );
    } else {
   
       jCopy = jTemplate.children().clone();
    }

    if( klass )
        addClass(jCopy, klass);
    
    return jCopy;
}


function unitClass(packet) {
    return 'unit-' + (packet.ordering.i % 10);
}







var ThingView = (function(){
    "use strict";
    
    var FLASH_DURATION = 200;
    
    function ThingView(subject, demoView) {
        this.subject = subject;
        this.demoView = demoView;

        var demoEvents = this.subject.demo.events;
        
        demoEvents('paused').on(this.pause.bind(this));
        demoEvents('unpaused').on(this.unpause.bind(this));
    }

    ThingView.prototype.writeLabel = function() {
        if( this.subject.label )
            this.jDom.find('.label').text(this.subject.label);
    }
    
    ThingView.prototype.find = function(selector) {
        return this.demoView.jDom.find(selector);
    };

    ThingView.prototype.pause = function(){
        this.jPausibleElements && this.jPausibleElements.pause();
    };
    
    ThingView.prototype.unpause = function(){
        this.jPausibleElements && this.jPausibleElements.resume();
    };

    ThingView.prototype.setZoom = function(zoom){
       this.jDom.find('.zoom').attr('transform', 'scale(' + zoom + ')');
    };
   
    ThingView.prototype.stampContentsFromTemplate = function(containerSelector, templateName, className) {
        
        var jDom = stampFromTemplate($('#' + templateName), className),
            jContainer = this.find(containerSelector);
    
        if( jContainer.length != 1 ) {
           throw new Error('no one place to put the thing');
        }
        
        jContainer.append(jDom);
        return jDom;
    };
    
    ThingView.prototype.initHiding = function() {
       if( this.subject.startHidden ){
          this.hide();
          
          this.subject.events('reset').on(this.hide.bind(this));          
       }
     
       this.subject.events('activated').on(this.fadeIn.bind(this));
       this.subject.events('deactivated').on(this.fadeOut.bind(this));
    };
   
    ThingView.prototype.initDomFromTemplate = function(containerClass, templateName, className) {
        this.jDom = this.stampContentsFromTemplate('.' + containerClass, templateName, className);
        this.jPausibleElements = this.jDom;
       
        return this.jDom;
    };
    
    ThingView.prototype.moveTo = function(where) {
        this.jDom.css({
            translateX: where.x
        ,   translateY: where.y
        });
    
        return this; // chaining
    };

    ThingView.prototype.putAtXy = function(jEle, xProperty, yProperty, xy){
        var cssObject = {};
    
        cssObject[xProperty] = xy.x;
        cssObject[yProperty] = xy.y;
    
        jEle.css(cssObject);
    };
    
    ThingView.flash = function( jEle, klass ) {
    
        addClass( jEle, klass );
    
        window.setTimeout(function(){
            removeClass( jEle, klass );
        }, FLASH_DURATION);
    };
    ThingView.prototype.flash = function( klass ) {

        ThingView.flash(this.jDom, klass);
    };    
    
    ThingView.prototype.goToXy = function( xProperty, yProperty, xy ) {
        this.putAtXy(this.jDom, xProperty, yProperty, xy);
    };
    
    ThingView.prototype.animateXy = function( xProperty, yProperty, xyFrom, xyTo, duration ) {
    
        this.goToXy(xProperty, yProperty, xyFrom);
    
        var toCssObject = {};
        toCssObject[xProperty]   = xyTo.x;
        toCssObject[yProperty]   = xyTo.y;
    
        this.jDom.animate(toCssObject, {duration:duration, queue:false});

        this.pauseAnimationIfDemoPaused(this.jDom);
    };

    ThingView.prototype.pauseAnimationIfDemoPaused = function(jDom) {
        // To be used after a call to .animate() -  
        // If the demo is paused, start the animation as paused 
        // to be started later.
        
        if( this.subject.demo.paused ) {
            jDom.pause();
        }
    };
   
    ThingView.prototype.hide = function(){
       this.jDom.hide();
    };

    ThingView.prototype.fadeIn = function(){
       this.jDom.fadeIn();
    };

    ThingView.prototype.fadeOut = function(){
       this.jDom.fadeOut();
    };   

    return ThingView;
}());

var NarrativeView = (function () {

    var NarrativeView = extend(ThingView, function NarrativeView(demo, demoView) {
        ThingView.apply(this, arguments);
        
        this.jDom = 
            demoView.jDom.find('.narrative')
               .add( demoView.jDom.filter('.narrative') )
               .hide();
    });

    NarrativeView.prototype.scaleAt = function( jEle ){
       // bit of a hack here:
       return jEle.parents('[data-scale]').attr('data-scale');
    };

    NarrativeView.prototype.captionPositionOnSmall = function( highlightPosition ){
       var demoWidth = this.subject.demo.width,
           halfWidth = (demoWidth * 0.5),
           highlightCloserToRight = (highlightPosition.x > halfWidth);
       
       return {
          x: 0, y: 0,
          verticalSide: "top",
          horizontalSide: (highlightCloserToRight? 'left' : 'right')
       }
    };
   
    NarrativeView.prototype.captionPosition = function( highlightPosition ){

       var demoWidth = this.subject.demo.width,
           demoHeight = this.subject.demo.height,
           halfWidth = (demoWidth * 0.5),
           HIGHLIGHT_SIZE = 100,
           highlightFromLeft = highlightPosition.x,
           highlightCloserToRight = (highlightPosition.x > halfWidth),
           highlightCloserToBottom = (highlightPosition.y > (demoHeight / 2)),
           flipVert = false,
           result = {},
           x;
       
       if( highlightCloserToRight ) {

          var highlightFromRight = demoWidth - highlightPosition.x;
          x = highlightFromRight + HIGHLIGHT_SIZE;
          result.horizontalSide = 'right';
       } else {

          x = highlightFromLeft + HIGHLIGHT_SIZE;
          result.horizontalSide = 'left';
       }
       
       var maxX = demoWidth * 0.45;
       
       if( x > maxX ) {
          x = maxX;
          flipVert = true;
       }

       result.x = x;
       result.y = '15';

       var relateToTop = (flipVert ? highlightCloserToBottom : !highlightCloserToBottom);
       result.verticalSide = relateToTop ? 'top' : 'bottom';
       
       return result;
    };
   
    NarrativeView.prototype.positionLightboxHighlightAt = function( topic, location ){

       var jLightbox = this.jDom.filter('.lightbox');
       this.putAtXy(jLightbox, 'translateX', 'translateY', location);
      
       var scale = this.scaleAt(jLightbox),
           isSmall = scale < 1,
           captionLocation = (isSmall ? this.captionPositionOnSmall(location) 
                                      : this.captionPosition(location));

       this.jDom.filter('div.narrative')
                   .css( {left:'', right:'', top:'', bottom:''} )
                   .css( 'text-align', captionLocation.horizontalSide )
                   .css( captionLocation.horizontalSide, captionLocation.x * scale * topic.zoom)
                   .css( captionLocation.verticalSide,   captionLocation.y * scale * topic.zoom);
    };
   
    NarrativeView.prototype.showText = function( text ){
       this.jDom.find('.label').text(text);
    };   
    
    NarrativeView.prototype.showItem = function( narrativeItem ){
        var text = narrativeItem.text,
            topic = narrativeItem.topic,
            locationOnTopic = narrativeItem.locationOnTopic,
            location = topic.locations[locationOnTopic];
       
        this.showText(text);
        this.positionLightboxHighlightAt(topic, location);
        this.setZoom(topic.zoom);
        this.jDom.fadeIn();

        this.jDom.filter('.demoCaption').one('click', function(){
           
            narrativeItem.dismiss();
            return false;
        });
    };

    NarrativeView.prototype.hideItem = function(){
        // event handler might still be on the element if narrative was 
        // dismissed in some way other than clicking the 'dismiss' link,
        // for example by clicking 'reset' 
        this.jDom.filter('.demoCaption').off();
        this.jDom.fadeOut();
    };
    
    NarrativeView.prototype.displayItem = function( narrativeItem ){

        narrativeItem.events('activated').on(this.showItem.bind(this));

        narrativeItem.events('reset').on(this.hideItem.bind(this));
        narrativeItem.events('deactivated').on(this.hideItem.bind(this));
    };
    
    NarrativeView.newEvent = 'NarrativeView';

    return NarrativeView;
}());

var BarrierView = extend(ThingView, function(subject, demoView){
    ThingView.apply(this,arguments);

    this.initDomFromTemplate( 'barriers', 'barrier', subject.name);
    this.moveTo(subject.locations.where);
    
    var jClipPathContents = this.jDom.find('clipPath').children();
    this.putAtXy(jClipPathContents, 'translateX', 'translateY', subject.locations.where); 
    
    subject.events('activated').on(this.fadeIn.bind(this));
    subject.events('deactivated').on(this.fadeOut.bind(this));
   
    this.initHiding();
});

var ClientView = (function(){

    var ClientView = extend(ThingView, function(client, demoView){
        ThingView.apply(this,arguments);

        var jDom = this.initDomFromTemplate( 'places', 'client-' + client.aspect, client.name),
            browserContentsPaneSelector = '.' + client.name + ' .browserContents', 
            browserTemplateName = 'client-' + client.page;
        
        this.stampContentsFromTemplate( browserContentsPaneSelector, browserTemplateName);
        addClass(jDom, client.page);
       
        this.moveTo(client.locations.where);

        var showSpinner = this.showSpinner.bind(this),
            hideSpinner = this.hideSpinner.bind(this);
        
        client.events('request').on(showSpinner);
        client.events('requestFail').on(hideSpinner);
        client.events('requestComplete').on(hideSpinner);
        client.events('reset').on(hideSpinner);

        jDom.click(function(){
            if( client.demo.paused ) {
                client.demo.unpause();
            } else {
                client.demo.pause();
            }
        });

        this.setZoom(client.zoom);
       
        this.manageProgressBar();

        this.initHiding();
        this.writeLabel();
    });

    ClientView.factory = function(client, demoView) {

        function type(pageName){
            switch(pageName){
                case "singlePageSite":
                case "graph":
                    return SimpleClient;
                case "map":
                    return PinDropClient;
                case "cartogram":
                    return PoliticalClient;
                case "twitter":
                    return TwitterPageClient;
                default:
                    throw Error("unknown page type " + pageName);
            }
        }
        
        var Type = type(client.page);
        return new Type(client, demoView);
    };

    ClientView.prototype.manageProgressBar = function(){
       
        if( !this.subject.showProgress ) {
           this.jDom.find('.progressBar').remove();
           return;
        }
       
        var jSpace = this.jDom.find('.progressBar'),
            jBar = jSpace.find('.bar'),
            receivedSoFar = 0,
            expectedSize;
       
        function updateBarWidth(){
           if( expectedSize ) {
              var proportionReceived = receivedSoFar / expectedSize,
                  roundedProportion = Math.round(proportionReceived*100)/100;
              jBar.attr('width', roundedProportion);
           }
        }

        var reset = function(){
            receivedSoFar = 0;
            updateBarWidth();
            removeClass(jSpace, 'complete');
        }.bind(this);
       
        this.subject.events('reset').on(reset);
       
        // for discrete parsing, everything goes back to zero when the request fails:
        if( this.subject.parseStrategy == 'discrete' ) { 
           this.subject.events('requestFail').on(reset);
        }
       
        this.subject.events('acceptedFromupstream').on(function( packet ){
           receivedSoFar++;

           if( packet.ordering.expectedSize ) {
              expectedSize = packet.ordering.expectedSize; 
           }
           
           updateBarWidth();           
           
           if( packet.ordering.isLast ) {
              addClass(jSpace, 'complete');
           }
           if( packet.ordering.isFirst ) {
              removeClass(jSpace, 'complete');
           }
        }.bind(this));
    };
   
    ClientView.prototype.showSpinner = function(){
        addClass(this.jDom, 'requesting');
        var spin = stampFromTemplate($('#rotateAnimation'));
       
        this.jDom.find('.spinner')[0].appendChild( spin[0] );
    };
    ClientView.prototype.hideSpinner = function(){
        removeClass(this.jDom, 'requesting');
        this.jDom.find('.spinner .rotate').remove();
    };

    // ---------------------------------
    
    /* simple client turns on classes when packets are received, works for
     * any class/hiding based client svg */
    var SimpleClient = extend(ClientView, function(client, demoView){
        ClientView.apply(this, arguments);
        
        client.events('gotData').on(this.newData.bind(this));

        client.events('reset').on(function(){
            var ele = this.jDom[0],
                oldClassAttr = ele.getAttribute('class'),
                newClassAttr = oldClassAttr.replace(/received-\d/g, '');

            ele.setAttribute('class', newClassAttr);
        }.bind(this));        
    });

    SimpleClient.prototype.newData = function( packet ){
       addClass(this.jDom, 'received-' + packet.ordering.i);
    }; 

    // ---------------------------------

   /* like simple but animates new pins appearing */
   var PinDropClient = extend(SimpleClient, function(client, demoView){
      SimpleClient.apply(this, arguments);
   });

   PinDropClient.prototype.newData = function( packet ){
      
      // delay before dropping because for non-progressive parsing
      // it looks odd if all drop perfectly together
      var shortDelay = this.subject.parseStrategy == 'discrete'?
                           packet.ordering.i * 20 : 0;
      
      SimpleClient.prototype.newData.apply(this, arguments);

      var jPin = this.jDom.find('.unit-' + packet.ordering.i);

      jPin
         .css({opacity:0})
         .delay(shortDelay)         
         .animate({opacity:1});
      
      jPin.find('.pointer')
         .css({'translateY': -20})
         .delay(shortDelay)
         .animate({'translateY': 0}, {easing:'easeOutBounce'});
   };   

   // ---------------------------------   

    var PoliticalClient = extend(ClientView, function(client, demoView){
        ClientView.apply(this, arguments);
        
        this.runningTotals = {
            dem:0,
            rep:0
        };
        
        client.events('gotData').on(function( packet ){
            var payload = packet.payload;
            
            payloadAttributes(this.stateElement(payload.state), payload);
            
            this.updateTotals(payload);
        }.bind(this));

        client.events('reset').on(function(){
            this.jDom.find('.states [data-state]')
                        .each(function(){
                            $(this).attr('data-wonby', '')
                        });

            this.jDom.find('.pie path')
                .each(function(){
                    $(this).attr('d', '')
                });            

            this.runningTotals = {
                dem:0,
                rep:0
            };            
        }.bind(this));
    });

    PoliticalClient.prototype.stateElement = function(stateCode){
        var selector = '.states [data-state=' + stateCode + ']';
        return this.jDom.find(selector);
    };

    PoliticalClient.prototype.updateTotals = function(payload){
        var TOTAL_VOTES = 538,
            winner = payload.wonBy,
            total = this.runningTotals[winner] += payload.votes;
            proportion = total/TOTAL_VOTES,
            selector = '.pie [data-wonby=' + winner + ']';
        
        var jSlice = this.jDom.find(selector);
        
        jSlice.attr('d', this.pieWedge(proportion, 0.5) );
    };

    /**
     * @param proportion Number between 0 and 1, the proportion of the whole
     *  circle that the pie wedge should occupy.
     * @param direction Either 1 or -1 - should the wedge go CW or A-CW from
     *  the start angle
     */
    PoliticalClient.prototype.pieWedge = function(proportion, startPoint){

        function round(n) {
            return Math.round(n*100)/100;
        }

        var endPoint = startPoint + (2 * proportion),
            x1 = round(Math.cos(Math.PI * startPoint)),
            y1 = round(Math.sin(Math.PI * startPoint)),
            x2 = round(Math.cos(Math.PI * endPoint)),
            y2 = round(Math.sin(Math.PI * endPoint)),        
            largeArc = (proportion > 0.5) ? 1 : 0;
        
        return "M0 0 L" + x1 + " " + y1 + " A1 1 0 " + largeArc + " 1 " + x2 + " " + y2 + " z";
    };

    // ---------------------------------
    
    var TwitterPageClient = extend(ClientView, function(client, demoView){
        ClientView.apply(this, arguments);        
        
        var jTweetTemplate = $('#tweet'),
            jTweetScroll = this.jDom.find('.tweetsScroll'),
            packetsReceived = 0,
            livePacketsReceived = 0,
            MAX_DISPLAYABLE = 5;

        client.events('gotData').on(function( packet ){

            packetsReceived++;

            if( packet.mode == 'live' ) {
                livePacketsReceived++;
            }

            var jTweet = stampFromTemplate(jTweetTemplate, unitClass(packet)),
                tweetOffset = (packetsReceived-1) * 22
            scrollOffset = (livePacketsReceived) * 22

            if( packet.mode == 'live' ) {
                jTweetScroll.append(jTweet);
                jTweet.css({'translateY': -scrollOffset});
                jTweetScroll.animate({'translateY': scrollOffset});
            } else {
                jTweetScroll.prepend(jTweet);
                jTweet.css({'translateY': tweetOffset});
            }

            // prevent an infinite DOM from being built by removing tweets which
            // will never be seen again:
            if( packetsReceived > MAX_DISPLAYABLE ) {
                jTweetScroll.find('.tweet:first-child').remove();
            }
        });

        client.events('reset').on(function(){
            packetsReceived = 0;
            livePacketsReceived = 0;
            jTweetScroll
                .stop(true)
                .css({'translateY': 0})
                .empty();
        });        
    });

    // ---------------------------------
    
    return ClientView;
}());

var DemoView = extend(ThingView, function(demo){
    ThingView.apply(this,arguments);

    var containerFigure = $("[data-demo=" + demo.name + "]");
   
    this.jDom = stampFromTemplate($('#demo'), demo.colors)
                  .add( stampFromTemplate($('#demoCaption')) );
   
    containerFigure.append( this.jDom );

    this.baseWidth  = demo.width;
    this.baseHeight = demo.height;
    this.setDimensions(this.baseHeight, this.scalingFactor());

    this.initSubviewCreation();
 
    this.resizeWithWindow();

    this.setupControls();
    
    this.showNewNarrativeItems();
   
    demo.events('started').on(function(){
       addClass(this.jDom, 'playing');
    }.bind(this));
   
    demo.events('reset').on(function(){
       removeClass(this.jDom, 'playing');
    }.bind(this));

   demo.events('paused').on(function(){
      addClass(this.jDom, 'paused');
   }.bind(this));

   demo.events('unpaused').on(function(){
      removeClass(this.jDom, 'paused');
   }.bind(this));   
});

DemoView.prototype.withNarrativeView = function(narrativeView){
    this.narrativeView = narrativeView;
};

DemoView.prototype.resizeWithWindow = function(){
    $( window ).resize(function() {
        this.setDimensions(this.baseHeight, this.scalingFactor());
    }.bind(this));
};

DemoView.prototype.showNewNarrativeItems = function(){
    this.subject.events('NarrativeItem').on(function(narrativeItem){
        
        this.narrativeView.displayItem(narrativeItem);
    }.bind(this));
};

DemoView.prototype.initSubviewCreation = function(){
    this.createNewViewsForNewModelItems(Packet, PacketView);
    this.createNewViewsForNewModelItems(Message, MessageView);
    this.createNewViewsForNewModelItems(AggregatingServer, ServerView);
    this.createNewViewsForNewModelItems(OriginServer, ServerView);
    this.createNewViewsForNewModelItems(Wire, WireView);
    this.createNewViewsForNewModelItems(Client, ClientView);
    this.createNewViewsForNewModelItems(Relay, RelayView);
    this.createNewViewsForNewModelItems(Barrier, BarrierView);
    this.createNewViewsForNewModelItems(Cache, ServerView);
};

DemoView.prototype.createNewViewsForNewModelItems = function(ModelType, ViewType){
    if( !ModelType.newEvent ) {
        throw new Error('constructors must have .newEvent set to be listened to'); 
    }
    
    var demo = this.subject;
    
    demo.events(ModelType.newEvent).on(function(modelItem){
        ViewType.factory
            ?   ViewType.factory(modelItem, this)
            :   new ViewType(modelItem, this);
    }.bind(this));
};

DemoView.prototype.setupControls = function(){
    var jDom = this.jDom,
        jControls = jDom.find('.controls'),
        jFadeControls = jControls.find('.fadeControls'),
        jReset = jControls.find('.reset').hide(),
        demo = this.subject,
        demoEvents = demo.events;
    
    demoEvents('started').on(function(){
        jFadeControls.fadeOut();
        jReset.fadeIn();
        listenForClickOnReset();
    });

    demoEvents('reset').on(function(){
        jFadeControls.off();
        jReset.off();
       
        jFadeControls.fadeIn();
        jReset.fadeOut();
        listenForClickOnPlay();
    });

    function listenForClickOnPlay(){
        jFadeControls.one('click', function(){
            demo.start();
        });
    }

    function listenForClickOnReset(){
        jReset.one('click', function(){
            demo.reset();
        });
    }
    
    listenForClickOnPlay();
};

DemoView.prototype.scalingFactor = function(){
    var spaceAvailable = this.jDom.parents('main').width();
    return spaceAvailable / this.baseWidth;
};

DemoView.prototype.setDimensions = function(height, scalingFactor){

    var jSvg = this.jDom.filter('svg');

    jSvg.attr('height', height * scalingFactor);
    jSvg.attr('data-scale', scalingFactor);

    jSvg.find('.scaling').attr('transform', 'scale(' + scalingFactor + ')');   
    jSvg.find('.fade').attr('height', height+1);

    // The container div should have the height set on
    // the server-side to avoid the page reflowing.
    jSvg.find('.reset').css('translateY', height);
    jSvg.find('.play').attr('y', height / 2);
};

var MessageView = extend(ThingView, function(message, demoView){
    "use strict";
    
    ThingView.apply(this,arguments);
    
    var jContainer = this.find('.messages');
   
    // jDom is two-element selection of inner and outer part
    this.jDom = stampFromTemplate($('#message'), message.name);
    this.jPausibleElements = this.jDom;

    jContainer.find('.inners').append(this.jDom.filter('.messageInner'));
    jContainer.find('.outers').append(this.jDom.filter('.messageOuter'));
   
    this.jDom.hide();

    message.events('requestStartMove').on(function(xyFrom, xyTo, duration){
        this.jDom.show();
        this.goToXy(   'lineX1', 'lineY1', xyFrom);
        this.animateXy('lineX2', 'lineY2', xyFrom, xyTo, duration);
    }.bind(this));

    message.events('responseCloseMove').on(function(xyFrom, xyTo, duration){

        this.animateXy('lineX2', 'lineY2', xyFrom, xyTo, duration);
    }.bind(this));
        
    var remove = function(){
        this.jDom.remove();
    }.bind(this);
    
    message.events('done').on(remove);
});

MessageView.factory = function( message, demoView ){
    
    // at the moment, message visualisation is only supported on
    // transmissions over cables:
    if( message.holder.medium == 'cable' ) {
        return new MessageView(message, demoView);
    }
};

var ServerView = extend(ThingView, function(subject, demoView){
    ThingView.apply(this,arguments);

    this.initDomFromTemplate( 'places', 'server', subject.name);

    this.moveTo( subject.locations.where );

    this.writeLabel();
});

var WireView = extend(ThingView, function(subject, demoView){
    "use strict";
    
    ThingView.apply(this,arguments);

    this.initDomFromTemplate( 'wires', 'wire-' + subject.medium, subject.name);

    var positioners = {
            cable: function positionCable(jDom, upstreamLocation, downstreamLocation){
                jDom.css({
                    'lineX1': downstreamLocation.x,
                    'lineY1': downstreamLocation.y,
                    'lineX2': upstreamLocation.x,
                    'lineY2': upstreamLocation.y
                });
            },
            mobile: function positionMobile(jDom, upstreamLocation, downstreamLocation) {
                jDom.find('.upstream').css({
                    'translateX': upstreamLocation.x,
                    'translateY': upstreamLocation.y
                });
                jDom.find('.downstream').css({
                    'translateX': downstreamLocation.x,
                    'translateY': downstreamLocation.y
                });
            }
        },
        position = positioners[subject.medium];

    position( this.jDom, subject.locations.upstream, subject.locations.downstream);

   
    if( subject.medium == 'mobile' ){
        this.flashOnMessageStartAndEnd();
    }
   
    this.initHiding();
});

WireView.prototype.flashOnMessageStartAndEnd = function(){
    
    var aerials = {
            upstream: this.jDom.find('.upstream'),
            downstream: this.jDom.find('.downstream')
        };

    function flashAerial( packet, resolveDirection ){
        var unit = unitClass(packet),
            name = packet.name;

        ThingView.flash( aerials[ resolveDirection(packet.direction) ], unit );
        ThingView.flash( aerials[ resolveDirection(packet.direction) ], name );
    }

    this.subject.events('deliveryStarted').on(function(packet){
        flashAerial(packet, oppositeDirectionTo);
    });
    this.subject.events('delivered').on(function(packet){
        flashAerial(packet, sameDirectionAs);
    });
};

var PacketView = (function(){
    "use strict";

    var MOBILE_WAVE_OVERSHOOT = 1.66;
    
    var PacketView = extend(ThingView, function (subject, demoView) {
        
        ThingView.apply(this,arguments);
        
        subject.events('isOn').on(function( holder ){
            
            var ProxyConstructor = (holder.medium == 'mobile')
                                 ? PacketOnMobileView
                                 : PacketOnWireView
                                 ;
    
            new ProxyConstructor(subject, demoView, holder);
            
        }.bind(this));
    
    });

    //---------------------------------------------    
    
    var PacketViewRenderer = extend(ThingView, function (packet, demoView, holder) {
        var packetEvents = packet.events;
        
        ThingView.call(this, packet, demoView);

        this.initDomFromTemplate(
            'packets',
            this.templateName(packet),
            this.className(packet)
        );
        
        if( packet.payload ) {
            payloadAttributes(this.jDom, packet.payload);
        }

        packetEvents('move').on(this.animateMove.bind(this));
        packetEvents('done').on(this.done.bind(this));        
    });

    PacketViewRenderer.prototype.className = function(subject){
        return subject.name + ' ' + unitClass(subject);
    };

    PacketViewRenderer.prototype.done = function(){
        this.jDom.remove();
    };   

    //---------------------------------------------
    
    var PacketOnWireView = extend(PacketViewRenderer, function(subject, demoView){
        PacketViewRenderer.apply(this, arguments);
    });

    PacketOnWireView.prototype.animateMove = function( xyFrom, xyTo, duration ){
        this.animateXy('translateX', 'translateY', xyFrom, xyTo, duration)
    };
   
    PacketOnWireView.prototype.templateName = function(packet){
        switch(packet.type) {
            case 'GET':
                return 'getRequest';
            case 'JSON':
                return (   packet.ordering.isFirst
                    ?   'firstPacket'
                    :   (   packet.ordering.isLast
                    ?   'lastPacket'
                    :   'packet'
                    )
                    );
        }        
    };

    //---------------------------------------------    
    
    var PacketOnMobileView = extend(PacketViewRenderer, function(subject, demoView, holder){
        PacketViewRenderer.apply(this, arguments);

        if( holder.blockage ) {

            var clipId = oppositeDirectionTo( subject.direction ) + '-clip';

            this.jDom[0].setAttribute('clip-path', 'url(#' + clipId + ')');
        }        
    });

    PacketOnMobileView.prototype.animateMove = function( xyFrom, xyTo, duration ){
        
        function distance(xy1, xy2){
            function sq(n){
                return Math.pow(n, 2);
            }

            return Math.sqrt(sq(xy2.x - xy1.x) + sq(xy2.y - xy1.y));
        }        
        
        var packet = this.subject,
            transmissionDistance = distance( xyFrom, xyTo),
            jAirbornePacketInTransit = this.jDom.find('.packet');
        
        this.jPausibleElements = jAirbornePacketInTransit;

        this.putAtXy( jAirbornePacketInTransit, 'circleX', 'circleY', xyFrom);

        jAirbornePacketInTransit.animate(
            {   circleRadius: transmissionDistance * MOBILE_WAVE_OVERSHOOT,
                opacity: 0
            },
            {   duration:duration * MOBILE_WAVE_OVERSHOOT,
                queue:false,
                complete:function(){
                    this.jDom.remove();
                }.bind(this)
            }
        );
        this.pauseAnimationIfDemoPaused(jAirbornePacketInTransit);
    };

    PacketViewRenderer.prototype.done = function(){
       // when we get a done event, remove the packet after a short time.
       // this will do nothing in most cases because the animation will
       // already have removed it when it completes but here we allow
       // a little movement to continue after the wave hits the target
       window.setTimeout(function(){
          this.jDom.remove();
       }.bind(this), 500);
    };   
    
    PacketOnMobileView.prototype.templateName = function(_packet) {
        return 'airwavePacket';
    };

    //---------------------------------------------

    return PacketView;
})();

var RelayView = extend(ThingView, function(subject, demoView){
    ThingView.apply(this,arguments);

    this.initDomFromTemplate( 'places', 'tower', subject.name);
    this.moveTo(subject.locations.where);
});

function loadScenario(scenarioId, autoplay) {

    var MODEL_TYPES = {
        "originServer":        OriginServer,
        "wire":                Wire,
        "client":              Client,
        "aggregatingServer":   AggregatingServer,
        "barrier":             Barrier,
        "relay":               Relay,
        "cache":               Cache,
        "narrativeItem":       NarrativeItem
    };
    
    var scenario = getScenario(scenarioId);
    
    if( !scenario ) {
        console.warn('no scenario for ' + scenarioId);
        return;
    }
       
    var modelItems = {};

    function makeModel(jsonDescription){
        var Type = MODEL_TYPES[jsonDescription.type];

        return new Type(
            jsonDescription.name,
            (jsonDescription.locations || {}),
            (jsonDescription.options || {})
        );
    }

    function wireRelationships(modelItem, json) {
        var links = json.relationships || {};

        for (var relationship in links) {
            var otherItemName = links[relationship],
                otherModelItem = modelItems[ otherItemName ];

            modelItem.with[relationship].call(modelItem, otherModelItem);
        }
    }

    function createAndWire(scenarioItem){

        var script = scenarioItem.script || [];

        return makeModel(scenarioItem)
            .inDemo(demo)
            .followingScript(script);
    }

    function createAndWireModelItem(scenarioItem){
        modelItems[scenarioItem.name] = createAndWire(scenarioItem);
    }

    // init the model items
    var demo
        = modelItems.demo
        = new Demo(scenarioId, (scenario.options || {}));

    var demoView = new DemoView(demo);
    
    demoView.withNarrativeView(new NarrativeView(demo, demoView));
    
    scenario.items.forEach(createAndWireModelItem);

    // link up- / downstream model items to each other
    scenario.items.forEach(function(scenarioItem){
        var modelItem = modelItems[scenarioItem.name];    

        scenarioItem.next.forEach(function( nextScenarioName ){

            if( !modelItems[nextScenarioName] ) {
                throw new Error(
                    'no such item as ' + nextScenarioName + 
                    ' given as downstream of ' + scenarioItem.name
                );
            }
            
            modelItem.withDownstream( modelItems[nextScenarioName] );
        });
    });

    // link up model items which refer to each other by name:
    scenario.items.forEach(function(scenarioItem){
        
        var modelItem = modelItems[scenarioItem.name];

        wireRelationships(modelItem, scenarioItem);
    });

    // create and wire the narrative:
    (scenario.narrative || []).forEach(function(narrativeJson){
        
        var narrativeItem = createAndWire(narrativeJson);
        wireRelationships(narrativeItem, narrativeJson);
        narrativeItem.announce();
    });

    // announce all the new model items
    scenario.items.forEach(function(scenarioItem){
        modelItems[scenarioItem.name].announce();
    });
    
    demo.startSimulation = function() {
        scenario.options.startSimulation.call(demo, modelItems);
    }
   
    if( autoplay ) {
       demo.start();
    }
}

$(function(){
    $('[data-demo]').each(function( _i, element ){
        loadScenario( element.getAttribute('data-demo'), element.hasAttribute('data-autoplay') );
    })
    recordHeadingsPosition();
    updateActiveHeading();
});

