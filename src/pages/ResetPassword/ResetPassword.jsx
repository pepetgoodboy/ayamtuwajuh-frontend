import React, { useContext, useState } from "react";
import AuthLayout from "../../layouts/AuthLayout/AuthLayout";
import Input from "../../components/Input/Input";
import Form from "../../components/Form/Form";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { StoreContext } from "../../context/StoreContext";

const ResetPassword = () => {
  const { url } = useContext(StoreContext);
  const { id } = useParams();
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const handleResetPassword = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await axios.patch(
        `${url}/api/user/reset-password/${id}`,
        {
          password: password,
        }
      );
      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/login");
      } else {
        toast.error(response.data.message);
        setPassword("");
        setConfirmPassword("");
      }
    } catch (error) {
      toast.error(error.response.data.message);
      setPassword("");
      setConfirmPassword("");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      <AuthLayout
        title="Reset Password"
        description="Sudah memilik akun? silahkan login"
        link="/login"
      >
        <Form
          onSubmit={handleResetPassword}
          buttonText="Reset Password"
          isLoading={isLoading}
        >
          <Input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Masukkan Password Baru"
          />
          <Input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            type="password"
            placeholder="Konfirmasi Password Baru"
          />
        </Form>
      </AuthLayout>
    </>
  );
};

export default ResetPassword;
