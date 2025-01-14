// src/application/quizService.js
const quizRepository = require("../domain/quizRepository");

class QuizService {
  async getAllQuizQuestions() {
    const questions = await quizRepository.getAllQuestions();
    return questions;
  }
}
module.exports = new QuizService();
