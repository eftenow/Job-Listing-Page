import usersData from '../../../data/usersData.json';
import { UserLoginData } from "../stores/AuthStore";

export const loginValidations = (loginData: UserLoginData) => {
    const errors = new Set();
    const hasEmptyField = Object.values(loginData).some(value => value === "");
    const user = usersData.find((userData) => userData.name === loginData.name);
    // const userLogin = {
    //     id: user?.id,
    //     name: user?.name,
    //     password: user?.password,
    // }


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

