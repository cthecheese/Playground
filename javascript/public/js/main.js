"use strict";

function GarbageCollection() {
  // Dealing with implicit garbage collection

  // Non garbage collected data
  {
    var processer = function processer(data) {
      data.forEach(function (point) {
        console.log(point);
      });
    }

    //var data = [1, 2, 3, 4];

    //processer(data);

    //console.log(data);
    ;
  }

  // Garbage collected
  {
    var processor = function processor(data) {
      data.forEach(function (point) {
        console.log(point * 2);
      });
    };

    {
      var _data = [5, 6, 7, 8];
      processor(_data);
    }

    /*
      Notice that it outputs [1,2,3,4]
      this is due to how the scoping works.
      Because the JS Engine can't find anything
      connected to the nearest scope (Due to
      let attaching to the nearest block-scope
      instead of the nearest function like var
      does), it keeps looking and eventually finds
      the variable data because it is connected to
      the global scope.
    */
    console.log(data);
  }
}

function thisTesting() {
  function foo(num) {
    console.log("Number: " + num);
    this.count++;
  }

  foo.count = 0;

  var i;

  for (i = 0; i < 10; i++) {
    if (i > 5) {
      foo.call(foo, i);
    }
  }

  console.log(foo.count);
}
function objectThisTesting() {
  /* Let's discuss why methods do not actually exist in
    javascript. The first thing we need to define is what
    a function is versus what a method is.
     In most languages, a method is a function that is
    apart of the object it is in. While a function is simply
    a function that can be invoked. The implications are
    very minute but they are extremely important to understand.
     So let's take a look at a typical "method" inside the
    foo object.
  */

  var foo = {
    a: 2,
    myMethod: function myMethod() {
      console.log(this.a);
    }
  };

  foo.myMethod(); // Returns 2 as we would assume

  /*
    At first glance, you would assume that myMethod is
    attached to foo, and therefore "this" will always refer
    to foo, but the only reason "this" is going to be attached
    to the foo object's a, is because it was implicitly bound.
     We can easily break this train of thought by explicitly
    binding another object...
  */

  var obj = {
    a: 4
  };

  foo.myMethod.apply(obj); // Returns 4

  /*
    You could, however get past this and make it seem as if
    the function is truly attached to an object..
  */

  var foo2 = {
    a: 6,
    myMethod: function myMethod() {
      console.log(foo2.a);
    }
  };

  foo2.myMethod(); //6
  foo2.myMethod.apply(obj); //6

  /*
    But this becomes very sloppy, as you are restricting
    the flexibility of your code..
  */

  var foo3 = {
    a: 7,
    myMethod: foo2.myMethod
  };

  foo3.myMethod(); //6

  /*
    It can be seen more clearly that a function is not
    bound by this by separating the function from the
    actual object itself..
  */

  function getName() {
    console.log("Hello! Inside getName!");
    console.log(this.personName);
  }

  var person = {
    personName: "Colby",
    name: getName()
  };

  person.name(); // Undefined!
}

function customArray() {
  var myCustomArray = {
    holder: {},
    push: function push(data) {
      if (Object.keys(this.holder).length == 0) {
        this.holder[0] = data;
      } else {
        this.holder[Object.keys(this.holder).length] = data;
      }
    },
    index: function index(i) {
      if (this.holder[i] == undefined) {
        throw new Error("Out of bounds index");
      } else {
        return this.holder[i];
      }
    }
  };

  myCustomArray.push("Test");
  console.log(myCustomArray.index(0));
  //console.log(myCustomArray.index(1));

  var myarray = [1];
  myarray[20] = "Hello!";
  console.log(myarray[20]);
  myarray.push("World!");
  console.log(myarray);
  console.log(myarray.length);
  console.log(myarray[19]);

  var mySecondArray = [1];
  mySecondArray.push();
  mySecondArray.push("Hello!");
  console.log(mySecondArray);
  console.log(mySecondArray.length);
}

function deletionTesting() {
  var obj = {
    a: 20
  };

  var obj2 = {
    a: obj.a
  };

  console.log(obj2.a); //20

  delete obj.a;

  console.log(obj2.a); //20
  console.log(obj.a); //undefined

  obj.a = 10;

  console.log(obj2.a); // 20
  console.log(obj.a); // 10
}

function littleTests() {
  // Invoking a [[get]] operation, expecting a ReferenceError
  // console.log("Hello: " + nonExistingVariable);

  // Invoking a [[get]] operation, expecting undefined
  var a = {};
  console.log("Hello: " + a.nonExistingProperty);
}

function prototypeChaining() {
  var myFirstObject = {
    a: 20
  };

  var mySecondObject = Object.create(myFirstObject);
  mySecondObject.b = 15;
  console.log('My Second Object A: ' + mySecondObject.a);

  var myThirdObject = Object.create(mySecondObject);
  console.log('My Third Object A: ' + myThirdObject.a);
  console.log('My Third Object B: ' + myThirdObject.b);

  for (var prop in myThirdObject) {
    console.log(myThirdObject[prop]);
  }

  function Foo() {
    this.a = 200;
    this.b = 500;
  }
  Foo.prototype.myValue = function () {
    return this.a;
  };

  function Bar() {
    this.b = 300;
  }

  Bar.prototype = Foo.prototype;

  var obj = new Foo();
  var obj2 = new Bar();

  console.log(obj.myValue()); // 200
  console.log(obj2.myValue()); // 200

  Bar.prototype.myValue = function () {
    return this.b;
  };

  console.log(obj2.myValue()); // 300
  console.log(obj.myValue()); // 500
}

function checkingToString() {
  function Foo(name) {
    // this.name = name
    // this.toString = function(){
    //   if(name)
    //     return this.name
    //   return "Colby"
    // }
  }

  var Bar = new Foo();

  console.log(Bar.toString());
}

function ooTesting() {
  function Foo(who) {
    this.me = who;
  }
  Foo.prototype.identify = function () {
    return "I am " + this.me;
  };

  function Bar(who) {
    Foo.call(this, who);
  }
  Bar.prototype = Object.create(Foo.prototype);

  Bar.prototype.speak = function () {
    alert("Hello, " + this.identify() + ".");
  };

  var b1 = new Bar("b1");
  var b2 = new Bar("b2");

  b1.speak();
  b2.speak();
}

ooTesting();