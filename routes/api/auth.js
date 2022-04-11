const express = require('express');
const router = express.Router();
//const bcrypt = require('bcryptjs');
//const auth = require('../../middleware/auth');
//const jwt = require('jsonwebtoken');
//const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../../models/Users');

router.post(
    '/',
    //check('email', 'Please include a valid email').isEmail(),
    //check('password', 'Password is required').exists(),
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
          return res.status(400).json({ errors: errors.array() });
        }
        console.log("supdafsdfsdgfsgsdfsdfsf",User);
        const {email,password}=req.body;
        
        var FirstTimer= new User({
            email:email,
            password:password        
        });
        
        FirstTimer.save(function(err,result){
            if (err){
                console.log(err);
            }
            else{
                console.log(result)
            }
        })
    }
)

module.exports = router;


