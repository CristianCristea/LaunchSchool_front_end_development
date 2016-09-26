// Factory pattern just returns object literals, and they’re very popular, especially when you just need to quickly get an object, without wanting to commit too much on setting up construction functions and prototypes (we cover those later in this lesson).

// Factory functions - Factory Object Creation Pattern - create objects based on a predefined template

// Disadvantages:
// every object created from with the factory has a full copy of all the methods, which can be redundant
// there isn't a way for us to inspect an object and know whether it's created from a factory function, this make it difficult to identify whether an object is of a specific "type"

function createPerson(first_name, last_name) {
  var person = {};
  person.first_name = first_name;
  person.last_name = last_name || "";
  person.fullName = function() {
    return (this.first_name + ' ' + this.last_name).trim();
  };
  return person;
}

var john = createPerson('John', 'Doe');
var jane = createPerson('Jane');

john.fullName(); // "John Doe"
jane.fullName(); // "Jane"