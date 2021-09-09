import { DataTypeAbstract, DefineAttributeColumnOptions, DefineOptions, Sequelize, Model } from "sequelize";

declare type SequelizeAttributes<T extends { [key: string]: any }> = {
    [P in keyof T]: string | DataTypeAbstract | DefineAttributeColumnOptions;
  };

export interface IDatabaseInitializationFactory{
  ( database: Sequelize ): void
}

export interface EntityFactoryOptions<T>{
  name: string
  column: SequelizeAttributes<T>
  options: DefineOptions<T>
  associate: IDatabaseInitializationFactory
  sync: IDatabaseInitializationFactory,
  proto: Function[]
}

export function defineModel<T>( options: EntityFactoryOptions<T> ): IDatabaseInitializationFactory

export function defineSchema( database: Sequelize, schema?: string ): string | undefined
