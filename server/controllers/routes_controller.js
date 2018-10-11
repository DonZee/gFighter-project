const knex = require("../db/knex.js");

module.exports = {
  // CHANGE ME TO AN ACTUAL FUNCTION
  getAll: (req, res) =>{
    knex("fighter").then((results)=> res.send(results))
  },
  getFighter: (req,res) => {
    knex('fighter').where('id', req.params.id)
    .then((results) => res.send(results))
  },
  addData: (req,res) => {
    knex('fighter').insert({
      "name": req.body.name,
      "bio": req.body.bio,
      "style": req.body.style,
      "img": req.body.img,
      "strength": req.body.strength
    }, '*').then((result) => {
      res.send(result);
    })
  },
  update: (req,res) => {
    knex('fighter').update({
      "name": req.body.name,
      "bio": req.body.bio,
      "style": req.body.style,
      "img": req.body.img,
      "strength": req.body.strength
    }, '*').where('id', req.params.id).then((result) => {
      res.send(result);
    })
  },
  delete: (req,res) => {
    knex('fighter').where('id', req.params.id).del()
    .returning('*')
    .then((result) => res.send(result))
  }
}
