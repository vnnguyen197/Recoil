"use strict";(self.webpackChunkrecoil=self.webpackChunkrecoil||[]).push([[4234],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),u=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,f=d["".concat(i,".").concat(m)]||d[m]||p[m]||l;return n?a.createElement(f,s(s({ref:t},c),{},{components:n})):a.createElement(f,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,s=new Array(l);s[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o.mdxType="string"==typeof e?e:r,s[1]=o;for(var u=2;u<l;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5688:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return i},toc:function(){return u},default:function(){return p}});var a=n(2122),r=n(9756),l=(n(7294),n(3905)),s={title:"Effets Atomiques",sidebar_label:"Effets Atomiques"},o=void 0,i={unversionedId:"guides/atom-effects",id:"guides/atom-effects",isDocsHomePage:!1,title:"Effets Atomiques",description:"Effets Atomiques est une nouvelle API exp\xe9rimentale pour la gestion des effets secondaires et l'initialisation des atomes Recoil. Ils ont une vari\xe9t\xe9 d'applications utiles telles que la persistance d'\xe9tat, la synchronisation d'\xe9tat, la gestion de l'historique, la journalisation, etc. Ils sont d\xe9finis dans le cadre de la d\xe9finition de l'atome, de sorte que chaque atome peut sp\xe9cifier et composer ses propres politiques. Cette API est toujours en \xe9volution, et donc marqu\xe9e comme _UNSTABLE.",source:"@site/i18n/fr/docusaurus-plugin-content-docs/current/guides/atom-effects.md",sourceDirName:"guides",slug:"/guides/atom-effects",permalink:"/fr/docs/guides/atom-effects",editUrl:"https://github.com/facebookexperimental/Recoil/edit/docs/docs/i18n/fr/docusaurus-plugin-content-docs/current/guides/atom-effects.md",version:"current",frontMatter:{title:"Effets Atomiques",sidebar_label:"Effets Atomiques"},sidebar:"docs",previous:{title:"Requ\xeates asynchrones",permalink:"/fr/docs/guides/asynchronous-data-queries"},next:{title:"Test",permalink:"/fr/docs/guides/testing"}},u=[{value:"<em>NOTE IMPORTANTE</em>",id:"note-importante",children:[{value:"Comparaison aux Effets React",id:"comparaison-aux-effets-react",children:[]},{value:"Comparaison aux Instantan\xe9s",id:"comparaison-aux-instantan\xe9s",children:[]}]},{value:"Exemple de la journalisation",id:"exemple-de-la-journalisation",children:[]},{value:"Exemple de l&#39;historique",id:"exemple-de-lhistorique",children:[]},{value:"Exemple de synchronisation d&#39;\xe9tat",id:"exemple-de-synchronisation-d\xe9tat",children:[]},{value:"Exemple de Cache avec \xc9criture Imm\xe9diate",id:"exemple-de-cache-avec-\xe9criture-imm\xe9diate",children:[]},{value:"Persistance locale",id:"persistance-locale",children:[]},{value:"Persistance Asynchrone",id:"persistance-asynchrone",children:[{value:"Initialiser avec une <code>Promise</code>",id:"initialiser-avec-une-promise",children:[]},{value:"setSelf() asynchrone",id:"setself-asynchrone",children:[]}]},{value:"R\xe9trocompatibilit\xe9",id:"r\xe9trocompatibilit\xe9",children:[]},{value:"Persistance de l&#39;historique des URL du navigateur",id:"persistance-de-lhistorique-des-url-du-navigateur",children:[]}],c={toc:u};function p(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Effets Atomiques est une nouvelle API exp\xe9rimentale pour la gestion des effets secondaires et l'initialisation des atomes Recoil. Ils ont une vari\xe9t\xe9 d'applications utiles telles que la persistance d'\xe9tat, la synchronisation d'\xe9tat, la gestion de l'historique, la journalisation, etc. Ils sont d\xe9finis dans le cadre de la d\xe9finition de l'atome, de sorte que chaque atome peut sp\xe9cifier et composer ses propres politiques. Cette API est toujours en \xe9volution, et donc marqu\xe9e comme ",(0,l.kt)("inlineCode",{parentName:"p"},"_UNSTABLE"),"."),(0,l.kt)("hr",null),(0,l.kt)("h2",{id:"note-importante"},(0,l.kt)("em",{parentName:"h2"},"NOTE IMPORTANTE")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},(0,l.kt)("em",{parentName:"strong"},"Cette API est actuellement en cours de d\xe9veloppement et changera. Merci de restez \xe0 l'\xe9coute..."))),(0,l.kt)("hr",null),(0,l.kt)("p",null,"Une ",(0,l.kt)("em",{parentName:"p"},"effet atomique")," est une ",(0,l.kt)("em",{parentName:"p"},"function")," avec la d\xe9finition suivante."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"type AtomEffect<T> = ({\n  node: RecoilState<T>, // Une r\xe9f\xe9rence \xe0 l'atome lui m\xeame\n  trigger: 'get' | 'set', // L'action qui \xe0 d\xe9clancher l'initialisation de l'atome\n\n  // Fonction de rappel pour assigner ou r\xe9initialiser la valeur de l'atome.\n  // Ceci peut \xeatre appel\xe9 directement depuis la fonction d'effet atomique pour initialiser \n  // la valeur initiale de l'atome, ou appel\xe9 ult\xe9rieurement de fa\xe7on asynchrone pour la changer\n  setSelf: (\n    | T\n    | DefaultValue\n    | Promise<T | DefaultValue> // Seulement autoriser pour initialiser pour le moment\n    | ((T | DefaultValue) => T | DefaultValue),\n  ) => void,\n  resetSelf: () => void,\n\n  // Souscription aux changements de la valeur de l'atome.\n  // La fonction de rappel n'est pas appeler suite \xe0 un changement suvenu du propre setSelf() de l'effet.\n  onSet: (\n    (newValue: T | DefaultValue, oldValue: T | DefaultValue) => void,\n  ) => void,\n\n}) => void | () => void; // Optionellement retourne une fonction de rappel de nettoyage\n")),(0,l.kt)("p",null,"Les effets atomiques sont attach\xe9s aux ",(0,l.kt)("a",{parentName:"p",href:"/docs/api-reference/core/atom"},"atomes")," via l'option ",(0,l.kt)("inlineCode",{parentName:"p"},"effects_UNSTABLE"),". Chaque atome peut r\xe9f\xe9rencer un tableau de ces fonctions d'effet d'atome qui sont appel\xe9es par ordre de priorit\xe9 lorsque l'atome est initialis\xe9. Les atomes sont initialis\xe9s lorsqu'ils sont utilis\xe9s pour la premi\xe8re fois dans un ",(0,l.kt)("inlineCode",{parentName:"p"},"<RecoilRoot>"),", mais peuvent \xeatre r\xe9initialis\xe9s \xe0 nouveau s'ils n'\xe9taient pas utilis\xe9s et nettoy\xe9s. La fonction d'effet d'atome peut renvoyer un gestionnaire de nettoyage facultatif pour g\xe9rer les effets secondaires du nettoyage. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"const myState = atom({\n  key: 'MyKey',\n  default: null,\n  effects_UNSTABLE: [\n    () => {\n      ...effect 1...\n      return () => ...cleanup effect 1...;\n    },\n    () => { ...effect 2... },\n  ],\n});\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/api-reference/utils/atomFamily"},"Les familles d'atomes")," supportent aussi les effects parametr\xe9s ou non-parametr\xe9s:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"const myStateFamily = atomFamily({\n  key: 'MyKey',\n  default: null,\n  effects_UNSTABLE: param => [\n    () => {\n      ...effect 1 using param...\n      return () => ...cleanup effect 1...;\n    },\n    () => { ...effect 2 using param... },\n  ],\n});\n")),(0,l.kt)("h3",{id:"comparaison-aux-effets-react"},"Comparaison aux Effets React"),(0,l.kt)("p",null,"Les Effets Actomiques pourraient g\xe9n\xe9ralement \xeatre impl\xe9ment\xe9s via React ",(0,l.kt)("inlineCode",{parentName:"p"},"useEffect()"),". Cependant, l'ensemble d'atomes est cr\xe9\xe9 en dehors d'un contexte React, et il peut \xeatre difficile de g\xe9rer les effets \xe0 partir des composants React, en particulier pour les atomes cr\xe9\xe9s dynamiquement. Ils ne peuvent pas non plus \xeatre utilis\xe9s pour initialiser la valeur de l'atome initiale ou \xeatre utilis\xe9s avec le rendu c\xf4t\xe9 serveur. Utiliser des effets atomiques co-localise \xe9galement les effets avec les d\xe9finitions d'atome."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"const myState = atom({key: 'Key', default: null});\n\nfunction MyStateEffect(): React.Node {\n  const [value, setValue] = useRecoilState(myState);\n  useEffect(() => {\n    // Appel\xe9 quand la valeur de l'atome change\n    store.set(value);\n    store.onChange(setValue);\n    return () => { store.onChange(null); }; // Effet de nettoyage\n  }, [value]);\n  return null;\n}\n\nfunction MyApp(): React.Node {\n  return (\n    <div>\n      <MyStateEffect />\n      ...\n    </div>\n  );\n}\n")),(0,l.kt)("h3",{id:"comparaison-aux-instantan\xe9s"},"Comparaison aux Instantan\xe9s"),(0,l.kt)("p",null,"Les ",(0,l.kt)("a",{parentName:"p",href:"/docs/api-reference/core/Snapshot#hooks"},(0,l.kt)("inlineCode",{parentName:"a"},"Snapshot hooks"))," peut \xe9galement surveiller les changements d'\xe9tat des atomes et la prop ",(0,l.kt)("inlineCode",{parentName:"p"},"initializeState")," dans ",(0,l.kt)("a",{parentName:"p",href:"/docs/api-reference/core/RecoilRoot"},(0,l.kt)("inlineCode",{parentName:"a"},"<RecoilRoot>"))," peut initialiser les valeurs pour le rendu initial. Cependant, ces API surveillent tous les changements d'\xe9tat et peuvent \xeatre g\xeanantes pour g\xe9rer les atomes dynamiques, en particulier les familles d'atomes. Avec les effets atomiques, l'effet secondaire peut \xeatre d\xe9fini par atome parall\xe8lement \xe0 la d\xe9finition de l'atome et plusieurs r\xe8gles peuvent \xeatre facilement compos\xe9es. "),(0,l.kt)("h2",{id:"exemple-de-la-journalisation"},"Exemple de la journalisation"),(0,l.kt)("p",null,"Un exemple simple d'utilisation des effets atomiques est la journalisation des changements d'\xe9tat d'un atome sp\xe9cifique."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"const currentUserIDState = atom({\n  key: 'CurrentUserID',\n  default: null,\n  effects_UNSTABLE: [\n    ({onSet}) => {\n      onSet(newID => {\n        console.debug(\"Current user ID:\", newID);\n      });\n    },\n  ],\n});\n")),(0,l.kt)("h2",{id:"exemple-de-lhistorique"},"Exemple de l'historique"),(0,l.kt)("p",null,"Un exemple plus complexe de journalisation pourrait conserver un historique des modifications. Cet exemple fournit un effet qui maintient une file d'attente d'historique des changements d'\xe9tat avec des gestionnaires de rappel qui annulent cette modification particuli\xe8re:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"const history: Array<{\n  label: string,\n  undo: () => void,\n}> = [];\n\nconst historyEffect = name => ({setSelf, onSet}) => {\n  onSet((newValue, oldValue) => {\n    history.push({\n      label: `${name}: ${JSON.serialize(oldValue)} -> ${JSON.serialize(newValue)}`,\n      undo: () => {\n        setSelf(oldValue);\n      },\n    });\n  });\n};\n\nconst userInfoState = atomFamily({\n  key: 'UserInfo',\n  default: null,\n  effects_UNSTABLE: userID => [\n    historyEffect(`${userID} user info`),\n  ],\n});\n")),(0,l.kt)("h2",{id:"exemple-de-synchronisation-d\xe9tat"},"Exemple de synchronisation d'\xe9tat"),(0,l.kt)("p",null,"Il peut \xeatre utile d'utiliser des atomes comme valeur locale en cache d'un autre \xe9tat tel qu'une base de donn\xe9es distante, un stockage local, etc. Vous pouvez d\xe9finir la valeur par d\xe9faut d'un atome en utilisant la propri\xe9t\xe9 ",(0,l.kt)("inlineCode",{parentName:"p"},"default")," avec un s\xe9lecteur pour obtenir la valeur dans l'objet d'\xe9tat. Cependant, ce n'est qu'une recherche ponctuelle; si la valeur objet d'\xe9tat change, la valeur de l'atome ne changera pas. Avec les effets, nous pouvons nous abonner \xe0 l'objet d'\xe9tat et mettre \xe0 jour la valeur de l'atome chaque fois que le l'objet d'\xe9tat change. L'appel de ",(0,l.kt)("inlineCode",{parentName:"p"},"setSelf()")," \xe0 partir de l'effet initialisera l'atome \xe0 cette valeur et sera utilis\xe9 pour le rendu initial. Si l'atome est r\xe9initialis\xe9, il reviendra \xe0 la valeur par d\xe9faut, pas \xe0 la valeur initialis\xe9e. "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"const syncStorageEffect = userID => ({setSelf, trigger}) => {\n  // Initialize atom value to the remote storage state\n  if (trigger === 'get') { // Avoid expensive initialization\n    setSelf(myRemoteStorage.get(userID)); // Call synchronously to initialize\n  }\n\n  // Subscribe to remote storage changes and update the atom value\n  myRemoteStorage.onChange(userID, userInfo => {\n    setSelf(userInfo); // Call asynchronously to change value\n  });\n\n  // Cleanup remote storage subscription\n  return () => {\n    myRemoteStorage.onChange(userID, null);\n  };\n};\n\nconst userInfoState = atomFamily({\n  key: 'UserInfo',\n  default: null,\n  effects_UNSTABLE: userID => [\n    historyEffect(`${userID} user info`),\n    syncStorageEffect(userID),\n  ],\n});\n")),(0,l.kt)("h2",{id:"exemple-de-cache-avec-\xe9criture-imm\xe9diate"},"Exemple de Cache avec \xc9criture Imm\xe9diate"),(0,l.kt)("p",null,"Nous pouvons \xe9galement synchroniser de mani\xe8re bidirectionnelle les valeurs d'atome avec un stockage distant afin que les modifications sur le serveur mettent \xe0 jour la valeur de l'atome et les modifications de l'atome local soient r\xe9\xe9crites sur le serveur. L'effet n'appellera pas le gestionnaire ",(0,l.kt)("inlineCode",{parentName:"p"},"onSet()")," lorsqu'il est modifi\xe9 via ",(0,l.kt)("inlineCode",{parentName:"p"},"setSelf()")," ceci pour \xe9viter les boucles infinies."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"const syncStorageEffect = userID => ({setSelf, onSet, trigger}) => {\n  // Initialiser la valeur de l'atome avec la valeur distante\n  if (trigger === 'get') { // \xc9viter une initalisation couteuse\n    setSelf(myRemoteStorage.get(userID)); // Appel sychrone pour initialiser\n  }\n\n  // Souscription aux changements distants et mise \xe0 jour de la valeur de l'atome\n  myRemoteStorage.onChange(userID, userInfo => {\n    setSelf(userInfo); // Appel asychrone pour changer la valeur\n  });\n\n  // Souscription aux changements locaux et mise \xe0 jour de la valeur distante\n  onSet(userInfo => {\n    myRemoteStorage.set(userID, userInfo);\n  });\n\n  // Nettoyer les souscriptions\n  return () => {\n    myRemoteStorage.onChange(userID, null);\n  };\n};\n")),(0,l.kt)("h2",{id:"persistance-locale"},"Persistance locale"),(0,l.kt)("p",null,"Les Effets Atomiques peuvent \xeatre utilis\xe9s pour conserver l'\xe9tat de l'atome avec le ",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/fr/docs/Web/API/Window/localStorage"},"stockage local du navigateur"),". ",(0,l.kt)("inlineCode",{parentName:"p"},"localStorage")," est synchrone, nous pouvons donc r\xe9cup\xe9rer les donn\xe9es directement sans ",(0,l.kt)("inlineCode",{parentName:"p"},"async")," ",(0,l.kt)("inlineCode",{parentName:"p"},"await")," ou ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),"."),(0,l.kt)("p",null,"Notez que les exemples suivants sont simplifi\xe9s \xe0 des fins d'illustration et ne couvrent pas tous les cas."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"const localStorageEffect = key => ({setSelf, onSet}) => {\n  const savedValue = localStorage.getItem(key)\n  if (savedValue != null) {\n    setSelf(JSON.parse(savedValue));\n  }\n\n  onSet(newValue => {\n    if (newValue instanceof DefaultValue) {\n      localStorage.removeItem(key);\n    } else {\n      localStorage.setItem(key, JSON.stringify(newValue));\n    }\n  });\n};\n\nconst currentUserIDState = atom({\n  key: 'CurrentUserID',\n  default: 1,\n  effects_UNSTABLE: [\n    localStorageEffect('current_user'),\n  ]\n});\n")),(0,l.kt)("h2",{id:"persistance-asynchrone"},"Persistance Asynchrone"),(0,l.kt)("p",null,"Si vos donn\xe9es persistantes doivent \xeatre r\xe9cup\xe9r\xe9es de mani\xe8re asynchrone, vous pouvez soit ",(0,l.kt)("a",{parentName:"p",href:"#initialize-with-promise"},"utiliser une ",(0,l.kt)("inlineCode",{parentName:"a"},"Promise"))," dans la fonction ",(0,l.kt)("inlineCode",{parentName:"p"},"setSelf() "),"ou l'appeler ",(0,l.kt)("a",{parentName:"p",href:"#asynchronous-setself"},"de fa\xe7on asynchrone"),"."),(0,l.kt)("p",null,"Ci-dessous, nous utiliserons ",(0,l.kt)("inlineCode",{parentName:"p"},"AsyncLocalStorage")," ou",(0,l.kt)("inlineCode",{parentName:"p"}," localForage")," comme exemple de conteneur d'\xe9tat asynchrone."),(0,l.kt)("h3",{id:"initialiser-avec-une-promise"},"Initialiser avec une ",(0,l.kt)("inlineCode",{parentName:"h3"},"Promise")),(0,l.kt)("p",null,"En appelant de mani\xe8re synchrone ",(0,l.kt)("inlineCode",{parentName:"p"},"setSelf()")," avec une ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),", vous pourrez envelopper les composants \xe0 l'int\xe9rieur de ",(0,l.kt)("inlineCode",{parentName:"p"},"<RecoilRoot /> "),"avec un composant ",(0,l.kt)("inlineCode",{parentName:"p"},"<Suspense /> "),"pour afficher un repli en attendant que ",(0,l.kt)("inlineCode",{parentName:"p"},"Recoil")," charge les valeurs persist\xe9es. ",(0,l.kt)("inlineCode",{parentName:"p"},"<Suspense>")," affichera un repli jusqu'\xe0 ce que la ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise")," fournie \xe0v",(0,l.kt)("inlineCode",{parentName:"p"},"setSelf()")," r\xe9solve. Si l'atome est d\xe9fini avant la r\xe9solution de la ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),", la valeur initialis\xe9e sera ignor\xe9e."),(0,l.kt)("p",null,"Notez que si les ",(0,l.kt)("inlineCode",{parentName:"p"},"atomes"),' sont "r\xe9initialis\xe9s" ult\xe9rieurement, ils reviendront \xe0 leur valeur par d\xe9faut, et non \xe0 la valeur initialis\xe9e. '),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"const localForageEffect = key => ({setSelf, onSet}) => {\n  setSelf(localForage.getItem(key).then(savedValue =>\n    savedValue != null\n      ? JSON.parse(savedValue)\n      : new DefaultValue() // Abort initialization if no value was stored\n  ));\n\n  onSet(newValue => {\n    if (newValue instanceof DefaultValue) {\n      localStorage.removeItem(key);\n    } else {\n      localStorage.setItem(key, JSON.stringify(newValue));\n    }\n  });\n};\n\nconst currentUserIDState = atom({\n  key: 'CurrentUserID',\n  default: 1,\n  effects_UNSTABLE: [\n    localForageEffect('current_user'),\n  ]\n});\n")),(0,l.kt)("h3",{id:"setself-asynchrone"},"setSelf() asynchrone"),(0,l.kt)("p",null,"Avec cette approche, vous pouvez appeler de mani\xe8re asynchrone ",(0,l.kt)("inlineCode",{parentName:"p"},"setSelf()")," lorsque la valeur est disponible. Contrairement \xe0 l'initialisation \xe0 une ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise"),", la valeur par d\xe9faut de l'atome sera utilis\xe9e initialement, donc ",(0,l.kt)("inlineCode",{parentName:"p"},"<Suspense>")," n'affichera pas de repli, sauf si la valeur par d\xe9faut de l'atome est un s\xe9lecteur bas\xe9 sur une ",(0,l.kt)("inlineCode",{parentName:"p"},"Promise")," ou autrement asynchrone. Si l'atome \xe0 une valeur avant l'appel de ",(0,l.kt)("inlineCode",{parentName:"p"},"setSelf()"),", alors celle-ci sera \xe9cras\xe9e par ",(0,l.kt)("inlineCode",{parentName:"p"},"setSelf()"),". Cette approche ne se limite pas seulement \xe0 ",(0,l.kt)("inlineCode",{parentName:"p"},"await"),", mais \xe0 toute utilisation asynchrone de ",(0,l.kt)("inlineCode",{parentName:"p"},"setSelf()"),", comme avec ",(0,l.kt)("inlineCode",{parentName:"p"},"setTimeout()"),". "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"const localForageEffect = key => ({setSelf, onSet}) => {\n  /** If there's a persisted value - set it on load  */\n  const loadPersisted = async () => {\n    const savedValue = await localForage.getItem(key);\n\n    if (savedValue != null) {\n      setSelf(JSON.parse(savedValue));\n    }\n  };\n\n  // Load the persisted data\n  loadPersisted();\n\n  onSet(newValue => {\n    if (newValue instanceof DefaultValue) {\n      localForage.removeItem(key);\n    } else {\n      localForage.setItem(key, JSON.stringify(newValue));\n    }\n  });\n};\n\nconst currentUserIDState = atom({\n  key: 'CurrentUserID',\n  default: 1,\n  effects_UNSTABLE: [\n    localForageEffect('current_user'),\n  ]\n});\n")),(0,l.kt)("h2",{id:"r\xe9trocompatibilit\xe9"},"R\xe9trocompatibilit\xe9"),(0,l.kt)("p",null,"Que ce passe-t-il si vous changez le format d'un atome? Le chargement d'une page avec le nouveau format avec un ",(0,l.kt)("inlineCode",{parentName:"p"},"localStorage")," bas\xe9 sur l'ancien format peut poser un probl\xe8me. Vous pouvez cr\xe9er des effets pour g\xe9rer la restauration et la validation des valeurs d'une mani\xe8re \xe0 conserver la s\xfbret\xe9 du typage: "),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"type PersistenceOptions<T>: {\n  key: string,\n  restorer: (mixed, DefaultValue) => T | DefaultValue,\n};\n\nconst localStorageEffect = <T>(options: PersistenceOptions<T>) => ({setSelf, onSet}) => {\n  const savedValue = localStorage.getItem(options.key)\n  if (savedValue != null) {\n    setSelf(options.restorer(JSON.parse(savedValue), new DefaultValue()));\n  }\n\n  onSet(newValue => {\n    if (newValue instanceof DefaultValue) {\n      localStorage.removeItem(options.key);\n    } else {\n      localStorage.setItem(options.key, JSON.stringify(newValue));\n    }\n  });\n};\n\nconst currentUserIDState = atom<number>({\n  key: 'CurrentUserID',\n  default: 1,\n  effects_UNSTABLE: [\n    localStorageEffect({\n      key: 'current_user',\n      restorer: (value, defaultValue) =>\n        // Les valeurs sont couremment stock\xe9 en tant que nombres\n        typeof value === 'number'\n          ? value\n          // Si la valeur \xe9tait pr\xe9c\xe9demment une cha\xeene de charact\xe8res, parser en nombre\n          : typeof value === 'string'\n          ? parseInt(value, 10)\n          // sinon utiliser la valeur par d\xe9faut.\n          : defaultValue\n    }),\n  ],\n});\n")),(0,l.kt)("p",null,"Que faire si la cl\xe9 utilis\xe9e pour conserver la valeur change? Ou ce qui \xe9tait conserv\xe9 en utilisant une cl\xe9 en utilise maintenant plusieurs? Ou vice versa? Cela peut \xe9galement \xeatre g\xe9r\xe9 de mani\xe8re pr\xe9servant la s\xfbret\xe9 du typage:"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"type PersistenceOptions<T>: {\n  key: string,\n  restorer: (mixed, DefaultValue, Map<string, mixed>) => T | DefaultValue,\n};\n\nconst localStorageEffect = <T>(options: PersistenceOptions<T>) => ({setSelf, onSet}) => {\n  const savedValues = parseValuesFromStorage(localStorage);\n  const savedValue = savedValues.get(options.key);\n  setSelf(\n    options.restorer(savedValue ?? new DefaultValue(), new DefaultValue(), savedValues),\n  );\n\n  onSet(newValue => {\n    if (newValue instanceof DefaultValue) {\n      localStorage.removeItem(options.key);\n    } else {\n      localStorage.setItem(options.key, JSON.stringify(newValue));\n    }\n  });\n};\n\nconst currentUserIDState = atom<number>({\n  key: 'CurrentUserID',\n  default: 1,\n  effects_UNSTABLE: [\n    localStorageEffect({\n      key: 'current_user',\n      restorer: (value, defaultValue, values) => {\n        if (typeof value === 'number') {\n          return value;\n        }\n\n        const oldValue = values.get('old_key');\n        if (typeof oldValue === 'number') {\n          return oldValue;\n        }\n\n        return defaultValue;\n      },\n    }),\n  ],\n});\n")),(0,l.kt)("h2",{id:"persistance-de-lhistorique-des-url-du-navigateur"},"Persistance de l'historique des URL du navigateur"),(0,l.kt)("p",null,"L'\xe9tat de l'atome peut \xe9galement \xeatre conserv\xe9 et synchronis\xe9 avec l'historique des URL du navigateur. Cela peut \xeatre utile pour que les changements d'\xe9tat mettent \xe0 jour l'URL actuelle afin qu'elle puisse \xeatre enregistr\xe9e ou partag\xe9e avec d'autres pour restaurer cet \xe9tat. Il peut \xe9galement \xeatre int\xe9gr\xe9 \xe0 l'historique du navigateur pour exploiter les boutons avant / arri\xe8re du navigateur. ",(0,l.kt)("em",{parentName:"p"},"Des exemples ou une biblioth\xe8que pour fournir ce type de persistance sont \xe0 venir ...")))}p.isMDXComponent=!0}}]);