import {ICalculator} from './ICalculator';
export class ImplCalculator implements ICalculator{
    constructor(){}
    
    public add(num:number, ...num2:number[]) {
        var result:number = 0;
        num2.forEach(element=>{
            result=result+element;
        });
        return result+num;
    }
    public subtract(num:number, ...num2:number[]) {
        var result:number = 0;
        num2.forEach(element=>{
            result=result-element;
        });
        return num+result;
    }
    public divide(num:number, num2:number) {
        return num/num2;
    }
    public multiply(num:number, ...num2:number[]) {
        var result:number = 1;
        num2.forEach(element=>{
            result=result*element;
        });
        return result*num;
    }
}
