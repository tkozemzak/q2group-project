
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('trainer').del()
    .then(function () {
      // Inserts seed entries
      return knex('trainer').insert([

        {name: 'Billy Joel', email: 'billy@billyjoel.com', password: 'billyboy', img_url: "www.google.com"}
      ]);
    });
};
