# core-nlp-by-http

Analizador gramatical para inglés vía servidor HTTP local.

## Requisitos

Necesitas tener accesible directamente desde consola estos programas:

  - `java` versión `8 o superior` (por `core-nlp`, ver más allí)
  - `node`, yo estoy usando versión `18.15.0`
  - `npm`, yo estoy usando versión `9.5.0`
  - `git`, yo estoy usando versión `2.25.1`
  - `curl`, yo estoy usando versión `7.68.0` (para parchear `core-nlp-wrapper` automáticamente)
  - `7x`, yo estoy usando versión `16.02` (para parchear `core-nlp-wrapper` automáticamente)

Mi sistema operativo es `Ubuntu 20.04.6 LTS` de `64 bits`, pero todos estos programas deberían funcionar igual para Windows u otros.

## Instalación

Este código te hará ejecutar todos los pasos directamente: descarga, instalación, linkado y ejecución. Solo asegúrate que estás en un directorio vacío.

```sh
git clone https://github.com/allnulled/core-nlp-by-http.git .
npm run up
```

El primer comando será rápido, pero el segundo, lento, porque se instalarán las dependencias de `npm` y se descargará el fichero que `core-nlp-wrapper` necesita parchear, y ambas son operaciones algo costosas.

## Uso

### Explicación

El usuario solo debería ver una página web que se le abre automáticamente cuando clica `start.sh` o `start.bat`. 

Por debajo, `java` y `node.js`, que son 2 lenguajes de programación diferentes, se tienen que comunicar entre ellos mediante el sistema operativo. Esto es porque `core-nlp` funciona con `java`, y no hay tantos proyectos que hagan lo que `core-nlp`. Nosotros levantamos un servidor con `node.js` que, mediante un subproceso del sistema operativo y ficheros temporales, va a interactuar con `core-nlp` para extraer los análisis gramaticales (en inglés) que le pidamos.


### Ejecución

#### Vía explorador

Desde el explorador de ficheros que tengas, puedes hacer doble-click en `start.sh` (Linux) o `start.bat` (Windows) para levantar el servidor.

#### Vía consola

Desde la consola, cualquiera de estas 3 líneas hace lo mismo:

```sh
npm run up                 # levanta el servidor.
./bin/core_nlp_by_http.js  # hace lo mismo.
core_nlp_by_http           # hace lo mismo. requiere previamente de `npm link`
```

Permite los parámetros siguientes:

| Parámetro | Descripción |
| --------- | ----------- |
| `--port`  | Puerto del servidor. Es `9095` por defecto |
| `--app_id` | Nombre de la aplicación. Es `Core NLP by HTTP` por defecto |
| `--browser` | Navegador para el arranque. Es `firefox` por defecto. Probará `google_chrome` también. |

## Aplicación

### La interfaz gráfica

Una vez estás dentro de la aplicación, verás algo así:

![Ejemplo_de_la_interfaz_grafica_1](./dev/core_nlp_by_http_gui.png)

Este texto te permite interactuar con el `core-nlp` que es el que analizará el texto.

### La visualización del análisis

Cuando realizas un análisis, aparece una nueva ventanita con la información del análisis gramatical. La sección de `Visualization` es la que se ve así:

![Ejemplo_de_la_interfaz_grafica_5](./dev/core_nlp_by_http_gui_5.png)

### Obtener definiciones rápidas

Para obtener las definiciones de una palabra rápidamente, solo tienes que clicar en el bóton de la palabra, bajo `Visualization`. Se mostrarán los significados encontrados en `https://api.dictionaryapi.dev/api/v2/entries/en/` de dicha palabra.

![Ejemplo_de_la_interfaz_grafica_4](./dev/core_nlp_by_http_gui_4.png)

**NOTA: la continuación pasaría por obtener la palabra raíz de las palabras conjugadas (tanto nombres, verbos, adjetivos, adverbios, etc.) para buscar esa palabra en el diccionario, y así saber en cada caso el significado. Pero no encuentro APIs públicas que ofrezcan este servicio.** 

...¿Cuánto... cuánto hace que tenemos internet? Porque idioma inglés, buah. Bueno. Sé que estoy a una búsqueda de Google de encontrar la luz. ¿A que sí? Algún día, en algún momento, aparecerá la expresión que tengo que buscar en Google para que esto que digo ahora quede ridículo.

Y así, poco a poco, iré descubriendo que había software para recrear una conciencia. Y dotarla de un cuerpo. Sí. Pero en una pantalla. En una pantalla que jamás iba a convencer a nadie para que me DIERA PUTO TABACO Y PUTOS PORROS ASEGURADOS, MAFIOSOS DE MIERDA, EXISTENCIALES DE MIERDA, SMITHSONIAN DE MIERDA. Ejem, perdón. Digo... nada, que poco a poco se va viendo que todo esto... ES UNA PUTA FARSA, FARSANTES DE MIERDA, DEJAD DE VACILARME. Perdón. Mmmmm... sí.