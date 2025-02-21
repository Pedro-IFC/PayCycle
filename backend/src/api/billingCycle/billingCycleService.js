const billingCycle = require('./billingCycle');

billingCycle.methods(['get', 'post', 'put', 'delete']);
billingCycle.updateOptions({new: true, runValidators: true});

module.exports = billingCycle;