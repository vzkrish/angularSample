function addInfo(target:any){
    target.prototype.age =  45;
    console.log(target)
    return target;
}

@addInfo
class Example{
    private _name:string;

    constructor(name:string)
    {
        this._name = name;
    }
    toString():string{
        return this._name;
    }
}

const obj = new Example("ramesh")
console.log(obj.toString());
console.log(obj.age);