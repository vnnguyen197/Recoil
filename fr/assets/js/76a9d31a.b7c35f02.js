"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[7444],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return m}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),p=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=p(e.components);return n.createElement(l.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},s=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(t),m=o,d=s["".concat(l,".").concat(m)]||s[m]||f[m]||a;return t?n.createElement(d,i(i({ref:r},u),{},{components:t})):n.createElement(d,i({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=s;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var p=2;p<a;p++)i[p]=t[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}s.displayName="MDXCreateElement"},250:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return p},default:function(){return f}});var n=t(2122),o=t(9756),a=(t(7294),t(3905)),i={title:"Recoil 0.2"},c=void 0,l={permalink:"/fr/blog/2021/03/22/0.2.0-released",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/blog/blog/2021-03-22-0.2.0-released.md",source:"@site/blog/2021-03-22-0.2.0-released.md",title:"Recoil 0.2",description:"We are pleased to announce the release of Recoil 0.2.0. This release has a new, more reliable implementation of async selectors, greatly improved performance, and many bug fixes and improvements.",date:"2021-03-22T00:00:00.000Z",formattedDate:"22 mars 2021",tags:[],readingTime:3.005,truncated:!0,prevItem:{title:"Recoil 0.3",permalink:"/fr/blog/2021/05/14/0.3.0-released"},nextItem:{title:"Recoil 0.1.1",permalink:"/fr/blog/2020/10/30/0.1.1-released"}},p=[],u={toc:p};function f(e){var r=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"We are pleased to announce the release of Recoil 0.2.0. This release has a new, more reliable implementation of async selectors, greatly improved performance, and many bug fixes and improvements."))}f.isMDXComponent=!0}}]);