import React, { useState } from "react";
import { Box, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import axios from "axios";
const UpdateEmp = ({singleEmp}) => {
    console.log(singleEmp)
  const [emp, setEmp] = useState({
    name:singleEmp.name,
    email:singleEmp.email,
    designation:singleEmp.designation,
    empid:singleEmp.empid
  });

const navigate=useNavigate()
  const inputHandler = (e) => {
    setEmp({ ...emp, [e.target.name]: e.target.value });
  };
  const submitHandler = async() => {
    console.log(singleEmp.empid)
    await axios.patch(`https://my-backend-staging-a6e4d7bza5areyb6.canadacentral-01.azurewebsites.net/api/update/${singleEmp.empid}`,emp)
    navigate("/")
    console.log(emp);
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
        value={emp.name}
      />
      <TextField
        label="Email"
        name="email"
        variant="outlined"
        style={{ margin: "10px" }}
        onChange={inputHandler}
        value={emp.email}
      />
      <TextField
        label="Designation"
        name="designation"
        variant="outlined"
        style={{ margin: "10px" }}
        onChange={inputHandler}
        value={emp.designation}
      />
      <TextField
        label="EmpId"
        name="empid"
        variant="outlined"
        style={{ margin: "10px" }}
        onChange={inputHandler}
        value={emp.empid}
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

export default UpdateEmp;
