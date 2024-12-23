import { isValidUsername, isValidEmail } from "6pp";

export const usernameValidator = (username) => {
  if (!isValidUsername(username))
    return { isValid: false, errorMessage: "Username is Invalid" };
};

export const useremailValidator = (useremail) => {
  if(!isValidEmail(useremail)) return { isValid: false, errorMessage: "UserEmail Is Invalid!", }
}
export const nameValidator = (name) => {
  const regex = /^[A-Za-z\s]*$/;
  if (!regex.test(name)) {
      return {
          isValid: false,
          errorMessage: "Name Is Invalid!",
      };
  }
  return { isValid: true };
};