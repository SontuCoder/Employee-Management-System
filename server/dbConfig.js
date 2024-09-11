import mongoose from "mongoose"; // Use 'import' instead of 'require'

mongoose.connect("mongodb://127.0.0.1:27017/Employee", {
    serverSelectionTimeoutMS: 7000
});

mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (error) => {
    console.log("MongoDB connection error: ", error);
});

export default mongoose; // Use 'export default'
