
// 1.
// What will this point to in the code below?

var my_object = {
  count: 1,
  my_child_object: {
    myMethod: function() {
      return this.count;
    }
  }
};

my_object.my_child_object.myMethod();

// this will point to my_child_object, resulting that this.count is undefined

// 2. 
// In the previous example, how would we change the context, or the value of this, to be the parent my_object?

// use the call, apply, or bind function to set the context
my_object.my_child_object.myMethod.call(my_object);

// 3. 
// What will the following code log out?

var person = {
  first_name: "Peter",
  last_name: "Parker",
  fullName: function() {
    console.log(this.first_name + " " + this.last_name + " is the Amazing Spidermann!");
  }
};

var whoIsSpiderman = person.fullName.bind(person);
whoIsSpiderman();

// Peter Parker is the Amazing Spidermann!
// The bind method binds permanently the fullName() method to the person object.  

// 4.
// What will the following code log out?

var a = 1;

obj = {
  a: 2,
  func: function() {
    console.log(this.a);
  }
};

obj.func();           // => 2 context obj
obj.func.call();      // => 1 called with implicit context - global obj
obj.func.call(this);  // => 1 called with implicit context - global obj
obj.func(obj);        // => 2

var obj2 = {a: 3};

obj.func.call(obj2);  // => 3 context obj2


// 5.
// What will this code log out?

var a = 1;

function Foo() {
  this.a = 2;
  this.bar = function() {
    console.log(this.a);
  };
  this.bar();
}

var foo = new Foo();  // => create new foo object
foo.bar();            // => this points to foo object, 2 , 2(first 2 from calling the method, second form method called from within the constructor)
Foo();                // => 2

obj = {};             // => create new empty object
Foo.call(obj);        // => 2
obj.bar();            // => 2

console.log(this.a);  // => 2 context - global object


// 6. 
// What will the following code log out?

var computer = {
  price: 30000,
  shipping: 2000,
  total: function() {
    var tax = 3000;
    function specialDiscount() {
      if (this.price > 20000) {
        return 1000;
      } else {
        return 0;
      }
    }
    return this.price + this.shippping + this.tax - specialDiscount();
  },
};

console.log(computer.total());

// this.tax is NaN - is a var not a property
// the specialDiscount function's this is the global object since it's called with the implicit context and returns 0
// it is very common that when you invoke a method in´an object, and if there's a function inside the method it doesn't pick up the surrounding context for this.

// fix 1

var computer = {
  price: 30000,
  shipping: 2000,
  total: function() {
    var tax = 3000,
        self = this;
    function specialDiscount() {
      if (self.price > 20000) {
        return 1000;
      } else {
        return 0;
      }
    }
    return this.price + this.shipping + tax - specialDiscount();
  },
};

console.log(computer.total());

// fix 2

var computer = {
  price: 30000,
  shipping: 2000,
  total: function() {
    var tax = 3000;

    var specialDiscount = function() {
      if (this.price > 20000) {
        return 1000;
      } else {
        return 0;
      }
    }.bind(this);

    return this.price + this.shipping + tax - specialDiscount();
  },
};

console.log(computer.total());


// 7. 
// What will the following code log out?

var RECTANGLE = {
  area: function() {
    return this.width * this.height;
  },
  circumference: function() {
    return 2 * (this.width + this.height);
  }
};


function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area();
  this.circumference = RECTANGLE.circumference();
}

var rect1 = new Rectangle(2, 3);
console.log(rect1.area);
console.log(rect1.circumference);


// this in RECTANGLE.area and RECTANGLE.circumgerence ist set to the RECTANGLE obj will cause both function to return NaN

// fix 

var RECTANGLE = {
  area: function() {
    return this.width * this.height;
  },
  circumference: function() {
    return 2 * (this.width + this.height);
  }
};


function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.area = RECTANGLE.area.call(this);
  this.circumference = RECTANGLE.circumference.call(this);
}

var rect1 = new Rectangle(2, 3);
console.log(rect1.area);
console.log(rect1.circumference);
