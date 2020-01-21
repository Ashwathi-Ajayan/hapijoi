export interface ICalculator{
    add(num:number,...num2:number[]): number;
    subtract(num:number,...num2:number[]): number;
    multiply(num:number,...num2:number[]): number;
    divide(firstNumber?: number, secondNumber?: number): number;
}