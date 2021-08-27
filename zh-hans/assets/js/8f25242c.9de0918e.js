"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[3565],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),m=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=m(n),f=o,d=s["".concat(c,".").concat(f)]||s[f]||u[f]||a;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=s;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var m=2;m<a;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},1693:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return m},default:function(){return u}});var r=n(2122),o=n(9756),a=(n(7294),n(3905)),i={title:"atom(options)",sidebar_label:"atom()"},l=void 0,c={unversionedId:"api-reference/core/atom",id:"api-reference/core/atom",isDocsHomePage:!1,title:"atom(options)",description:"\u4e00\u4e2a atom \u8868\u793a Recoil \u7684 state\u3002atom() \u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u53ef\u5199\u7684 RecoilState \u5bf9\u8c61\u3002",source:"@site/i18n/zh-hans/docusaurus-plugin-content-docs/current/api-reference/core/atom.md",sourceDirName:"api-reference/core",slug:"/api-reference/core/atom",permalink:"/zh-hans/docs/api-reference/core/atom",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/zh-hans/docusaurus-plugin-content-docs/current/api-reference/core/atom.md",version:"current",frontMatter:{title:"atom(options)",sidebar_label:"atom()"},sidebar:"docs",previous:{title:"<RecoilRoot />",permalink:"/zh-hans/docs/api-reference/core/RecoilRoot"},next:{title:"selector()",permalink:"/zh-hans/docs/api-reference/core/selector"}},m=[{value:"\u793a\u4f8b",id:"\u793a\u4f8b",children:[]},{value:"Atom Families",id:"atom-families",children:[]}],p={toc:m};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u4e00\u4e2a ",(0,a.kt)("em",{parentName:"p"},"atom")," \u8868\u793a Recoil \u7684 state\u3002",(0,a.kt)("inlineCode",{parentName:"p"},"atom()")," \u51fd\u6570\u8fd4\u56de\u4e00\u4e2a\u53ef\u5199\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"RecoilState")," \u5bf9\u8c61\u3002"),(0,a.kt)("hr",null),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function atom<T>({\n  key: string,\n  default: T | Promise<T> | RecoilValue<T>,\n\n  effects_UNSTABLE?: $ReadOnlyArray<AtomEffect<T>>,\n\n  dangerouslyAllowMutability?: boolean,\n}): RecoilState<T>\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"key")," - \u5728\u5185\u90e8\u7528\u4e8e\u6807\u8bc6 atom \u7684\u552f\u4e00\u5b57\u7b26\u4e32\u3002\u5728\u6574\u4e2a\u5e94\u7528\u4e2d\uff0c\u8be5\u5b57\u7b26\u4e32\u5fc5\u987b\u76f8\u5bf9\u4e8e\u5176\u4ed6 atom \u548c selector \u4fdd\u6301\u552f\u4e00\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"default")," - atom \u7684\u521d\u59cb\u503c\uff0c\u6216\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"li"},"Promise"),"\uff0c\u6216\u53e6\u4e00\u4e2a atom\uff0c\u6216\u4e00\u4e2a\u7528\u6765\u8868\u793a\u76f8\u540c\u7c7b\u578b\u7684\u503c\u7684 selector\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"dangerouslyAllowMutability")," - \u5728\u67d0\u4e9b\u60c5\u51b5\u4e0b\uff0c\u6211\u4eec\u53ef\u80fd\u5e0c\u671b\u5141\u8bb8\u5b58\u50a8\u5728 atom \u4e2d\u7684\u5bf9\u8c61\u53d1\u751f\u6539\u53d8\uff0c\u800c\u8fd9\u4e9b\u53d8\u5316\u5e76\u4e0d\u4ee3\u8868 status \u7684\u53d8\u66f4\u3002\u4f7f\u7528\u8fd9\u4e2a\u9009\u9879\u53ef\u4ee5\u8986\u76d6\u5f00\u53d1\u6a21\u5f0f\u4e0b\u7684 freezing \u5bf9\u8c61\u3002")),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Recoil \u7ba1\u7406 atom \u7684 state \u53d8\u5316\uff0c\u4ee5\u4fbf\u901a\u77e5\u8ba2\u9605\u8be5 atom \u7684\u7ec4\u4ef6\u4f55\u65f6\u91cd\u65b0\u6e32\u67d3\uff0c\u6240\u4ee5\u4f60\u9700\u4f7f\u7528\u4e0b\u9762\u5217\u51fa\u7684\u94a9\u5b50\u51fd\u6570\u6765\u6539\u53d8 atom \u7684 state\u3002\u5982\u679c\u4e00\u4e2a\u5b58\u50a8\u5728 atom \u4e2d\u7684\u5bf9\u8c61\u88ab\u76f4\u63a5 mutated\uff0c\u5b83\u53ef\u80fd\u4f1a\u7ed5\u8fc7\u94a9\u5b50\uff0c\u5728\u6ca1\u6709\u6b63\u786e\u89e6\u53d1\u8ba2\u9605\u7684\u60c5\u51b5\u4e0b\u5bfc\u81f4 state \u7684\u53d8\u5316\uff0c\u4e3a\u4e86\u5e2e\u52a9\u5927\u5bb6\u68c0\u6d4b bug\uff0cRecoil \u4f1a\u5728\u5f00\u53d1\u6a21\u5f0f\u4e0b freeze \u5b58\u50a8\u5728 atom \u4e2d\u7684\u5bf9\u8c61\u3002"),(0,a.kt)("p",null,"\u901a\u5e38\uff0c\u4f60\u9700\u8981\u4f7f\u7528\u4ee5\u4e0b hook \u6765\u4e0e atom \u642d\u914d\u4f7f\u7528\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api-reference/core/useRecoilState"},(0,a.kt)("inlineCode",{parentName:"a"},"useRecoilState()")),"\uff1a\u5f53\u4f60\u540c\u65f6\u9700\u8981\u5bf9 atom \u8fdb\u884c\u8bfb\u5199\u65f6\uff0c\u4f7f\u7528\u6b64 hook\u3002\u4f7f\u7528\u6b64 hook \u4f1a\u4f7f\u7ec4\u4ef6\u8ba2\u9605 atom\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api-reference/core/useRecoilValue"},(0,a.kt)("inlineCode",{parentName:"a"},"useRecoilValue()")),"\uff1a\u5f53\u4f60\u4ec5\u9700\u8981\u8bfb\u53d6 atom \u65f6\uff0c\u4f7f\u7528\u6b64 hook\u3002\u4f7f\u7528\u6b64 hook \u4f1a\u4f7f\u7ec4\u4ef6\u8ba2\u9605 atom\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api-reference/core/useSetRecoilState"},(0,a.kt)("inlineCode",{parentName:"a"},"useSetRecoilState()")),"\uff1a\u5f53\u4f60\u4ec5\u9700\u8981\u5199\u5165 atom \u65f6\uff0c\u4f7f\u7528\u6b64 hook\u3002"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/api-reference/core/useResetRecoilState"},(0,a.kt)("inlineCode",{parentName:"a"},"useResetRecoilState()")),"\uff1a\u9700\u5c06 atom \u91cd\u7f6e\u4e3a\u9ed8\u8ba4\u503c\u65f6\uff0c\u4f7f\u7528\u6b64 hook\u3002")),(0,a.kt)("p",null,"\u5728\u4e00\u4e9b\u7f55\u89c1\u7684\u573a\u666f\u4e0b\uff0c\u4f60\u9700\u8981\u5728\u4e0d\u8ba2\u9605\u7ec4\u4ef6\u7684\u60c5\u51b5\u4e0b\u8bfb\u53d6 atom \u7684\u503c\uff0c\u8bf7\u53c2\u8003 ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/useRecoilCallback"},(0,a.kt)("inlineCode",{parentName:"a"},"useRecoilCallback()")),"\u3002"),(0,a.kt)("p",null,"\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise")," \u6216\u8005\u8868\u793a\u76f8\u540c\u7c7b\u578b\u503c\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"RecoilValue"),"\u3002\u56e0\u4e3a ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise")," \u4f1a\u662f pending \u72b6\u6001\uff0c\u800c\u9ed8\u8ba4\u7684 selector \u4e5f\u53ef\u80fd\u662f\u5f02\u6b65\u7684\uff0c\u56e0\u6b64 atom \u7684\u503c\u4e5f\u53ef\u4ee5\u662f pending \u72b6\u6001\uff0c\u6216\u8005\u5728\u8bfb\u53d6\u503c\u7684\u65f6\u5019\u629b\u51fa\u5f02\u5e38\u3002\u6ce8\u610f\u8bbe\u7f6e atom \u65f6\uff0c\u4f60\u4e0d\u80fd\u5bf9 ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise")," \u5b9e\u65f6\u8d4b\u503c\u3002\u5bf9\u4e8e\u5f02\u6b65\u51fd\u6570\uff0c\u8bf7\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/selector"},"selectors")," \u3002"),(0,a.kt)("p",null,"Atom \u4e0d\u80fd\u7528\u6765\u76f4\u63a5\u5b58\u50a8 ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise")," \u6216 ",(0,a.kt)("inlineCode",{parentName:"p"},"RecoilValue"),"\uff0c\u4f46\u662f\u53ef\u4ee5\u7528\u5bf9\u8c61\u5305\u88c5\u5b83\u4eec\u3002\u6ce8\u610f ",(0,a.kt)("inlineCode",{parentName:"p"},"Promise")," \u662f\u53ef\u53d8\u7684\u3002Atoms \u53ef\u4ee5\u8bbe\u7f6e\u4e3a\u7eaf\u51fd\u6570\uff0c\u5982\u679c\u4f60\u8fd9\u4e48\u505a\uff0c\u4f60\u9700\u8981\u4f7f\u7528\u66f4\u65b0\u5668\u7ec4\u6210 setter\u3002\uff08\u4f8b\u5982\uff1a ",(0,a.kt)("inlineCode",{parentName:"p"},"set(myAtom, () => myFunc);"),"\uff09\u3002"),(0,a.kt)("h3",{id:"\u793a\u4f8b"},"\u793a\u4f8b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import {atom, useRecoilState} from 'recoil';\n\nconst counter = atom({\n  key: 'myCounter',\n  default: 0,\n});\n\nfunction Counter() {\n  const [count, setCount] = useRecoilState(counter);\n  const incrementByOne = () => setCount(count + 1);\n\n  return (\n    <div>\n      Count: {count}\n      <br />\n      <button onClick={incrementByOne}>Increment</button>\n    </div>\n  );\n}\n")),(0,a.kt)("h2",{id:"atom-families"},"Atom Families"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/utils/atomFamily"},(0,a.kt)("inlineCode",{parentName:"a"},"atomFamily()"))," \u5bf9\u4e8e\u5b58\u50a8\u4e00\u7cfb\u5217\u7684\u76f8\u5173\u72b6\u6001\u4ee5\u53ca ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/utils/atomFamily#scoped-atoms"},"\u5212\u5206\u4f60 atom \u72b6\u6001\u7684\u4f5c\u7528\u57df")," \u6765\u8bf4\uff0c\u975e\u5e38\u6709\u7528\u3002"))}u.isMDXComponent=!0}}]);