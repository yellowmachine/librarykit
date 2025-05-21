import { prop, getModelForClass } from '@typegoose/typegoose';

class Author {
  @prop({ required: true })
  name!: string;
}

export class Book {
  @prop({ required: true })
  title!: string;

  @prop({ required: true, _id: false })
  author!: Author;
}

export const BookModel = getModelForClass(Book);
