const loginController = (req,res)=>{
    res.render("LoginPage.ejs");
}
const loginPostController = (req,res)=>{
    res.send("This is a post Request");
}


module.exports = [loginController, loginPostController];