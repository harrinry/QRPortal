import { PathLike } from "fs";

export interface DataAccessOptions{
  host?: string;
  name: string;
  port?: number;
  user?: string;
  password?: string;
  dialect: string;
  ssl?: boolean;
  storage?: PathLike;
  schema?: string;
}

export class DataAccessConfiguration{

  host?: string;
  name: string;
  port?: number;
  user?: string;
  password?: string;
  dialect: string;
  ssl?: boolean;
  schema?: string;
  storage?: string;

  constructor( opts: DataAccessOptions );
  isSQLite(): boolean;
}