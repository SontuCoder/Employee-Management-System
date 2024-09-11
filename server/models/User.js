import mongoose from "../dbConfig.js"; // Use 'import' instead of 'require'

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        require: true
    },
    email: {
        type:String,
        require: true
    },
    password:{
        type:String,
        require:true
    },
    salary: {
        type:Number,
        require: true
    },
    role: { type: String, enum: ["Manager", "Employee"], default: "Employee" }
});

// Export the model using 'export default'
const User = mongoose.model("User", userSchema);
export default User;
