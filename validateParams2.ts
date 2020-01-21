export class joii{
    Joi:any;
    schema:any;
    constructor(){
        this.Joi=require('joi');

        this.schema=this.Joi.object().keys({
            num1:this.Joi.string().min(1).max(10),
            num2:this.Joi.string().min(1).max(10)
        });
        
    }
}



/*export class joii{
    Joi:any;
    schema:any;
    constructor(){
        this.Joi=require('joi');
        this.schema = this.Joi.object({
            x: this.Joi.string()
        })
        function validate(x: any){
          return this.schema.validate(x).error === null;
        }
    }
}
let o=new joii();*/