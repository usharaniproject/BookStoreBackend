import User from '../mod/userModel.js';
import bcryptjs from 'bcryptjs';
export const signUp = async(req,res)=>{
    try{
         const {fullname,email,password}=req.body;
         const user=await User.findOne({fullname,email,password});
         if(user)
            {
                return res.status(201).json({message:"User already exits"});
            }
           // const hashPassword= await bcryptjs.hash(password,10);
            const createUser= new User({fullname,email,password}) 
         await   createUser.save();
            res.status(201).json({message:" User created Successfully",
                user:{
                    _id:createUser._id,
                    fullname:createUser.fullname,
                    email:createUser.email
                }
            });
    }catch(error)
    {
       console.log('Error:'+error.message);
       res.status(501).json({message:"Internal Server error"});
    }
};

export const login = async (req,res)=>{
    try{
        const {email,password}=req.body;
        const user= await User.findOne({email,password});
        const isMatch=await  bcryptjs.compare(password,user.password);
       
        if(!user && !isMatch){
            return res.status(400).json({message:"Invalid Username and Password"});
        }
        else{
            res.status(200).json({message:"Login Successfully",
            user:{
                _id:user._id,
                fullname:user.fullname,
                email:user.email,
                password:user.password
            }})
        }
    }
    catch(error)
    {
        console.log('Error'+error);
        res.status(501).json({message:"Internal Server Error"});
    }
}


