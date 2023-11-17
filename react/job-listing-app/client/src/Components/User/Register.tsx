import { useState } from "react"
import { RegisterProps, UserItem } from "./stores/UserStore";
import { registerValidations } from "./validations/registerValidations";
import { useNavigate } from "react-router-dom";

export const Register: React.FC<RegisterProps> = ({ userStore }) => {
    const [registerData, setRegisterData] = useState<Partial<UserItem>>({
        name: "",
        email: "",
        logo: "",
        password: "",
        rePassword: ""
    });
    const [registerErrors, setRegisterErrors] = useState<string[]>([]);
    const navigate = useNavigate();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRegisterErrors([]);

        setRegisterData((state) => {
            return {
                ...state,
                [e.target.name]: e.target.value
            };
        });
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const errors = registerValidations(registerData);

        if (errors.length > 0) {
            setRegisterErrors(errors as string[]);
            return;
        }
        
        userStore.registerUser(registerData);
        navigate('/');
    }


    return (
        <section>
            <h2 className="register-title">Register</h2>
            <form noValidate className="register-form" onSubmit={onSubmit}>
                <label htmlFor="name" className="register-label">
                    Company name:
                </label>
                <input type="text" id="name" name="name" className="register-input" value={registerData.name} onChange={onChange} />

                <label htmlFor="email" className="register-label">
                    Company email:
                </label>
                <input type="email" id="email" name="email" className="register-input" value={registerData.email} onChange={onChange} />

                <label htmlFor="logo" className="register-label">
                    Company logo:
                </label>
                <input type="text" id="logo" name="logo" className="register-input" value={registerData.logo} onChange={onChange} />

                <label htmlFor="password" className="register-label">
                    Password:
                </label>
                <input type="password" id="password" name="password" className="register-input" value={registerData.password} onChange={onChange} />

                <label htmlFor="rePassword" className="register-label">
                    Repeat password:
                </label>
                <input type="password" id="rePassword" name="rePassword" className="register-input" value={registerData.rePassword} onChange={onChange} />

                {registerErrors.length > 0 && (
                    <div>
                        <ul className="errors">
                            {registerErrors.map((error, i) => (
                                <li className="error-msg" key={i}>{error}</li>
                            ))}
                        </ul>
                    </div>)}

                <button type="submit" className="register-button"> Create account </button>
                <p className="register-register-text">
                    Already have an account?<br />
                    <a href="/login" className="register-login-link">
                        Login here
                    </a>
                </p>
            </form>
        </section >
    )
}