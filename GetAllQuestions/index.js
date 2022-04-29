const questions = require("../questions");

module.exports = async function(context, req) {
  context.log("Request for all questions : ");

  context.res = {
    body: questions.map(q => {
      return {
        QUESTIONS: q.question,
        ANSWERS: q.incorrect_answers.concat([q.correct_answer]).sort()
      };
    })
  };
};
