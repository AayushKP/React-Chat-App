const { User } = require("../model/user.model.js");
const { asyncHandler } = require("../utils/asynchandler.js");
const { ApiError } = require("../utils/apiError.js");
const { ApiResponse } = require("../utils/apiResponse.js");

const userProfile = asyncHandler(async (req, res) => {
    const user = await User.findById(req.body.user._id);
    res.status(201).json(
        new ApiResponse(200,user,"User Details")
    )
})

const userSignUp = asyncHandler( async (req, res) => {
    const { email, username, password } = req.body;

    if(
        [email,username,password].some((field) => field?.trim() === "")
    ){
        throw new ApiError(400,"All fields are required");
    }

    const existedUser = await User.findOne({
        $or: [{ username },{ email }]
    })

    if(existedUser){
        throw new ApiError(409,"User already exist");
    }

    const user = await User.create({
        email,
        username,
        password
    })

    const createdUser = await User.findById(user._id).select(
        "-password "
    )
    

    if(!createdUser){
        throw new ApiError(500,"Something went wrong during registration the User")
    }
    const token = await user.generateToken();

    return res.status(201).json(
        new ApiResponse(200,{
            createdUser,token
        },"User Created Successfully !")
    )
})

const userLogin = asyncHandler(async (req, res) => {
    const {email,username,password} = req.body;


    if(!(username || email)){
        throw new ApiError(400,"username or email requires")
    }

    const user = await User.findOne({
        $or: [{username}, {email}]
    })

    if(!user){
        throw new ApiError(404,"User does not exist");
    }

    const isPasswordCorrect = await user.validatePassword(password);

    if(!isPasswordCorrect){
        throw new ApiError(401,"Invalid User credential")
    }

    const token = await user.generateToken();

    const loggedInUser = await User.findOne(user._id).select("-password")


    return res.status(200).json(
        new ApiResponse(
            200,
            {
                user: loggedInUser,token
            },
            "User logged In Successfuly"
        )
    )
})

const userAllChats = asyncHandler(async (req, res) => {
    const userId = req.body.user._id;
    const user = await User.findById(userId).populate("friends");

    if(!user){
        throw new ApiError(404,"User Does not Exist");
    }

    
    res.status(201).json(
        new ApiResponse(200,user,"User All Chats")
    );
})

const fetchUser = asyncHandler(async (req, res) => {
    const user = await User.findById(req.body.user._id);
    if(!user){
        throw new ApiError("User does not exist")
    }

    const excludeUserIds = user.friends.concat(user._id);
    console.log(excludeUserIds);

    const users = await User.aggregate([
        { $match: { _id: { $nin: excludeUserIds } } }, 
        { $sample: { size: 5 } }
    ]);
    res.status(201).json(
        new ApiResponse(200,users,"Fetching user from database")
    )
})

module.exports = {
    userSignUp,
    userLogin,
    userProfile,
    userAllChats,
    fetchUser
}