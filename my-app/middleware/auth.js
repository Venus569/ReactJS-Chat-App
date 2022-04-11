const { header } = require('express/lib/request');
const req = require('jsonwebtoken');
const token='eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InNpbmhhZGVkaXR5YTk3QGdtYWlsLmNvbSIsInBhc3N3b3JkIjoiZW5nY2pvZ2pkIn0.uWrV_OcfzNybG4zUJW_YkMbcwejL6lmOHOpq-f_4yOc';
const secret="BITconnect"

const auth=(req,res,next)=>{
try{
const token = req.header('x-auth-token');
}
catch(err)
{
if(!token)
console.error(err.message);
return res.status(401).json({ msg: err.message });
}
jwt.verify(token, secret, (error, decoded) => {
    if (error) {
      return res.status(401).json({ msg: 'Token is not valid' });
    } else {
      req.user = decoded.user;
      next();
    }
  });
next()




verify

}

module.exports=auth();


module.exports = function (req, res, next) {
  // Get token from header
  const token = req.header('x-auth-token');

  // Check if not token
  if (!token) {
    return res.status(401).json({ msg: 'No token, authorization denied' });
  }

  // Verify token
  try {
    //function call
    jwt.verify(token, config.get('jwtSecret'), (error, decoded) => {
      if (error) {
        return res.status(401).json({ msg: 'Token is not valid' });
      } else {
        req.user = decoded.user;
        next();
      }
    });
  } catch (err) {
    console.error('something wrong with auth middleware');
    res.status(500).json({ msg: 'Server Error' });
  }
};
