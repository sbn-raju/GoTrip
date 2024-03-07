const signupController = (req,res)=>{
    res.render("signup.ejs");
}

const signupControllerPost = (req,res)=>{
    res.send("this is signup post");
}

module.exports = [signupController, signupControllerPost]; 