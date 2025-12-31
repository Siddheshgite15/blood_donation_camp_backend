const donorServices=require("../services/donorServices");

const createDonor=async(req,res) =>{
    try{
        const donor=await donorServices.registerDonor(req.body);
        res.status(201).json({success:true,data:donor});
    }catch(err){
        res.status(400).json({success:false,message:err.message});
    }
};

const getDonors= async(req,res) =>{
    try{
        const allDonor=await donorServices.getAllDonor();
        res.status(200).json({success:true,data:allDonor});
    }catch(err){
        res.status(500).json({success:false,message:"Server Error!"});
    }
};

module.exports={
    createDonor,getDonors
}