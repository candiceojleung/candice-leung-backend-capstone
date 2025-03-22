import initKnex from "knex";
import configuration from "../knexfile.js";

const knex = initKnex(configuration);

// Fetch all articles
const getAllArticles = async (req, res) => {
  try {
    const articles = await knex("articles").select("*");
    res.json(articles || []);
  } catch (error) {
    console.error("Error fetching all articles:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Fetch a single article by ID
const getArticleById = async (req, res) => {
  try {
    const { id } = req.params;
    const article = await knex("articles").where({ id }).first();

    if (!article) return res.status(404).json({ error: "Article not found" });

    res.json(article);
  } catch (error) {
    console.error("Error fetching article by ID:", error);
    res.status(500).json({ error: "Server error" });
  }
};

// Fetch articles by category
const getArticlesByCategory = async (req, res) => {
  try {
    const { category } = req.params;
    const articles = await knex("articles").where({ category });

    res.json(articles || []);
  } catch (error) {
    console.error("Error fetching articles by category:", error);
    res.status(500).json({ error: "Server error" });
  }
};

export {
    getAllArticles,
    getArticleById,
    getArticlesByCategory,
}