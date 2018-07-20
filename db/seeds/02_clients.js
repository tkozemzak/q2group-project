exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('clients').del()
    .then(function() {
      // Inserts seed entries
      return knex('clients').insert([{
          name: 'Donnie Zimmerman',
          age: '30',
          level: 'beginner',
          goals: 'I want to look good for my wedding in April',
          email: 'donnie@gmail.com',
          password: 'donnie',
          creditcardnumber: '023948',
          cvv: '343',
          expiration: '6/1/22'
        },

        {
          name: 'Tyler Yazzie',
          age: '25',
          level: 'athlete',
          goals: 'I want to pack on mass and be able to bench 350 pounds',
          email: 'tyler@gmail.com',
          password: 'tyler',
          creditcardnumber: '987838',
          cvv: '877',
          expiration: '1/12/21'
        },

        {
          name: 'Tim Kozemzak',
          age: '23',
          level: 'intermediate',
          goals: 'My goal is to run a 5:30 mile',
          email: 'tim@gmail.com',
          password: 'tim',
          creditcardnumber: '333444',
          cvv: '655',
          expiration: '5/16/23'
        }
      ]);
    });
};
