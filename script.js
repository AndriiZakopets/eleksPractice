function hello() {
  this.asd = 4;
  console.log(this);
}

const Fun = function() {
  return this;
}

const Arr = () => {
  return this;
}

const person = {
  name: 'Vladimen',
  age: 25,
  sayHello: hello,
  helloF: function() {
    console.log(this);
  },
  helloA: () => {
    console.log(this);
  }
}

console.log(Fun());
console.log(Arr());