import {Router} from "express";
import petModel from "../dao/models/Pet.js";
import userModel from "../dao/models/User.js";

const router = Router();

router.get("/", (req,res)=>{
    res.render('home')
})

router.get("/users", async (req,res)=>{
    const result = await userModel.find().lean();
    res.render('users', {users:result})
})

router.get("/pets", async (req,res)=>{
    const result = await petModel.find().lean();
    res.render('pets', {pets:result})
})

export default router;