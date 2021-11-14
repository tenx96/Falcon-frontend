import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
  Box,
  Button,
  TextField,
  FormControl,
  InputLabel,
  FilledInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { loginAsAdmin } from "api/authApi";
import { JWT_EXPIRY_LOCALE } from "config";
import { JWT_EXPIRY_MS } from "config";
import { JWT_KEY } from "config";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { updateAlert } from "store/alert";
import { validateEmail } from "utils/validator";
import { ROUTE_ADMIN_HOME } from "../home";

import "../style.common.css";
export const ROUTE_ADMIN_LOGIN = "/admin/login";
function AdminLogin() {
  const [email, setEmail] = useState({
    value: "",
    valid: false,
  });
  const [password, setPassword] = useState({
    value: "",
    valid: false,
    showPassword: false,
  });
  const dispatch = useDispatch();
  const [inProgress, setInProgress] = useState(false);
  const history = useHistory()

  const login = async (email, password) => {
    setInProgress(true);
    loginAsAdmin(email.value, password.value)
      .then((res) => {
        if (res.status == 200) {
          localStorage.setItem(JWT_KEY, res.data.token);
          const ms = Date.now() + res.data.expiriesIn;
          localStorage.setItem(JWT_EXPIRY_MS, ms);
          localStorage.setItem(
            JWT_EXPIRY_LOCALE,
            new Date(ms).toLocaleString()
          );
          dispatch(
            updateAlert({
              message: "Logged in successfully",
              title: "Admin Login",
              type: "success",
            })
          );
          setInProgress(false);
          history.push(ROUTE_ADMIN_HOME)
        }else {
          throw new Error("Error logging in")
        }
      })
      .catch((err) => {
        dispatch(
          updateAlert({
            message: "An error occured while trying to login",
            title: "Admin Login Error",
            type: "error",
          })
        );
        setInProgress(false);
      });
  };

  return (
    <div>
      <Box
        height="100vh"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        display="flex"
        width="100vw"
      >
        <TextField
          className="text-field-white-text"
          value={email.value}
          error={email.value && !email.valid}
          helperText="Enter a valid email"
          onChange={(e) => {
            setEmail({
              value: e.target.value,
              valid: validateEmail(e.target.value),
            });
          }}
          label="email"
        />

        <FormControl
          className="text-field-white-text"
          sx={{ m: 1, width: "25ch" }}
          variant="filled"
        >
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
          <FilledInput
            id="filled-adornment-password"
            type={password.showPassword ? "text" : "password"}
            error={password.value && !password.valid}
            helperText="password must be min 5 characters"
            value={password.value}
            onChange={(e) => {
              setPassword({
                value: e.target.value,
                valid: e.target.value.length > 4,
              });
            }}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={() => {
                    setPassword({
                      ...password,
                      showPassword: !password.showPassword,
                    });
                  }}
                  onMouseDown={(e) => {
                    e.preventDefault();
                  }}
                  edge="end"
                >
                  {password.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <Button
          onClick={() => {
            login(email, password);
          }}
          disabled={inProgress || !email.valid || !password.valid}
          variant="contained"
        >
          Login
        </Button>
      </Box>
    </div>
  );
}

export default AdminLogin;
