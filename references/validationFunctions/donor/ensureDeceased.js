/**
 * If and only if a donor is deceased, then the cause of death must be provided.
 */
const validation = ($row, $field, $name) => 
    (function validate() {
        let result = {valid: true, message: "Ok"};
        const currField = typeof($field) === 'string' ? $field.trim().toLowerCase() : $field;
        const vitalStatus = $row.vital_status.trim().toLowerCase();
    
        if (!currField && vitalStatus === "deceased"){
            result = {valid: false, message: `${$name} must be provided when the donor's vital_status is deceased.`}
        }
        else if (currField && vitalStatus != "deceased"){
            result = {valid: false, message: `${$name} cannot be provided if the donor's vital_status is not deceased.`}
        }
        return result;
    })();


module.exports = validation;