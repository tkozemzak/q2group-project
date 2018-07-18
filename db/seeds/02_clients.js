
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('clients').del()
    .then(function () {
      // Inserts seed entries
      return knex('clients').insert([
        {name: 'Donnie Zimmerman', age: '16', level: 'beginner', email: 'donnie@donnie.donnie', password: 'ilike4runners', creditcardnumber: '023948', cvv: '343', expiration: '6/1/22'},

        {name: 'Tyler Yazzie', age: '25', level: 'athlete', email: 'tyler@tyler.tyler', password: 'skatelyfe', creditcardnumber: '987838', cvv: '877', expiration: '1/12/21'},

        {name: 'Tim Kozemzak', age: '23', level: 'intermediate', email: 'tim@tim.tim', password: 'washingtonboy', creditcardnumber: '333444', cvv: '655', expiration: '5/16/23'}
      ]);
    });
};
