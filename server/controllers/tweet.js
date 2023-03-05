import Tweet from "../models/Tweet.js";
import { handleError } from "../error.js";

export const createTweet =async (req,res,next)=>{
    const newTweet= new Tweet(req.body);
    try{
        const savedTweet= await newTweet.save();
        res.status(200).json(savedTweet);
    }catch(err){
        handleError(500,err);
    }
}

export const deleteTweet =async (req,res,next)=>{
    try{
        const tweet=await Tweet.findById(req.params.id);
        if(tweet.userId === req.body.id){
            await tweet.deleteOne();
            res.status(200).json("Tweet has been deleted successfully");
        }else{
            handleError(500,err);
        }
    }catch(err){
        handleError(500,err);
    }
}



export const likeOrDislike =async (req,res,next)=>{
    try{
       const tweet = await Tweet.findById(req.params.id);
       if(!tweet.likes.includes(req.body.id)){
        await tweet.updateOne({$push:{likes:req.body.id}})
        res.status(200).json("Tweet has been liked");
       }else{
        await tweet.updateOne({$push:{likes:req.body.id}});
        res.status(200).json("Tweet has been disliked");
       }
    }catch(err){
        handleError(500,err);
    }
}