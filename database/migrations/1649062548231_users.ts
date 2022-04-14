import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class UsersSchema extends BaseSchema {
    protected tableName = 'users'

    public async up() {
        this.schema.createTable(this.tableName, (table) => {
            table.increments('id').primary()
            table.string('username')
                .notNullable()
                .unique()
            table.string('email')
                .notNullable()
                .unique()
            table.boolean('email_check')// Email validity state
                .defaultTo(false)
            table.string('email_token')// Generate on email update and use to valid email by mail
                .nullable()
            table.string('password')
                .notNullable()
            table.string('authentication_token')// Generate on forgot password and use to authenticate user by mail
                .nullable()
            table.string('remember_me_token')// Generate on login and use to authenticate user by token
                .nullable()
            /**
             * Uses timestampz for PostgreSQL and DATETIME2 for MSSQL
             */
            table.timestamp('created_at', { useTz: true }).notNullable()
            table.timestamp('updated_at', { useTz: true }).notNullable()
        })
    }

    public async down() {
        this.schema.dropTable(this.tableName)
    }
}
