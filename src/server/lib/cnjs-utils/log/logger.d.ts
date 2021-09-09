import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";
import { ConsoleTransport, FileTransport, DailyRotateFileTransport } from "./transport"

export enum logLevel{
  emerg = "emerg",
  alert = "alert",
  crit = "clit",
  error = "error",
  warning = "warning",
  notice = "notice",
  info = "info",
  debug = "debug",
}

export function dailyRotateFilename( name: string, extension: string ): string

export function fileTransportFactory( level: logLevel, filePath: string, handleExceptions: boolean, strictLevel: boolean ): FileTransport
  
export function consoleTransportFactory( level: logLevel, handleExceptions: boolean, strictLevel: boolean ): ConsoleTransport

export function dailyRotationFileTransportFactory( level: logLevel, filePath: string, handleExceptions: boolean, strictLevel: boolean ): DailyRotateFileTransport

export function loggerFactory( options: winston.LoggerOptions, transports: winston.transports.Transports[] ): winston.Logger
export function loggerFactory( transports: winston.transports.Transports[] ): winston.Logger