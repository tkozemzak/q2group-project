
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('classes').del()
    .then(function () {
      // Inserts seed entries
      return knex('classes').insert([
        {date: '8/1/18', start_time: '6:00am', duration: '1hr', level: 'intermediate'},
        {date: '8/1/18', start_time: '8:00am', duration: '1hr', level: 'beginner'},
        {date: '8/1/18', start_time: '10:00am', duration: '1hr', level: 'advanced'},

      ]);
    });
};
