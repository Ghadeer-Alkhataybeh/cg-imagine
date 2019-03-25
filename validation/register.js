const validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateLoginInput(data) {
  let errors = {};

  // making sure we are testing an empty string
  data.name = !isEmpty(data.name) ? data.name : "";
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";
  data.password2 = !isEmpty(data.password2) ? data.password2 : ""; // confirm password

  if (!validator.isLength(data.name, { min: 2, max: 20 })) {
    errors.name = "name must be between 2 and 20 charcters";
  }
  if (validator.isEmpty(data.name)) {
    errors.name = "Name filed is required";
  }
  if (validator.isEmpty(data.email)) {
    errors.email = "email filed is required";
  }
  if (!validator.isEmail(data.email)) {
    errors.email = "email filed is required";
  }
  if (validator.isEmpty(data.password)) {
    errors.password = "password filed is required";
  }

  if (!validator.isLength(data.password, { min: 6, max: 20 })) {
    errors.password = "password should be at least 6 characters";
  }

  if (validator.isEmpty(data.password2)) {
    errors.password2 = "Confirm password required";
  }

  if (!validator.equals(data.password, data.password2)) {
    errors.password2 = "Password is not matching";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
