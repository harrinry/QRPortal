const fs = require("fs");
const path = require("path");

class MigrationService {

  constructor( options = {}){

    // configuration
    this.repository = options.repository;
    this.migrationFolderPath = options.migrationFolderPath;
    this.silent = options.silent;
    this.throws = options.throws;
    this.logger = options.logger || console;

  }

  readMigration( version ){
    const sqlFileContents = fs.readFileSync( path.join( this.migrationFolderPath, this.migrationFileMatcher( version ) ));
    return sqlFileContents.toString();
}

  executeMigration( sql ){
    if( !sql ) return false;
    return this.repository.query( sql );
  }

  async migrateDatabaseTo( version ){
    let migrationVersion = 0, currentVersion;
    try {
      currentVersion = await this.getCurrentDatabaseVersion();
  
      for (let i = currentVersion + 1; i <= version; i++) {
        migrationVersion = i;
        const sqlFile = this.readMigration( migrationVersion );
        
        await this.executeMigration( sqlFile );
        await this.newDataVersion( migrationVersion );
        
        if(!this.silent){
          this.logger.info(`Database migrated to version ${migrationVersion} successfully`);
        }

      }
  
      return true;
  
    } catch (error) {
      if( !this.silent ){
        this.logger.error(error.message);
        this.logger.error(`Database migrated to version ${migrationVersion} failed`);
      }

      if( this.throws ){
        throw new Error( error.message );
      }

      return false;
    }
  }

}

module.exports = {
  MigrationService
};