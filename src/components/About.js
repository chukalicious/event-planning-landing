import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
import celebrate from "../assets/celebrate.svg";
import ImageListItem from "@mui/material/ImageListItem";
const About = () => {
  const theme = useTheme();
  return (
    <Box
      container
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "50vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          [theme.breakpoints.down("md")]: {
            p: "1.5rem 2.35rem",
          },
        }}
      >
        <Typography
          variable="h2"
          sx={{
            fontSize: "1.75rem",
            mt: "2rem",
            p: ".5rem .75rem",
            fontFamily: "Lora",
            fontWeight: "bold",
            lineHeight: "1.80rem",
            letterSpacing: "-.05rem",
            [theme.breakpoints.down("md")]: {
              fontSize: "2rem",
            },
          }}
        >
          We are an event planner in San Francisco, CA
        </Typography>
        <Typography
          sx={{
            p: "1rem 1.25rem",
            fontSize: "1.15rem",
            mb: "1rem",
            [theme.breakpoints.down("md")]: {
              p: "1rem 1.25rem",
            },
          }}
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac
          neque ac augue dignissim convallis. Praesent sit amet nulla quam.
          Donec tempor volutpat magna, ut dapibus dolor gravida nec. Vestibulum
          ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia
          Curae; Suspendisse eget nisi ut felis cursus interdum. Suspendisse at
          nisl eu odio bibendum faucibus.
        </Typography>
        <Typography
          sx={{
            p: " .75rem",
            textAlign: "center",
            fontSize: theme.typography.h6,
            textTransform: "uppercase",
            letterSpacing: ".5rem",
          }}
        >
          <a style={{ textDecoration: "none", color: "#F98B01" }} href="#">
            more about us
          </a>
        </Typography>
      </Box>
      <Box sx={{ minHeight: "45%" }}>
        <Box
          sx={{
            width: "100%",
            height: "50vh",
            backgroundImage: `url(${celebrate})`,
            backgroundColor: "#FDFAF6",
          }}
        >
          <Box
            sx={{
              display: "flex",
              height: "20%",
              backgroundColor: "secondary.main",
              width: "100%",
            }}
          ></Box>
          <Box>
            <ImageListItem sx={{ width: "85%", margin: "-2.5rem auto" }}>
              <img
                src={`https://live.staticflickr.com/65535/52706213318_aa24502c3b_c.jpg`}
                alt="video of one of our events"
                loading="lazy"
              />
            </ImageListItem>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default About;
