const mongoose = require('mongoose');

const MONGO_URI = "mongodb+srv://test:test@cluster0.imzp6.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const connectDB = async () => {
    try {
        console.log("Connecting to MongoDB...");
        console.log("MONGO_URI:", MONGO_URI); // Debugging

        if (!MONGO_URI) {
            throw new Error("MongoDB URI is not defined.");
        }

        const conn = await mongoose.connect(MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    } catch (error) {
        console.error(`❌ Error: ${error.message}`);
        process.exit(1);
    }
};

module.exports = connectDB;
