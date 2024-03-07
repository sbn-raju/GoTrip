const loginController = (req,res)=>{
    res.render("login.ejs");
}
const loginPostController = (req,res)=>{
    res.send("This is a post Request");
}


module.exports = [loginController, loginPostController];