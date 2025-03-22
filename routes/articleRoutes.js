import express from "express";
import * as articleController from "../controllers/articleController.js";

const router = express.Router();

router.route("/").get(articleController.getAllArticles);
router
  .route("/category/:category")
  .get(articleController.getArticlesByCategory);
router.route("/:id").get(articleController.getArticleById);

export default router;
