import React, { useState } from "react";
import Alert from "./common/Alert";

function Register({ register }) {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    email: "",
  });
  const [formErrors, setFormErrors] = useState([]);
  const [success, setSuccess] = useState(false);
  const [user, setUser] = useState('');
  const [pwd, setPwd] = useState('');
  console.debug(
      "SignupForm",
      "register=", typeof register,
      "formData=", formData,
      "formErrors=", formErrors,
  );


  async function handleSubmit(evt) {
    evt.preventDefault();
          console.log(formData.username)
            setSuccess(true);
  }

  function handleChange(evt) {
    const { name, value } = evt.target;
    setFormData(data => ({ ...data, [name]: value }));
  }

  return (
    <>
            {success ? (
                <section>
                    <h1>Success!</h1>
                    <p>
                        <a href="#">Sign In</a>
                    </p>
                </section>
            ) : (
      <div>
        <div>
          <h2 >Sign Up</h2>
          <div>
            <div>
              <form onSubmit={handleSubmit}>
                <div>
                  <label>Username</label>
                  <input
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Password</label>
                  <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                  />
                </div>
                <div>
                  <label>Email</label>
                  <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                  />
                </div>
                {formErrors.length
                    ? <Alert type="danger" messages={formErrors} />
                    : null
                }
                <button
                    type="submit"
                    onSubmit={handleSubmit}
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
                  )}
        </>
  );

}

export default Register;