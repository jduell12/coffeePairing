const db = require("../../db/dbConfig");
const TABLE_NAME = "femmegineers";

function addFemme(info) {
  return db(TABLE_NAME).insert(info, "femme_id");
}


function editFemme(femme_id, femme_edits) {
  return db(TABLE_NAME).where({ femme_id }).update(femme_edits);
}

function getActiveFemme() {
  return db(TABLE_NAME).where({active: true}).orderBy('name');
}

function getAllFemme() {
  return db(TABLE_NAME).orderBy('name');
}

function deleteFemme(femme_id) {
  return db(TABLE_NAME).del().where({ femme_id });
}

//returns femme object corresponding to the given filter and filter value
async function getFemmeBy(filterName, filterValue) {
  switch (filterName) {
    case "femme_id":
      return db(TABLE_NAME).where({ femme_id: filterValue });
    case "active":
      return db(TABLE_NAME).where({ active: filterValue });
    case "department_id":
      return db(TABLE_NAME).where({ department_id: filterValue });
    case "name":
      return db(TABLE_NAME).where({ name: filterValue });
    default:
      return false;
  }
}

module.exports = {
  addFemme,
  editFemme,
  getActiveFemme,
  getAllFemme,
  deleteFemme,
  getFemmeBy,
};