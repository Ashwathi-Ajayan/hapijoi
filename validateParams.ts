import {ImplCalculator} from './ImplCalculator';
import {joii} from './validateParams2';
let obj=new ImplCalculator();

const Hapi = require('hapi');
const Joi=require('joi');

const server = new Hapi.Server({
    port: 4000
}); 
server.route({
	method: 'GET', 
    path: '/add/{num1}/{num2}',
   /* config:{
        validate:{
            params:{
                num1:Joi.string().min(1).max(10),
                num2:Joi.string().min(1).max(10)
            }
        }
    },*/
	handler:function(req, res) {
        let x1=new joii();
        const resu=x1.Joi.validate({num1:'1',num2:'2'},x1.schema)
        resu.error===null;
		const x=parseInt(req.params.num1);
		const y=parseInt(req.params.num2);
        return obj.add(x,y);
       // return `${req.params.num1}+${req.params.num2}`
    }
});

server.start();
