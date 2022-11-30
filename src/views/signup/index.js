import React, { useState } from "react";
import { Box, TextField, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

const initialValue = {
  name: "",
  email: "",
  password: "",
  cfPassword: "",
  phone: "",
};

function SignUp() {
  const [value, setValue] = useState(initialValue);
  const [loading, setLoading] = useState(false);

  const handleChange = (prop) => (event) => {
    setValue({
      ...value,
      [prop]: event.target.value,
    });
  };
  const handleSubmit = () => {
    setLoading(true);
  };
  return (
    <div
      className="signup-container"
      style={{
        backgroundColor: "#d1d1d1",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="signup-form-container"
        style={{
          width: "500px",
          backgroundColor: "#fff",
          padding: "24px 48px",
          borderRadius: "8px",
          boxShadow: "0 0 10px 0 #aaabbb",
        }}
      >
        <Box
          component="form"
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
          }}
          autoComplete="off"
        >
          <Typography
            variant="h2"
            style={{
              fontWeight: "700",
              fontSize: "35px",
              marginBottom: "20px",
            }}
          >
            Đăng Ký
          </Typography>
          <TextField
            required
            label="Email"
            placeholder="Hãy nhập email..."
            onChange={handleChange("email")}
          ></TextField>
          <TextField
            required
            label="Name"
            placeholder="Hãy nhập tên..."
            onChange={handleChange("name")}
          ></TextField>
          <TextField
            required
            label="Phone"
            placeholder="Hãy nhập sdt..."
            onChange={handleChange("phone")}
          ></TextField>
          <TextField
            required
            label="Password"
            placeholder="Hãy nhập mật khẩu..."
            onChange={handleChange("password")}
          ></TextField>
          <TextField
            required
            label="Confirm Pasword"
            placeholder="Hãy nhập lại mật khẩu..."
            onChange={handleChange("cfPassword")}
          ></TextField>
          <span
            style={{
              marginTop: "20px",
            }}
          >
            Bạn đã có tài khoản
            <Link
              to="/login"
              style={{
                marginLeft: "5px",
                cursor: "pointer",
                textDecoration: "underline",
                color: "#075fed",
              }}
            >
              Đăng nhập
            </Link>
          </span>
          <Button
            variant="contained"
            disabled={loading}
            onClick={handleSubmit}
            style={{
              backgroundColor: "#075fed",
              color: "#fff",
              marginTop: "20px",
              borderRadius: "100px",
              height: "56px",
              fontWeight: "500",
            }}
          >
            Đăng Ký
          </Button>
        </Box>
      </div>
    </div>
  );
}

export default SignUp;
