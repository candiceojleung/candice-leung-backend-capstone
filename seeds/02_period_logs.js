export async function seed(knex) {
  await knex("period_logs").del();

  return knex("period_logs").insert([
    { id: 1, user_id: 1, date: "2025-03-10", has_period: true, flow: "heavy" },
    { id: 2, user_id: 1, date: "2025-03-11", has_period: true, flow: "medium" },
    { id: 3, user_id: 1, date: "2025-03-12", has_period: true, flow: "light" },
    { id: 4, user_id: 1, date: "2025-03-13", has_period: false, flow: null },
    { id: 5, user_id: 1, date: "2025-03-14", has_period: false, flow: null },
    { id: 6, user_id: 1, date: "2025-03-15", has_period: true, flow: "heavy" },
    { id: 7, user_id: 1, date: "2025-03-16", has_period: true, flow: "medium" }
  ]);
}