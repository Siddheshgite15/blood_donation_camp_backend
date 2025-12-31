const Donor=require("../entities/donor");

const create=(data) =>{
    return Donor.create(data);
};

const findAll =() =>{
    return Donor.find().sort({created:-1});
};

module.exports={
    create,findAll
}