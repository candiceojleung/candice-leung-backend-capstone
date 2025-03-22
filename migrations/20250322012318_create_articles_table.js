export function up(knex) {
  return knex.schema.createTable("articles", (table) => {
    table.increments("id").primary();
    table.string("title").notNullable();
    table.text("content").notNullable();
    table.string("category").notNullable();
    table.string("link").notNullable();
    table.timestamps(true, true);
  });
}

export function down(knex) {
  return knex.schema.dropTable("articles");
}
