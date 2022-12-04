let sayHi = () => console.log("Hello");

function repeatHello(callback){
setInterval(callback, 1000);
}

repeatHello(sayHi);

