"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3606],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=s(n),d=a,m=p["".concat(c,".").concat(d)]||p[d]||g[d]||o;return n?r.createElement(m,l(l({ref:t},u),{},{components:n})):r.createElement(m,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},1262:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294),a=n(2263);const o=function(e){var t=e.children,n=e.fallback;return(0,a.Z)().isClient&&null!=t?r.createElement(r.Fragment,null,t()):n||null}},5505:(e,t,n)=>{n.d(t,{M:()=>o});var r=n(7294),a=n(1262),o=function(e){var t=e.commaDelimitedContributors,n=e.lastVerifiedDateString,o=e.lastVerifiedVersionString,l={Chris:"hewison-chris"},i=function(e){return r.createElement("a",{class:"header-badge",href:"https://github.com/"+l[e]},r.createElement("span",{class:"badge-avatar",style:{backgroundImage:"url('https://avatars.githubusercontent.com/"+l[e]+"')"}}),r.createElement("span",{class:"badge-label"},e))};return r.createElement(a.Z,null,(function(){return r.createElement("div",{class:"header-badges"},null!=t?t.split(",").map(i):null,function(e,t){if(null!=e&&null!=t)return r.createElement("a",{class:"header-badge"},r.createElement("span",{class:"badge-avatar emoji-avatar"},"\u2714\ufe0f"),r.createElement("span",{class:"badge-label"},"Last verified on ",r.createElement("strong",null,e)," using Agora-cl ",t))}(n,o),r.createElement("a",{class:"header-badge",href:"https://github.com/Bosagora/documentation/issues/new?title=Docs update request: "+new URL(window.location.href).pathname+"&body=Source: "+window.location.href+"%0A%0ARequest: (how can we help?)"},r.createElement("span",{class:"badge-avatar emoji-avatar"},"\u270f\ufe0f"),r.createElement("span",{class:"badge-label"},"Request an update")))}))}},1144:(e,t,n)=>{n.d(t,{M:()=>o});var r=n(7294),a=n(1262),o=function(e){return function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e),r.createElement(a.Z,null,(function(){return r.createElement("div",{class:"update-request"},r.createElement("a",{href:"https://https://github.com/zeroone-boa/agora-cl-docs/issues/new?title=Docs update request: "+new URL(window.location.href).pathname+"&body=Source: "+window.location.href+"%0A%0ARequest: (how can we help?)"},"\ud83d\udc3c Request an update"))}))}},2132:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>u,default:()=>m,frontMatter:()=>s,metadata:()=>g,toc:()=>p});var r=n(7462),a=n(3366),o=(n(7294),n(3905)),l=n(5505),i=n(1144),c=["components"],s={id:"golang",title:"Golang resources",sidebar_label:"Golang resources"},u=void 0,g={unversionedId:"reading/golang",id:"reading/golang",isDocsHomePage:!1,title:"Golang resources",description:"Getting to know Golang",source:"@site/docs/reading/golang.md",sourceDirName:"reading",slug:"/reading/golang",permalink:"/docs/reading/golang",editUrl:"https://github.com/zeroone-boa/agora-cl-docs/edit/master/website/docs/reading/golang.md",version:"current",frontMatter:{id:"golang",title:"Golang resources",sidebar_label:"Golang resources"},sidebar:"docs",previous:{title:"Golang principles",permalink:"/docs/contribute/golang-principles"},next:{title:"About Bazel",permalink:"/docs/reading/bazel"}},p=[{value:"Getting to know Golang",id:"getting-to-know-golang",children:[]}],d={toc:p};function m(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.M,{mdxType:"HeaderBadgesWidget"}),(0,o.kt)("h2",{id:"getting-to-know-golang"},"Getting to know Golang"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.amazon.com/Programming-Language-Addison-Wesley-Professional-Computing/dp/0134190440"},"The Go Programming Language"),"  ","(","Only recommended book",")"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://goethereumbook.org"},"Ethereum Development with Go")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://golang.org/doc/code.html"},"How to Write Go Code")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://tour.golang.org/"},"The Go Programming Language Tour")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"http://www.youtube.com/watch?v=2KmHtgtEZ1s"},"Getting Started With Go")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://golang.org/"},"Go Official Website"))),(0,o.kt)(i.M,{mdxType:"RequestUpdateWidget"}))}m.isMDXComponent=!0}}]);