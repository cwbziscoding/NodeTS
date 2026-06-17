
import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config();

const connectDB = async (cb: () => void) => {
  try {
    const mongoURI = process.env.MONGODB_CONNECTION;
    if (!mongoURI) {
      throw new Error('MONGODB_CONNECTION is not defined in environment variables');
    }

    await mongoose.connect(mongoURI, {})
    cb();
  } catch (error) {
    console.error('MongoDB connection error:', error)
  }
}

export default connectDB