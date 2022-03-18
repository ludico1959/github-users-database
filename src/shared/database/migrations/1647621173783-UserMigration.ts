import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class UserMigration1647621173783 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'string',
            isPrimary: true,
          },
          {
            name: 'login',
            type: 'varchar',
          },
          {
            name: 'node_id',
            type: 'varchar',
          },
          {
            name: 'html_url',
            type: 'varchar',
          },
          {
            name: 'update_at',
            type: 'Date',
          },
          {
            name: 'created_at',
            type: 'Date',
          },
        ],
        foreignKeys: [
          {
            name: 'fk_user_repository',
            columnNames: ['repository_Id'],
            referencedTableName: 'repositories',
            referencedColumnNames: ['id'],
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
