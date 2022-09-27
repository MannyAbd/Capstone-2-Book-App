import React, { useState } from "react";
import { useHistory } from "react-router-dom";

const Login = ({login}) =>{
    const history = useHistory();
    const initialState = {
        username: "",
        email: ""
    }
    const [formData, setFormData] = useState(initialState)
    const handleChange = e => {
        const { name, value } = e.target;
        setFormData(data => ({
        ...data,
        [name]: value
        }))
    }
    const handleSubmit = async(e)  => {
    e.preventDefault();
    const res = await register(formData);
    if (res.success){
      history.push('/')
      setFormData(initialState)
    }
  }
}
export default Login;