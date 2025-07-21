import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import React, { useState,useEffect } from "react";
import axios from "axios"
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from "react-router-dom";
import { useAuth } from "./context/AuthProvider";
const ListTable = ({setSingleEmp}) => {
  const [employees,setEmployees]=useState([]);
  const {accessToken,getToken,user}=useAuth();

  useEffect(()=>{
    const fetchData=async()=>{
      //const token=await getToken()
      console.log("token",accessToken)
      console.log("user",user)
      const token = await getToken();
      const response = await axios.get("http://localhost:8080/api/allemp", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
        console.log(response.data)
        setEmployees(response.data)

    }
    fetchData()
  },[])
  const editHandler=(emp)=>{
    setSingleEmp(emp)

    console.log("eeeeeee",emp)

  }
  const deleteHandler=async(emp)=>{
     await axios.delete(`http://localhost:8080/api/delete/${emp.empid}`);
     const response=await axios.get("http://localhost:8080/api/allemp");
     //console.log(response.data)
     setEmployees(response.data)

  }
  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow style={{ background: "rgb(29,69,107)" }}>
            <TableCell style={{color:"white"}} >Name</TableCell>
            <TableCell style={{color:"white"}} >Email</TableCell>
            <TableCell style={{color:"white"}}  >Designation</TableCell>
            <TableCell style={{color:"white"}} >EmpId</TableCell>
            <TableCell style={{color:"white"}} >update</TableCell>
            <TableCell style={{color:"white"}} >delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {
          employees.map((emp)=>(
            <TableRow key={`${emp.id}`} >
            <TableCell >{emp.name}</TableCell>
            <TableCell  >{emp.email}</TableCell>
            <TableCell  >{emp.designation}</TableCell>
            <TableCell >{emp.empid}</TableCell>
            <TableCell  ><Link to="/update" ><EditIcon onClick={()=>editHandler(emp)} /></Link></TableCell>
            <TableCell  ><DeleteIcon onClick={()=>{deleteHandler(emp)}} /></TableCell>
            </TableRow>
          ))
        }
  
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ListTable;
