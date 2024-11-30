const db = require("../models")

const loginData = db.loginData;

//add user for register page
const addUser = async (req,res) =>{
    if(!req.body.email){
        res.status(400).send({
            message:"please enter the email",
        });
        return;
    }

    let userdetails = {
        id : req.body.id,
        email : req.body.email,
        password : req.body.password
    };

    try{
        const user = await loginData.create(userdetails); 
        res.status(200).send(user);
        console.log("user added successfuly");
    }catch(err){
        res.status(500).send({
            message: "error occured in user add"
    });
    }
};


//get user details using email to verify login
const userData = async(req, res)=>{
    const email =  req.params.email;
    const details = await loginData.findOne({where:{email:email}});
    res.status(200).send(details);

}

module.exports = {addUser, userData};
