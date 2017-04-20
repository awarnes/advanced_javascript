"use strict";

let a = {}
a.foo = 'hello'
a.myfunc = function(callback) {
    // b.myCallback
    callback(this.foo) // this is wherever it's being called from.
}

let b = {}
b.foo = "This is the variable from b"

b.myCallback = function(returnString) {
    console.log('here b.foo', this.foo) // there is nothing calling callback above, and so undefined without binding
    console.log(returnString);
}

const myBoundCallback = b.myCallback.bind(b)
a.myfunc(myBoundCallback)
