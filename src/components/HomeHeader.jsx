import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  Stack,
  Avatar,
  Container,
} from "@mui/material";
import React, { useContext, useState } from "react";
import { Logo } from "./assets";
import { useTheme } from "@mui/material/styles";
import userContext from "../context/userContext";
import { Link } from "react-router-dom";
import UserModal from "./UserModal";

function HeaderHeader() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  // const [menu, setMenu] = useState(false);

  const { userName } = useContext(userContext);
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="fixed">
          <Container>
            <Toolbar
              sx={{
                background: theme.palette.primary.main,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "10px",
              }}
            >
              <Box>
                <Link to="/">
                  <Logo />
                </Link>
              </Box>

              {userName !== "" ? (
                <Box>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Typography
                      variant="body1"
                      color={theme.palette.textPrimary.main}
                      sx={{
                        textTransform: "capitalize",
                      }}
                    >
                      {userName}
                    </Typography>
                    <Avatar></Avatar>
                  </Stack>
                </Box>
              ) : (
                <Button
                  variant="contained"
                  sx={{
                    display: { xs: "none", sm: "flex" },
                    boxShadow: "none",
                    webkitBoxShadow: "none",
                    mozBoxShadow: "none",
                  }}
                  onClick={() => {
                    setOpen(true);
                  }}
                >
                  Get Started
                </Button>
              )}
            </Toolbar>
          </Container>
        </AppBar>
      </Box>
      <UserModal open={open} setOpen={setOpen} />
    </>
  );
}

export default HeaderHeader;
