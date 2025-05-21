//import { BookModel } from '$lib/models/book';
import type { RequestEvent } from '@sveltejs/kit';
import { connectDB } from '$lib/db';

export async function createContext(event: RequestEvent) {
  await connectDB(); 
  return {
    event,
    //Book: BookModel,
  };
}

export type Context = Awaited<ReturnType<typeof createContext>>;
