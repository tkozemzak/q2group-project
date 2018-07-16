
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('clients').del()
    .then(function () {
      // Inserts seed entries
      return knex('clients').insert([
        {name: 'Donnie Zimmerman', age: '16', level: 'beginner', email: 'donnie@donnie.donnie', password: 'ilike4runners'},
        {name: 'Tyler Yazzie', age: '25', level: 'athlete', email: 'tyler@tyler.tyler', password: 'skatelyfe'},
        {name: 'Tim Kozemzak', age: '23', level: 'intermediate', email: 'tim@tim.tim', password: 'washingtonboy'}
      ]);
    });
};
