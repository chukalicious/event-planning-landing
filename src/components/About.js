import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";
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
          backgroundColor: "#fef3e7",
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='84' height='48' viewBox='0 0 84 48' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h12v6H0V0zm28 8h12v6H28V8zm14-8h12v6H42V0zm14 0h12v6H56V0zm0 8h12v6H56V8zM42 8h12v6H42V8zm0 16h12v6H42v-6zm14-8h12v6H56v-6zm14 0h12v6H70v-6zm0-16h12v6H70V0zM28 32h12v6H28v-6zM14 16h12v6H14v-6zM0 24h12v6H0v-6zm0 8h12v6H0v-6zm14 0h12v6H14v-6zm14 8h12v6H28v-6zm-14 0h12v6H14v-6zm28 0h12v6H42v-6zm14-8h12v6H56v-6zm0-8h12v6H56v-6zm14 8h12v6H70v-6zm0 8h12v6H70v-6zM14 24h12v6H14v-6zm14-8h12v6H28v-6zM14 8h12v6H14V8zM0 8h12v6H0V8z' fill='%23e8ebed' fill-opacity='0.4' fill-rule='evenodd'/%3E%3C/svg%3E")`,
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
          }}
        >
          We are an event planner in San Francisco, CA
        </Typography>
        <Typography sx={{ p: ".5rem .75rem", fontSize: "1.15rem", mb: "1rem" }}>
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
      <Box
        sx={{
          width: "100%",
          // backgroundColor: "#2e424f",
          height: "45%",
          border: "solid red 3px",
        }}
      >
        what is this?{" "}
      </Box>
    </Box>
  );
};

export default About;
