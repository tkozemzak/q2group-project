
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('classes').del()
    .then(function () {
      // Inserts seed entries
      return knex('classes').insert([
        {trainer_id: '1', date: '8/1/18', start_time: '6:00am', duration: '1hr', level: 'intermediate'},
        {trainer_id: '1', date: '8/1/18', start_time: '8:00am', duration: '1hr', level: 'beginner'},
        {trainer_id: '1', date: '8/1/18', start_time: '10:00am', duration: '1hr', level: 'advanced'},

      ]);
    });
};
