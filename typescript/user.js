"use strict";
;
function showUser(user) {
    var result = false;
    if (user.usrName === 'ramesh') {
        result = true;
    }
    return result;
}
var ram = { usrName: 'ramesh', email: 'Ram@gmail.com' };
console.log(showUser(ram));
console.log(showUser(ram));
