import initKnex from "knex";
import configuration from "../knexfile.js";

const knex = initKnex(configuration);

const getFullLogData = async (logId) => {
  const log = await knex("period_logs").where({ id: logId }).first();

  const physicalSymptoms = await knex("physical_symptoms")
    .join(
      "period_log_physical_symptoms",
      "physical_symptoms.id",
      "physical_symptom_id" 
    )
    .where("period_log_id", logId)
    .select("physical_symptoms.name");

  const mentalConditions = await knex("mental_conditions")
    .join(
      "period_log_mental_conditions",
      "mental_conditions.id",
      "mental_condition_id"
    )
    .where("period_log_id", logId)
    .select("mental_conditions.name");

  return {
    ...log,
    physicalSymptoms: physicalSymptoms.map((s) => s.name),
    mentalConditions: mentalConditions.map((m) => m.name),
  };
};

const getAllPeriodLogs = async (req, res) => {
  try {
    const { userId } = req.params;
    const logs = await knex("period_logs").where({ user_id: userId });
    
    const fullLogs = await Promise.all(logs.map(log => getFullLogData(log.id)));
    
    res.json(fullLogs || []);
  } catch (error) {
    console.error("Error fetching all period logs:", error);
    res.status(500).json({ error: "Server error" });
  }
};
const createPeriodLog = async (req, res) => {
  try {
    const { userId, date } = req.params;
    const { has_period, flow, physicalSymptoms, mentalConditions } = req.body;

    const existingLog = await knex("period_logs")
      .where({ user_id: userId, date })
      .first();

    if (existingLog) {
      return res
        .status(400)
        .json({ error: "Log already exists for this date" });
    }

    const [newLogId] = await knex("period_logs").insert({
      user_id: userId,
      date,
      has_period,
      flow,
    });

    if (physicalSymptoms && physicalSymptoms.length > 0) {
      await knex("period_log_physical_symptoms").insert(
        physicalSymptoms.map((symptomId) => ({
          period_log_id: newLogId,
          physical_symptom_id: symptomId,
        }))
      );
    }

    if (mentalConditions && mentalConditions.length > 0) {
      await knex("period_log_mental_conditions").insert(
        mentalConditions.map((conditionId) => ({
          period_log_id: newLogId,
          mental_condition_id: conditionId,
        }))
      );
    }

    res.status(201).json(await getFullLogData(newLogId));
  } catch (error) {
    console.error("Error creating period log:", error);
    res.status(500).json({ error: "Server error" });
  }
};


const getPeriodLogByDate = async (req, res) => {
  try {
    const { userId, date } = req.params;

    // Fetch the period log for the given date
    const log = await knex("period_logs")
      .where({ user_id: userId, date })
      .first();

    // Fetch all possible physical and mental symptoms
    const allPhysicalSymptoms = await knex("physical_symptoms").select("*");
    const allMentalConditions = await knex("mental_conditions").select("*");

    if (!log) {
      // If no log exists, return all symptoms along with an empty log
      return res.json({
        log: null,
        allPhysicalSymptoms,
        allMentalConditions,
      });
    }

    // If a log exists, fetch its associated symptoms
    const fullLogData = await getFullLogData(log.id);

    res.json({
      log: fullLogData,
      allPhysicalSymptoms,
      allMentalConditions,
    });
  } catch (error) {
    console.error("Error fetching period log:", error);
    res.status(500).json({ error: "Server error" });
  }
};

const updatePeriodLog = async (req, res) => {
  try {
    const { userId, date } = req.params;
    const { has_period, flow, physicalSymptoms, mentalConditions } = req.body;

    const log = await knex("period_logs")
      .where({ user_id: userId, date })
      .first();

    if (!log) return res.status(404).json({ error: "Log not found" });

    await knex("period_logs")
      .where({ id: log.id })
      .update({
        has_period,
        flow,
        updated_at: knex.raw("CURRENT_TIMESTAMP"),
      });

    await knex("period_log_physical_symptoms")
      .where({ period_log_id: log.id })
      .del();

    if (physicalSymptoms?.length > 0) {
      await knex("period_log_physical_symptoms").insert(
        physicalSymptoms.map((symptomId) => ({
          period_log_id: log.id,
          physical_symptom_id: symptomId,
        }))
      );
    }

    await knex("period_log_mental_conditions")
      .where({ period_log_id: log.id })
      .del();

    if (mentalConditions?.length > 0) {
      await knex("period_log_mental_conditions").insert(
        mentalConditions.map((conditionId) => ({
          period_log_id: log.id,
          mental_condition_id: conditionId,
        }))
      );
    }

    res.json(await getFullLogData(log.id));
  } catch (error) {
    console.error("Error updating period log:", error);
    res.status(500).json({ error: "Server error" });
  }
};

const deletePeriodLog = async (req, res) => {
  try {
    const { userId, date } = req.params;

    const log = await knex("period_logs")
      .where({ user_id: userId, date })
      .first();

    if (!log) return res.status(404).json({ error: "Log not found" });

    await knex("period_log_physical_symptoms")
      .where({ period_log_id: log.id })
      .del();

    await knex("period_log_mental_conditions")
      .where({ period_log_id: log.id })
      .del();

    await knex("period_logs").where({ id: log.id }).del();

    res.status(204).end();
  } catch (error) {
    console.error("Error deleting period log:", error);
    res.status(500).json({ error: "Server error" });
  }
};


export {
  getAllPeriodLogs,
  createPeriodLog,
  getPeriodLogByDate,
  updatePeriodLog,
  deletePeriodLog,
};
