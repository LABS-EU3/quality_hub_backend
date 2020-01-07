exports.up = function(knex) {
  return knex.schema.createTable('appointments', table => {
    table.increments();
    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.string('appointment_datetime');
    table.boolean('canceled').defaultTo(false);
    table
      .integer('coach_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('coaches');
    table
      .integer('student_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('students');
    table
      .integer('topic_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('appointment_topics');
    table
      .integer('length_id')
      .notNullable()
      .unsigned()
      .references('id')
      .inTable('appointment_length');
    table
      .integer('feedback_id')
      .unsigned()
      .references('id')
      .inTable('appointment_feedback');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('appointments');
};