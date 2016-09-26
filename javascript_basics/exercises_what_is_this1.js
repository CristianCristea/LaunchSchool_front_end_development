// What will this point to in the code below?


// 1.

function whatIsMyContext() {
  return this;
}

// the context of a function is determnined when the function is called, here the function is only declared.


// 2.

function whatIsMyContext() {
  return this;
}

whatIsMyContext();

// this will point to the window object because the function is called with the implicit global object context.

// 3.

function foo() {
  function bar() {
    function baz() {
      console.log(this);
    }
    baz();
  }
  bar();
}

foo();

// this will point again to the window object

// 4.

var obj = {
  count: 2,
  method: function() {
    return this.count;
  }
};

obj.method();

// this will point to the obj object because it is attached to the obj

// 5.

function foo() {
  console.log(this.a);
}

var a = 2;
foo();

// The function will return 2 because the function is called with the implicit window context binding this to window. 
// var a = 2; defines a property a with the value 2 on the window property

// 6. What will the program log out?

var a = 1;

function bar() {
  console.log(this.a);
}

var obj = {
  a: 2,
  foo: bar
};

obj.foo();

// 2 - because foo is called with its context set to obj, foo points to bar - will invoke the bar function with the obj context. 


// 7. What will the following code log out?

foo = {
  a: 1,
  bar: function() {
    console.log(this.baz());
  },
  baz: function() {
    return this;
  }
};

foo.bar(); // => foo
var qux = foo.bar; 
qux(); // => TypeError: this.baz is not a function

