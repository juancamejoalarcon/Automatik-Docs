const steps = [
    {
        type: 'range',
        value: '4'
    },
    {
        type: 'radioC',
        value: '2'
    },
    {
        type: 'text',
        value: 'Banco Santander, S.A'
    },
    {
        type: 'text',
        value: 'Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España',
        pregunta: 'Domicilio social completo de la persona jurídica...'
    },
    {
        type: 'text',
        value: 'B29805314',
        pregunta: 'NIF (Número de Identificación Fiscal)...'
    },
    {
        type: 'text',
        value: 'Registro Mercantil de Madrid',
        pregunta: 'Tipo de registro y lugar donde ...'
    },
    {
        type: 'text',
        value: 'Tomo 123, folio 10, hoja SE-1234',
        pregunta: 'Datos registrales de la perso ...'
    },
    {
        type: 'range',
        value: '2'
    },
    {
        type: 'text',
        value: 'Sara Houston Buesa',
        pregunta: 'Nombre completo, incluyendo apellidos, del representante de la persona jurídi...'
    },
    {
        type: 'text',
        value: 'española',
        pregunta: 'nacionalidad'
    },
    {
        type: 'text',
        value: 'Camino Lorem ipsum dolor, 93A 10ºH',
        pregunta: 'Domicilio completo del representante de la pe...'
    },
    {
        type: 'radioB',
        value: '2',
        pregunta: 'Documento de identidad del representante d...'
    },
    {
        type: 'text',
        value: '54113125J',
        pregunta: 'Número del documento de identificación...'
    },
    {
        type: 'text',
        value: 'representante legal',
        pregunta: 'Función del representante de la persona jurídi...'
    },
    {
        type: 'text',
        value: 'Juan Camejo Alarcón',
        pregunta: 'Nombre completo, incluyendo apellidos, del representante de la persona jurídi...'
    },
    {
        type: 'text',
        value: 'española',
        pregunta: 'nacionalidad'
    },
    {
        type: 'text',
        value: 'Urbanización Lorem ipsum dolor sit, 138 6ºH',
        pregunta: 'Domicilio completo del representante de la pe...'
    },
    {
        type: 'radioB',
        value: '3',
        pregunta: 'Documento de identidad del representante d...'
    },
    {
        type: 'text',
        value: '71928721Q',
        pregunta: 'Número del documento de identificación...'
    },
    {
        type: 'text',
        value: 'apoderado',
        pregunta: 'Función del representante de la persona jurídi...'
    },
    {
        type: 'radioC',
        value: '2'
    },
    {
        type: 'text',
        value: 'Indra Sistemas, S.A'
    },
    {
        type: 'text',
        value: 'C. Comercial Lorem ipsum dolor, 3B 11ºA',
        pregunta: 'Domicilio social completo de la persona jurídica...'
    },
    {
        type: 'text',
        value: 'A18313189',
        pregunta: 'NIF (Número de Identificación Fiscal)...'
    },
    {
        type: 'text',
        value: 'Registro Mercantil de Albacete',
        pregunta: 'Tipo de registro y lugar donde ...'
    },
    {
        type: 'text',
        value: 'Tomo 100, folio 20, hoja SE-999',
        pregunta: 'Datos registrales de la perso ...'
    },
    {
        type: 'range',
        value: '2'
    },
    {
        type: 'text',
        value: 'Antonio Banderas',
        pregunta: 'Nombre completo, incluyendo apellidos, del representante de la persona jurídi...'
    },
    {
        type: 'text',
        value: 'española',
        pregunta: 'nacionalidad'
    },
    {
        type: 'text',
        value: 'Alameda Lorem, 56B',
        pregunta: 'Domicilio completo del representante de la pe...'
    },
    {
        type: 'radioB',
        value: '1',
        pregunta: 'Documento de identidad del representante d...'
    },
    {
        type: 'text',
        value: '93066379F',
        pregunta: 'Número del documento de identificación...'
    },
    {
        type: 'text',
        value: 'representante legal',
        pregunta: 'Función del representante de la persona jurídi...'
    },
    {
        type: 'text',
        value: 'Brad Pitt',
        pregunta: 'Nombre completo, incluyendo apellidos, del representante de la persona jurídi...'
    },
    {
        type: 'text',
        value: 'española',
        pregunta: 'nacionalidad'
    },
    {
        type: 'text',
        value: 'Camino Lorem ipsum dolor, 93A 10ºH',
        pregunta: 'Domicilio completo del representante de la pe...'
    },
    {
        type: 'radioB',
        value: '3',
        pregunta: 'Documento de identidad del representante d...'
    },
    {
        type: 'text',
        value: 'Y1841513D',
        pregunta: 'Número del documento de identificación...'
    },
    {
        type: 'text',
        value: 'apoderado total',
        pregunta: 'Función del representante de la persona jurídi...'
    },
    {
        type: 'radioC',
        value: '1',
        pregunta: 'La persona arrendadora 3...'
    },
    {
        type: 'radioC',
        value: '1',
        pregunta: 'La persona arrendadora (propietaria) para realizar el contrato, actú...'
    },
    {
        type: 'text',
        value: 'Alberto Sabina Fajardo',
        pregunta: 'Nombre completo del arrendador (propietario),...'
    },
    {
        type: 'text',
        value: 'española',
        pregunta: 'nacionalidad'
    },
    {
        type: 'text',
        value: 'Pasadizo Lorem ipsum dolor sit, 20B 14ºB',
        pregunta: 'Dirección del lugar donde reside el arrendador...'
    },
    {
        type: 'radioB',
        value: '1',
        pregunta: 'Documento de identidad del representante d...'
    },
    {
        type: 'text',
        value: '44418223W',
        pregunta: 'Número del documento de identificación...'
    },
    {
        type: 'radioC',
        value: '1',
        pregunta: 'La persona arrendadora 3...'
    },
    {
        type: 'radioC',
        value: '2',
        pregunta: 'La persona arrendadora (propietaria) para realizar el contrato, actú...'
    },
    {
        type: 'text',
        value: 'Stalin Moreno',
        pregunta: 'Nombre completo del arrendador (propietario),...'
    },
    {
        type: 'text',
        value: 'española',
        pregunta: 'nacionalidad'
    },
    {
        type: 'text',
        value: 'Vía Lorem ipsum dolor sit, 97A 2ºE',
        pregunta: 'Dirección del lugar donde reside el arrendador...'
    },
    {
        type: 'radioB',
        value: '2',
        pregunta: 'Documento de identidad del representante d...'
    },
    {
        type: 'text',
        value: 'X2497232F',
        pregunta: 'Introduzca el número que corresponde con el documento ...'
    },
    {
        type: 'text',
        value: 'Jazmín Gamez Sandoval',
        pregunta: 'Nombre completo de la persona que firma este contrato en nombre y ...'
    },
    {
        type: 'text',
        value: 'española',
        pregunta: 'nacionalidad'
    },
    {
        type: 'radioB',
        value: '2',
        pregunta: 'Documento de identidad del representante d...'
    },
    {
        type: 'text',
        value: '17464671N',
        pregunta: 'Número del documento se...'
    },
    {
        type: 'text',
        value: 'apoderado',
        pregunta: 'Calidad o concepto en el que esta persona firma este contrato en nombre...'
    },
    {
        type: 'text',
        value: 'Cañada Lorem ipsum dolor, 174 8ºD',
        pregunta: 'Dirección del lugar donde reside el arrendador...'
    },


    {
        type: 'text',
        value: 'Cannabis'
    },
    {
        type: 'text',
        value: 'Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España',
    },
    {
        type: 'textarea',
        value: 'Vender maría de la buena',
    },
    {
        type: 'radioC',
        value: '2',
    },
    {
        type: 'text',
        value: '1 año y 6 meses',
    },
    {
        type: 'text',
        value: 'Martino Montano Holguín'
    },
    {
        type: 'text',
        value: 'Martino Montano Holguín'
    },
    {
        type: 'radioC',
        value: '1',
    },
    {
        type: 'text',
        value: '11:30'
    },
    {
        type: 'text',
        value: 'Madrid'
    },
    {
        type: 'date',
        value: '2020-02-12'
    },
];

