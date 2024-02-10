import React from "react";
import PageHeader from "./components/PageHeader";
import PageContent from "./components/PageContent";

const App = () => {
  return (
    <div>
      <PageHeader />
      <PageContent />
    </div>
  );
};

export default App;

// import React from "react";
// import { Box } from "@mui/material";

// const App = () => {
//   return (
//     <Box
//       sx={{
//         height: "300px",
//         width: {
//           xs: 100,
//           sm: 200,
//           md: 300,
//           lg: 400,
//           xl: 500,
//         },
//         bgcolor: "primary.main",
//         margin: "20px",
//       }}
//     ></Box>
//   );
// };

// export default App;
