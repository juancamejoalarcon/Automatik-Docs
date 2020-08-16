const steps = [
    {
        type: 'text',
        value: 'Madrid'
    },
    {
        type: 'date',
        value: '2020-02-12'
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
        type: 'text',
        value: '000 130000000 00',
    },
    {
        type: 'text',
        value: 'Juan Camejo Alarcón',
    },
    {
        type: 'radioB',
        value: '2',
    },
    {
        type: 'text',
        value: '71928721Q',
    },
    {
        type: 'text',
        value: '111112222333344444',
    },
    {
        type: 'text',
        value: 'Graduado en Derecho',
    },
    {
        type: 'text',
        value: 'española',
    },
    {
        type: 'date',
        value: '2020-02-12'
    },
    {
        type: 'radioC',
        value: '1'
    },
    {
        type: 'text',
        value: 'Urbanización Lorem ipsum dolor sit, 138 6ºH'
    },
    {
        type: 'select',
        value: '2'
    },
    {
        type: 'radioB',
        value: '1',
    },
    {
        type: 'radioC',
        value: '1'
    },
    {
        type: 'text',
        value: 'Convenio random'
    },
    {
        type: 'text',
        value: 'Personal técnico'
    },
    {
        type: 'text',
        value: 'programador'
    },
    {
        type: 'textarea',
        value: 'mantenimiento de bases de datos'
    },
    {
        type: 'textarea',
        value: 'servicio de restauración durante la temporada de verano'
    },
    {
        type: 'radioC',
        value: '1'
    },
    {
        type: 'textarea',
        value: 'Centro de trabajo 1: Madrid'
    },
    {
        type: 'radioC',
        value: '1'
    },
    {
        type: 'number',
        value: '40'
    },
    {
        type: 'textarea',
        value: 'De lunes a viernes de 9:00 a 17:00'
    },
    {
        type: 'radioB',
        value: '1',
    },
    {
        type: 'textarea',
        value: 'El llamamiento al trabajador se realizará por vía telemática con un preaviso de diez días naturales.'
    },
    {
        type: 'date',
        value: '2020-02-12'
    },
    {
        type: 'radioB',
        value: '1',
    },
    {
        type: 'radioC',
        value: '1'
    },
    {
        type: 'text',
        value: '1 mes'
    },
    {
        type: 'select',
        value: '2'
    },
    {
        type: 'number',
        value: '10000'
    },
    {
        type: 'textarea',
        value: 'El trabajador recibirá 12 salarios y 2 pagas extraordinarias'
    },
    {
        type: 'select',
        value: '1'
    },
    {
        type: 'text',
        value: 'el día 28 de cada mes'
    },
    {
        type: 'radioB',
        value: '1',
    },
    {
        type: 'textarea',
        value: 'caca'
    },
    {
        type: 'radioB',
        value: '1',
    },
    {
        type: 'text',
        value: '40 días anuales'
    },
    {
        type: 'radioB',
        value: '1',
    },
    {
        type: 'radioC',
        value: '1',
    },
    {
        type: 'text',
        value: '1 año'
    },
    {
        type: 'text',
        value: 'Canarias'
    },
    {
        type: 'radioB',
        value: '1',
    },
    {
        type: 'radioC',
        value: '1',
    },
    {
        type: 'textarea',
        value: 'Máster en Derecho'
    },
    {
        type: 'textarea',
        value: 'Proyecto X'
    },
    {
        type: 'text',
        value: '1 año'
    },
    {
        type: 'number',
        value: '2000'
    },
    {
        type: 'radioB',
        value: '1',
    },
    {
        type: 'text',
        value: '20 días'
    },
];

