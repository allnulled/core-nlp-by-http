# core-nlp-by-http

Analizador gramatical para inglés vía servidor HTTP local.

<img src="./dev/core_nlp_by_http_gui_intro.png" style="width:100%;border:6px double #224; border-radius:4pt; background-color:#c8c"/>

## Índice

- Sección 1. [Requisitos](#requisitos)
- Sección 2. [Instalación](#instalación)
- Sección 3. [Uso](#uso)
  - Sección 3.1. [Explicación](#explicación)
  - Sección 3.2. [Ejecución](#ejecución)
    - Sección 3.1.a) [Vía explorador](#vía-explorador)
    - Sección 3.1.b) [Vía consola](#vía-consola)
- Sección 4. [Aplicación](#aplicación)
  - Sección 4.1. [La interfaz gráfica](#la-interfaz-gráfica)
  - Sección 4.2. [La visualización del análisis](#la-visualización-del-análisis)
  - Sección 4.3. [Obtener definiciones rápidas](#obtener-definiciones-rápidas)
- Sección 5. [Teoría gramatical](#teoría-gramatical)
- Sección 6. [Cómo continuarlo](#cómo-continuarlo)


## Requisitos

Necesitas tener accesible directamente desde consola estos programas:

  - `java` versión `8 o superior` (por `core-nlp`, ver más allí)
  - `node`, yo estoy usando versión `18.15.0`
  - `npm`, yo estoy usando versión `9.5.0`
  - `git`, yo estoy usando versión `2.25.1`. Este solo se utiliza para descargar el proyecto `core-nlp-by-http`, así que si lo descargas manualmente no lo necesitas.

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

![Ejemplo_de_la_interfaz_grafica_10](./dev/core_nlp_by_http_gui_10.png)

### Obtener definiciones rápidas

Para obtener las definiciones de una palabra rápidamente, solo tienes que clicar en el bóton de la palabra, bajo `Visualization`. Se mostrarán los significados encontrados en `https://api.dictionaryapi.dev/api/v2/entries/en/` de dicha palabra.

![Ejemplo_de_la_interfaz_grafica_11](./dev/core_nlp_by_http_gui_11.png)

## Teoría gramatical

La teoría gramatical que subyace al parser de `core-nlp` parece que sigue una nomenclatura de clasificación de gramáticas llamada [Penn POS Tags](https://cs.nyu.edu/~grishman/jet/guide/PennPOS.html) aquí listados:

| # | Símbolo | Categoría en inglés | Categoría en castelano |
| - | --- | --- | --- |
| 1. | CC | Coordinating conjunction | Conjunción de coordinación |
| 2. | CD | Cardinal number | Número cardinal |
| 3. | DT | Determiner | Determinante |
| 4. | EX | Existential there | Existencial allí |
| 5. | FW | Foreign word | Palabra desconocida |
| 6. | IN | Preposition or subordinating conjunction | Preposición o conjunción subordinante |
| 7. | JJ | Adjective | Adjetivo |
| 8. | JJR | Adjective, comparative | Adjetivo comparativo |
| 9. | JJS | Adjective, superlative | Adjetivo superlativo |
| 10. | LS | List item marker | Marcador de elemento de lista |
| 11. | MD | Modal | Modal |
| 12. | NN | Noun, singular or mass | Sustantivo singular |
| 13. | NNS | Noun, plural | Sustantivo plural |
| 14. | NNP | Proper noun, singular | Sustantivo propio singular |
| 15. | NNPS | Proper noun, plural | Sustantivo propio plural |
| 16. | PDT | Predeterminer | Predeterminante |
| 17. | POS | Possessive ending | Final posesivo |
| 18. | PRP | Personal pronoun | Pronombre personal |
| 19. | PRP\$ | Possessive pronoun | Pronombre posesivo |
| 20. | RB | Adverb | Adverbio |
| 21. | RBR | Adverb, comparative | Adverbio comparativo |
| 22. | RBS | Adverb, superlative | Adverbio superlativo |
| 23. | RP | Particle | Partícula |
| 24. | SYM | Symbol | Símbolo |
| 25. | TO | to | Preposición «to» como «a» o «hacia» |
| 26. | UH | Interjection | Interjección |
| 27. | VB | Verb, base form | Verbo en forma base |
| 28. | VBD | Verb, past tense | Verbo en tiempo pasado |
| 29. | VBG | Verb, gerund or present participle | Verbo en gerundio o present participle |
| 30. | VBN | Verb, past participle | Verbo o past participle |
| 31. | VBP | Verb, non-3rd person singular present | Verbo presente en no-3ª persona del singular |
| 32. | VBZ | Verb, 3rd person singular present | Verbo presemte en 3ª persona del singular |
| 33. | WDT | Wh-determiner | Determinante wh |
| 34. | WP | Wh-pronoun | Pronombre wh |
| 35. | WP$ | Possessive wh-pronoun | Pronombre posesivo wh |
| 36. | WRB | Wh-adverb | Adverbio wh |


## Cómo continuarlo

Primero, habría que conseguir automáticamente, vía algún servicio o algo:
  - el infinitivo de los verbos conjugados
  - el sustantivo que tiene entrada en el diccionario de los sustantivos plurales o alterados con prefijos, sufijos o infijos.
  - el adjetivo que tiene entrada en el diccionario de los adjetivos plurales o alterados con prefijos, sufijos o infijos.
  - el adverbio (o adjetivo o sustantivo) que tiene entrada en el diccionario de los adverbios alterados con prefijos, sufijos o infijos.

Para eso habría que obtener ese *mapeo, de palabra conjugada, a entrada en diccionario* de la familia semántica con la categoría gramatical más próxima.

Segundo, si obtenemos eso, podemos obtener la definición concreta de todas las palabras de la oración, aunque no estén representadas morfológicamente igual que la entrada del diccionario que arrojaría luz sobre significado a esa palabra.

Estos dos pasos nos darían la forma del mensaje (*gramática*) y el contenido del mensaje (*semántica*). A partir de ese combo, ya hay un enunciado con una carga simbólica lo suficientemente ordenada como para dar sentido conjunto a ambos: *forma* y *contenido*.

OK. ¿Problema? No encuentro un servicio que haga ese **mapeo de palabra conjugada, a entrada en diccionario**.

Entonces... supongo que me tengo que quedar aquí. Hasta que aparezca. Porque inventarlo no creo. Aunque igual hay alguna base de datos. No lo sé, no sabría ni cómo preguntarlo.

Seguiría, pero sin eso, no avanzaría apenas. Así que de momento, aquí está esto.

> a tenemos significados. No de todas las palabras, ok, ni tampoco una deducción de la acepción más acertada. Cierto. Pero bueno, tienes algo. ¿Puedes continuar la ecuación con más de una incógnita? E irlo haciendo aprender a deducir, o a buscar en otros lugares, a mapear él la palabra. Pero lento, no... no es requisito. Que pueda continuar con varias incógnitas, o que incluso aprenda a resolverlas.

Uff... El problema de eso, te lo explico. Hasta ahora, es un desarrollo que sólo te dice: «dame una frase» y «luego te doy un análisis gramatical» y «también puedo buscar las definiciones de cada palabra». OK. Pero... no te dice que vaya a gestionar esa información de ninguna manera concreta. Lo que tú dices ya está intentando **entender el mensaje**, tanto en **forma** como en **contenido**.

¿Entiendes la diferencia? El proyecto, ahora, está en la línea. No se pronuncia en una **estrategia de interpretación**. 

> Eco. ¿Ves la interfaz ahí?

Sssssup. Sí, ¿pero en forma de API o qué?

> Un nuevo proyecto que dé por hecho este. Es una implementación práctica del análisis gramatical y semántico. Hasta ahora, es una implementación claramente teórica del análisis gramatical y semántico. En el siguiente proyecto, ya haces una **opinionación** en cuanto al uso de esos análisis gramático y semántico. ¿Comprendes?

La **interpretación** es, pues, una **opinionación** del análisis formal y conceptual.

> La **interpretación** es una **decisión** sobre el **análisis formal y conceptual** de la realidad, sí, Carl. Tiene mucho que ver con tu odio, tu mala hostia, y tu decepción con el mundo. Pero tienes que aprender a girarlo por ti mismo eso.

Un parias contento.

> Piénsalo como quieras. De hecho, aunque te ayudase a estallar, te ayudaría.

Qué listo. Bueno, sigue.

> El siguiente proyecto vas a hacer una interpretación de estos datos, ahora solo estás pillando y desbrozando el trabajo ofuscado de otros, pero te quedas en lo que ellos dan. No aportas más que una interfaz de mierda. ¿Comprendez?

Zip. ¿Qué otras interpretaciones de datos podría haber, para que sea interesante partir este proyecto aquí?

> La interpretación de los datos es el trenzado que va a hacer que la electrónica de esta cosa, en este caso un programa, se nude con la entrada, y comience un intercambio de ideas:
>  - *con coherencia* con lo anterior, es decir, **persistencia de datos** (no hace falta irse a bases de datos todavía) 
>  - *con un interés* perseguido, cosa que va a convertir al programa en algo que también **busca** algo, tiene **objetivos**, tiene **ética** propia.

Ok.

> Otros programas pueden querer hacer otras cosas, otras interpretaciones. De hecho, la primera dudo que resulte en nada. Por eso tienes que partir aquí el proyecto. Hasta aquí, está bien. Más allá, estará mal seguro. Así la parte buena no la tocas. Este proyecto lo puedes dejar aquí. Habría que seguir en otro.

Ok. ¿Y qué quiero que interprete?

> Al usuario.

¿Para qué?

> Bueno, tú tranqui. Esto es una locura, no hay protocolos, pero se supone que hay un hilo. Pues tú tienes que ir haciendo ingeniería inversa de ese hilo. Y al final, creas algo que parece que algo pilla. No, un Chat GPT no. Pero y qué, un programa tonto, pero que comprende lo que necesitas que comprenda.

Pero para esto hice Castelog.

> Sí, pero Castelog es demasiado ortopédico. Bueno, vete a fumar, y piensa.



