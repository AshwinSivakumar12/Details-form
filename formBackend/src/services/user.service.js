const form = require("../models/users.model");

const formData = async (req, res) => {

  console.log(req.body);
  

    const createData = await form.create(req.body);
  return {
      success:true, message:"User details saved successfully", createData
    }
  }

module.exports = {formData} ;
