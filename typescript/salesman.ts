export class SalesMan{
    private _id :number;
    private _salesManName:string;
    private _mobileNumber:string;

    constructor(id:number,salesManName:string,mobileNum:string)
    {
        this._id=id;
        this._salesManName=salesManName;
        this._mobileNumber=mobileNum;
    }

    toString():string{
        return `${this._id},${this._salesManName},${this._mobileNumber}`;
    }

}