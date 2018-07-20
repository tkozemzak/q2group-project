exports.up = function(knex, Promise) {
  return knex.schema.createTable("classes", function(table) {
    table.increments();
    table.integer("trainer_id")
      .references("id")
      .inTable("trainer")
      .onDelete("CASCADE")
      .index();
    table.date("date");
    table.string("start_time")
    table.string("duration");
    table.string("level");
    table.string("description")
    table.timestamps(true, true);

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("classes")
};
