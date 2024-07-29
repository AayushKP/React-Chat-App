const jwt = require('jsonwebtoken');
const { ApiError }  = require('./apiError.js');

//middleware which verify the admin credential with taking accessToken from cookies
const authenticateUserJwt = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if(authHeader){
        const token = authHeader.split(' ')[1];
        jwt.verify(token, process.env.AUTH_SECRET, (err, user) => {
            if(err){
                throw new ApiError(403,"Authorization Failed !!!")
            }
            req.body.user = user;
            next();
        });
    } else{
        throw new ApiError(401,"Authorization Header not Found")
    }
};

module.exports = authenticateUserJwt