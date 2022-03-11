import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateRepositories1647003786159 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'repositories',
        columns: [
          {
            name: 'id',
            type: 'uuid',
            isPrimary: true,
          },
          {
            name: 'node_id',
            type: 'string',
          },
          {
            name: 'full_name',
            type: 'string',
          },
          {
            name: 'description',
            type: 'string',
          },
          {
            name: 'html_url',
            type: 'string',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
