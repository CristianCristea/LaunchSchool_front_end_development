// 1.
// create a var named me that will have an object with two properties, fistname and lastname

var me = {
  firstName: "Jane",
  lastName: "Doe"
};

// 1a. 
// equivalent

// var me = {};
// me.fistName = "Jane";
// me.lastName = "Doe";


// 2.
// create a function that will output our full name formatted with a space in between and log the name.

function fullName(person) {
  console.log(person.firstName + " " + person.lastName);
}

// the function will take any object with firstName and lastName properties

// 3.
// create a friend, mother and father objects with the same two properties

var friend = {
  firstName: "John",
  lastName: "Smith"
};

var mother = {
  firstName: "Amber",
  lastName: "Doe"
};

var father = {
  firstName: "Shane",
  lastName: "Doe"
};

// 4. Create an array to hold the references to the created objects

var people = [];

// 4a. Add the people one by one to the array - using push method

people.push(me);
people.push(friend);
people.push(mother);
people.push(father);

// check the length of the people array

console.log(people.length);


// 5. create a function that will iterate over our people array and output their full name useing the fullName function named rollCall

function rollCall(arr) {
  for ( var i=0; i<arr.length; i++) {
    fullName(arr[i]);
  }
}

// for a slight performance increase you can store the arr.length in a var rather then accessing the length property each iteration

function rollCall(arr) {
  for ( var i = 0, length = arr.length; i < length; i++) {
    fullName(arr[i]);
  }
}

// a more convenient way to iterate over an array is the array prototype method forEach(takes an callback function as an argument)

function rollCall(arr) {
  arr.forEach(function(item) {
    fullName(item);
  });
}

// forEach method expets a function - and that function will receive the current value in the array as the first argument - so there is no need for creating an anonymous callback function


function rollCall(arr) {
  arr.forEach(fullName);
}


// 6. refactor with a people object

var people = {
  collection: [me, friend, mother, father],
  fullName: function(person) {
    console.log(person.firstName + " " + person.lastName);
  },
  rollCall: function() {
    this.collection.forEach(this.fullName);
  }
};

// 7. create two methods to add and remove a person object from collection

  // add - argument a person object 
  people.add = function(person) {
    this.collection.push(person);
  };

  // remove - arguments a person object
  // 1. search through the collection and find the matching person - using the fistName and lastName properties 
  // 2. obtain its index
  // 3. use the index to split the collection into two parts
  // one part - everything before that position as a new array
  // second part - everything after that position
  // 4. concatenate the two array back into one 
  // 5. reassign the new array to the collection array 

  people.remove = function(person) {
    var index = this.getIndex(person);
    console.log(index);
  };

  // 2 - needs an person object as an argument
  people.getIndex = function(person) {
    return this.collection.indexOf(person);
  };
  // 2a
  // iterate through the collection
  // get the index of the person that matches the firstName and lastName properties of the supplied person object
  // initially set the index to -1, if no person is found will return -1(simulate the indexOf method)
  
  people.getIndex = function(person) {
    var index = -1;
    this.collection.forEach(function(comparator, i) {
        if (comparator.firstName === person.firstName && comparator.lastName === person.lastName) {
          index = i;
        }
    });
    return index;
  };

  // use the remove method - now will just return the index of the person
  people.remove({firstName: "John", lastName: "Doe"});

  // 3. split the collection

  people.remove = function(person) {
    var index = this.getIndex(person),
        leftSide,
        rightSide;

    if (index === -1) { return; }
    console.log(index);

    // slice the collection into two parts
    // leftSide first elem to the index
    // rightSide index +1 and no end position - will get everything after the index
    // the matching elem will not be in any array
    leftSide = this.collection.slice(0, index);
    rightSide= this.collection.slice(index + 1);

    // 4. concatenate the array
    // 5. assign the new array to the collection array
    this.collection = leftSide.concat(rightSide);
  }; 



// test the method

console.log(people.getIndex(friend));
people.remove(friend);
console.log(people.getIndex(friend));

// 8. Create a method that will first check for the first and last name properties( valid object) and if they are strigs.

people.isValidPerson = function(person) {
  return typeof person.firstName === "string" && 
         typeof person.lastName === "string";
};

// 9. Refactor remove method
// the ! in front of isValidPerson will conver the returned value to the boolean opposite(if false it is turned to true and remove method is exited)

people.remove = function(person) {
  if (!this.isValidPerson(person)) { return; }

  var index = this.getIndex(person),
      leftSide,
      rightSide;

  if (index === -1) { return; }

  leftSide = this.collection.slice(0, index);
  rightSide= this.collection.slice(index + 1);

  this.collection = leftSide.concat(rightSide);
}; 

// 10.
// Because isValidPerson seems confusing change it to isInvalidPerson

people.isInvalidPerson = function(person) {
return typeof person.firstName !== "string" || 
       typeof person.lastName !== "string";
};

// refactor add and remove methods to check for invalid persons

people.add = function(person) {
  if (this.isInvalidPerson(person)) { return; }
  this.collection.push(person);
};

people.remove = function(person) {
  if (this.isInvalidPerson(person)) { return; }

  var index = this.getIndex(person),
      leftSide,
      rightSide;

  if (index === -1) { return; }

  leftSide = this.collection.slice(0, index);
  rightSide= this.collection.slice(index + 1);

  this.collection = leftSide.concat(rightSide);
}; 

// 11.
// Create a get method to look up and return a person

// use the getIndex and return the person from collection based on the index

people.get = function(person) {
  if (this.isInvalidPerson(person)) { return; }
  return this.collection[this.getIndex(person)];
};


// 12.
// Create an update method

people.update = function(person) {
  if (this.isInvalidPerson(person)) { return; }
  var existingPersonId = this.getIndex(person);

  if (existingPersonId === -1) { this.add(person); }
  else { this.collection[existingPersonId] = person; }
};


// all the code 
var me = {
  firstName: "Jane",
  lastName: "Doe"
};

var friend = {
  firstName: "John",
  lastName: "Smith"
};

var mother = {
  firstName: "Amber",
  lastName: "Doe"
};

var father = {
  firstName: "Shane",
  lastName: "Doe"
};

var people = {
  collection: [me, friend, mother, father],
  fullName: function(person) {
    console.log(person.firstName + " " + person.lastName);
  },
  rollCall: function() {
    this.collection.forEach(this.fullName);
  },
  getIndex: function(person) {
    var index = -1;
    this.collection.forEach(function(comparator, i) {
        if (comparator.firstName === person.firstName && comparator.lastName === person.lastName) {
          index = i;
        }
    });
    return index;
  },
   isInvalidPerson: function(person) {
    return typeof person.firstName !== "string" || typeof person.lastName !== "string";
  },
  add: function(person) {
    if (this.isInvalidPerson(person)) { return; }
    this.collection.push(person);
  },

  remove: function(person) {
    if (this.isInvalidPerson(person)) { return; }

    var index = this.getIndex(person),
        leftSide,
        rightSide;

    if (index === -1) { return; }

    leftSide = this.collection.slice(0, index);
    rightSide= this.collection.slice(index + 1);

    this.collection = leftSide.concat(rightSide);
  },
  get: function(person) {
    if (this.isInvalidPerson(person)) { return; }
    return this.collection[this.getIndex(person)];
  },
  update: function(person) {
    if (this.isInvalidPerson(person)) { return; }
    var existingPersonId = this.getIndex(person);

    if (existingPersonId === -1) { this.add(person); }
    else { this.collection[existingPersonId] = person; }
  }
};
