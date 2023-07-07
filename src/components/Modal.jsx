import React from "react";
import styled from "styled-components";
import { IoCloseSharp } from "react-icons/io5";
import {
  Backdrop,
  Box,
  Button,
  Fade,
  IconButton,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import theme from "../mui/theme";
import { AiOutlineClose } from "react-icons/ai";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#F4F4F4",
  border: "none",
  boxShadow: 24,
  borderRadius: "20px",
  p: 4,
};

function VerifyModal({ open, closeModal, text, title, content }) {
  const handleClose = () => closeModal(false);
  return (
    <>
      <Modal
        open={open}
        
        closeAfterTransition
        slots={{ backdrop: Backdrop }}
        slotProps={{
          backdrop: {
            timeout: 500,
          },
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Stack
              direction="row"
              justifyContent="space-between"
              alignItems="center"
            >
              <Typography variant="h2" component="h2">
                {title}
              </Typography>

              <IconButton onClick={handleClose}>
                <AiOutlineClose color={theme.palette.primary.main} />
              </IconButton>
            </Stack>

            <Box
              mt={4}
              sx={{
                width: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Typography variant="body1" color="initial">
                {text}
              </Typography>
              <Typography variant="body1" color="initial">
                {content}
              </Typography>
            </Box>
          </Box>
        </Fade>
      </Modal>
    </>
  );
}

export default VerifyModal;
