
exports.up = function(knex, Promise) {
  return knex.schema.createTable("clients", function(table){
    table.increments();
    table.string("name");
    table.integer("age");
    table.string("level");
    table.string("email");
    table.string("password");
    table.integer("creditcardnumber");
    table.integer("cvv");
    table.string("expiration");
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("clients")

};
