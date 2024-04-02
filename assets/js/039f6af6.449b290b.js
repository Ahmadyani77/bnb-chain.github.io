"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[445],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=a,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},47772:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={},i="Overview",s={unversionedId:"mev/overview",id:"mev/overview",title:"Overview",description:"The BSC network has introduced the [Builder API",source:"@site/docs/mev/overview.md",sourceDirName:"mev",slug:"/mev/overview",permalink:"/docs/mev/overview",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/mev/overview.md",tags:[],version:"current",frontMatter:{},sidebar:"bscSideBar",previous:{title:"Run Validator",permalink:"/docs/validator/run-val"},next:{title:"Integration Guide for Validator",permalink:"/docs/mev/validator-integration"}},l={},c=[{value:"What is MEV and PBS",id:"what-is-mev-and-pbs",level:2},{value:"How it Works on BSC",id:"how-it-works-on-bsc",level:2},{value:"What is More",id:"what-is-more",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(d,(0,r.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"overview"},"Overview"),(0,a.kt)("p",null,"The BSC network has introduced the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/BEPs/blob/master/BEPs/BEP322.md"},"Builder API\nSpecification"),"\nto establish a fair and unified MEV market. Previously, BSC clients\nlacked native support for validators to integrate with multiple MEV\nproviders at once. The network became unstable because of the many\ndifferent versions of the client software being used. The latest BSC\nclient adopts the ",(0,a.kt)("a",{parentName:"p",href:"https://ethereum.org/en/roadmap/pbs/"},"Proposer-Builder Separation")," model.\nWithin this unified framework, several aspects of the BSC network have\nbeen improved:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Stability"),": Validators only need to use the official client to seamlessly integrate with various Builders.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Economy"),": Builders that can enter without permission promote healthy market competition. Validators can extract\nmore value by integrating with more builders, which benefits delegators as well.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Transparency"),": This specification aims to bring transparency to the BSC MEV market, exposing profit distribution\namong stakeholders to the public."))),(0,a.kt)("h2",{id:"what-is-mev-and-pbs"},"What is MEV and PBS"),(0,a.kt)("p",null,"MEV, also known as Maximum (or Miner) Extractable Value, can be\ndescribed as the measure of total value that may be extracted from\ntransaction ordering. Common examples include arbitraging swaps on\ndecentralized exchanges or identifying opportunities to liquidate DeFi\npositions. Maximizing MEV requires advanced technical expertise and\ncustom software integrated into regular validators. The returns are\nlikely higher with centralized operators."),(0,a.kt)("p",null,"Proposer-builder separation(PBS) solves this problem by reconfiguring\nthe economics of MEV. Block builders create blocks and submit them to\nthe block proposer, and the block proposer simply chooses the most\nprofitable one, paying a fee to the block builder. This means even if a\nsmall group of specialized block builders dominate MEV extraction, the\nreward still goes to any validator on the network."),(0,a.kt)("h2",{id:"how-it-works-on-bsc"},"How it Works on BSC"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"MEV on BSC",src:n(15292).Z,width:"1007",height:"383"})),(0,a.kt)("p",null,"The figure above illustrates the basic workflow of PBS operating on the\nBSC network."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"MEV Searchers are independent network participants who detect\nprofitable MEV opportunities and submit their transactions to\nbuilders. Transactions from searchers are usually bundled together\nand included in a block, or none of them will be included.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The builder collects transactions from various sources to create an\nunsealed block and offer it to the block proposer. The builder\nwill specify in the request the amount of fees the proposer needs\nto pay to the builder if this block is adopted. The unsealed block\nfrom the builder is also called a ",(0,a.kt)("strong",{parentName:"p"},"block bid")," as it may request\ntips.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The proposer chooses the most profitable block from multiple\nbuilders, and pays the fee to the builder by appending a payment\ntransaction at the end of the block."))),(0,a.kt)("p",null,"A new component called ",(0,a.kt)("strong",{parentName:"p"},"Sentry")," has been introduced to enhance\nnetwork security and account isolation. It assists proposers in\ncommunicating with builders and enables payment processing."),(0,a.kt)("h2",{id:"what-is-more"},"What is More"),(0,a.kt)("p",null,"The PBS model on BSC differs in several aspects from its implementation\non Ethereum. This is primarily due to\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Different Trust Model"),". Validators in the BNB Smart Chain are\nconsidered more trustworthy, as it requires substantial BNB\ndelegation and must maintain a high reputation. This stands in\ncontrast to Ethereum, where becoming an Ethereum validator is much\neasier, the barrier to becoming a validator is very low (i.e., 32\nETH).")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Different Consensus Algorithms.")," In Ethereum, a block header is\ntransferred from a builder to a validator for signing, allowing\nthe block to be broadcasted to the network without disclosing the\ntransactions to the validator. In contrast, in BSC, creating a\nvalid block header requires executing transactions and system\ncontract calls (such as transferring reward and depositing to the\nvalidator set contract), making it impossible for builders to\npropose the whole block.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("strong",{parentName:"p"},"Different Blocking Time.")," With a shorter block time of 3 seconds\nin BSC compared to Ethereum's 12 seconds, designing for time\nefficiency becomes crucial."))),(0,a.kt)("p",null,"These differences have led to different designs on BSC's PBS regarding\npayment, interaction, and APIs. For more design philosophy, please refer\nto ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/BEPs/blob/master/BEPs/BEP322.md"},"BEP322:Builder API Specification for BNB Smart Chain"),"."))}u.isMDXComponent=!0},15292:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/mev-overview-2b6e328da9607761528530d798b64d6d.png"}}]);