import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";

const Hero = () => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        height: "50vh",
        display: "flex",
      }}
    >
      <Box
        sx={{
          width: "100%",
          backgroundColor: "primary.main",
          height: "45%",
        }}
      >
        <Box
          sx={{
            backgroundImage:
              "url(https://live.staticflickr.com/65535/52705723371_a9174cd6ae_o.jpg)",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundColor: "primary.main",
            width: "90%",
            height: "200%",
            margin: "0",
            [theme.breakpoints.down("sm")]: {
              margin: "0 auto",
              width: "90%",
            },
            [theme.breakpoints.down("md")]: {
              margin: "0 auto",
              width: "90%",
            },
            [theme.breakpoints.down("lg")]: {},
          }}
        ></Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
            height: "204%",
            [theme.breakpoints.down("sm")]: {
              width: "80%",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "-20rem",
            },
            [theme.breakpoints.down("md")]: {
              width: "80%",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "-20rem",
            },
            [theme.breakpoints.up("md")]: {
              border: "3px solid red",
              marginTop: "-27rem",
            },
          }}
        >
          <Typography
            variant="h1"
            sx={{
              color: "primary.contrast",
              fontStyle: "italic",
              fontWeight: "bold",
              [theme.breakpoints.down("sm")]: {
                width: "100%",
                mt: "2rem",
                fontSize: "3rem",
                fontStyle: "normal",
                textAlign: "center",
              },
              [theme.breakpoints.down("md")]: {
                width: "100%",
                mt: "2rem",
                fontSize: "3rem",
                fontStyle: "normal",
                textAlign: "center",
              },
            }}
          >
            Event Planner
          </Typography>
          <Typography
            variant="h2"
            sx={{
              mt: "3rem",
              fontSize: "1rem",
              fontWeight: "bold",
              [theme.breakpoints.down("sm")]: {
                mt: "1rem",
                textAlign: "center",
                padding: ".5rem",
                color: "white",
                fontSize: "1.50rem",
              },
              [theme.breakpoints.down("md")]: {
                mt: "1rem",
                textAlign: "center",
                padding: ".5rem",
                color: "white",
                fontSize: "1.50rem",
              },
            }}
          >
            Let's plan your next event together!
          </Typography>
          <Button
            elevation={10}
            variant="contained"
            sx={{
              width: "13rem",
              height: "3.5rem",
              borderRadius: "2.5rem",
              mx: "auto",
              mt: "3rem",
              backgroundColor: "warning.main",
              [theme.breakpoints.down("sm")]: {
                mt: "1rem",
              },
              [theme.breakpoints.down("md")]: {
                mt: "1rem",
              },
            }}
          >
            <Typography
              fontFamily="Montserrat"
              sx={{
                letterSpacing: "0.2rem",
                fontSize: "0.8rem",
                fontWeight: "bold",
              }}
            >
              Get Started
            </Typography>
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
