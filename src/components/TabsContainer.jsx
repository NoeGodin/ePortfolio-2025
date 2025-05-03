import React from "react";
import { Paper } from "@mui/material";
import { styled } from "@mui/material/styles";

const TabsContainer = styled(Paper)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  backgroundColor: "rgba(32, 32, 32, 0.7)",
  borderRadius: 12,
  padding: theme.spacing(1.5),
  marginBottom: theme.spacing(5),
  width: "fit-content",
  margin: "0 auto",
}));

export default TabsContainer;
