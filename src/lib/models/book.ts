import { prop, getModelForClass, modelOptions } from '@typegoose/typegoose';

/*
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
*/

// Subtipos auxiliares
class Publisher {
  @prop()
  name?: string;
}

class Identifier {
  @prop()
  librarything?: string[];

  @prop()
  goodreads?: string[];

  // Si necesitas otros identificadores, puedes agregarlos aquí
}

class Cover {
  @prop()
  small?: string;

  @prop()
  medium?: string;

  @prop()
  large?: string;
}

class Subject {
  @prop()
  url?: string;

  @prop()
  name?: string;
}

class Author {
  @prop()
  url?: string;

  @prop()
  name?: string;
}

@modelOptions({ schemaOptions: { _id: false } })
class OpenLibraryBook {
  @prop({ type: () => [Publisher] })
  publishers?: Publisher[];

  @prop()
  pagination?: string;

  @prop({ _id: false })
  identifiers?: Identifier;

  @prop({ type: () => Object })
  classifications?: Record<string, unknown>;

  @prop({ required: true })
  title!: string;

  @prop()
  url?: string;

  @prop()
  notes?: string;

  @prop()
  number_of_pages?: number;

  @prop({ _id: false })
  cover?: Cover;

  @prop({ type: () => [Subject] })
  subjects?: Subject[];

  @prop()
  publish_date?: string;

  @prop()
  key?: string;

  @prop({ type: () => [Author] })
  authors?: Author[];
}

// Puedes crear el modelo así:
export const OpenLibraryBookModel = getModelForClass(OpenLibraryBook);
