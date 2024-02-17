let person = {
    firstName: "Pratiksha",
    age: 24,
    isMarried: true,
  };
  function greet(message, msg) {
    console.log(`Hello, ${message}, ${this.firstName}, ${msg}`);
  }

  greet.call(person, "Good Morning", "How are You");