/**
 * Enforces a required field if disease status at followup is progression or relapse
 * @param {object} $row 
 * @param {string} $field 
 * @param {string} $name 
 */
const validation = ($row, $field, $name) => 
    (function validate() {
        let result = {valid: true, message: "Ok"};

        /* required field, cannot be null */
        const diseaseStatus = $row.disease_status_at_followup.trim().toLowerCase();

        const isRequired = diseaseStatus.match(/(progression)$/);

        // checks for a string just consisting of whitespace
        const checkforEmpty = (entry) => {return /^\s+$/g.test(decodeURI(entry).replace(/^"(.*)"$/, '$1'))};

        if (isRequired && (!$field || checkforEmpty($field))){
            result = {valid: false, message: `'${$name}' is a required field if 'disease_status_at_followup' is of type 'progression'.` }
        }

        return result;
    })();

module.exports = validation;