const restful = require('node-restful');
const mongoose = restful.mongoose;

const creditSchema = new mongoose.Schema({
  name: { type: String, required: [true, 'Informe o nome do Credito'] },
  value: { type: Number, min: 0, required: [true, 'Informe o valor do Credito'] }
});

const debtSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Informe o nome do Débito']},
    value: { type: Number, min: 0, required: [true, 'Informe o valor do Débito'] },
    status: { type: String, required: false, enum: ["PAGO", "PENDENTE", "AGENDADO"]},
});

const billingCycleSchema = new mongoose.Schema({
    name: { type: String, required: [true, 'Informe o nome do ciclo']},
    month: { type: Number, min: 1, max: 12, required: [true, 'Informe o valor do Mês']},
    year: { type: Number, required: [true, 'Informe o valor do ano']},
    credits: [creditSchema],
    debts: [debtSchema],
});

module.exports = restful.model('BillingCycle', billingCycleSchema);
