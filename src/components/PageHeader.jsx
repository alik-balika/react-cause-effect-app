import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";

const PageHeader = () => {
  return (
    <AppBar position="static" color="primary">
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{
            flexGrow: 1,
            textAlign: {
              xs: "center",
              md: "left",
            },
          }}
        >
          Cause & Effect
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default PageHeader;
