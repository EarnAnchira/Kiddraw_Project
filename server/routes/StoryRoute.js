import express from "express";
import {
    getStory,
    getStoryID,
    saveStory,
    updateStory,
    deleteStory
} from "../controllers/StoryController.js";

const router=express.Router();

router.get('/storys',getStory);
router.get('/storys/:id',getStoryID);
router.post('/storys',saveStory);
router.patch('/storys/:id',updateStory);
router.delete('/storys/:id',deleteStory);

export default router;