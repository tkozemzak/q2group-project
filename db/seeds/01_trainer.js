
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('trainer').del()
    .then(function () {
      // Inserts seed entries
      return knex('trainer').insert([

        {name: 'Billy Joel', email: 'billy@billyjoel.com', password: 'billyboy', img_url: "https://static1.squarespace.com/static/534b1517e4b0b2883888bafe/t/55777e33e4b07cb18d9e3e5f/1433942663680/Personal-Trainer-in-Chicago.jpg?format=2500w"}
      ]);
    });
};
