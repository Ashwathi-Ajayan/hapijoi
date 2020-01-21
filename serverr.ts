import {ImplCalculator} from './ImplCalculator';

let obj=new ImplCalculator();

const Hapi = require('hapi');
const Joi=require('joi');
const server = new Hapi.Server({
    port: 3000
}); 

server.route({
	method: 'GET', 
	path: '/add/{num1}/{num2}',
	handler:function(req, res) { 
		const x=parseInt(req.params.num1);
		const y=parseInt(req.params.num2);
		return obj.add(x,y);
	}
});

server.route({
	method: 'GET', 
	path: '/subtract/{num1}/{num2}',
	handler:function(req, res) { 
		const x=parseInt(req.params.num1);
		const y=parseInt(req.params.num2);
		return obj.subtract(x,y);	
	}
});

server.route({
	method: 'GET', 
	path: '/multiply/{num1}/{num2}',
	handler:function(req, res) { 
		const x=parseInt(req.params.num1);
		const y=parseInt(req.params.num2);
		return obj.multiply(x,y);	
	}
});

server.route({
	method: 'GET', 
	path: '/divide/{num1}/{num2}',
	handler:function(req, res) { 
		const x=parseInt(req.params.num1);
		const y=parseInt(req.params.num2);
		return obj.divide(x,y);	
	}
});

server.start();
console.log('Server started....\nhttp://localhost:' + server.info.port + '/');