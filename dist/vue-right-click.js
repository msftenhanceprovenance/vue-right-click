!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("vue-right-click",[],t):"object"==typeof exports?exports["vue-right-click"]=t():e["vue-right-click"]=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){"use strict";function r(e){a||n(1)}Object.defineProperty(t,"__esModule",{value:!0});var o=n(7),i=n.n(o),s=n(8),a=!1,u=n(6),c=r,f=u(i.a,s.a,!1,c,"data-v-26f690f6",null);f.options.__file="src/RightClick.vue",f.esModule&&Object.keys(f.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),t.default=f.exports},function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.i,r,""]]),r.locals&&(e.exports=r.locals);n(4)("0190d3bc",r,!1)},function(e,t,n){t=e.exports=n(3)(void 0),t.push([e.i,"\n.menu[data-v-26f690f6] {\n  position: fixed;\n  z-index: 1000;\n  width: 200px;\n  border-radius: 4px;\n  border: 1px solid #ebeef5;\n  background-color: #fff;\n  color: #303133;\n  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);\n  margin: 0;\n  padding: 0;\n  cursor: pointer;\n}\n.menu li[data-v-26f690f6] {\n    list-style-type: none;\n    padding: 5px;\n}\n.menu li[data-v-26f690f6]:hover {\n      background-color: #ededed;\n}\n.menu li[data-v-26f690f6]:not(:last-child) {\n    border-bottom: 1px solid #e6e6e6;\n}\n.fade-enter-active[data-v-26f690f6], .fade-leave-active[data-v-26f690f6] {\n  transition: opacity .5s;\n}\n.fade-enter[data-v-26f690f6], .fade-leave-to[data-v-26f690f6] {\n  opacity: 0;\n}\n",""])},function(e,t){function n(e,t){var n=e[1]||"",o=e[3];if(!o)return n;if(t&&"function"==typeof btoa){var i=r(o);return[n].concat(o.sources.map(function(e){return"/*# sourceURL="+o.sourceRoot+e+" */"})).concat([i]).join("\n")}return[n].join("\n")}function r(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}e.exports=function(e){var t=[];return t.toString=function(){return this.map(function(t){var r=n(t,e);return t[2]?"@media "+t[2]+"{"+r+"}":r}).join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},o=0;o<this.length;o++){var i=this[o][0];"number"==typeof i&&(r[i]=!0)}for(o=0;o<e.length;o++){var s=e[o];"number"==typeof s[0]&&r[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),t.push(s))}},t}},function(e,t,n){function r(e){for(var t=0;t<e.length;t++){var n=e[t],r=f[n.id];if(r){r.refs++;for(var o=0;o<r.parts.length;o++)r.parts[o](n.parts[o]);for(;o<n.parts.length;o++)r.parts.push(i(n.parts[o]));r.parts.length>n.parts.length&&(r.parts.length=n.parts.length)}else{for(var s=[],o=0;o<n.parts.length;o++)s.push(i(n.parts[o]));f[n.id]={id:n.id,refs:1,parts:s}}}}function o(){var e=document.createElement("style");return e.type="text/css",d.appendChild(e),e}function i(e){var t,n,r=document.querySelector('style[data-vue-ssr-id~="'+e.id+'"]');if(r){if(v)return h;r.parentNode.removeChild(r)}if(m){var i=p++;r=l||(l=o()),t=s.bind(null,r,i,!1),n=s.bind(null,r,i,!0)}else r=o(),t=a.bind(null,r),n=function(){r.parentNode.removeChild(r)};return t(e),function(r){if(r){if(r.css===e.css&&r.media===e.media&&r.sourceMap===e.sourceMap)return;t(e=r)}else n()}}function s(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=g(t,o);else{var i=document.createTextNode(o),s=e.childNodes;s[t]&&e.removeChild(s[t]),s.length?e.insertBefore(i,s[t]):e.appendChild(i)}}function a(e,t){var n=t.css,r=t.media,o=t.sourceMap;if(r&&e.setAttribute("media",r),o&&(n+="\n/*# sourceURL="+o.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */"),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}var u="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!u)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var c=n(5),f={},d=u&&(document.head||document.getElementsByTagName("head")[0]),l=null,p=0,v=!1,h=function(){},m="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());e.exports=function(e,t,n){v=n;var o=c(e,t);return r(o),function(t){for(var n=[],i=0;i<o.length;i++){var s=o[i],a=f[s.id];a.refs--,n.push(a)}t?(o=c(e,t),r(o)):o=[];for(var i=0;i<n.length;i++){var a=n[i];if(0===a.refs){for(var u=0;u<a.parts.length;u++)a.parts[u]();delete f[a.id]}}}};var g=function(){var e=[];return function(t,n){return e[t]=n,e.filter(Boolean).join("\n")}}()},function(e,t){e.exports=function(e,t){for(var n=[],r={},o=0;o<t.length;o++){var i=t[o],s=i[0],a=i[1],u=i[2],c=i[3],f={id:e+":"+o,css:a,media:u,sourceMap:c};r[s]?r[s].parts.push(f):n.push(r[s]={id:s,parts:[f]})}return n}},function(e,t){e.exports=function(e,t,n,r,o,i){var s,a=e=e||{},u=typeof e.default;"object"!==u&&"function"!==u||(s=e,a=e.default);var c="function"==typeof a?a.options:a;t&&(c.render=t.render,c.staticRenderFns=t.staticRenderFns,c._compiled=!0),n&&(c.functional=!0),o&&(c._scopeId=o);var f;if(i?(f=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(i)},c._ssrRegister=f):r&&(f=r),f){var d=c.functional,l=d?c.render:c.beforeCreate;d?(c._injectStyles=f,c.render=function(e,t){return f.call(t),l(e,t)}):c.beforeCreate=l?[].concat(l,f):[f]}return{esModule:s,exports:a,options:c}}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"right-click",props:["items"],data:function(){return{openMenu:!1,top:0,left:0,height:0,width:0,contextMenuItems:null}},mounted:function(){this.handleEvent=function(){this.openMenu=!1},this.$root.$el.addEventListener("click",this),this.$root.$el.addEventListener("contextmenu",this)},beforeDestroy:function(){this.$root.$el.removeEventListener("click",this),this.$root.$el.removeEventListener("contextmenu",this)},methods:{contextMenuHandler:function(e){this.top=e.clientY+document.body.scrollTop+document.documentElement.scrollTop+"px",this.left=e.clientX+document.body.scrollLeft+document.documentElement.scrollLeft+"px",this.height="60px",this.openMenu=!0}}}},function(e,t,n){"use strict";var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{on:{contextmenu:function(t){t.preventDefault(),t.stopPropagation(),e.contextMenuHandler(t)}}},[e._t("default"),e._v(" "),n("transition",{attrs:{name:"fade"}},[n("ul",{directives:[{name:"show",rawName:"v-show",value:e.openMenu,expression:"openMenu"}],ref:"contextMenuItems",staticClass:"menu",style:{top:e.top,left:e.left,height:e.height},on:{blur:function(t){e.openMenu=!1}}},e._l(e.items,function(t){return n("li",{key:t.id,on:{click:function(e){e.preventDefault(),t.onClick(e)}}},[e._v("\n                "+e._s(t.name)+"\n            ")])}))])],2)},o=[];r._withStripped=!0;var i={render:r,staticRenderFns:o};t.a=i}])});