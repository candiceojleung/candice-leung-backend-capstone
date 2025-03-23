export async function seed(knex) {
  await knex("users").del();

  return knex("users").insert([
    { id: 1, name: "Athena Doe", email: "athena@example.com" }
  ]);
}