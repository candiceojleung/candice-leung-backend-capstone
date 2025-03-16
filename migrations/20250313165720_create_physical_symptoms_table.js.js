export function up(knex) {
  return knex.schema.createTable("physical_symptoms", (table) => {
    table.increments("id").primary();
    table.string("name").notNullable().unique().comment('Stored in singular lowercase');
  });
}

export function down(knex) {
  return knex.schema.dropTable("physical_symptoms");
}