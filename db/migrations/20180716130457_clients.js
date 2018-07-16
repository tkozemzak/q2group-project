
exports.up = function(knex, Promise) {
  return knex.schema.createTable("clients", function(table){
    table.increments();
    table.string("name");
    table.integer("age");
    table.string("level");
    table.string("email");
    table.string("password");
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("clients")

};
