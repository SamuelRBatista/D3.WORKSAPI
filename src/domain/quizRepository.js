const db = require("../infrastructure/database");

class QuizRepository {
  async getAllQuestions() {
    try {
      const [rows] = await db.execute("SELECT * FROM questions"); // Use db aqui
      return rows;  // Se as perguntas forem retornadas corretamente
    } catch (error) {
      console.error("Error in getAllQuestions:", error);
      throw new Error("Failed to retrieve questions from database");
    }
  }
}

module.exports = new QuizRepository();
