import jwt from 'jsonwebtoken';


const generateToken=(res,userId)=>{
    const token = jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:'30d'})

    res.cookie('userJwt',token,{
        httpOnly : true,
        secure : process.env.NODE_ENV !== 'devolopment',
        sameSite : 'strict',
        maxAge : 30 * 24 * 60 * 60 * 1000 // it calculates in seconds so the seconds converting to 30 days
    })
}

export default generateToken;