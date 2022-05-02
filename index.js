//Callback Function
function receivesAFunction(callback){
    return callback()
}


function returnsANamedFunction() {
    var fn = () => {}
    return fn
}

function returnsAnAnonymousFunction() {
    return () => {}
}