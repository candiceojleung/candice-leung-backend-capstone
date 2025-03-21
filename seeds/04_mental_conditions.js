export async function seed(knex) {
  await knex("mental_conditions").del();

  const mentalConditions = [
    "depressed",
    "irritable",
    "anxious",
    "apathy",
    "confused",
    "self-critical",
    "spiraling",
    "unstable moods",
    "stressed",
    "overwhelmed"
  ];

  return knex("mental_conditions").insert(
    mentalConditions.map(name => ({ name }))
  );
}