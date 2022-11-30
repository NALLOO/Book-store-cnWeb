import React, { useState } from "react";
import Box from "@mui/material/Box";
import {
  TextField,
  InputLabel,
  FormControl,
  Typography,
  Button,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputAdornment from "@mui/material/InputAdornment";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

const initalValue = {
  email: "",
  password: "",
  showPassword: false,
};

function Login() {
  const [value, setValue] = useState(initalValue);
  const [loading, setLoading] = useState(false);
  const handleClickShowPassword = () => {
    setValue({
      ...value,
      showPassword: !value.showPassword,
    });
  };
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
      className="login-container"
      style={{
        backgroundColor: "#d1d1d1",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        className="login-form-container"
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
            Đăng nhập
          </Typography>
          <TextField
            required
            label="Email"
            placeholder="Hãy nhập email..."
            onChange={handleChange("email")}
          ></TextField>

          <FormControl sx={{ m: 0, width: "100%" }} variant="outlined">
            <InputLabel htmlFor="outlined-adornment-password">
              Password
            </InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              type={value.showPassword ? "text" : "password"}
              placeholder="Hãy nhập password"
              value={value.password}
              required
              onChange={handleChange("password")}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    edge="end"
                  >
                    {value.showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="Password"
            />
          </FormControl>
          <Button
            variant="contained"
            disabled={loading}
            onClick={handleSubmit}
            style={{
              backgroundColor: "#075fed",
              color: "#fff",
              borderRadius: "100px",
              height: "56px",
              fontWeight: "500",
            }}
          >
            Đăng nhập
          </Button>
        </Box>
      </div>
    </div>
  );
}

export default Login;
