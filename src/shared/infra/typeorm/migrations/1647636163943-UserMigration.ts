import { MigrationInterface, QueryRunner } from 'typeorm';

export class UserMigration1647636163943 implements MigrationInterface {
  name = 'UserMigration1647636163943';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE \`user\` (\`login\` varchar(255) NOT NULL, \`id\` int NOT NULL AUTO_INCREMENT, \`node_id\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, \`html_url\` varchar(255) NOT NULL, \`repos_url\` varchar(255) NOT NULL, \`updated_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), \`created_at\` timestamp(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`email\` varchar(255) NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `CREATE TABLE \`repository\` (\`id\` int NOT NULL AUTO_INCREMENT, \`node_id\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, \`full_name\` varchar(255) NOT NULL, \`description\` varchar(255) NOT NULL, \`html_url\` varchar(255) NOT NULL, \`user_id\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`,
    );
    await queryRunner.query(
      `ALTER TABLE \`repository\` ADD CONSTRAINT \`FK_fa362fdb765619fa7b9fd8c2989\` FOREIGN KEY (\`user_id\`) REFERENCES \`user\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE \`repository\` DROP FOREIGN KEY \`FK_fa362fdb765619fa7b9fd8c2989\``,
    );
    await queryRunner.query(`DROP TABLE \`repository\``);
    await queryRunner.query(`DROP TABLE \`user\``);
  }
}
