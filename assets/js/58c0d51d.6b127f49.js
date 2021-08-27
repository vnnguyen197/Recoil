"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[6960],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(a),m=n,f=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return a?r.createElement(f,i(i({ref:t},u),{},{components:a})):r.createElement(f,i({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},4910:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var r=a(2122),n=a(9756),o=(a(7294),a(3905)),i={title:"useRecoilStateLoadable(state)",sidebar_label:"useRecoilStateLoadable()"},l=void 0,s={unversionedId:"api-reference/core/useRecoilStateLoadable",id:"api-reference/core/useRecoilStateLoadable",isDocsHomePage:!1,title:"useRecoilStateLoadable(state)",description:"This hook is intended to be used for reading the value of asynchronous selectors. This hook will implicitly subscribe the component to the given state.",source:"@site/docs/api-reference/core/useRecoilStateLoadable.md",sourceDirName:"api-reference/core",slug:"/api-reference/core/useRecoilStateLoadable",permalink:"/docs/api-reference/core/useRecoilStateLoadable",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/docs/api-reference/core/useRecoilStateLoadable.md",version:"current",frontMatter:{title:"useRecoilStateLoadable(state)",sidebar_label:"useRecoilStateLoadable()"},sidebar:"docs",previous:{title:"useResetRecoilState()",permalink:"/docs/api-reference/core/useResetRecoilState"},next:{title:"useRecoilValueLoadable()",permalink:"/docs/api-reference/core/useRecoilValueLoadable"}},c=[{value:"Example",id:"example",children:[]}],u={toc:c};function p(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"This hook is intended to be used for reading the value of asynchronous selectors. This hook will implicitly subscribe the component to the given state."),(0,o.kt)("p",null,"Unlike ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/useRecoilState"},(0,o.kt)("inlineCode",{parentName:"a"},"useRecoilState()")),", this hook will not throw an ",(0,o.kt)("inlineCode",{parentName:"p"},"Error")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"Promise")," when reading from an asynchronous selector (for the purpose of working alongside ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/concurrent-mode-suspense.html"},"React Suspense"),"). Instead, this hook returns a ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/Loadable"},(0,o.kt)("inlineCode",{parentName:"a"},"Loadable"))," object for the value along with the setter callback."),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function useRecoilStateLoadable<T>(state: RecoilState<T>): [Loadable<T>, (T | (T => T)) => void]\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"state"),": a writeable ",(0,o.kt)("a",{parentName:"li",href:"/docs/api-reference/core/atom"},(0,o.kt)("inlineCode",{parentName:"a"},"atom"))," or ",(0,o.kt)("a",{parentName:"li",href:"/docs/api-reference/core/selector"},(0,o.kt)("inlineCode",{parentName:"a"},"selector"))," that ",(0,o.kt)("em",{parentName:"li"},"may")," have some asynchronous operations. The status of the returned loadable will depend on the status of the provided state selector.")),(0,o.kt)("p",null,"Returns a ",(0,o.kt)("a",{parentName:"p",href:"/docs/api-reference/core/Loadable"},(0,o.kt)("inlineCode",{parentName:"a"},"Loadable"))," for the current state with the interface:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"state"),": indicates the status of the selector. Possible values are ",(0,o.kt)("inlineCode",{parentName:"li"},"'hasValue'"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"'hasError'"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"'loading'"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"contents"),": The value represented by this ",(0,o.kt)("inlineCode",{parentName:"li"},"Loadable"),".  If the state is ",(0,o.kt)("inlineCode",{parentName:"li"},"hasValue"),", it is the actual value, if the state is ",(0,o.kt)("inlineCode",{parentName:"li"},"hasError")," it is the ",(0,o.kt)("inlineCode",{parentName:"li"},"Error")," object that was thrown, and if the state is ",(0,o.kt)("inlineCode",{parentName:"li"},"loading"),", then it is a ",(0,o.kt)("inlineCode",{parentName:"li"},"Promise")," of the value.")),(0,o.kt)("hr",null),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function UserInfo({userID}) {\n  const [userNameLoadable, setUserName] = useRecoilStateLoadable(userNameQuery(userID));\n  switch (userNameLoadable.state) {\n    case 'hasValue':\n      return <div>{userNameLoadable.contents}</div>;\n    case 'loading':\n      return <div>Loading...</div>;\n    case 'hasError':\n      throw userNameLoadable.contents;\n  }\n}\n")))}p.isMDXComponent=!0}}]);