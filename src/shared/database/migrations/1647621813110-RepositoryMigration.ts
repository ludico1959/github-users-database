import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class RepositoryMigration1647621813110 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'cities',
        columns: [
          {
            name: 'id',
            type: 'string',
            isPrimary: true,
          },
          {
            name: 'name',
            type: 'varchar',
          },
          {
            name: 'full_name',
            type: 'varchar',
          },
          {
            name: 'description',
            type: 'varchar',
          },
          {
            name: 'html_url',
            type: 'varchar',
          },
        ],
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}
