function printName() {
    let helloName = 'Hello John';
    function inner() {
        const timer = setTimeout(() => {
            console.log(helloName)
        }, 1000);
        timer;
    }
    return inner();
}
printName();



