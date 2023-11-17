import { Link } from "react-router-dom"

export const Login = () => {

    return (
        <section className="login-section">
            <h2 className="login-title">Login</h2>
            <form className="login-form">
                <label htmlFor="login-username" className="login-label">
                    Company name:
                </label>
                <input type="text" id="login-username" name="username" className="login-input" />

                <label htmlFor="password" className="login-label">
                    Password:
                </label>
                <input type="password" id="password" name="password" className="login-input" />

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