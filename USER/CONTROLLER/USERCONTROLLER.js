const usermodel = require('. ./models/userModel');

const createuser = (req,res) => {
  const newUser = req.body;
  res.send('Usuário ${newUser.name} criado com suesso');
};

module.exports = {createUser};
