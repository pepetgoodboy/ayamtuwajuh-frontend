import React, { useContext, useEffect, useState } from "react";
import Input from "../../components/Input/Input";
import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import Form from "../../components/Form/Form";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const { url, setIsAuthenticated, setUserRole } = useContext(StoreContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    try {
      const response = await axios.post(
        `${url}/api/user/login`,
        {
          email,
          password,
        },
        { withCredentials: true }
      );

      if (response.data.success) {
        if (response.data.role === "admin") {
          setIsAuthenticated(response.data.success);
          setUserRole(response.data.role);
          navigate("/admin/add");
        } else {
          setIsAuthenticated(response.data.success);
          setUserRole(response.data.role);
          navigate("/");
        }
      }
    } catch (error) {
      toast.error(error.response?.data.message);
      setEmail("");
      setPassword("");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AuthLayout
        title="Login"
        description="Belum memiliki akun? silahkan daftar"
        link="/register"
      >
        <Form
          id="formLogin"
          onSubmit={handleLogin}
          buttonText="Login"
          isLoading={isLoading}
        >
          <Input
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Email"
          />
          <Input
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Password"
          />
        </Form>
        <Link
          to="/forgot-password"
          className="text-orange-500 text-sm lg:text-base font-jakarta"
        >
          Lupa password?
        </Link>
      </AuthLayout>
    </>
  );
};

export default Login;
