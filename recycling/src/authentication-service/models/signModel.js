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

  const [email, setEmail] = useState(null);
  const [name, setName] = useState(null);
  const [address, setAddress] = useState(null);
  const [password, setPassword] = useState(null);

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
          <TextField
            id="filled-basic"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            variant="filled"
          />
        </Box>
      </div>

      <div>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "300px" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="filled-basic"
            label="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            variant="filled"
          />
        </Box>
      </div>

      <div>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "300px" },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="filled-basic"
            label="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            variant="filled"
          />
        </Box>
      </div>

      <div>
        <FormControl sx={{ m: 1, width: "300px" }} variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
          <FilledInput
            id="filled-adornment-password"
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </div>

      <div
        style={{
          marginTop: "20px",
        }}
      >
        <Button
          variant="contained"
          onClick={() => {
            try {
               fetch("http://localhost:3007/signup", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({
                  email: email,
                  name: name,
                  address: address,
                  password: password,
                  role: "",
                }),
              });
              toast.success("Đăng ký thành công !!");
              setTimeout(() => {
                navigate("/");
              }, 2000);
            } catch (error) {
             toast.error("Lỗi không thể đăng ký")
            }
          }}
        >
          Đăng ký
        </Button>
      </div>
    </div>
  );
}

export default SignModel;
