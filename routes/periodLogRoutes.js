import express from "express";
import * as periodLogController from "../controllers/periodLogController.js";

const router = express.Router();

router
  .route("/user/:userId/date/:date")
  .get(periodLogController.getPeriodLogByDate)
  .post(periodLogController.createPeriodLog)
  .put(periodLogController.updatePeriodLog)
  .delete(periodLogController.deletePeriodLog);

export default router;