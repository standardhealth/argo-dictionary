const patient = require('./patient.json');
const patient_vital_status = require('./patient_vital_status.json');
const patient_identifiable_information = require('./patient_identifiable_information.json');
const c19_condition = require('./c19_condition.json');
const allergy_intolerance = require('./allergy_intolerance.json');
const medication_administration = require('./medication_administration.json');
const smoking_status = require('./smoking_status.json');
const procedure = require('./procedure.json');

module.exports = [
  patient,
  patient_vital_status,
  patient_identifiable_information,
  c19_condition,
  medication_administration,
  allergy_intolerance,
  smoking_status,
  procedure
];
