import calculator from './calculatorRoutes.js'

const routes = (app) => {

    app.use((_,res,next) => {
        res.header("Content-Type","application/json");
        res.header('X-Powered-By', 'Node.js');
        next()
    })
    
    app.get('/', (req, res) => {
        res.status(200).json({"message": "main route"});
      })

    app.use(calculator);

};

export default routes;