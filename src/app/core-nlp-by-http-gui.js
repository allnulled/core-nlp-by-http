
window.CoreNlpByHttpGuiSentence = Castelog.metodos.un_componente_vue2("CoreNlpByHttpGuiSentence",
  "<div class=\"CoreNlpByHttpGuiSentence Component\">"
 + "    <div style=\"padding-left: 10px;\">"
 + "      <div style=\"border-left: 0px solid blue;\">"
 + "        <div v-if=\"internal_sentence.elements\">"
 + "          <div v-for=\"subelement, subelement_index in internal_sentence.elements\" v-bind:key=\"'core-nlp-sentence-' + uuid + '-attribute-' + subelement_index\">"
 + "            <div style=\"padding: 5px;\" v-if=\"subelement.attributes.value !== '.' \">"
 + "              <span style=\"margin-left: 5px; font-weight: bold; border: 3px solid blue;\" v-if=\"subelement.name === 'node'\">"
 + "                <span style=\"background-color: rgba(0,0,255,0.4); color: black;\">{{ gui.traducir_equivalencia_gramatica(subelement.attributes.value) }}: </span>"
 + "                <span>{{ gui.extraer_texto_plano_de_ast(subelement, true) }}</span>"
 + "              </span>"
 + "              <span style=\"margin-left: 5px; font-weight: bold; border: 3px solid green; background-color: rgba(0,255,0,0.4); color: black;\" v-else>"
 + "                <span style=\"\">Text: </span>"
 + "                <span>{{ subelement.attributes.value }}</span>"
 + "              </span>"
 + "            </div>"
 + "            <CoreNlpByHttpGuiSentence :sentence=\"subelement\" :gui=\"gui\" />"
 + "          </div>"
 + "        </div>"
 + "      </div>"
 + "    </div>"
 + "  </div>",
  function(component) {return { props:{ uuid:{ type:String,
default:function() {try {
return Castelog.metodos.un_texto_aleatorio(20, undefined);
} catch(error) {
console.log(error);
throw error;
}

}
},
sentence:{ type:Object,
required:true
},
gui:{ type:Object,
required:true
}
},
data() {try {
return { internal_sentence:this.sentence,
error:undefined,
error_timeout_id:0
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ 
}
};},
  null);
window.CoreNlpByHttpGui = Castelog.metodos.un_componente_vue2("CoreNlpByHttpGui",
  "<div class=\"CoreNlpByHttpGui Component win7\">"
 + "    <div class=\"window\">"
 + "      <div class=\"title-bar\">"
 + "        <div class=\"title-bar-text\">🌐 Core Natural Language Processing by HTTP</div>"
 + "      </div>"
 + "      <div class=\"window-body\">"
 + "        <textarea v-model=\"texto_para_analizar\" style=\"width:100%; min-height: 80px; resize: vertical;\" placeholder=\"Insert text in English here...\" :disabled=\"esta_analizando\"></textarea>"
 + "        <button v-on:click=\"iniciar_analisis\" style=\"width:100%;\" v-if=\"!esta_analizando\">Analyze syntax</button>"
 + "        <div v-else>"
 + "          <div role=\"progressbar\" class=\"animate\">"
 + "            <div :style=\"'width: ' + tiene_analizado_porcentaje + '%'\"></div>"
 + "          </div>"
 + "        </div>"
 + "      </div>"
 + "      <div class=\"status-bar\">"
 + "        <div class=\"status-bar-field\">"
 + "          <div v-if=\"error\">"
 + "            <span>✗ Error: {{ error.message }} (type «{{ error.name }}»)</span>"
 + "          </div>"
 + "          <div v-else>"
 + "            <span>✔ The app is working fine.</span>"
 + "          </div>"
 + "        </div>"
 + "      </div>"
 + "    </div>"
 + "    <template v-for=\"report, report_index in reportes\">"
 + "      <div v-bind:key=\"'syntax-report-n-' + report_index\">"
 + "        <div style=\"min-height:10px;\"></div>"
 + "        <div class=\"window\">"
 + "          <div class=\"title-bar\">"
 + "            <div class=\"title-bar-text\">Syntax analysis report nº{{ report_index+1 }}</div>"
 + "            <div class=\"title-bar-controls\">"
 + "              <button aria-label=\"Minimize\" v-on:click=\"() => minimize_report(report_index)\" v-if=\"report.estado_de_ventana !== 'minimizado'\"></button>"
 + "              <button aria-label=\"Maximize\" v-on:click=\"() => maximize_report(report_index)\" v-else></button>"
 + "              <button aria-label=\"Close\" v-on:click=\"() => close_report(report_index)\"></button>"
 + "            </div>"
 + "          </div>"
 + "          <template v-if=\"report.estado_de_ventana !== 'minimizado'\">"
 + "            <div class=\"window-body has-space\">"
 + "              <div style=\"padding:10px;\">"
 + "                <details>"
 + "                  <summary>Text:</summary>"
 + "                  <div>{{ report.text }}</div>"
 + "                </details>"
 + "                <details>"
 + "                  <summary>Response:</summary>"
 + "                  <div>{{ report.analysis }}</div>"
 + "                </details>"
 + "                <details v-if=\"report.visualization\">"
 + "                  <summary>Visualization:</summary>"
 + "                  <div>"
 + "                    <div>A total of {{ report.visualization.length }} sentences were analyzed.</div>"
 + "                    <details v-for=\"frase, frase_index in report.visualization\" v-bind:key=\"'reporte-' + report_index + '-visualizacion-frase-' + frase_index\">"
 + "                      <summary>Sentence nº {{ frase_index + 1 }}: </summary>"
 + "                      <div>"
 + "                        <div style=\"font-weight: bold; color: #228822;\">"
 + "                          <template v-for=\"palabra, palabra_index in extraer_texto_plano_de_ast(frase, true)\">"
 + "                            <button v-if=\"palabra !== '.'\" style=\"margin-right: 5px;\" v-on:click=\"() => buscar_significado_de(palabra)\" v-bind:key=\"'reporte-' + report_index + '-visualizacion-frase-' + frase_index + '-palabra-' + palabra_index\">{{ palabra }}</button>"
 + "                          </template>"
 + "                        </div>"
 + "                        <div v-if=\"ultimo_significado_buscado\">"
 + "                          <ul>"
 + "                            <li v-for=\"(acepcion, acepcion_index) in ultimo_significado_buscado\" v-bind:key=\"'acepcion-de-significado-' + acepcion_index\">"
 + "                              <span>{{ acepcion_index + 1 }}. {{ acepcion }}</span>"
 + "                            </li>"
 + "                          </ul>"
 + "                        </div>"
 + "                        <CoreNlpByHttpGuiSentence :sentence=\"frase\" :gui=\"self\" />"
 + "                      </div>"
 + "                    </details>"
 + "                  </div>"
 + "                </details>"
 + "              </div>"
 + "            </div>"
 + "            <div class=\"status-bar\">"
 + "              <div class=\"status-bar-field\">"
 + "                <span>✔ This report was made on «{{ report.date }}»,</span>"
 + "              </div>"
 + "            </div>"
 + "          </template>"
 + "        </div>"
 + "      </div>"
 + "    </template>"
 + "  </div>",
  function(component) {return { data() {try {
return { tiene_analizado_porcentaje:100,
esta_analizando:false,
error:undefined,
error_timeout_id:0,
texto_para_analizar:"This is a request. This is another request. And another.",
reportes:[  ],
self:this,
equivalencias_gramaticales:Object.assign({ "S":"Sintagma de oración",
"NP":"Sintagma nominal",
"NN":"Sustantivo",
"VP":"Sintagma verbal",
"DT":"Determinante",
"PP":"Sintagma preposicional",
"TO":"Preposición («to»: a, hacia)",
"IN":"Preposición («in»: a, en)",
"PRP":"Pronombre personal"
}, { "CC":"Conjunción de coordinación",
"CD":"Número cardinal",
"DT":"Determinante",
"EX":"Existencial allí",
"FW":"Palabra desconocida",
"IN":"Preposición o conjunción subordinante",
"JJ":"Adjetivo",
"JJR":"Adjetivo comparativo",
"JJS":"Adjetivo superlativo",
"LS":"Marcador de elemento de lista",
"MD":"Modal",
"NN":"Sustantivo singular",
"NNS":"Sustantivo plural",
"NNP":"Sustantivo propio singular",
"NNPS":"Sustantivo propio plural",
"PDT":"Predeterminante",
"POS":"Final posesivo",
"PRP":"Pronombre personal",
"PRP":"Pronombre posesivo",
"RB":"Adverbio",
"RBR":"Adverbio comparativo",
"RBS":"Adverbio superlativo",
"RP":"Partícula",
"SYM":"Símbolo",
"TO":"Preposición «to» como «a» o «hacia»",
"UH":"Interjección",
"VB":"Verbo en forma base",
"VBD":"Verbo en tiempo pasado",
"VBG":"Verbo en gerundio o present participle",
"VBN":"Verbo o past participle",
"VBP":"Verbo presente en no-3ª persona del singular",
"VBZ":"Verbo presemte en 3ª persona del singular",
"WDT":"Determinante wh",
"WP":"Pronombre wh",
"WP":"Pronombre posesivo wh",
"WRB":"Adverbio wh"
} ),
ultimo_significado_buscado:false
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ mostrar_error( error ) {try {
this.error = error;
this.$forceUpdate( true );
clearTimeout( this.error_timeout_id );
this.error_timeout_id = setTimeout( () => {try {
this.error = undefined;
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
1000 * 4 );
} catch(error) {
console.log(error);
throw error;
}

},
async iniciar_analisis() {try {
this.esta_analizando = true;
const respuesta = (await Castelog.metodos.una_peticion_http("http://127.0.0.1:9095/query?q=" + this.texto_para_analizar, "GET", null, null, null, null));
this.reportes.push({ text:this.texto_para_analizar,
analysis:respuesta.data,
visualization:this.procesar_analisis( respuesta.data ),
date:Castelog.metodos.un_formateo_de_fecha(new Date(  ), null, "un formateo de fecha a texto")
})
this.esta_analizando = false;
this.$forceUpdate( true );
} catch(error) {
this.mostrar_error( error );
this.esta_analizando = false;}
},
minimize_report( reporte_index ) {try {
this.reportes[ reporte_index ].estado_de_ventana = "minimizado";
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
maximize_report( reporte_index ) {try {
this.reportes[ reporte_index ].estado_de_ventana = "maximizado";
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
close_report( reporte_index ) {try {
this.reportes.splice( reporte_index,
1 );
this.$forceUpdate( true );
} catch(error) {
console.log(error);
throw error;
}

},
procesar_analisis( reports ) {try {
const reportes = ([  ]).concat(reports.result.syntax_tree.elements[ 0 ].elements );
for(let index = 0; index < reportes.length; index++) {const reporte = reportes[ index ];
Object.assign(reporte, { visualization:{ message:"OK"
}
} );}
return reportes;
} catch(error) {
console.log(error);
return [  ];}
},
extraer_texto_plano_de_ast( ast,
es_inicial = false ) {try {
let salida = [  ];
if(ast.name === "leaf") {
salida.push(ast.attributes.value)
}
if(ast.elements) {
for(let index = 0; index < ast.elements.length; index++) {const nodo = ast.elements[ index ];
salida = (salida).concat(this.extraer_texto_plano_de_ast( nodo ) );}
}
return salida;
} catch(error) {
console.log(error);
throw error;
}

},
async buscar_significado_de( palabra ) {try {
this.ultimo_significado_buscado = undefined;
const respuesta = (await Castelog.metodos.una_peticion_http("https://api.dictionaryapi.dev/api/v2/entries/en/" + palabra.toLowerCase(  ), "GET", null, null, null, null));
this.ultimo_significado_buscado = this.extraer_significado_de_respuesta( respuesta );
this.$forceUpdate( true );
} catch(error) {
this.mostrar_error( error );}
},
extraer_significado_de_respuesta( respuesta ) {try {
const definiciones = [  ];
const significados = respuesta.data[ 0 ].meanings;
for(let index_significados = 0; index_significados < significados.length; index_significados++) {const significado = significados[ index_significados ];
const acepciones = significado.definitions;
for(let index_acepciones = 0; index_acepciones < acepciones.length; index_acepciones++) {const acepcion = acepciones[ index_acepciones ];
definiciones.push(acepcion.definition)}}
return definiciones;
} catch(error) {
console.log(error);
throw error;
}

},
traducir_equivalencia_gramatica( simbolo_gramatical ) {try {
if(simbolo_gramatical in this.equivalencias_gramaticales) {
return this.equivalencias_gramaticales[ simbolo_gramatical ];
}
return simbolo_gramatical;
} catch(error) {
console.log(error);
throw error;
}

}
}
};},
  null);