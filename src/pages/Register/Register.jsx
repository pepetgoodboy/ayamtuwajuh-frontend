import React, { useState, useContext } from "react";
import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import Input from "../../components/Input/Input";
import Form from "../../components/Form/Form";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Register = () => {
  const { url, setToken } = useContext(StoreContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(`${url}/api/user/register`, {
        name,
        email,
        password,
      });
      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/login");
      } else {
        toast.error(response.data.message);
        setName("");
        setEmail("");
        setPassword("");
      }
    } catch (error) {
      toast.error(error.response.data.message);
      setName("");
      setEmail("");
      setPassword("");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AuthLayout
        title="Register"
        description="Sudah memiliki akun? silahkan login"
        link="/login"
      >
        <Form
          id="formRegister"
          onSubmit={handleRegister}
          buttonText="Register"
          isLoading={isLoading}
        >
          <Input
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Name"
          />
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
      </AuthLayout>
    </>
  );
};

export default Register;
