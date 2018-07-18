
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('appts').del()
    .then(function () {
      // Inserts seed entries
      return knex('appts').insert([
        {notes: 'I want to lose 40 pounds'},
        {notes: 'I want to bench 300'}
      ]);
    });
};
