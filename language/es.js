const translations = {

    afktemx: '¿Quieres dejar un testamento o qué onda?',
    afkdone: 'Ausente Establecido',
    afkdel: 'Bienvenido/a de vuelta',
    afktime: 'Ausente desde hace',
    with: 'Con',
    afkmsg: 'Avisaré a quienes te mencionen',
    afktag: 'El usuario está ausente',
    name: 'Nombre',
    noMention: 'Menciona a un Usuario',
    userDb: 'El usuario no está en mi base de datos',
    example: 'Ejemplo',

    //-- Stick reaction
    killmsg: 'Mató',
    kismsg: 'Beso',
    patmsg: 'Acarició',
    slapmsg: 'Dio una bofetada a',

    next: 'Siguiente',
    hi: 'Hola',
    gp: 'Grupo',
    nobbot: 'Este comando solo se puede usar en el bot principal',
    botqr: '*Escanee este QR para convertirse en un Sub Bot*\n\n1. Haga clic en los tres puntos en la esquina superior derecha.\n2. Toque en Dispositivos vinculados\n3. Escanee este QR',
    recon: 'Conexión perdida...',
    sesClose: 'La conexión se cerró. Deberá reconectarse manualmente enviando el *ID*',
    connet: 'Conectado con éxito',
    connID: '*¡Conexión exitosa!*\n\nEn unos segundos, le enviaremos el *ID* que debe usar para reconectarse\n\n*NOTA:* Salga del grupo *DyLux ┃ ᴮᴼᵀ*\nGuarde este enlace para unirse más tarde\nhttps://instabio.cc/fg98ff',
    connMsg: 'La próxima vez que se conecte, envíe el siguiente mensaje para iniciar sesión sin escanear otro código *QR*',
    botlist: 'Lista de Sub Bots Activos',
    newcode: (usedPrefix) => `¡Genial! ahora puede usar *${usedPrefix}botclone* para solicitar un nuevo código QR`,
    nsbot: 'Este comando es solo para *Sub Bots Activos*',
    msgcode: 'El nuevo código se envió en su privacidad',
    stopbot: 'Bot desconectado',

    total: 'Total',
    tx: 'Transmisión',
    txdone: 'Transmisión enviada',
    cmdlist: '*LISTA DE COMANDOS*\n\n▢ *Info:* Si está en *negrita*, está bloqueado',
    notext: 'Repita agregando un texto',
    textSe: 'Separe el texto con un',
    reply: 'Responder a un mensaje',
    replyImg: 'Responder a una imagen',
    cmdSave: 'Comando guardado',

    oversizePrem: 'El tamaño del archivo excede el límite de descarga',
    error: 'Ocurrió un error, inténtelo de nuevo más tarde',
    size: 'Tamaño',
    link: 'Enlace',
    dev: 'Desarrollador',
    version: 'Versión',
    searchTo: (value, usedPrefix, command) => `Para buscar en ${value}:\n\n📌 Use: *${usedPrefix + command} <texto>*\n\nPara descargar desde URL:\n*${usedPrefix + command}* <enlace>`,
    search: (value) => `Ingrese lo que desea buscar en *${value}*`,
    lastUp: 'Última actualización',
    noLink: (value) => `Ingrese un enlace de ${value}`,
    title: 'Título',
    noUsername: 'Ingrese un nombre de usuario',
    username: 'Nombre de usuario',
    followers: 'Seguidores',
    follows: 'Siguiendo',
    bio: 'Biografía',
    posts: 'Publicaciones',
    aploud: 'Cargado',
    limitdl: 'El archivo excede el límite de descarga',
    limitdlTe: 'Actualice a premium para poder descargar archivos de hasta',
    duration: 'Duración',
    views: 'Vistas',
    quality: 'Calidad',
    type: 'Tipo',
    desc: 'Descripción',
    useCmd: 'Uso del comando',
    noNum: 'Ingrese solo números',
    random: 'Aleatorio',

    purse: 'Bolsa',
    dmd: 'Diamantes',
    money: 'Monedas',
    bank: 'Banco',
    itemV: 'Para ver todos los *Ítems*',
    isNan: 'La cantidad debe ser un número válido',
    voucher: 'Voucher',
    buy: 'Comprado',
    buyCount: 'Cantidad comprada',
    spent: 'Gastado',
    buyNan: (value) => `No tienes suficientes *${value}* para comprar`,
    noItem: (usedPrefix) => `Este ítem no existe:\n\n*${usedPrefix}shop* para ver los ítems disponibles`,
    noTime: 'Formato de tiempo inválido',
    second: 'Segundo(s)',
    hour: 'Hora(s)',
    minute: 'Minuto(s)',
    day: 'Día(s)',

    robCd: 'No puedes cometer un *Crimen* en este momento. Debes esperar',
    crime: 'Cometiste un crimen con éxito',
    crimeAl: 'No tuviste mucho cuidado al entrar a robar y activaste la alarma. Solo lograste llevar',
    robMul: '¡Oh no! Tu crimen falló y te multaron con',
    victin: 'Víctima',
    robDo: 'Robaste',
    tag: 'Etiqueta',
    dailyCd: 'Ya has recolectado tu recompensa diaria. Vuelve en',
    daily: 'Recompensa Diaria',
    amount: 'Cantidad',
    dep: (value) => `Depositaste *${value}🪙* en el Banco`,
    depNan: 'No tienes dinero para depositar',
    resBt: 'Reinicio',
    lbTitle: 'Tabla de Clasificación',
    top: 'Cima',
    lvl: 'Nivel',
    of: 'De',
    you: 'Tú',
    rank: 'Clasificación',
    fxp: 'Falta para subir de nivel',
    lvlbfor: 'Nivel anterior',
    lvlup: 'Nivel actual',
    mineCd: 'Podrás volver a la mina en',
    mine: '¡Genial! has minado',
    restEcon: 'La economía del bot ha sido restaurada',
    shop: 'Tienda',
    shopMsg: 'Puedes comprar usando',
    prem: 'Premium',
    onTransfer: 'Estás haciendo una transferencia',
    transItem: 'Ítems transferibles',
    confirm: '¿Estás seguro de que quieres transferir',
to: 'Para',
    payNan: 'Insuficiente para transferir',
    payCd: 'Tiempo agotado',
    cancelPay: 'Transferencia cancelada',
    pay: 'Transferencia realizada de',
    payError: 'Error al transferir',
    wd: '¿Cuántas *Coins* estás tratando de retirar?',
    wdYes: 'Has retirado',
    noWd: 'No puedes retirar más de lo que tienes en el banco',
    weeklyCd: 'Reclamando recompensa semanal 😉. Vuelve en',
    weekly: '*RECOMPENSA SEMANAL*\n\n¡Oh! ¿ya pasó una semana? De todas formas, aquí tienes',
    workCd: 'Podrás volver a trabajar en',
 nable: 'Activado',
    disable: 'Desactivado',
    toBot: 'Para este bot',
    toGp: 'Para este grupo',
    gaytex: '¿Quién quiere molestar a este gay?',
    result: 'Resultado',
    shipCd: 'Podrás elegir otra pareja dentro de',
    shipp: 'Pareja del día',
    toaud: 'Responda al video o nota de voz que desea convertir en mp3 con el comando',
    toav: 'Responda al audio que desea convertir en nota de voz con',

    noGame: 'No está en juego',
    resGame: 'La sesión de *TicTacToe* ha sido reiniciada',
    gameOff: 'El juego ha terminado',
    gaDone: 'Respuesta correcta',
    win: 'Ganaste',
    mathOff: 'Las oportunidades se han agotado',
    chance: 'Oportunidades',
    answer: 'Respuesta',
    mathError: '*Respuesta incorrecta*\n\nAún quedan',
    gameMode: 'Modos de Juego Disponibles',
    mathOn: 'Aún hay preguntas sin respuesta en este grupo',
    time: 'Tiempo',
    timeOff: '¡Se acabó el tiempo!\nLa respuesta es:',
    reward: 'Recompensa',
    pptCd: 'Para jugar nuevamente, debes esperar',
    ppt: (usedPrefix, command) => `Selecciona piedra/papel/tijeras\n\n📌 Ejemplo: *${usedPrefix + command}* papel`,
    coinNan: 'No tienes suficientes monedas para jugar',
    stone: 'piedra',
    sciss: 'tijeras',
    paper: 'papel',
    tie: 'Empate',
    win: 'Ganaste',
    lost: 'Perdiste',
    roulet: (usedPrefix) => `Puedes hacer varias apuestas en un juego de ruleta.\n\nUso: *${usedPrefix}roulette* <cantidad> <espacio>\n\nMultiplicador de pago`,
    rouletCd: 'Ya has hecho una apuesta. Espere',
    moreInfo: 'Para más información',
    betMin: 'La cantidad de apuesta debe ser mayor que',
    betMax: 'La cantidad de apuesta excede el límite máximo de',
    betNan: 'No tienes suficientes monedas para hacer esta apuesta',
    in: 'en',
    bet: 'Has hecho una apuesta de',
    fell: 'La ruleta cayó en',
    slotC: 'Casi lo tienes, sigue intentándolo :)',

    delWarnUser: 'Un admin ha reducido tu advertencia, ahora tienes',
    warnNan: 'El usuario no tiene ninguna advertencia',
    delwarn: 'Eliminar advertencia',
    warns: 'Advertencias',
    warn: 'Advertencia',
    warnRec: 'Has recibido una advertencia de un admin',
    numError: 'Número Incorrecto',
    promote: 'Usuario Promovido',
    demote: 'Usuario Degradado',
    gpInfo: 'Info del Grupo',
    members: 'Miembros',
    gpOwner: 'Dueño del Grupo',
    admin: 'Admin',
    gpConf: 'Configuración del grupo',
    gpConfMsg: 'Configuración de Mensajes',
    kick: 'Usuario Expulsado',
    linkGp: 'Enlace del Grupo',
    preNan: 'Ingrese un prefijo de número válido',
    gpNanPre: 'El grupo no tiene miembros con el prefijo',
    userPref: 'Usuarios con el prefijo',
    profile: 'Perfil',
    number: 'Número',
    age: 'Edad',
    gender: 'Género',
    lang: 'Idioma',
    regOn: 'Registrado en',
    xpUp: 'Listo para',
    upNan: 'Falta para subir de Nivel',
    gpRulesNan: 'Grupo sin reglas actualmente',
    gpRules: 'Reglas del Grupo',
    rulesMsgOn:'Las *Reglas del Grupo* han sido definidas',
    rulesMsg: 'Ingrese las Reglas del Grupo',
    welMsgOn: 'El mensaje de bienvenida ha sido definido',
    leaMsgOn: 'El mensaje de despedida ha sido definido',
    welMsg: 'Ingrese el mensaje de bienvenida\n\n@user (mención)\n@group (Nombre del grupo)\n@desc (descripción del grupo)',
    leaMsg: 'Ingrese el mensaje de despedida\n\n@user (mención)',
    gpSetting: 'Configuraciones del grupo\n\nAbrir y cerrar el grupo', 
    user: 'Usuario',
    userWarn: 'Usuario Advertido',
    wningUser: (war) => `Si recibes *${war}* advertencias, serás eliminado automáticamente del grupo`,
    warnMaxU: (war) => `El usuario ha excedido las *${war}* advertencias, por lo tanto, será eliminado`,
    blockNan: 'No hay Números Bloqueados',
    bckList: 'Lista de Bloqueados',
    donate: '*DONACIÓN*\nPuedes donar si deseas ayudar a mantener el bot activo',
    langList: 'Seleccione el idioma que desea utilizar\n\n≡ *Idiomas disponibles*',
    expire: 'Expira en',
    ping: 'Ping',
    uptime: 'Tiempo de actividad',
    gpNsfw: (usedPrefix) => `El grupo no permite contenido nsfw\nUse este grupo\n${bgp3}\n\nSi eres un administrador, habilita con\n*${usedPrefix}enable* nsfw`,
    nsfwAge: '¡Eres menor de edad! vuelve cuando tengas más de 18 años',
    addPremUser: 'Ahora eres un Usuario Premium',
    banChat: 'El Bot ha sido desactivado en este grupo',
    unBanChat: 'Bot Activo en este grupo',
   banUser: 'Ya no podrás usar mis comandos',
    unBanUser: 'Ha sido desbaneado',
    restartBot: 'Reiniciando el Bot...\nEspere un momento',

    genderList: 'Géneros disponibles',
    man: 'Hombre',
    woman: 'Mujer',
    other: 'Otro',
    regIsOn: 'Ya estás registrado\n\n¿Quieres registrarte de nuevo?\n\n📌 Usa este comando para eliminar tu registro',
    nameMax: 'El nombre es demasiado largo',
    oldReg: 'Wow, el abuelo quiere jugar con el bot',
    numSn: 'Número de Serie',
    snVerify: 'Verifica tu número de serie con el comando',
    snError: 'Número de serie incorrecto',
    unReg: 'Registro Eliminado',
    stickError: 'La conversión falló, intenta enviar primero *imagen/video/gif* y luego responde con el comando',
    tgStick: 'Ingrese el enlace a un paquete de stickers de Telegram',
    replyStick: 'Responde a un sticker',
    ssWeb: 'Ingrese la URL de una página',
    tradList: 'Lista de Idiomas Soportados',
    searchError: 'No se encontraron resultados',

    rownerH: 'Este comando solo puede ser utilizado por el *Creador del bot*',
    ownerH: 'Este comando solo puede ser utilizado por el *Propietario y Sub Bots*',
    modsH: 'Esta función es solo para *Moderadores del Bot*',
    premH: 'Este comando es solo para miembros *Premium*\n\nIngresa */premium* para obtener más información',
    groupH: 'Este comando solo puede ser utilizado en grupos',
    privateH: 'Este comando solo puede ser utilizado en el chat *privado del Bot*',
    adminH: 'Este comando es solo para *Admins* de grupos',
    botAdmin: 'Para usar este comando, debo ser *Administrador*',
    unregH: 'Regístrate para usar esta función Ingresando:\n\n*/reg*',
    ig: `▢ Sígueme en Instagram\n${fgig}`
}

export default translations