import express from 'express';
import fs from 'fs';
import soap from 'soap';
import bodyParser from 'body-parser';

const app = express();
const port = 8001;

var myservice = {
    ws: {
        calc: {
            somar: function (args) {
                var n = 1*args.a + 1*args.b;
                return  {sumres: n}
            },
            
            multiplicador: function (args) {
                var n = 1*args.a * 1*args.b;
                return {mulres: n}
            }
        }
    }
}

const xml = fs.readFileSync('wscalc1.wsdl', 'utf8');

app.use(bodyParser.raw({type: function(){return true;}, limit: '5mb'}));

app.listen(port, () => {
    soap.listen(app, '/wscalc1', myservice, xml, function(){
        console.log(`SOAP Server listening on port: ${port}`);
    });
});
