const isLogged = true;

function login(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      if (data) {
        resolve(Math.random());
      } else {
        reject(new Error("Not logged"));
      }
    }, 1000);
   
  });
}

function getUserData(userId) {
  return new Promise((resolve, reject) => {
    setTimeout(() =>{
      if (userId > 0.5) {
        resolve({ name: "John", age: 24 });
      } else {
        reject(new Error("No user data"));
      }
    }, 500)
    
  });
}

login(isLogged)
  .then(getUserData)
  .then((response) => console.log(response))
  .catch((err) => console.error(err))
  

