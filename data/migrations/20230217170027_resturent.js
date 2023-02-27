/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable("owners", tbl => {
    tbl.increments("id").notNullable();
    tbl.string("name");
    tbl.string("email");
    tbl.string("created");
    tbl.string("updated");
  })

  .createTable("expenses", tbl => {
    tbl.increments("id").notNullable();
    tbl.string("name");
    tbl.decimal("income");
    tbl.decimal("expense");
    tbl.timestamp("date");
  })

  .createTable("resturents", tbl => {
    tbl.increments("id").notNullable();
    tbl.string("name");
    tbl.string("location");
    tbl.integer("owner_id")
    .unsigned()
    .notNullable()
    .references("id")
    .inTable("owners")
    .onDelete("CASCADE")
    .onUpdate("CASCADE");
    tbl.string("created");
    tbl.string("updated");
  })

  .createTable("ratings", tbl => {
    tbl.increments("id").notNullable();
    tbl.integer("rating");
    tbl.integer("resturent_id")
    .unsigned()
    .notNullable()
    .references("id")
    .inTable("resturents")
    .onDelete("CASCADE")
    .onUpdate("CASCADE");
    tbl.string("created");
    tbl.string("updated");
  })
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.
  dropTableIfExists("owners").
  dropTable("expenses").
  dropTableIfExists("resturents").
  dropTableIfExists("ratings")
};
