import { type Options } from '@mikro-orm/core';
import { PostgreSqlDriver } from '@mikro-orm/postgresql';
import { TsMorphMetadataProvider } from '@mikro-orm/reflection';
import { Book } from './entities/Book.entity';

const testConfig: Options<PostgreSqlDriver> = {
  driver: PostgreSqlDriver,
  entities: [Book],
  //entities: ['dist/**/*.entity.js'],
  //entitiesTs: ['src/**/*.entity.ts'],
  metadataProvider: TsMorphMetadataProvider,
  dbName: 'library_test', // base de datos específica para test
  user: 'postgres',
  password: 'postgres',
  host: 'localhost',
  port: 5432,
  debug: false, // menos ruido en los tests
  //dynamicImportProvider: (id) => import(id),
};

export default testConfig;

