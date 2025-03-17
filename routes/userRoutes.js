import express from "express";
import * as userController from "../controllers/userController.js";

const router = express.Router();

router
  .route("/")
  .post(userController.createUser);

router
  .route("/:id")
  .get(userController.getUser)
  .put(userController.updateUser)
  .delete(userController.deleteUser);

export default router;