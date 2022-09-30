"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[557],{4334:(e,t,n)=>{function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:()=>r});const r=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=r,k=c["".concat(s,".").concat(m)]||c[m]||p[m]||o;return n?a.createElement(k,l(l({ref:t},d),{},{components:n})):a.createElement(k,l({ref:t},d))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=c;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},1262:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(2263);const o=function(e){var t=e.children,n=e.fallback;return(0,r.Z)().isClient&&null!=t?a.createElement(a.Fragment,null,t()):n||null}},8215:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294);const r=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},5064:(e,t,n)=>{n.d(t,{Z:()=>p});var a=n(7294),r=n(9443);const o=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e};var l=n(4334);const i="tabItem_vU9c",s="tabItemActive_cw6a";var u=37,d=39;const p=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,p=e.values,c=e.groupId,m=e.className,k=o(),f=k.tabGroupChoices,g=k.setTabGroupChoices,h=(0,a.useState)(r),b=h[0],y=h[1],N=a.Children.toArray(e.children),v=[];if(null!=c){var w=f[c];null!=w&&w!==b&&p.some((function(e){return e.value===w}))&&y(w)}var T=function(e){var t=e.currentTarget,n=v.indexOf(t),a=p[n].value;y(a),null!=c&&(g(c,a),setTimeout((function(){var e,n,a,r,o,l,i,u;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,l=window,i=l.innerHeight,u=l.innerWidth,n>=0&&o<=u&&r<=i&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},C=function(e){var t,n;switch(e.keyCode){case d:var a=v.indexOf(e.target)+1;n=v[a]||v[0];break;case u:var r=v.indexOf(e.target)-1;n=v[r]||v[v.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,l.Z)("tabs__item",i,{"tabs__item--active":b===t}),key:t,ref:function(e){return v.push(e)},onKeyDown:C,onFocus:T,onClick:T},n)}))),t?(0,a.cloneElement)(N.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},9443:(e,t,n)=>{n.d(t,{Z:()=>a});const a=(0,n(7294).createContext)(void 0)},1144:(e,t,n)=>{n.d(t,{M:()=>o});var a=n(7294),r=n(1262),o=function(e){return function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e),a.createElement(r.Z,null,(function(){return a.createElement("div",{class:"update-request"},a.createElement("a",{href:"https://https://github.com/zeroone-boa/agora-cl-docs/issues/new?title=Docs update request: "+new URL(window.location.href).pathname+"&body=Source: "+window.location.href+"%0A%0ARequest: (how can we help?)"},"\ud83d\udc3c Request an update"))}))}},9406:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>c,default:()=>g,frontMatter:()=>p,metadata:()=>m,toc:()=>k});var a=n(7462),r=n(3366),o=(n(7294),n(3905)),l=n(5064),i=n(8215),s=n(610),u=n(1144),d=["components"],p={id:"p2p-host-ip",title:"Configure ports and firewalls for improved peer-to-peer connectivity",sidebar_label:"Configure ports and firewalls"},c=void 0,m={unversionedId:"agora-cl-usage/p2p-host-ip",id:"agora-cl-usage/p2p-host-ip",isDocsHomePage:!1,title:"Configure ports and firewalls for improved peer-to-peer connectivity",description:"Not familiar with nodes, networks, and related terminology? Consider reading Nodes and networks before proceeding.",source:"@site/docs/agora-cl-usage/p2p-host-ip.md",sourceDirName:"agora-cl-usage",slug:"/agora-cl-usage/p2p-host-ip",permalink:"/docs/agora-cl-usage/p2p-host-ip",editUrl:"https://github.com/zeroone-boa/agora-cl-docs/edit/master/website/docs/agora-cl-usage/p2p-host-ip.md",version:"current",frontMatter:{id:"p2p-host-ip",title:"Configure ports and firewalls for improved peer-to-peer connectivity",sidebar_label:"Configure ports and firewalls"},sidebar:"docs",previous:{title:"Secure gRPC connections",permalink:"/docs/agora-cl-usage/secure-grpc"},next:{title:"Nodes and networks",permalink:"/docs/concepts/nodes-networks"}},k=[{value:"Configure your firewall",id:"configure-your-firewall",children:[]},{value:"Determine your IP addresses",id:"determine-your-ip-addresses",children:[]},{value:"Configure your router",id:"configure-your-router",children:[]},{value:"Broadcast your public IP address",id:"broadcast-your-public-ip-address",children:[]},{value:"Verify your node&#39;s discoverability",id:"verify-your-nodes-discoverability",children:[]}],f={toc:k};function g(e){var t=e.components,n=(0,r.Z)(e,d);return(0,o.kt)("wrapper",(0,a.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Knowledge Check")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("strong",{parentName:"p"},"Not familiar with nodes, networks, and related terminology?")," Consider reading ",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/nodes-networks"},"Nodes and networks")," before proceeding."))),(0,o.kt)("p",null,"In some cases, small changes to your port and firewall configuration can significantly improve your node's ",(0,o.kt)("strong",{parentName:"p"},"peer-to-peer connectivity"),". Improved peer-to-peer connectivity benefits the broader Ethereum ecosystem by making blockchain data more available, and it can also help your validator find more work (and earn a little more BOA)."),(0,o.kt)("p",null,"In this how-to, we'll walk through the following tasks:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#configure-your-firewall"},"Configure your firewall")," for improved peer-to-peer connectivity."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#determine-your-ip-addresses"},"Determine your IP addresses")," so you can configure your router and Agora node."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#configure-your-router"},"Configure your router")," for improved peer-to-peer connectivity."),(0,o.kt)("li",{parentName:"ol"},"Configure your Agora node to ",(0,o.kt)("a",{parentName:"li",href:"#broadcast-your-public-ip-address"},"broadcast your public IP address"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#verify-your-nodes-discoverability"},"Verify your node's discoverability")," by using a TCP lookup tool.")),(0,o.kt)("p",null,"Note that ",(0,o.kt)("strong",{parentName:"p"},"as long as you can complete the ",(0,o.kt)("a",{parentName:"strong",href:"/docs/monitoring/checking-status"},"Status checklist")," without error, this isn't required"),". These are optimizations targeted at power users."),(0,o.kt)("h2",{id:"configure-your-firewall"},"Configure your firewall"),(0,o.kt)("p",null,"Your node and validator will try to establish several types of connections:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Validator nodes")," try to connect to a ",(0,o.kt)("strong",{parentName:"li"},"single, dedicated Agora node"),". This Agora node can be local or remote."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Beacon nodes")," try to connect to a ",(0,o.kt)("strong",{parentName:"li"},"single, dedicated execution node"),". This execution node can be local or remote."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Beacon nodes")," try to connect to ",(0,o.kt)("strong",{parentName:"li"},"many peer beacon nodes"),"."),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("strong",{parentName:"li"},"Execution nodes")," try to connect to ",(0,o.kt)("strong",{parentName:"li"},"many peer execution nodes"),".")),(0,o.kt)("p",null,"To establish these connections, your client software needs to be able to send and receive messages through specific ports. As a security best practice, we recommend blocking inbound traffic across all local ports, allowing inbound traffic on a port-by-port basis."),(0,o.kt)("p",null,"The following firewall rules should be configured on any local operating system, third-party software, or hardware firewalls between your nodes and their internet connection:"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Port/protocol"),(0,o.kt)("th",{parentName:"tr",align:null},"Firewall rule"),(0,o.kt)("th",{parentName:"tr",align:null},"Reason/caveats"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"8545/TCP")),(0,o.kt)("td",{parentName:"tr",align:null},"Block all traffic."),(0,o.kt)("td",{parentName:"tr",align:null},"This is the JSON-RPC port for your execution node's Query API. You (and apps) can use this port to check execution node status, query execution-layer chain data, and even submit transactions. This port generally shouldn't be exposed to the outside world.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"3500/TCP")),(0,o.kt)("td",{parentName:"tr",align:null},"Block all traffic."),(0,o.kt)("td",{parentName:"tr",align:null},"This is the JSON-RPC port for your Agora node's Query API. You (and apps) can use this port to check Agora node status and query consensus-layer chain data. This port generally shouldn't be exposed to the outside world.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"8551/TCP")),(0,o.kt)("td",{parentName:"tr",align:null},"Block all traffic."),(0,o.kt)("td",{parentName:"tr",align:null},"Your Agora node connects to your execution node's ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/ethereum/execution-apis/blob/main/src/engine/specification.md"},"Engine API")," using this port. Inbound and outbound traffic should be allowed through this port only if your local Agora node is connecting to a remote execution node.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"4000/TCP")),(0,o.kt)("td",{parentName:"tr",align:null},"Block all traffic."),(0,o.kt)("td",{parentName:"tr",align:null},"Your validator uses this port to connect to your Agora node via ",(0,o.kt)("a",{parentName:"td",href:"https://grpc.io"},"gRPC"),". Inbound and outbound traffic should be allowed through this port only if your local validator is connecting to a remote Agora node.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"*/UDP+TCP")),(0,o.kt)("td",{parentName:"tr",align:null},"Allow outbound traffic."),(0,o.kt)("td",{parentName:"tr",align:null},"To ",(0,o.kt)("a",{parentName:"td",href:"https://github.com/ethereum/devp2p/wiki/Discovery-Overview"},"discover")," peers, Agora-cl's Agora node dials out through random ports. Allowing outbound TCP/UDP traffic from any port will help Agora-cl find peers.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"13000/TCP")),(0,o.kt)("td",{parentName:"tr",align:null},"Allow inbound and outbound traffic."),(0,o.kt)("td",{parentName:"tr",align:null},"After we discover peers, we dial them through this port to establish an ongoing connection for ",(0,o.kt)("a",{parentName:"td",href:"https://libp2p.io/"},"libp2p")," and through which all gossip/p2p request and responses will flow.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"12000/UDP")),(0,o.kt)("td",{parentName:"tr",align:null},"Allow inbound and outbound traffic."),(0,o.kt)("td",{parentName:"tr",align:null},"Your Agora node exposes this UDP port so that other Ethereum nodes can discover your node, request chain data, and provide chain data.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"30303/TCP+UDP")),(0,o.kt)("td",{parentName:"tr",align:null},"Allow inbound and outbound traffic."),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"30303/TCP")," is your execution node's listener port, while ",(0,o.kt)("inlineCode",{parentName:"td"},"30303/UDP")," is its discovery port. This rule lets your execution node connect to other peers. Note that some clients use ",(0,o.kt)("inlineCode",{parentName:"td"},"30301")," by default.")))),(0,o.kt)("p",null,"Note that both consensus and execution clients allow you to customize many of these ports. The above table of rules is based on default port values."),(0,o.kt)("p",null,"When configuring ",(0,o.kt)("inlineCode",{parentName:"p"},"Allow inbound")," rules, consider tying the rule to an IP address when possible. For example, if your Agora node on ",(0,o.kt)("inlineCode",{parentName:"p"},"Machine A")," is connecting to a remote execution node on ",(0,o.kt)("inlineCode",{parentName:"p"},"Machine B"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Machine B"),"'s ",(0,o.kt)("inlineCode",{parentName:"p"},"Allow inbound and outbound traffic over 8551")," rule should be tied to ",(0,o.kt)("inlineCode",{parentName:"p"},"Machine A's")," public IP address. More information about IP addresses and port forwarding is available below."),(0,o.kt)("div",{class:"port-guide"},(0,o.kt)("h2",{id:"determine-your-ip-addresses"},"Determine your IP addresses"),(0,o.kt)(s.ZP,{mdxType:"MultidimensionalContentControlsPartial"}),(0,o.kt)("div",{class:"hide-tabs"},(0,o.kt)(l.Z,{groupId:"os",defaultValue:"others",values:[{label:"Windows",value:"win"},{label:"Linux, MacOS, Arm64",value:"others"}],mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"win",mdxType:"TabItem"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"IP type"),(0,o.kt)("th",{parentName:"tr",align:null},"Command"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Private"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,"ipconfig ","|",' findstr /i "IPv4 Address"'))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Public"),(0,o.kt)("td",{parentName:"tr",align:null},"Visit ",(0,o.kt)("a",{parentName:"td",href:"http://v4.ident.me/"},"v4.ident.me")," or run ",(0,o.kt)("inlineCode",{parentName:"td"},"curl v4.ident.me"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Router"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,"ipconfig ","|",' findstr /i "Gateway"')))))),(0,o.kt)(i.Z,{value:"others",mdxType:"TabItem"},(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"IP type"),(0,o.kt)("th",{parentName:"tr",align:null},"Command"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Private"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,"ifconfig ","|",' grep "inet " ',"|"," grep -v 127.0.0.1"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Public"),(0,o.kt)("td",{parentName:"tr",align:null},"Visit ",(0,o.kt)("a",{parentName:"td",href:"http://v4.ident.me/"},"v4.ident.me")," or run ",(0,o.kt)("inlineCode",{parentName:"td"},"curl v4.ident.me"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"Router"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("code",null,"ip route ","|"," grep default")," (Linux) ",(0,o.kt)("code",null,"netstat -nr ","|"," grep default")," (MacOS)")))))))),(0,o.kt)("h2",{id:"configure-your-router"},"Configure your router"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"If you're running on a virtual public cloud (VPC) instance, you can skip this step.")),(0,o.kt)("p",null,"To ensure that other peer nodes can discover your node, you may need to forward ports ",(0,o.kt)("inlineCode",{parentName:"p"},"13000/TCP")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"12000/UDP")," using your router's admin interface. Every router is different, but the procedure is usually something like this:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Determine your router's IP address"),(0,o.kt)("li",{parentName:"ol"},"Log in to your router's browser-based admin interface (usually something like ",(0,o.kt)("a",{parentName:"li",href:"http://192.168.1.1"},"http://192.168.1.1"),")"),(0,o.kt)("li",{parentName:"ol"},"Look for ",(0,o.kt)("inlineCode",{parentName:"li"},"Port Forwarding"),"."),(0,o.kt)("li",{parentName:"ol"},"Configure a port forwarding rule with the following values:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"External port: ",(0,o.kt)("inlineCode",{parentName:"li"},"13000")),(0,o.kt)("li",{parentName:"ul"},"Internal port: ",(0,o.kt)("inlineCode",{parentName:"li"},"13000")),(0,o.kt)("li",{parentName:"ul"},"Protocol: ",(0,o.kt)("inlineCode",{parentName:"li"},"TCP")),(0,o.kt)("li",{parentName:"ul"},"IP Address: The private IP address of the computer running your Agora node"))),(0,o.kt)("li",{parentName:"ol"},"Configure a second port forwarding rule with the following values:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"External port: ",(0,o.kt)("inlineCode",{parentName:"li"},"12000")),(0,o.kt)("li",{parentName:"ul"},"Internal port: ",(0,o.kt)("inlineCode",{parentName:"li"},"12000")),(0,o.kt)("li",{parentName:"ul"},"Protocol: ",(0,o.kt)("inlineCode",{parentName:"li"},"UDP")),(0,o.kt)("li",{parentName:"ul"},"IP Address: The private IP address of the computer running your Agora node")))),(0,o.kt)("p",null,"If your execution node, Agora node, and validator node are split across multiple machines, you may need to forward additional ports. Refer to the above table of firewall rules for information about specific ports that you may need to forward."),(0,o.kt)("h2",{id:"broadcast-your-public-ip-address"},"Broadcast your public IP address"),(0,o.kt)("p",null,"Your Agora node will broadcast your ",(0,o.kt)("strong",{parentName:"p"},"static, public IP address")," to peer nodes if you configure either the following flags:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"--p2p-host-ip=<your public IP>"),": Use this if you haven't configured a DNS record for your public IP. For example: ",(0,o.kt)("inlineCode",{parentName:"li"},"--p2p-host-ip=67.127.151.89")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},'--p2p-host-dns="host.domain.com"'),": For example: ",(0,o.kt)("inlineCode",{parentName:"li"},"--p2p-host-dns=host.domain.com"))),(0,o.kt)("p",null,"Broadcasting your static IP can make your Agora node more discoverable, which benefits the Ethereum network by making consensus-layer blockchain data more available. Note that if you're using a dynamic IP address (this is usually the case by default), your node will lose its peers every time your ISP assigns your router/device a new IP address."),(0,o.kt)("h2",{id:"verify-your-nodes-discoverability"},"Verify your node's discoverability"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("a",{parentName:"p",href:"https://mxtoolbox.com/SuperTool.aspx?"},"MX Toolbox TCP Lookup tool"),":"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"https://mxtoolbox.com/SuperTool.aspx?action=tcp%3a{Your-Public-IP-Address}%3a13000&run=toolpage")),(0,o.kt)("p",null,"Note the above placeholder for ",(0,o.kt)("inlineCode",{parentName:"p"},"Your-Public-IP-Address"),", and the specification of ",(0,o.kt)("inlineCode",{parentName:"p"},"13000/TCP"),"."),(0,o.kt)("p",null,"If you see the following results, your Agora node is highly discoverable:"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/2212651/81552111-7c703400-93a0-11ea-83b5-abeebc63c285.png",alt:"image"})),(0,o.kt)("p",null,"You can perform the same test using ",(0,o.kt)("inlineCode",{parentName:"p"},"30303/TCP")," to test your execution node's discoverability."),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/monitoring/checking-status"},"Check your node and validator status")," for a comprehensive status checklist."),(0,o.kt)(u.M,{mdxType:"RequestUpdateWidget"}))}g.isMDXComponent=!0},610:(e,t,n)=>{n.d(t,{ZP:()=>m});var a=n(7462),r=n(3366),o=n(7294),l=n(3905),i=n(5064),s=n(8215),u=n(1262),d=function(){var e=function(){return document.querySelectorAll(".quickstart-tabs .tabs__item")},t=function(t){var n;return e().forEach((function(e){e.innerHTML==t&&(n=e)})),n},n=function(e){t(e).classList.add("disabled-tab")},a=function(e){console.log("selecting "+e+"..."),t(e).click()},r=function(e){return t(e).classList.contains("tabs__item--active")},l=function(){return window.location.href.indexOf("/authentication")>-1},i=function(){var e,t,n,a;e=r("Windows")?"Windows":"Linux, MacOS, Arm64",r("Mainnet")?t="Mainnet":r("Testnet")&&(t="Testnet"),r("Agora-el")&&(n="Agora-el"),a=r("IPC")?"IPC":"HTTP-JWT";var o=document.querySelector(".quickstart-tabs");o.dataset.selectedOS=e,o.dataset.selectedNetwork=t,o.dataset.selectedEL=n,o.dataset.selectedENBN=a},s=function(){setTimeout((function(){l()&&(setTimeout((function(){a("HTTP-JWT"),i()}),50),n("IPC")),e().forEach((function(e){e.textContent.indexOf(":")>-1?e.outerHTML=e.outerHTML:e.addEventListener("click",(function(e){var r=e.target,o=r.textContent;"Agora-el"==o?t("IPC").classList.remove("disabled-tab"):"IPC"==o&&(l()?(setTimeout((function(){a("HTTP-JWT")}),50),n("IPC")):a("Agora-el")),function(e){var t=e.parentElement;t.classList.remove("updated"),t.classList.add("updated"),setTimeout((function(){t.classList.remove("updated")}),2e3)}(r),i()}),!1)})),i()}),100)};return o.createElement(u.Z,null,(function(){s()}))},p=["components"],c={toc:[]};function m(e){var t=e.components,n=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(d,{mdxType:"MultiDimensionalContentWidget"}),(0,l.kt)("div",{class:"quickstart-tabs"},(0,l.kt)(i.Z,{className:"tabgroup-with-label os-tabgroup",groupId:"os",defaultValue:"others",values:[{label:"Operating system:",value:"label"},{label:"Linux, MacOS, Arm64",value:"others"},{label:"Windows",value:"win"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{className:"unclickable-element",value:"label",mdxType:"TabItem"}),(0,l.kt)(s.Z,{value:"others",mdxType:"TabItem"}),(0,l.kt)(s.Z,{value:"win",mdxType:"TabItem"})),(0,l.kt)(i.Z,{className:"tabgroup-with-label network-tabgroup",groupId:"network",defaultValue:"mainnet",values:[{label:"Network:",value:"label"},{label:"Mainnet",value:"mainnet"},{label:"Testnet",value:"testnet"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{className:"unclickable-element",value:"label",mdxType:"TabItem"}),(0,l.kt)(s.Z,{value:"mainnet",mdxType:"TabItem"}),(0,l.kt)(s.Z,{value:"testnet",mdxType:"TabItem"})),(0,l.kt)(i.Z,{className:"tabgroup-with-label hidden-in-docker-guide el-tabgroup",groupId:"execution-clients",defaultValue:"geth",values:[{label:"Execution client:",value:"label"},{label:"Agora-el",value:"agora-el"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{className:"unclickable-element",value:"label",mdxType:"TabItem"}),(0,l.kt)(s.Z,{value:"agora-el",mdxType:"TabItem"})),(0,l.kt)(i.Z,{className:"tabgroup-with-label hidden-in-jwt-guide hidden-in-docker-guide enbn-tabgroup",groupId:"protocol",defaultValue:"jwt",values:[{label:"EN-BN connection:",value:"label"},{label:"HTTP-JWT",value:"jwt"},{label:"IPC",value:"ipc"}],mdxType:"Tabs"},(0,l.kt)(s.Z,{className:"unclickable-element",value:"label",mdxType:"TabItem"}),(0,l.kt)(s.Z,{value:"jwt",mdxType:"TabItem"}),(0,l.kt)(s.Z,{value:"ipc",mdxType:"TabItem"}))))}m.isMDXComponent=!0}}]);