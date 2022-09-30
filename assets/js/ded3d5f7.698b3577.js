"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2802],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>u});var n=a(7294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(a),u=o,m=d["".concat(c,".").concat(u)]||d[u]||h[u]||r;return a?n.createElement(m,s(s({ref:t},p),{},{components:a})):n.createElement(m,s({ref:t},p))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,s=new Array(r);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var l=2;l<r;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1262:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294),o=a(2263);const r=function(e){var t=e.children,a=e.fallback;return(0,o.Z)().isClient&&null!=t?n.createElement(n.Fragment,null,t()):a||null}},5505:(e,t,a)=>{a.d(t,{M:()=>r});var n=a(7294),o=a(1262),r=function(e){var t=e.commaDelimitedContributors,a=e.lastVerifiedDateString,r=e.lastVerifiedVersionString,s={Chris:"hewison-chris"},i=function(e){return n.createElement("a",{class:"header-badge",href:"https://github.com/"+s[e]},n.createElement("span",{class:"badge-avatar",style:{backgroundImage:"url('https://avatars.githubusercontent.com/"+s[e]+"')"}}),n.createElement("span",{class:"badge-label"},e))};return n.createElement(o.Z,null,(function(){return n.createElement("div",{class:"header-badges"},null!=t?t.split(",").map(i):null,function(e,t){if(null!=e&&null!=t)return n.createElement("a",{class:"header-badge"},n.createElement("span",{class:"badge-avatar emoji-avatar"},"\u2714\ufe0f"),n.createElement("span",{class:"badge-label"},"Last verified on ",n.createElement("strong",null,e)," using Agora-cl ",t))}(a,r),n.createElement("a",{class:"header-badge",href:"https://github.com/Bosagora/documentation/issues/new?title=Docs update request: "+new URL(window.location.href).pathname+"&body=Source: "+window.location.href+"%0A%0ARequest: (how can we help?)"},n.createElement("span",{class:"badge-avatar emoji-avatar"},"\u270f\ufe0f"),n.createElement("span",{class:"badge-label"},"Request an update")))}))}},1144:(e,t,a)=>{a.d(t,{M:()=>r});var n=a(7294),o=a(1262),r=function(e){return function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e),n.createElement(o.Z,null,(function(){return n.createElement("div",{class:"update-request"},n.createElement("a",{href:"https://https://github.com/zeroone-boa/agora-cl-docs/issues/new?title=Docs update request: "+new URL(window.location.href).pathname+"&body=Source: "+window.location.href+"%0A%0ARequest: (how can we help?)"},"\ud83d\udc3c Request an update"))}))}},4963:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>h,toc:()=>d});var n=a(7462),o=a(3366),r=(a(7294),a(3905)),s=a(5505),i=a(1144),c=["components"],l={id:"agora-cl node",title:"Agora-cl's Agora node",sidebar_label:"Beacon node"},p=void 0,h={unversionedId:"how-agora-cl-works/agora-cl node",id:"how-agora-cl-works/agora-cl node",isDocsHomePage:!1,title:"Agora-cl's Agora node",description:"The beacon-chain node shipped with Agora-cl is the keystone component of the Ethereum proof-of-stake protocol. It is responsible for running a full Proof-of-Stake blockchain, known as an Agora chain, which uses distributed consensus to agree on blocks both proposed and attested on by validators in the network. Beacon nodes communicate their processed blocks to their peers via a P2P \\(peer-to-peer\\) network, which also manages the lifecycle process of active validator clients.",source:"@site/docs/how-agora-cl-works/agora-cl-node.md",sourceDirName:"how-agora-cl-works",slug:"/how-agora-cl-works/agora-cl node",permalink:"/docs/how-agora-cl-works/agora-cl node",editUrl:"https://github.com/zeroone-boa/agora-cl-docs/edit/master/website/docs/how-agora-cl-works/agora-cl-node.md",version:"current",frontMatter:{id:"agora-cl node",title:"Agora-cl's Agora node",sidebar_label:"Beacon node"},sidebar:"docs",previous:{title:"Architecture overview",permalink:"/docs/how-agora-cl-works/architecture-overview"},next:{title:"Validator client",permalink:"/docs/how-agora-cl-works/agora-cl-validator-client"}},d=[{value:"Beacon node functionality",id:"beacon-node-functionality",children:[]},{value:"Blockchain service",id:"blockchain-service",children:[]},{value:"Operations service",id:"operations-service",children:[]},{value:"Core package",id:"core-package",children:[]},{value:"Sync service",id:"sync-service",children:[]},{value:"ETH1 service",id:"eth1-service",children:[]},{value:"Public RPC server",id:"public-rpc-server",children:[]}],u={toc:d};function m(e){var t=e.components,l=(0,o.Z)(e,c);return(0,r.kt)("wrapper",(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(s.M,{mdxType:"HeaderBadgesWidget"}),(0,r.kt)("p",null,"The beacon-chain node shipped with Agora-cl is the keystone component of the Ethereum proof-of-stake protocol. It is responsible for running a full ",(0,r.kt)("a",{parentName:"p",href:"/docs/terminology#proof-of-stake-pos"},"Proof-of-Stake")," blockchain, known as an Agora chain, which uses distributed consensus to agree on blocks both ",(0,r.kt)("a",{parentName:"p",href:"/docs/terminology#propose"},"proposed")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/terminology#attest"},"attested")," on by ",(0,r.kt)("a",{parentName:"p",href:"/docs/terminology#validator"},"validators")," in the network. Beacon nodes communicate their processed blocks to their peers via a P2P ","(","peer-to-peer",")"," network, which also manages the lifecycle process of active ",(0,r.kt)("a",{parentName:"p",href:"/docs/how-agora-cl-works/agora-cl-validator-client"},"validator clients"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"Beacon node",src:a(6996).Z})),(0,r.kt)("h2",{id:"beacon-node-functionality"},"Beacon node functionality"),(0,r.kt)("p",null,"At runtime, the Agora node initialises and maintains a number of services that are all vital to providing all the features of Ethereum proof-of-stake. In no particular order, these services include:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",{parentName:"li",href:"#blockchain-service"},(0,r.kt)("strong",{parentName:"a"},"blockchain")," ",(0,r.kt)("strong",{parentName:"a"},"service"))," which processes incoming blocks from the network, advances the Agora chain's state, and applies a fork choice rule to select the best head block."),(0,r.kt)("li",{parentName:"ul"},"An ",(0,r.kt)("a",{parentName:"li",href:"#operations-service"},(0,r.kt)("strong",{parentName:"a"},"operations service"))," prepares information contained in beacon blocks received from peers ","(","such as block deposits and attestations",")"," for inclusion into new validator blocks."),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",{parentName:"li",href:"#core-package"},(0,r.kt)("strong",{parentName:"a"},"core package")," ")," containing Agora-cl-chain core functions, utilities, and state transitions required for conformity with the protocol."),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",{parentName:"li",href:"#sync-service"},(0,r.kt)("strong",{parentName:"a"},"sync service"))," which both queries nodes across the network to ensure latest ",(0,r.kt)("a",{parentName:"li",href:"/docs/terminology#canonical-head-block"},"canonical head")," and state are synced and processes incoming block announcements from peers."),(0,r.kt)("li",{parentName:"ul"},"An ",(0,r.kt)("a",{parentName:"li",href:"#eth1-service"},(0,r.kt)("strong",{parentName:"a"},"BOA 1.0 service"))," that listens to latest event logs from the validator deposit contract and the BOA 1.0 blockchain."),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",{parentName:"li",href:"#public-rpc-server"},(0,r.kt)("strong",{parentName:"a"},"public RPC server"))," that requests information about the Agora chain's state, the latest block, validator information, etcetera."),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("a",{parentName:"li",href:"p2p-networking"},(0,r.kt)("strong",{parentName:"a"},"P2P server"))," which handles the life cycle of peer connections and facilitates broadcasting across the network."),(0,r.kt)("li",{parentName:"ul"},"A ",(0,r.kt)("strong",{parentName:"li"},"full test suite")," for running simulation on Ethereum Agora chain state transitions, benchmarks and conformity tests across clients.")),(0,r.kt)("p",null,"We isolate each of these services into separate packages, each responsible for its own life cycle, logging and dependency management. Each Agora-cl service implements an interface to start, stop, and verify its status at any time."),(0,r.kt)("h2",{id:"blockchain-service"},"Blockchain service"),(0,r.kt)("p",null,"The blockchain service is arguably the most important part of the project, as it allows the network to reach consensus on the state of the protocol itself. It is responsible for handling the life cycle of blocks, and applies the ",(0,r.kt)("a",{parentName:"p",href:"/docs/terminology#fork-choice-rule"},"fork choice rule")," and ",(0,r.kt)("a",{parentName:"p",href:"/docs/terminology#state-transition-function"},"state transition function")," provided by the ",(0,r.kt)("a",{parentName:"p",href:"#core-package"},"core package")," to advance the Agora chain."),(0,r.kt)("p",null,"In Ethereum, blocks can be proposed in intervals known as ",(0,r.kt)("em",{parentName:"p"},"slots"),", which are period of seconds. During a slot, proposers are assigned to create and send blocks into the Agora node for acceptance. It is possible, however, that proposer may fail to do their job at their assigned slot; in this case, the blockchain service processes skipped slots appropriately to ensure that the chain does not stall."),(0,r.kt)("h2",{id:"operations-service"},"Operations service"),(0,r.kt)("p",null,"The operations service handles important information contained in blocks on the Agora chain, such as voluntary validator exits, ",(0,r.kt)("a",{parentName:"p",href:"/docs/terminology#propose"},"proposals"),", ",(0,r.kt)("a",{parentName:"p",href:"/docs/terminology#attest"},"attestations"),", slashings and more. The operation is received from the ",(0,r.kt)("a",{parentName:"p",href:"#sync-service"},"sync service")," via the ",(0,r.kt)("a",{parentName:"p",href:"p2p-networking"},"P2P network"),", or from data the node retrieves locally."),(0,r.kt)("h2",{id:"core-package"},"Core package"),(0,r.kt)("p",null,"The core package implements the Ethereum Agora chain state transition function, as well as the core helpers and utilities. Every function that manages block processing, epoch processing, validator shuffling and finality is defined within this package. It is designed to be a near-identical translation of the official specification. The aim is to keep this package as free of outside code as possible, and it is comprised of mostly pure functions which do not require access to the other services across Agora-cl to function."),(0,r.kt)("h2",{id:"sync-service"},"Sync service"),(0,r.kt)("p",null,"The sync service has two responsibilities: ensuring the local Agora chain is up-to-date with the latest ",(0,r.kt)("a",{parentName:"p",href:"/docs/terminology#canonical-head-block"},"canonical head")," and state as observed by the network, and to listen and respond to requests for new block announcements from peers. The service was designed to be as independent as possible from the rest of the system, and is the main point of interaction for peers over the ",(0,r.kt)("a",{parentName:"p",href:"p2p-networking"},"P2P network"),". Everything in the sync service runs concurrently through a single ",(0,r.kt)("inlineCode",{parentName:"p"},"Start()")," function, which handles several different message requests and responses."),(0,r.kt)("h2",{id:"eth1-service"},"ETH1 service"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"/docs/terminology#eth1"},"ETH1")," service uses the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/ethereum/go-ethereum/tree/master/ethclient"},"go-ethereum ethclient")," to connect to a running Ethereum 1.0 node in order to listen for incoming ",(0,r.kt)("a",{parentName:"p",href:"validator-deposit-contract"},"validator deposit contract")," logs. The ",(0,r.kt)("a",{parentName:"p",href:"agora-cl-validator-client"},"validator clients")," include deposit objects inside of their proposed blocks, and the Agora chain state transition function then activates any pending validators from these deposits."),(0,r.kt)("p",null,"As the Agora node will need to frequently access information and one cannot rely on perfect latency from the ",(0,r.kt)("a",{parentName:"p",href:"/docs/terminology#eth1"},"ETH1")," node, the service also includes the ability to cache received logs and blocks from the Ethereum 1.0 chain."),(0,r.kt)("h2",{id:"public-rpc-server"},"Public RPC server"),(0,r.kt)("p",null,"The public RPC server is one of the most critical components of the Agora node. It implements a variety of methods that ",(0,r.kt)("a",{parentName:"p",href:"/docs/terminology#validator"},"validators "),"connected to the node can query and obtain assignments to propose or attest blocks. The API is defined in a ",(0,r.kt)("a",{parentName:"p",href:"https://developers.google.com/protocol-buffers/"},"protobuf")," formatted file, and any client that implements the client side of these methods can connect via gRPC to the Agora node and begin requesting data from its public endpoints."),(0,r.kt)(i.M,{mdxType:"RequestUpdateWidget"}))}m.isMDXComponent=!0},6996:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);