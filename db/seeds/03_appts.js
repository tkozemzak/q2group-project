
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('appts').del()
    .then(function () {
      // Inserts seed entries
      return knex('appts').insert([
        {date: '8/1/18', notes: 'I want to lose 40 pounds', price: '75', payment_status: 'paid'},
        {date: '8/2/18', notes: 'I want to bench 300', price: '55', payment_status: 'paid'}
      ]);
    });
};
