import { Grid } from "@mui/material";
import React from "react";
import { wrapperContainer } from "./container.style";

const Container = ({ children }) => {
  return <Grid sx={wrapperContainer}>{children}</Grid>;
};

export default Container;
