const db = require("../data/dbConfig.js");

module.exports = {
  find,
  findById,
  findSteps,
  add
};

function find() {
  return db("schemes");
}

function findById(id) {
  return db("schemes").where({ id });
}

// function findSteps(id) {
//   return db("steps").where({ scheme_id: id });
// }

function findSteps(id) {
  return db("schemes")
    .innerJoin("steps", "schemes.id", "steps.scheme_id")
    .where({ scheme_id: id })
    .select("schemes.scheme_name", "steps.step_number", "steps.instructions");
}

function add(scheme) {
  return db("schemes")
    .insert(scheme, "id")
    .then(id => {
      return findById(...id);
    });
}
