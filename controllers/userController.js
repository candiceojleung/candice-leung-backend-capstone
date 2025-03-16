import initKnex from "knex";
import configuration from "../knexfile.js";

const knex = initKnex(configuration);

export const createUser = async (req, res, next) => {
  try {
    const [userId] = await knex('users').insert({
      name: req.body.name,
      email: req.body.email
    });
    
    const newUser = await knex('users').where({ id: userId }).first();
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
};

export const getUser = async (req, res, next) => {
  try {
    const user = await knex('users')
      .where({ id: req.params.id })
      .first();

    user ? res.json(user) : res.status(404).json({ error: 'User not found' });
  } catch (error) {
    next(error);
  }
};

export const updateUser = async (req, res, next) => {
  try {
    const updatedCount = await knex('users')
      .where({ id: req.params.id })
      .update({
        name: req.body.name,
        email: req.body.email,
        updated_at: knex.fn.now()
      });

    updatedCount 
      ? res.json(await knex('users').where({ id: req.params.id }).first())
      : res.status(404).json({ error: 'User not found' });
  } catch (error) {
    next(error);
  }
};

export const deleteUser = async (req, res, next) => {
  try {
    const deletedCount = await knex('users')
      .where({ id: req.params.id })
      .del();

    deletedCount 
      ? res.status(204).end() 
      : res.status(404).json({ error: 'User not found' });
  } catch (error) {
    next(error);
  }
};