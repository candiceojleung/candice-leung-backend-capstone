export async function seed(knex) {
  // Deletes ALL existing entries
  await knex("period_logs").del();

  // Inserts seed entries
  return knex("period_logs").insert([
    { id: 1, user_id: 1, date: "2025-03-10", has_period: true, flow: "heavy" },
    { id: 2, user_id: 1, date: "2025-03-11", has_period: true, flow: "medium" },
    { id: 3, user_id: 1, date: "2025-03-12", has_period: false, flow: null },
    { id: 4, user_id: 2, date: "2025-03-10", has_period: true, flow: "light" },
  ]);
};