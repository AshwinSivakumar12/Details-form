const catchAsync = require("../utils/catchAsync");
const formService = require("../services/user.service")

const registerData = catchAsync(async (req, res) => {
  const data = await formService.formData(req);
  res.status(201).send(data);
});

module.exports = {
  registerData
};
