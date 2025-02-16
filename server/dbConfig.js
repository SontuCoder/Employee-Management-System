import mongoose from "mongoose";

mongoose.connect(DB_URL, {
    serverSelectionTimeoutMS: 7000
});

mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (error) => {
    console.log("MongoDB connection error: ", error);
});

export default mongoose;

