import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URL}`)
        console.log('\n MongoDB connected ')
    } catch (error) {
        console.log("MongoDB Error", error);
    }
}

export default connectDB