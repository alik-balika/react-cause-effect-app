import React, { useState } from "react";
import { modalStyle, people } from "../data.js";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Modal,
  Typography,
} from "@mui/material";

const PageContent = () => {
  const [open, setOpen] = useState(false);
  const [selectedPerson, setSelectedPerson] = useState(null);

  const handleOpen = (person) => {
    setSelectedPerson(person);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <>
      <List
        sx={{
          width: {
            md: "300px",
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
    </>
  );
};

export default PageContent;
