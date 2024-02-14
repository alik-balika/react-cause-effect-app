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
  const [hoveredName, setHoveredName] = useState(null);

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
            sx={{
              borderRight: "1px solid rgba(0, 0, 0, 0.12)",
              background: person.name === selectedPerson?.name ? "yellow" : "",
              border: person.name === hoveredName ? "3px solid red" : "",
            }}
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
      {!isSmallScreen && selectedPerson ? (
        <div
          style={{
            position: "fixed",
            top: "50%",
            right: "10%",
            transform: "translateY(-50%)",
            width: "60%",
          }}
        >
          <Box sx={boxStyle}>
            <Typography
              variant="h4"
              onMouseOver={() => setHoveredName(selectedPerson.name)}
              onMouseLeave={() => setHoveredName(null)}
            >
              {selectedPerson.name}
            </Typography>
            <Typography variant="h5">{selectedPerson.birthday}</Typography>
            <Typography variant="h6">{selectedPerson.phoneNumber}</Typography>
            <Typography variant="h6" sx={{ marginTop: "10px" }}>
              {selectedPerson.address}
            </Typography>
          </Box>
        </div>
      ) : (
        !isSmallScreen && (
          <p
            style={{ display: "flex", alignItems: "center", margin: "0 auto" }}
          >
            Please select a name in the list :D
          </p>
        )
      )}
    </Box>
  );
};

export default PageContent;
