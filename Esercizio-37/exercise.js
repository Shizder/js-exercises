
let ourPromise = new Promise((resolve, reject)=> {
    const number = 15;
    if(number > 10){
        resolve (number);
    }else{
        reject(number);
    }
}
);

ourPromise
.then((value)=> console.log(value))
.catch((err)=> console.log(err))
