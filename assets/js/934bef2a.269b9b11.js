"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[4768],{3905:function(e,t,o){o.d(t,{Zo:function(){return p},kt:function(){return m}});var n=o(7294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)o=i[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var c=n.createContext({}),s=function(e){var t=n.useContext(c),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=s(o),m=r,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||i;return o?n.createElement(f,a(a({ref:t},p),{},{components:o})):n.createElement(f,a({ref:t},p))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=o.length,a=new Array(i);a[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var s=2;s<i;s++)a[s]=o[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,o)}d.displayName="MDXCreateElement"},6193:function(e,t,o){o.r(t),o.d(t,{frontMatter:function(){return a},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return u}});var n=o(2122),r=o(9756),i=(o(7294),o(3905)),a={title:"<RecoilRoot ...props />",sidebar_label:"<RecoilRoot />"},l=void 0,c={unversionedId:"api-reference/core/RecoilRoot",id:"api-reference/core/RecoilRoot",isDocsHomePage:!1,title:"<RecoilRoot ...props />",description:"Provides the context in which atoms have values. Must be an ancestor of any component that uses any Recoil hooks.",source:"@site/docs/api-reference/core/RecoilRoot.md",sourceDirName:"api-reference/core",slug:"/api-reference/core/RecoilRoot",permalink:"/docs/api-reference/core/RecoilRoot",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/docs/api-reference/core/RecoilRoot.md",version:"current",frontMatter:{title:"<RecoilRoot ...props />",sidebar_label:"<RecoilRoot />"},sidebar:"docs",previous:{title:"Dev Tools",permalink:"/docs/guides/dev-tools"},next:{title:"atom()",permalink:"/docs/api-reference/core/atom"}},s=[{value:"Props",id:"props",children:[]},{value:"Using Multiple <code>&lt;RecoilRoot&gt;</code>&#39;s",id:"using-multiple-recoilroots",children:[]},{value:"Example",id:"example",children:[]}],p={toc:s};function u(e){var t=e.components,o=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Provides the context in which atoms have values. Must be an ancestor of any component that uses any Recoil hooks."),(0,i.kt)("hr",null),(0,i.kt)("h3",{id:"props"},"Props"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"initializeState?"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"(MutableSnapshot => void)"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"An optional function that takes a ",(0,i.kt)("a",{parentName:"li",href:"/docs/api-reference/core/Snapshot#transforming-snapshots"},(0,i.kt)("inlineCode",{parentName:"a"},"MutableSnapshot"))," to ",(0,i.kt)("a",{parentName:"li",href:"/docs/api-reference/core/Snapshot#state-initialization"},"initialize")," the ",(0,i.kt)("inlineCode",{parentName:"li"},"<RecoilRoot>")," atom state.  This sets up the state for the initial render and is not intended for subsequent state changes or async initialization.  Use hooks such as ",(0,i.kt)("a",{parentName:"li",href:"/docs/api-reference/core/useSetRecoilState"},(0,i.kt)("inlineCode",{parentName:"a"},"useSetRecoilState()"))," or ",(0,i.kt)("a",{parentName:"li",href:"/docs/api-reference/core/useRecoilCallback"},(0,i.kt)("inlineCode",{parentName:"a"},"useRecoilCallback()"))," for async state changes."))),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"override?"),": ",(0,i.kt)("inlineCode",{parentName:"li"},"boolean"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Defaults to ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),". This prop only matters when this ",(0,i.kt)("inlineCode",{parentName:"li"},"<RecoilRoot>")," is nested within another ",(0,i.kt)("inlineCode",{parentName:"li"},"<RecoilRoot>"),". If ",(0,i.kt)("inlineCode",{parentName:"li"},"override")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"true"),", this root will create a new Recoil scope. If ",(0,i.kt)("inlineCode",{parentName:"li"},"override")," is ",(0,i.kt)("inlineCode",{parentName:"li"},"false"),", this ",(0,i.kt)("inlineCode",{parentName:"li"},"<RecoilRoot>")," will perform no function other than rendering its children, thus children of this root will access the Recoil values of the nearest ancestor RecoilRoot.")))),(0,i.kt)("h3",{id:"using-multiple-recoilroots"},"Using Multiple ",(0,i.kt)("inlineCode",{parentName:"h3"},"<RecoilRoot>"),"'s"),(0,i.kt)("p",null,"Multiple ",(0,i.kt)("inlineCode",{parentName:"p"},"<RecoilRoot>"),"'s  may co-exist and represent independent providers/stores of atom state; atoms will have distinct values within each root. This behavior remains the same when you nest one root inside anther one (inner root will mask outer roots), unless you specify ",(0,i.kt)("inlineCode",{parentName:"p"},"override")," to be ",(0,i.kt)("inlineCode",{parentName:"p"},"false"),' (see "Props").'),(0,i.kt)("p",null,"Note that caches, such as selector caches, may be shared across roots. Selector evaluations must be idempotent except for caching or logging, so this should not be a problem, but may be observable or may cause redundant queries to be cached across roots."),(0,i.kt)("h3",{id:"example"},"Example"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"import {RecoilRoot} from 'recoil';\n\nfunction AppRoot() {\n  return (\n    <RecoilRoot>\n      <ComponentThatUsesRecoil />\n    </RecoilRoot>\n  );\n}\n")))}u.isMDXComponent=!0}}]);