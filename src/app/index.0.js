
// [castelog:html5izable] ACTIVADO con: {"autor":"allnulled","nombre":"index","version":"0","contenido":{"head":"<head>\n    <title>🌐 Core Natural Language Processing by HTTP</title>\n    <meta charset=\"utf8\" />\n    <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\" />\n    <style></style>\n    <script src=\"./calo.js\"></script>\n    <script src=\"./core-nlp-by-http-gui.js\"></script>\n</head>","body":"<body><div id=\"app\"></div></body>"}}

const App = Castelog.metodos.una_aplicacion_vue2(
  "App",
  "<div class=\"App Component Castelog-app\">"
 + "    <router-view></router-view>"
 + "  </div>",
  function(component) {return { data() {try {
return { 
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
},
watch:{ 
},
beforeMount() {
},
mounted() {
}
};},
  "html {}\n    body {}\n    .Component {}\n    .App {}\n",
  {},
  [ { path:"/",
name:"Home",
component:CoreNlpByHttpGui,
props:{ 
}
} ],
  { es:{ 
},
en:{ 
},
ca:{ 
}
},
  "#app");