import mongoose from 'mongoose';

const mongoDB = process.env.DATABASE_URL || 'mongodb://127.0.0.1:27017/mydb';

export async function connectDB() {
  // Opcional: para evitar warnings en Mongoose 7+
  mongoose.set('strictQuery', false);
  await mongoose.connect(mongoDB);
}
