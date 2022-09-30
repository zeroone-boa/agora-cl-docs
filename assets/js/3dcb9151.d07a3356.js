"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4613],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>m});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=s(a),m=r,h=u["".concat(c,".").concat(m)]||u[m]||p[m]||l;return a?n.createElement(h,o(o({ref:t},d),{},{components:a})):n.createElement(h,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1262:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),r=a(2263);const l=function(e){var t=e.children,a=e.fallback;return(0,r.Z)().isClient&&null!=t?n.createElement(n.Fragment,null,t()):a||null}},5505:(e,t,a)=>{a.d(t,{M:()=>l});var n=a(7294),r=a(1262),l=function(e){var t=e.commaDelimitedContributors,a=e.lastVerifiedDateString,l=e.lastVerifiedVersionString,o={Chris:"hewison-chris"},i=function(e){return n.createElement("a",{class:"header-badge",href:"https://github.com/"+o[e]},n.createElement("span",{class:"badge-avatar",style:{backgroundImage:"url('https://avatars.githubusercontent.com/"+o[e]+"')"}}),n.createElement("span",{class:"badge-label"},e))};return n.createElement(r.Z,null,(function(){return n.createElement("div",{class:"header-badges"},null!=t?t.split(",").map(i):null,function(e,t){if(null!=e&&null!=t)return n.createElement("a",{class:"header-badge"},n.createElement("span",{class:"badge-avatar emoji-avatar"},"\u2714\ufe0f"),n.createElement("span",{class:"badge-label"},"Last verified on ",n.createElement("strong",null,e)," using Agora-cl ",t))}(a,l),n.createElement("a",{class:"header-badge",href:"https://github.com/Bosagora/documentation/issues/new?title=Docs update request: "+new URL(window.location.href).pathname+"&body=Source: "+window.location.href+"%0A%0ARequest: (how can we help?)"},n.createElement("span",{class:"badge-avatar emoji-avatar"},"\u270f\ufe0f"),n.createElement("span",{class:"badge-label"},"Request an update")))}))}},1144:(e,t,a)=>{a.d(t,{M:()=>l});var n=a(7294),r=a(1262),l=function(e){return function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e),n.createElement(r.Z,null,(function(){return n.createElement("div",{class:"update-request"},n.createElement("a",{href:"https://https://github.com/zeroone-boa/agora-cl-docs/issues/new?title=Docs update request: "+new URL(window.location.href).pathname+"&body=Source: "+window.location.href+"%0A%0ARequest: (how can we help?)"},"\ud83d\udc3c Request an update"))}))}},703:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>d,default:()=>h,frontMatter:()=>s,metadata:()=>p,toc:()=>u});var n=a(7462),r=a(3366),l=(a(7294),a(3905)),o=a(5505),i=a(1144),c=["components"],s={id:"deterministic",title:"Create a Agora-cl wallet",sidebar_label:"Create a Agora-cl wallet"},d=void 0,p={unversionedId:"wallet/deterministic",id:"wallet/deterministic",isDocsHomePage:!1,title:"Create a Agora-cl wallet",description:"Background",source:"@site/docs/wallet/deterministic.md",sourceDirName:"wallet",slug:"/wallet/deterministic",permalink:"/docs/wallet/deterministic",editUrl:"https://github.com/zeroone-boa/agora-cl-docs/edit/master/website/docs/wallet/deterministic.md",version:"current",frontMatter:{id:"deterministic",title:"Create a Agora-cl wallet",sidebar_label:"Create a Agora-cl wallet"},sidebar:"docs",previous:{title:"Switch to a new client",permalink:"/docs/advanced/switch-clients"},next:{title:"Configure a remote signing wallet",permalink:"/docs/wallet/remote"}},u=[{value:"Background",id:"background",children:[]},{value:"Usage",id:"usage",children:[{value:"Wallet creation",id:"wallet-creation",children:[]},{value:"Wallet recovery",id:"wallet-recovery",children:[]},{value:"List validator accounts",id:"list-validator-accounts",children:[]}]}],m={toc:u};function h(e){var t=e.components,a=(0,r.Z)(e,c);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)(o.M,{mdxType:"HeaderBadgesWidget"}),(0,l.kt)("h2",{id:"background"},"Background"),(0,l.kt)("p",null,"Agora-cl features a built-in hierarchical deterministic (HD) wallet. HD wallets let you create new validator private keys deterministically from a seed phrase, shown as an English mnemonic following the ",(0,l.kt)("a",{parentName:"p",href:"https://en.bitcoin.it/wiki/Seed_phrase"},"BIP-39 standard")," upon wallet creation. If you created a deposit using the official ",(0,l.kt)("a",{parentName:"p",href:"https://agora-staking.bosagora.org/"},"Ethereum launchpad")," and want to run Agora-cl using it, see our dedicated instructions ",(0,l.kt)("a",{parentName:"p",href:"/docs/install/install-with-script"},"here"),"."),(0,l.kt)("p",null,"Validator private keys are encrypted with the wallet's password using the ",(0,l.kt)("a",{parentName:"p",href:"https://eips.ethereum.org/EIPS/eip-2335"},"EIP-2335")," keystore.json standard for storing BLS12-381 private keys. This keystore.json file, along with its derivation path, comprises an ",(0,l.kt)("strong",{parentName:"p"},"account")," in an HD wallet."),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)("h3",{id:"wallet-creation"},"Wallet creation"),(0,l.kt)("p",null,"To start using the HD wallet, you can create a new wallet using:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./agora-cl.sh validator wallet create\n")),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"You'll need to set a ",(0,l.kt)("strong",{parentName:"p"},"strong")," password for your new HD wallet, containing at least 1 uppercase letter, 1 number, a special character, and be at least 8 characters long. Any unicode characters can be used for your wallet password."))),(0,l.kt)("p",null,"Then select ",(0,l.kt)("strong",{parentName:"p"},"HD")," wallet when prompted. You can also create a wallet ",(0,l.kt)("strong",{parentName:"p"},"non-interactively")," by using the following command line flags, which are also viewable by typing ",(0,l.kt)("inlineCode",{parentName:"p"},"./agora-cl.sh validator wallet create --help"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Flag"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Usage"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--wallet-dir")),(0,l.kt)("td",{parentName:"tr",align:"left"},'Path to a wallet directory (default: "$HOME/AgoraValidators/agora-cl-wallet-v2")')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--keymanager-kind")),(0,l.kt)("td",{parentName:"tr",align:"left"},'Type of wallet to create, either "direct", "derived, or "remote" (default "derived")')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--wallet-password-file")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Path to a plain-text, password.txt file to lock your wallet")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--mnemonic-25th-word-file")),(0,l.kt)("td",{parentName:"tr",align:"left"},"(Advanced) Path to a plain-text, .txt file containing a 25th word passphrase for your mnemonic for HD wallets.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--skip-mnemonic-25th-word-check")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Allows for skipping the check for a mnemonic 25th word passphrase for HD wallets.")))),(0,l.kt)("p",null,"Here's a full example on how to create an HD wallet at ",(0,l.kt)("inlineCode",{parentName:"p"},"$HOME/myhdwallet")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./agora-cl.sh validator wallet create --wallet-dir=$HOME/myhdwallet --keymanager-kind=derived --wallet-password-file=password.txt\n")),(0,l.kt)("h3",{id:"wallet-recovery"},"Wallet recovery"),(0,l.kt)("p",null,"You can fully recover an HD wallet along with all its accounts from a 24-word english mnemonic phrase generated during the wallet's creation process (which you should have stored offline). To recover your HD wallet in Agora-cl, you can run"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./agora-cl.sh validator wallet recover\n")),(0,l.kt)("p",null,"Output"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-text"},"\u2714 Enter the wallet recovery phrase: layer write film stuff camp album strong ...\nEnter a wallet directory: /Users/johndoe/Library/AgoraValidators/.agora-cl-wallet-v2\nNew wallet password: *********\nConfirm password: *********\nEnter how many accounts you would like to recover: 2\n[2020-07-27 11:54:16]  INFO accounts: Successfully recovered HD wallet with 2 accounts. Please use accounts list to view details for your accounts. wallet-path=/Users/johndoe/Library/AgoraValidators/agora-cl-wallet-v2\n")),(0,l.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"Recovering many accounts")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"},(0,l.kt)("p",{parentName:"div"},"Your accounts are generated deterministically from your recovery phrase, so you had 100 validator accounts on the wallet you want to recover, you can easily do so in Agora-cl."))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Flag"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Usage"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--wallet-dir")),(0,l.kt)("td",{parentName:"tr",align:"left"},'Path to a wallet directory (default: "$HOME/AgoraValidators/agora-cl-wallet-v2")')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--num-accounts")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Total number of accounts to recover from the wallet (default 1)")))),(0,l.kt)("h3",{id:"list-validator-accounts"},"List validator accounts"),(0,l.kt)("p",null,"You can list all validator accounts in your HD wallet using the following command"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./agora-cl.sh validator accounts list\n")),(0,l.kt)("p",null,"Where you'll see the following output"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"INFO accounts: (wallet path) /Users/johndoe/Library/AgoraValidators/agora-cl-wallet-v2\n\nShowing **1** validator account\nView the eth1 deposit transaction data for your accounts by running `validator accounts list --show-deposit-data\n\npersonally-conscious-echidna\n[withdrawal public key] 0xa9c19b160cdc5c6dd74bf5a528d53b9a196ab8dda550e7e5858d84bf356952a310b826e269b9b462293f1c2812263161\n[validating public key] 0x971d780edfe98743f41cdcdba8521548fc343ffcd958e90968c4f1cc5a2e9b6ea11a984397c34c6cc13e9d4e8d14ce1e\n[created at] 16 minutes ago\n")),(0,l.kt)("p",null,"You can view the ",(0,l.kt)("inlineCode",{parentName:"p"},"deposit_data")," needed to send 32ETH to the Ethereum validator deposit contract for your validator accounts by optionally passing in a ",(0,l.kt)("inlineCode",{parentName:"p"},"--show-deposit-data")," flag as follows."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"./agora-cl.sh validator accounts list --show-deposit-data\n")),(0,l.kt)("p",null,"Where you'll see the following output"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"INFO accounts: (wallet path) /Users/johndoe/Library/AgoraValidators/agora-cl-wallet-v2\n\nShowing **1** validator account\n\npersonally-conscious-echidna\n[withdrawal public key] 0xa9c19b160cdc5c6dd74bf5a528d53b9a196ab8dda550e7e5858d84bf356952a310b826e269b9b462293f1c2812263161\n[validating public key] 0x971d780edfe98743f41cdcdba8521548fc343ffcd958e90968c4f1cc5a2e9b6ea11a984397c34c6cc13e9d4e8d14ce1e\n[created at] 16 minutes ago\n\n========================Deposit Data===============================\n\n0x2289511800000000000000000000000000000000000000000...\n\n===================================================================\n")),(0,l.kt)("p",null,"You can also run the ",(0,l.kt)("inlineCode",{parentName:"p"},"accounts list")," command ",(0,l.kt)("strong",{parentName:"p"},"non-interactively")," by using the following command line flags, which are also viewable by typing ",(0,l.kt)("inlineCode",{parentName:"p"},"./agora-cl.sh validator accounts list --help"),"."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Flag"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Usage"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--wallet-dir")),(0,l.kt)("td",{parentName:"tr",align:"left"},'Path to a wallet directory (default: "$HOME/AgoraValidators/agora-cl-wallet-v2").')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--wallet-password-file")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Path to plain-text file containing your wallet's password.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--show-deposit-data")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Display raw eth1 tx deposit data for validator accounts.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"--show-private-keys")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Display the private keys for validator accounts.")))),(0,l.kt)(i.M,{mdxType:"RequestUpdateWidget"}))}h.isMDXComponent=!0}}]);