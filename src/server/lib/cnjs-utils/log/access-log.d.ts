import { RequestHandler } from "express";
import { PathLike } from "fs";
import { Dictionary } from "express-serve-static-core";

export interface IFileNameGenerator{
  ( time: Date, index: Number ): string;
}

export function accessLogFactory( logDir: PathLike, fileNameGenerator: IFileNameGenerator ): RequestHandler<Dictionary<string>>;

export function fileNameGenerator( time?: Date, index: Number ): string;