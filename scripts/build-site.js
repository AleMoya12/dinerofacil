const fs = require("fs");
const path = require("path");

const root = path.join(__dirname, "..");
const siteUrl = "https://www.dinerofacil.com.ar";
const updated = "2026-06-10";

const nav = [
  ["Finanzas personales", "/finanzas-personales"],
  ["Inversiones", "/inversiones"],
  ["Criptomonedas", "/criptomonedas"],
  ["Mercado", "/mercado"],
  ["Guias", "/guias"],
  ["Blog", "/blog"]
];

const featuredArticles = [
  "ciberseguridad-financiera-como-proteger-tus-cuentas-antes-de-invertir-online",
  "seo-para-proyectos-financieros-confianza-en-google",
  "una-buena-pagina-web-tambien-es-parte-de-la-confianza-financiera"
];

const articles = [
  {
    slug: "ciberseguridad-financiera-como-proteger-tus-cuentas-antes-de-invertir-online",
    title: "Ciberseguridad financiera: como proteger tus cuentas antes de invertir online",
    seoTitle: "Ciberseguridad financiera para invertir online con mas cuidado",
    description: "Guia educativa para proteger cuentas financieras, evitar phishing, cuidar claves y revisar plataformas antes de operar o invertir online.",
    date: "2026-06-10",
    category: "Seguridad digital",
    body: `
      <p>Invertir online se volvio parte de la vida cotidiana de muchas personas. Hoy es posible abrir una cuenta, consultar saldos, transferir fondos, operar instrumentos financieros o comprar criptoactivos desde una aplicacion. Esa comodidad permite aprender y administrar el dinero con mas autonomia, pero tambien exige una conducta de seguridad mas consciente. Antes de pensar en una estrategia de inversion, conviene revisar si las cuentas, los dispositivos y los habitos digitales estan preparados para proteger informacion sensible.</p>
      <p>La ciberseguridad financiera no es un tema reservado para especialistas. Es una capa basica de cuidado personal, tan importante como entender el riesgo de un activo o revisar los costos de una plataforma. Una clave debil, una sesion abierta en un equipo compartido o un enlace falso pueden exponer datos, fondos y documentacion. Por eso, en Dinero Facil recomendamos pensar la seguridad como una practica previa a cualquier decision de inversion.</p>
      <h2>Por que crece el riesgo en plataformas digitales</h2>
      <p>El aumento del uso de billeteras virtuales, brokers, exchanges y bancos digitales amplio la superficie de ataque. Donde hay usuarios nuevos, movimientos de dinero y poco conocimiento tecnico, tambien aparecen intentos de fraude. Los atacantes suelen aprovechar la urgencia, el miedo y la falta de informacion. Pueden enviar mensajes que imitan a una empresa conocida, crear sitios con nombres parecidos o pedir una validacion falsa para capturar credenciales.</p>
      <p>Un error frecuente es creer que el riesgo solo esta en la plataforma. En realidad, muchas intrusiones empiezan en el usuario: una contrasena repetida, una descarga dudosa, una red publica no confiable o una conversacion con alguien que se presenta como soporte. La seguridad se construye con capas. Ninguna medida aislada alcanza, pero varias decisiones simples reducen mucho la exposicion.</p>
      <h2>Phishing, claves debiles y falsas plataformas</h2>
      <p>El phishing consiste en engañar a una persona para que entregue datos o ingrese en una pagina falsa. Puede llegar por mensaje, buscadores, publicidad, chats o incluso llamadas. En el mundo financiero, el objetivo suele ser obtener usuario, clave, codigos temporales, datos de tarjetas o acceso a cuentas. La regla principal es no entrar a una plataforma desde enlaces recibidos al azar. Es preferible escribir la direccion manualmente, usar marcadores confiables y revisar con paciencia cada URL.</p>
      <p>Las contrasenas repetidas son otro punto debil. Si una clave se filtra en un servicio menor y la misma combinacion se usa en una cuenta financiera, el riesgo se multiplica. Un gestor de contrasenas puede ayudar a crear claves largas y distintas para cada servicio. Ademas, conviene activar el segundo factor de autenticacion siempre que este disponible, idealmente con una aplicacion autenticadora o una llave fisica cuando el nivel de exposicion lo justifique.</p>
      <h2>Buenas practicas antes de invertir online</h2>
      <h3>Revisar accesos y dispositivos</h3>
      <p>Antes de operar, conviene revisar que el celular y la computadora tengan sistema actualizado, bloqueo de pantalla, antivirus o proteccion equivalente, y aplicaciones descargadas desde tiendas oficiales. Tambien es recomendable cerrar sesiones que no se usan, controlar dispositivos vinculados y evitar operar desde equipos prestados. Cuando una plataforma permite configurar alertas de inicio de sesion o movimientos, activarlas suma una capa util de monitoreo.</p>
      <h3>Cuidar claves, codigos y recuperacion</h3>
      <p>Ninguna entidad seria deberia pedir claves completas, codigos de autenticacion o frases de recuperacion por chat. En wallets de criptomonedas, la frase semilla merece una proteccion especial: debe guardarse fuera de linea, en un lugar privado, y no cargarse en formularios ni capturas de pantalla. Si alguien pide esos datos, la respuesta correcta es detenerse y verificar por canales oficiales.</p>
      <p>Para empresas, emprendedores y proyectos digitales que manejan informacion sensible, contar con una revision profesional de seguridad puede evitar problemas mayores. En ese contexto, recursos y servicios especializados como <a href="https://defensait.com/" rel="noopener">Defensa IT</a> ayudan a entender y prevenir riesgos de ciberseguridad antes de que afecten la operacion.</p>
      <h2>Seguridad tambien es educacion financiera</h2>
      <p>La seguridad no elimina el riesgo financiero, pero evita que una decision razonada se vea arruinada por un descuido tecnico. Aprender sobre inversiones implica tambien aprender a proteger cuentas, documentos y accesos. Para profundizar, podes leer nuestra seccion de <a href="/criptomonedas">criptomonedas</a>, donde explicamos buenas practicas para exchanges y wallets, y la guia sobre <a href="/guias">como evitar estafas financieras</a>. El contenido de Dinero Facil es educativo y no constituye asesoramiento financiero personalizado.</p>
      <p>Una revision periodica tambien ayuda. Cada cierto tiempo conviene actualizar claves antiguas, eliminar aplicaciones que ya no se usan, revisar permisos concedidos y confirmar que los datos de recuperacion esten vigentes. La seguridad financiera no se resuelve una vez para siempre; se mantiene con habitos simples, repetidos y faciles de auditar.</p>
    `
  },
  {
    slug: "seo-para-proyectos-financieros-confianza-en-google",
    title: "SEO para proyectos financieros: por que la confianza tambien se construye en Google",
    seoTitle: "SEO para proyectos financieros y educacion financiera",
    description: "Como el SEO tecnico, la estructura y el contenido util ayudan a construir confianza en sitios financieros y proyectos educativos.",
    date: "2026-06-09",
    category: "Visibilidad online",
    body: `
      <p>Un proyecto financiero no comunica confianza solo por lo que dice. Tambien lo hace por la forma en que ordena su informacion, por la claridad de sus paginas, por la velocidad con la que carga y por la facilidad con la que una persona encuentra respuestas. En ese escenario, el SEO no es una tecnica aislada para aparecer en buscadores: es una manera de organizar una web para que sea mas comprensible, mas util y mas consistente.</p>
      <p>Cuando alguien busca informacion sobre ahorro, inversiones, criptomonedas o mercado, suele partir de una pregunta concreta. Quiere entender un concepto, comparar alternativas, detectar riesgos o resolver una duda antes de tomar una decision. Si una web aparece en Google con titulos claros, contenido bien estructurado y una experiencia de lectura comoda, tiene mas oportunidades de ser elegida y recordada. La visibilidad organica se apoya en la utilidad real del contenido.</p>
      <h2>Por que el SEO importa en temas financieros</h2>
      <p>Los temas financieros exigen un nivel de responsabilidad mayor que otros contenidos. Una explicacion ambigua puede llevar a interpretaciones equivocadas. Una pagina lenta o desordenada puede transmitir improvisacion. Un titulo exagerado puede captar clics, pero dañar la credibilidad. Por eso, el SEO para proyectos financieros debe trabajar con un enfoque de confianza: responder bien, evitar promesas, mostrar contexto y facilitar la navegacion.</p>
      <p>Google y otros buscadores intentan identificar paginas que resuelven intenciones de busqueda. Para lograrlo, una web necesita jerarquia: un H1 claro, subtitulos utiles, enlaces internos, metadescripciones especificas, datos estructurados cuando corresponda y contenido que no se limite a repetir palabras clave. En educacion financiera, la profundidad y la prudencia son parte del valor.</p>
      <h2>Contenido util antes que ruido</h2>
      <p>Una estrategia de SEO responsable empieza por entender a la audiencia. No es lo mismo escribir para alguien que recien ordena su presupuesto que para una persona que compara instrumentos de renta fija y variable. El contenido debe explicar terminos, separar conceptos y anticipar errores frecuentes. Tambien debe decir cuando una respuesta depende del perfil de riesgo, del horizonte temporal o de la situacion personal.</p>
      <p>En Dinero Facil usamos enlaces internos para conectar temas relacionados. Por ejemplo, una nota sobre busquedas financieras puede derivar a <a href="/finanzas-personales">finanzas personales</a> si la persona necesita ordenar su base economica, o a <a href="/inversiones">inversiones</a> si quiere entender riesgo y diversificacion. Esa arquitectura ayuda al usuario y tambien ayuda a los buscadores a comprender la relacion entre paginas.</p>
      <h2>SEO tecnico, velocidad y estructura</h2>
      <h3>La parte invisible tambien comunica</h3>
      <p>El SEO tecnico incluye aspectos que muchos usuarios no ven directamente, pero sienten en la experiencia. Una web rapida reduce abandono. Una estructura limpia evita paginas duplicadas. Los canonicals indican cual es la URL principal. El sitemap facilita el rastreo. Los datos estructurados permiten describir articulos, organizaciones y breadcrumbs de manera mas precisa. Todo eso suma orden.</p>
      <p>Tambien importa la accesibilidad. Buen contraste, textos legibles, botones claros y navegacion con teclado hacen que la informacion llegue a mas personas. En una web financiera, donde la lectura cuidadosa es central, la experiencia de usuario no es decoracion: es parte de la confianza.</p>
      <p>Cuando un proyecto busca mejorar su presencia en buscadores, trabajar el SEO tecnico, los contenidos y la estructura del sitio puede marcar una diferencia importante. Una agencia especializada como <a href="https://www.seoagenciaweb.com/" rel="noopener">SEO Agencia Web</a> puede ayudar a detectar problemas, optimizar paginas y mejorar la visibilidad organica de una web.</p>
      <h2>Confianza sostenida en el tiempo</h2>
      <p>El SEO no deberia perseguir atajos. En proyectos financieros, una presencia organica sana se construye con articulos actualizados, lenguaje claro, fuentes revisadas, ausencia de promesas y una arquitectura estable. Si una persona vuelve a una web porque entiende mejor un tema, el posicionamiento deja de ser una meta tecnica y se convierte en una consecuencia de hacer bien el trabajo. El contenido de Dinero Facil es educativo y no constituye asesoramiento financiero personalizado.</p>
      <p>Tambien es importante medir con paciencia. Revisar que consultas traen usuarios, que paginas responden mejor y donde se abandona la lectura permite mejorar sin cambiar el enfoque cada semana. Un proyecto financiero serio puede crecer en buscadores si publica con constancia, corrige errores tecnicos y mantiene una voz clara, prudente y verificable.</p>
      <p>Ese proceso tambien protege la reputacion: una estructura clara facilita corregir, ampliar y sostener criterios editoriales cuando el sitio crece.</p>
    `
  },
  {
    slug: "una-buena-pagina-web-tambien-es-parte-de-la-confianza-financiera",
    title: "Una buena pagina web tambien es parte de la confianza financiera",
    seoTitle: "Pagina web profesional para proyectos financieros confiables",
    description: "Por que el diseno web, la claridad, la velocidad y la estructura ayudan a transmitir confianza en proyectos financieros y educativos.",
    date: "2026-06-08",
    category: "Presencia digital",
    body: `
      <p>En finanzas, la confianza se forma antes de que una persona lea el detalle de un servicio o una guia. Se forma al entrar a una web, observar si carga rapido, si el mensaje es claro, si el diseno acompaña la lectura y si la informacion esta organizada. Una pagina web profesional no reemplaza la seriedad de un proyecto, pero la hace visible. Tambien puede exponer lo contrario: improvisacion, exceso de promesas o falta de cuidado.</p>
      <p>Para proyectos de inversion, educacion financiera o servicios digitales, la web suele ser la primera referencia ante el publico. Por eso debe responder preguntas basicas sin obligar al usuario a buscar demasiado: que ofrece, que temas trata, con que enfoque trabaja y que limites tiene la informacion publicada. En Dinero Facil, por ejemplo, aclaramos que el contenido es educativo y no constituye asesoramiento financiero personalizado.</p>
      <h2>Diseno web y credibilidad</h2>
      <p>Un buen diseno no se trata de decorar la pantalla. Se trata de jerarquia, legibilidad y coherencia. Los colores, la tipografia, los espacios y los botones deben ayudar a leer y decidir donde seguir. En temas financieros, un estilo sobrio suele funcionar mejor que una estetica ruidosa. La persona que llega con dudas sobre su dinero necesita calma, no presion.</p>
      <p>La credibilidad tambien aparece en los detalles: titulos que no exageran, articulos con fecha, enlaces internos utiles, footer claro, navegacion simple y ausencia de mensajes agresivos. Una web puede ser moderna sin parecer un anuncio. Puede ser atractiva sin empujar decisiones apresuradas. Esa diferencia es clave cuando se habla de ahorro, mercado o criptomonedas.</p>
      <h2>Velocidad, seguridad y estructura</h2>
      <h3>Una experiencia clara reduce friccion</h3>
      <p>Una pagina lenta hace que muchas personas abandonen antes de leer. Una estructura confusa obliga a pensar de mas. Un menu sobrecargado oculta lo importante. Para proyectos financieros, la experiencia debe facilitar el recorrido: empezar por conceptos generales, pasar a guias, profundizar en articulos y encontrar advertencias cuando correspondan. El contenido necesita respirar.</p>
      <p>La seguridad tambien forma parte de la percepcion. Usar HTTPS, mantener el software actualizado, evitar formularios innecesarios y cuidar los enlaces externos ayuda a reducir riesgos. En sitios educativos, donde no siempre hace falta pedir datos, una estructura simple y segura puede ser una gran ventaja. Menos friccion tambien puede significar menos exposicion.</p>
      <p>Para quienes necesitan crear una presencia digital profesional, contar con una web clara, rapida y bien diseñada es clave. Servicios como <a href="https://www.paginawebarg.com.ar/" rel="noopener">Pagina Web ARG</a> pueden ayudar a construir sitios modernos, ordenados y preparados para que los usuarios encuentren informacion de forma simple.</p>
      <h2>Publicar guias mejora la relacion con el usuario</h2>
      <p>Una web profesional no deberia limitarse a presentar una marca. Tambien puede educar. Publicar guias sobre presupuesto, fondo de emergencia, perfil de riesgo o prevencion de estafas permite que el usuario aprenda antes de avanzar. Esa estrategia genera confianza porque muestra criterio, no solo oferta. En proyectos financieros, explicar bien suele ser mas valioso que prometer mucho.</p>
      <p>Si estas empezando a ordenar una web de este tipo, conviene pensar en secciones estables. Una pagina de <a href="/guias">guias</a> puede reunir contenidos paso a paso. Una seccion de <a href="/mercado">mercado</a> puede explicar conceptos economicos sin tono especulativo. Un blog puede actualizar temas relevantes sin romper la estructura principal. La web se vuelve asi una biblioteca viva, no un folleto estatico.</p>
      <h2>La confianza se diseña y se demuestra</h2>
      <p>La confianza financiera no depende solo del diseño, pero el diseño puede abrir o cerrar la puerta. Una web cuidada ayuda a que el mensaje llegue con claridad, evita malentendidos y permite sostener una comunicacion responsable. Cuando el tema es dinero, cada detalle importa: la palabra elegida, el enlace, la velocidad, el contraste y la forma de presentar riesgos. El contenido de Dinero Facil es educativo y no constituye asesoramiento financiero personalizado.</p>
      <p>Tambien conviene mantener la web viva. Revisar enlaces, actualizar fechas, mejorar articulos antiguos y quitar informacion desactualizada demuestra cuidado. En educacion financiera, una pagina que evoluciona con criterio puede convertirse en un recurso de consulta frecuente, siempre que conserve su estructura, su tono responsable y una experiencia de lectura simple.</p>
      <p>La consistencia visual y editorial tambien ayuda a que cada nueva publicacion refuerce la misma promesa: explicar bien, ordenar informacion y respetar el tiempo de quien lee.</p>
    `
  },
  {
    slug: "como-empezar-a-invertir-sin-cometer-errores-basicos",
    title: "Como empezar a invertir sin cometer errores basicos",
    seoTitle: "Como empezar a invertir con criterio y evitar errores basicos",
    description: "Pasos educativos para empezar a invertir con orden: presupuesto, fondo de emergencia, riesgo, horizonte temporal y diversificacion.",
    date: "2026-06-07",
    category: "Inversiones",
    body: `
      <p>Empezar a invertir no deberia ser una carrera. Muchas personas se acercan al mercado cuando escuchan una recomendacion, ven una noticia o sienten que sus ahorros pierden poder de compra. Esa motivacion es comprensible, especialmente en contextos de inflacion, pero invertir sin una base minima puede convertir una buena intencion en una fuente de ansiedad. Antes de elegir instrumentos, conviene ordenar la situacion personal y entender que problema se quiere resolver.</p>
      <p>La primera idea importante es simple: invertir no es lo mismo que adivinar. Invertir implica tomar decisiones con informacion, aceptar incertidumbre, administrar riesgos y revisar resultados en funcion de un plan. No hace falta saberlo todo para empezar a aprender, pero si hace falta evitar algunos errores que se repiten con frecuencia.</p>
      <h2>Ordenar la base antes de mirar el mercado</h2>
      <p>El punto de partida es el presupuesto. Saber cuanto ingresa, cuanto sale y que gastos son variables permite definir si existe capacidad real de ahorro. Sin ese dato, cualquier inversion se vuelve fragil. Si una persona invierte dinero que puede necesitar en pocos dias para pagar gastos esenciales, queda expuesta a vender en mal momento o asumir costos innecesarios.</p>
      <p>El segundo paso es construir un fondo de emergencia. No tiene que aparecer de un dia para otro, pero si deberia formar parte del plan. Ese fondo funciona como una reserva para imprevistos: reparaciones, gastos medicos, perdida de ingresos o situaciones familiares. Su objetivo no es maximizar rendimiento, sino dar estabilidad. En nuestra seccion de <a href="/finanzas-personales">finanzas personales</a> explicamos como pensar este tipo de reserva con realismo.</p>
      <h2>Definir objetivo, plazo y tolerancia al riesgo</h2>
      <p>No todas las inversiones sirven para lo mismo. Un dinero que se necesitara en tres meses no deberia tratarse igual que un ahorro pensado para varios años. El horizonte temporal influye en el tipo de instrumentos que pueden evaluarse y en la capacidad de tolerar variaciones. Cuanto mas corto es el plazo, mas importante se vuelve la liquidez y la estabilidad. Cuanto mas largo es el plazo, mas sentido tiene estudiar alternativas con fluctuaciones mayores, siempre dentro del perfil personal.</p>
      <p>La tolerancia al riesgo no es una etiqueta fija. Combina conocimiento, situacion economica, edad, obligaciones, experiencia y emociones. Hay personas que dicen aceptar variaciones hasta que ven una baja real en su cuenta. Por eso conviene empezar con montos que permitan aprender sin comprometer la tranquilidad financiera. La educacion previa reduce decisiones impulsivas.</p>
      <h2>Errores basicos que conviene evitar</h2>
      <h3>Seguir recomendaciones sin entenderlas</h3>
      <p>Uno de los errores mas comunes es comprar un activo porque alguien lo nombro con seguridad. El problema no es escuchar opiniones, sino actuar sin saber por que se toma la decision, que riesgos existen y cuando tendria sentido revisar la posicion. Una inversion que no se entiende suele ser dificil de sostener cuando el precio se mueve.</p>
      <h3>Concentrar todo en una sola idea</h3>
      <p>La diversificacion no elimina el riesgo, pero ayuda a no depender de un unico resultado. Concentrar todo el dinero en un solo activo, sector o moneda puede generar una exposicion excesiva. Diversificar implica combinar instrumentos de acuerdo con objetivos, plazos y perfil. Tambien implica no invertir solo por moda.</p>
      <h3>No considerar costos e impuestos</h3>
      <p>Comisiones, spreads, plazos de rescate, impuestos y costos de transferencia pueden modificar el resultado final. Antes de operar, hay que leer condiciones y entender como entra y sale el dinero. Lo barato o caro de una inversion no depende solo del precio del activo, sino de toda la operatoria.</p>
      <h2>Aprender, probar y revisar</h2>
      <p>Una forma responsable de empezar es estudiar conceptos, comparar instrumentos, usar simuladores cuando existan y avanzar de manera gradual. Tambien sirve llevar un registro: por que se tomo una decision, que se esperaba, que paso y que se aprendio. Ese habito transforma la experiencia en conocimiento.</p>
      <p>Otro punto util es separar aprendizaje de urgencia. Si una oportunidad solo parece razonable cuando hay presion para decidir en minutos, probablemente falte informacion. Tomarse tiempo para leer condiciones, consultar fuentes y comparar alternativas ayuda a evitar movimientos impulsivos. El mercado siempre ofrecera nuevas situaciones; cuidar el capital y la tranquilidad suele ser mas importante que actuar primero.</p>
      <p>Si queres seguir profundizando, podes leer la pagina de <a href="/inversiones">inversiones</a> y la guia sobre <a href="/guias">como evaluar una inversion</a>. Recorda que el contenido de Dinero Facil es educativo y no constituye asesoramiento financiero personalizado.</p>
    `
  },
  {
    slug: "que-es-el-perfil-de-riesgo-y-por-que-importa-antes-de-invertir",
    title: "Que es el perfil de riesgo y por que importa antes de invertir",
    seoTitle: "Perfil de riesgo: que es y como influye al invertir",
    description: "Explicacion clara del perfil de riesgo, sus componentes y por que ayuda a elegir instrumentos compatibles con cada persona.",
    date: "2026-06-06",
    category: "Riesgo",
    body: `
      <p>El perfil de riesgo es una de las ideas mas importantes antes de invertir, pero tambien una de las mas subestimadas. Muchas personas empiezan preguntando que instrumento conviene, cuando la pregunta previa deberia ser otra: que nivel de riesgo puedo y quiero asumir. La respuesta no depende solo de preferencias. Tambien depende de ingresos, gastos, deudas, horizonte temporal, objetivos y experiencia.</p>
      <p>Entender el perfil de riesgo ayuda a evitar decisiones que se ven atractivas en teoria pero resultan dificiles de sostener en la practica. Una persona puede leer sobre activos volatiles y pensar que tolera variaciones fuertes, pero reaccionar con ansiedad ante la primera baja. Otra puede ser demasiado conservadora para objetivos de largo plazo y perder oportunidades de aprendizaje. El equilibrio se construye con informacion y honestidad personal.</p>
      <h2>Que elementos forman el perfil de riesgo</h2>
      <p>El perfil de riesgo combina tres dimensiones. La primera es la capacidad de asumir riesgo: se relaciona con la situacion financiera objetiva. No es lo mismo invertir con un fondo de emergencia armado que hacerlo con deudas caras o ingresos inestables. La segunda es la tolerancia emocional: cuanto malestar generan las variaciones de valor. La tercera es la necesidad de riesgo: que rendimiento se busca para un objetivo determinado y si ese objetivo es realista.</p>
      <p>Estas dimensiones no siempre apuntan en la misma direccion. Alguien puede tener alta tolerancia emocional, pero baja capacidad financiera para soportar perdidas. Otra persona puede tener buena capacidad, pero preferir estabilidad. Por eso los cuestionarios de perfil son utiles como punto de partida, aunque no reemplazan el analisis personal ni profesional cuando corresponde.</p>
      <h2>Horizonte temporal y liquidez</h2>
      <p>El plazo cambia la conversacion. Si el dinero tiene un destino cercano, la prioridad suele ser preservar liquidez y reducir variaciones. Si el objetivo esta mas lejos, puede haber mas espacio para estudiar instrumentos con fluctuaciones, siempre que la persona comprenda el recorrido posible. El problema aparece cuando se mezclan plazos: usar dinero de corto plazo en activos de comportamiento incierto puede obligar a vender en un momento inconveniente.</p>
      <p>La liquidez tambien importa. Un instrumento puede tener buenas caracteristicas, pero si no permite salir cuando se necesita, puede no ser adecuado para cierto objetivo. Antes de invertir, conviene revisar plazos de rescate, condiciones de venta, horarios de operatoria y costos asociados. Esa informacion forma parte del riesgo real.</p>
      <h2>Como se relaciona con la diversificacion</h2>
      <p>El perfil de riesgo no solo define cuanto riesgo tomar, sino como distribuirlo. Una cartera puede combinar instrumentos mas estables con otros de mayor variacion. La proporcion dependera del objetivo y de la persona. Diversificar no significa comprar muchas cosas al azar; significa construir una exposicion mas equilibrada. En la pagina de <a href="/inversiones">inversiones</a> explicamos por que diversificacion y horizonte temporal se leen juntos.</p>
      <h3>Riesgo no es solo precio</h3>
      <p>Muchas veces se asocia riesgo con que el precio suba o baje. Es una parte importante, pero no la unica. Tambien existe riesgo de liquidez, riesgo de contraparte, riesgo regulatorio, riesgo de tipo de cambio, riesgo operativo y riesgo de no entender el instrumento. En criptomonedas, por ejemplo, ademas de la volatilidad hay riesgos de custodia, claves privadas, exchanges y seguridad digital. Por eso recomendamos leer tambien nuestra seccion de <a href="/criptomonedas">criptomonedas</a>.</p>
      <h2>Revisar el perfil con el tiempo</h2>
      <p>El perfil de riesgo puede cambiar. Un nuevo trabajo, una mudanza, una deuda, el nacimiento de un hijo o una mejora en el conocimiento financiero pueden modificar prioridades. Revisar el perfil una vez por año o ante cambios importantes ayuda a que las decisiones sigan teniendo sentido. No se trata de reaccionar a cada noticia, sino de verificar si el plan sigue alineado con la vida real.</p>
      <p>Tambien puede cambiar con la experiencia. Una persona que al principio necesita instrumentos simples puede, con estudio y practica, comprender alternativas mas complejas. Eso no obliga a asumir mas riesgo, pero permite elegir con mejores fundamentos. El aprendizaje financiero deberia ampliar opciones, no empujar decisiones que incomoden o comprometan objetivos importantes.</p>
      <p>Por eso conviene documentar cambios de criterio y revisar si responden a aprendizaje real.</p>
      <p>Una buena decision de inversion no es universal. Es compatible con una persona, un momento y un objetivo. Aprender a reconocer esa compatibilidad es parte central de la educacion financiera. El contenido de Dinero Facil es educativo y no constituye asesoramiento financiero personalizado.</p>
    `
  },
  {
    slug: "criptomonedas-conceptos-basicos-antes-de-comprar-o-vender",
    title: "Criptomonedas: conceptos basicos antes de comprar o vender",
    seoTitle: "Criptomonedas: conceptos basicos, riesgos y seguridad",
    description: "Introduccion educativa a Bitcoin, stablecoins, exchanges, wallets, volatilidad y buenas practicas antes de operar criptoactivos.",
    date: "2026-06-05",
    category: "Criptomonedas",
    body: `
      <p>Las criptomonedas despiertan interes porque combinan tecnologia, dinero, comunidad e innovacion. Tambien generan confusion. Se habla de Bitcoin, stablecoins, exchanges, wallets, redes, comisiones y seguridad, muchas veces con un lenguaje tecnico que puede intimidar. Antes de comprar o vender cualquier criptoactivo, conviene construir una base conceptual y aceptar que se trata de un universo con riesgos particulares.</p>
      <p>El objetivo de esta guia no es recomendar una moneda especifica ni anticipar precios. El objetivo es ordenar conceptos para que una persona pueda leer mejor, preguntar mejor y decidir con mas cuidado. En Dinero Facil creemos que la educacion debe venir antes de la operacion, especialmente cuando los movimientos de precio pueden ser bruscos y la responsabilidad de custodia puede recaer en el usuario.</p>
      <h2>Que son las criptomonedas</h2>
      <p>Una criptomoneda es un activo digital que funciona sobre una red distribuida y utiliza criptografia para validar transacciones. Bitcoin fue la primera experiencia mas conocida y planteo la idea de una red sin una autoridad central tradicional. Desde entonces surgieron miles de proyectos, con usos, diseños y niveles de riesgo muy distintos. Que algo sea digital y negociable no significa que tenga el mismo valor, seguridad o utilidad que otro activo.</p>
      <p>Las stablecoins son criptoactivos diseñados para seguir el valor de una moneda de referencia, como el dolar. Pueden resultar utiles para ciertas operaciones, pero tambien tienen riesgos: reservas, regulacion, emisor, liquidez y funcionamiento de la red. No conviene tratarlas como si fueran equivalentes perfectos al dinero bancario sin entender su estructura.</p>
      <h2>Exchanges, wallets y custodia</h2>
      <p>Un exchange es una plataforma donde se pueden comprar, vender o intercambiar criptoactivos. Algunos funcionan de manera centralizada y custodian los fondos del usuario. Otros son descentralizados y operan mediante contratos inteligentes. En ambos casos hay riesgos: fallas operativas, phishing, errores de red, falta de liquidez, problemas regulatorios o perdida de acceso.</p>
      <p>Una wallet es una herramienta para gestionar claves y transacciones. Puede ser una aplicacion, un dispositivo fisico o una solucion integrada a una plataforma. La idea central es entender quien custodia las claves. Si el usuario controla sus claves, tambien asume la responsabilidad de protegerlas. Si una plataforma las custodia, el usuario depende de esa entidad. No hay una opcion perfecta para todos; hay decisiones con ventajas y riesgos.</p>
      <h2>Riesgos frecuentes</h2>
      <h3>Volatilidad y decisiones impulsivas</h3>
      <p>Los precios de los criptoactivos pueden moverse con intensidad en periodos cortos. Esa volatilidad puede generar entusiasmo en subas y miedo en bajas. Operar por impulso suele llevar a comprar tarde, vender apurado o asumir exposiciones incompatibles con el perfil personal. Por eso, antes de entrar, hay que definir monto, objetivo, plazo y limite de riesgo.</p>
      <h3>Estafas y promesas exageradas</h3>
      <p>El ecosistema cripto atrae proyectos serios, pero tambien esquemas fraudulentos. Desconfiar de mensajes privados, supuestos soportes, plataformas desconocidas y ofertas que presionan con urgencia es una regla basica. Nadie deberia pedir una frase semilla, clave privada o codigo de autenticacion. En nuestra nota sobre <a href="/blog/ciberseguridad-financiera-como-proteger-tus-cuentas-antes-de-invertir-online">ciberseguridad financiera</a> desarrollamos medidas concretas para proteger cuentas.</p>
      <h2>Buenas practicas antes de operar</h2>
      <p>Conviene empezar por estudiar el activo, la red donde opera, las comisiones, la liquidez y los riesgos de custodia. Tambien es recomendable probar con montos pequeños, activar segundo factor de autenticacion, verificar URLs, registrar operaciones y evitar operar desde dispositivos inseguros. Si se usan wallets propias, la copia de respaldo debe protegerse fuera de linea y nunca compartirse.</p>
      <p>Tambien ayuda distinguir entre aprender tecnologia y tomar exposicion financiera. Se puede estudiar como funciona una red, practicar con herramientas educativas o leer documentacion sin comprometer montos relevantes. Esa distancia permite entender mejor antes de operar. En un ecosistema que cambia rapido, la paciencia es una herramienta de seguridad y de gestion del riesgo.</p>
      <p>Si una persona decide avanzar, conviene que la exposicion sea compatible con su presupuesto, su fondo de emergencia y su capacidad de tolerar variaciones fuertes sin afectar gastos importantes.</p>
      <p>Las criptomonedas pueden formar parte de conversaciones financieras modernas, pero no deberian ocupar un lugar que la persona no comprende. El aprendizaje previo reduce errores costosos y permite distinguir tecnologia, especulacion y seguridad. Para una mirada mas amplia, visita la seccion de <a href="/criptomonedas">criptomonedas</a> y la pagina de <a href="/mercado">mercado</a>. El contenido de Dinero Facil es educativo y no constituye asesoramiento financiero personalizado.</p>
    `
  }
];

