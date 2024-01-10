// query params
// app.get("/users", (req, res) => {
//   console.log(req.query.startsWith);
//   const items = users.filter((item) => {
//     return item.name.startsWith(req.query.startsWith);
//   });
//   res.send(items);
// });

// path params
// app.get("/users/:id", (req, res) => {
//   const item = users.find((item) => {
//     if (item.id === parseInt(req.params.id)) {
//       return item;
//     }
//   });
//   res.send(item);
// });

const users = require("../../configs/users.json");

const getAllUsers = (req, res) => {
  try {
    res.send(users);
  } catch (err) {
    console.log(err);
  }
};

const getUserById = (req, res) => {
  try {
    const user = users.find((item) => {
      if (item.id === parseInt(req.params.id)) {
        return item;
      }
    });
    res.send(user);
  } catch (err) {
    console.log(err);
  }
};

const deleteUserById = (req, res) => {
  try {
    const filteredUsers = users.filter(
      (item) => item.id !== parseInt(req.params.id)
    );
    res.send(filteredUsers);
  } catch (err) {
    console.log(err);
  }
};

const updateUserById = (req, res) => {
  try {
    const updatedUsers = users.map((item) => {
      if (item.id === parseInt(req.params.id)) {
        return {...item, ...req.body};
      } else {
        return item;
      }
    });
    res.send(updatedUsers);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { getAllUsers, getUserById, deleteUserById, updateUserById };
