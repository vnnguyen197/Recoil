"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[258],{3905:function(e,n,r){r.d(n,{Zo:function(){return u},kt:function(){return f}});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function a(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=t.createContext({}),s=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):a(a({},n),e)),r},u=function(e){var n=s(e.components);return t.createElement(c.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(r),f=i,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return r?t.createElement(m,a(a({ref:n},u),{},{components:r})):t.createElement(m,a({ref:n},u))}));function f(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=d;var l={};for(var c in n)hasOwnProperty.call(n,c)&&(l[c]=n[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=r[s];return t.createElement.apply(null,a)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},6547:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var t=r(2122),i=r(9756),o=(r(7294),r(3905)),a={title:"waitForAll(dependencies)",sidebar_label:"waitForAll()"},l=void 0,c={unversionedId:"api-reference/utils/waitForAll",id:"api-reference/utils/waitForAll",isDocsHomePage:!1,title:"waitForAll(dependencies)",description:"A concurrency helper which allows us to concurrently evaluate multiple asynchronous dependencies.",source:"@site/docs/api-reference/utils/waitForAll.md",sourceDirName:"api-reference/utils",slug:"/api-reference/utils/waitForAll",permalink:"/docs/api-reference/utils/waitForAll",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/docs/api-reference/utils/waitForAll.md",version:"current",frontMatter:{title:"waitForAll(dependencies)",sidebar_label:"waitForAll()"},sidebar:"docs",previous:{title:"noWait()",permalink:"/docs/api-reference/utils/noWait"},next:{title:"waitForAllSettled()",permalink:"/docs/api-reference/utils/waitForAllSettled"}},s=[{value:"Examples",id:"examples",children:[]}],u={toc:s};function p(e){var n=e.components,r=(0,i.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,t.Z)({},u,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"A concurrency helper which allows us to concurrently evaluate multiple asynchronous dependencies."),(0,o.kt)("p",null,"The dependencies may either be provided as a tuple array or as named dependencies in an object."),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function waitForAll(dependencies: Array<RecoilValue<>>):\n  RecoilValueReadOnly<UnwrappedArray>\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function waitForAll(dependencies: {[string]: RecoilValue<>}):\n  RecoilValueReadOnly<UnwrappedObject>\n")),(0,o.kt)("hr",null),(0,o.kt)("p",null,"Because the concurrency helper is provided as a selector, it may be used by Recoil hooks in a React component, as a dependency in a Recoil selector, or anywhere a Recoil state is used."),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function FriendsInfo() {\n  const [friendA, friendB] = useRecoilValue(\n    waitForAll([friendAState, friendBState])\n  );\n  return (\n    <div>\n      Friend A Name: {friendA.name}\n      Friend B Name: {friendB.name}\n    </div>\n  );\n}\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const friendsInfoQuery = selector({\n  key: 'FriendsInfoQuery',\n  get: ({get}) => {\n    const {friendList} = get(currentUserInfoQuery);\n    const friends = get(waitForAll(\n      friendList.map(friendID => userInfoQuery(friendID))\n    ));\n    return friends;\n  },\n});\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"const customerInfoQuery = selectorFamily({\n  key: 'CustomerInfoQuery',\n  get: id => ({get}) => {\n    const {info, invoices, payments} = get(waitForAll({\n      info: customerInfoQuery(id),\n      invoices: invoicesQuery(id),\n      payments: paymentsQuery(id),\n    }));\n\n    return {\n      name: info.name,\n      transactions: [\n        ...invoices,\n        ...payments,\n      ],\n    };\n  },\n});\n")))}p.isMDXComponent=!0}}]);