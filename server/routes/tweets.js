import express from 'express';
import { verifyToken } from '../verifyToken.js';
import { createTweet ,deleteTweet } from '../controllers/tweet.js';
const router = express.Router();

//Create a tweet
router.post('/',verifyToken,createTweet);

//Delete a Tweet
router.delete("/:id",verifyToken,deleteTweet);

export default router;