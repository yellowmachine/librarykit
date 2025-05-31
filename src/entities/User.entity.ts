import { Entity, PrimaryKey, Property, OneToMany, Collection, ManyToMany } from '@mikro-orm/core';
import { Book } from './Book.entity';
import { Group } from './Group.entity';


@Entity()
export class User {
  @PrimaryKey({ type: 'uuid' })
  id!: string;

  @Property()
  nick!: string;

  @Property()
  email!: string;

  @OneToMany(() => Book, book => book.owner)
  books = new Collection<Book>(this);

  @ManyToMany(() => Book, book => book.wishedBy)
  wishedBooks = new Collection<Book>(this);

  @ManyToMany(() => User, user => user.contacts)
  contacts = new Collection<User>(this);

  @ManyToMany(() => Group, group => group.users)
  groups = new Collection<Group>(this);

  @OneToMany(() => Group, group => group.admin)
  groupsAdministred = new Collection<Group>(this);
}
