
exports.up = function(knex, Promise) {
  return knex.schema.createTable("fighter",(table)=>{
    table.increments();
    table.string("name");
    table.string("bio");
    table.string("style");
    table.string("img");
    table.integer("strength");
    table.timestamps(true,true);
  })

};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("fighter");
};