const pages = [
  {
    path: "",
    nav: "",
    title: "Dinero Facil | Educacion financiera clara para decidir mejor",
    description: "Guias claras sobre finanzas personales, mercado, criptomonedas e inversiones responsables para tomar decisiones con mas criterio.",
    h1: "Invertir mejor empieza por entender tu dinero",
    intro: "Guias claras sobre finanzas personales, mercado, criptomonedas y buenas practicas para tomar decisiones con mas criterio.",
    home: true
  },
  {
    path: "finanzas-personales",
    nav: "/finanzas-personales",
    title: "Finanzas personales | Presupuesto, ahorro y orden mensual",
    description: "Aprende a ordenar tu presupuesto, ahorrar, armar un fondo de emergencia, manejar deudas y pensar la inflacion con criterio.",
    h1: "Finanzas personales simples para ordenar tu dinero",
    intro: "Una base clara para saber cuanto entra, cuanto sale, que prioridades cuidar y como construir habitos sostenibles.",
    content: `
      <h2>Presupuesto personal</h2>
      <p>El presupuesto no es una planilla perfecta: es una foto honesta de tus ingresos, gastos y prioridades. Separar gastos fijos, variables y extraordinarios permite detectar fugas, anticipar meses dificiles y decidir con mas calma. La clave es que el sistema sea simple para poder sostenerlo.</p>
      <h2>Ahorro y fondo de emergencia</h2>
      <p>Ahorrar no siempre significa guardar grandes montos. Muchas veces empieza con una decision repetida: separar una parte apenas ingresa el dinero. El fondo de emergencia busca cubrir imprevistos sin endeudarse ni vender inversiones en mal momento. Su tamaño depende de la estabilidad de ingresos, responsabilidades y gastos esenciales.</p>
      <h2>Deudas e inflacion</h2>
      <p>Las deudas caras pueden bloquear cualquier plan financiero. Ordenarlas por costo, plazo y urgencia ayuda a priorizar pagos. En contextos de inflacion, tambien conviene revisar precios, contratos y habitos de consumo con frecuencia. No se trata de vivir pendiente de cada cambio, sino de tomar decisiones con informacion actualizada.</p>
      <h2>Organizacion mensual</h2>
      <p>Una rutina util puede incluir tres momentos: revisar gastos pasados, planificar compromisos del mes y definir un monto de ahorro posible. Si queres avanzar paso a paso, la pagina de <a href="/guias">guias</a> reúne recorridos practicos para ordenar tus finanzas desde cero.</p>
    `
  },
  {
    path: "inversiones",
    nav: "/inversiones",
    title: "Inversiones responsables | Riesgo, diversificacion y horizonte",
    description: "Conceptos educativos para entender que es invertir, perfil de riesgo, instrumentos, diversificacion y horizonte temporal.",
    h1: "Inversiones responsables, explicadas sin ruido",
    intro: "Invertir implica planificar, entender riesgos y elegir instrumentos compatibles con objetivos reales.",
    content: `
      <h2>Que significa invertir</h2>
      <p>Invertir es asignar dinero a un instrumento con la expectativa de conservar o aumentar valor en el tiempo, aceptando distintos niveles de riesgo. A diferencia del ahorro, que prioriza disponibilidad y resguardo, la inversion incorpora incertidumbre, plazo y analisis.</p>
      <h2>Perfil de riesgo y horizonte temporal</h2>
      <p>El perfil de riesgo combina situacion financiera, tolerancia emocional, experiencia y objetivos. El horizonte temporal define cuanto tiempo puede permanecer invertido el dinero. Ambas variables ayudan a decidir si conviene priorizar liquidez, estabilidad o exposicion a instrumentos con mayor variacion.</p>
      <h2>Diversificacion e instrumentos</h2>
      <p>Una cartera puede incluir renta fija, renta variable, fondos comunes, acciones, bonos, cauciones, ETFs u otros instrumentos generales. La diversificacion busca no depender de un unico resultado. No elimina el riesgo, pero puede ordenar mejor la exposicion.</p>
      <h2>Aclaracion educativa</h2>
      <p class="notice">El contenido de Dinero Facil es educativo y no constituye asesoramiento financiero personalizado. Antes de tomar decisiones relevantes, considera tu situacion particular y consulta profesionales matriculados cuando corresponda.</p>
    `
  },
  {
    path: "criptomonedas",
    nav: "/criptomonedas",
    title: "Criptomonedas con criterio | Bitcoin, stablecoins y seguridad",
    description: "Introduccion responsable a criptomonedas, Bitcoin, stablecoins, exchanges, wallets, riesgos y buenas practicas de seguridad.",
    h1: "Criptomonedas con criterio y control de riesgo",
    intro: "Conceptos basicos para entender el ecosistema cripto sin recomendaciones de compra ni promesas.",
    content: `
      <h2>Conceptos principales</h2>
      <p>Las criptomonedas son activos digitales que funcionan sobre redes distribuidas. Bitcoin es el proyecto mas conocido, mientras que las stablecoins buscan seguir el valor de una moneda de referencia. Cada activo tiene reglas, riesgos y usos distintos.</p>
      <h2>Exchanges y wallets</h2>
      <p>Los exchanges permiten comprar, vender o intercambiar criptoactivos. Las wallets sirven para gestionar claves y transacciones. La pregunta central es quien custodia las claves y que responsabilidades asume el usuario. Perder acceso o compartir datos sensibles puede tener consecuencias serias.</p>
      <h2>Riesgos frecuentes</h2>
      <p>Volatilidad, phishing, plataformas falsas, errores de red, comisiones, regulacion y falta de liquidez son riesgos habituales. No es recomendable operar sin entenderlos. Una decision informada empieza por montos prudentes, seguridad digital y lectura cuidadosa.</p>
      <h2>Buenas practicas</h2>
      <p>Activar doble factor, verificar URLs, no compartir claves, proteger frases de recuperacion y operar desde dispositivos seguros son medidas basicas. Para profundizar, lee la nota sobre <a href="/blog/ciberseguridad-financiera-como-proteger-tus-cuentas-antes-de-invertir-online">ciberseguridad financiera</a>.</p>
    `
  },
  {
    path: "mercado",
    nav: "/mercado",
    title: "Mercado y economia | Noticias, tasas e inflacion con contexto",
    description: "Conceptos para leer noticias economicas, tasas, inflacion, dolar y movimientos de mercado con un enfoque educativo.",
    h1: "Leer el mercado con contexto, no con ansiedad",
    intro: "Herramientas basicas para interpretar noticias economicas sin caer en decisiones impulsivas.",
    content: `
      <h2>Noticias economicas</h2>
      <p>Una noticia de mercado puede mover expectativas, pero no siempre cambia una estrategia personal. Conviene distinguir dato, interpretacion y opinion. Tambien es importante mirar plazos: una novedad de corto plazo no necesariamente modifica un objetivo de largo plazo.</p>
      <h2>Tasas, inflacion y dolar</h2>
      <p>Las tasas influyen en el costo del credito y en alternativas de ahorro e inversion. La inflacion afecta poder de compra. El tipo de cambio puede impactar precios, expectativas y activos dolarizados. Entender estas relaciones ayuda a leer el entorno con mas criterio.</p>
      <h2>Comportamiento del mercado</h2>
      <p>Los mercados combinan informacion, expectativas y emociones. Pueden sobrerreaccionar, corregir y cambiar de tendencia. Por eso, el analisis responsable evita conclusiones absolutas y revisa datos con paciencia.</p>
      <h2>Un enfoque prudente</h2>
      <p>Antes de actuar por una noticia, vuelve a tu plan: objetivo, plazo, liquidez y perfil de riesgo. La educacion financiera sirve para bajar el ruido y mejorar preguntas.</p>
    `
  },
  {
    path: "guias",
    nav: "/guias",
    title: "Guias de educacion financiera | Dinero Facil",
    description: "Indice de guias educativas para ordenar finanzas, armar fondo de emergencia, evaluar inversiones, evitar estafas y entender riesgos.",
    h1: "Guias para aprender con orden",
    intro: "Recorridos practicos para mejorar tus decisiones financieras paso a paso.",
    guides: true
  }
];

