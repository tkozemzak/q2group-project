exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('classes').del()
    .then(function() {
      // Inserts seed entries
      return knex('classes').insert([{
          trainer_id: '1',
          date: '8/1/18',
          start_time: '6:00am',
          duration: '1hr',
          level: 'intermediate',
          description: 'cardio and jiu jitsu'
        },
        {
          trainer_id: '1',
          date: '8/1/18',
          start_time: '8:00am',
          duration: '1.25hr',
          level: 'beginner',
          description: 'intro to weight training'
        },
        {
          trainer_id: '1',
          date: '8/1/18',
          start_time: '10:00am',
          duration: '1hr',
          level: 'advanced',
          description: 'chin-up contest and high intensity spin class'
        },
        {
          trainer_id: '1',
          date: '8/1/18',
          start_time: '12:00pm',
          duration: '1hr',
          level: 'advanced',
          description: 'weight training'
        },
        {
          trainer_id: '1',
          date: '8/1/18',
          start_time: '3:00pm',
          duration: '1.5hr',
          level: 'beginner',
          description: 'intro to weight training'
        },

      ]);
    });
};
