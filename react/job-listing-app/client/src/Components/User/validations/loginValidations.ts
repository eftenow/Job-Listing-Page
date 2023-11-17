import usersData from '../../../data/usersData.json';
import { User } from "../stores/AuthStore";

export const loginValidations = (loginData: Partial<User>) => {
    const errors = new Set();
    const hasEmptyField = Object.values(loginData).some(value => value === "");
    const user = usersData.find((userData) => userData.name === loginData.name);


    if (hasEmptyField) {
        errors.add("All fields must be filled");
    } else {
        errors.delete("All fields must be filled");
    }

    if (!user || user.password !== loginData.password) {
        errors.add("Invalid name or password");
    } else {
        errors.delete("Invalid name or password");
    }
    
    const errorsArray = Array.from(errors);

    return {errors: errorsArray, user}
}

