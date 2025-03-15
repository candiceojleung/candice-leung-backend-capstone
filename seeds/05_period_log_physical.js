export async function seed(knex) {
  await knex("period_log_physical_symptoms").del();

  return knex("period_log_physical_symptoms").insert([
    // March 10 (heavy day with many symptoms)
    { period_log_id: 1, physical_symptom_id: 1 }, // cramps
    { period_log_id: 1, physical_symptom_id: 2 }, // fatigue
    { period_log_id: 1, physical_symptom_id: 4 }, // bloated
    { period_log_id: 1, physical_symptom_id: 5 }, // headache
    { period_log_id: 1, physical_symptom_id: 6 }, // nausea
    { period_log_id: 1, physical_symptom_id: 12 }, // lower back pain

    // March 11 (medium day with fewer symptoms)
    { period_log_id: 2, physical_symptom_id: 2 }, // fatigue
    { period_log_id: 2, physical_symptom_id: 4 }, // bloated
    { period_log_id: 2, physical_symptom_id: 11 }, // food cravings

    // March 12 (light day with minimal symptoms)
    { period_log_id: 3, physical_symptom_id: 3 }, // acne
    { period_log_id: 3, physical_symptom_id: 8 }, // poor sleep

    // March 15 (heavy day with many symptoms)
    { period_log_id: 6, physical_symptom_id: 1 }, // cramps
    { period_log_id: 6, physical_symptom_id: 4 }, // bloated
    { period_log_id: 6, physical_symptom_id: 7 }, // upset stomach
    { period_log_id: 6, physical_symptom_id: 9 }, // hot flashes
    { period_log_id: 6, physical_symptom_id: 12 }, // lower back pain

    // March 16 (medium day with moderate symptoms)
    { period_log_id: 7, physical_symptom_id: 2 }, // fatigue
    { period_log_id: 7, physical_symptom_id: 8 }, // poor sleep
    { period_log_id: 7, physical_symptom_id: 10 }, // dizziness
    { period_log_id: 7, physical_symptom_id: 11 }  // food cravings
  ]);
}