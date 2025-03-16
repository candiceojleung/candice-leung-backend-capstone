export async function seed(knex) {
  await knex("period_log_mental_conditions").del();

  return knex("period_log_mental_conditions").insert([
    // March 10 (heavy day with many conditions)
    { period_log_id: 1, mental_condition_id: 2 }, // irritable
    { period_log_id: 1, mental_condition_id: 3 }, // anxious
    { period_log_id: 1, mental_condition_id: 8 }, // mood swings
    { period_log_id: 1, mental_condition_id: 9 }, // stressed
    { period_log_id: 1, mental_condition_id: 10 }, // overwhelmed

    // March 11 (medium day with fewer conditions)
    { period_log_id: 2, mental_condition_id: 2 }, // irritable
    { period_log_id: 2, mental_condition_id: 6 }, // self-critical
    { period_log_id: 2, mental_condition_id: 8 }, // mood swings

    // March 12 (light day with minimal conditions)
    { period_log_id: 3, mental_condition_id: 4 }, // apathetic
    { period_log_id: 3, mental_condition_id: 5 }, // confused

    // March 15 (heavy day with many conditions)
    { period_log_id: 6, mental_condition_id: 1 }, // depressed
    { period_log_id: 6, mental_condition_id: 2 }, // irritable
    { period_log_id: 6, mental_condition_id: 3 }, // anxious
    { period_log_id: 6, mental_condition_id: 7 }, // obsessive thoughts
    { period_log_id: 6, mental_condition_id: 9 }, // stressed

    // March 16 (medium day with moderate conditions)
    { period_log_id: 7, mental_condition_id: 5 }, // confused
    { period_log_id: 7, mental_condition_id: 8 }, // mood swings
    { period_log_id: 7, mental_condition_id: 9 }, // stressed
    { period_log_id: 7, mental_condition_id: 10 }  // overwhelmed
  ]);
}