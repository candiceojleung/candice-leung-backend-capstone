import express from "express";
import * as userController from "../controllers/userController.js";

const router = express.Router();

router
  .route("/")
  .post(userController.createUser);

router
  .route("/user/:userId")
  .get(userController.getUser)
  .put(userController.updateUser)
  .delete(userController.deleteUser);

export default router;