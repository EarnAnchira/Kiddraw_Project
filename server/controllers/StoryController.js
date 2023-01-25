import Story from "../models/StoryModel.js";
import path from "path";
import fs from "fs";

export const getStory= async(req,res)=>{
    try{
        const response = await Story.findAll();
        res.json(response);
    }catch(error){
        console.log(error.message);
    }
}

export const getStoryID= async(req,res)=>{
    try{
        const response = await Story.findOne({
            where:{
                id:req.params.id
            }
        });
        res.json(response);
    }catch(error){
        console.log(error.message);
    } 
}

export const saveStory=(req,res)=>{
    if(req.files===null) return res.status(400).json({msg:"No file uploaded"});
    const name = req.body.title;
    const file = req.files.file;
    const filleSize = file.data.length;
    const ext = path.extname(file.name);
    const fileName =file.md5+ext;
    const url = `${req.protocol}://${req.get("host")}/images/${fileName}`;
    const allowedType = ['.png','jpg','jpeg'];

    if(!allowedType.includes(ext.toLowerCase())) return res.status(422).json({msg: "Invalid Images"});
    if(filleSize>5000000) return res.status(422).json({msg:"Image must be less than 5 MB"});

    file.mv(`./public/images/${fileName}`,async(err)=>{
        if(err) return res.status(500).json({msg:err.message});
        try{
            await Story.create({StoryTitleEng:name,StoryImage:fileName,url:url});
            res.status(201).json({msg:"Story created successfully"});
        }catch(error){
            console.log(error.message);
        }
    })
}

export const updateStory=(req,res)=>{
    
}

export const deleteStory= async(req,res)=>{
    const story = await Story.findOne({
        where:{
            id : req.params.id
        }
    });
    if(!story) return res.status(404).json({msg: "No data found"});

    try{
        const filepath = `./public/images/${story.StoryImage}`;
        fs.unlinkSync(filepath);
        await Story.destroy({
            where:{
                id: req.params.id
            }
        });
        res.status(200).json({msg:"Story deleted successfully"});
    } catch(error){
        console.log(error.message);
    }
    
}