import mongoose from "../dbConfig.js"; // Use 'import' instead of 'require'

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    salary: Number,
    role: { type: String, enum: ["Manager", "Employee"], default: "Employee" }
});

// Export the model using 'export default'
const User = mongoose.model("User", userSchema);
export default User;
