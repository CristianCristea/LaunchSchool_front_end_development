// 1.
// We're going to create a JavaScript object to keep track of our invoices for us. We'll add newly created invoices to an array that will be a property on the object named "unpaid". Start by creatin this invoices object and attaching an unpaid array property.

var invoices = {
  unpaid: []
};

// 2.
// To add new invoices to the unpaid invoices array, we'll create a method on our invoices object called "add". This method will take two arguments, a string for the client name and a number for the amount they owe. The method will create a new object with these two arguments as preoperties, the push that object onto the unpaid array. The object you'll end up creating will look like { name: "Starbucks", amount: 300 }. Be sure to reference the unpaid array within the add method using the this keyword.

// create a method "add" with 2 arguments, string and amount
// the method should create a new object with the arguments as properties
// push the object onto unpaid array

var invoices = {
  unpaid: [],
  add: function(name, amount) {
    var new_invoice = {};
    new_invoice.name = name;
    new_invoice.amount = amount;

    this.unpaid.push(new_invoice); 
  }
};

// 3. 

// Now that we have a way to store our unpaid invoices, we should have a way to obtain the total unpaid. Create a method on the invoices object named totalDue that will loop through the unpaid array and add up the amount property of each unpaid invoice. Return the total at the end of the method.

// create a method on invoices obj named totalDue
// totalDue will loop though the unpaid array and add up the amount prop
// return the total

invoices.totalDue = function() {
  var total_unpaid = 0,
  arr = this.unpaid;
  for (var i = 0; i < arr.length; i++) {
    total_unpaid += this.unpaid[i].amount;
  }
  return total_unpaid;
};


// 4. 

// Let's test out what we have built so far. Create three new unpaid invoices using this data:
// Name  Amount
// Due North Development   250
// Moonbeam Interactive  187.50
// Slough Digital  300

// Once you've added the invoices, call the totalDue method to log the total unpaid invoice amount. Your result should be 737.5

invoices.add("Due North Development", 250);
invoices.add("Moonbeam Interactive", 187.50);
invoices.add("Slough Digital", 300);
invoices.totalDue();

// 5.

// Now that we have a collection of invoices we will need to add a way to mark invoices as paid. Create a method called payInvoice that will take a client name as an argument. Add an array to a property on the invoices object named "paid" to hold the invoices. I your method, loop over the unpaid invoices and check the name of each invoice. When it doesn't match, store the invoice object in a new lcal array for the remaining unpaid invoices. Whed it does match, push the invoice object to the paid invoieces array. Once you're done with te loop, take the newly created array of remaining unpaid invoices and assign it to the unpaid invoices array in order to reweite the array.


// create a method payInvoice, argument client name
// create prop paid - array to hold the paid invoices
// loop over unpaid invoices
// check the name of each invoice - if doesn't match the client name - push elem in a new local array remaining_unpaid_invoices
// if does match - push into paid arrray
// after the loop rewrite the unpaid array with the remaining_unpaid_invoices array.

invoices.paid = [];
invoices.payInvoice = function(client) {
  var remaining_unpaid_invoices = [];

  for (var i = 0; i < this.unpaid.length; i++) {
    if (this.unpaid[i].name === client) {
      this.paid.push(this.unpaid[i]);
    } else {
      remaining_unpaid_invoices.push(this.unpaid[i]);
    }
  }

  this.unpaid = remaining_unpaid_invoices.slice(0);
};


// 6. 

// Create a method that will be functionally identical to the totalDue method named totalPaid that will return the total of the paid invoices.

invoices.totalPaid = function() {
   var total_paid = 0;

    for (var i = 0; i < this.paid.length; i++) {
      total_paid += this.paid[i].amount;
    }
    return total_paid;
};

// 7.

// Call tha payInvoice method twice, passing in "Due North Development" and "Slough Digital". Then call the totalPaid method and log the result. Your resul should be 550. Cal the totalDue method and log the result. Your result should be 187.50.

invoices.payInvoice("Due North Development");
invoices.payInvoice("Slough Digital");
invoices.totalPaid();
invoices.totalDue();



// 8. Extra

// payAll method

invoices.payAll = function() {
    for (var i = 0; i < this.unpaid.length; i++) {
      this.paid.push(this.unpaid[i]);
    }

    this.unpaid = [];
};

// reset invoices

invoices.reset = function() {
  this.unpaid = [];
  this.paid = [];
};