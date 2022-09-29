"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5751],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),c=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,h=d["".concat(i,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(h,l(l({ref:t},p),{},{components:r})):n.createElement(h,l({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1262:(e,t,r)=>{r.d(t,{Z:()=>o});var n=r(7294),a=r(2263);const o=function(e){var t=e.children,r=e.fallback;return(0,a.Z)().isClient&&null!=t?n.createElement(n.Fragment,null,t()):r||null}},5505:(e,t,r)=>{r.d(t,{M:()=>o});var n=r(7294),a=r(1262),o=function(e){var t=e.commaDelimitedContributors,r=e.lastVerifiedDateString,o=e.lastVerifiedVersionString,l={Chris:"hewison-chris"},s=function(e){return n.createElement("a",{class:"header-badge",href:"https://github.com/"+l[e]},n.createElement("span",{class:"badge-avatar",style:{backgroundImage:"url('https://avatars.githubusercontent.com/"+l[e]+"')"}}),n.createElement("span",{class:"badge-label"},e))};return n.createElement(a.Z,null,(function(){return n.createElement("div",{class:"header-badges"},null!=t?t.split(",").map(s):null,function(e,t){if(null!=e&&null!=t)return n.createElement("a",{class:"header-badge"},n.createElement("span",{class:"badge-avatar emoji-avatar"},"\u2714\ufe0f"),n.createElement("span",{class:"badge-label"},"Last verified on ",n.createElement("strong",null,e)," using Agora-cl ",t))}(r,o),n.createElement("a",{class:"header-badge",href:"https://github.com/Bosagora/documentation/issues/new?title=Docs update request: "+new URL(window.location.href).pathname+"&body=Source: "+window.location.href+"%0A%0ARequest: (how can we help?)"},n.createElement("span",{class:"badge-avatar emoji-avatar"},"\u270f\ufe0f"),n.createElement("span",{class:"badge-label"},"Request an update")))}))}},1144:(e,t,r)=>{r.d(t,{M:()=>o});var n=r(7294),a=r(1262),o=function(e){return function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e),n.createElement(a.Z,null,(function(){return n.createElement("div",{class:"update-request"},n.createElement("a",{href:"https://https://github.com/zeroone-boa/agora-cl-docs/issues/new?title=Docs update request: "+new URL(window.location.href).pathname+"&body=Source: "+window.location.href+"%0A%0ARequest: (how can we help?)"},"\ud83d\udc3c Request an update"))}))}},9857:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>p,default:()=>h,frontMatter:()=>c,metadata:()=>u,toc:()=>d});var n=r(7462),a=r(3366),o=(r(7294),r(3905)),l=r(5505),s=r(1144),i=["components"],c={id:"block-explorers",title:"Block explorers",sidebar_label:"Block explorers"},p=void 0,u={unversionedId:"devtools/block-explorers",id:"devtools/block-explorers",isDocsHomePage:!1,title:"Block explorers",description:"Below is a list of third-party block explorer services displaying statistics about Ethereum proof-of-stake.",source:"@site/docs/devtools/block-explorers.md",sourceDirName:"devtools",slug:"/devtools/block-explorers",permalink:"/docs/devtools/block-explorers",editUrl:"https://github.com/zeroone-boa/agora-cl-docs/edit/master/website/docs/devtools/block-explorers.md",version:"current",frontMatter:{id:"block-explorers",title:"Block explorers",sidebar_label:"Block explorers"},sidebar:"docs",previous:{title:"Testnet postmortems",permalink:"/docs/reading/testnet-postmortems"},next:{title:"File a bug report",permalink:"/docs/contribute/bugreports"}},d=[{value:"beacon.etherscan.io",id:"beaconetherscanio",children:[]},{value:"beaconcha.in",id:"beaconchain",children:[]},{value:"Mirrors and Forks",id:"mirrors-and-forks",children:[]}],m={toc:d};function h(e){var t=e.components,r=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(l.M,{mdxType:"HeaderBadgesWidget"}),(0,o.kt)("p",null,"Below is a list of third-party block explorer services displaying statistics about Ethereum proof-of-stake."),(0,o.kt)("h2",{id:"beaconetherscanio"},(0,o.kt)("a",{parentName:"h2",href:"https://beacon.etherscan.io"},"beacon.etherscan.io")),(0,o.kt)("h2",{id:"beaconchain"},(0,o.kt)("a",{parentName:"h2",href:"https://beaconcha.in/"},"beaconcha.in")),(0,o.kt)("p",null,"beaconcha.in is an Agora chain explorer maintained by ",(0,o.kt)("a",{parentName:"p",href:"https://www.bitfly.at"},"Bitfly"),"."),(0,o.kt)("h2",{id:"mirrors-and-forks"},"Mirrors and Forks"),(0,o.kt)("p",null,"This sections lists open source mirrors of forks of original, major block explorers. ",(0,o.kt)("a",{parentName:"p",href:"https://redot.com"},"Redot")," maintains two open-source mirrors that are forks of Bitfly's original work ",(0,o.kt)("a",{parentName:"p",href:"https://beaconcha.in"},"beaconcha.in")," at"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://ethscan.org"},"ethscan.org")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://eth2.redot.com"},"eth2.redot.com"))),(0,o.kt)("p",null,"Their respective Github repositories are:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/nobd/ethscan-org"},"nobd/ethscan-org")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/AtlantPlatform/eth2-redot-com"},"eth2-redot-com"))),(0,o.kt)(s.M,{mdxType:"RequestUpdateWidget"}))}h.isMDXComponent=!0}}]);