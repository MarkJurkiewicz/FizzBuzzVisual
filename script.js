/**
 * Created by maj on 3/28/16.
 */
//Vanilla JavaScript exercise
//FizzBuzz Constructor function

function FizzBuzzer(min, max) {
  //Create empty child object, set minimum, set maximum
  this.flow = {};
  this.min = min;
  this.max = max;

  //Generates keys and values between min and max
  for (var i = min; i <= max; i++) {
    this.flow[i] = i;
  }
}

//Begin Prototype chain for fizzBuzzer

FizzBuzzer.prototype = {
  //Create the DOM element
  dom: document.createElement('p'),

  // method to replace value with Fizz (multiples of 3) (where increment modulus 3 equals 0)
  fizz: function() {
    for (var i = this.min; i <= this.max; i++) {
      if (i % 3 === 0 && !isNaN(this.flow[i])) {
        console.log('Fizz');
        console.log(this.flow[i]);
        this.flow[i] = 'Fizz';
      }
    }
    z.repeat();
  },

  // method to replace value with Buzz (multiples of 5) (where increment modulus 5 equals 0)
  buzz: function() {
    for (var i = this.min; i <= this.max; i++) {
      if (i % 5 === 0 && !isNaN(this.flow[i])) {
        console.log('Buzz');
        console.log(this.flow[i]);
        this.flow[i] = 'Buzz';
      }
    }
    z.repeat();
  },
  // method to replace value with FizzBuzz (multiples of 3 and 5 ) (where increment modulus 3 and 5 equals 0)
  fizzbuzz: function() {
    for (var i = this.min; i <= this.max; i++) {
      if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
        console.log(this.flow[i]);
        this.flow[i] = 'FizzBuzz';
      }
    }
    z.repeat();
  },
  //method to write out the list of key-value pairs

  repeat: function() {
    list.innerHTML = '';
    for (var i = this.min; i <= this.max; i++) {
      for (i in this.flow) {
        this.dom.className = 'dom';
        this.dom.innerHTML = '<span class="label">' + i + '</span> ' + this.flow[i];
        list.appendChild(this.dom.cloneNode(true));
      }
    }
  }
};


// instantiate fizzBuzzer Object with a range of 1 to 100

var z = new FizzBuzzer(1, 100);


//commented out event handlers (saved code and utilized onclick in HTML
////Button Event Handlers
//fizz.onclick = function() {
//  z.fizz();
//};
//buzz.onclick = function() {
//  z.buzz();
//};
//fizzbuzz.onclick = function() {
//  z.fizzbuzz();
//};
//repeat.onclick = function() {
//  z.repeat();
//};