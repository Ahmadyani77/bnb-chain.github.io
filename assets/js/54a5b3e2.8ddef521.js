"use strict";(self.webpackChunkbeta_BNB_Docs=self.webpackChunkbeta_BNB_Docs||[]).push([[5174],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),u=r,m=d["".concat(l,".").concat(u)]||d[u]||h[u]||o;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},73782:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var a=n(83117),r=(n(67294),n(3905));const o={sidebar_label:"Using HardHat",hide_table_of_contents:!1,sidebar_position:2},i="Using Hardhat for Deploying Smart Contracts on BSC",s={unversionedId:"hardhat-new",id:"hardhat-new",title:"Using Hardhat for Deploying Smart Contracts on BSC",description:"In this tutorial, we explain step-by-step how to create, compile and deploy a simple smart contract on the BSC Testnet using Hardhat.",source:"@site/docs/hardhat-new.md",sourceDirName:".",slug:"/hardhat-new",permalink:"/docs/hardhat-new",draft:!1,editUrl:"https://github.com/bnb-chain/bnb-chain.github.io/blob/master/docs/hardhat-new.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_label:"Using HardHat",hide_table_of_contents:!1,sidebar_position:2},sidebar:"bscSideBar",previous:{title:"Using Truffle",permalink:"/docs/truffle-new"},next:{title:"Using Replit",permalink:"/docs/replit"}},l={},c=[{value:"What is Hardhat",id:"what-is-hardhat",level:2},{value:"Setting up the development environment",id:"setting-up-the-development-environment",level:2},{value:"Pre-requisites",id:"pre-requisites",level:3},{value:"Create A Project",id:"create-a-project",level:2},{value:"Create Smart Contract",id:"create-smart-contract",level:2},{value:"Configure Hardhat for BSC",id:"configure-hardhat-for-bsc",level:2},{value:"Compile Smart Contract",id:"compile-smart-contract",level:2},{value:"Deploy Smart Contract on BSC Network",id:"deploy-smart-contract-on-bsc-network",level:2},{value:"Verify with Hardhat",id:"verify-with-hardhat",level:2},{value:"Install the plugin",id:"install-the-plugin",level:3},{value:"Configure the EthereScan plugin in hardhat.config.js",id:"configure-the-etherescan-plugin-in-hardhatconfigjs",level:3},{value:"Verify Command",id:"verify-command",level:3},{value:"Conclusion",id:"conclusion",level:2}],p={toc:c},d="wrapper";function h(e){let{components:t,...n}=e;return(0,r.kt)(d,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"using-hardhat-for-deploying-smart-contracts-on-bsc"},"Using Hardhat for Deploying Smart Contracts on BSC"),(0,r.kt)("p",null,"In this tutorial, we explain step-by-step how to create, compile and deploy a simple smart contract on the BSC Testnet using Hardhat."),(0,r.kt)("h2",{id:"what-is-hardhat"},"What is Hardhat"),(0,r.kt)("p",null,"Hardhat is a development environment to compile, deploy, test, and debug your smart contract."),(0,r.kt)("h2",{id:"setting-up-the-development-environment"},"Setting up the development environment"),(0,r.kt)("p",null,"There are a few technical requirements before we start. "),(0,r.kt)("h3",{id:"pre-requisites"},"Pre-requisites"),(0,r.kt)("p",null,"There are a few technical requirements before we start as listed below:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node.js v10+ LTS and npm")," (comes with Node)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://git-scm.com/"},"Git")),(0,r.kt)("li",{parentName:"ul"},"Create an empty project ",(0,r.kt)("inlineCode",{parentName:"li"},"npm init --yes")),(0,r.kt)("li",{parentName:"ul"},"Once your project is ready, run ",(0,r.kt)("inlineCode",{parentName:"li"},"npm install --save-dev hardhat")," to install Hardhat."),(0,r.kt)("li",{parentName:"ul"},"Install hardhat toolbox ",(0,r.kt)("inlineCode",{parentName:"li"},"npm install @nomicfoundation/hardhat-toolbox")),(0,r.kt)("li",{parentName:"ul"},"To use your local installation of Hardhat, you need to use ",(0,r.kt)("inlineCode",{parentName:"li"},"npx")," to run it (i.e. ",(0,r.kt)("inlineCode",{parentName:"li"},"npx hardhat"),").")),(0,r.kt)("h2",{id:"create-a-project"},"Create A Project"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"To create your Hardhat project run ",(0,r.kt)("inlineCode",{parentName:"li"},"npx hardhat")," in your project folder to intialize your project. "),(0,r.kt)("li",{parentName:"ul"},"Select ",(0,r.kt)("inlineCode",{parentName:"li"},"Create an empty hardhat.config.js")," with your keyboard and hit enter.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ npx hardhat\n888    888                      888 888               888\n888    888                      888 888               888\n888    888                      888 888               888\n8888888888  8888b.  888d888 .d88888 88888b.   8888b.  888888\n888    888     "88b 888P"  d88" 888 888 "88b     "88b 888\n888    888 .d888888 888    888  888 888  888 .d888888 888\n888    888 888  888 888    Y88b 888 888  888 888  888 Y88b.\n888    888 "Y888888 888     "Y88888 888  888 "Y888888  "Y888\n\nWelcome to Hardhat v2.10.1\n\n\u221a What do you want to do? \xb7 Create a JavaScript project\n\u221a Hardhat project root: \xb7  Project-Directory\n\u221a Do you want to add a .gitignore? (Y/n) \xb7 y\n\nYou need to install these dependencies to run the sample project:\nnpm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead.\n  npm install --save-dev "hardhat@^2.10.1" "@nomicfoundation/hardhat-toolbox@^1.0.1"\n\nProject created\n\nSee the README.md file for some example tasks you can run\n\nGive Hardhat a star on Github if you\'re enjoying it!\n\n     https://github.com/NomicFoundation/hardhat\n')),(0,r.kt)("p",null,"When Hardhat is run, it searches for the closest ",(0,r.kt)("inlineCode",{parentName:"p"},"hardhat.config.js")," file starting from the current working directory. This file normally lives in the root of your project and an empty ",(0,r.kt)("inlineCode",{parentName:"p"},"hardhat.config.js")," is enough for Hardhat to work. The entirety of your setup is contained in this file."),(0,r.kt)("h2",{id:"create-smart-contract"},"Create Smart Contract"),(0,r.kt)("p",null,"You can write your own smart contract or download the ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/bnb-chain/bsc-genesis-contract/blob/master/contracts/bep20_template/BEP20Token.template"},"BEP20 token smart contract template"),", place it in the ",(0,r.kt)("inlineCode",{parentName:"p"},"contracts")," directory of your project and remane it as ",(0,r.kt)("inlineCode",{parentName:"p"},"BEP20Token.sol"),"."),(0,r.kt)("h2",{id:"configure-hardhat-for-bsc"},"Configure Hardhat for BSC"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Go to ",(0,r.kt)("inlineCode",{parentName:"li"},"hardhat.config.js")),(0,r.kt)("li",{parentName:"ul"},"Update the  config with bsc-network-crendentials.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'require("@nomicfoundation/hardhat-toolbox");\n\nconst { mnemonic } = require(\'./secrets.json\');\n\n// This is a sample Hardhat task. To learn how to create your own go to\n// https://hardhat.org/guides/create-task.html\ntask("accounts", "Prints the list of accounts", async () => {\n  const accounts = await ethers.getSigners();\n\n  for (const account of accounts) {\n    console.log(account.address);\n  }\n});\n\n// You need to export an object to set up your config\n// Go to https://hardhat.org/config/ to learn more\n\n/**\n * @type import(\'hardhat/config\').HardhatUserConfig\n */\nmodule.exports = {\n  defaultNetwork: "mainnet",\n  networks: {\n    localhost: {\n      url: "http://127.0.0.1:8545"\n    },\n    hardhat: {\n    },\n    testnet: {\n      url: "https://data-seed-prebsc-1-s1.binance.org:8545",\n      chainId: 97,\n      gasPrice: 20000000000,\n      accounts: {mnemonic: mnemonic}\n    },\n    mainnet: {\n      url: "https://bsc-dataseed.binance.org/",\n      chainId: 56,\n      gasPrice: 20000000000,\n      accounts: {mnemonic: mnemonic}\n    }\n  },\n  solidity: {\n  version: "0.8.9",\n  settings: {\n    optimizer: {\n      enabled: true\n    }\n   }\n  },\n  paths: {\n    sources: "./contracts",\n    tests: "./test",\n    cache: "./cache",\n    artifacts: "./artifacts"\n  },\n  mocha: {\n    timeout: 20000\n  }\n};\n\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"    It requires mnemonic to be passed in for Provider, this is the seed phrase for the account you'd like to deploy from. Create a new `secrets.json` file in root directory and enter your 12 word mnemonic seed phrase to get started. To get the seedwords from metamask wallet you can go to Metamask Settings, then from the menu choose Security and Privacy where you will see a button that says reveal seed words.\n")),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},'Sample secrets.json\n\n{\n    "mnemonic": "Your_12_Word_MetaMask_Seed_Phrase"\n}\n'))),(0,r.kt)("h2",{id:"compile-smart-contract"},"Compile Smart Contract"),(0,r.kt)("p",null,"To compile a Hardhat project, change to the root of the directory where the project is located and then type the following into a terminal:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npx hardhat compile\n")),(0,r.kt)("h2",{id:"deploy-smart-contract-on-bsc-network"},"Deploy Smart Contract on BSC Network"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Copy and paste the following content into the ",(0,r.kt)("inlineCode",{parentName:"li"},"scripts/deploy.js")," file.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'async function main() {\n  const [deployer] = await ethers.getSigners();\n\n  console.log("Deploying contracts with the account:", deployer.address);\n\n  console.log("Account balance:", (await deployer.getBalance()).toString());\n\n  const Token = await ethers.getContractFactory("BEP20Token"); //Replace with name of your smart contract\n  const token = await Token.deploy();\n\n  console.log("Token address:", token.address);\n}\n\nmain()\n  .then(() => process.exit(0))\n  .catch((error) => {\n    console.error(error);\n    process.exit(1);\n  });\n\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Run this command in root of the project directory:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"$  npx hardhat run --network testnet scripts/deploy.js\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Sample Output")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ npx hardhat run --network testnet scripts/deploy.js\nDeploying contracts with the account: 0x27cf2CEAcdedce834f1673005Ed1C60efA63c081\nAccount balance: 100721709119999208161\nToken address: 0xbF39886B4F91F5170934191b0d96Dd277147FBB2\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Remember your address, transaction_hash and other details provided would differ, Above is just to provide an idea of structure.")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Congratulations!")," You have successfully deployed BEP20 Smart Contract. Now you can interact with the Smart Contract."),(0,r.kt)("p",null,"You can check the deployment status here: ",(0,r.kt)("a",{parentName:"p",href:"https://bscscan.com/"},"https://bscscan.com/")," or ",(0,r.kt)("a",{parentName:"p",href:"https://testnet.bscscan.com/"},"https://testnet.bscscan.com/")),(0,r.kt)("h2",{id:"verify-with-hardhat"},"Verify with Hardhat"),(0,r.kt)("p",null,"Hardhat has an Etherscan plugin: ",(0,r.kt)("a",{parentName:"p",href:"https://hardhat.org/plugins/nomiclabs-hardhat-etherscan.html"},"Hardhat Etherscan plugin")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: Hardhat was previously Buidler.")),(0,r.kt)("h3",{id:"install-the-plugin"},"Install the plugin"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"npm install --save-dev @nomiclabs/hardhat-etherscan\n")),(0,r.kt)("h3",{id:"configure-the-etherescan-plugin-in-hardhatconfigjs"},"Configure the EthereScan plugin in hardhat.config.js"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Step1: Add ",(0,r.kt)("inlineCode",{parentName:"li"},'require("@nomiclabs/hardhat-etherscan");')),(0,r.kt)("li",{parentName:"ul"},"Step2: Add your Bscscan API key. Register and obtain your API key from ",(0,r.kt)("a",{parentName:"li",href:"https://bscscan.com/myapikey"},"https://bscscan.com/myapikey")," ."),(0,r.kt)("li",{parentName:"ul"},"Step3: Always remember to set the solidity compiler version to match what was used for deploying the smart contract.")),(0,r.kt)("p",null,"!!! warning\nKeep your API key as secret and never it commit to version control"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// hardhat.config.js\nconst { mnemonic, bscscanApiKey } = require('./secrets.json');\n\nrequire('@nomiclabs/hardhat-ethers');\nrequire(\"@nomiclabs/hardhat-etherscan\");\n/**\n * @type import('hardhat/config').HardhatUserConfig\n */\nmodule.exports = {\n\n  networks: {\n    testnet: {\n      url: `https://data-seed-prebsc-1-s1.binance.org:8545`,\n      accounts: {mnemonic: mnemonic}\n    },\n    mainnet: {\n      url: `https://bsc-dataseed.binance.org/`,\n      accounts: {mnemonic: mnemonic}\n    }\n  },\n\n  etherscan: {\n    // Your API key for Etherscan\n    // Obtain one at https://bscscan.com/\n    apiKey: bscscanApiKey \n  },\n  solidity: \"0.8.9\"\n};\n")),(0,r.kt)("h3",{id:"verify-command"},"Verify Command"),(0,r.kt)("p",null,"!!! warning\nRemove any unnecessary contracts and clear the artifacts otherwise these will also be part of the verified contract."),(0,r.kt)("p",null,"Run the following command:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'npx buidler verify --network mainnet DEPLOYED_CONTRACT_ADDRESS "Constructor argument 1"\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Example")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ npx hardhat  verify --network testnet 0xbF39886B4F91F5170934191b0d96Dd277147FBB2\nNothing to compile\nCompiling 1 file with 0.5.16\nSuccessfully submitted source code for contract\ncontracts/BEP20Token.sol:BEP20Token at 0xbF39886B4F91F5170934191b0d96Dd277147FBB2\nfor verification on Etherscan. Waiting for verification result...\n\nSuccessfully verified contract BEP20Token on Etherscan.\nhttps://testnet.bscscan.com/address/0xbF39886B4F91F5170934191b0d96Dd277147FBB2#code\n")),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"This tutorial guided you through the basics of creating and deploying a simple smart contract using the Hardhat IDE. It also provides step-by-step guide on how to verify your deployed smart contract. This tutorial uses testnet, however, the exact same instructions and sequence will work on the mainnet as well."))}h.isMDXComponent=!0}}]);