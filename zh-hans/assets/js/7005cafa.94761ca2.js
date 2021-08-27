"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[6843],{3905:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)n=a[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var c=o.createContext({}),p=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=r,f=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?o.createElement(f,s(s({ref:t},l),{},{components:n})):o.createElement(f,s({ref:t},l))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return o.createElement.apply(null,s)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},135:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return c},toc:function(){return p},default:function(){return u}});var o=n(2122),r=n(9756),a=(n(7294),n(3905)),s={title:"\u5f00\u53d1\u5de5\u5177",sidebar_label:"\u5f00\u53d1\u5de5\u5177"},i=void 0,c={unversionedId:"guides/dev-tools",id:"guides/dev-tools",isDocsHomePage:!1,title:"\u5f00\u53d1\u5de5\u5177",description:"Recoil \u5141\u8bb8\u4f60\u89c2\u5bdf\u548c\u66f4\u65b0 state \u7684\u53d8\u5316\u3002",source:"@site/i18n/zh-hans/docusaurus-plugin-content-docs/current/guides/dev-tools.md",sourceDirName:"guides",slug:"/guides/dev-tools",permalink:"/zh-hans/docs/guides/dev-tools",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/zh-hans/docusaurus-plugin-content-docs/current/guides/dev-tools.md",version:"current",frontMatter:{title:"\u5f00\u53d1\u5de5\u5177",sidebar_label:"\u5f00\u53d1\u5de5\u5177"},sidebar:"docs",previous:{title:"\u6d4b\u8bd5",permalink:"/zh-hans/docs/guides/testing"},next:{title:"<RecoilRoot />",permalink:"/zh-hans/docs/api-reference/core/RecoilRoot"}},p=[{value:"<em>\u91cd\u8981\u63d0\u793a</em>",id:"\u91cd\u8981\u63d0\u793a",children:[]},{value:"\u89c2\u5bdf\u6240\u6709 state \u53d8\u5316",id:"\u89c2\u5bdf\u6240\u6709-state-\u53d8\u5316",children:[]},{value:"\u6309\u9700\u89c2\u5bdf state \u53d8\u5316",id:"\u6309\u9700\u89c2\u5bdf-state-\u53d8\u5316",children:[]},{value:"\u65f6\u95f4\u65c5\u884c",id:"\u65f6\u95f4\u65c5\u884c",children:[]},{value:"\u67e5\u9605\u5f53\u524d\u72b6\u6001",id:"\u67e5\u9605\u5f53\u524d\u72b6\u6001",children:[]}],l={toc:p};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,o.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Recoil \u5141\u8bb8\u4f60\u89c2\u5bdf\u548c\u66f4\u65b0 state \u7684\u53d8\u5316\u3002"),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u91cd\u8981\u63d0\u793a"},(0,a.kt)("em",{parentName:"h2"},"\u91cd\u8981\u63d0\u793a")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("em",{parentName:"strong"},"\u6b64 API \u76ee\u524d\u4ecd\u5728\u5f00\u53d1\u4e2d\uff0c\u4e14\u5c06\u4f1a\u6709\u6240\u53d8\u5316\u3002\u656c\u8bf7\u671f\u5f85\u2026\u2026"))),(0,a.kt)("hr",null),(0,a.kt)("h2",{id:"\u89c2\u5bdf\u6240\u6709-state-\u53d8\u5316"},"\u89c2\u5bdf\u6240\u6709 state \u53d8\u5316"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u4f7f\u7528\u4e00\u4e2a\u94a9\u5b50\u51fd\u6570\u6765\u8ba2\u9605 state \u7684\u53d8\u5316\uff0c\u4f8b\u5982 ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/useRecoilSnapshot"},(0,a.kt)("strong",{parentName:"a"},(0,a.kt)("inlineCode",{parentName:"strong"},"useRecoilSnapshot()")))," \u548c ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/useRecoilTransactionObserver"},(0,a.kt)("strong",{parentName:"a"},(0,a.kt)("inlineCode",{parentName:"strong"},"useRecoilTransactionObserver_UNSTABLE()")))," \uff0c\u540c\u65f6\u4e5f\u80fd\u5f97\u5230\u65b0\u7684 state \u7684 ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/Snapshot"},(0,a.kt)("strong",{parentName:"a"},(0,a.kt)("inlineCode",{parentName:"strong"},"Snapshot"))),"\u3002"),(0,a.kt)("p",null,"\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"Snapshot")," \u540e\uff0c\u4f60\u5373\u53ef\u4f7f\u7528\u4e00\u4e9b\u65b9\u6cd5\u6765\u67e5\u9605 state\uff0c\u4f8b\u5982 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"getLoadable()")),"\uff0c",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"getPromise()"))," \u548c ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"getInfo_UNSTABLE()"))," \uff0c\u540c\u65f6\u4e5f\u80fd\u4f7f\u7528 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"getNodes_UNSTABLE()"))," \u6765\u904d\u5386\u4e00\u7ec4\u5df2\u77e5\u7684 atom\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function DebugObserver(): React.Node {\n  const snapshot = useRecoilSnapshot();\n  useEffect(() => {\n    console.debug('The following atoms were modified:');\n    for (const node of snapshot.getNodes_UNSTABLE({isModified: true})) {\n      console.debug(node.key, snapshot.getLoadable(node));\n    }\n  }, [snapshot]);\n\n  return null;\n}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function MyApp() {\n  return (\n    <RecoilRoot>\n      <DebugObserver />\n      ...\n    </RecoilRoot>\n  );\n}\n")),(0,a.kt)("h2",{id:"\u6309\u9700\u89c2\u5bdf-state-\u53d8\u5316"},"\u6309\u9700\u89c2\u5bdf state \u53d8\u5316"),(0,a.kt)("p",null,"\u6216\u8005\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/useRecoilCallback"},(0,a.kt)("strong",{parentName:"a"},(0,a.kt)("inlineCode",{parentName:"strong"},"useRecoilCallback()")))," \u94a9\u5b50\u51fd\u6570\u6309\u9700\u83b7\u53d6 ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/Snapshot"},(0,a.kt)("strong",{parentName:"a"},(0,a.kt)("inlineCode",{parentName:"strong"},"Snapshot"))),"\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function DebugButton(): React.Node {\n  const onClick = useRecoilCallback(({snapshot}) => async () => {\n    console.debug('Atom values:');\n    for (const node of snapshot.getNodes_UNSTABLE()) {\n      const value = await snapshot.getPromise(node);\n      console.debug(node.key, value);\n    }\n  }, []);\n\n  return <button onClick={onClick}>Dump State</button>\n}\n")),(0,a.kt)("h2",{id:"\u65f6\u95f4\u65c5\u884c"},"\u65f6\u95f4\u65c5\u884c"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/useGotoRecoilSnapshot"},(0,a.kt)("strong",{parentName:"a"},(0,a.kt)("inlineCode",{parentName:"strong"},"useGotoRecoilSnapshot()")))," \u94a9\u5b50\u51fd\u6570\u53ef\u4ee5\u7528\u4e8e\u66f4\u65b0\u6574\u4e2a Recoil state\uff0c\u4ee5\u5339\u914d\u63d0\u4f9b\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Snapshot"),"\u3002\u6b64\u793a\u4f8b\u5c55\u793a\u7684\u662f\u7ef4\u62a4 state \u66f4\u6539\u7684\u5386\u53f2\u8bb0\u5f55\u4ee5\u4fbf\u56de\u6eaf\uff0c\u5e76\u6062\u590d\u5148\u524d\u7684\u5168\u5c40 state \u7684\u80fd\u529b\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"Snapshot")," \u8fd8\u63d0\u4f9b\u4e86 ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("inlineCode",{parentName:"strong"},"getID()"))," \u65b9\u6cd5\u3002\u4f8b\u5982\uff0c\u53ef\u4ee5\u4f7f\u7528\u5b83\u6765\u5e2e\u52a9\u4f60\u786e\u5b9a\u662f\u5426\u6b63\u5728\u8fd8\u539f\u5230\u5148\u524d\u5df2\u77e5\u7684 state\uff0c\u4ee5\u907f\u514d\u66f4\u65b0\u4f60\u7684\u5feb\u7167\u5386\u53f2\u8bb0\u5f55\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"function TimeTravelObserver() {\n  const [snapshots, setSnapshots] = useState([]);\n\n  const snapshot = useRecoilSnapshot();\n  useEffect(() => {\n    if (snapshots.every(s => s.getID() !== snapshot.getID())) {\n      setSnapshots([...snapshots, snapshot]);\n    }\n  }, [snapshot]);\n\n  const gotoSnapshot = useGotoRecoilSnapshot();\n\n  return (\n    <ol>\n      {snapshots.map((snapshot, i) => (\n        <li key={i}>\n          Snapshot {i}\n          <button onClick={() => gotoSnapshot(snapshot)}>\n            Restore\n          </button>\n        </li>\n      ))}\n    </ol>\n  );\n}\n")),(0,a.kt)("h2",{id:"\u67e5\u9605\u5f53\u524d\u72b6\u6001"},"\u67e5\u9605\u5f53\u524d\u72b6\u6001"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/useGetRecoilValueInfo"},(0,a.kt)("inlineCode",{parentName:"a"},"useGetRecoilValueInfo_UNSTABLE()"))," \u63d0\u4f9b\u4e86\u4e00\u4e2a\u56de\u8c03\u51fd\u6570\uff0c\u5b83\u53ef\u7528\u4e8e\u67e5\u770b\u5f53\u524d state \u4ee5\u53ca\u83b7\u53d6 atom \u548c selector \u7684\u4fe1\u606f\u3002\u5728\u5927\u591a\u6570\u60c5\u51b5\u4e0b\uff0c\u8fd9\u7b49\u6548\u4e8e\u5728\u5f53\u524d ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/Snapshot"},(0,a.kt)("inlineCode",{parentName:"a"},"Snapshot"))," \u4e0a\u8c03\u7528 ",(0,a.kt)("a",{parentName:"p",href:"/docs/api-reference/core/Snapshot#debug-information"},(0,a.kt)("inlineCode",{parentName:"a"},"getInfo_UNSTABLE()")),"\uff0c\u4e0d\u540c\u4e4b\u5904\u5728\u4e8e\u5b83\u80fd\u591f\u63d0\u4f9b\u4e00\u4e9b\u53ef\u66f4\u6539\u4e14\u4e0e Recoil state \u5feb\u7167\u65e0\u5173\u7684\u5176\u4ed6\u4fe1\u606f\uff0c\u4f8b\u5982\u8ba2\u9605\u4e86 atom \u7684 React \u7ec4\u4ef6\u96c6\u5408\u3002"))}u.isMDXComponent=!0}}]);