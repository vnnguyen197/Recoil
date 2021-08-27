"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[4994],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,h=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?r.createElement(h,i(i({ref:t},u),{},{components:n})):r.createElement(h,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1719:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i={title:"useRecoilState(state)",sidebar_label:"useRecoilState()"},l=void 0,s={unversionedId:"api-reference/core/useRecoilState",id:"api-reference/core/useRecoilState",isDocsHomePage:!1,title:"useRecoilState(state)",description:"Returns a tuple where the first element is the value of state and the second element is a setter function that will update the value of the given state when called.",source:"@site/docs/api-reference/core/useRecoilState.md",sourceDirName:"api-reference/core",slug:"/api-reference/core/useRecoilState",permalink:"/docs/api-reference/core/useRecoilState",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/docs/api-reference/core/useRecoilState.md",version:"current",frontMatter:{title:"useRecoilState(state)",sidebar_label:"useRecoilState()"},sidebar:"docs",previous:{title:"Loadable",permalink:"/docs/api-reference/core/Loadable"},next:{title:"useRecoilValue()",permalink:"/docs/api-reference/core/useRecoilValue"}},c=[{value:"Example",id:"example",children:[]}],u={toc:c};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Returns a tuple where the first element is the value of state and the second element is a setter function that will update the value of the given state when called."),(0,o.kt)("p",null,"This hook will implicitly subscribe the component to the given state."),(0,o.kt)("hr",null),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function useRecoilState<T>(state: RecoilState<T>): [T, SetterOrUpdater<T>];\n\ntype SetterOrUpdater<T> = (T | (T => T)) => void;\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"state"),": an ",(0,o.kt)("a",{parentName:"li",href:"/docs/api-reference/core/atom"},(0,o.kt)("inlineCode",{parentName:"a"},"atom"))," or a ",(0,o.kt)("em",{parentName:"li"},"writeable")," ",(0,o.kt)("a",{parentName:"li",href:"/docs/api-reference/core/selector"},(0,o.kt)("inlineCode",{parentName:"a"},"selector")),". Writeable selectors are selectors that have both a ",(0,o.kt)("inlineCode",{parentName:"li"},"get")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"set")," in their definition while read-only selectors only have a ",(0,o.kt)("inlineCode",{parentName:"li"},"get"),".")),(0,o.kt)("p",null,"This API is similar to the React ",(0,o.kt)("a",{parentName:"p",href:"https://reactjs.org/docs/hooks-reference.html#usestate"},(0,o.kt)("inlineCode",{parentName:"a"},"useState()"))," hook except it takes a Recoil state instead of a default value as an argument.  It returns a tuple of the current value of the state and a setter function.  The setter function may either take a new value as an argument or an updater function which receives the previous value as a parameter."),(0,o.kt)("hr",null),(0,o.kt)("p",null,"This is the recommended hook to use when a component intends to read and write state."),(0,o.kt)("p",null,"Using this hook in a React component will subscribe the component to re-render when the state is updated.  This hook may throw if the state has an error or is pending asynchronous resolution.  Please see ",(0,o.kt)("a",{parentName:"p",href:"/docs/guides/asynchronous-data-queries"},"this guide"),"."),(0,o.kt)("h3",{id:"example"},"Example"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"import {atom, selector, useRecoilState} from 'recoil';\n\nconst tempFahrenheit = atom({\n  key: 'tempFahrenheit',\n  default: 32,\n});\n\nconst tempCelsius = selector({\n  key: 'tempCelsius',\n  get: ({get}) => ((get(tempFahrenheit) - 32) * 5) / 9,\n  set: ({set}, newValue) => set(tempFahrenheit, (newValue * 9) / 5 + 32),\n});\n\nfunction TempCelsius() {\n  const [tempF, setTempF] = useRecoilState(tempFahrenheit);\n  const [tempC, setTempC] = useRecoilState(tempCelsius);\n\n  const addTenCelsius = () => setTempC(tempC + 10);\n  const addTenFahrenheit = () => setTempF(tempF + 10);\n\n  return (\n    <div>\n      Temp (Celsius): {tempC}\n      <br />\n      Temp (Fahrenheit): {tempF}\n      <br />\n      <button onClick={addTenCelsius}>Add 10 Celsius</button>\n      <br />\n      <button onClick={addTenFahrenheit}>Add 10 Fahrenheit</button>\n    </div>\n  );\n}\n")))}p.isMDXComponent=!0}}]);