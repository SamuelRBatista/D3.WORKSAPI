// src/presentation/quizController.js
const quizService = require("../application/quizService");

class QuizController {
  async getQuizQuestions(req, res) {
    try {
      const questions = await quizService.getAllQuizQuestions();
      res.json(questions);
    } catch (error) {
      res.status(500).json({ error: "Failed to retrieve quiz questions" });
    }
  }
}

module.exports = new QuizController();
