import React from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import {Stack} from "@mui/material";
import {Directions} from "@mui/icons-material";
import HeaderIcon from "../../assests/logo.png"
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate=useNavigate()

const LoginHandler= ()=>{
navigate("login-page")
}

  return (
    <div className="AppHeader">
    <div className="logo">
      <img src={HeaderIcon}  />
    </div>
      <div className="HeaderContent">
        <Stack direction="row" alignItems="center" spacing={1}>
          <AccountCircleIcon sx={{fontSize: "50px", color: "white"}} />
          <span  style={{cursor:"pointer"}} onClick={LoginHandler}>Login</span>
        </Stack>
      </div>
    </div>
  );
}
export default Header;
