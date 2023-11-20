import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import { LoginProps } from "./stores/UserStore";
import { loginValidations } from "./validations/loginValidations";
import { UserLocalStorage, UserLoginData } from "./stores/AuthStore";

export const Login: React.FC<LoginProps> = ({ onLogin }) => {
    const [loginData, setLoginData] = useState<UserLoginData>({
        id: null,
        name: "",
        password: ""
    });
    const [loginErrors, setLoginErrors] = useState<string[]>([]);
    const navigate = useNavigate();

    const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginErrors([]);

        setLoginData((state) => {
            return {
                ...state,
                [e.target.name]: e.target.value
            };
        });
    };

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { errors, user } = loginValidations(loginData);

        if (errors.length > 0) {
            setLoginErrors(errors as string[]);
            return;
        }
        const { password, ...localStorageData } = user;
        
        onLogin(localStorageData as UserLocalStorage);
        navigate('/');
    }
    return (
        <section className="login-section">
            <h2 className="login-title">Login</h2>
            <form className="login-form" onSubmit={onSubmit} >
                <label htmlFor="name" className="login-label">
                    Company name:
                </label>
                <input type="text" id="name" name="name" className="login-input" onChange={onChange} value={loginData.name} />

                <label htmlFor="password" className="login-label">
                    Password:
                </label>
                <input type="password" id="password" name="password" className="login-input" onChange={onChange} value={loginData.password} />

                {loginErrors.length > 0 && (
                    <div>
                        <ul className="errors">
                            {loginErrors.map((error, i) => (
                                <li className="error-msg" key={i}>{error}</li>
                            ))}
                        </ul>
                    </div>)}

                <input type="submit" value="Login" className="login-button" />

                <p id="login-error" className="login-error"></p>
                <p className="login-register-text">
                    Don't have an account?<br />
                    <Link to="/register" className="login-register-link">
                        Register here
                    </Link>
                </p>
            </form>
        </section>

    )
}