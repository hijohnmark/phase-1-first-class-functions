function receivesAFunction(cb) {
    cb();
}

function returnsANamedFunction() {
    return function namedFunction() {
        console.log("Hello from your named function.")
    }
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log("Hello from your anonymous function.")
    }
}