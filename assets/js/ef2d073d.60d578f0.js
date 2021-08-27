"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[2988],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),f=a,m=d["".concat(c,".").concat(f)]||d[f]||p[f]||o;return n?r.createElement(m,i(i({ref:t},u),{},{components:n})):r.createElement(m,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4172:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return p}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i={title:"useRecoilValueLoadable(state)",sidebar_label:"useRecoilValueLoadable()"},l=void 0,c={unversionedId:"api-reference/core/useRecoilValueLoadable",id:"api-reference/core/useRecoilValueLoadable",isDocsHomePage:!1,title:"useRecoilValueLoadable(state)",description:"This hook is intended to be used for reading the value of asynchronous selectors. This hook will implicitly subscribe the component to the given state.",source:"@site/docs/api-reference/core/useRecoilValueLoadable.md",sourceDirName:"api-reference/core",slug:"/api-reference/core/useRecoilValueLoadable",permalink:"/docs/api-reference/core/useRecoilValueLoadable",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/docs/api-reference/core/useRecoilValueLoadable.md",version:"current",frontMatter:{title:"useRecoilValueLoadable(state)",sidebar_label:"useRecoilValueLoadable()"},sidebar:"docs",previous:{title:"useRecoilStateLoadable()",permalink:"/docs/api-reference/core/useRecoilStateLoadable"},next:{title:"useGetRecoilValueInfo()",permalink:"/docs/api-reference/core/useGetRecoilValueInfo"}},s=[{value:"Example",id:"example",children:[]}],u={toc:s};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This hook is intended to be used for reading the value of asynchronous selectors. This hook will implicitly subscribe the component to the given state."),(0,o.kt)("p",null,"Unlike ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/useRecoilValue"},(0,o.kt)("inlineCode",{parentName:"a"},"useRecoilValue()")),", this hook will not throw an ",(0,o.kt)("inlineCode",{parentName:"p"},"Error")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise")," when reading from an asynchronous selector (for the purpose of working alongside ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/concurrent-mode-suspense.html"},"React Suspense"),"). Instead, this hook returns a ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/Loadable"},(0,o.kt)("inlineCode",{parentName:"a"},"Loadable"))," object."),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function useRecoilValueLoadable<T>(state: RecoilValue<T>): Loadable<T>\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"state"),": an ",(0,o.kt)("a",{parentName:"li",href:"/docs/api-reference/core/atom"},(0,o.kt)("inlineCode",{parentName:"a"},"atom"))," or ",(0,o.kt)("a",{parentName:"li",href:"/docs/api-reference/core/selector"},(0,o.kt)("inlineCode",{parentName:"a"},"selector"))," that ",(0,o.kt)("em",{parentName:"li"},"may")," have some asynchronous operations. The status of the returned loadable will depend on the status of the provided state selector.")),(0,o.kt)("p",null,"Returns a ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/Loadable"},(0,o.kt)("inlineCode",{parentName:"a"},"Loadable"))," for the current state with the interface:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"state"),": indicates the status of the selector. Possible values are ",(0,o.kt)("inlineCode",{parentName:"li"},"'hasValue'"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"'hasError'"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"'loading'"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"contents"),": The value represented by this ",(0,o.kt)("inlineCode",{parentName:"li"},"Loadable"),".  If the state is ",(0,o.kt)("inlineCode",{parentName:"li"},"hasValue"),", it is the actual value, if the state is ",(0,o.kt)("inlineCode",{parentName:"li"},"hasError")," it is the ",(0,o.kt)("inlineCode",{parentName:"li"},"Error")," object that was thrown, and if the state is ",(0,o.kt)("inlineCode",{parentName:"li"},"loading"),", then it is a ",(0,o.kt)("inlineCode",{parentName:"li"},"Promise")," of the value.")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function UserInfo({userID}) {\n  const userNameLoadable = useRecoilValueLoadable(userNameQuery(userID));\n  switch (userNameLoadable.state) {\n    case 'hasValue':\n      return <div>{userNameLoadable.contents}</div>;\n    case 'loading':\n      return <div>Loading...</div>;\n    case 'hasError':\n      throw userNameLoadable.contents;\n  }\n}\n")))}p.isMDXComponent=!0}}]);