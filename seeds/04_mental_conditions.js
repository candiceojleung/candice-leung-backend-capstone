export async function seed(knex) {
  await knex("mental_conditions").del();

  const mentalConditions = [
    "depressed",
    "irritable",
    "anxious",
    "apathetic",
    "confused",
    "self-critical",
    "obsessive thoughts",
    "mood swings",
    "stressed",
    "overwhelmed"
  ];

  return knex("mental_conditions").insert(
    mentalConditions.map(name => ({ name }))
  );
}