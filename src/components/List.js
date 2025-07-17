import React from "react";
import ListTable from "./ListTable";
import { Box } from "@mui/material";
import AddButton from "./AddButton";
const List = ({setSingleEmp}) => {
  return (
    <Box
      style={{
        marginTop: "6%",
        marginLeft: "5%",
        marginRight: "5%",
        width: "90%",
      }}
    >
    <AddButton/>
      <ListTable setSingleEmp={setSingleEmp} />
    </Box>
  );
};

export default List;
