const validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  // making sure we are testing an empty string
  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  if (!validator.isEmail(data.email)) {
    errors.email = "email filed is required";
  }
  if (validator.isEmpty(data.password)) {
    errors.password = "password filed is required";
  }
  if (validator.isEmpty(data.email)) {
    errors.email = "email filed is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};
