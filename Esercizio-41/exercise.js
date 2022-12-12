const user = {
  id: 1,
  name: "John",
  age: 25,
};

const userData = JSON.stringify(user);

//save it with local storage
localStorage.setItem('user', userData);

//(convert it back JSON)
let anotherUser = JSON.parse(localStorage.getItem('user'));

