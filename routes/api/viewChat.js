const express = require('express');
const { default: mongoose } = require('mongoose');
const router = express.Router();

const Message = require('../../models/Messages');
console.log(Message);
const { check, validationResult } = require('express-validator');

/*router.get(
    '/',async(req,res)=>{
        const {user,text,messageCount}=req.body;
        mongoose.update
        Message.aggregate([{$match: {postId: 5}}, {$project: {upvotes: {$size: '$upvotes'}}}])

    })*/
var flag=true;

router.post('/',async(req,res)=>{
    //const {user,text,direction}=req.params;
    const user=req.query.user;
    const text=req.query.text;
    const direction=req.query.direction;
    console.log("printing req params",user,text,direction);
    const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
    //if user not found save new
   /* let username = await Message.findOne({ user:user });*/
   console.log("supdafsdfsdgfsgsdfsdfsf",Message);

      /* var firstMessage= new Message({
            user:user
            //textArray:[{text:text,direction:direction,id:1}]}

       })
        console.log("supper",firstMessage);*/
        var textmessage={
            text:text,
            direction:direction
        }
        let doc = await Message.findOneAndUpdate(
            { user: user },
             { user:user,$push:{textArray:textmessage}} ,
             {
                new: true,
                upsert: true 
              },
            function(err,result){
                if (err){
                    console.log(err);
                    return res.status(500).json({msg:'server error'});
                }
                else{
                    console.log(result);
                    return res.json(result);
                }// Make this update into an upsert
            });



           /* let doc = await Message.findOneAndUpdate(filter, update, {
                new: true,
                upsert: true 
              });

       /* firstMessage.save(function(err,result){
            if (err){
                console.log(err);
            }
            else{
                console.log(result)
                res.send(result)
            }
        })

       /* 

    Message.findOne({  user:user }, function (err, result) {
        if(err)
        {console.log('finding error')}
        
        if(result)
        {flag=true}
        else{flag=false}

    });
    console.log("flag value",flag);

    //console.log(username);
    if (flag==false)
    {
        var firstMessage= new Message({
            messages:{user:user,
            textArray:{text:text,direction:sender,id:1}}

        });
        firstMessage.save(function(err,result){
            if (err){
                console.log(err);
            }
            else{
                console.log(result)
            }
        })

    }
    else     //if user found then update

    {
        await Message.updateOne({ user: user }, {messages:{textArray:{text:text,sender:sender,id:2}}},(err,result)=>{ if (err){
            console.log(err);
        }
        else{
            console.log(result)
        }});
    }*/

   

})
 
router.get('/',async(req,res)=>{
    const user=req.query.user;
    //const user_id = req.query.id;
    const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }

        try{
            
        let doc = await Message.findOne({user:user});
        //console.log(doc.textArray);
        if(!doc)
        {
            return res.status(400).json({ msg: 'message not found' })
        }
        else
        {
           /* const newArray=(doc.textArray).map((item)=>{
               
                if((item.text)!='' && (item.text)!='undefined')
                {return {item} }
                

            })
         console.log("the new array:",newArray);*/

         /*const newArray = (doc.textArray).filter((item) => 
             item.text!='')
            ;*/
            const obj={
                array:doc.textArray
            }
        console.log("dgnsdlgnjsdggsdgklsgjbsngkjnsjlgsgsjgljslkgjslgjlsjgljslgjksjglksjgklsjlgkjslkgjklsjglsjgljslkgjsjgbigboy")
        console.log(obj)

        return res.json(obj);
        }
        }
        catch(err)
        {
            console.error(err.message);
            return res.status(500).json({ msg: 'Server error' });
        }

       // await Adventure.findOne({ country: 'Croatia' })

})

module.exports = router;
