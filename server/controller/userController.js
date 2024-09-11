import User from "../models/User.js";

export const create = async(req, res)=>{
    try{
        const userData = new User(req.body);
        if(!userData){
            return res.status(404).json({msg:"User data not found!"});
        } else{
            const savedData = await userData.save();
            res.status(200).json(savedData);
        }
    } catch(error) {
        res.status(500).json({error:error});
    }
}