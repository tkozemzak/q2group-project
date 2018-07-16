
exports.up = function(knex, Promise) {
  return knex.schema.createTable("appts", function(table){
    table.increments();
    table.integer("trainer_id")
      .references("id")
      .inTable("trainer")
      .onDelete("CASCADE")
      .index();
      table.integer("client_id")
        .references("id")
        .inTable("clients")
        .onDelete("CASCADE")
        .index();
    table.date("date");
    table.text("notes");
    table.string("price");
    table.string("payment_status");
    table.timestamps(true, true);

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("appts")
};
