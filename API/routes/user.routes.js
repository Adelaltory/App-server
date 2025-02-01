const exprees = require("express");
const { createUser, finduser, deleteuser, loginuser, updateUser } = require("../controllers/user.controllers");
const UserRouter = exprees.Router();


UserRouter.post("/creatUser", createUser);
UserRouter.post("/finduser", finduser );
UserRouter.post("/deleteuser", deleteuser );
UserRouter.post("/loginuser", loginuser );
UserRouter.post("/updateuser", updateUser );



module.exports = UserRouter;
