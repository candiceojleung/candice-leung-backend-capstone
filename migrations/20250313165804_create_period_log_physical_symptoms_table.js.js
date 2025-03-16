export function up(knex) {
    return knex.schema.createTable("period_log_physical_symptoms", (table) => {
      table.integer("period_log_id").unsigned().references("period_logs.id").onDelete("CASCADE");
      table.integer("physical_symptom_id").unsigned().references("physical_symptoms.id").onDelete("CASCADE");
      table.primary(["period_log_id", "physical_symptom_id"]);
    });
  }
  
  export function down(knex) {
    return knex.schema.dropTable("period_log_physical_symptoms");
  }