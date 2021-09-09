import { Sequelize, Transaction, Model, BuildOptions } from "sequelize";

export interface MigrationServiceOptions {
  repository: Sequelize
  migrationFolderPath: string
  logger: any
  silent: boolean
  throws: boolean
}

export abstract class MigrationService {

  private repository: Sequelize
  private logger: any
  private silent: boolean
  private throws: boolean

  private migrationFolderPath: string

  constructor ( options: MigrationServiceOptions )
  
  abstract getCurrentDatabaseVersion( transaction: Transaction ): Promise<number>
  abstract newDataVersion( version: number, transaction: Transaction ): Promise<Model<unknown, unknown>>
  abstract migrationFileMatcher( version: number ): string

  private executeMigration( sql: string ): Promise<[unknown[], unknown]>
  private readMigration( version: number ): string
  public migrateDatabaseTo( version: number ): Promise<boolean>
}