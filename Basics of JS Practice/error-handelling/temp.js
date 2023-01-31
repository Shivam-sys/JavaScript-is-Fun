class User {
  constructor(name) {
    this.name = name;
  }

  changeName(newName) {
    this.name = newName;
    this.speak();
  }

  speak() {
    console.log(this.name);
  }
}

const user = new User("Brady");
changeName = user.changeName;
// !PROBLEM - context is lost
// changeName("Brian");

// solution 1
changeName.call(user, "Brian");

// solution2
boundChangeName = changeName.bind(user);
boundChangeName("Brian");
