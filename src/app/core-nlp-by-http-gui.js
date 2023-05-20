
window.CoreNlpByHttpGuiSentence = Castelog.metodos.un_componente_vue2("CoreNlpByHttpGuiSentence",
  "<div class=\"CoreNlpByHttpGuiSentence Component\">"
 + "    <div style=\"padding-left: 10px;\">"
 + "      <div style=\"border-left: 0px solid blue;\">"
 + "        <div v-if=\"internal_sentence.type && (internal_sentence.type !== 'element')\">"
 + "          <span style=\"font-weight: bold;\">Type:</span> {{ internal_sentence.type }}"
 + "        </div>"
 + "        <div v-if=\"internal_sentence.elements\">"
 + "          <div v-for=\"subelement, subelement_index in internal_sentence.elements\" v-bind:key=\"'core-nlp-sentence-' + uuid + '-attribute-' + subelement_index\">"
 + "            <div style=\"padding: 5px;\">"
 + "              <span style=\"margin-left: 5px; font-weight: bold; border: 3px solid blue;\">"
 + "                <span style=\"background-color: rgba(0,0,255,0.4); color: black;\">{{ internal_sentence.attributes.value }}: </span>"
 + "                <span>{{ gui.extraer_texto_plano_de_ast(internal_sentence, true) }}</span>"
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
 + "                        <div style=\"font-weight: bold; color: #228822;\">{{ extraer_texto_plano_de_ast(frase, true) }}</div>"
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
self:this
};
} catch(error) {
console.log(error);
throw error;
}

},
methods:{ muestro_error( error ) {try {
this.error = error;
clearTimeout( this.error_timeout_id );
this.error_timeout_id = setTimeout( () => {try {
this.error = undefined;
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
this.muestro_error( error );
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
let salida = "";
if(ast.name === "leaf") {
salida += " + «" + ast.attributes.value + "»";
}
if(ast.elements) {
for(let index = 0; index < ast.elements.length; index++) {const nodo = ast.elements[ index ];
salida += this.extraer_texto_plano_de_ast( nodo );}
}
if(es_inicial) {
return salida.replace( " + ",
"" );
}
return salida;
} catch(error) {
console.log(error);
throw error;
}

}
}
};},
  null);