export async function seed(knex) {
  // Deletes ALL existing entries
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
    "content",
    "happy",
  ];
};