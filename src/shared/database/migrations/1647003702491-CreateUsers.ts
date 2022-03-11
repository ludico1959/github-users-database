import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsers1647003702491 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'login',
            type: 'string',
          },
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'string',
          },
          {
            name: 'html_url',
            type: 'string',
          },
          {
            name: 'repo_url',
            type: 'string',
          },
          {
            name: 'updated_at',
            type: 'Date',
          },
          {
            name: 'created_at',
            type: 'Date',
          },
          {
            name: 'email',
            type: 'string',
          },
          {
            name: 'repositoryId',
            type: 'uuid',
          },
        ],
        foreignKeys: [
          {
            name: 'fk_user_repository',
            columnNames: ['repositoryId'],
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
