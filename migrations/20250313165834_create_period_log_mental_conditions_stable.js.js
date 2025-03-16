export function up(knex) {
    return knex.schema.createTable("period_log_mental_conditions", (table) => {
      table.integer("period_log_id").unsigned().references("period_logs.id").onDelete("CASCADE");
      table.integer("mental_condition_id").unsigned().references("mental_conditions.id").onDelete("CASCADE");
      table.primary(["period_log_id", "mental_condition_id"]);
    });
  }
  
  export function down(knex) {
    return knex.schema.dropTable("period_log_mental_conditions");
  }