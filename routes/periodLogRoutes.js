import express from 'express';
import {
  createPeriodLog,
  getPeriodLogByDate,
  updatePeriodLog,
  deletePeriodLog
} from '../controllers/periodLogController.js';

const router = express.Router();

// POST /api/period-logs/user/:userId/date/:date
router.post('/user/:userId/date/:date', createPeriodLog);

// GET /api/period-logs/user/:userId/date/:date
router.get('/user/:userId/date/:date', getPeriodLogByDate);

// PUT /api/period-logs/user/:userId/date/:date
router.put('/user/:userId/date/:date', updatePeriodLog);

// DELETE /api/period-logs/user/:userId/date/:date
router.delete('/user/:userId/date/:date', deletePeriodLog);

export default router;