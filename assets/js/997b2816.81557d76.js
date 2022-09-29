"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9536],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),s=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return a.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),m=n,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return r?a.createElement(f,i(i({ref:t},u),{},{components:r})):a.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1262:(e,t,r)=>{r.d(t,{Z:()=>o});var a=r(7294),n=r(2263);const o=function(e){var t=e.children,r=e.fallback;return(0,n.Z)().isClient&&null!=t?a.createElement(a.Fragment,null,t()):r||null}},5505:(e,t,r)=>{r.d(t,{M:()=>o});var a=r(7294),n=r(1262),o=function(e){var t=e.commaDelimitedContributors,r=e.lastVerifiedDateString,o=e.lastVerifiedVersionString,i={Chris:"hewison-chris"},l=function(e){return a.createElement("a",{class:"header-badge",href:"https://github.com/"+i[e]},a.createElement("span",{class:"badge-avatar",style:{backgroundImage:"url('https://avatars.githubusercontent.com/"+i[e]+"')"}}),a.createElement("span",{class:"badge-label"},e))};return a.createElement(n.Z,null,(function(){return a.createElement("div",{class:"header-badges"},null!=t?t.split(",").map(l):null,function(e,t){if(null!=e&&null!=t)return a.createElement("a",{class:"header-badge"},a.createElement("span",{class:"badge-avatar emoji-avatar"},"\u2714\ufe0f"),a.createElement("span",{class:"badge-label"},"Last verified on ",a.createElement("strong",null,e)," using Agora-cl ",t))}(r,o),a.createElement("a",{class:"header-badge",href:"https://github.com/Bosagora/documentation/issues/new?title=Docs update request: "+new URL(window.location.href).pathname+"&body=Source: "+window.location.href+"%0A%0ARequest: (how can we help?)"},a.createElement("span",{class:"badge-avatar emoji-avatar"},"\u270f\ufe0f"),a.createElement("span",{class:"badge-label"},"Request an update")))}))}},1144:(e,t,r)=>{r.d(t,{M:()=>o});var a=r(7294),n=r(1262),o=function(e){return function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e),a.createElement(n.Z,null,(function(){return a.createElement("div",{class:"update-request"},a.createElement("a",{href:"https://https://github.com/zeroone-boa/agora-cl-docs/issues/new?title=Docs update request: "+new URL(window.location.href).pathname+"&body=Source: "+window.location.href+"%0A%0ARequest: (how can we help?)"},"\ud83d\udc3c Request an update"))}))}},7351:(e,t,r)=>{r.r(t),r.d(t,{contentTitle:()=>u,default:()=>f,frontMatter:()=>s,metadata:()=>p,toc:()=>d});var a=r(7462),n=r(3366),o=(r(7294),r(3905)),i=r(5505),l=r(1144),c=["components"],s={id:"keymanager-api",title:"Keymanager APIs",sidebar_label:"Keymanager APIs"},u=void 0,p={unversionedId:"how-agora-cl-works/keymanager-api",id:"how-agora-cl-works/keymanager-api",isDocsHomePage:!1,title:"Keymanager APIs",description:"Agora-cl supports the official Keymanager APIs, a REST API spec for validator clients to provide an alternative to CLI commands for onboarding and offboarding their validator keys on the consensus client.",source:"@site/docs/how-agora-cl-works/keymanager-api.md",sourceDirName:"how-agora-cl-works",slug:"/how-agora-cl-works/keymanager-api",permalink:"/docs/how-agora-cl-works/keymanager-api",editUrl:"https://github.com/zeroone-boa/agora-cl-docs/edit/master/website/docs/how-agora-cl-works/keymanager-api.md",version:"current",frontMatter:{id:"keymanager-api",title:"Keymanager APIs",sidebar_label:"Keymanager APIs"},sidebar:"docs",previous:{title:"Agora-cl-specific API",permalink:"/docs/how-agora-cl-works/agora-cl-public-api"},next:{title:"Initial synchronization",permalink:"/docs/devtools/init-state"}},d=[{value:"Authentication",id:"authentication",children:[]},{value:"Other Agora-cl specific errors and usecases",id:"other-agora-cl-specific-errors-and-usecases",children:[]}],m={toc:d};function f(e){var t=e.components,r=(0,n.Z)(e,c);return(0,o.kt)("wrapper",(0,a.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.M,{mdxType:"HeaderBadgesWidget"}),(0,o.kt)("p",null,"Agora-cl supports the official ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ethereum/keymanager-APIs"},"Keymanager APIs"),", a REST API spec for validator clients to provide an alternative to CLI commands for onboarding and offboarding their validator keys on the consensus client."),(0,o.kt)("p",null,"All Agora-cl Validator Client APIs require the use of the ",(0,o.kt)("inlineCode",{parentName:"p"},"--web")," flag."),(0,o.kt)("p",null,'Please refer to the "local keystores APIs" to manage locally stored validator keys.'),(0,o.kt)("p",null,'Please refer to the "remote keystores APIs" to manage public key settings for Web3Signer; go to our Web3Signer docs page for more information. Agora-cl Web UI does not currently support this API.'),(0,o.kt)("h2",{id:"authentication"},"Authentication"),(0,o.kt)("p",null,"A JWT token ( found on the second line of the auth-token file) will be generated in the agora-cl default wallet directory otherwise defined by ",(0,o.kt)("inlineCode",{parentName:"p"},"--wallet-dir")," flag. the token will also be printed in the console:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[2022-04-15 14:07:39]  INFO rpc: http://127.0.0.1:7500/initialize?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.ck3J6tcvHcI74IiFjyJqcBH-MmNAq-fMr0ncyZkGvFM\n")),(0,o.kt)("p",null,"The token needs to be copied and set in the header of the API request:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.e30.ck3J6tcvHcI74IiFjyJqcBH-MmNAq-fMr0ncyZkGvFM`\n")),(0,o.kt)("h2",{id:"other-agora-cl-specific-errors-and-usecases"},"Other Agora-cl specific errors and usecases"),(0,o.kt)("p",null,"Agora-cl comes with some client specific edge cases and usages. These cases will be documented on the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/ethereum/keymanager-APIs/tree/master/flows/client-specific/agora-cl"},"Keymanager API repos under flows"),"."),(0,o.kt)(l.M,{mdxType:"RequestUpdateWidget"}))}f.isMDXComponent=!0}}]);