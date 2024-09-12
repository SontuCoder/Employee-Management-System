import express from "express";
import User from "../models/User.js"; // Adjust the path based on your project structure


const router = express.Router();

// Create a new user
router.post("/create", async (req, res) => {
    try {
        const newUser = new User(req.body);
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({ error: "Error creating user" });
    }
});

// Get all users
router.get("/getAll", async (req, res) => {
    try {
        const users = await User.find();
        if(!users){
            return res.status(404).json({msg: "User data not found."});
        }
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ error: "Error fetching users" });
    }
});

// Get user by ID
router.get("/getUser/:id", async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ msg: "User not found." });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: "Error fetching user" });
    }
});

router.put("/update/:id", async(req,res)=>{
    try{
        const userId = req.params.id;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ msg: "User not found." });
        }

        const updatedData = await User.findByIdAndUpdate(userId, req.body, {new:true});
        res.status(200).json(updatedData);

    }catch(error){
        res.status(500).json({ error: "Error fetching user" });
    }
});

router.delete("/delete/:id", async(req,res)=>{
    try{
        const userId = req.params.id;
        const user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ msg: "User not found." });
        }

        await User.findByIdAndDelete(userId);
        res.status(200).json({msg:"User delete successfully"});

    }catch(error){
        res.status(500).json({ error: "Error fetching user" });
    }
});



export default router;
