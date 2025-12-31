const donorRepo=require("../repository/donorRepo")

//validates contact number
function isValidContact(number){
    return number.length===10 && !isNaN(number);
}

function isValidBlood(group){
    const valid_grp=["A+","A-","B+","B-","AB+","AB-","O+","O-"];
    return valid_grp.includes(group);
}

// register new user
const registerDonor= async(data) =>{
    if(!isValidContact(data.contact)){
        throw new Error("Contact number is not valid!");
    }
    if(!isValidBlood(data.bloodGroup)){
        throw new Error("Enter valid Blood Group!");
    }
    if(data.age<18){
        throw new Error("Age must be 18 or above it.");
    }

    return donorRepo.create(data);  //use .create() from repository layer
};

const getAllDonor= async() =>{
    return donorRepo.findAll();
};

module.exports={
    registerDonor,getAllDonor
}