exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('interviewers_table')
    .del()
    .then(function() {
      // Inserts seed entries
      return knex('interviewers_table').insert([
        {
          user_id: 1,
          avatar_url: 'google.com',
          interviewer_experience_level: 1,
          interviewer_skill_level: 1,
          description:
            'Jayne worked as a singing teacher for 9 years and is now studying with Lambda School',
        },
        {
          user_id: 2,
          avatar_url: 'google.com',
          interviewer_experience_level: 1,
          interviewer_skill_level: 1,
        },
        {
          user_id: 3,
          avatar_url: 'google.com',
          interviewer_experience_level: 1,
          interviewer_skill_level: 1,
        },
      ]);
    });
};