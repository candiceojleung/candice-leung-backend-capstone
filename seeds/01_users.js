export async function seed(knex) {
  await knex("users").del();

  return knex("users").insert([
    { id: 1, name: "Jane Doe", email: "jane@example.com" },
    { id: 2, name: "Susan Chan", email: "susan@example.com" },
  ]);
};