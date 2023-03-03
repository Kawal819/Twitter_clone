import express from "express";
import {getUser, update, deleteUser , follow, unfollow} from "../controllers/user.js"
import { verifyToken } from "../verifyToken.js";

const router=express.Router();


//Update User
router.put('/:id', verifyToken ,update)

//Get User
router.get("/find/:id",getUser);


//Delete User
router.delete("/:id",verifyToken,deleteUser);


//Follow
router.put("/follow/:id",verifyToken,follow);

//Unfollow
router.put("/unfollow/:id",verifyToken,unfollow);

export default router;