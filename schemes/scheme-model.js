const db = require("../data/dbConfig.js");

module.exports = {
  find
  // findById,
  // findSteps
};

function find() {
  return db("schemes");
}

// function findById() {
//   return db('schemes')
// }
