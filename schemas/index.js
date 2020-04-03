const patient = require('./patient.json');
const patient_vital_status = require('./patient_vital_status.json');
const patient_identifiable_information = require('./patient_identifiable_information.json');
const c19_condition = require('./c19_condition.json');
const allergy_intolerance = require('./allergy_intolerance.json')

module.exports = [
  patient,
  patient_vital_status,
  patient_identifiable_information,
  c19_condition,
  allergy_intolerance
];
