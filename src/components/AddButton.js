import React from "react";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";
const AddButton = () => {
  return (
    <Box>
      <Link to="/add">
        <Button
          style={{
            padding: "5px",
            color: "black",
            marginButtom: "10px",
          }}
        >
          Add New Employee
        </Button>
      </Link>
    </Box>
  );
};

export default AddButton;
