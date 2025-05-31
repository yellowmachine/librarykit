import { Filter, Entity, PrimaryKey, Property, ManyToOne, ManyToMany, Collection } from '@mikro-orm/core';
import { User } from './User.entity';

@Filter({
  name: 'groupContactsBooks',
  cond: args => ({
    $or: [
      {
        owner: {
          groups: { users: { id: args.currentUserId } }
        }
      },
      {
        owner: {
          contacts: { id: args.currentUserId }
        }
      }
    ]
  }),
  args: false
})
@Entity()
export class Book {
  @PrimaryKey({ type: 'uuid' })
  id!: string;

  @Property()
  title!: string;

  @Property()
  authors!: string[];

  @Property({type: 'text'})
  description?: string | null = null;;

  @Property()
  coverUrl?: string | null = null;

  @Property()
  language?: string | null = null;

  @Property()
  pageCount?: number | null = null;

  @Property()
  categories?: string[] | null = null;
  
  @Property()
  publisher?: string | null = null;
  
  @Property()
  publishDate?: Date | null = null;

  @ManyToOne(() => User)
  owner!: User;

  @ManyToMany(() => User, user => user.wishedBooks, { owner: true })
  wishedBy? = new Collection<User>(this);
}



