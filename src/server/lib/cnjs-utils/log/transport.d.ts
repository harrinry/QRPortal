import { transports } from "winston";
import DailyFileRotate, { GeneralDailyRotateFileTransportOptions } from "winston-daily-rotate-file";

export interface ConsoleTransportOptions extends transports.ConsoleTransportOptions {
  strict: boolean
}

export interface FileTransportOptions extends transports.FileTransportOptions {
  strict: boolean
}

export interface DailyRotateFileTransportOptions extends GeneralDailyRotateFileTransportOptions {
  strict: boolean
}

export interface Transport <T, P> extends P {
  strict: boolean
  constructor( options: T )
  log( info: object, callback: Function ): void
}

export class ConsoleTransport implements Transport<ConsoleTransportOptions, transports.ConsoleTransportInstance> {}

export class FileTransport implements Transport<FileTransportOptions, transports.FileTransportInstance> {}

export class DailyRotateFileTransport implements Transport<DailyRotateFileTransportOptions, DailyFileRotate> {}