import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
const Hero = () => {
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
            backgroundPosition: "left",
            backgroundColor: "primary.main",
            width: "80%",
            height: "224%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              ml: "15%",
            }}
          >
            <Typography
              variant="h1"
              mt="15%"
              sx={{
                color: "primary.contrast",
                fontStyle: "italic",
                fontWeight: "bold",
              }}
            >
              Event Planner
            </Typography>
            <Typography
              variant="h2"
              sx={{
                mt: "3rem",
                fontSize: "1.5rem",
                fontWeight: "bold",
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
    </Box>
  );
};

export default Hero;
