import express from 'express';
import { verifyToken } from '../verifyToken.js';
import { createTweet ,deleteTweet, likeOrDislike,getAllTweets ,getUserTweets, getExploreTweets } from '../controllers/tweet.js';
const router = express.Router();

//Create a tweet
router.post('/',verifyToken,createTweet);

//Delete a Tweet
router.delete("/:id",verifyToken,deleteTweet);

//Like or dislike a tweet
router.put('/:id/like',likeOrDislike);

//Get all timeline tweets
router.get('/timeline/:id',getAllTweets);

//Get user Tweet only
router.get('/user/all/:id',getUserTweets);

//explore
router.get('/explore',getExploreTweets);

export default router;