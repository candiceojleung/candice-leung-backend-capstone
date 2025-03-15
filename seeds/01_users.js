export async function seed(knex) {
  await knex("users").del();

  return knex("users").insert([
    { id: 1, name: "Jane Doe", email: "jane@example.com" }
  ]);
}