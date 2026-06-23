import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const url =  `mongodb://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@${process.env.MONGODB_HOST}:${process.env.MONGODB_PORT}/${process.env.MONGODB_DATABASE}?authSource=admin`;
    console.log("Mongo URL:", url);
    await mongoose.connect(url);
    console.log('MongoDB connected');
  } catch (error) {
    console.error(error.stack);
    console.error('Database connection failed:', error);
    process.exit(1);
  }
};

export default connectDB;