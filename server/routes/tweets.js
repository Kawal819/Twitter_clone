import express from 'express';
import { verifyToken } from '../verifyToken.js';
import { createTweet ,deleteTweet, likeOrDislike } from '../controllers/tweet.js';
const router = express.Router();

//Create a tweet
router.post('/',verifyToken,createTweet);

//Delete a Tweet
router.delete("/:id",verifyToken,deleteTweet);

//Like or dislike a tweet
router.put('/:id/like',likeOrDislike);


export default router;