const outputExpected = 'ACTA DE CONSTITUCIÓN DE ASOCIACIÓNREUNIDOS Sara Houston Buesa, mayor de edad, de nacionalidad española, con domicilio en Camino Lorem ipsum dolor, 93A 10ºH, NIE núm. 54113125J, y en calidad de representante legal;   Juan Camejo Alarcón, mayor de edad, de nacionalidad española, con domicilio en Urbanización Lorem ipsum dolor sit, 138 6ºH, Pasaporte núm. 71928721Q, y en calidad de apoderado;   actuando en nombre y representación de: Banco Santander, S.A, con domicilio en Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España,  C.I.F/N.I.F número B29805314, e inscrita en: Registro Mercantil de Madrid  con la siguiente información: Tomo 123, folio 10, hoja SE-1234. Antonio Banderas, mayor de edad, de nacionalidad española, con domicilio en Alameda Lorem, 56B, DNI núm. 93066379F, y en calidad de representante legal;   Brad Pitt, mayor de edad, de nacionalidad española, con domicilio en Camino Lorem ipsum dolor, 93A 10ºH, Pasaporte núm. Y1841513D, y en calidad de apoderado total;   actuando en nombre y representación de: Indra Sistemas, S.A, con domicilio en C. Comercial Lorem ipsum dolor, 3B 11ºA,  C.I.F/N.I.F número A18313189, e inscrita en: Registro Mercantil de Albacete  con la siguiente información: Tomo 100, folio 20, hoja SE-999.Alberto Sabina Fajardo, mayor de edad, de nacionalidad española, y con domicilio en Pasadizo Lorem ipsum dolor sit, 20B 14ºB, con DNI número 44418223W, y actuando en su propio nombre y representación.Jazmín Gamez Sandoval, mayor de edad, de nacionalidad española, con domicilio en Cañada Lorem ipsum dolor, 174 8ºD, NIE número: 17464671N, en calidad de apoderado, acreditado según escritura pública y/o autorización pertinente y actuando en nombre y representación de Stalin Moreno, de nacionalidad española, con domicilio en Vía Lorem ipsum dolor sit, 97A 2ºE y NIE número X2497232F.Todos los reunidos, EXPONENPRIMERO.La sociedad se denomina CannabisEn el lugar, fecha y hora indicados, se reúnen las personas reseñadas, todas ellas con capacidad de obrar suficiente para la constitución de una asociación amparada en el artículo 22 de la Constitución Española. SEGUNDO. Que, por unanimidad han sido elegidos para presidir la sesión Martino Montano Holguín y para actuar como Secretario Martino Montano Holguín. TERCERO. Se procede a dar lectura del proyecto de Estatutos por el que ha de regirse la asociación y que han sido redactados con carácter previo al presente acto. CUARTO. La Asociación tiene una duración limitada, constituyéndose por el plazo de 1 año y 6 meses.QUINTO. Tras el debate y deliberación de los Estatutos, se adoptan los siguientes: ACUERDOS PRIMERO. CONSTITUCIÓN DE LA ASOCIACIÓN Las partes han acordado constituir una asociación sin ánimo de lucro, en base  a la Ley reguladora del Derecho de Asociación, cuya denominación exacta será Cannabis, estará domiciliada en Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España, y tendrá como fin:  Vender maría de la buenaSEGUNDO. ÓRGANO DE GOBIERNO Las partes han decidido nombrar a los siguientes miembros del órgano de representación inicial de la asociación:   - Martino Montano Holguín, como Presidente - Martino Montano Holguín, como Secretario TERCERO. APROBACIÓN DE ESTATUTOS Las partes acuerdan aprobar los Estatutos sociales de la Asociación: "Cannabis", cuyo tenor literal se refleja en el documento anexo a este acta fundacional, extendidos en duplicado, firmado por todos los socios fundadores y fechado en igual fecha que la presente acta fundacional. CUARTO. -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ESTA PARTE ESTARÁ DISPONIBLE SÓLO AL FINALIZAR EL FORMULARIO --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------Y no habiendo más asuntos de que tratar, se levanta esta sesión siendo las 11:30 horas de la que se extiende la presente acta funcional, que es firmada, en señal de aprobación, por todos los asistentes.  En Madrid, a 12 de febrero de 2020. ';
const outputExpectedAfterPayment = 'ACTA DE CONSTITUCIÓN DE ASOCIACIÓNREUNIDOS , mayor de edad, de nacionalidad , con domicilio en , DNI núm. , y en calidad de ;   , mayor de edad, de nacionalidad , con domicilio en , DNI núm. , y en calidad de ;   actuando en nombre y representación de: Banco Santander, S.A, con domicilio en Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España,  C.I.F/N.I.F número B29805314, e inscrita en: Registro Mercantil de Madrid  con la siguiente información: Tomo 123, folio 10, hoja SE-1234. , mayor de edad, de nacionalidad , con domicilio en , DNI núm. , y en calidad de ;   , mayor de edad, de nacionalidad , con domicilio en , DNI núm. , y en calidad de ;   actuando en nombre y representación de: Indra Sistemas, S.A, con domicilio en C. Comercial Lorem ipsum dolor, 3B 11ºA,  C.I.F/N.I.F número A18313189, e inscrita en: Registro Mercantil de Albacete  con la siguiente información: Tomo 100, folio 20, hoja SE-999.Alberto Sabina Fajardo, mayor de edad, de nacionalidad española, y con domicilio en Pasadizo Lorem ipsum dolor sit, 20B 14ºB, con DNI número 44418223W, y actuando en su propio nombre y representación.Jazmín Gamez Sandoval, mayor de edad, de nacionalidad española, con domicilio en Cañada Lorem ipsum dolor, 174 8ºD, NIE número: 17464671N, en calidad de apoderado, acreditado según escritura pública y/o autorización pertinente y actuando en nombre y representación de Stalin Moreno, de nacionalidad española, con domicilio en Vía Lorem ipsum dolor sit, 97A 2ºE y NIE número X2497232F.Todos los reunidos, EXPONENPRIMERO.La sociedad se denomina CannabisEn el lugar, fecha y hora indicados, se reúnen las personas reseñadas, todas ellas con capacidad de obrar suficiente para la constitución de una asociación amparada en el artículo 22 de la Constitución Española. SEGUNDO. Que, por unanimidad han sido elegidos para presidir la sesión Martino Montano Holguín y para actuar como Secretario Martino Montano Holguín. TERCERO. Se procede a dar lectura del proyecto de Estatutos por el que ha de regirse la asociación y que han sido redactados con carácter previo al presente acto. CUARTO. La Asociación tiene una duración limitada, constituyéndose por el plazo de 1 año y 6 meses.QUINTO. Tras el debate y deliberación de los Estatutos, se adoptan los siguientes: ACUERDOS PRIMERO. CONSTITUCIÓN DE LA ASOCIACIÓN Las partes han acordado constituir una asociación sin ánimo de lucro, en base  a la Ley reguladora del Derecho de Asociación, cuya denominación exacta será Cannabis, estará domiciliada en Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España, y tendrá como fin:  Vender maría de la buenaSEGUNDO. ÓRGANO DE GOBIERNO Las partes han decidido nombrar a los siguientes miembros del órgano de representación inicial de la asociación:   - Martino Montano Holguín, como Presidente - Martino Montano Holguín, como Secretario TERCERO. APROBACIÓN DE ESTATUTOS Las partes acuerdan aprobar los Estatutos sociales de la Asociación: "Cannabis", cuyo tenor literal se refleja en el documento anexo a este acta fundacional, extendidos en duplicado, firmado por todos los socios fundadores y fechado en igual fecha que la presente acta fundacional. CUARTO. FORMALIDADES El órgano de representación inicial designado se encargará de realizar los trámites y actuaciones que sean necesarias ante el Registro de Asociaciones para proceder a la inscripción de la asociación. Y no habiendo más asuntos de que tratar, se levanta esta sesión siendo las 11:30 horas de la que se extiende la presente acta funcional, que es firmada, en señal de aprobación, por todos los asistentes.  En Madrid, a 12 de febrero de 2020. ';


export default {
    steps,
    outputExpected,
    outputExpectedAfterPayment,
    id: 'acta-constitucion-asociacion'
}