interface User{ usrName:string;email:string};

function showUser(user:User):boolean{
    let result:boolean = false;
    if(user.usrName === 'ramesh')
    {
        result = true;
    }
    return result;
}

const ram = {usrName:'ramesh',email:'Ram@gmail.com'}

console.log(showUser(ram));
console.log(showUser(ram));

