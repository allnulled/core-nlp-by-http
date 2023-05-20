
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
 + "              <div style=\"padding-left:10px;\">"
 + "                <details>"
 + "                  <summary>Text:</summary>"
 + "                  <p>{{ report.text }}</p>"
 + "                </details>"
 + "                <details>"
 + "                  <summary>Analysis:</summary>"
 + "                  <p>{{ report.analysis }}</p>"
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
texto_para_analizar:"This is a request.",
reportes:[  ]
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

}
}
};},
  null);