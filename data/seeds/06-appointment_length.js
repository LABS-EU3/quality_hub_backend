exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('appointments')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('appointments').insert([
        {
          length: '30 Minutes',
        },
        {
          length: '1 Hour',
        },
      ]);
    });
};