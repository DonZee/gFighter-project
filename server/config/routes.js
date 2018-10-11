//Update the name of the controller below and rename the file.
const routes = require("../controllers/routes_controller.js")
module.exports = function(app){

  app.get('/fighters', routes.getAll);
  app.get('/fighters/:id', routes.getFighter);
  app.post('/fighters', routes.addData);
  app.put('/fighters/:id', routes.update);
  app.delete('/fighters/:id', routes.delete);

}
