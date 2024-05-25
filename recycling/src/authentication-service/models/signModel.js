import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "../Css/login.css";

import {
  Button,
  FilledInput,
  IconButton,
  InputAdornment,
  InputLabel,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

function SignModel() {
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
        <ToastContainer />
      <div>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "300px" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="filled-basic" label="Email" variant="filled" />
        </Box>
      </div>

      <div>
        <FormControl sx={{ m: 1, width: "300px" }} variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
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
      </div>
      <div>
        <FormControl sx={{ m: 1, width: "300px" }} variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Enter the password</InputLabel>
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
      </div>

      <div style={
        {
            marginTop: "20px",
        }
      }>
        <Button variant="contained" onClick={() => {
            toast.info("Please");
            setTimeout(() => {
                navigate("/")
            }, 2000);
        }}>
          Đăng ký
        </Button>
      </div>
    </div>
  );
}

export default SignModel;
