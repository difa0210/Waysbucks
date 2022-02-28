// import model here
const { user } = require("../../models");

// exports.addUsers = async (req, res) => {
//   // code here
//   try {
//     await user.create(req.body);
//     res.send({
//       status: "success",
//       message: "add user success",
//     });
//   } catch (error) {
//     console.log(error);
//     res.send({
//       status: "failed",
//       message: "server error",
//     });
//   }
// };

exports.getUsers = async (req, res) => {
  try {
    const users = await user.findAll({
      attributes: {
        exclude: ["password", "createdAt", "updatedAt"],
      },
    });

    res.send({
      status: "success",
      data: {
        users,
      },
    });
  } catch (error) {
    console.log(error);
    res.send({
      status: "failed",
      message: "Server Error",
    });
  }
};

// exports.getUser = async (req, res) => {
//   try {
//     const { id } = req.params;

//     const data = await user.findAll({
//       where: {
//         id,
//       },
//       attributes: {
//         exclude: ["createdAt", "updatedAt"],
//       },
//     });

//     res.send({
//       status: "success",
//       data: {
//         user: data,
//       },
//     });
//   } catch (error) {
//     console.log(error);
//     res.send({
//       status: "failed",
//       message: "Server Error",
//     });
//   }
// };

// exports.updateUser = async (req, res) => {
//   try {
//     const { id } = req.params;

//     await user.update(req.body, {
//       where: {
//         id,
//       },
//     });

//     res.send({
//       status: "success",
//       message: `Update user id: ${id} finished`,
//       data: req.body,
//     });
//   } catch (error) {
//     console.log(error);
//     res.send({
//       status: "failed",
//       message: "Server Error",
//     });
//   }
// };

exports.deleteUser = async (req, res) => {
  // code here
  try {
    const { id } = req.params;
    await user.destroy({
      where: {
        id,
      },
    });
  } catch (err) {
    console.log(err);
  }
};