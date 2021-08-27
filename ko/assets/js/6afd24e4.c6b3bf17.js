"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[3294],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(c,".").concat(m)]||d[m]||p[m]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},8864:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),l={title:"useRecoilStateLoadable(state)",sidebar_label:"useRecoilStateLoadable()"},i=void 0,c={unversionedId:"api-reference/core/useRecoilStateLoadable",id:"api-reference/core/useRecoilStateLoadable",isDocsHomePage:!1,title:"useRecoilStateLoadable(state)",description:"\uc774 hook\uc740 \ube44\ub3d9\uae30 selector\uc758 \uac12\uc744 \uc77d\uae30 \uc704\ud574\uc11c \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \uc774 hook\uc740 \uc554\ubb35\uc801\uc73c\ub85c \uc8fc\uc5b4\uc9c4 \uc0c1\ud0dc\uc5d0 \ucef4\ud3ec\ub10c\ud2b8\ub97c \uad6c\ub3c5\ud569\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/api-reference/core/useRecoilStateLoadable.md",sourceDirName:"api-reference/core",slug:"/api-reference/core/useRecoilStateLoadable",permalink:"/ko/docs/api-reference/core/useRecoilStateLoadable",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/ko/docusaurus-plugin-content-docs/current/api-reference/core/useRecoilStateLoadable.md",version:"current",frontMatter:{title:"useRecoilStateLoadable(state)",sidebar_label:"useRecoilStateLoadable()"},sidebar:"docs",previous:{title:"useResetRecoilState(state)",permalink:"/ko/docs/api-reference/core/useResetRecoilState"},next:{title:"useRecoilValueLoadable()",permalink:"/ko/docs/api-reference/core/useRecoilValueLoadable"}},s=[{value:"Example",id:"example",children:[]}],u={toc:s};function p(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\uc774 hook\uc740 \ube44\ub3d9\uae30 selector\uc758 \uac12\uc744 \uc77d\uae30 \uc704\ud574\uc11c \uc0ac\uc6a9\ub429\ub2c8\ub2e4. \uc774 hook\uc740 \uc554\ubb35\uc801\uc73c\ub85c \uc8fc\uc5b4\uc9c4 \uc0c1\ud0dc\uc5d0 \ucef4\ud3ec\ub10c\ud2b8\ub97c \uad6c\ub3c5\ud569\ub2c8\ub2e4."),(0,o.kt)("p",null," ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/useRecoilState"},(0,o.kt)("inlineCode",{parentName:"a"},"useRecoilState()")),"\uc640 \ub2e4\ub974\uac8c \uc774 hook\uc740 \ube44\ub3d9\uae30 selector\uc5d0\uc11c \uc77d\uc5b4\uc62c \ub54c (",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/concurrent-mode-suspense.html"},"React Suspense"),"\uc640 \ud568\uaed8 \uc791\ub3d9\ud558\uae30 \uc704\ud574) Error \ud639\uc740 Promise\ub97c \ub358\uc9c0\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4. \ub300\uc2e0 \uc774 hook\uc740 ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/Loadable"},(0,o.kt)("inlineCode",{parentName:"a"},"Loadable"))," \uac1d\uccb4\ub97c setter \ucf5c\ubc31\uacfc \ud568\uaed8 \ub9ac\ud134\ud569\ub2c8\ub2e4."),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function useRecoilStateLoadable<T>(state: RecoilState<T>): [Loadable<T>, (T | (T => T)) => void]\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"state"),": \ube44\ub3d9\uae30 \uc791\uc5c5\uc774 \uc788\uc744 \uc218 \uc788\ub294 ",(0,o.kt)("inlineCode",{parentName:"li"},"\uc4f0\uae30 \uac00\ub2a5"),"\ud55c  ",(0,o.kt)("a",{parentName:"li",href:"/docs/api-reference/core/atom"},(0,o.kt)("inlineCode",{parentName:"a"},"atom"))," \ud639\uc740  ",(0,o.kt)("a",{parentName:"li",href:"/docs/api-reference/core/selector"},(0,o.kt)("inlineCode",{parentName:"a"},"selector")),". \ub9ac\ud134\ub41c loadable\uc758 \uc0c1\ud0dc(status)\ub294 \uc81c\uacf5\ub41c \uc0c1\ud0dc(state) selector\uc758 \uc0c1\ud0dc(status)\uc5d0 \ub530\ub77c \ub2e4\ub985\ub2c8\ub2e4. ")),(0,o.kt)("p",null,"\uc778\ud130\ud398\uc774\uc2a4\uac00 \uc788\ub294 \ud604\uc7ac \uc0c1\ud0dc ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/Loadable"},(0,o.kt)("inlineCode",{parentName:"a"},"Loadable")),"\uc744 \ub9ac\ud134\ud569\ub2c8\ub2e4:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"state"),": selector\uc758 \uc0c1\ud0dc(status)\ub97c \ub098\ud0c0\ub0c5\ub2c8\ub2e4. \uac00\ub2a5\ud55c \uac12\uc740 '",(0,o.kt)("inlineCode",{parentName:"li"},"hasValue"),"', '",(0,o.kt)("inlineCode",{parentName:"li"},"hasError"),"', '",(0,o.kt)("inlineCode",{parentName:"li"},"loading"),"'\uc785\ub2c8\ub2e4."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"contents"),": \uc774 ",(0,o.kt)("inlineCode",{parentName:"li"},"Loadable"),"\uc774 \ub098\ud0c0\ub0b4\ub294 \uac12\uc785\ub2c8\ub2e4. \ub9cc\uc57d \uc0c1\ud0dc\uac00 ",(0,o.kt)("inlineCode",{parentName:"li"},"hasValue"),"\uc774\uba74 \uc774\ub294 \uc2e4\uc81c \uac12\uc774\uba70, \ub9cc\uc57d \uc0c1\ud0dc\uac00 ",(0,o.kt)("inlineCode",{parentName:"li"},"hasError"),"\ub77c\uba74 \uc774\ub294 \ub358\uc838\uc9c4 ",(0,o.kt)("inlineCode",{parentName:"li"},"Error")," \uac1d\uccb4\uc785\ub2c8\ub2e4. \ub610\ud55c \uc0c1\ud0dc\uac00 ",(0,o.kt)("inlineCode",{parentName:"li"},"loading"),"\uc774\uba74 \uac12\uc758 ",(0,o.kt)("inlineCode",{parentName:"li"},"Promise"),"\uc785\ub2c8\ub2e4.")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function UserInfo({userID}) {\n  const [userNameLoadable, setUserName] = useRecoilStateLoadable(userNameQuery(userID));\n  switch (userNameLoadable.state) {\n    case 'hasValue':\n      return <div>{userNameLoadable.contents}</div>;\n    case 'loading':\n      return <div>Loading...</div>;\n    case 'hasError':\n      throw userNameLoadable.contents;\n  }\n}\n\n")))}p.isMDXComponent=!0}}]);