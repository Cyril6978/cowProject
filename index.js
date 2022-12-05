const userInfo = require('./information');

let cowsay = require("cowsay");

console.log(cowsay.say({
    text : `Hello, i'm ${userInfo.name} From ${userInfo.campus}`,
    e : "oO",
    T : "U "
}));

