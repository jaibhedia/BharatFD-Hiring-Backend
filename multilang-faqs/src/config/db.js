
const mongoose = require('mongoose');

const MONGO_URI = "MONGO_URI"; 

const connectDB = async () => {
    try {
        console.log("Connecting to MongoDB...");
        console.log("MONGO_URI:", MONGO_URI); 

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



//ENV APPROACH
//const mongoose = require('mongoose');
// require('dotenv').config(); 

// const MONGO_URI = process.env.MONGO_URI; 

// const connectDB = async () => {
//     try {
//         console.log("Connecting to MongoDB...");
//         console.log("MONGO_URI:", MONGO_URI ? "Loaded from .env" : "Not defined!");

//         if (!MONGO_URI) {
//             throw new Error("❌ MongoDB URI is not defined in the .env file.");
//         }

//         const conn = await mongoose.connect(MONGO_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });

//         console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
//     } catch (error) {
//         console.error(`❌ Connection Error: ${error.message}`);
//         process.exit(1);
//     }
// };

// module.exports = connectDB;


