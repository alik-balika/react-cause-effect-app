import React, { useState } from "react";
import { boxStyle, modalStyle, people } from "../data.js";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Modal,
  Typography,
  useTheme,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const PageContent = () => {
  const [open, setOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);

  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleOpen = (person) => {
    setSelectedPerson(person);
    if (!isSmallScreen) return;
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        display: "flex",
        // alignItems: "center",
      }}
    >
      <List
        sx={{
          width: {
            md: "300px",
            xs: "100%",
          },
        }}
      >
        {people.map((person, index) => (
          <ListItem
            key={index}
            divider
            sx={{ borderRight: "1px solid rgba(0, 0, 0, 0.12)" }}
          >
            <ListItemButton
              sx={{
                textAlign: {
                  xs: "center",
                  md: "left",
                },
              }}
              onClick={() => handleOpen(person)}
            >
              <ListItemText primary={person.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Modal open={open} onClose={handleClose}>
        {selectedPerson ? (
          <Box sx={modalStyle}>
            <Typography variant="h4">{selectedPerson.name}</Typography>
            <Typography variant="h5">{selectedPerson.birthday}</Typography>
            <Typography variant="h6">{selectedPerson.phoneNumber}</Typography>
            <Typography variant="h6" sx={{ marginTop: "10px" }}>
              {selectedPerson.address}
            </Typography>
          </Box>
        ) : (
          <></>
        )}
      </Modal>
      <div
        style={{
          position: "fixed",
          top: "50%",
          right: "10%",
          transform: "translateY(-50%)",
          width: "60%",
        }}
      >
        {!isSmallScreen && selectedPerson ? (
          <Box sx={boxStyle}>
            <Typography variant="h4">{selectedPerson.name}</Typography>
            <Typography variant="h5">{selectedPerson.birthday}</Typography>
            <Typography variant="h6">{selectedPerson.phoneNumber}</Typography>
            <Typography variant="h6" sx={{ marginTop: "10px" }}>
              {selectedPerson.address}
            </Typography>
          </Box>
        ) : (
          !isSmallScreen && <p>Please select a name in the list :D</p>
        )}
      </div>
    </Box>
  );
};

export default PageContent;
