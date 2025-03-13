export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("period_log_physical_symptoms").del();

  // Inserts seed entries
  return knex("period_log_physical_symptoms").insert([
    { period_log_id: 1, physical_symptom_id: 5 }, // bloated
    { period_log_id: 1, physical_symptom_id: 1 }, // cramps
    { period_log_id: 2, physical_symptom_id: 6 }, // headache
    { period_log_id: 3, physical_symptom_id: null }, // No symptoms for log #3
    { period_log_id: 4, physical_symptom_id: 2 }, // fatigue for user #2 log
  ]);
};