// src/presentation/routes.js
const express = require("express");
const quizController = require("./quizController");

const router = express.Router();

router.get("/api/quiz", quizController.getQuizQuestions);

module.exports = router;
