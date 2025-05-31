import { type Options } from '@mikro-orm/core';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
//import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import baseConfig from './mikro-orm.config'; // importa la config base si quieres reutilizar

const testConfig: Options<PostgreSqlDriver> = {
  ...baseConfig,
  dbName: 'library_test', // base de datos específica para test
  user: 'postgres',
  password: 'postgres',
  host: 'localhost',
  port: 5432,
  debug: false, // menos ruido en los tests
};

export default testConfig;

