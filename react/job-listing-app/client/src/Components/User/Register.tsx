export const Register = () => {

    return (
        <section>
            <h2 className="register-title">Register</h2>
            <form className="register-form">
                <label htmlFor="name" className="register-label">
                    Company name:
                </label>
                <input type="text" id="name" name="name" className="register-input" />

                <label htmlFor="email" className="register-label">
                    Company email:
                </label>
                <input type="email" id="email" name="email" className="register-input" />

                <label htmlFor="logo" className="register-label">
                    Company logo:
                </label>
                <input type="text" id="logo" name="logo" className="register-input" />

                <label htmlFor="password" className="register-label">
                    Password:
                </label>
                <input type="password" id="password" name="password" className="register-input" />

                <label htmlFor="rePassword" className="register-label">
                    Repeat password:
                </label>
                <input type="password" id="rePassword" name="rePassword" className="register-input" />

                <button type="submit" className="register-button" disabled>
                    Create account
                </button>
                <p className="register-register-text">
                    Already have an account?<br />
                    <a href="/login" className="register-login-link">
                        Login here
                    </a>
                </p>
            </form>
        </section>
    )
}