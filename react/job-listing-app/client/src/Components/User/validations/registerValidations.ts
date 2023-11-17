import { UserItem } from "../stores/UserStore";

export const registerValidations = (registerData: Partial<UserItem>) => {
    const errors = new Set();
    const hasEmptyField = Object.values(registerData).some(value => value === "");
    const nonEqualPasswords = registerData.password !== registerData.rePassword;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const invalidEmail = registerData.email && !emailRegex.test(registerData.email);

    if (nonEqualPasswords) {
        errors.add("Password and repeat password don't match!");
    } else {
        errors.delete("Password and repeat password don't match!");
    }

    if (hasEmptyField) {
        errors.add("All fields must be filled");
    } else {
        errors.delete("All fields must be filled");
    }

    if (invalidEmail) {
        errors.add("Invalid email format");
      } else {
        errors.delete("Invalid email format");
      }


    return Array.from(errors)
}