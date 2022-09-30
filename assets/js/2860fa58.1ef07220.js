"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6789],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),h=o,m=d["".concat(s,".").concat(h)]||d[h]||p[h]||r;return n?a.createElement(m,l(l({ref:t},c),{},{components:n})):a.createElement(m,l({ref:t},c))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1262:(e,t,n)=>{n.d(t,{Z:()=>r});var a=n(7294),o=n(2263);const r=function(e){var t=e.children,n=e.fallback;return(0,o.Z)().isClient&&null!=t?a.createElement(a.Fragment,null,t()):n||null}},5505:(e,t,n)=>{n.d(t,{M:()=>r});var a=n(7294),o=n(1262),r=function(e){var t=e.commaDelimitedContributors,n=e.lastVerifiedDateString,r=e.lastVerifiedVersionString,l={Chris:"hewison-chris"},i=function(e){return a.createElement("a",{class:"header-badge",href:"https://github.com/"+l[e]},a.createElement("span",{class:"badge-avatar",style:{backgroundImage:"url('https://avatars.githubusercontent.com/"+l[e]+"')"}}),a.createElement("span",{class:"badge-label"},e))};return a.createElement(o.Z,null,(function(){return a.createElement("div",{class:"header-badges"},null!=t?t.split(",").map(i):null,function(e,t){if(null!=e&&null!=t)return a.createElement("a",{class:"header-badge"},a.createElement("span",{class:"badge-avatar emoji-avatar"},"\u2714\ufe0f"),a.createElement("span",{class:"badge-label"},"Last verified on ",a.createElement("strong",null,e)," using Agora-cl ",t))}(n,r),a.createElement("a",{class:"header-badge",href:"https://github.com/Bosagora/documentation/issues/new?title=Docs update request: "+new URL(window.location.href).pathname+"&body=Source: "+window.location.href+"%0A%0ARequest: (how can we help?)"},a.createElement("span",{class:"badge-avatar emoji-avatar"},"\u270f\ufe0f"),a.createElement("span",{class:"badge-label"},"Request an update")))}))}},1144:(e,t,n)=>{n.d(t,{M:()=>r});var a=n(7294),o=n(1262),r=function(e){return function(e){if(null==e)throw new TypeError("Cannot destructure undefined")}(e),a.createElement(o.Z,null,(function(){return a.createElement("div",{class:"update-request"},a.createElement("a",{href:"https://https://github.com/zeroone-boa/agora-cl-docs/issues/new?title=Docs update request: "+new URL(window.location.href).pathname+"&body=Source: "+window.location.href+"%0A%0ARequest: (how can we help?)"},"\ud83d\udc3c Request an update"))}))}},5447:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>c,default:()=>m,frontMatter:()=>u,metadata:()=>p,toc:()=>d});var a=n(7462),o=n(3366),r=(n(7294),n(3905)),l=n(5505),i=n(1144),s=["components"],u={id:"contribution-guidelines",title:"Contribute to Agora-cl's codebase",sidebar_label:"Contribute to Agora-cl's codebase"},c=void 0,p={unversionedId:"contribute/contribution-guidelines",id:"contribute/contribution-guidelines",isDocsHomePage:!1,title:"Contribute to Agora-cl's codebase",description:"There are a number of ways to help out the project for people of all skillsets and experience levels. If you are unsure where you may be best suited, stop by Telegram and a member of the team or community will be happy to answer questions and offer some direction.",source:"@site/docs/contribute/contribution-guidelines.md",sourceDirName:"contribute",slug:"/contribute/contribution-guidelines",permalink:"/docs/contribute/contribution-guidelines",editUrl:"https://github.com/zeroone-boa/agora-cl-docs/edit/master/website/docs/contribute/contribution-guidelines.md",version:"current",frontMatter:{id:"contribution-guidelines",title:"Contribute to Agora-cl's codebase",sidebar_label:"Contribute to Agora-cl's codebase"},sidebar:"docs",previous:{title:"Slashing",permalink:"/docs/concepts/slashing"},next:{title:"Golang principles",permalink:"/docs/contribute/golang-principles"}},d=[{value:"Getting Started",id:"getting-started",children:[{value:"Setting up your environment",id:"setting-up-your-environment",children:[]},{value:"Building and testing Agora-cl with Go",id:"building-and-testing-agora-cl-with-go",children:[]},{value:"Building and testing Agora-cl with Bazel",id:"building-and-testing-agora-cl-with-bazel",children:[]},{value:"Contributing to the Ethereum consensus API",id:"contributing-to-the-ethereum-consensus-api",children:[]},{value:"Making your first contribution",id:"making-your-first-contribution",children:[]}]}],h={toc:d};function m(e){var t=e.components,n=(0,o.Z)(e,s);return(0,r.kt)("wrapper",(0,a.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)(l.M,{mdxType:"HeaderBadgesWidget"}),(0,r.kt)("p",null,"There are a number of ways to help out the project for people of all skillsets and experience levels. If you are unsure where you may be best suited, stop by ",(0,r.kt)("a",{parentName:"p",href:"https://t.me/bosagora_eng"},(0,r.kt)("strong",{parentName:"a"},"Telegram"))," and a member of the team or community will be happy to answer questions and offer some direction."),(0,r.kt)("h2",{id:"getting-started"},"Getting Started"),(0,r.kt)("p",null,"Once you are a bit more familiar with the concepts behind Ethereum and are ready to write some code, head over and explore Agora-cl's ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zeroone-boa/agora-cl/issues"},"open issues on Github"),'. We recommend looking for issues tagged with the "Good First Issue" label if it is your first contribution. If you are still unsure about how to tackle a bug or a feature, our team is always available on ',(0,r.kt)("a",{parentName:"p",href:"https://t.me/bosagora_eng"},"Telegram"),". Sign in to your Github account, then navigate to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zeroone-boa/agora-cl/"},"the official Agora-cl repository"),". In the upper right hand corner of the page, click the 'Fork' button. This will create a copy of the Agora-cl repository on your account that can be edited for pull requests."),(0,r.kt)("h3",{id:"setting-up-your-environment"},"Setting up your environment"),(0,r.kt)("p",null,"To develop Agora-cl, you'll need the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"A modern windows, osx, or linux operating system"),(0,r.kt)("li",{parentName:"ul"},"Go 1.18 version installed, download and install ",(0,r.kt)("a",{parentName:"li",href:"https://golang.org/dl/"},"here")),(0,r.kt)("li",{parentName:"ul"},"The ",(0,r.kt)("inlineCode",{parentName:"li"},"git")," package installed"),(0,r.kt)("li",{parentName:"ul"},"A code editor such as ",(0,r.kt)("a",{parentName:"li",href:"https://code.visualstudio.com/download"},"Visual Studio Code")," or Jetbrains' ",(0,r.kt)("a",{parentName:"li",href:"https://www.jetbrains.com/go/"},"Goland IDE")," or your preferred one")),(0,r.kt)("p",null,"First, create a local clone of Agora-cl."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"$ git clone https://github.com/zeroone-boa/agora-cl.git && cd agora-cl\n")),(0,r.kt)("p",null,"Then link your local repository to your newly created fork."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"$ git remote add myfork https://github.com/<your_github_user_name>/agora-cl.git\n")),(0,r.kt)("p",null,"Finally, ensure Go is installed and working on your machine:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"$ go version\n")),(0,r.kt)("p",null,"Example output:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"go version go1.16 darwin/amd64\n")),(0,r.kt)("h3",{id:"building-and-testing-agora-cl-with-go"},"Building and testing Agora-cl with Go"),(0,r.kt)("p",null,"The Agora-cl project is a large monorepo containing all sorts of tools and services that implement the Ethereum protocol. We use Go for everything we do in development, helping everyone have reproducible builds. If you want to build the whole project, you can run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"$ go build -v ./...\n")),(0,r.kt)("p",null,"This will build the project by downloading dependencies as Go modules."),(0,r.kt)("h4",{id:"running-go-tests"},"Running Go tests"),(0,r.kt)("p",null,"All code we check into our repo needs to have sufficient tests to ensure it is maintainable and works as expected."),(0,r.kt)("p",null,"Many tests rely on the Bazel build system, thus testing with ",(0,r.kt)("inlineCode",{parentName:"p"},"go test")," may not work.\nSee the ",(0,r.kt)("a",{parentName:"p",href:"#building-and-tessting-agora-cl-with-bazel"},"next section")," for instructions on testing with agora-cl."),(0,r.kt)("h3",{id:"building-and-testing-agora-cl-with-bazel"},"Building and testing Agora-cl with Bazel"),(0,r.kt)("p",null,"The Agora-cl project is a large monorepo containing all sorts of tools and services that implement the Ethereum consensus protocol. We use the ",(0,r.kt)("a",{parentName:"p",href:"https://bazel.build"},"Bazel")," build system created by Google for everything we do, helping everyone have reproducible builds. If you want to build the Agora chain or validator using Bazel, you can run the commands:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"$ bazel build //beacon-chain:beacon-chain\n$ bazel build //validator:validator\n")),(0,r.kt)("p",null,"Other binaries in our codebase use a similar command to build. If you want to run a particular built binary, you can use the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ bazel run //beacon-chain:beacon-chain -- --help\n")),(0,r.kt)("p",null,"Where you can specify any amount of command line arguments you need based on the available flags of the item you're running."),(0,r.kt)("p",null,"In order to write code for the Agora-cl codebase comfortably with Bazel, we recommend using either ",(0,r.kt)("a",{parentName:"p",href:"https://code.visualstudio.com/download"},"Visual Studio Code")," with its ",(0,r.kt)("a",{parentName:"p",href:"https://marketplace.visualstudio.com/items?itemName=BazelBuild.vscode-bazel"},"Bazel plugin"),", or any ",(0,r.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/"},"Jetbrains IDE")," with the ",(0,r.kt)("a",{parentName:"p",href:"https://plugins.jetbrains.com/plugin/8609-bazel"},"Bazel plugin")," (",(0,r.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/go/"},"Goland")," is a great choice, used by most of the Prysmatic Labs team)."),(0,r.kt)("p",null,"You can also find various other types of IDE support for Bazel in the official Bazel documentation ",(0,r.kt)("a",{parentName:"p",href:"https://docs.bazel.build/versions/master/ide.html"},"here"),". Once you have your coding environment set-up, you'll be well-equipped to contribute to Ethereum!"),(0,r.kt)("h4",{id:"running-bazel-tests"},"Running Bazel tests"),(0,r.kt)("p",null,"All code we check into our repo needs to have sufficient tests to ensure it is maintainable and works as expected. We use bazel to run all of our test suites in Agora-cl. If there is a particular subfolder you want to test, such as ",(0,r.kt)("inlineCode",{parentName:"p"},"beacon-chain/node"),", you can run the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"$ bazel test //beacon-chain/node:go_default_test\n")),(0,r.kt)("p",null,"For running a specific test, for example, a test called ",(0,r.kt)("inlineCode",{parentName:"p"},"TestNode_GetPeers")," inside of ",(0,r.kt)("inlineCode",{parentName:"p"},"beacon-chain/node/node_test.go"),", you can use Bazel to filter it out:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"$ bazel test //beacon-chain/rpc/agora-cl/v1alpha1/node:go_default_test --test_output=streamed --test_filter=TestNode_GetPeers\n")),(0,r.kt)("p",null,"For the list of all available flags to the ",(0,r.kt)("inlineCode",{parentName:"p"},"bazel test")," command, you can see the reference documentation ",(0,r.kt)("a",{parentName:"p",href:"https://docs.bazel.build/versions/master/command-line-reference.html#test"},"here"),"."),(0,r.kt)("p",null,"You can also run our full, end-to-end test suite with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"$ bazel test //testing/endtoend:go_default_test\n")),(0,r.kt)("h4",{id:"adding-dependencies"},"Adding dependencies"),(0,r.kt)("p",null,"If you want to add a new dependency to Agora-cl, please adhere to the guidelines found in our ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zeroone-boa/agora-cl/blob/master/DEPENDENCIES.md"},"DEPENDENCIES.md")," document."),(0,r.kt)("h3",{id:"contributing-to-the-ethereum-consensus-api"},"Contributing to the Ethereum consensus API"),(0,r.kt)("p",null,"The Ethereum consensus API implemented by Agora-cl is maintained as a separate repository than Agora-cl. You can read more about how to contribute specifically to the API ",(0,r.kt)("a",{parentName:"p",href:"/docs/how-agora-cl-works/agora-cl-public-api#contributing"},"here"),"."),(0,r.kt)("h3",{id:"making-your-first-contribution"},"Making your first contribution"),(0,r.kt)("p",null,"Each time you begin a set of changes, ensure that you are working on a new branch that you have created as opposed to the ",(0,r.kt)("inlineCode",{parentName:"p"},"master")," of your local repository. By keeping your changes segregated in this branch, merging your changes into the main repository later will be much simpler for the team."),(0,r.kt)("p",null,"To create a local branch for ",(0,r.kt)("inlineCode",{parentName:"p"},"git")," to checkout, issue the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"$ git checkout -b feature-in-progress-branch\n")),(0,r.kt)("p",null,"To checkout a branch you have already created:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"$ git checkout feature-in-progress-branch\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Preparing your commit")),(0,r.kt)("p",null,"To fetch changes to the Agora-cl repository since your last session:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"$ git fetch origin\n")),(0,r.kt)("p",null,"Then synchronize your master branch:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"$ git pull origin master\n")),(0,r.kt)("p",null,"To stage the changed files that are be committed, issue the command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"$ git add --all\n")),(0,r.kt)("p",null,"Once you are ready to make a commit, you can do so with:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"$ git commit  -m \u201cMessage to explain what the commit covers\u201d\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"\u2013amend")," flag can be used as well to include previous commits that have not yet been pushed to an upstream repository."),(0,r.kt)("p",null,"If there are conflicts between your edits and those made by others since you started work Git will ask you to resolve them. To find out which files have conflicts, run:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"$ git status\n")),(0,r.kt)("p",null,"Open those files, and you will see lines inserted by Git that identify the conflicts:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"<<<<<< HEAD\nOther developers\u2019 version of the conflicting code\n======\nYour version of the conflicting code\n'>>>>> Your Commit\n")),(0,r.kt)("p",null,"The code from the Agora-cl repository is inserted between ",(0,r.kt)("inlineCode",{parentName:"p"},"<<<")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"===")," while the change you have made is inserted between ",(0,r.kt)("inlineCode",{parentName:"p"},"===")," and ",(0,r.kt)("inlineCode",{parentName:"p"},">>>>"),". Remove everything between ",(0,r.kt)("inlineCode",{parentName:"p"},"<<<<")," and ",(0,r.kt)("inlineCode",{parentName:"p"},">>>")," and replace it with code that resolves the conflict. Repeat the process for all files listed by Git status to have conflicts."),(0,r.kt)("p",null,"When you are ready, use git push to move your local copy of the changes to your fork of the repository on Github."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-text"},"$ git push myfork feature-in-progress-branch\n")),(0,r.kt)("h4",{id:"opening-a-pull-request"},"Opening a pull request"),(0,r.kt)("p",null,"Navigate to your fork of the repository on Github. In the upper left where the current branch is listed, change the branch to your newly created one. Open the files that you have worked on and ensure they include your changes."),(0,r.kt)("p",null,"Navigate to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zeroone-boa/agora-cl"},"https://github.com/zeroone-boa/agora-cl")," and click on the new pull request button. In the \u201cbase\u201d box on the left, leave the default selection \u201cbase master\u201d, the branch that you want your changes to be applied to. In the \u201ccompare\u201d box on the right, select the branch containing the changes you want to apply. You will then be asked to answer a few questions about your pull request. Pull requests should have enough context about what you are working on, how you are solving a problem, and reference all necessary information for your reviewers to help."),(0,r.kt)("p",null,"After you complete the questionnaire, the pull request will appear in the list of pull requests at ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/zeroone-boa/agora-cl/pulls"},"https://github.com/zeroone-boa/agora-cl/pulls"),"."),(0,r.kt)("h4",{id:"following-up"},"Following up"),(0,r.kt)("p",null,"Core developers may ask questions and request that you make edits. If you set notifications at the top of the page to \u201cnot watching,\u201d you will still be notified by email whenever someone comments on the page of a pull request you have created. If you are asked to modify your pull request, edit your local branch, push up your fixes, then leave a comment to notify the original reviewer that the pull request is ready for further review."),(0,r.kt)(i.M,{mdxType:"RequestUpdateWidget"}))}m.isMDXComponent=!0}}]);