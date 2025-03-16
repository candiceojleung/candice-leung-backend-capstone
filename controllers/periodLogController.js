// Helper function to get full log data
const getFullLogData = async (logId) => {
    const log = await knex('period_logs').where({ id: logId }).first();
    
    const physicalSymptoms = await knex('physical_symptoms')
      .join('period_log_physical_symptoms', 'physical_symptoms.id', 'physical_symptom_id')
      .where('period_log_id', logId)
      .select('physical_symptoms.name');
  
    const mentalConditions = await knex('mental_conditions')
      .join('period_log_mental_conditions', 'mental_conditions.id', 'mental_condition_id')
      .where('period_log_id', logId)
      .select('mental_conditions.name');
  
    return {
      ...log,
      physicalSymptoms: physicalSymptoms.map(s => s.name),
      mentalConditions: mentalConditions.map(m => m.name)
    };
  };
   
  // Create new period log
  export const createPeriodLog = async (req, res) => {
    try {
      const { userId, date } = req.params;
      const { has_period, flow, physicalSymptoms, mentalConditions } = req.body;
  
      // Check for existing log
      const existingLog = await knex('period_logs')
        .where({ user_id: userId, date })
        .first();
  
      if (existingLog) {
        return res.status(400).json({ error: 'Log already exists for this date' });
      }
  
      // Insert new log
      const [newLogId] = await knex('period_logs').insert({
        user_id: userId,
        date,
        has_period,
        flow
      });
  
      // Insert physical symptoms
      if (physicalSymptoms && physicalSymptoms.length > 0) {
        await knex('period_log_physical_symptoms').insert(
          physicalSymptoms.map(symptomId => ({
            period_log_id: newLogId,
            physical_symptom_id: symptomId
          }))
        );
      }
  
      // Insert mental conditions
      if (mentalConditions && mentalConditions.length > 0) {
        await knex('period_log_mental_conditions').insert(
          mentalConditions.map(conditionId => ({
            period_log_id: newLogId,
            mental_condition_id: conditionId
          }))
        );
      }
  
      res.status(201).json(await getFullLogData(newLogId));
    } catch (error) {
      console.error('Error creating period log:', error);
      res.status(500).json({ error: 'Server error' });
    }
  };
  
  // Get log by date
  export const getPeriodLogByDate = async (req, res) => {
    try {
      const { userId, date } = req.params;
      
      const log = await knex('period_logs')
        .where({ user_id: userId, date })
        .first();
  
      if (!log) return res.status(404).json({ error: 'Log not found' });
  
      res.json(await getFullLogData(log.id));
    } catch (error) {
      console.error('Error fetching period log:', error);
      res.status(500).json({ error: 'Server error' });
    }
  };
  
  // Update existing log
  export const updatePeriodLog = async (req, res) => {
    try {
      const { userId, date } = req.params;
      const { has_period, flow, physicalSymptoms, mentalConditions } = req.body;
  
      // Find existing log
      const log = await knex('period_logs')
        .where({ user_id: userId, date })
        .first();
  
      if (!log) return res.status(404).json({ error: 'Log not found' });
  
      // Update main log
      await knex('period_logs')
        .where({ id: log.id })
        .update({
          has_period,
          flow,
          updated_at: knex.raw('CURRENT_TIMESTAMP')
        });
  
      // Update physical symptoms
      await knex('period_log_physical_symptoms')
        .where({ period_log_id: log.id })
        .del();
  
      if (physicalSymptoms?.length > 0) {
        await knex('period_log_physical_symptoms').insert(
          physicalSymptoms.map(symptomId => ({
            period_log_id: log.id,
            physical_symptom_id: symptomId
          }))
        );
      }
  
      // Update mental conditions
      await knex('period_log_mental_conditions')
        .where({ period_log_id: log.id })
        .del();
  
      if (mentalConditions?.length > 0) {
        await knex('period_log_mental_conditions').insert(
          mentalConditions.map(conditionId => ({
            period_log_id: log.id,
            mental_condition_id: conditionId
          }))
        );
      }
  
      res.json(await getFullLogData(log.id));
    } catch (error) {
      console.error('Error updating period log:', error);
      res.status(500).json({ error: 'Server error' });
    }
  };
  
  // Delete log
  export const deletePeriodLog = async (req, res) => {
    try {
      const { userId, date } = req.params;
  
      const log = await knex('period_logs')
        .where({ user_id: userId, date })
        .first();
  
      if (!log) return res.status(404).json({ error: 'Log not found' });
  
      // Delete associations first
      await knex('period_log_physical_symptoms')
        .where({ period_log_id: log.id })
        .del();
  
      await knex('period_log_mental_conditions')
        .where({ period_log_id: log.id })
        .del();
  
      // Delete main log
      await knex('period_logs')
        .where({ id: log.id })
        .del();
  
      res.status(204).end();
    } catch (error) {
      console.error('Error deleting period log:', error);
      res.status(500).json({ error: 'Server error' });
    }
  };