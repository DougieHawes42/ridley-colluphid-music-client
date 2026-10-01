import axios from "axios";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";
import { signin } from "../../../redux/authSlice.js";

import "./style.scss";

import { AuthRoute } from "../../utils/routes.js";

const SignIn = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setError(null);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/user/signin`,
        {
          email: formData.email,
          password: formData.password,
        },
      );

      localStorage.setItem("token", response.data.token);

      dispatch(
        signin({ user: response.data.user, token: response.data.token }),
      );

      navigate(`${process.env.REACT_APP_PRIVATE_ROUTE}/dashboard`);
    } catch (error) {
      console.error("Sign in failed:", error);
      setError("Sign in failed. Please check your credentials and try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthRoute title="Sign In">
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <button type="submit" disabled={loading}>
          {loading ? "Signing In..." : "Sign In"}
        </button>
        {error && <p className="error">{error}</p>}
      </form>
    </AuthRoute>
  );
};

export default SignIn;
