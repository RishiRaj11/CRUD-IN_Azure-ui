import React, { useState } from "react";
import List from "./components/List";
import Header from "./components/Header";
import AddEmp from "./components/AddEmp";
import UpdateEmp from "./components/UpdateEmp";
import { Box, Button } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useMsal, useIsAuthenticated } from "@azure/msal-react";
import { loginRequest } from "./authConfig";
const App = () => {
  const [singleEmp, setSingleEmp] = useState({});
  const { instance } = useMsal();
  const isAuthenticated = useIsAuthenticated();
  const login = () => instance.loginRedirect(loginRequest);

  return (
    <Box>
      <Header />
      {!isAuthenticated ? (
        <Box
      style={{
        marginTop: "6%",
        marginLeft: "5%",
        marginRight: "5%",
        width: "90%",
      }}
    >
        <Button
          onClick={login}
          variant="contained"
          sx={{
            backgroundColor: "rgb(29,69,107)",
            color: "#FFFFFF",
            fontWeight: "bold",
            padding: "10px 20px",
            fontSize: "16px",
            borderRadius: "8px",
            textTransform: "none",
            display: "flex",
            alignItems: "center",
            marginTop:"30px",
            gap: 1,
            "&:hover": {
              backgroundColor: "#1A1A1A",
            },
            mt: 4,
          }}
        >
          <img
            src="/microsoft-icon.png"
            alt="Microsoft"
            width="20"
            height="20"
          />
          Login with Microsoft
        </Button>
        </Box>
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<List setSingleEmp={setSingleEmp} />} />
            <Route
              path="/update"
              element={<UpdateEmp singleEmp={singleEmp} />}
            />
            <Route path="add" element={<AddEmp />} />
          </Routes>
        </Router>
      )}

      {/* <List />
      <AddEmp />
      <UpdateEmp singleEmp={singleEmp} /> */}
    </Box>
  );
};

export default App;
