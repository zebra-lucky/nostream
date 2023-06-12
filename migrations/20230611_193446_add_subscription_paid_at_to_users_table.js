exports.up = function(knex) {
  return knex.schema.alterTable('users', function (table) {
    table.timestamp('subscription_paid_at').nullable().index()
  })
};

exports.down = function(knex) {
  return knex.schema.alterTable('users', function (table) {
    table.dropColumn('subscription_paid_at')
  })
};
