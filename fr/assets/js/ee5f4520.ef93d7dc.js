"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[1717],{3905:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(t),d=o,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||a;return t?r.createElement(m,i(i({ref:n},u),{},{components:t})):r.createElement(m,i({ref:n},u))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=f;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"},1366:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return s},default:function(){return p}});var r=t(2122),o=t(9756),a=(t(7294),t(3905)),i={title:"Recoil 0.4.1"},c=void 0,l={permalink:"/fr/blog/2021/08/26/0.4.1-release",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/blog/blog/2021-08-26-0.4.1-release.md",source:"@site/blog/2021-08-26-0.4.1-release.md",title:"Recoil 0.4.1",description:"Recoil 0.4.1 has been released with some performance optimizations and fixes focused on optimizing when React will re-render components based on Recoil state changes.",date:"2021-08-26T00:00:00.000Z",formattedDate:"26 ao\xfbt 2021",tags:[],readingTime:.47,truncated:!1,nextItem:{title:"Recoil 0.4",permalink:"/fr/blog/2021/07/30/0.4.0-release"}},s=[],u={toc:s};function p(e){var n=e.components,t=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Recoil 0.4.1 has been released with some performance optimizations and fixes focused on optimizing when React will re-render components based on Recoil state changes."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Components using selectors will no longer re-render if the selector evaluates to an equivalent value, based on reference equality."),(0,a.kt)("li",{parentName:"ul"},"Components previously rendered twice on initial render when not using React's Concurrent Mode."),(0,a.kt)("li",{parentName:"ul"},"When selectors have async dependencies that resolve, some environments of React that previously caused unnecessary re-renders no longer will."),(0,a.kt)("li",{parentName:"ul"},"Components did not always re-render properly when selectors changed async dependencies based on other dependencies.")))}p.isMDXComponent=!0}}]);