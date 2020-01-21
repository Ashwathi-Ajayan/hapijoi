import {ImplCalculator} from './ImplCalculator';
import {joii} from './validateParams2';

export class classerver{
    Hapi:any;
    server:any;

    constructor(){
        let obj=new ImplCalculator();

         this.Hapi = require('hapi');;
         this.server = new this.Hapi.Server({
            port: 3000
        }); 

        this.server.route({
	        method: 'GET', 
        	path: '/add/{num1}/{num2}',
        	handler:function(req, res) { 
                new joii();
	        	const x=parseInt(req.params.num1);
		        const y=parseInt(req.params.num2);
		        return obj.add(x,y);
	        }
        });

        this.server.route({
	    method: 'GET', 
	    path: '/subtract/{num1}/{num2}',
	    handler:function(req, res) { 
            new joii();
		    const x=parseInt(req.params.num1);
		    const y=parseInt(req.params.num2);
		    return obj.subtract(x,y);	
	        }
        });

        this.server.route({
        	method: 'GET', 
	        path: '/multiply/{num1}/{num2}',
	        handler:function(req, res) { 
                new joii();
		        const x=parseInt(req.params.num1);
		        const y=parseInt(req.params.num2);
		        return obj.multiply(x,y);	
	        }
        });

        this.server.route({
	        method: 'GET', 
	        path: '/divide/{num1}/{num2}',
	        handler:function(req, res) { 
                new joii();
	        	const x=parseInt(req.params.num1);
	        	const y=parseInt(req.params.num2);
	        	return obj.divide(x,y);	
	        }
        });

        this.server.start();
        console.log('Server started....\nhttp://localhost:' + this.server.info.port + '/');
    }
}
let cla=new classerver();