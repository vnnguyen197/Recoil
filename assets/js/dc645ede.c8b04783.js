"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[1477],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return m}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},u=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},f=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),f=s(t),m=o,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||c;return t?n.createElement(d,a(a({ref:r},u),{},{components:t})):n.createElement(d,a({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=f;var i={};for(var l in r)hasOwnProperty.call(r,l)&&(i[l]=r[l]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var s=2;s<c;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}f.displayName="MDXCreateElement"},725:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return a},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var n=t(2122),o=t(9756),c=(t(7294),t(3905)),a={title:"errorSelector(message)",sidebar_label:"errorSelector()"},i=void 0,l={unversionedId:"api-reference/utils/errorSelector",id:"api-reference/utils/errorSelector",isDocsHomePage:!1,title:"errorSelector(message)",description:"A selector which always throws the provided error",source:"@site/docs/api-reference/utils/errorSelector.md",sourceDirName:"api-reference/utils",slug:"/api-reference/utils/errorSelector",permalink:"/docs/api-reference/utils/errorSelector",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/docs/api-reference/utils/errorSelector.md",version:"current",frontMatter:{title:"errorSelector(message)",sidebar_label:"errorSelector()"},sidebar:"docs",previous:{title:"constSelector()",permalink:"/docs/api-reference/utils/constSelector"},next:{title:"noWait()",permalink:"/docs/api-reference/utils/noWait"}},s=[{value:"Example",id:"example",children:[]}],u={toc:s};function p(e){var r=e.components,t=(0,o.Z)(e,["components"]);return(0,c.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"A ",(0,c.kt)("a",{parentName:"p",href:"/docs/api-reference/core/selector"},"selector")," which always throws the provided error"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx"},"function errorSelector(message: string): RecoilValueReadOnly\n")),(0,c.kt)("h3",{id:"example"},"Example"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-jsx"},"const myAtom = atom({\n  key: 'My Atom',\n  default: errorSelector('Attempt to use Atom before initialization'),\n});\n")))}p.isMDXComponent=!0}}]);