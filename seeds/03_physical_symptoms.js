export async function seed(knex) {
  await knex("physical_symptoms").del();

  const physicalSymptoms = [
    "cramps",
    "fatigue",
    "acne",
    "bloated",
    "headache",
    "nausea",
    "upset stomach",
    "poor sleep",
    "hot flashes",
    "dizziness",
    "food cravings",
    "lower back pain"
  ];

  return knex("physical_symptoms").insert(
    physicalSymptoms.map(name => ({ name }))
  );
}