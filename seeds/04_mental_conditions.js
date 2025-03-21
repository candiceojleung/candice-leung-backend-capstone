export async function seed(knex) {
  await knex("mental_conditions").del();

  const mentalConditions = [
    "depressed",
    "irritable",
    "anxious",
    "unable to concentrate",
    "confused",
    "self-critical",
    "sensitive",
    "unstable mood",
    "stressed",
    "overwhelmed"
  ];

  return knex("mental_conditions").insert(
    mentalConditions.map(name => ({ name }))
  );
}