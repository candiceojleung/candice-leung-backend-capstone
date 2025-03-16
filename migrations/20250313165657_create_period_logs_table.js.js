export function up(knex) {
    return knex.schema.createTable("period_logs", (table) => {
      table.increments("id").primary();
      table.integer("user_id").unsigned().references("users.id").onDelete("CASCADE");
      table.date("date").notNullable();
      table.boolean("has_period").notNullable().defaultTo(false);
      table.enu("flow", ["light", "medium", "heavy"]).nullable();
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table
        .timestamp("updated_at")
        .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
      table.unique(["user_id", "date"]);
      table.index(["date"], "log_date_index");
      table.index(["user_id"], "user_logs_index");
    });
  }
  
  export function down(knex) {
    return knex.schema.dropTable("period_logs");
  }