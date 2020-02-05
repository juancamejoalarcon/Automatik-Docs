const uri = require('./uri');
const paidUri = require('./paidUri');
const imageUri = require('./imageUri');
const steps = require('./steps');
const information = require('./information');

const contrato_arrendamiento_habitacion = {
    id: 'contrato-arrendamiento-habitacion',
    title: 'Contrato de arrendamiento de habitación',
    topLabelTitle: 'Contrato de arrendamiento de habitación',
    amount: 20,
    image: imageUri,
    uri: uri,
    paidUri: paidUri,
    steps: steps,
    information: information
};

module.exports = contrato_arrendamiento_habitacion;