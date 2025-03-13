export async function seed (knex) {
  // Deletes ALL existing entries
  await knex("period_log_mental_conditions").del();

  // Inserts seed entries
  return knex("period_log_mental_conditions").insert([
    { period_log_id: 1, mental_condition_id: 7 }, 
    { period_log_id: 2, mental_condition_id: 2 },
    { period_log_id: null }, 
  ]);
};