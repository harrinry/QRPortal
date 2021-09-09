export interface ConfigurationOptions{
  path: string
  format: "json" | "properties" | "custom"
  newable: boolean
  formater: (data: Buffer) => Object
}

export function ConfigurationFactory<T extends new(...args: any[]) => any>( options: ConfigurationOptions, ConfigurationDTO: T, ...params: any[] ): InstanceType<T>;

// export function readConfigurationFile( filePath: PathLike ): Buffer;

// export function parse( data: Buffer, format: "json" ): any;

// export function parseJSON( rawData: Buffer ): any;
