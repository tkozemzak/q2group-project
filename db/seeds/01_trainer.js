exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('trainer').del()
    .then(function() {
      // Inserts seed entries
      return knex('trainer').insert([

        {
          name: 'Billy Joel',
          email: 'billy@billyjoel.com',
          password: 'billyboy',
          bio: 'Billy is an ex Navy Seal who has trained for years to keep his body in top physical shape. He has a degree in nutrition and utilizes his expertise in this area to help bring your body to the next level',
          img_url: "https://static1.squarespace.com/static/534b1517e4b0b2883888bafe/t/55777e33e4b07cb18d9e3e5f/1433942663680/Personal-Trainer-in-Chicago.jpg?format=2500w"
        }
      ]);
    });
};
