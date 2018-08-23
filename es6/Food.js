class Food{
    constructor(id,name,ratePerUnit,image)
    {
        this.id=id;
        this._name=name;
        this.ratePerUnit=ratePerUnit;
        this.image=image;
    }

    get name(){
        return this._name.toUpperCase();
    }
    fun()
    {
        return this._name;
    }
    toString(){
        return '${this.name},${this.ratePerUnit}'
    }
}

module.exports = Food;