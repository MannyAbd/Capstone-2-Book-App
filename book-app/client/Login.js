import React, { useState } from "react";

const Login = ({login}) =>{
    const initialState = {
        username: "",
        password: ""
    }
  const [formData, setFormData] = useState(initialState)
  const handleSubmit = async(e)  => {
    e.preventDefault();
    const res = await login(formData);
    if (res.success){

      setFormData(initialState)
    }
  } 
  const handleChange = e => {
      const { name, value } = e.target;
      setFormData(data => ({
      ...data,
      [name]: value
      }))
  }
return (
      <div>
        <div>
          <h3>Log In</h3>
          <div>
            <div>
              <form onSubmit={handleSubmit}>
                <div>
                  <label>Username</label>
                  <input
                      name="username"
                      value={formData.username}
                      onChange={handleChange}
                      autoComplete="username"
                      required
                  />
                </div>
                <div>
                  <label>Password</label>
                  <input
                      type="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      autoComplete="current-password"
                      required
                  />
                </div>
                <button onSubmit={handleSubmit}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
)
}
export default Login;