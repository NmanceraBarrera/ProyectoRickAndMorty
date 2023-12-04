const users = require("../utils/users");

module.exports = (req, res) => {
  const { email, password } = req.query;
  let access = false;

  users.forEach((user) => {
    if (user.email === email && user.password === password) access = true;
  });
  res.status(200).json({ access: true });
};

// function login(req, res) {
//   let { email, password } = req.query;

//   let verificationUser = (users.find = (user) =>
//     user.email === email && user.password === password);

//   if (!verificationUser) {
//     res.status(400).json({ access: false });
//   }
//   res.status(200).json({ access: true });
// }
