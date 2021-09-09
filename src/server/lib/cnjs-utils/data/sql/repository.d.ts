import { Sequelize } from "sequelize/types";
import { DataAccessConfiguration } from "./config";

export interface IEntityFactory{
  ( database: Sequelize ): void
}

export function createRepository(sequelize: Sequelize, config: DataAccessConfiguration, ...entityFactories: IEntityFactory[] ): Sequelize

export function createSQLiteDatabase(sequelize: Sequelize, config: DataAccessConfiguration ): Sequelize

export function createSQLDatabase(sequelize: Sequelize, config: DataAccessConfiguration ): Sequelize

export function initEntities(database: Sequelize, ...entityFactories: IEntityFactory[] ): void

export function associateEntities(database: Sequelize ): void

export async function dataInitiation( database: Sequelize ): Promise<void>