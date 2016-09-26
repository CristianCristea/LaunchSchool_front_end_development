// We'll be working through an invoice processing program.
// Starting point: the following code that can process one invoice:

var invoice = { phone: 3000, internet: 6500 };
var payment = { phone: 1200, internet: 5500 };
var invoice_total = invoice.phone + invoice.internet;
var payment_total = payment.phone + payment.internet;
var remaining_due = invoice_total - payment_total;

console.log(payment_total); // 6800
console.log(remaining_due); // 2700


//1. Build a factory function for invoices
  // Requirments: 
  // it returns an invoice object with phone and internet properties and a total method
  // the default value for the phone service is 3000 and the internet sevice is 5500(in cents)
  // the function takes an object argument with the attributes to oberride the default values

  // your implemented function should ve able to work with the code below:

function createInvoice(services) {
  services = services || {};
  // implement the factory function here
  var invoice = {
    phone: services.phone || 3000,
    internet: services.internet || 5500,
  };
  invoice.total = function() {
    return invoice.phone + invoice.internet;
  };
  return invoice;
}

function invoiceTotal(invoices) {
  var total = 0;
  for (var i = 0; i < invoices.length; i++) {
    total += invoices[i].total();
  }
  return total;
}

var invoices = [];
invoices.push(createInvoice());
invoices.push(createInvoice({ internet: 6500 }));
invoices.push(createInvoice({ phone: 2000 }));
invoices.push(createInvoice({ phone: 1000, internet: 4500 }));

console.log(invoiceTotal(invoices)); //31000

// 2. Build a Factory Function for Payments
  // the function can take an object argument in one of the 3 forms:
    // payment for one service {internet: 1000}, {phone: 1000}
    // payment for both services {internet: 2000, phone: 1000}
    // payment with just an amount property {amount: 2000}
  // the function returns an object that has paid sevices, and a total method that returns the payment total. If the amount property is not present, this should return the sum of phone and internet services; if the amount property is present, just return the value of that property.

function createPayment(services) {
  // implement the factory function here
  var services = sevices || {};
  var payment = {
    phone: sevices.phone || 0,
    internet: services.internet || 0,
    amount: services.amount
  };

  payment.total = function() {
    return payment.amount || (payment.phone + payment.internet);
  };
  return payment;
}

function paymentTotal(payments) {
  var total = 0;
  for (var i = 0; i < payments.length; i++) {
    total += payments[i].total();
  }
  return total;
}

var payments = [];
payments.push(createPayment());
payments.push(createPayment({internet: 6500}));
payments.push(createPayment({phone: 2000}));
payments.push(createPayment({phone: 1000, internet: 4500}));
payments.push(createPayment({amount: 10000}));

console.log(paymentTotal(payments));      // 24000