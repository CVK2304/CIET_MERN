const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
app.use(cors());
app.use(express.json());
mongoose.connect('mongodb://localhost:27017/TajMahal',{});
const storySchema = new mongoose.Schema({sname:String,author:String,dob:Date,address:String});
const Story = mongoose.model('Story',storySchema);

app.get('/stories',async(req,res)=>{
    const stories =await Story.find();
    res.send(stories);
});
app.get('/stories/:id',async(req,res)=>{
    const stories =await Story.findOne();
    res.send(stories);
});

app.post('/stories',async(req,res)=>{
    const story =new Story({
        sname:req.body.sname,
        author:req.body.author,
        dob:req.body.dob,
        address:req.body.address
    });
    await story.save();
    res.send(story);
});
app.put('/stories/:id',async(req,res)=>{
    const story =await Story.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.send(story);
});
app.delete('/stories/:id',async(req,res)=>{
    await Story.findByIdAndDelete(req.params.id);
    res.send({message:"Story deleted"});
});
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});