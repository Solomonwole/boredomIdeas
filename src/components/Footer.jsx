import {
  Box,
  Container,
  Divider,
  Grid,
  Stack,
  Typography,
  IconButton,
} from "@mui/material";
import React from "react";
import theme from "../mui/theme";
import { LogoBlack } from "./assets";
import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

function Footer() {
  return (
    <Box mt={30} mb={10}>
      <Divider
        sx={{
          marginBottom: "40px",
        }}
      />
      <Container maxWidth="lg">
        <Grid
          container
          spacing={5}
          sx={{ width: "100%", justifyContent: "center" }}
        >
          <Grid item xs={12} sm={6} md={4}>
            <Box mb={1}>
              <LogoBlack />
            </Box>
            <ul>
              <li style={listStyle}>
                A fun boredom app for everyone to keep themeselves occupied.
              </li>
            </ul>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color={theme.palette.primary.main}>
              Products
            </Typography>
            <ul>
              <li style={listStyle}>Boredom Ideas</li>
              <li style={listStyle}>Quiz App</li>
              <li style={listStyle}>Fashion Store</li>
              <li style={listStyle}>Real Estate</li>
            </ul>
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <Typography variant="h6" color={theme.palette.primary.main}>
              Pages
            </Typography>
            <ul>
              <a href="/#">
                <li style={listStyle}>Home</li>
              </a>
              <a href="/#">
                <li style={listStyle}>About</li>
              </a>
              <a href="tel:+2349017356820">
                <li style={listStyle}>Build a Website</li>
              </a>
              <a href="tel:+2349017356820">
                <li style={listStyle}>Help Center</li>
              </a>
            </ul>
          </Grid>

          <Grid item xs={12} sm={6} md={2}>
            <Typography variant="h6" color={theme.palette.primary.main}>
              Socials
            </Typography>
            <Stack direction="row">
              <IconButton>
                <BsFacebook color={theme.palette.secondary.main} />
              </IconButton>
              <IconButton>
                <BsTwitter color={theme.palette.secondary.main} />
              </IconButton>
              <IconButton>
                <BsInstagram color={theme.palette.secondary.main} />
              </IconButton>
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;

const listStyle = {
  listStyle: "none",
  color: theme.palette.textSecondary.dark,
};
