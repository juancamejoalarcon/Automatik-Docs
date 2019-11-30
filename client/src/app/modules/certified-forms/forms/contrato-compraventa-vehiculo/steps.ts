export const steps = [
  {
    type: 'start',
    title: 'Contrato de alquiler',
    description: `El contrato de alquiler es el documento que regula la cesión y el uso de
    inmueble y los derechos y obligaciones de arrendador (el propietario) y arrendatario (inquilino).`,
    isCurrentStep: true
  },
  {
    type: 'iText',
    identifier: 'iLocalidad',
    wordToReplace: 'iLocalidad',
    replacement: '',
    question: 'Lugar en el que se firma este contrato:',
    indications: {
      areIndications: true,
      indicationsType: 'insideText',
      value: 'Indique el lugar en el que se firma este contrato.'
    },
    mandatory: true,
    isFocused: false
  },
  {
    type: 'iDate',
    identifier: 'iFecha',
    wordToReplace: 'iFecha',
    replacement: '',
    question: 'Fecha en la que se firma este contrato:',
    indications: {
      areIndications: true,
      indicationsType: 'insideText',
      value: 'Con la ayuda del calendario, indique la fecha en la que se firma este contrato.',
    },
    mandatory: true,
    isFocused: false
  },
  {
    type: 'iForEach',
    value: 1,
    replacement: '',
    identifier: 'iParteCompradora',
    wordToReplace: 'iParteCompradora',
    question: 'Número de personas que desean comprar el vehículo que se vende por medio de este contrato:',
    content: [
      {
        identifier: 'iParteCompradora',
        wordToReplace: 'iParteCompradora',
        replacementOriginal: 'iPersonaCompradora',
        replacement: '',
        extraReplacements: [],
        modifiedReplacements: [],
        modifiedExtraReplacements: [],
        subSteps: [
          {
            type: 'iRadioC',
            question: 'El comprador (persona que desea adquirir el vehículo) es:',
            identifier: 'iPersonaCompradora',
            wordToReplace: 'iPersonaCompradora',
            indications: 'Marque la opción Persona ...',
            defaultRadioId: 'persona-fisica',
            replacement: '',
            extraReplacements: [
            ],
            radios: [
              {
                label: 'Persona física',
                radioId: 'persona-fisica',
                identifier: 'persona-fisica',
                replacementOriginal: 'iPersonaCompradoraFisica',
                replacement: 'iPersonaCompradoraFisica',
                extraReplacements: [],
                checked: true,
                subSteps: [
                  {
                      type: 'iRadioC',
                      question: 'El comprador (persona que desea adquirir el vehículo) celebra este contrato:',
                      identifier: 'iPersonaCompradoraFisica',
                      wordToReplace: 'iPersonaCompradoraFisica',
                      indications: 'Marque la opción Persona ...',
                      defaultRadioId: '4_1_opA_1_opA',
                      replacement: '',
                      extraReplacements: [
                      ],
                      radios: [
                        {
                          label: 'en su propio nombre y representación',
                          radioId: '4_1_opA_1_opA',
                          identifier: '4_1_opA_1_opA',
                          // tslint:disable-next-line:max-line-length
                          replacementOriginal: '4_1_opA_1_opA_1, mayor de edad, con domicilio en 4_1_opA_1_opA_2, con 4_1_opA_1_opA_3 número 4_1_opA_1_opA_4, y en su propio nombre y representación.',
                          // tslint:disable-next-line:max-line-length
                          replacement: '4_1_opA_1_opA_1, mayor de edad, con domicilio en 4_1_opA_1_opA_2, con 4_1_opA_1_opA_3 número 4_1_opA_1_opA_4, y en su propio nombre y representación.',
                          extraReplacements: [],
                          checked: false,
                          subSteps: [
                          {
                            question: 'Nombre completo del comprador:',
                            wordToReplace: '4_1_opA_1_opA_1',
                            identifier: '4_1_opA_1_opA_1',
                            type: 'iText',
                            replacement: '',
                          },
                          {
                            question: 'Dirección completa del lugar de residencia del comprador:',
                            wordToReplace: '4_1_opA_1_opA_2',
                            identifier: '4_1_opA_1_opA_2',
                            type: 'iText',
                            replacement: '',
                          },
                          {
                            type: 'iRadioB',
                            question: 'Tipo de documento de identificación del comprador',
                            identifier: '4_1_opA_1_opA_3',
                            wordToReplace: '4_1_opA_1_opA_3',
                            indications: 'Marque la opción Persona ...',
                            replacement: '',
                            radios: [
                              {
                                label: 'DNI',
                                replacementOriginal: 'DNI',
                                replacement: '',
                                radioId: '4_1_opA_1_opA_3_opA',
                                identifier: '4_1_opA_1_opA_3_opA',
                                extraReplacements: [],
                                checked: true,
                              },
                              {
                                label: 'NIE',
                                replacementOriginal: 'NIE',
                                replacement: '',
                                radioId: '4_1_opA_1_opA_3_opB',
                                identifier: '4_1_opA_1_opA_3_opB',
                                extraReplacements: [],
                                checked: false,
                              },
                              {
                                label: 'Pasaporte',
                                replacementOriginal: 'Pasaporte',
                                replacement: '',
                                radioId: '4_1_opA_1_opA_3_opC',
                                identifier: '4_1_opA_1_opA_3_opC',
                                extraReplacements: [],
                                checked: false,
                              }
                            ]
                          },
                          {
                            question: 'Número del documento',
                            wordToReplace: '4_1_opA_1_opA_4',
                            identifier: '4_1_opA_1_opA_4',
                            type: 'iText',
                            replacement: '',
                          }
                        ]
                        },
                        {
                          label: 'por medio de un representante (legal o voluntario)',
                          // tslint:disable-next-line:max-line-length
                          replacementOriginal: '4_1_opA_1_opB_5, mayor de edad, con 4_1_opA_1_opB_6: 4_1_opA_1_opB_7, quien actúa en calidad de 4_1_opA_1_opB_8, en virtud de escritura pública y/o autorización pertinente y, por tanto, en nombre y representación de 4_1_opA_1_opB_1, con domicilio en 4_1_opA_1_opB_2 y 4_1_opA_1_opB_3 número 4_1_opA_1_opB_4.',
                          // tslint:disable-next-line:max-line-length
                          replacement: '4_1_opA_1_opB_5, mayor de edad, con 4_1_opA_1_opB_6: 4_1_opA_1_opB_7, quien actúa en calidad de 4_1_opA_1_opB_8, en virtud de escritura pública y/o autorización pertinente y, por tanto, en nombre y representación de 4_1_opA_1_opB_1, con domicilio en 4_1_opA_1_opB_2 y 4_1_opA_1_opB_3 número 4_1_opA_1_opB_4.',
                          extraReplacements: [],
                          radioId: '4_1_opA_1_opB',
                          identifier: '4_1_opA_1_opB',
                          checked: false,
                          subSteps: [
                            {
                              question: 'Nombre completo del comprador:',
                              wordToReplace: '4_1_opA_1_opB_1',
                              identifier: '4_1_opA_1_opB_1',
                              type: 'iText',
                              replacement: '',
                            },
                            {
                              question: 'Dirección completa del lugar de residencia del comprador:',
                              wordToReplace: '4_1_opA_1_opB_2',
                              identifier: '4_1_opA_1_opB_2',
                              type: 'iText',
                              replacement: '',
                            },
                            {
                              type: 'iRadioB',
                              question: 'Tipo de dpcumento de identificación del comprador',
                              identifier: '4_1_opA_1_opB_3',
                              wordToReplace: '4_1_opA_1_opB_3',
                              indications: 'Marque la opción Persona ...',
                              replacement: '',
                              radios: [
                                {
                                  label: 'DNI',
                                  replacementOriginal: 'DNI',
                                  replacement: '',
                                  radioId: '4_1_opA_1_opB_3_opA',
                                  identifier: '4_1_opA_1_opB_3_opA',
                                  extraReplacements: [],
                                  checked: true,
                                },
                                {
                                  label: 'NIE',
                                  replacementOriginal: 'NIE',
                                  replacement: '',
                                  radioId: '4_1_opA_1_opB_3_opB',
                                  identifier: '4_1_opA_1_opB_3_opB',
                                  extraReplacements: [],
                                  checked: false,
                                },
                                {
                                  label: 'Pasaporte',
                                  replacementOriginal: 'Pasaporte',
                                  replacement: '',
                                  radioId: '4_1_opA_1_opB_3_opC',
                                  identifier: '4_1_opA_1_opB_3_opC',
                                  extraReplacements: [],
                                  checked: false,
                                }
                              ]
                            },
                            {
                              question: 'Número del documento',
                              wordToReplace: '4_1_opA_1_opB_4',
                              identifier: '4_1_opA_1_opB_4',
                              type: 'iText',
                              replacement: '',
                            },
                            {
                              question: 'Nombre completo de la persona que firma este contrato en nombre y representación del comprador:',
                              wordToReplace: '4_1_opA_1_opB_5',
                              identifier: '4_1_opA_1_opB_5',
                              type: 'iText',
                              replacement: '',
                            },
                            {
                              type: 'iRadioB',
                              question: 'Documento de identificación personal de la persona que firma este contrato en nombre y representación del comprador:',
                              identifier: '4_1_opA_1_opB_6',
                              wordToReplace: '4_1_opA_1_opB_6',
                              indications: 'Marque la opción Persona ...',
                              replacement: '',
                              radios: [
                                {
                                  label: 'DNI',
                                  replacementOriginal: 'DNI',
                                  replacement: '',
                                  radioId: '4_1_opA_1_opB_6_opA',
                                  identifier: '4_1_opA_1_opB_6_opA',
                                  extraReplacements: [],
                                  checked: true,
                                },
                                {
                                  label: 'NIE',
                                  replacementOriginal: 'NIE',
                                  replacement: '',
                                  radioId: '4_1_opA_1_opB_6_opB',
                                  identifier: '4_1_opA_1_opB_6_opB',
                                  extraReplacements: [],
                                  checked: false,
                                },
                                {
                                  label: 'Pasaporte',
                                  replacementOriginal: 'Pasaporte',
                                  replacement: '',
                                  radioId: '4_1_opA_1_opB_6_opC',
                                  identifier: '4_1_opA_1_opB_6_opC',
                                  extraReplacements: [],
                                  checked: false,
                                }
                              ]
                            },
                            {
                              question: 'Número del documento de identificación personal seleccionado:',
                              wordToReplace: '4_1_opA_1_opB_7',
                              identifier: '4_1_opA_1_opB_7',
                              type: 'iText',
                              replacement: '',
                            },
                            {
                              // tslint:disable-next-line:max-line-length
                              question: 'Calidad o concepto en el que esta persona firma este contrato en nombre y representación del comprador:',
                              wordToReplace: '4_1_opA_1_opB_8',
                              identifier: '4_1_opA_1_opB_8',
                              type: 'iText',
                              replacement: '',
                            },
                          ]
                        },
                      ],
                  },
              ]
              },
              {
                label: 'Persona jurídica',
                // tslint:disable-next-line:max-line-length
                replacementOriginal: '4_1_opB_5, mayor de edad, con domicilio en 4_1_opB_6, con 4_1_opB_7 número 4_1_opB_8, en nombre y representación de: 4_1_opB_1, con N.I.F número 4_1_opB_2, e inscrita en: 4_1_opB_3 con la siguiente información: 4_1_opB_4.',
                // tslint:disable-next-line:max-line-length
                replacement: '4_1_opB_5, mayor de edad, con domicilio en 4_1_opB_6, con 4_1_opB_7 número 4_1_opB_8, en nombre y representación de: 4_1_opB_1, con N.I.F número 4_1_opB_2, e inscrita en: 4_1_opB_3 con la siguiente información: 4_1_opB_4.',
                extraReplacements: [],
                radioId: 'persona-juridica',
                identifier: 'persona-juridica',
                checked: false,
                subSteps: [
                  {
                    question: 'Nombre completo de la persona jurídica que desea comprador el vehículo:',
                    wordToReplace: '4_1_opB_1',
                    identifier: '4_1_opB_1',
                    type: 'iText',
                    replacement: '',
                  },
                  {
                    question: 'Número de Identificación Fiscal o NIF completo de la persona jurídica que desea comprador el vehículo:',
                    wordToReplace: '4_1_opB_2',
                    identifier: '4_1_opB_2',
                    type: 'iText',
                    replacement: '',
                  },
                  {
                    // tslint:disable-next-line:max-line-length
                    question: 'Indique el tipo de registro y lugar donde está inscrita la persona jurídica que desea comprador el vehículo:',
                    wordToReplace: '4_1_opB_3',
                    identifier: '4_1_opB_3',
                    type: 'iText',
                    replacement: '',
                  },
                  {
                    question: 'Datos registrales completos de la persona jurídica que desea comprador el vehículo:',
                    wordToReplace: '4_1_opB_4',
                    identifier: '4_1_opB_4',
                    type: 'iText',
                    replacement: '',
                  },
                  {
                    question: 'Nombre completo del representante persona física de la persona jurídica que desea comprador el vehículo:',
                    wordToReplace: '4_1_opB_5',
                    identifier: '4_1_opB_5',
                    type: 'iText',
                    replacement: '',
                  },
                  {
                    question: 'Domicilio completo del representante persona física de la persona jurídica que desea comprador el vehículo:',
                    wordToReplace: '4_1_opB_6',
                    identifier: '4_1_opB_6',
                    type: 'iText',
                    replacement: '',
                  },
                  {
                    type: 'iRadioB',
                    // tslint:disable-next-line:max-line-length
                    question: 'Documento de identidad del representante persona física de la persona jurídica que desea comprador el vehículo:',
                    identifier: '4_1_opB_7',
                    wordToReplace: '4_1_opB_7',
                    indications: 'Marque la opción Persona ...',
                    replacement: '',
                    radios: [
                      {
                        label: 'DNI',
                        replacementOriginal: 'DNI',
                        replacement: '',
                        radioId: '4_1_opB_7_opA',
                        identifier: '4_1_opB_7_opA',
                        extraReplacements: [],
                        checked: true,
                      },
                      {
                        label: 'NIE',
                        replacementOriginal: 'NIE',
                        replacement: '',
                        radioId: '4_1_opB_7_opB',
                        identifier: '4_1_opB_7_opB',
                        extraReplacements: [],
                        checked: false,
                      },
                      {
                        label: 'Pasaporte',
                        replacementOriginal: 'Pasaporte',
                        replacement: '',
                        radioId: '4_1_opB_7_opC',
                        identifier: '4_1_opB_7_opC',
                        extraReplacements: [],
                        checked: false,
                      }
                    ]
                  },
                  {
                    question: 'Número del documento de identificación personal seleccionado:',
                    wordToReplace: '4_1_opB_8',
                    identifier: '4_1_opB_8',
                    type: 'iText',
                    replacement: '',
                  },
                ]
              },
            ],
          },
        ]
      }
      // {}
    ]
  },
  {
    type: 'iForEach',
    value: 1,
    replacement: '',
    identifier: 'iParteVendedora',
    wordToReplace: 'iParteVendedora',
    question: 'Número de personas propietarias del vehículo (que desean venderlo por medio de este contrato):',
    content: [
      {
        identifier: 'iParteVendedora',
        wordToReplace: 'iParteVendedora',
        replacementOriginal: 'iPersona',
        replacement: '',
        extraReplacements: [],
        modifiedReplacements: [],
        modifiedExtraReplacements: [],
        subSteps: [
          {
            type: 'iRadioC',
            question: 'El vendedor (propietario del vehículo) es):',
            identifier: 'iPersona',
            wordToReplace: 'iPersona',
            indications: 'Marque la opción Persona ...',
            defaultRadioId: 'persona-fisica',
            replacement: '',
            extraReplacements: [
            ],
            radios: [
              {
                label: 'Persona física',
                radioId: 'persona-fisica',
                identifier: 'persona-fisica',
                replacementOriginal: 'iPersonaFisica',
                replacement: 'iPersonaFisica',
                extraReplacements: [],
                checked: true,
                subSteps: [
                  {
                      type: 'iRadioC',
                      question: 'El vendedor (propietario del vehículo) celebra este contrato:',
                      identifier: 'iPersonaFisica',
                      wordToReplace: 'iPersonaFisica',
                      indications: 'Marque la opción Persona ...',
                      defaultRadioId: '3_1_opA_1_opA',
                      replacement: '',
                      extraReplacements: [
                      ],
                      radios: [
                        {
                          label: 'en su propio nombre y representación',
                          radioId: '3_1_opA_1_opA',
                          identifier: '3_1_opA_1_opA',
                          // tslint:disable-next-line:max-line-length
                          replacementOriginal: '3_1_opA_1_opA_1, mayor de edad, con domicilio en 3_1_opA_1_opA_2, con 3_1_opA_1_opA_3 número 3_1_opA_1_opA_4, y en su propio nombre y representación.',
                          // tslint:disable-next-line:max-line-length
                          replacement: '3_1_opA_1_opA_1, mayor de edad, con domicilio en 3_1_opA_1_opA_2, con 3_1_opA_1_opA_3 número 3_1_opA_1_opA_4, y en su propio nombre y representación.',
                          extraReplacements: [],
                          checked: true,
                          subSteps: [
                          {
                            question: 'Nombre completo del vendedor:',
                            wordToReplace: '3_1_opA_1_opA_1',
                            identifier: '3_1_opA_1_opA_1',
                            type: 'iText',
                            replacement: '',
                          },
                          {
                            question: 'Dirección completa del lugar de residencia del vendedor:',
                            wordToReplace: '3_1_opA_1_opA_2',
                            identifier: '3_1_opA_1_opA_2',
                            type: 'iText',
                            replacement: '',
                          },
                          {
                            type: 'iRadioB',
                            question: 'Tipo de dpcumento de identificación del vendedor',
                            identifier: '3_1_opA_1_opA_3',
                            wordToReplace: '3_1_opA_1_opA_3',
                            indications: 'Marque la opción Persona ...',
                            replacement: '',
                            radios: [
                              {
                                label: 'DNI',
                                replacementOriginal: 'DNI',
                                replacement: '',
                                radioId: '3_1_opA_1_opA_3_opA',
                                identifier: '3_1_opA_1_opA_3_opA',
                                extraReplacements: [],
                                checked: true,
                              },
                              {
                                label: 'NIE',
                                replacementOriginal: 'NIE',
                                replacement: '',
                                radioId: '3_1_opA_1_opA_3_opB',
                                identifier: '3_1_opA_1_opA_3_opB',
                                extraReplacements: [],
                                checked: false,
                              },
                              {
                                label: 'Pasaporte',
                                replacementOriginal: 'Pasaporte',
                                replacement: '',
                                radioId: '3_1_opA_1_opA_3_opC',
                                identifier: '3_1_opA_1_opA_3_opC',
                                extraReplacements: [],
                                checked: false,
                              }
                            ]
                          },
                          {
                            question: 'Número del documento',
                            wordToReplace: '3_1_opA_1_opA_4',
                            identifier: '3_1_opA_1_opA_4',
                            type: 'iText',
                            replacement: '',
                          }
                        ]
                        },
                        {
                          label: 'por medio de un representante (legal o voluntario)',
                          // tslint:disable-next-line:max-line-length
                          replacementOriginal: '3_1_opA_1_opB_5, mayor de edad, con 3_1_opA_1_opB_6: 3_1_opA_1_opB_7, quien actúa en calidad de 3_1_opA_1_opB_8, en virtud de escritura pública y/o autorización pertinente y, por tanto, en nombre y representación de 3_1_opA_1_opB_1, con domicilio en 3_1_opA_1_opB_2 y 3_1_opA_1_opB_3 número 3_1_opA_1_opB_4.',
                          // tslint:disable-next-line:max-line-length
                          replacement: '3_1_opA_1_opB_5, mayor de edad, con 3_1_opA_1_opB_6: 3_1_opA_1_opB_7, quien actúa en calidad de 3_1_opA_1_opB_8, en virtud de escritura pública y/o autorización pertinente y, por tanto, en nombre y representación de 3_1_opA_1_opB_1, con domicilio en 3_1_opA_1_opB_2 y 3_1_opA_1_opB_3 número 3_1_opA_1_opB_4.',
                          extraReplacements: [],
                          radioId: '3_1_opA_1_opB',
                          identifier: '3_1_opA_1_opB',
                          checked: false,
                          subSteps: [
                            {
                              question: 'Nombre completo del vendedor:',
                              wordToReplace: '3_1_opA_1_opB_1',
                              identifier: '3_1_opA_1_opB_1',
                              type: 'iText',
                              replacement: '',
                            },
                            {
                              question: 'Dirección completa del lugar de residencia del vendedor:',
                              wordToReplace: '3_1_opA_1_opB_2',
                              identifier: '3_1_opA_1_opB_2',
                              type: 'iText',
                              replacement: '',
                            },
                            {
                              type: 'iRadioB',
                              question: 'Tipo de dpcumento de identificación del vendedor',
                              identifier: '3_1_opA_1_opB_3',
                              wordToReplace: '3_1_opA_1_opB_3',
                              indications: 'Marque la opción Persona ...',
                              replacement: '',
                              radios: [
                                {
                                  label: 'DNI',
                                  replacementOriginal: 'DNI',
                                  replacement: '',
                                  radioId: '3_1_opA_1_opB_3_opA',
                                  identifier: '3_1_opA_1_opB_3_opA',
                                  extraReplacements: [],
                                  checked: true,
                                },
                                {
                                  label: 'NIE',
                                  replacementOriginal: 'NIE',
                                  replacement: '',
                                  radioId: '3_1_opA_1_opB_3_opB',
                                  identifier: '3_1_opA_1_opB_3_opB',
                                  extraReplacements: [],
                                  checked: false,
                                },
                                {
                                  label: 'Pasaporte',
                                  replacementOriginal: 'Pasaporte',
                                  replacement: '',
                                  radioId: '3_1_opA_1_opB_3_opC',
                                  identifier: '3_1_opA_1_opB_3_opC',
                                  extraReplacements: [],
                                  checked: false,
                                }
                              ]
                            },
                            {
                              question: 'Número del documento',
                              wordToReplace: '3_1_opA_1_opB_4',
                              identifier: '3_1_opA_1_opB_4',
                              type: 'iText',
                              replacement: '',
                            },
                            {
                              question: 'Nombre completo de la persona que firma este contrato en nombre y representación del vendedor:',
                              wordToReplace: '3_1_opA_1_opB_5',
                              identifier: '3_1_opA_1_opB_5',
                              type: 'iText',
                              replacement: '',
                            },
                            {
                              type: 'iRadioB',
                              question: 'Documento de identificación personal de la persona que firma este contrato en nombre y representación del vendedor:',
                              identifier: '3_1_opA_1_opB_6',
                              wordToReplace: '3_1_opA_1_opB_6',
                              indications: 'Marque la opción Persona ...',
                              replacement: '',
                              radios: [
                                {
                                  label: 'DNI',
                                  replacementOriginal: 'DNI',
                                  replacement: '',
                                  radioId: '3_1_opA_1_opB_6_opA',
                                  identifier: '3_1_opA_1_opB_6_opA',
                                  extraReplacements: [],
                                  checked: true,
                                },
                                {
                                  label: 'NIE',
                                  replacementOriginal: 'NIE',
                                  replacement: '',
                                  radioId: '3_1_opA_1_opB_6_opB',
                                  identifier: '3_1_opA_1_opB_6_opB',
                                  extraReplacements: [],
                                  checked: false,
                                },
                                {
                                  label: 'Pasaporte',
                                  replacementOriginal: 'Pasaporte',
                                  replacement: '',
                                  radioId: '3_1_opA_1_opB_6_opC',
                                  identifier: '3_1_opA_1_opB_6_opC',
                                  extraReplacements: [],
                                  checked: false,
                                }
                              ]
                            },
                            {
                              question: 'Número del documento de identificación personal seleccionado:',
                              wordToReplace: '3_1_opA_1_opB_7',
                              identifier: '3_1_opA_1_opB_7',
                              type: 'iText',
                              replacement: '',
                            },
                            {
                              question: 'Calidad o concepto en el que esta persona firma este contrato en nombre y representación del vendedor:',
                              wordToReplace: '3_1_opA_1_opB_8',
                              identifier: '3_1_opA_1_opB_8',
                              type: 'iText',
                              replacement: '',
                            },
                          ]
                        },
                      ],
                  },
              ]
              },
              {
                label: 'Persona jurídica',
                // tslint:disable-next-line:max-line-length
                replacementOriginal: '3_1_opB_5, mayor de edad, con domicilio en 3_1_opB_6, con 3_1_opB_7 número 3_1_opB_8, en nombre y representación de: 3_1_opB_1, con N.I.F número 3_1_opB_2, e inscrita en: 3_1_opB_3 con la siguiente información: 3_1_opB_4.',
                replacement: '3_1_opB_5, mayor de edad, con domicilio en 3_1_opB_6, con 3_1_opB_7 número 3_1_opB_8, en nombre y representación de: 3_1_opB_1, con N.I.F número 3_1_opB_2, e inscrita en: 3_1_opB_3 con la siguiente información: 3_1_opB_4.',
                extraReplacements: [],
                radioId: 'persona-juridica',
                identifier: 'persona-juridica',
                checked: false,
                subSteps: [
                  {
                    question: 'Nombre completo de la persona jurídica que desea vender el vehículo:',
                    wordToReplace: '3_1_opB_1',
                    identifier: '3_1_opB_1',
                    type: 'iText',
                    replacement: '',
                  },
                  {
                    question: 'Número de Identificación Fiscal o NIF completo de la persona jurídica que desea vender el vehículo:',
                    wordToReplace: '3_1_opB_2',
                    identifier: '3_1_opB_2',
                    type: 'iText',
                    replacement: '',
                  },
                  {
                    question: 'Indique el tipo de registro y lugar donde está inscrita la persona jurídica que desea vender el vehículo:',
                    wordToReplace: '3_1_opB_3',
                    identifier: '3_1_opB_3',
                    type: 'iText',
                    replacement: '',
                  },
                  {
                    question: 'Datos registrales completos de la persona jurídica que desea vender el vehículo:',
                    wordToReplace: '3_1_opB_4',
                    identifier: '3_1_opB_4',
                    type: 'iText',
                    replacement: '',
                  },
                  {
                    question: 'Nombre completo del representante persona física de la persona jurídica que desea vender el vehículo:',
                    wordToReplace: '3_1_opB_5',
                    identifier: '3_1_opB_5',
                    type: 'iText',
                    replacement: '',
                  },
                  {
                    question: 'Domicilio completo del representante persona física de la persona jurídica que desea vender el vehículo:',
                    wordToReplace: '3_1_opB_6',
                    identifier: '3_1_opB_6',
                    type: 'iText',
                    replacement: '',
                  },
                  {
                    type: 'iRadioB',
                    question: 'Documento de identidad del representante persona física de la persona jurídica que desea vender el vehículo:',
                    identifier: '3_1_opB_7',
                    wordToReplace: '3_1_opB_7',
                    indications: 'Marque la opción Persona ...',
                    replacement: '',
                    radios: [
                      {
                        label: 'DNI',
                        replacementOriginal: 'DNI',
                        replacement: '',
                        radioId: '3_1_opB_7_opA',
                        identifier: '3_1_opB_7_opA',
                        extraReplacements: [],
                        checked: true,
                      },
                      {
                        label: 'NIE',
                        replacementOriginal: 'NIE',
                        replacement: '',
                        radioId: '3_1_opB_7_opB',
                        identifier: '3_1_opB_7_opB',
                        extraReplacements: [],
                        checked: false,
                      },
                      {
                        label: 'Pasaporte',
                        replacementOriginal: 'Pasaporte',
                        replacement: '',
                        radioId: '3_1_opB_7_opC',
                        identifier: '3_1_opB_7_opC',
                        extraReplacements: [],
                        checked: false,
                      }
                    ]
                  },
                  {
                    question: 'Número del documento de identificación personal seleccionado:',
                    wordToReplace: '3_1_opB_8',
                    identifier: '3_1_opB_8',
                    type: 'iText',
                    replacement: '',
                  },
                ]
              },
            ],
          },
        ]
      }
      // {}
    ]
  },
  {
    type: 'iRadioC',
    subType: 'select',
    question: 'Tipo de vehículo que se desea vender mediante este contrato:',
    identifier: 'id5',
    wordToReplace: 'id5',
    indications: 'Marque la opción Persona ...',
    defaultRadioId: 'id5_opA',
    replacement: '',
    extraReplacements: [
    ],
    radios: [
      {
        label: 'ciclomotor (vehículo con dos ruedas, con pedales y que cuenta con un pequeño motor)',
        radioId: 'id5_opA',
        identifier: 'id5_opA',
        replacementOriginal: '• Tipo de Vehículo automóvil: ciclomotor',
        replacement: '• Tipo de Vehículo automóvil: ciclomotor',
        extraReplacements: [],
        checked: true,
        subSteps: []
      },
      {
        label: 'motocicleta o moto (vehículo de dos ruedas con motor)',
        // tslint:disable-next-line:max-line-length
        replacementOriginal: 'id5_opB_1',
        replacement: 'id5_opB_1',
        extraReplacements: [],
        radioId: 'id5_opB',
        identifier: 'id5_opB',
        checked: false,
        subSteps: [
          {
            type: 'iRadioC',
            subType: 'select',
            question: 'Tipo de motocicleta que se desea vender mediante este contrato:',
            identifier: 'id5_opB_1',
            wordToReplace: 'id5_opB_1',
            indications: 'Marque la opción Persona ...',
            defaultRadioId: 'id5_opA',
            replacement: '',
            extraReplacements: [
            ],
            radios: [
              {
                label: 'scooter (motocicleta urbana de pequeña cilindrada)',
                radioId: 'id5_opA_1_opA',
                identifier: 'id5_opA_1_opA',
                replacementOriginal: '• Tipo de Vehículo automóvil: motocicleta scooter',
                replacement: 'Tipo de Vehículo automóvil: motocicleta scooter',
                extraReplacements: [],
                checked: true,
                subSteps: []
              },
              {
                label: 'motocross (motocicleta de campo)',
                replacementOriginal: '• Tipo de Vehículo automóvil: motocicleta de motocross',
                replacement: 'motocross (motocicleta de campo)',
                extraReplacements: [],
                radioId: 'id5_opA_1_opB',
                identifier: 'id5_opA_1_opB',
                checked: false,
                subSteps: []
              },
              {
                label: 'motocicleta eléctrica (motocicleta con motor eléctrico)',
                replacementOriginal: '•	Tipo de Vehículo automóvil: motocicleta eléctrica',
                replacement: '•	Tipo de Vehículo automóvil: motocicleta eléctrica',
                extraReplacements: [],
                radioId: 'id5_opA_1_opC',
                identifier: 'id5_opA_1_opC',
                checked: false,
                subSteps: []
              },
              {
                label: 'motocicleta deportiva o superbike',
                replacementOriginal: '•	Tipo de Vehículo automóvil: motocicleta deportiva',
                replacement: '•	Tipo de Vehículo automóvil: motocicleta deportiva',
                extraReplacements: [],
                radioId: 'id5_opA_1_opD',
                identifier: 'id5_opA_1_opD',
                checked: false,
                subSteps: []
              },
              {
                label: 'motocicleta naked (motocicleta con motor al descubierto)',
                replacementOriginal: '•	Tipo de Vehículo automóvil: motocicleta naked',
                replacement: '•	Tipo de Vehículo automóvil: motocicleta naked',
                extraReplacements: [],
                radioId: 'id5_opA_1_opE',
                identifier: 'id5_opA_1_opE',
                checked: false,
                subSteps: []
              },
              {
                label: 'motocicleta gran turismo (motocicleta de carretera)',
                replacementOriginal: '•	Tipo de Vehículo automóvil: motocicleta gran turismo',
                replacement: '•	Tipo de Vehículo automóvil: motocicleta gran turismo',
                extraReplacements: [],
                radioId: 'id5_opA_1_opF',
                identifier: 'id5_opA_1_opF',
                checked: false,
                subSteps: []
              },
              {
                label: 'otro tipo de motocicleta',
                replacementOriginal: '•	Tipo de Vehículo automóvil: motocicleta tipo id5_opA_1_opG_1',
                replacement: '•	Tipo de Vehículo automóvil: motocicleta tipo id5_opA_1_opG_1',
                extraReplacements: [],
                radioId: 'id5_opA_1_opG',
                identifier: 'id5_opA_1_opG',
                checked: false,
                subSteps: [
                  {
                    question: 'Tipo de motocicleta que se desea vender mediante este contrato:',
                    placeholder: 'moto tral, enduro',
                    wordToReplace: 'id5_opA_1_opG_1',
                    identifier: 'id5_opA_1_opG_1',
                    type: 'iText',
                    replacement: '',
                  },
                ]
              },
            ],
          },
        ]
      },
      {
        label: 'motocarro (vehículo de tres ruedas dotado de plataforma para el transporte de mercancías)',
        radioId: 'id5_opC',
        identifier: 'id5_opC',
        replacementOriginal: '• Tipo de Vehículo automóvil: motocarro',
        replacement: '• Tipo de Vehículo automóvil: motocarro',
        extraReplacements: [],
        checked: true,
        subSteps: []
      },
      {
        label: 'turismo o coche (vehículo que permite el transporte de hasta 9 personas)',
        // tslint:disable-next-line:max-line-length
        replacementOriginal: 'id5_opD_1',
        replacement: 'id5_opD_1',
        extraReplacements: [],
        radioId: 'id5_opD',
        identifier: 'id5_opD',
        checked: false,
        subSteps: [
          {
            type: 'iRadioC',
            subType: 'select',
            question: 'Tipo de vehículo que se desea vender mediante este contrato:',
            identifier: 'id5_opD_1',
            wordToReplace: 'id5_opD_1',
            indications: 'Marque la opción Persona ...',
            defaultRadioId: 'id5_opA',
            replacement: '',
            extraReplacements: [
            ],
            radios: [
              {
                label: 'monovolumen (vehículo amplio con 5 plazas o más)',
                radioId: 'id5_opD_1_opA',
                identifier: 'id5_opD_1_opA',
                replacementOriginal: '•	Tipo de Vehículo automóvil: coche monovolumen',
                replacement: '•	Tipo de Vehículo automóvil: coche monovolumen',
                extraReplacements: [],
                checked: true,
                subSteps: []
              },
              {
                label: 'berlina (coche de 4 o más plazas con luna trasera fija)',
                replacementOriginal: '•	Tipo de Vehículo automóvil: coche berlina',
                replacement: '•	Tipo de Vehículo automóvil: coche berlina',
                extraReplacements: [],
                radioId: 'id5_opD_1_opB',
                identifier: 'id5_opD_1_opB',
                checked: false,
                subSteps: []
              },
              {
                label: 'cupé (coche con forma de berlina pero que cuenta con tres puertas)',
                replacementOriginal: '•	Tipo de Vehículo automóvil: coche cupé',
                replacement: '•	Tipo de Vehículo automóvil: coche cupé',
                extraReplacements: [],
                radioId: 'id5_opD_1_opC',
                identifier: 'id5_opD_1_opC',
                checked: false,
                subSteps: []
              },
              {
                label: 'descapotable (coche con techo plegable o capota)',
                replacementOriginal: '•	Tipo de Vehículo automóvil: coche descapotable',
                replacement: '•	Tipo de Vehículo automóvil: coche descapotable',
                extraReplacements: [],
                radioId: 'id5_opD_1_opD',
                identifier: 'id5_opD_1_opD',
                checked: false,
                subSteps: []
              },
              {
                label: 'todoterreno (vehículo adaptado para su uso en terrenos agrarios)',
                replacementOriginal: '•	Tipo de Vehículo automóvil: coche todoterreno',
                replacement: '•	Tipo de Vehículo automóvil: coche todoterreno',
                extraReplacements: [],
                radioId: 'id5_opD_1_opE',
                identifier: 'id5_opD_1_opE',
                checked: false,
                subSteps: []
              },
              {
                label: 'otro tipo de turismo',
                replacementOriginal: '•	Tipo de Vehículo automóvil: coche tipo id5_opD_1_opF_1',
                replacement: '•	Tipo de Vehículo automóvil: coche tipo id5_opD_1_opF_1',
                extraReplacements: [],
                radioId: 'id5_opD_1_opF',
                identifier: 'id5_opD_1_opF',
                checked: false,
                subSteps: [
                  {
                    question: 'Tipo de turismo o coche que se desea vender mediante este contrato:',
                    placeholder: 'suv, familiar, de competeción',
                    wordToReplace: 'id5_opD_1_opF_1',
                    identifier: 'id5_opD_1_opF_1',
                    type: 'iText',
                    replacement: '',
                  },
                ]
              },
            ],
          },
        ]
      },
      {
        label: 'furgón o furgoneta (vehículo que permite el transporte de mercancías hasta 3.500 kilos)',
        radioId: 'id5_opE',
        identifier: 'id5_opE',
        replacementOriginal: '• Tipo de Vehículo automóvil: furgoneta',
        replacement: '• Tipo de Vehículo automóvil: furgoneta',
        extraReplacements: [],
        checked: true,
        subSteps: []
      },
      {
        label: 'camión (vehículo que permite el transporte de mercancías de más de 3.500 kilos)',
        radioId: 'id5_opF',
        identifier: 'id5_opF',
        replacementOriginal: '• Tipo de Vehículo automóvil: camión',
        replacement: '• Tipo de Vehículo automóvil: camión',
        extraReplacements: [],
        checked: true,
        subSteps: []
      },
      {
        label: 'autobús o autocar (vehículo que permite el transporte de más de 9 personas)',
        radioId: 'id5_opG',
        identifier: 'id5_opG',
        replacementOriginal: '• Tipo de Vehículo automóvil: camión',
        replacement: '• Tipo de Vehículo automóvil: camión',
        extraReplacements: [],
        checked: true,
        subSteps: []
      },
      {
        label: 'otro vehículo',
        radioId: 'id5_opH',
        identifier: 'id5_opH',
        replacementOriginal: '• Tipo de Vehículo automóvil: id5_opH_1',
        replacement: '• Tipo de Vehículo automóvil: id5_opH_1',
        extraReplacements: [],
        checked: true,
        subSteps: [
          {
            question: 'Tipo de vehículo que se desea vender mediante este contrato distinto a los indicados en la pregunta anterior:',
            placeholder: 'autocaravana, quad',
            wordToReplace: 'id5_opH_1',
            identifier: 'id5_opH_1',
            type: 'iText',
            replacement: '',
          }
        ]
      }
    ],
  },
  {
      type: 'end',
      identifier: 'end',
      wordToReplace: 'end',
      title: 'Contrato de alquiler',
      description: `El contrato de alquiler es el documento que regula la cesión y el uso de
      inmueble y los derechos y obligaciones de arrendador (el propietario) y arrendatario (inquilino).`,
      checkoutProcess: {
        isInited: false,
        phase: 0
      }
  }
];
