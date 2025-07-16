const express = require("express");
const  mongoose = require("mongoose");
const router = express.Router();
const post = require('./DB');

// 1. Create Post
router.post("/",async(req,res)=>{
    const {userid,name,price,description}=req.body;
    const newpost = new post({userid,name,price,description});
    const savepost = await newpost.save();
    res.status(201).json(savepost);
});
// 2. Get All Posts
router.get("/",async(req,res)=>{
    const posts = await post.find();
    res.json(posts);
});
// 3. Get Post by ID
router.get("/:id",async(req,res)=>{
    const postid = await post.findById(req.params.id);
    if(!postid) return res.status(404).json({Message:"post not found"});
    res.json(postid);
});
// 4. Update Post
router.put("/:id",async(req,res)=>{
    const {name,price,description}=req.body;
    const updatapost = await Post.findByIdAndUpdate(req.params.id,{name,price,description});
    if(!updatapost) return res.status(404).json({Message:"post not found"});
    res.json(updatapost);
});
// 5. Delete Post
router.delete("/:id",async(req,res)=>{
    const postdelte = await post.findByIdAndDelete(req.params.id);
    if (!postdelte) return res.status(404).json({ message: "Post not found" });
    res.json({ message: "Post deleted" });
});

// 6. patch post
router.patch("/:id", async (req, res) => {
 const {name,price,description} = req.body;
 const patchedpost = await post.findByIdAndUpdate( req.params.id, {name,price,description},{ new: true } );

    if (!patchedpost) return res.status(404).json({ Message: "post not found" });

    res.json(patchedpost);
});



module.exports = router;


