export function up(knex) {
  return knex.schema.createTable("mental_conditions", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable().unique().comment('Stored in lowercase');
  });
}

export function down(knex) {
  return knex.schema.dropTable("mental_conditions");
}