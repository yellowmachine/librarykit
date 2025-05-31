import { describe, it, beforeAll, afterAll, expect } from 'vitest';
import { MikroORM } from '@mikro-orm/core';
import config from '../../mikro-orm.config.test';
import { Book } from '../Book.entity';

let orm: MikroORM;

beforeAll(async () => {
  orm = await MikroORM.init(config);
  await orm.getSchemaGenerator().dropSchema();
  await orm.getSchemaGenerator().createSchema();
});

afterAll(async () => {
  await orm.close(true);
});

describe('Book entity', () => {
  it('should create and retrieve a book', async () => {
    const em = orm.em.fork();
    const book = em.create(Book, {
      title: 'Clean Code',
      author: 'Robert C. Martin',
      price: 39.99,
    });
    await em.persistAndFlush(book);

    const found = await em.findOne(Book, { title: 'Clean Code' });
    expect(found).toBeDefined();
    expect(found?.author).toBe('Robert C. Martin');
  });
});