const outputExpected = `Contrato de trabajo fijo discontinuoEn Madrid, a  12 de febrero de 2020REUNIDOSDe una parte, Sara Houston Buesa, mayor de edad, con domicilio en Camino Lorem ipsum dolor, 93A 10ºH, NIE núm. 54113125J, y en calidad de representante legal;   Juan Camejo Alarcón, mayor de edad, con domicilio en Urbanización Lorem ipsum dolor sit, 138 6ºH, Pasaporte núm. 71928721Q, y en calidad de apoderado;   actuando en nombre y representación de: Banco Santander, S.A, con domicilio en Paseo de las Yeserías 11, Escalera 2, 4.º B, 28005, Madrid, España,  C.I.F/N.I.F número B29805314, e inscrita en: Registro Mercantil de Madrid  con la siguiente información: Tomo 123, folio 10, hoja SE-1234.En adelante, el "EMPLEADOR".De otra parte,Juan Camejo Alarcón, con NIE: 71928721Q, número de afiliación a la Seguridad Social: 111112222333344444, nivel formativo: Graduado en Derecho, nacionalidad: española, fecha de nacimiento: 12 de febrero de 2020, domicilio en: Urbanización Lorem ipsum dolor sit, 138 6ºH, y en su propio nombre y representación.En adelante, el "TRABAJADOR".El Empleador y el TRABAJADOR que, en adelante, podrán ser denominados, individualmente, "la Parte" y conjuntamente, "las Partes", reconociéndose mutuamente capacidad legal suficiente para contratar y obligarse en la representación que actúan y siendo responsables de la veracidad de sus manifestaciones,EXPONENI. Que reúnen los requisitos exigidos para la celebración del presente contrato. Además se expone que el Trabajador ha prestado sus servicios anteriormente para el Empleador bajo un contrato de trabajo de carácter temporal y que se cumplen con los requisitos establecidos en el convenio aplicable para la conversión del contrato de trabajo temporal previo del Trabajador en el presente Contrato.II. Que el Empleador está interesado en contratar los servicios del TRABAJADOR y, para ello, hace constar que su código de la cuenta de cotización a la Seguridad Social es:	000 130000000 00.El TRABAJADOR está admitido en el Programa de Activación para el Empleo y está en posesión del documento acreditativo o resolución del Servicio Público de Empleo EstatalIII. Y que habiendo llegado las Partes, libre y espontáneamente, a una coincidencia mutua de sus voluntades, formalizan el presente “Contrato de trabajo fijo discontinuo”, en adelante el "Contrato" o el "Contrato de trabajo", que tiene por objeto el establecimiento de una relación laboral entre las Partes, así como de sus términos y condiciones, y que se regirá por las siguientes,ESTIPULACIONESPRIMERA.- Objeto. Puesto de trabajo El Trabajado desempeñará sus servicios en el puesto de: programador. De acuerdo con el sistema de clasificación profesional vigente en la empresa, estará incluida en el grupo profesional de: Personal técnico, y realizará las siguientes actividades periódicas de carácter discontinuo:	mantenimiento de bases de datosDichas actividades se desarrollarán dentro de la siguiente actividad cíclica intermitente:	servicio de restauración durante la temporada de veranoSEGUNDA.- Lugar de trabajoEl TRABAJADOR prestará sus servicios en los centros de trabajo, ubicados en:

Centro de trabajo 1: Madrid

No obstante, el EMPLEADOR se reserva el derecho de modificar, respetando los preavisos legalmente establecidos, el lugar de trabajo del TRABAJADOR, incluso si este traslado exige un cambio de residencia, siempre que se encuentre justificado por razones económicas, técnicas, organizativas o de producción. En este caso, el TRABAJADOR contará con los derechos reconocidos por el artículo 40 del Estatuto de los Trabajadores.El EMPLEADOR pone a disposición del TRABAJADOR un vehículo para la realización de sus tareas laborales. Este vehículo podrá ser utilizado únicamente para asuntos empresariales, estando prohibida su utilización privada o fuera de la jornada de trabajo.El TRABAJADOR declara poseer un carné de conducir válido y actualizado para conducir automóviles.El EMPLEADOR soportará los gastos derivados de las revisiones, el seguro, el mantenimiento, las reparaciones, e incluso la sustitución del vehículo de empresa, salvo que estos se deban a la negligencia en la conducción o a daños causados premeditadamente por el TRABAJADOR. Asimismo, el EMPLEADOR pagará los gastos de carburante relacionados con el uso empresarial contra la presentación de las correspondientes facturas.El TRABAJADOR se compromete a mantener el vehículo en buen estado de conservación y uso y a poner en conocimiento del EMPLEADOR, en el plazo más breve posible, la necesidad de reparaciones necesarias para su conservación y correcto mantenimiento. Igualmente, se compromete a respetar el contrato de seguro del vehículo, cuyo contenido declara conocer; a utilizar el vehículo respetando el Código de Tráfico y Seguridad Vial; y a hacerse responsable del pago de todas las multas en las que haya incurrido como consecuencia de infracciones de tráfico.En caso de extinción de la relación laboral, por cualquier causa, o en caso de dejar de poseer un carné de conducir válido y actualizado, el TRABAJADOR se compromete a devolver inmediatamente el vehículo y sus llaves al EMPLEADOR. El TRABAJADOR acepta que en caso de no hacerlo, el EMPLEADOR le retenga cualquier liquidación que le debiere, hasta alcanzar el equivalente al valor del vehículo.TERCERA.- Jornada de trabajoLa jornada de trabajo del TRABAJADOR será a tiempo completo.
Así, la jornada de trabajo será de 40 horas semanales, prestadas conforme al siguiente horario: De lunes a viernes de 9:00 a 17:00. En todo caso, se respetarán los descansos legalmente establecidos.Además, el TRABAJADOR se compromete a la realización, a solicitud del EMPLEADOR, de hasta un máximo de 80 horas extraordinarias al año, prorrateables, en su caso, en función de la proporción de la jornada en cómputo anual que realice con relación a la jornada general de la empresa, salvo lo previsto en el artículo 35.3 del Estatuto de los Trabajadores.Se considerarán horas extraordinarias las horas de trabajo realizadas por encima de la duración de la jornada de trabajo pactada en el presente artículo.Estas horas se compensarán por tiempos equivalentes de descanso retribuido dentro de los cuatro meses siguientes a su realización.CUARTA.- Duración del ContratoLa duración del presente Contrato será indefinida, iniciándose la relación laboral el día 12 de febrero de 2020.En todo caso, el EMPLEADOR se compromete a que el presente Contrato tenga, como mínimo, una duración de un año. Por otra parte, la fecha de inicio de la relación laboral es meramente orientativa, ya que esta fecha está condicionada al momento de eficacia de la autorización de trabajo por cuenta ajena solicitada por el TRABAJADOR ante la Oficina de Extranjería, así como a su posterior alta en la Seguridad Social.Las Partes acuerdan que se establezca un período de prueba de 1 mes de duración. Durante este período de prueba, ambas Partes deben cumplir, en todo caso, con sus respectivas obligaciones y gozan de los derechos que les corresponden producto de la relación laboral. No obstante, cualquiera de ellas puede instar la resolución de este Contrato sin necesidad de alegar motivo o causa alguna, y sin que se deba una indemnización por ello. Para instar dicha resolución, la Parte interesada en resolver el Contrato deberá notificárselo a la otra con, como mínimo, un preaviso de siete días naturales a la fecha en la que el desistimiento será efectivo.Aun no mediando indemnización, el EMPLEADOR deberá en todo caso realizar la liquidación a el TRABAJADOR de los días efectivamente trabajados así como de la parte proporcional correspondiente a vacaciones por el período trabajado y al concepto de paga extra salarial.Transcurrido el período de prueba sin que se haya producido el desistimiento, el presente Contrato producirá plenos efectos, computándose el tiempo de los servicios prestados en la antigüedad del TRABAJADOR en la empresa.QUINTA.- Forma y orden de llamadaEl Trabajador  será llamado de acuerdo a la forma y orden descrito a continuación, y siempre respetando lo establecido en el convenio colectivo aplicable al presente caso:	El llamamiento al trabajador se realizará por vía telemática con un preaviso de diez días naturales.SEXTA.- RetribuciónEl TRABAJADOR percibirá una retribución de 10000 € brutos mensuales, que se distribuirán en los siguientes conceptos salariales:	El trabajador recibirá 12 salarios y 2 pagas extraordinarias Asimismo, el TRABAJADOR recibirá la siguiente retribución en especie: caca.El pago de la retribución en dinero se efectuará mensualmente por meses vencidos, el siguiente día: el día 28 de cada mes. El pago se efectuará mediante transferencia o ingreso bancario, en una cuenta a nombre del TRABAJADOR, cuyos datos hayan sido proporcionados en cada momento al EMPLEADOR.El TRABAJADOR junto con la percepción del salario anteriormente descrito,  recibirá una nómina o recibo individual y justificativo del pago del mismo. Todo ello de acuerdo con el modelo aplicable a la empresa. EL EMPLEADOR declara y el TRABAJADOR reconoce que esta retribución incluye la compensación económica por la cláusula de exclusividad y no competencia pactada en el presente Contrato. El EMPLEADOR declara y el TRABAJADOR reconoce que esta retribución incluye la compensación económica por la cláusula de no concurrencia pactada en el presente Contrato.SÉPTIMA.- Vacaciones anualesLa duración de las vacaciones anuales retribuidas del TRABAJADOR será de: 40 días anuales.El calendario de vacaciones se fijará en la empresa de manera que el TRABAJADOR conozca las fechas que le corresponden al menos dos meses antes del comienzo de su disfrute.El disfrute de las vacaciones debe producirse dentro del año al que correspondan, no siendo posible acumularlas, salvo que la fecha prevista de disfrute coincida en el tiempo con una incapacidad temporal.En caso de extinción del Contrato de trabajo, las vacaciones anuales no disfrutadas serán objeto de una compensación económica incluida en el finiquito.OCTAVA.- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ESTA PARTE ESTARÁ DISPONIBLE SÓLO AL FINALIZAR EL FORMULARIO --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------NOVENA.- Preaviso de cese voluntarioSalvo condición más beneficiosa, se acuerda que el preaviso del cese voluntario del TRABAJADOR será de: 20 días mediante notificación fehaciente.Si el TRABAJADOR incumple total o parcialmente este preaviso, quedará obligado a compensar a el Empleador con una cuantía equivalente a los salarios correspondientes a la duración del período incumplido.DÉCIMA.- Comunicación del ContratoEl contenido del presente Contrato se comunicará al Servicio Público de Empleo Estatal en el plazo de los 10 días siguientes a la fecha de su concertación, que figura en el encabezamiento.DECIMOPRIMERA.- -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ESTA PARTE ESTARÁ DISPONIBLE SÓLO AL FINALIZAR EL FORMULARIO --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------DECIMOSEGUNDA.- Acciones legales. Legislación aplicable. JurisdicciónLas Partes reconocen quedar obligadas por el presente Contrato así como sus correspondientes anexos, si los hubiere, y sus efectos jurídicos y se comprometen a su cumplimiento de buena fe.Todo litigio relativo, especialmente, pero no solo, a la formación, validez, interpretación, firma, existencia, ejecución o terminación de este Contrato y, en general, a la relación establecida entre las Partes, será sometido a la legislación española vigente que resulte de aplicación. Particularmente, se regirá por el Estatuto de los Trabajadores, aprobado por el Real Decreto Legislativo 2/2015, de 23 de octubre , y por el siguiente convenio colectivo: Convenio random.En caso de controversia, diferencia, conflicto o reclamación en cuanto al Contrato, o en relación al mismo, las Partes acuerdan que se someterán a la jurisdicción social de los Juzgados y Tribunales competentes conforme a derecho.DECIMOTERCERA.- Otras disposicionesPacto de exclusividad y no competencia: Durante la vigencia del presente Contrato, el TRABAJADOR prestará sus servicios en régimen de dedicación exclusiva al EMPLEADOR. Esta cláusula se establece con el objeto de desincentivar la pluriactividad y el pluriempleo, así como fomentar la vida familiar y laboral.Así, el TRABAJADOR no podrá prestar asesoramiento o servicios a favor de personas físicas o jurídicas que se dediquen a un objeto similar o que pueda considerarse competencia del EMPLEADOR, ya sea en régimen de contrato laboral, incluso si se trata de una relación laboral especial, o en régimen de arrendamiento de servicios o asesoramiento interno, de modo directo o indirecto a través de personas jurídicas interpuestas. Tampoco podrá tener ningún interés económico, ni de cualquier otra clase en actividades empresariales idénticas o similares a la desarrollada por el EMPLEADOR.el TRABAJADOR tampoco podrá realizar ninguna otra actividad económica, además de la prestación de sus servicios al EMPLEADOR, ya sea por cuenta propia o ajena, de modo directo o indirecto a través de personas jurídicas interpuestas, incluso si esta actividad no puede considerarse competencia al EMPLEADOR.Como contraprestación de esta plena dedicación, el TRABAJADOR percibirá la compensación económica que en cada momento figure en el desglose de la nómina bajo este concepto. Así, esta compensación está incluida en la retribución bruta diaria establecida en la estipulación quinta, la cual se ha determinado teniendo en cuenta esta cláusula de exclusividad.El TRABAJADOR podrá rescindir esta cláusula, comunicándolo por escrito al EMPLEADOR con un preaviso de treinta días, perdiendo la compensación económica vinculada a la plena dedicación.Pacto de no concurrencia: De conformidad con lo establecido en el artículo 21.2 del Estatuto de los Trabajadores, ambas Partes convienen que en caso de extinción del presente Contrato de trabajo, por cualquier causa, el TRABAJADOR estará obligada a no competir con el EMPLEADOR, desarrollando por cuenta propia o ajena, una actividad idéntica o similar a la de esta. Esta obligación se extenderá durante el siguiente plazo desde la fecha en que finalice la relación laboral: 1 año, y el ámbito geográfico en el que regirá será el siguiente: Canarias.El EMPLEADOR declara tener un interés industrial y/o comercial en esta cláusula, y el TRABAJADOR reconoce que esta es necesaria y razonable para la protección del fondo de comercio y del negocio del EMPLEADOR.Por tanto, el TRABAJADOR no podrá, dentro el ámbito temporal y territorial arriba indicados:a) establecer relación contractual ninguna, por cuenta propia o ajena, con empresas de la competencia que desarrollen idéntica o similar actividad a la del EMPLEADOR;b) devenir propietaria, socia o administradora o relacionarse de ninguna otra forma con entidades relacionadas con un negocio que presente servicios o productos similares a los del EMPLEADOR o que de cualquier otra forma compita con la misma;c) aceptar ningún trabajo ni prestar servicios a cualquier cliente del EMPLEADOR si dicho empleo o servicio, en alguna medida, utiliza de alguna forma las técnicas o métodos empleados o los productos o servicios ofrecidos por el EMPLEADOR;d) contactar o comunicarse con cualquier cliente del EMPLEADOR con el que haya tenido contacto como consecuencia de la relación laboral aquí regulada, siempre que dicho contacto o comunicación se refiera a la venta o prestación de algún producto o servicio igual o similar a cualquier producto o servicio prestado por el EMPLEADOR.Como contraprestación de esta obligación, el TRABAJADOR percibirá durante la vigencia del Contrato una compensación económica adecuada que figurará en el desglose de la nómina bajo el concepto de "No Competencia". Así, esta compensación está incluida en la retribución bruta diaria establecida en la estipulación quinta, la cual se ha determinado teniendo en cuenta esta cláusula de no concurrencia.El EMPLEADOR se reserva el derecho a decidir discrecionalmente acerca de la aplicación de la obligación contenida en esta cláusula, así como de su ámbito temporal y territorial de aplicación. En caso de renuncia a esta cláusula, el EMPLEADOR deberá notificarlo fehacientemente a el TRABAJADOR en un plazo de quince días desde la notificación de la extinción de la relación laboral.En caso de incumplimiento por el TRABAJADOR de lo aquí acordado, deberá devolver al EMPLEADOR la totalidad de la compensación económica recibida, tan pronto como se conociera su conducta incumplidora, con independencia del tiempo transcurrido desde la finalización del Contrato.Además, el TRABAJADOR indemnizará al EMPLEADOR de los daños y perjuicios causados por su conducta incumplidora, pudiendo ser estos reclamados ante la jurisdicción civil, al haberse extinguido la relación laboral.Cesión de derechos de propiedad intelectual e industrial: Cualquier marca registrada, diseño u otra obra que dé lugar a derechos de propiedad intelectual o industrial realizada por el TRABAJADOR en virtud de la relación laboral regulada en el presente Contrato o relacionada con su actividad profesional y obtenida gracias a los medios o conocimientos adquiridos en el marco de su actividad laboral, deberá ser comunicada inmediatamente al EMPLEADOR y será de la exclusiva propiedad de esta.El TRABAJADOR renuncia a cualesquiera derechos pudieran corresponderle, salvo a los derechos morales de autor, entre ellos al derecho a ser reconocida como autora de la obra protegida por propiedad intelectual.Asimismo, el TRABAJADOR se compromete expresamente a la cesión de dichos derechos en exclusiva al EMPLEADOR por tiempo indefinido y ámbito universal y a ejecutar a petición y a costa de la misma los documentos que resulten precisos, otorgando al EMPLEADOR por medio del presente Contrato poderes de representación para realizar en su nombre los actos necesarios para ejecutar el contenido de esta estipulación.Por tanto, el EMPLEADOR podrá utilizar dichas obras tanto para el ejercicio de su actividad habitual como para comercializarla o ceder los derechos sobre ella a terceros.El TRABAJADOR tendrá derecho a una participación equitativa y proporcional de los ingresos que el EMPLEADOR obtenga como consecuencia de una obra creada por la primera y protegida por derechos de propiedad intelectual. En caso de que la invención no se realice en virtud de la prestación laboral, sino gracias a los medios o conocimientos adquiridos en el marco de esta, el TRABAJADOR tendrá derecho a una compensación económica al momento de su cesión.Cláusula de permanencia: El TRABAJADOR recibirá con cargo al EMPLEADOR la siguiente especialización profesional: Máster en Derecho. Esta especialización profesional tiene por fin la puesta en marcha del siguiente proyecto o la realización del siguiente trabajo específico: Proyecto X. Por esta razón, el TRABAJADOR se compromete a permanecer en la empresa, prestando sus servicios al EMPLEADOR durante un plazo de: 1 año contado desde la finalización de la especialización profesional antes indicada. En caso de que el TRABAJADOR incumpla la presente cláusula, abandonando el trabajo antes del transcurso del plazo aquí previsto, deberá indemnizar al EMPLEADOR en concepto de daños y perjuicios causados, con la cantidad de 2000 €. Esta cantidad ha sido determinada teniendo en cuenta el valor de la especialización antes indicada, así como la importancia que el proyecto o trabajo específico indicado tiene para el EMPLEADOR.Cláusula de confidencialidad: El TRABAJADOR reconoce que toda la documentación, proyectos, archivos o información de cualquier naturaleza intercambiada, facilitada, o creada en el seno de la empresa o entidades y organismos con los que esta colabora, que pueda adquirir o a la que pueda tener acceso durante el curso de la relación laboral es información confidencial de la exclusiva propiedad de la EMPLEADORA. Por tanto, el TRABAJADOR se compromete, tanto durante como después de finalizada la relación laboral, de forma indefinida:a) a salvaguardar, no revelar y no comunicar a persona o entidad alguna, toda o parte de estas informaciones; b) a no explotar, por cuenta propia o de un tercero, directa o indirectamente, toda o parte de estas informaciones; c) a no realizar o conservar copias, en ningún formato o soporte, para fines distintos que los exigidos por la prestación de sus servicios.Al finalizar la relación laboral, el TRABAJADOR entregará a la EMPLEADORA todos los documentos y materiales que contengan información confidencial.El TRABAJADOR comprende que la reputación y éxito continuado de la EMPLEADORA requieren que el secreto de la información confidencial se mantenga y salvaguarde. El TRABAJADOR será responsable de todos los daños y perjuicios que para la EMPLEADORA se deriven como consecuencia del incumplimiento doloso o culposo de su obligación de confidencialidad.Y en prueba de conformidad y aceptación de todo lo establecido, ambas Partes firman todas las hojas de este Contrato en tres ejemplares y a un solo efecto, en el lugar y fecha señalados en el encabezamiento.				EL EMPLEADOR                                                        	EL TRABAJADOR...........................................                                                        ...........................................________                                                                                   ________`;


export default {
    steps,
    outputExpected,
    id: 'contrato-trabajo-fijo-discontinuo'
}