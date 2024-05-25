import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TrendingFlatIcon from "@mui/icons-material/TrendingFlat";
import "../Css/login.css";

import {
  Button,
  FilledInput,
  IconButton,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const LoginModel = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        maxHeight: "100%",
      }}
    >
      <ToastContainer/>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          width: "100%",
          maxWidth: "100%",
        }}
      >
        <div>
          <h1>Hello,</h1>
          <h1>Welcome to Recycling</h1>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Box
            component="form"
            sx={{
              "& > :not(style)": { m: 1, width: "300px" },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField id="filled-basic" label="Email" variant="filled" />
            <FormControl sx={{ m: 1, width: "300px" }} variant="filled">
              <InputLabel htmlFor="filled-adornment-password">
                Password
              </InputLabel>
              <FilledInput
                id="filled-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
          </Box>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
              marginLeft: "50%",
              marginTop: "20%",
            }}
          >
            <p
              style={{
                fontSize: "16px",
              }}
              className="log-container-sign"
              onClick={
                ()=>{
                  navigate("/sign-up")
                }
              }
            >
              Đăng ký tài khoản
            </p>
            <Button variant="contained"
            onClick={()=>{
              toast.success("Đăng nhập thành công")
              setTimeout(() => {
                navigate("/home")
              }, 2000);
            }}
            >
              <TrendingFlatIcon fontSize="large" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModel;
