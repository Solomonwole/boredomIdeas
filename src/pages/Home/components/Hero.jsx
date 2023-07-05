import { Box, Typography, Container, Button } from "@mui/material";
import React from "react";
import { useTheme } from "@mui/material/styles";
import BtnB from "../../../assets/btn.png";
import HeroImage from "../../../assets/heroimage.png";
import UserModal from "../../../components/UserModal";

function Hero() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  return (
    <Box sx={{ background: theme.palette.primary.main }}>
      <Container maxWidth="lg">
        <Box
          sx={{
            background: theme.palette.primary.main,
            // height: "100vh",
            width: "100%",
            paddingTop: "170px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography
            variant="h1"
            color="textPrimary.main"
            align="center"
            width={{ sm: "50%" }}
          >
            Discover the Best Fun and Exciting Activity Ideas
          </Typography>

          <Typography
            variant="body1"
            color="textSecondary.main"
            paragraph
            width={{ sm: "30%" }}
            align="center"
            mt={2}
          >
            Never be Bored Again! Find Your Next Fun Adventure with Our Ultimate
            List of Exciting Activities. Indulge in indoor or outdoor thrills,
            romantic escapes, or daring escapades. Discover the best activities
            and have a blast!
          </Typography>

          <Box position="relative" mt={4}>
            <img
              src={BtnB}
              alt=""
              style={{
                position: "absolute",
                marginTop: "-20px",
                marginLeft: "-20px",
              }}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={() => {
                setOpen(true);
              }}
            >
              Get Started
            </Button>
          </Box>

          {/* Desktop  */}
          <Box
            sx={{
              width: "100%",
              paddingTop: "100px",
              display: { xs: "none", sm: "flex" },
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "-100px",
            }}
          >
            <img
              src={HeroImage}
              alt=""
              style={{
                width: "50%",
                boxShadow: "2px 2px 63px 6px rgba(6, 24, 64, 0.93)",
                webkitBoxShadow: "2px 2px 63px 6px rgba(6, 24, 64, 0.93)",
                mozBoxShadow: "2px 2px 63px 6px rgba(6, 24, 64, 0.93)",
              }}
            />
          </Box>
          {/* Mobile  */}
          <Box
            sx={{
              width: "100%",
              paddingTop: "100px",
              display: { xs: "flex", sm: "none" },
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "-100px",
            }}
          >
            <img
              src={HeroImage}
              alt=""
              style={{
                width: "80%",
                boxShadow: "2px 2px 63px 6px rgba(6, 24, 64, 0.93)",
                webkitBoxShadow: "2px 2px 63px 6px rgba(6, 24, 64, 0.93)",
                mozBoxShadow: "2px 2px 63px 6px rgba(6, 24, 64, 0.93)",
              }}
            />
          </Box>
        </Box>
      </Container>
      <UserModal open={open} setOpen={setOpen} />
    </Box>
  );
}

export default Hero;
