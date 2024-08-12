import React, { useContext, useState } from "react";
import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import Form from "../../components/Form/Form";
import Input from "../../components/Input/Input";
import axios from "axios";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const { url } = useContext(StoreContext);

  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.post(`${url}/api/user/forgot-password`, {
        email: email,
      });
      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/login");
      } else {
        toast.error(response.data.message);
        setEmail("");
      }
    } catch (error) {
      toast.error(error.response.data.message);
      setEmail("");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AuthLayout
        title="Lupa Password"
        description="Sudah memilik akun? silahkan login"
        link="/login"
      >
        <Form
          onSubmit={handleForgotPassword}
          buttonText="Reset Password"
          isLoading={isLoading}
        >
          <Input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            placeholder="Masukkan Email"
          />
        </Form>
      </AuthLayout>
    </>
  );
};

export default ForgotPassword;
