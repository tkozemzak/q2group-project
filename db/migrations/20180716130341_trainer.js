
exports.up = function(knex, Promise) {
  return knex.schema.createTable("trainer", function(table){
    table.increments();
    table.string("name");
    table.string("email");
    table.string("password");
    table.string("img_url")
    table.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("trainer")

};
