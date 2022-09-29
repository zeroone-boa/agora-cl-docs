"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4125],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),l=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=l(a),g=r,m=d["".concat(s,".").concat(g)]||d[g]||u[g]||o;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var l=2;l<o;l++)i[l]=a[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},1262:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),r=a(2263);const o=function(e){var t=e.children,a=e.fallback;return(0,r.Z)().isClient&&null!=t?n.createElement(n.Fragment,null,t()):a||null}},5505:(e,t,a)=>{a.d(t,{M:()=>o});var n=a(7294),r=a(1262),o=function(e){var t=e.commaDelimitedContributors,a=e.lastVerifiedDateString,o=e.lastVerifiedVersionString,i={Chris:"hewison-chris"},c=function(e){return n.createElement("a",{class:"header-badge",href:"https://github.com/"+i[e]},n.createElement("span",{class:"badge-avatar",style:{backgroundImage:"url('https://avatars.githubusercontent.com/"+i[e]+"')"}}),n.createElement("span",{class:"badge-label"},e))};return n.createElement(r.Z,null,(function(){return n.createElement("div",{class:"header-badges"},null!=t?t.split(",").map(c):null,function(e,t){if(null!=e&&null!=t)return n.createElement("a",{class:"header-badge"},n.createElement("span",{class:"badge-avatar emoji-avatar"},"\u2714\ufe0f"),n.createElement("span",{class:"badge-label"},"Last verified on ",n.createElement("strong",null,e)," using Agora-cl ",t))}(a,o),n.createElement("a",{class:"header-badge",href:"https://github.com/Bosagora/documentation/issues/new?title=Docs update request: "+new URL(window.location.href).pathname+"&body=Source: "+window.location.href+"%0A%0ARequest: (how can we help?)"},n.createElement("span",{class:"badge-avatar emoji-avatar"},"\u270f\ufe0f"),n.createElement("span",{class:"badge-label"},"Request an update")))}))}},1144:(e,t,a)=>{a.d(t,{M:()=>o});var n=a(7294),r=a(1262),o=function(e){return function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e),n.createElement(r.Z,null,(function(){return n.createElement("div",{class:"update-request"},n.createElement("a",{href:"https://https://github.com/zeroone-boa/agora-cl-docs/issues/new?title=Docs update request: "+new URL(window.location.href).pathname+"&body=Source: "+window.location.href+"%0A%0ARequest: (how can we help?)"},"\ud83d\udc3c Request an update"))}))}},2493:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>p,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>d});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),i=a(5505),c=a(1144),s=["components"],l={id:"secure-grpc",title:"Secure gRPC connections",sidebar_label:"Secure gRPC connections"},p=void 0,u={unversionedId:"agora-cl-usage/secure-grpc",id:"agora-cl-usage/secure-grpc",isDocsHomePage:!1,title:"Secure gRPC connections",description:"This document will help advanced users create and configure TLS certificates to allow for secure gRPC connections to their beacon nodes.",source:"@site/docs/agora-cl-usage/secure-grpc.md",sourceDirName:"agora-cl-usage",slug:"/agora-cl-usage/secure-grpc",permalink:"/docs/agora-cl-usage/secure-grpc",editUrl:"https://github.com/zeroone-boa/agora-cl-docs/edit/master/website/docs/agora-cl-usage/secure-grpc.md",version:"current",frontMatter:{id:"secure-grpc",title:"Secure gRPC connections",sidebar_label:"Secure gRPC connections"},sidebar:"docs",previous:{title:"Use Agora-cl's web UI",permalink:"/docs/agora-cl-usage/web-interface"},next:{title:"Configure ports and firewalls",permalink:"/docs/agora-cl-usage/p2p-host-ip"}},d=[{value:"Generating self-signed TLS certificates",id:"generating-self-signed-tls-certificates",children:[{value:"Using the new certificates",id:"using-the-new-certificates",children:[]}]}],g={toc:d};function m(e){var t=e.components,a=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)(i.M,{mdxType:"HeaderBadgesWidget"}),(0,o.kt)("p",null,"This document will help advanced users create and configure TLS certificates to allow for secure gRPC connections to their beacon nodes."),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"Pro-Tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"The only practical use for using secure gRPC is in the case of connecting a Agora node that is being hosted remotely. For configurations in which the Agora node and validator reside on the same host system, these steps are not required nor recommended."))),(0,o.kt)("p",null,"A Agora node, by default, hosts a gRPC server on host ",(0,o.kt)("inlineCode",{parentName:"p"},"127.0.0.1")," and port 4000, allowing any other process, such as a validator client, to establish an insecure connection on that port. The Agora node can also allow for secure, TLS connections if ran with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--tls-cert=/path/to/cert.pem")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"--tls-key=/path/to/cert.key")," flags, ensuring all connections via gRPC are secured."),(0,o.kt)("p",null,"A validator client will attempt to connect to a Agora node by default with an insecure connection, but can be a secure TLS connection by using a ",(0,o.kt)("inlineCode",{parentName:"p"},"--tls-cert=/path/to/cert.pem")," flag, utilising either a server pem certificate or a ",(0,o.kt)("inlineCode",{parentName:"p"},"ca.cert")," certificate authority file. Assuming a TLS certificate has already been set up with a trusted authority for your Agora node, use the commands below to launch the node and validator. Otherwise, review the following section on creating your own self-signed certificates."),(0,o.kt)("p",null,"To use secure gRPC with a Agora node:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"./agora-cl.sh agora-cl node --tls-cert=server.pem --tls-key=server.key\n")),(0,o.kt)("p",null,"and to use secure gRPC with a validator:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"./agora-cl.sh validator --tls-cert=server.pem\n")),(0,o.kt)("p",null,"Alternatively, a ",(0,o.kt)("inlineCode",{parentName:"p"},"ca.cert")," certificate authority file can be passed to the validator to attempt a connection without requiring the server's certificate itself:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"./agora-cl.sh validator --tls-cert=ca.cert\n")),(0,o.kt)("p",null,"This will generate an output like so:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-text"},"[2020-06-15 17:09:13]  INFO validator: Established secure gRPC connection\n")),(0,o.kt)("h2",{id:"generating-self-signed-tls-certificates"},"Generating self-signed TLS certificates"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"NOTICE:")," Creating a self-signed certificate is fine for simple TLS connections, though if the deployment will see public usage, it is always recommended to obtain valid certificates from a trusted certificate authority instead.")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Install ",(0,o.kt)("a",{parentName:"p",href:"https://www.openssl.org/"},"openssl")," for your operating system.")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a root signing key:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},"openssl genrsa -out ca.key 4096\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a self-signed root certificate"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},'openssl req -new -x509 -key ca.key -sha256 -subj "/C=US/ST=NJ/O=CA, Inc." -days 365 -out ca.cert\n'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create a key certificate for the Agora node:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},"openssl genrsa -out beacon.key 4096\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Generate a signing CSR by first creating a  ",(0,o.kt)("inlineCode",{parentName:"p"},"certificate.conf")," configuration file containing the specifications. For reference, you can use something as follows with any of its fields customized to your needs:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},"[req]\ndefault_bits = 4096\nprompt = no\ndefault_md = sha256\nreq_extensions = req_ext\ndistinguished_name = dn\n[dn]\nC = US\nST = NJ\nO = Test, Inc.\nCN = localhost\n[req_ext]\nsubjectAltName = @alt_names\n[alt_names]\nDNS.1 = localhost\nIP.1 = ::1\nIP.2 = 127.0.0.1\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Generate the signing CSR:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},"openssl req -new -key beacon.key -out beacon.csr -config certificate.conf\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Generate a certificate for the Agora node:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},"openssl x509 -req -in beacon.csr -CA ca.cert -CAkey ca.key -CAcreateserial -out beacon.pem -days 365 -sha256 -extfile certificate.conf -extensions req_ext\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Verify your certificate is correct with openssl:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},"openssl x509 -in beacon.pem -text -noout\n")),(0,o.kt)("p",{parentName:"li"},"This will generate an output like so:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},"Certificate:\n    Data:\n        Version: 3 (0x2)\n        Serial Number: 12510557889986420634 (0xad9e6e1dfe99df9a)\n    Signature Algorithm: sha256WithRSAEncryption\n        Issuer: C=US, ST=NJ, O=CA, Inc.\n        Validity\n            Not Before: Jun 15 21:12:24 2020 GMT\n            Not After : Jun 15 21:12:24 2021 GMT\n        Subject: C=US, ST=NJ, O=Test, Inc., CN=localhost\n        Subject Public Key Info:\n            Public Key Algorithm: rsaEncryption\n                Public-Key: (4096 bit)\n")))),(0,o.kt)("h3",{id:"using-the-new-certificates"},"Using the new certificates"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Use the certificates to launch the Agora node:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},"./agora-cl.sh agora-cl node --tls-cert=beacon.pem --tls-key=beacon.key\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"As well as a validator:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},"./agora-cl.sh validator --tls-cert=ca.cert\n")),(0,o.kt)("p",{parentName:"li"},"This will generate an output like so:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-text"},"[2020-06-15 17:09:13]  INFO validator: Established secure gRPC connection\n")))),(0,o.kt)(c.M,{mdxType:"RequestUpdateWidget"}))}m.isMDXComponent=!0}}]);