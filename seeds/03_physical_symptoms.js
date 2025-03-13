export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("physical_symptoms").del();

  // Inserts seed entries
  const physicalSymptoms = [
    "cramps",
    "fatigue",
    "acne",
    "body aches",
    "bloated",
    "headache",
    "nausea",
    "upset stomach",
    "poor sleep",
    "dry mouth",
  ];
};