function logo() {
  return `<svg class="brand-mark" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
    <rect width="64" height="64" rx="16" fill="#123c3b"></rect>
    <circle cx="28" cy="34" r="15" fill="#f4ead7" stroke="#c49a4b" stroke-width="3"></circle>
    <path d="M21 36c6-1 14-6 20-15" fill="none" stroke="#1f766f" stroke-width="5" stroke-linecap="round"></path>
    <path d="M42 19v12H30" fill="none" stroke="#1f766f" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"></path>
    <path d="M41 40c5 0 9-4 9-9 0 7-4 14-12 15-2-4-1-6 3-6Z" fill="#9fbf78"></path>
  </svg>`;
}

function pageUrl(route) {
  return `${siteUrl}/${route ? `${route}/` : ""}`.replace(/\/$/, route ? "" : "/");
}

function writeFile(route, html) {
  const dir = route ? path.join(root, route) : root;
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, "index.html"), html);
}

function schemaBase(extra = []) {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: "Dinero Facil",
      url: siteUrl,
      logo: `${siteUrl}/assets/favicon.svg`
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: "Dinero Facil",
      url: siteUrl,
      inLanguage: "es-AR",
      description: "Educacion financiera clara para tomar mejores decisiones."
    },
    ...extra
  ];
}

function breadcrumbs(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

function renderShell({ title, description, route = "", navCurrent = "", h1, intro, body, schema = [], type = "website" }) {
  const canonical = pageUrl(route);
  const navHtml = nav.map(([label, href]) => `<a href="${href}" ${href === navCurrent ? `aria-current="page"` : ""}>${label}</a>`).join("");
  const jsonLd = schemaBase(schema).map((item) => `<script type="application/ld+json">${JSON.stringify(item)}</script>`).join("\n");

  return `<!doctype html>
<html lang="es-AR">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>${title}</title>
  <meta name="description" content="${description}">
  <meta name="google-site-verification" content="ojWkLka3wSMWgBpgMtWkVcgtojZcQSoQ56-Rm8yndWY" />
  <link rel="canonical" href="${canonical}">
  <meta property="og:type" content="${type}">
  <meta property="og:locale" content="es_AR">
  <meta property="og:site_name" content="Dinero Facil">
  <meta property="og:title" content="${title}">
  <meta property="og:description" content="${description}">
  <meta property="og:url" content="${canonical}">
  <meta property="og:image" content="${siteUrl}/assets/favicon.svg">
  <meta name="twitter:card" content="summary">
  <meta name="twitter:title" content="${title}">
  <meta name="twitter:description" content="${description}">
  <meta name="theme-color" content="#123c3b">
  <link rel="icon" href="/favicon.ico" sizes="32x32">
  <link rel="icon" href="/assets/favicon.svg" type="image/svg+xml">
  <link rel="manifest" href="/manifest.json">
  <link rel="stylesheet" href="/assets/site.css">
  ${jsonLd}
</head>
<body>
  <a class="skip-link" href="#contenido">Saltar al contenido</a>
  <header class="site-header">
    <div class="nav-wrap">
      <a class="brand" href="/" aria-label="Dinero Facil inicio">
        ${logo()}
        <span>Dinero Facil<small>educacion financiera clara</small></span>
      </a>
      <button class="nav-toggle" type="button" aria-label="Abrir menu" aria-expanded="false" data-nav-toggle><span></span></button>
      <nav class="site-nav" aria-label="Navegacion principal" data-nav>${navHtml}</nav>
    </div>
  </header>
  <main id="contenido">
    ${body}
  </main>
  <footer class="site-footer">
    <div class="footer-inner">
      <div>
        <a class="brand" href="/" aria-label="Dinero Facil inicio">${logo()}<span>Dinero Facil<small>educacion financiera clara</small></span></a>
        <p>Educacion financiera clara para tomar mejores decisiones.</p>
        <p class="credit">Web realizada por <a href="https://www.paginawebarg.com.ar/" rel="noopener">Pagina Web ARG</a></p>
      </div>
      <div>
        <h2>Secciones</h2>
        <div class="footer-links">${navHtml}</div>
      </div>
      <div>
        <h2>Aprender</h2>
        <div class="footer-links">
          <a href="/guias">Guias educativas</a>
          <a href="/blog">Articulos del blog</a>
          <a href="/inversiones">Inversiones responsables</a>
          <a href="/criptomonedas">Criptomonedas con criterio</a>
        </div>
      </div>
      <p class="fine-print">El contenido publicado en Dinero Facil es educativo y no constituye asesoramiento financiero personalizado.</p>
    </div>
  </footer>
  <script src="/assets/site.js" defer></script>
</body>
</html>`;
}

function homeBody() {
  const featured = featuredArticles.map((slug) => articles.find((article) => article.slug === slug));
  return `
    <section class="hero">
      <div class="section">
        <div>
          <p class="hero-kicker">Dinero Facil</p>
          <h1>Invertir mejor empieza por entender tu dinero</h1>
          <p class="lead">Guias claras sobre finanzas personales, mercado, criptomonedas y buenas practicas para tomar decisiones con mas criterio.</p>
          <div class="hero-actions">
            <a class="button light" href="/guias">Empezar a aprender</a>
            <a class="button ghost" href="/inversiones">Ver guias de inversion</a>
          </div>
        </div>
        <div class="hero-visual" aria-label="Resumen visual de finanzas ordenadas">
          <div class="finance-panel">
            <div class="panel-row"><span>Plan mensual</span><strong>4 pasos</strong></div>
            <div class="panel-row"><span>Riesgo</span><strong>criterio</strong></div>
            <div class="panel-row"><span>Seguridad</span><strong>prioridad</strong></div>
            <svg class="chart" viewBox="0 0 420 160" role="img" aria-label="Linea de crecimiento responsable">
              <path d="M20 128h380" stroke="rgba(255,255,255,.18)" stroke-width="2"></path>
              <path d="M28 120C80 105 92 118 132 92s70-22 106-36 61-14 88-38 45-24 70-30" fill="none" stroke="#f4ead7" stroke-width="8" stroke-linecap="round"></path>
              <circle cx="326" cy="38" r="10" fill="#c49a4b"></circle>
            </svg>
          </div>
        </div>
      </div>
    </section>
    <section class="band paper">
      <div class="section">
        <div class="grid four">
          ${[
            ["01", "Finanzas personales simples", "Presupuesto, ahorro, deudas e inflacion explicados con lenguaje cotidiano."],
            ["02", "Inversiones responsables", "Riesgo, diversificacion y horizonte temporal antes de elegir instrumentos."],
            ["03", "Criptomonedas con criterio", "Conceptos, custodia y seguridad sin recomendaciones de compra."],
            ["04", "Riesgos y prevencion", "Buenas practicas para evitar estafas, impulsos y errores repetidos."]
          ].map(([icon, title, text]) => `<article class="card"><div class="card-icon">${icon}</div><h2>${title}</h2><p>${text}</p></article>`).join("")}
        </div>
      </div>
    </section>
    <section class="band">
      <div class="section">
        <div class="section-head">
          <p class="eyebrow">Que vas a encontrar</p>
          <h2>Un mapa claro para aprender antes de decidir</h2>
          <p>Dinero Facil organiza temas complejos en explicaciones practicas, con foco en criterio, seguridad y planificacion.</p>
        </div>
        <div class="grid three">
          <article class="card"><h3>Conceptos sin vueltas</h3><p>Definiciones utiles para entender ahorro, inversion, mercado y criptoactivos sin ruido innecesario.</p></article>
          <article class="card"><h3>Guias paso a paso</h3><p>Recorridos para ordenar tu dinero, crear reservas, evaluar riesgos y mejorar tus habitos.</p></article>
          <article class="card"><h3>Advertencias responsables</h3><p>Contenido educativo con limites claros: no prometemos resultados ni indicamos compras o ventas.</p></article>
        </div>
      </div>
    </section>
    <section class="band petrol">
      <div class="section">
        <div class="section-head">
          <p class="eyebrow">Aprender antes de invertir</p>
          <h2>La mejor decision empieza con mejores preguntas</h2>
          <p>Antes de mirar instrumentos, conviene saber para que queres invertir, que plazo tenes, cuanto riesgo podes asumir y que pasaria si necesitás liquidez.</p>
        </div>
        <div class="actions">
          <a class="button light" href="/inversiones">Aprender sobre inversiones</a>
          <a class="button ghost" href="/finanzas-personales">Ordenar finanzas personales</a>
        </div>
      </div>
    </section>
    <section class="band paper">
      <div class="section">
        <div class="section-head">
          <p class="eyebrow">Errores comunes</p>
          <h2>Lo que conviene evitar</h2>
        </div>
        <div class="grid three">
          <article class="card"><h3>Invertir dinero necesario</h3><p>Si un gasto esencial depende de ese dinero, la urgencia puede obligarte a vender en mal momento.</p></article>
          <article class="card"><h3>Seguir modas</h3><p>Una decision financiera necesita entender riesgos, costos, plazos y alternativas.</p></article>
          <article class="card"><h3>Descuidar seguridad</h3><p>Claves repetidas, enlaces falsos o dispositivos inseguros pueden afectar cuentas financieras.</p></article>
        </div>
      </div>
    </section>
    <section class="band">
      <div class="section">
        <div class="section-head">
          <p class="eyebrow">Ultimos articulos</p>
          <h2>Lecturas recientes del blog</h2>
        </div>
        <div class="grid three">${featured.map(articleCard).join("")}</div>
      </div>
    </section>`;
}

function articleCard(article) {
  return `<article class="article-card">
    <p class="meta">${article.category} · ${formatDate(article.date)}</p>
    <h3>${article.title}</h3>
    <p>${article.description}</p>
    <a href="/blog/${article.slug}">Leer articulo</a>
  </article>`;
}

function formatDate(date) {
  return new Intl.DateTimeFormat("es-AR", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${date}T00:00:00Z`));
}

function pageBody(page) {
  if (page.home) return homeBody();
  const crumbs = `<nav class="breadcrumbs" aria-label="Breadcrumb"><a href="/">Inicio</a> / ${page.h1}</nav>`;
  const main = page.guides ? guidesBody() : `<div class="page-content">${page.content}</div>`;
  return `
    <section class="page-hero"><div class="section">${crumbs}<h1>${page.h1}</h1><p class="lead">${page.intro}</p></div></section>
    <section class="band paper"><div class="section">${main}</div></section>`;
}

function guidesBody() {
  const guides = [
    ["01", "Como empezar a ordenar tus finanzas", "Registrar ingresos y gastos, separar prioridades y crear una rutina mensual sencilla.", "/finanzas-personales"],
    ["02", "Como armar un fondo de emergencia", "Definir monto objetivo, liquidez y reglas de uso para imprevistos reales.", "/finanzas-personales"],
    ["03", "Como evaluar una inversion", "Mirar plazo, riesgo, costos, liquidez, moneda e informacion disponible.", "/inversiones"],
    ["04", "Como evitar estafas financieras", "Detectar presion, promesas exageradas, suplantacion y plataformas dudosas.", "/blog/ciberseguridad-financiera-como-proteger-tus-cuentas-antes-de-invertir-online"],
    ["05", "Como proteger tus cuentas financieras", "Activar doble factor, cuidar claves, revisar URLs y operar desde dispositivos seguros.", "/blog/ciberseguridad-financiera-como-proteger-tus-cuentas-antes-de-invertir-online"],
    ["06", "Como entender el riesgo antes de invertir", "Relacionar perfil, horizonte temporal, diversificacion y capacidad de asumir variaciones.", "/blog/que-es-el-perfil-de-riesgo-y-por-que-importa-antes-de-invertir"]
  ];
  return `<div class="guide-list">${guides.map(([num, title, text, href]) => `
    <article class="guide-card">
      <div class="guide-number">${num}</div>
      <div><h2>${title}</h2><p>${text}</p><a class="button outline" href="${href}">Leer guia</a></div>
    </article>`).join("")}</div>`;
}

function blogIndex() {
  return renderShell({
    title: "Blog de educacion financiera | Dinero Facil",
    description: "Articulos educativos sobre ciberseguridad financiera, SEO para proyectos financieros, inversiones, riesgo y criptomonedas.",
    route: "blog",
    navCurrent: "/blog",
    type: "blog",
    body: `
      <section class="page-hero">
        <div class="section">
          <nav class="breadcrumbs" aria-label="Breadcrumb"><a href="/">Inicio</a> / Blog</nav>
          <h1>Blog de educacion financiera</h1>
          <p class="lead">Articulos claros para aprender sobre dinero, mercado, seguridad digital, inversion responsable y presencia online confiable.</p>
        </div>
      </section>
      <section class="band paper">
        <div class="section">
          <div class="grid three">${articles.map(articleCard).join("")}</div>
        </div>
      </section>`,
    schema: [
      {
        "@context": "https://schema.org",
        "@type": "Blog",
        name: "Blog de Dinero Facil",
        url: `${siteUrl}/blog`,
        inLanguage: "es-AR"
      },
      breadcrumbs([{ name: "Inicio", url: siteUrl }, { name: "Blog", url: `${siteUrl}/blog` }])
    ]
  });
}

function articlePage(article) {
  const route = `blog/${article.slug}`;
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: article.title,
      description: article.description,
      datePublished: article.date,
      dateModified: updated,
      author: { "@type": "Organization", name: "Equipo Dinero Facil" },
      publisher: { "@type": "Organization", name: "Dinero Facil", logo: { "@type": "ImageObject", url: `${siteUrl}/assets/favicon.svg` } },
      mainEntityOfPage: pageUrl(route),
      inLanguage: "es-AR"
    },
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      author: "Equipo Dinero Facil",
      datePublished: article.date,
      url: pageUrl(route)
    },
    breadcrumbs([{ name: "Inicio", url: siteUrl }, { name: "Blog", url: `${siteUrl}/blog` }, { name: article.title, url: pageUrl(route) }])
  ];
  return renderShell({
    title: `${article.seoTitle} | Dinero Facil`,
    description: article.description,
    route,
    navCurrent: "/blog",
    type: "article",
    schema,
    body: `
      <section class="page-hero">
        <div class="section">
          <nav class="breadcrumbs" aria-label="Breadcrumb"><a href="/">Inicio</a> / <a href="/blog">Blog</a> / ${article.category}</nav>
          <h1>${article.title}</h1>
          <div class="article-meta"><span>${formatDate(article.date)}</span><span>Equipo Dinero Facil</span><span>${article.category}</span></div>
        </div>
      </section>
      <section class="band paper">
        <div class="section content-layout">
          <article class="article-body">${article.body}</article>
          <aside class="aside-box" aria-label="Lecturas relacionadas">
            <h2>Seguir leyendo</h2>
            <a href="/guias">Guias educativas</a>
            <a href="/inversiones">Inversiones responsables</a>
            <a href="/finanzas-personales">Finanzas personales</a>
            <p class="notice">El contenido de Dinero Facil es educativo y no constituye asesoramiento financiero personalizado.</p>
          </aside>
        </div>
      </section>`
  });
}

function sitemap() {
  const staticRoutes = ["", "finanzas-personales", "inversiones", "criptomonedas", "mercado", "guias", "blog"];
  const urls = [
    ...staticRoutes.map((route) => ({ loc: pageUrl(route), priority: route === "" ? "1.0" : route === "blog" ? "0.8" : "0.9", changefreq: route === "blog" ? "weekly" : "monthly" })),
    ...articles.map((article) => ({ loc: pageUrl(`blog/${article.slug}`), priority: "0.7", changefreq: "monthly" }))
  ];
  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${updated}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join("\n")}
</urlset>
`;
}

for (const page of pages) {
  const schema = [breadcrumbs([{ name: "Inicio", url: siteUrl }, ...(page.path ? [{ name: page.h1, url: pageUrl(page.path) }] : [])])];
  writeFile(page.path, renderShell({
    title: page.title,
    description: page.description,
    route: page.path,
    navCurrent: page.nav,
    h1: page.h1,
    intro: page.intro,
    body: pageBody(page),
    schema
  }));
}

writeFile("blog", blogIndex());
for (const article of articles) {
  writeFile(`blog/${article.slug}`, articlePage(article));
}

fs.writeFileSync(path.join(root, "sitemap.xml"), sitemap());
