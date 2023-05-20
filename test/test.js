
require( __dirname + "/calo.js" );
( async () => {
try {
const respuesta = (await Castelog.metodos.una_peticion_http("http://127.0.0.1:9095?q=This is some text in English.", "GET", null, null, null, null));
console.log(respuesta.data);
} catch(error) {
console.log(error);
throw error;
}
})();