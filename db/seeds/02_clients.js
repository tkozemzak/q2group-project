exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('clients').del()
    .then(function() {
      // Inserts seed entries
      return knex('clients').insert([{
          name: 'Donnie Zimmerman',
          age: '16',
          level: 'beginner',
          goals: 'donnie goal',
          email: 'donnie@donnie.donnie',
          password: 'donnie',
          creditcardnumber: '023948',
          cvv: '343',
          expiration: '6/1/22'
        },

        {
          name: 'Tyler Yazzie',
          age: '25',
          level: 'athlete',
          goals: 'tyler goal',
          email: 'tyler@tyler.tyler',
          password: 'tyler',
          creditcardnumber: '987838',
          cvv: '877',
          expiration: '1/12/21'
        },

        {
          name: 'Tim Kozemzak',
          age: '23',
          level: 'intermediate',
          goals: 'tim goal',
          email: 'tim@tim.tim',
          password: 'tim',
          creditcardnumber: '333444',
          cvv: '655',
          expiration: '5/16/23'
        }
      ]);
    });
};
