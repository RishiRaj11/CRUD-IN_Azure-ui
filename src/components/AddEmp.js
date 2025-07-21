import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios"
const init = {
  name: "",
  email: "",
  designation: "",
  empid: "",
};
const AddEmp = () => {
  const [emp, setEmp] = useState(init);
  const navigate=useNavigate();

  const inputHandler = (e) => {
    setEmp({ ...emp, [e.target.name]: e.target.value });
  };
  const submitHandler = async() => {
    console.log(emp);
    await axios.post("http://localhost:8080/api/addemp",emp)
    navigate("/")
    setEmp({ name: "", email: "", designation: "", empid: "" });
  };
  return (
    <Box
      style={{
        marginTop: "8%",
        marginLeft: "25%",
        marginRight: "25%",
        width: "50%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <TextField
        label="Name"
        name="name"
        variant="outlined"
        style={{ margin: "10px" }}
        onChange={inputHandler}
      />
      <TextField
        label="Email"
        name="email"
        variant="outlined"
        style={{ margin: "10px" }}
        onChange={inputHandler}
      />
      <TextField
        label="Designation"
        name="designation"
        variant="outlined"
        style={{ margin: "10px" }}
        onChange={inputHandler}
      />
      <TextField
        label="EmpId"
        name="empid"
        variant="outlined"
        style={{ margin: "10px" }}
        onChange={inputHandler}
      />
      <Button
        style={{ margin: "10px", background: "rgb(29,69,107)", color: "white" }}
        onClick={submitHandler}
      >
        Submit
      </Button>
    </Box>
  );
};

export default AddEmp;
